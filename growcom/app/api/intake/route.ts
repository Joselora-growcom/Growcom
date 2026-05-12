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

const MAX_FILE_SIZE_BYTES = 15 * 1024 * 1024;
const MAX_TOTAL_SIZE_BYTES = 30 * 1024 * 1024;

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

function sanitizeFilename(filename: string) {
  return filename.replace(/[^\w.\-()[\] ]/g, "_");
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const company = formData.get("company");
    const operationsLead = formData.get("operationsLead");
    const email = formData.get("email");
    const automationSummary = formData.get("automationSummary");
    const keyPlatforms = formData.get("keyPlatforms");
    const orderedProcess = formData.get("orderedProcess");
    const documentsClarification = formData.get("documentsClarification");
    const lang = formData.get("lang") === "en" ? "en" : "es";
    const accessKey = formData.get("accessKey");
    const files = formData.getAll("files");

    if (
      !isNonEmpty(company) ||
      !isNonEmpty(operationsLead) ||
      !isNonEmpty(email) ||
      !isNonEmpty(automationSummary) ||
      !isNonEmpty(keyPlatforms) ||
      !isNonEmpty(orderedProcess)
    ) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    const configuredPrivateKey = process.env.INTAKE_PRIVATE_KEY;
    if (configuredPrivateKey && accessKey !== configuredPrivateKey) {
      return NextResponse.json(
        { ok: false, error: "Unauthorized request." },
        { status: 403 }
      );
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { ok: false, error: "Invalid email format." },
        { status: 400 }
      );
    }

    const validFiles = files.filter((file): file is File => file instanceof File && file.size > 0);
    if (validFiles.length === 0) {
      return NextResponse.json(
        { ok: false, error: "At least one document is required." },
        { status: 400 }
      );
    }

    let totalSize = 0;
    for (const file of validFiles) {
      totalSize += file.size;
      if (file.size > MAX_FILE_SIZE_BYTES) {
        return NextResponse.json(
          { ok: false, error: `File too large: ${file.name}` },
          { status: 400 }
        );
      }
    }

    if (totalSize > MAX_TOTAL_SIZE_BYTES) {
      return NextResponse.json(
        { ok: false, error: "Total file size exceeds the maximum allowed." },
        { status: 400 }
      );
    }

    // Guardamos primero el lead, pero no bloqueamos el email si falla persistencia.
    try {
      await appendLead({
        source: "Formulario documentación",
        sourceDetail: "Demo intake",
        name: operationsLead.trim(),
        email: email.trim(),
        phone: "No facilitado",
        company: company.trim(),
        companyActivity: keyPlatforms.trim(),
        role: "Responsable operativa",
        reason: "Solicitud documentación para demo",
        message: automationSummary.trim(),
      });
    } catch (storageError) {
      console.error("[intake-api] Lead storage failed", {
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

    const attachments = await Promise.all(
      validFiles.map(async (file) => ({
        filename: sanitizeFilename(file.name || "document"),
        content: Buffer.from(await file.arrayBuffer()),
        contentType: file.type || "application/octet-stream",
      }))
    );

    const language = lang === "en" ? "EN" : "ES";
    const subject = `${company.trim()} - Documentacion Demo`;

    const textBody = [
      `Idioma: ${language}`,
      `Empresa: ${company.trim()}`,
      `Responsable operativa: ${operationsLead.trim()}`,
      `Email de contacto: ${email.trim()}`,
      "",
      "Resumen del objetivo de automatizacion:",
      automationSummary.trim(),
      "",
      "Plataformas clave del proceso:",
      keyPlatforms.trim(),
      "",
      "Proceso a automatizar (en orden):",
      orderedProcess.trim(),
      "",
      "Aclaraciones sobre documentos (opcional):",
      isNonEmpty(documentsClarification) ? documentsClarification.trim() : "Sin aclaraciones",
      "",
      `Adjuntos: ${attachments.length}`,
    ].join("\n");

    const htmlBody = `
      <h2>Nueva solicitud de documentación para demo</h2>
      <p><strong>Idioma:</strong> ${language}</p>
      <p><strong>Empresa:</strong> ${company.trim()}</p>
      <p><strong>Responsable de la operativa:</strong> ${operationsLead.trim()}</p>
      <p><strong>Email de contacto:</strong> ${email.trim()}</p>
      <p><strong>Resumen del objetivo de automatizacion:</strong></p>
      <p style="white-space: pre-wrap;">${automationSummary.trim()}</p>
      <p><strong>Plataformas clave del proceso:</strong></p>
      <p style="white-space: pre-wrap;">${keyPlatforms.trim()}</p>
      <p><strong>Proceso a automatizar (en orden):</strong></p>
      <p style="white-space: pre-wrap;">${orderedProcess.trim()}</p>
      <p><strong>Aclaraciones sobre documentos (opcional):</strong></p>
      <p style="white-space: pre-wrap;">${
        isNonEmpty(documentsClarification) ? documentsClarification.trim() : "Sin aclaraciones"
      }</p>
      <p><strong>Archivos adjuntos:</strong> ${attachments.length}</p>
    `;

    const info = await transporter.sendMail({
      from: fromEmail,
      to: toEmails,
      replyTo: email.trim(),
      subject,
      text: textBody,
      html: htmlBody,
      attachments,
    });

    console.info("[intake-api] Intake email sent", {
      messageId: info.messageId,
      to: toEmails,
      company: company.trim(),
      files: attachments.length,
      lang: language,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[intake-api] Intake email send failed", {
      error: error instanceof Error ? error.message : "Unknown error",
    });
    return NextResponse.json({ ok: true, mailSent: false });
  }
}
