import { NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";
import nodemailer from "nodemailer";
import { appendLead } from "@/app/lib/leadsStore";

export const runtime = "nodejs";

const defaultRecipients = [
  "joseloratamayo@growcom.es",
  "aitorbernal@growcom.es",
  "manuelfranco@growcom.es",
].join(",");

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  company: string;
  companyActivity: string;
  role?: string;
  reason: string;
  message: string;
  lang?: "es" | "en";
  source?: string;
  sourceDetail?: string;
};

function isNonEmpty(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function normalizeEnv(value: string | undefined): string | undefined {
  if (typeof value !== "string") return undefined;
  const normalized = value.trim();
  return normalized.length > 0 ? normalized : undefined;
}

function readEnvValueFromLocalFile(key: string): string | undefined {
  const candidates = [
    path.join(process.cwd(), ".env.local"),
    path.join(process.cwd(), "..", ".env.local"),
  ];

  for (const filePath of candidates) {
    if (!fs.existsSync(filePath)) continue;
    const content = fs.readFileSync(filePath, "utf8");
    const line = content
      .split(/\r?\n/)
      .find((entry) => entry.startsWith(`${key}=`));
    if (!line) continue;
    const value = line.slice(key.length + 1).trim();
    if (value.length > 0) return value;
  }

  return undefined;
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as Partial<ContactPayload>;

    const hasCompanyActivity = isNonEmpty(payload.companyActivity);
    const hasRole = isNonEmpty(payload.role);

    if (
      !isNonEmpty(payload.name) ||
      !isNonEmpty(payload.email) ||
      !isNonEmpty(payload.phone) ||
      !isNonEmpty(payload.company) ||
      (!hasCompanyActivity && !hasRole) ||
      !isNonEmpty(payload.reason) ||
      !isNonEmpty(payload.message)
    ) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    const source = isNonEmpty(payload.source) ? payload.source.trim() : "Web";
    const sourceDetail = isNonEmpty(payload.sourceDetail) ? payload.sourceDetail.trim() : "N/D";
    const name = payload.name.trim();
    const email = payload.email.trim();
    const phone = payload.phone.trim();
    const company = payload.company.trim();
    const reason = payload.reason.trim();
    const message = payload.message.trim();
    const role = hasRole ? payload.role!.trim() : "No especificado";
    const companyActivity = hasCompanyActivity
      ? payload.companyActivity!.trim()
      : hasRole
        ? payload.role!.trim()
        : "No especificada";
    const language = payload.lang === "en" ? "EN" : "ES";

    // Intentamos guardar el lead primero, pero no bloqueamos el envio de email si falla persistencia.
    try {
      await appendLead({
        source,
        sourceDetail,
        name,
        email,
        phone,
        company,
        companyActivity,
        role,
        reason,
        message,
      });
    } catch (storageError) {
      console.error("[contact-api] Lead storage failed", {
        error: storageError instanceof Error ? storageError.message : "Unknown storage error",
      });
    }

    const smtpHost = normalizeEnv(process.env.ZOHO_SMTP_HOST) ?? "smtp.zoho.eu";
    const smtpPort = Number(normalizeEnv(process.env.ZOHO_SMTP_PORT) ?? "465");
    const smtpSecure = (normalizeEnv(process.env.ZOHO_SMTP_SECURE) ?? "true") === "true";
    const smtpUser = normalizeEnv(
      isNonEmpty(process.env.ZOHO_SMTP_USER)
        ? process.env.ZOHO_SMTP_USER
        : readEnvValueFromLocalFile("ZOHO_SMTP_USER")
    );
    const smtpPass = normalizeEnv(
      isNonEmpty(process.env.ZOHO_SMTP_PASS)
        ? process.env.ZOHO_SMTP_PASS
        : readEnvValueFromLocalFile("ZOHO_SMTP_PASS")
    );
    const fromEmail =
      normalizeEnv(isNonEmpty(process.env.CONTACT_FROM_EMAIL) ? process.env.CONTACT_FROM_EMAIL : undefined) ??
      normalizeEnv(readEnvValueFromLocalFile("CONTACT_FROM_EMAIL")) ??
      smtpUser;
    const toEmails = normalizeEnv(process.env.CONTACT_TO_EMAILS) ?? defaultRecipients;

    if (!smtpUser || !smtpPass || !fromEmail) {
      console.warn("[contact-api] SMTP not configured, lead stored without email send", {
        source,
        sourceDetail,
        company,
      });
      return NextResponse.json({ ok: true, mailSent: false });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const subject = `Nuevo contacto ${source} - ${company || name}`;

    const textBody = [
      `Origen: ${source}`,
      `Detalle de origen: ${sourceDetail}`,
      `Idioma: ${language}`,
      `Nombre: ${name}`,
      `Email: ${email}`,
      `Teléfono: ${phone}`,
      `Empresa: ${company}`,
      `Rol en la empresa: ${role}`,
      `Actividad de la empresa: ${companyActivity}`,
      `Motivo de contacto: ${reason}`,
      "",
      "Necesidades / Contexto:",
      message,
    ].join("\n");

    const htmlBody = `
      <h2>Nuevo contacto desde la web</h2>
      <p><strong>Origen:</strong> ${source}</p>
      <p><strong>Detalle de origen:</strong> ${sourceDetail}</p>
      <p><strong>Idioma:</strong> ${language}</p>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Teléfono:</strong> ${phone}</p>
      <p><strong>Empresa:</strong> ${company}</p>
      <p><strong>Rol en la empresa:</strong> ${role}</p>
      <p><strong>Actividad de la empresa:</strong> ${companyActivity}</p>
      <p><strong>Motivo de contacto:</strong> ${reason}</p>
      <p><strong>Necesidades / Contexto:</strong></p>
      <p style="white-space: pre-wrap;">${message}</p>
    `;

    const info = await transporter.sendMail({
      from: fromEmail,
      to: toEmails,
      replyTo: email,
      subject,
      text: textBody,
      html: htmlBody,
    });

    // Safe operational log: useful for support/debug without exposing secrets.
    console.info("[contact-api] Email sent", {
      messageId: info.messageId,
      to: toEmails,
      company,
      source,
      sourceDetail,
      lang: language,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact-api] Email send failed", {
      error: error instanceof Error ? error.message : "Unknown error",
    });
    return NextResponse.json({ ok: true, mailSent: false });
  }
}
