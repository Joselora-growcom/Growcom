"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useI18n } from "../../i18n/LanguageProvider";
import AiReveal from "../ai-landing/AiReveal";

export default function AutomationBenefitsSection() {
  const { t } = useI18n();
  const ben = t.landing.automation.benefits;
  const benefits = ben.items;
  const reduce = useReducedMotion();

  return (
    <section className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AiReveal>
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.32em] text-cyan-300/80">
            {ben.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">{ben.title}</h2>
        </AiReveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <motion.article
              key={b.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/25 hover:bg-white/[0.05]"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={reduce ? undefined : { y: -4 }}
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-400/25 bg-cyan-400/10 font-mono text-xs font-bold text-cyan-200">
                {i + 1}
              </span>
              <h3 className="mt-4 text-lg font-bold text-white">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">{b.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
