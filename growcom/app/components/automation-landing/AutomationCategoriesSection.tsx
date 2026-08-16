"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useI18n } from "../../i18n/LanguageProvider";
import AiReveal from "../ai-landing/AiReveal";

export default function AutomationCategoriesSection() {
  const { t } = useI18n();
  const cat = t.landing.automation.categories;
  const categories = cat.cards;
  const reduce = useReducedMotion();

  return (
    <section id="procesos" className="relative py-24 sm:py-36">
      <div className="ai-section-grid pointer-events-none absolute inset-0 opacity-20" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AiReveal>
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.32em] text-cyan-300/80">
            {cat.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">{cat.title}</h2>
        </AiReveal>

        <div className="relative mt-16 grid gap-5 lg:grid-cols-2">
          <svg className="pointer-events-none absolute inset-0 hidden h-full w-full opacity-30 lg:block" aria-hidden>
            <path d="M50% 20% Q70% 50% 50% 80%" fill="none" stroke="rgba(56,189,248,0.3)" strokeWidth="1" strokeDasharray="4 6" />
          </svg>
          {categories.map((cat, i) => (
            <motion.article
              key={cat.title}
              className="ai-app-card group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#060b14]/90 p-7 backdrop-blur-xl sm:p-8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              whileHover={reduce ? undefined : { y: -6 }}
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl transition group-hover:bg-cyan-400/20" />
              <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-400/10 font-mono text-xs font-bold text-cyan-200">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="relative mt-5 text-xl font-bold text-white sm:text-2xl">{cat.title}</h3>
              <ul className="relative mt-5 flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/70 transition group-hover:border-cyan-400/20 group-hover:text-white/85 sm:text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
