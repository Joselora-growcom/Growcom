"use client";

import { useI18n } from "../i18n/LanguageProvider";

const icons = [
  // Flecha de crecimiento
  (
    <svg key="growth" viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path d="M4 11 8.5 6.5h11v11L15 22V11H4Z" fill="currentColor" />
    </svg>
  ),
  // Reloj
  (
    <svg key="time" viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 8v4l2.5 1.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  // Diana
  (
    <svg key="target" viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
      <path
        d="M18 6l2-2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  // Infinito
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
    <section className="bg-white px-4 pb-24 pt-16 text-center sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-4xl font-black leading-[1.1] tracking-tight text-[#050816] sm:text-5xl md:text-6xl">
          {t.results.title1}
          <br />
          <span className="text-[#0b8cff]">{t.results.title2}</span>
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-lg text-[#5f6b7d] sm:text-xl">
          {t.results.sub}
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {results.map((item, index) => (
            <article
              key={item.label}
              className="group relative overflow-hidden rounded-2xl border border-[#e5edf8] bg-white px-7 py-8 text-center shadow-[0_18px_50px_rgba(15,35,75,0.09)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_28px_75px_rgba(15,35,75,0.14)]"
            >
              <div className="pointer-events-none absolute -inset-16 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(11,140,255,0.28),transparent_55%)]" />
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition-colors duration-300 group-hover:ring-[#0b8cff]/40" />

              <div className="mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0a8cff] text-white shadow-[0_12px_30px_rgba(10,140,255,0.4)]">
                <span className="[&_svg]:h-8 [&_svg]:w-8" aria-hidden="true">
                  {icons[index]}
                </span>
              </div>

              <p className="text-5xl font-black tracking-tight text-[#0b8cff]">{item.value}</p>
              <p className="mt-2 text-base font-bold text-[#111827]">{item.label}</p>
              <p className="mt-2 text-sm text-[#6b7280]">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

