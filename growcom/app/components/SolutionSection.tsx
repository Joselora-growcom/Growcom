"use client";

import Image from "next/image";
import { useI18n } from "../i18n/LanguageProvider";

export default function SolutionSection() {
  const { t } = useI18n();
  const solutions = [
    { icon: "⚡", ...t.solution.cards.automation },
    { icon: "⎇", ...t.solution.cards.integration },
    { icon: "◍", ...t.solution.cards.data },
    { icon: "✶", ...t.solution.cards.ai },
  ];

  return (
    <section className="bg-white px-4 pb-24 pt-16 text-center sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 inline-flex rounded-full bg-[#dff9ff] px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#0c95b8]">
          {t.solution.badge}
        </div>

        <h2 className="mx-auto max-w-4xl text-3xl font-black leading-[1.1] tracking-tight text-[#0c1420] sm:text-6xl">
          {t.solution.title1}
          <br />
          {t.solution.title2Prefix}{" "}
          <span className="text-[#0696ff]">{t.solution.title2Emphasis}</span>
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-base text-[#5f6b7d] sm:text-2xl">
          {t.solution.sub}
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-[0_10px_35px_rgba(18,43,87,0.14)]">
            <Image
              src="/solution-ai-left.png"
              alt={t.solution.imgLeftAlt}
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-[0_10px_35px_rgba(18,43,87,0.14)]">
            <Image
              src="/solution-ai-right.png"
              alt={t.solution.imgRightAlt}
              fill
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {solutions.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-[#c3cfdf] bg-white p-6 text-left shadow-[0_10px_30px_rgba(18,43,87,0.08)] transition-all duration-300 hover:border-[#1ea3ff]/60 hover:shadow-[0_0_0_1px_rgba(30,163,255,0.45),0_0_34px_rgba(30,163,255,0.3)]"
            >
              <p className="text-2xl text-[#00a2d6]">{item.icon}</p>
              <h3 className="mt-3 text-[1.35rem] font-bold leading-tight text-[#101827] sm:text-[1.7rem]">{item.title}</h3>
              <p className="mt-2 text-base leading-7 text-[#5f6b7d] sm:text-lg">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
