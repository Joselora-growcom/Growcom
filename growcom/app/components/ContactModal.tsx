"use client";

import { FormEvent, useEffect, useState } from "react";
import { useI18n } from "../i18n/LanguageProvider";

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  companyActivity: string;
  reason: string;
  message: string;
};

type Step = {
  key: keyof FormState;
  label: string;
  type: "text" | "email" | "tel" | "textarea";
};

export default function ContactModal() {
  const { lang } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    company: "",
    companyActivity: "",
    reason: "",
    message: "",
  });
  const [showValidationError, setShowValidationError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const copy =
    lang === "en"
      ? {
          title: "Contact",
          sub: "Tell us briefly what you need and why you are contacting Growcom.",
          name: "Full name",
          email: "Email",
          phone: "Phone",
          company: "Company",
          companyActivity: "In one sentence, what does your company do?",
          reason: "Why are you contacting us?",
          message: "Needs / context",
          next: "Next",
          back: "Back",
          step: "Step",
          submit: "Send",
          sending: "Sending...",
          close: "Close",
          ok: "Message sent successfully. We will contact you soon.",
          error: "Could not send the message. Please try again.",
          invalidEmail: "Please enter a valid email address.",
        }
      : {
          title: "Contacto",
          sub: "Cuéntanos brevemente qué necesitas y por qué quieres contactar con Growcom.",
          name: "Nombre completo",
          email: "Email",
          phone: "Teléfono",
          company: "Empresa",
          companyActivity: "En una frase, ¿a qué se dedica tu empresa?",
          reason: "¿Por qué nos contactas?",
          message: "Necesidades / contexto",
          next: "Siguiente",
          back: "Atrás",
          step: "Paso",
          submit: "Enviar",
          sending: "Enviando...",
          close: "Cerrar",
          ok: "Mensaje enviado correctamente. Te contactaremos pronto.",
          error: "No se pudo enviar el mensaje. Inténtalo de nuevo.",
          invalidEmail: "Por favor, introduce un email válido.",
        };

  const steps: Step[] = [
    { key: "name", label: copy.name, type: "text" },
    { key: "email", label: copy.email, type: "email" },
    { key: "phone", label: copy.phone, type: "tel" },
    { key: "company", label: copy.company, type: "text" },
    { key: "companyActivity", label: copy.companyActivity, type: "text" },
    { key: "reason", label: copy.reason, type: "text" },
    { key: "message", label: copy.message, type: "textarea" },
  ];

  const activeStep = steps[currentStep];
  const isLastStep = currentStep === steps.length - 1;

  useEffect(() => {
    const openModal = () => setIsOpen(true);
    window.addEventListener("open-contact-modal", openModal);
    return () => window.removeEventListener("open-contact-modal", openModal);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const isEmailValid = (email: string) => /\S+@\S+\.\S+/.test(email);

  const validateStep = (step: Step) => {
    const value = form[step.key].trim();
    if (!value) return false;
    if (step.key === "email" && !isEmailValid(value)) {
      setSubmitError(copy.invalidEmail);
      return false;
    }
    return true;
  };

  const goNext = () => {
    setSubmitError(null);
    setSubmitMessage(null);
    if (!validateStep(activeStep)) {
      setShowValidationError(true);
      return;
    }
    setShowValidationError(false);
    if (!isLastStep) {
      setDirection(1);
      setCurrentStep((prev) => prev + 1);
    }
  };

  const goBack = () => {
    setShowValidationError(false);
    setSubmitError(null);
    if (currentStep === 0) return;
    setDirection(-1);
    setCurrentStep((prev) => prev - 1);
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValid = steps.every((step) => {
      const value = form[step.key].trim();
      if (!value) return false;
      if (step.key === "email") return isEmailValid(value);
      return true;
    });

    if (!isValid) {
      setShowValidationError(true);
      return;
    }
    setShowValidationError(false);
    setSubmitError(null);
    setSubmitMessage(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, lang }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        setSubmitError(data?.error || copy.error);
        return;
      }

      setSubmitMessage(copy.ok);
      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        companyActivity: "",
        reason: "",
        message: "",
      });
      setDirection(1);
      setCurrentStep(0);
    } catch {
      setSubmitError(copy.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/45 p-4">
        <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-[#dfe7ef] bg-white p-7 shadow-[0_16px_45px_rgba(15,23,42,0.22)] sm:p-9">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-[#0f172a] sm:text-4xl">{copy.title}</h2>
            <p className="mt-2 text-base text-[#475569] sm:text-lg">{copy.sub}</p>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="rounded-lg border border-[#d7dde7] px-3 py-2 text-sm font-semibold text-[#334155] hover:bg-[#f8fafc]"
          >
            {copy.close}
          </button>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#64748b]">
              {copy.step} {currentStep + 1}/{steps.length}
            </p>
            <div className="flex items-center gap-1.5">
              {steps.map((step, idx) => (
                <span
                  key={step.key}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === currentStep ? "w-7 bg-[#0ea5e9]" : "w-4 bg-[#cdd8e6]"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="min-h-[190px] overflow-hidden">
            <div
              key={activeStep.key}
              className={direction === 1 ? "animate-step-in-right" : "animate-step-in-left"}
            >
              <label className="mb-3 block text-lg font-semibold text-[#0f172a]">{activeStep.label}</label>
              {activeStep.type === "textarea" ? (
                <textarea
                  rows={5}
                  value={form[activeStep.key]}
                  onChange={(e) => setForm((prev) => ({ ...prev, [activeStep.key]: e.target.value }))}
                  className="w-full rounded-xl border border-[#cfd8e3] px-4 py-3 text-base outline-none transition focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20"
                />
              ) : (
                <input
                  type={activeStep.type}
                  value={form[activeStep.key]}
                  onChange={(e) => setForm((prev) => ({ ...prev, [activeStep.key]: e.target.value }))}
                  className="w-full rounded-xl border border-[#cfd8e3] px-4 py-3 text-base outline-none transition focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20"
                  autoFocus
                />
              )}
            </div>
          </div>

          <div className="flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={goBack}
              disabled={currentStep === 0 || isSubmitting}
              className="rounded-xl border border-[#d7dde7] px-5 py-3 text-sm font-semibold text-[#334155] transition hover:bg-[#f8fafc] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {copy.back}
            </button>
            {isLastStep ? (
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 rounded-xl bg-black px-6 py-3 text-base font-semibold text-white transition hover:bg-[#111] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? copy.sending : copy.submit}
                <span aria-hidden="true">→</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={goNext}
                className="inline-flex items-center gap-2 rounded-xl bg-black px-6 py-3 text-base font-semibold text-white transition hover:bg-[#111]"
              >
                {copy.next}
                <span aria-hidden="true">→</span>
              </button>
            )}
          </div>

          {showValidationError ? (
            <p className="text-sm font-medium text-red-600">
              {lang === "en"
                ? "Please fill in all fields before sending."
                : "Por favor, rellena todos los campos antes de enviar."}
            </p>
          ) : null}
          {submitMessage ? <p className="text-sm font-medium text-green-700">{submitMessage}</p> : null}
          {submitError ? <p className="text-sm font-medium text-red-600">{submitError}</p> : null}
        </form>
        </div>
      </div>

      <style jsx>{`
        .animate-step-in-right {
          animation: stepInRight 260ms ease;
        }
        .animate-step-in-left {
          animation: stepInLeft 260ms ease;
        }
        @keyframes stepInRight {
          from {
            opacity: 0;
            transform: translateX(28px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes stepInLeft {
          from {
            opacity: 0;
            transform: translateX(-28px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
