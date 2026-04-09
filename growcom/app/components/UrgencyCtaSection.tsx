"use client";

import { useI18n } from "../i18n/LanguageProvider";

export default function UrgencyCtaSection() {
  const { t } = useI18n();
  const openCalendlyModal = () => window.dispatchEvent(new Event("open-calendly-modal"));

  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(15,23,42,0.06)_0%,rgba(15,23,42,0.02)_45%,transparent_75%)]" />

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <span className="inline-flex items-center rounded-full bg-[#ffe3e5] px-4 py-1 text-xs font-bold uppercase tracking-[0.08em] text-[#a8262e]">
          {t.urgencyCta.badge}
        </span>

        <h2 className="mt-7 text-5xl font-black leading-tight tracking-tight text-[#0f172a] md:text-[4.4rem]">
          {t.urgencyCta.titleLine1}
          <br />
          <span
            className="text-[#e11d1d]"
            style={{ textShadow: "0 0 22px rgba(225, 29, 72, 0.28), 0 0 44px rgba(225, 29, 72, 0.2)" }}
          >
            {t.urgencyCta.titleHighlight}
          </span>
        </h2>

        <p className="mx-auto mt-7 max-w-4xl text-xl leading-9 text-[#4b5563] md:text-[2rem] md:leading-[1.5]">
          {t.urgencyCta.sub}
        </p>

        <button
          type="button"
          onClick={openCalendlyModal}
          className="mt-9 inline-flex items-center gap-3 rounded-xl bg-black px-9 py-4 text-xl font-semibold text-white shadow-[0_10px_25px_rgba(0,0,0,0.28)] transition-transform duration-200 hover:-translate-y-0.5"
        >
          <span aria-hidden="true">◷</span>
          {t.urgencyCta.button}
          <span aria-hidden="true">→</span>
        </button>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-base text-[#4b5563] md:text-lg">
          <span className="inline-flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#22c55e]" />
            {t.urgencyCta.bullets[0]}
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#22c55e]" />
            {t.urgencyCta.bullets[1]}
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#22c55e]" />
            {t.urgencyCta.bullets[2]}
          </span>
        </div>
      </div>
    </section>
  );
}
