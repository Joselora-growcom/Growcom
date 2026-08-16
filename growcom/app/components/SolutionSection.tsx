"use client";

import Link from "next/link";
import { useI18n } from "../i18n/LanguageProvider";
import ServicesOfferList from "./ServicesOfferList";

export default function SolutionSection() {
  const { t } = useI18n();

  return (
    <section id="services" className="relative border-y border-[#e2e8f0] bg-[#f4f7fb]">
      <div className="lg:grid lg:grid-cols-[minmax(0,22rem)_1fr] xl:grid-cols-[minmax(0,26rem)_1fr]">
        <aside className="border-b border-[#e2e8f0] bg-white px-6 py-12 sm:px-10 lg:sticky lg:top-20 lg:self-start lg:border-b-0 lg:border-r lg:py-16">
          <p className="inline-flex rounded-full bg-[#dff9ff] px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#0c95b8]">
            {t.solution.badge}
          </p>
          <h2 className="mt-6 text-left text-[2rem] font-black leading-[1.05] tracking-tight text-[#0c1420] sm:text-4xl xl:text-[2.65rem]">
            {t.solution.title1}
            <br />
            <span className="text-[#0696ff]">
              {t.solution.title2Prefix} {t.solution.title2Emphasis}
            </span>
          </h2>
          <p className="mt-5 text-left text-base leading-relaxed text-[#5f6b7d] sm:text-lg">{t.solution.sub}</p>

          <p className="mt-8 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-[#0c95b8]">
            {t.services.badge}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[#5f6b7d] sm:text-base">{t.services.sub}</p>

          <Link
            href="/sobre-nosotros"
            className="relative z-10 mt-8 inline-flex w-fit max-w-full items-center gap-2.5 rounded-full bg-gradient-to-r from-[#0696ff] via-[#0c95b8] to-[#06b6d4] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_36px_rgba(6,150,255,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_44px_rgba(6,150,255,0.45)] sm:mt-10 sm:px-7 sm:py-4 sm:text-base"
          >
            <span>{t.nav.aboutUs}</span>
            <span
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/25"
              aria-hidden
            >
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 10h12M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        </aside>

        <div className="relative overflow-hidden bg-[#05070d] px-4 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14 xl:px-14">
          <ServicesOfferList />
        </div>
      </div>
    </section>
  );
}
