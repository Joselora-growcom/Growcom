import { NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";
import nodemailer from "nodemailer";

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
  reason: string;
  message: string;
  lang?: "es" | "en";
};

function isNonEmpty(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
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

    if (
      !isNonEmpty(payload.name) ||
      !isNonEmpty(payload.email) ||
      !isNonEmpty(payload.phone) ||
      !isNonEmpty(payload.company) ||
      !isNonEmpty(payload.companyActivity) ||
      !isNonEmpty(payload.reason) ||
      !isNonEmpty(payload.message)
    ) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    const smtpHost = process.env.ZOHO_SMTP_HOST ?? "smtp.zoho.eu";
    const smtpPort = Number(process.env.ZOHO_SMTP_PORT ?? "465");
    const smtpSecure = (process.env.ZOHO_SMTP_SECURE ?? "true") === "true";
    const smtpUser = isNonEmpty(process.env.ZOHO_SMTP_USER)
      ? process.env.ZOHO_SMTP_USER
      : readEnvValueFromLocalFile("ZOHO_SMTP_USER");
    const smtpPass = isNonEmpty(process.env.ZOHO_SMTP_PASS)
      ? process.env.ZOHO_SMTP_PASS
      : readEnvValueFromLocalFile("ZOHO_SMTP_PASS");
    const fromEmail =
      (isNonEmpty(process.env.CONTACT_FROM_EMAIL) ? process.env.CONTACT_FROM_EMAIL : undefined) ??
      readEnvValueFromLocalFile("CONTACT_FROM_EMAIL") ??
      smtpUser;
    const toEmails = process.env.CONTACT_TO_EMAILS ?? defaultRecipients;

    if (!smtpUser || !smtpPass || !fromEmail) {
      const missing = [
        !smtpUser ? "ZOHO_SMTP_USER" : null,
        !smtpPass ? "ZOHO_SMTP_PASS" : null,
        !fromEmail ? "CONTACT_FROM_EMAIL" : null,
      ].filter(Boolean);
      return NextResponse.json(
        {
          ok: false,
          error: `Missing Zoho SMTP environment variables: ${missing.join(", ")}`,
        },
        { status: 500 }
      );
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

    const subject = `Nuevo contacto web - ${payload.company.trim() || payload.name.trim()}`;
    const language = payload.lang === "en" ? "EN" : "ES";

    const textBody = [
      `Idioma: ${language}`,
      `Nombre: ${payload.name.trim()}`,
      `Email: ${payload.email.trim()}`,
      `Teléfono: ${payload.phone.trim()}`,
      `Empresa: ${payload.company.trim()}`,
      `Actividad de la empresa: ${payload.companyActivity.trim()}`,
      `Motivo de contacto: ${payload.reason.trim()}`,
      "",
      "Necesidades / Contexto:",
      payload.message.trim(),
    ].join("\n");

    const htmlBody = `
      <h2>Nuevo contacto desde la web</h2>
      <p><strong>Idioma:</strong> ${language}</p>
      <p><strong>Nombre:</strong> ${payload.name.trim()}</p>
      <p><strong>Email:</strong> ${payload.email.trim()}</p>
      <p><strong>Teléfono:</strong> ${payload.phone.trim()}</p>
      <p><strong>Empresa:</strong> ${payload.company.trim()}</p>
      <p><strong>Actividad de la empresa:</strong> ${payload.companyActivity.trim()}</p>
      <p><strong>Motivo de contacto:</strong> ${payload.reason.trim()}</p>
      <p><strong>Necesidades / Contexto:</strong></p>
      <p style="white-space: pre-wrap;">${payload.message.trim()}</p>
    `;

    const info = await transporter.sendMail({
      from: fromEmail,
      to: toEmails,
      replyTo: payload.email.trim(),
      subject,
      text: textBody,
      html: htmlBody,
    });

    // Safe operational log: useful for support/debug without exposing secrets.
    console.info("[contact-api] Email sent", {
      messageId: info.messageId,
      to: toEmails,
      company: payload.company.trim(),
      lang: language,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact-api] Email send failed", {
      error: error instanceof Error ? error.message : "Unknown error",
    });
    return NextResponse.json(
      { ok: false, error: "Could not send email." },
      { status: 500 }
    );
  }
}
