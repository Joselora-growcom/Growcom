"use client";

import { useI18n } from "../i18n/LanguageProvider";

const automationIcon = (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path
          d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M19.4 15a8.2 8.2 0 0 0 .1-1l2-1.2-2-3.4-2.3.6a7.8 7.8 0 0 0-1.7-1L15.2 6h-6.4l-.3 2.6c-.6.3-1.1.6-1.7 1l-2.3-.6-2 3.4 2 1.2a8.2 8.2 0 0 0 0 2l-2 1.2 2 3.4 2.3-.6c.5.4 1.1.8 1.7 1l.3 2.6h6.4l.3-2.6c.6-.3 1.2-.6 1.7-1l2.3.6 2-3.4-2-1.2Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
);

const dataIcon = (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path
          d="M5 19V5m0 14h14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M8 16v-4m4 4V8m4 8v-6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
);

export default function ServicesSection() {
  const { t } = useI18n();
  const services = [
    { ...t.services.cards.automation, icon: automationIcon },
    { ...t.services.cards.ai, icon: "IA" as const },
    { ...t.services.cards.data, icon: dataIcon },
  ];

  return (
    <section id="services" className="relative overflow-hidden bg-[#05070d] py-20">
      <div className="dark-tech-grid pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_35%_0%,rgba(0,170,255,0.25),transparent_42%),radial-gradient(circle_at_70%_30%,rgba(44,84,255,0.18),transparent_48%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-black/40 to-black/55" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-5xl font-black tracking-tight text-white sm:text-6xl">
          {t.services.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-white/55">
          {t.services.sub}
        </p>

        <div className="mt-12 grid gap-7 md:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(26,45,78,0.55),rgba(8,11,18,0.92))] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.55)] transition-all duration-300 hover:border-[#1ea3ff]/70 hover:shadow-[0_0_0_1px_rgba(30,163,255,0.5),0_0_35px_rgba(30,163,255,0.35)] hover:brightness-110"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0a8cff] text-white shadow-[0_10px_30px_rgba(10,140,255,0.35)]">
                {typeof s.icon === "string" ? (
                  <span className="text-sm font-black tracking-[0.18em]">{s.icon}</span>
                ) : (
                  s.icon
                )}
              </div>

              <h3 className="mt-6 text-2xl font-extrabold text-white">{s.title}</h3>
              <p className="mt-4 text-sm leading-6 text-white/60">{s.description}</p>

              <ul className="mt-6 space-y-3 text-sm text-white/70">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#0aa8ff]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

