"use client";

import { FormEvent, useMemo, useState } from "react";
import Image from "next/image";
import { useI18n } from "../i18n/LanguageProvider";

type Props = {
  accessKey: string;
};

export default function DocumentacionForm({ accessKey }: Props) {
  const { lang } = useI18n();
  const [company, setCompany] = useState("");
  const [operationsLead, setOperationsLead] = useState("");
  const [email, setEmail] = useState("");
  const [automationSummary, setAutomationSummary] = useState("");
  const [keyPlatforms, setKeyPlatforms] = useState("");
  const [orderedSteps, setOrderedSteps] = useState<string[]>(["", "", ""]);
  const [documentsClarification, setDocumentsClarification] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitOk, setSubmitOk] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const copy = useMemo(
    () =>
      lang === "en"
        ? {
            title: "Upload your documentation",
            sub: "Share exact process details and documentation in just 5 minutes so we can build your custom automation demo.",
            company: "Company *",
            operationsLead: "Operations lead *",
            email: "Contact email *",
            automationSummary: "Summary *",
            automationSummaryPlaceholder:
              "In 3-5 lines, explain the objective and expected result of the automation.",
            keyPlatforms: "Key process platforms *",
            keyPlatformsPlaceholder:
              "Example: Shopify, Klaviyo, Holded, Notion, Google Sheets, WhatsApp API...",
            orderedProcess: "Process steps to automate (in order) *",
            orderedStepPlaceholder: "Describe this step briefly",
            addStep: "Add step +",
            files: "Attach key documents for the demo *",
            filesHint: "Accepted files: PDF, DOCX, XLSX, CSV, ZIP. Max 15MB per file, 30MB total.",
            ndaNote:
              "If documentation belongs to one of your clients, a signed NDA must be in place before sharing files.",
            documentsClarification: "Any clarification about the attached documents? (optional)",
            documentsClarificationPlaceholder:
              "Add any notes that help us interpret the files correctly.",
            submit: "Send documentation",
            sending: "Sending...",
            ok: "Documentation received. We will review it and prepare your demo.",
            error: "Could not send the documentation. Please try again.",
            requiredError: "Please complete all fields and attach at least one file.",
          }
        : {
            title: "Sube tu documentacion",
            sub: "Comparte en solo 5 minutos el detalle exacto del proceso y la documentacion para preparar tu demo personalizada.",
            company: "Empresa *",
            operationsLead: "Responsable de la operativa *",
            email: "Email de contacto *",
            automationSummary: "Resumen *",
            automationSummaryPlaceholder:
              "Explica en 3-5 lineas el objetivo de la automatizacion y el resultado esperado.",
            keyPlatforms: "Plataformas clave del proceso *",
            keyPlatformsPlaceholder:
              "Ejemplo: Shopify, Klaviyo, Holded, Notion, Google Sheets, WhatsApp API...",
            orderedProcess: "Pasos del proceso a automatizar (en orden) *",
            orderedStepPlaceholder: "Describe este paso brevemente",
            addStep: "Anadir paso +",
            files: "Adjuntar documentos clave para desarrollar la demo *",
            filesHint:
              "Archivos admitidos: PDF, DOCX, XLSX, CSV, ZIP. Maximo 15MB por archivo, 30MB en total.",
            ndaNote:
              "En caso de que la documentacion incluya informacion de un cliente final, sera imprescindible contar previamente con un acuerdo de confidencialidad (NDA) debidamente firmado antes de su envio.",
            documentsClarification: "Si necesitas aclarar algo sobre los documentos enviados (opcional)",
            documentsClarificationPlaceholder:
              "Escribe aqui cualquier aclaracion importante para interpretar los documentos.",
            submit: "Enviar documentacion",
            sending: "Enviando...",
            ok: "Documentacion recibida. La revisaremos y prepararemos tu demo.",
            error: "No se pudo enviar la documentacion. Intentalo de nuevo.",
            requiredError: "Por favor completa todos los campos y adjunta al menos un archivo.",
          },
    [lang]
  );

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitOk(null);
    setSubmitError(null);

    if (
      !company.trim() ||
      !operationsLead.trim() ||
      !email.trim() ||
      !automationSummary.trim() ||
      !keyPlatforms.trim() ||
      orderedSteps.some((step) => !step.trim()) ||
      files.length === 0
    ) {
      setSubmitError(copy.requiredError);
      return;
    }

    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("company", company.trim());
      formData.append("operationsLead", operationsLead.trim());
      formData.append("email", email.trim());
      formData.append("automationSummary", automationSummary.trim());
      formData.append("keyPlatforms", keyPlatforms.trim());
      formData.append(
        "orderedProcess",
        orderedSteps.map((step, index) => `${index + 1}) ${step.trim()}`).join("\n")
      );
      formData.append("documentsClarification", documentsClarification.trim());
      formData.append("lang", lang);
      formData.append("accessKey", accessKey);
      files.forEach((file) => formData.append("files", file));

      const response = await fetch("/api/intake", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        setSubmitError(data?.error || copy.error);
        return;
      }

      setSubmitOk(copy.ok);
      setCompany("");
      setOperationsLead("");
      setEmail("");
      setAutomationSummary("");
      setKeyPlatforms("");
      setOrderedSteps(["", "", ""]);
      setDocumentsClarification("");
      setFiles([]);
    } catch {
      setSubmitError(copy.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(164,210,222,0.58),rgba(236,243,247,0.95)_42%,rgba(248,250,252,1)_78%)] px-4 py-10 sm:px-6 lg:px-8">
      <section className="mx-auto w-full max-w-4xl rounded-2xl border border-[#dbe5f0] bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.12)] sm:p-8">
        <div className="mb-6 flex items-center">
          <Image
            src="/growcom-logo-navbar-black.png"
            alt="Growcom"
            width={188}
            height={32}
            className="h-[26px] w-auto sm:h-7"
            priority
          />
        </div>
        <h1 className="text-3xl font-black tracking-tight text-[#0f172a] sm:text-4xl">{copy.title}</h1>
        <p className="mt-3 text-base text-[#475569] sm:text-lg">{copy.sub}</p>
        <div className="mt-4 rounded-xl border border-[#bae6fd] bg-[#f0f9ff] px-4 py-3 text-sm text-[#0c4a6e]">
          {lang === "en"
            ? "Important: this form is for documenting an already discussed automation case. All fields are mandatory."
            : "Importante: este formulario es para documentar un caso de automatizacion ya hablado. Todos los campos son obligatorios."}
        </div>

        <form onSubmit={onSubmit} className="mt-7 space-y-5">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#0f172a]">{copy.company}</label>
              <input
                type="text"
                value={company}
                onChange={(event) => setCompany(event.target.value)}
                className="w-full rounded-xl border border-[#cfd8e3] bg-white px-4 py-3 text-base text-[#0f172a] outline-none transition focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20"
                required
                autoComplete="organization"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-[#0f172a]">{copy.operationsLead}</label>
              <input
                type="text"
                value={operationsLead}
                onChange={(event) => setOperationsLead(event.target.value)}
                className="w-full rounded-xl border border-[#cfd8e3] bg-white px-4 py-3 text-base text-[#0f172a] outline-none transition focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20"
                required
                autoComplete="name"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#0f172a]">{copy.email}</label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-xl border border-[#cfd8e3] bg-white px-4 py-3 text-base text-[#0f172a] outline-none transition focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20"
              required
              autoComplete="email"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#0f172a]">{copy.automationSummary}</label>
            <textarea
              rows={4}
              value={automationSummary}
              onChange={(event) => setAutomationSummary(event.target.value)}
              placeholder={copy.automationSummaryPlaceholder}
              className="w-full rounded-xl border border-[#cfd8e3] bg-white px-4 py-3 text-base text-[#0f172a] outline-none transition focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#0f172a]">{copy.orderedProcess}</label>
            <div className="space-y-3 rounded-xl border border-[#d6e0ea] bg-[#f8fbfd] p-4">
              {orderedSteps.map((step, index) => (
                <div key={`ordered-step-${index}`} className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[#0ea5e9]/12 text-sm font-bold text-[#0369a1]">
                    {index + 1}
                  </span>
                  <input
                    type="text"
                    value={step}
                    onChange={(event) => {
                      const next = [...orderedSteps];
                      next[index] = event.target.value;
                      setOrderedSteps(next);
                    }}
                    placeholder={copy.orderedStepPlaceholder}
                    className="w-full rounded-xl border border-[#cfd8e3] bg-white px-4 py-2.5 text-base text-[#0f172a] outline-none transition focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20"
                    required
                  />
                </div>
              ))}
              <button
                type="button"
                onClick={() => setOrderedSteps((prev) => [...prev, ""])}
                className="inline-flex rounded-lg border border-[#93c5fd] bg-[#eff6ff] px-3 py-2 text-sm font-semibold text-[#1d4ed8] transition hover:bg-[#dbeafe]"
              >
                {copy.addStep}
              </button>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#0f172a]">{copy.keyPlatforms}</label>
            <input
              type="text"
              value={keyPlatforms}
              onChange={(event) => setKeyPlatforms(event.target.value)}
              placeholder={copy.keyPlatformsPlaceholder}
              className="w-full rounded-xl border border-[#cfd8e3] bg-white px-4 py-3 text-base text-[#0f172a] outline-none transition focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#0f172a]">{copy.files}</label>
            <input
              type="file"
              multiple
              onChange={(event) => {
                const incoming = Array.from(event.target.files ?? []);
                setFiles(incoming);
              }}
              className="w-full rounded-xl border border-dashed border-[#94a3b8] bg-[#f8fafc] px-4 py-3 text-sm text-[#334155] file:mr-3 file:rounded-lg file:border-0 file:bg-black file:px-3 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-[#111]"
              required
            />
            <p className="mt-2 text-xs text-[#64748b]">{copy.filesHint}</p>
            <p className="mt-2 rounded-lg bg-[#fff7ed] px-3 py-2 text-xs font-medium text-[#9a3412]">{copy.ndaNote}</p>
            {files.length > 0 ? (
              <ul className="mt-3 space-y-1 text-xs text-[#334155]">
                {files.map((file) => (
                  <li key={`${file.name}-${file.size}`}>- {file.name}</li>
                ))}
              </ul>
            ) : null}
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#0f172a]">{copy.documentsClarification}</label>
            <textarea
              rows={3}
              value={documentsClarification}
              onChange={(event) => setDocumentsClarification(event.target.value)}
              placeholder={copy.documentsClarificationPlaceholder}
              className="w-full rounded-xl border border-[#cfd8e3] bg-white px-4 py-3 text-base text-[#0f172a] outline-none transition focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex h-12 items-center justify-center rounded-xl bg-black px-7 text-sm font-semibold text-white transition-colors hover:bg-[#111] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? copy.sending : copy.submit}
          </button>

          {submitOk ? <p className="text-sm font-semibold text-green-700">{submitOk}</p> : null}
          {submitError ? <p className="text-sm font-semibold text-red-600">{submitError}</p> : null}
        </form>
      </section>
    </main>
  );
}
