"use client";

import { useEffect, useState } from "react";
import { useI18n } from "../i18n/LanguageProvider";
import AiExperiencePortal, { AiServiceCardTrigger } from "./ai-landing/AiExperiencePortal";

const automationIcon = (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
    <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" stroke="currentColor" strokeWidth="2" />
    <path
      d="M19.4 15a8.2 8.2 0 0 0 .1-1l2-1.2-2-3.4-2.3.6a8.2 8.2 0 0 0-1.7-1L15.2 6h-6.4l-.3 2.6c-.6.3-1.1.6-1.7 1l-2.3-.6-2 3.4 2 1.2a8.2 8.2 0 0 0 0 2l-2 1.2 2 3.4 2.3-.6c.5.4 1.1.8 1.7 1l.3 2.6h6.4l.3-2.6c.6-.3 1.2-.6 1.7-1l2.3.6 2-3.4-2-1.2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

const dataIcon = (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
    <path d="M5 19V5m0 14h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M8 16v-4m4 4V8m4 8v-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default function ServicesSection() {
  const { t, lang } = useI18n();
  const [aiOpen, setAiOpen] = useState(false);

  useEffect(() => {
    const openAi = () => {
      setAiOpen(true);
      document.getElementById("services")?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    window.addEventListener("open-ai-experience", openAi);
    return () => window.removeEventListener("open-ai-experience", openAi);
  }, []);

  const aiService = { ...t.services.cards.ai, icon: lang === "en" ? "AI" : "IA" };
  const otherServices = [
    { ...t.services.cards.automation, icon: automationIcon },
    { ...t.services.cards.data, icon: dataIcon },
  ];

  const allServices = [aiService, ...otherServices];

  return (
    <section id="services" className="relative overflow-x-clip bg-[#05070d] py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="dark-tech-grid absolute inset-0 opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_0%_0%,rgba(56,189,248,0.16),transparent_55%),radial-gradient(ellipse_60%_45%_at_100%_100%,rgba(139,92,246,0.12),transparent_50%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_32px_100px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:p-10 lg:p-12">
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-500/15 blur-3xl" aria-hidden />
          <div
            className="pointer-events-none absolute -bottom-20 left-1/4 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl"
            aria-hidden
          />

          <p className="relative inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-cyan-200/95 sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
            {t.services.badge}
          </p>

          <h2 className="relative mt-6 max-w-3xl text-left text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {t.services.titleLine1}{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">
              {t.services.titleHighlight}
            </span>
          </h2>

          <p className="relative mt-5 max-w-2xl text-left text-lg leading-relaxed text-white/75 sm:text-xl">
            {t.services.sub}
          </p>

          <ul className="relative mt-8 flex flex-wrap gap-2.5 sm:gap-3">
            {allServices.map((service, index) => (
              <li
                key={service.title}
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-white/85 sm:text-base"
              >
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300/90 sm:text-xs">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {service.title}
              </li>
            ))}
          </ul>
        </header>

        <div className="mt-10 divide-y divide-white/10 rounded-[24px] border border-white/10 bg-white/[0.02] px-6 sm:px-8 lg:px-10">
          {!aiOpen ? (
            <AiServiceCardTrigger
              index={0}
              icon={<span className="text-sm font-black tracking-[0.18em]">{aiService.icon}</span>}
              title={aiService.title}
              description={aiService.description}
              bullets={aiService.bullets}
              onOpen={() => setAiOpen(true)}
            />
          ) : (
            <div className="py-10 sm:py-12" aria-hidden />
          )}

          {otherServices.map((s, i) => (
            <article
              key={s.title}
              className="group grid gap-6 py-10 transition-colors hover:bg-white/[0.03] sm:grid-cols-[5rem_1fr] sm:gap-10 sm:py-12 lg:grid-cols-[6rem_1fr_auto] lg:items-start"
            >
              <span className="font-mono text-5xl font-black leading-none text-white/[0.08] transition-colors group-hover:text-cyan-400/25 sm:text-6xl">
                {String(i + 2).padStart(2, "0")}
              </span>

              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-[0_12px_32px_rgba(34,211,238,0.3)]">
                  {typeof s.icon === "string" ? (
                    <span className="text-sm font-black tracking-[0.18em]">{s.icon}</span>
                  ) : (
                    s.icon
                  )}
                </div>
                <h3 className="mt-5 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">{s.title}</h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">{s.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="rounded-full border border-white/12 bg-white/[0.06] px-3 py-1.5 text-xs text-white/75 sm:text-sm"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="hidden lg:flex lg:items-center lg:pt-2">
                <span className="text-3xl text-white/20 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-cyan-400/60">
                  →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <AiExperiencePortal open={aiOpen} onClose={() => setAiOpen(false)} />
    </section>
  );
}
