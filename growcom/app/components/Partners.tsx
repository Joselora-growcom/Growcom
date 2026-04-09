"use client";

import { useI18n } from "../i18n/LanguageProvider";

export default function Partners() {
  const { t } = useI18n();
  const painPoints = [
    { icon: "⚙", ...t.page2.painPoints.manual },
    { icon: "⛓", ...t.page2.painPoints.disconnected },
    { icon: "⏱", ...t.page2.painPoints.timeLoss },
    { icon: "🐢", ...t.page2.painPoints.slowDecisions },
  ];

  return (
    <section className="relative overflow-hidden border-y border-[#edf3fb] bg-white py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(225,29,72,0.14),transparent_34%),radial-gradient(circle_at_84%_78%,rgba(225,29,72,0.1),transparent_38%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl font-black tracking-tight text-[#0d1220] sm:text-5xl">
          {t.page2.familiarTitle}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-xl text-[#5f6b7d]">
          {t.page2.familiarSub}
        </p>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {painPoints.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-[#c3cfdf] bg-white p-6 text-left shadow-[0_4px_14px_rgba(14,31,75,0.04)] transition-all duration-300 hover:border-[#e11d48]/50 hover:shadow-[0_0_0_1px_rgba(225,29,72,0.35),0_0_34px_rgba(225,29,72,0.22)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff1f2] text-xl font-bold text-[#e11d48]">
                {item.icon}
              </div>
              <h3 className="mt-5 text-[1.7rem] font-bold leading-tight text-[#111827]">{item.title}</h3>
              <p className="mt-3 text-lg leading-7 text-[#5f6b7d]">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

