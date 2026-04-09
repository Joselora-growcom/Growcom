"use client";

import { useEffect, useState } from "react";
import { useI18n } from "../i18n/LanguageProvider";

export default function CalendlyModal() {
  const { lang } = useI18n();
  const [isOpen, setIsOpen] = useState(false);

  const calendlyUrl =
    lang === "en"
      ? "https://calendly.com/pepelora-growcom/new-meeting?hide_landing_page_details=1&hide_gdpr_banner=1&locale=en"
      : "https://calendly.com/pepelora-growcom/new-meeting?hide_landing_page_details=1&hide_gdpr_banner=1&locale=es";

  useEffect(() => {
    const openModal = () => setIsOpen(true);
    window.addEventListener("open-calendly-modal", openModal);
    return () => window.removeEventListener("open-calendly-modal", openModal);
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/55 p-3 sm:p-6">
      <div className="w-full max-w-5xl overflow-hidden rounded-2xl border border-white/20 bg-white shadow-[0_16px_45px_rgba(0,0,0,0.35)]">
        <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3 sm:px-5">
          <p className="text-sm font-semibold text-slate-700 sm:text-base">
            {lang === "en" ? "Book a free call" : "Reserva una llamada gratuita"}
          </p>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="rounded-lg border border-slate-300 px-3 py-1 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            {lang === "en" ? "Close" : "Cerrar"}
          </button>
        </div>
        <iframe
          title="Calendly"
          src={calendlyUrl}
          className="h-[78vh] w-full min-h-[620px]"
        />
      </div>
    </div>
  );
}
