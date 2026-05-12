"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import Image from "next/image";

type LinkedInFormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  companyActivity: string;
  role: string;
  message: string;
};

type StepField = keyof LinkedInFormState;
type Lang = "es" | "en";

const initialFormState: LinkedInFormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  companyActivity: "",
  role: "",
  message: "",
};

export default function LinkedinLeadFormClient() {
  const [form, setForm] = useState<LinkedInFormState>(initialFormState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [step, setStep] = useState(0);
  const [lang, setLang] = useState<Lang>("es");
  const [trackingParams, setTrackingParams] = useState<{
    post: string | null;
    campaign: string | null;
    medium: string | null;
    content: string | null;
  }>({
    post: null,
    campaign: null,
    medium: null,
    content: null,
  });

  const copy = {
    es: {
      heading: "Reserva una llamada con Growcom",
      subheading: "Déjanos tus datos y te contactamos para valorar cómo automatizar y escalar tu empresa.",
      promise: "En las próximas 24h laborales te llamará uno de los Co-fundadores para una llamada con cero compromiso.",
      noReference: "Sin identificador de publicación",
      step: "Paso",
      previous: "← Anterior",
      next: "Siguiente",
      submit: "Solicitar llamada",
      sending: "Enviando...",
      success: "Gracias por enviar tu solicitud. En breve te contactaremos para coordinar la llamada.",
      errorPrefix: "No se pudo enviar:",
      reason: "Lead desde LinkedIn",
    },
    en: {
      heading: "Book a call with Growcom",
      subheading: "Share your details and we will contact you to discuss how to automate and scale your company.",
      promise: "Within the next 24h, one of our Co-founders will call you for a zero-commitment conversation.",
      noReference: "No post identifier",
      step: "Step",
      previous: "← Previous",
      next: "Next",
      submit: "Request a call",
      sending: "Sending...",
      success: "Thanks for submitting your request. We will contact you shortly to schedule the call.",
      errorPrefix: "Could not send:",
      reason: "Lead from LinkedIn",
    },
  } as const;

  const steps: Array<{
    field: StepField;
    question: Record<Lang, string>;
    placeholder: Record<Lang, string>;
    type: "text" | "email" | "tel" | "textarea";
  }> = [
    {
      field: "name",
      question: { es: "¿Cómo te llamas?", en: "What's your name?" },
      placeholder: { es: "Tu nombre completo", en: "Your full name" },
      type: "text",
    },
    {
      field: "company",
      question: { es: "¿A qué empresa perteneces?", en: "Which company are you with?" },
      placeholder: { es: "Nombre de la empresa", en: "Company name" },
      type: "text",
    },
    {
      field: "companyActivity",
      question: { es: "¿A qué se dedica vuestra empresa?", en: "What does your company do?" },
      placeholder: { es: "Descríbelo en una frase corta", en: "Describe it in one short sentence" },
      type: "text",
    },
    {
      field: "role",
      question: { es: "¿Cuál es tu rol en la empresa?", en: "What's your role in the company?" },
      placeholder: { es: "Ejemplo: CEO, COO, Director/a de Operaciones...", en: "Example: CEO, COO, Head of Operations..." },
      type: "text",
    },
    {
      field: "email",
      question: { es: "¿Cuál es tu email?", en: "What's your email?" },
      placeholder: { es: "tu@email.com", en: "you@email.com" },
      type: "email",
    },
    {
      field: "phone",
      question: { es: "¿Cuál es tu teléfono?", en: "What's your phone number?" },
      placeholder: { es: "+34 ...", en: "+1 ..." },
      type: "tel",
    },
    {
      field: "message",
      question: {
        es: "¿Qué crees que está fallando o de qué te gustaría hablar?",
        en: "What do you think is currently not working, or what would you like to discuss?",
      },
      placeholder: {
        es: "Cuéntanoslo en 2-3 líneas y preparamos la llamada.",
        en: "Tell us in 2-3 lines and we'll prepare the call.",
      },
      type: "textarea",
    },
  ];
  const isLastStep = step === steps.length - 1;
  const currentStep = steps[step];
  const currentValue = form[currentStep.field].trim();
  const canContinue = currentValue.length > 0;

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setTrackingParams({
      post: params.get("post"),
      campaign: params.get("utm_campaign"),
      medium: params.get("utm_medium"),
      content: params.get("utm_content"),
    });
  }, []);

  const sourceDetail = useMemo(() => {
    const parts = [trackingParams.post, trackingParams.campaign, trackingParams.medium, trackingParams.content].filter(
      (item) => typeof item === "string" && item.trim().length > 0
    );
    return parts.length > 0 ? parts.join(" | ") : copy[lang].noReference;
  }, [trackingParams, lang, copy]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          lang,
          reason: copy[lang].reason,
          source: "LinkedIn",
          sourceDetail,
        }),
      });

      const data = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !data.ok) {
        throw new Error(data.error || "No se pudo enviar el formulario.");
      }

      setStatus("success");
      setForm(initialFormState);
      setStep(0);
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Error desconocido");
    }
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#e6f4ff_0%,#f7fbff_45%,#ffffff_100%)] px-4 py-14 text-[#0f172a] sm:px-6 lg:px-8">
      <div className="mx-auto mb-8 flex max-w-3xl items-center justify-center">
        <Image
          src="/growcom-logo-navbar-black.png"
          alt="Growcom"
          width={230}
          height={39}
          className="h-auto w-[180px] sm:w-[210px]"
          priority
        />
      </div>

      <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-[#dfe7ef] bg-white shadow-[0_14px_40px_rgba(15,23,42,0.08)]">
        <div className="border-b border-[#e2e8f0] bg-[#f8fbff] px-7 py-7 sm:px-10">
          <div className="inline-flex items-center rounded-xl border border-black/10 bg-white p-1">
            <button
              type="button"
              onClick={() => setLang("es")}
              className={[
                "min-w-10 rounded-lg px-3 py-1 text-xs font-semibold transition-colors",
                lang === "es" ? "bg-black text-white" : "text-gray-500 hover:text-gray-700",
              ].join(" ")}
            >
              ES
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              className={[
                "min-w-10 rounded-lg px-3 py-1 text-xs font-semibold transition-colors",
                lang === "en" ? "bg-black text-white" : "text-gray-500 hover:text-gray-700",
              ].join(" ")}
            >
              EN
            </button>
          </div>
          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">{copy[lang].heading}</h1>
          <p className="mt-4 text-lg text-[#475569] sm:text-xl">{copy[lang].subheading}</p>
          <p className="mt-2 text-sm font-medium text-[#0f172a]">
            {copy[lang].promise}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 px-7 py-8 sm:px-10">
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-semibold text-[#475569]">
              <span>
                {copy[lang].step} {step + 1} / {steps.length}
              </span>
              <span>{Math.round(((step + 1) / steps.length) * 100)}%</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-[#e2e8f0]">
              <div
                className="h-full rounded-full bg-[linear-gradient(90deg,#0ea5e9,#2563eb)] transition-all duration-500 ease-out"
                style={{ width: `${((step + 1) / steps.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#dbe6f1] bg-[#f8fbff] p-4 sm:p-6">
            <div key={currentStep.field} className="px-1 transition-all duration-300 ease-out">
              <label className="mb-3 block text-xl font-extrabold tracking-tight text-[#0f172a] sm:text-2xl">
                {currentStep.question[lang]}
              </label>
              {currentStep.type === "textarea" ? (
                <textarea
                  required
                  rows={6}
                  value={form[currentStep.field]}
                  onChange={(event) => setForm((prev) => ({ ...prev, [currentStep.field]: event.target.value }))}
                  className="w-full rounded-xl border border-[#cfd8e3] bg-white px-4 py-3 text-base outline-none transition focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20"
                  placeholder={currentStep.placeholder[lang]}
                />
              ) : (
                <input
                  required
                  type={currentStep.type}
                  value={form[currentStep.field]}
                  onChange={(event) => setForm((prev) => ({ ...prev, [currentStep.field]: event.target.value }))}
                  className="w-full rounded-xl border border-[#cfd8e3] bg-white px-4 py-3 text-base outline-none transition focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20"
                  placeholder={currentStep.placeholder[lang]}
                />
              )}
            </div>
          </div>

          <div className="flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setStep((prev) => Math.max(prev - 1, 0))}
              disabled={step === 0}
              className="inline-flex items-center gap-2 rounded-xl border border-[#cbd5e1] bg-white px-5 py-3 text-sm font-semibold text-[#0f172a] transition hover:bg-[#f8fafc] disabled:cursor-not-allowed disabled:opacity-40"
            >
              {copy[lang].previous}
            </button>

            {isLastStep ? (
              <button
                type="submit"
                disabled={status === "loading" || !canContinue}
                className="inline-flex items-center gap-2 rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#111] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "loading" ? copy[lang].sending : copy[lang].submit}
                <span aria-hidden="true">→</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setStep((prev) => Math.min(prev + 1, steps.length - 1))}
                disabled={!canContinue}
                className="inline-flex items-center gap-2 rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#111] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {copy[lang].next}
                <span aria-hidden="true">→</span>
              </button>
            )}
          </div>

          {status === "success" ? (
            <p className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
              {copy[lang].success}
            </p>
          ) : null}
          {status === "error" ? (
            <p className="rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-800">
              {copy[lang].errorPrefix} {errorMessage}
            </p>
          ) : null}
        </form>
      </div>
    </main>
  );
}
