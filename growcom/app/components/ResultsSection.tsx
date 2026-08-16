"use client";

import { useI18n } from "../i18n/LanguageProvider";

const icons = [
  (
    <svg key="growth" viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path d="M4 11 8.5 6.5h11v11L15 22V11H4Z" fill="currentColor" />
    </svg>
  ),
  (
    <svg key="time" viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="2" />
      <path d="M12 8v4l2.5 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  (
    <svg key="target" viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
      <path d="M18 6l2-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg key="infinity" viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M7.5 15C9.5 15 11 12 12 12C13 12 14.5 15 16.5 15C18 15 19.5 13.8 19.5 12C19.5 10.2 18 9 16.5 9C14.5 9 13 12 12 12C11 12 9.5 9 7.5 9C6 9 4.5 10.2 4.5 12C4.5 13.8 6 15 7.5 15Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
];

export default function ResultsSection() {
  const { t } = useI18n();
  const results = t.results.cards;

  return (
    <section className="relative overflow-hidden bg-[#030712] py-14 text-white sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(34,211,238,0.06)_1px,transparent_1px)] bg-[size:48px_100%] opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 border-b border-white/10 pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="text-left">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-cyan-400/90">
              Impact
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
              {t.results.title1}{" "}
              <span className="text-[#38bdf8]">{t.results.title2}</span>
            </h2>
          </div>
          <p className="max-w-md text-left text-sm leading-relaxed text-white/55 sm:text-base">{t.results.sub}</p>
        </div>

        <div className="mt-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-white/10">
          {results.map((item, index) => (
            <article
              key={item.label}
              className="group border-b border-white/10 px-0 py-8 transition-colors hover:bg-white/[0.03] sm:px-6 lg:border-b-0 lg:py-10 lg:px-8"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300 ring-1 ring-cyan-400/25">
                {icons[index]}
              </div>
              <p className="text-4xl font-black tabular-nums tracking-tight text-white sm:text-5xl">{item.value}</p>
              <p className="mt-2 text-sm font-bold uppercase tracking-wide text-white/90">{item.label}</p>
              <p className="mt-2 text-xs leading-relaxed text-white/50 sm:text-sm">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
