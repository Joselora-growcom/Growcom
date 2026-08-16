"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useI18n } from "../../i18n/LanguageProvider";
import AiReveal from "../ai-landing/AiReveal";

export default function AutomationProblemSection() {
  const { t } = useI18n();
  const prob = t.landing.automation.problem;
  const lc = t.landing.common;
  const reduce = useReducedMotion();

  return (
    <section className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AiReveal className="max-w-3xl">
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
            {prob.title1}
            <span className="mt-2 block text-cyan-300">{prob.title2}</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/55">{prob.sub}</p>
        </AiReveal>

        <div className="relative mt-14">
          <div className="pointer-events-none absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_30%_40%,rgba(239,68,68,0.08),transparent_50%)]" />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {prob.items.map((p, i) => (
              <motion.div
                key={p}
                className="auto-chaos-card rounded-2xl border border-red-400/10 bg-red-950/20 p-5 backdrop-blur-sm"
                initial={{ opacity: 0, y: 12, rotate: reduce ? 0 : (i % 2 === 0 ? -0.5 : 0.5) }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={reduce ? undefined : { y: -2, borderColor: "rgba(248,113,113,0.25)" }}
              >
                <span className="text-lg text-red-400/70" aria-hidden>
                  ◆
                </span>
                <p className="mt-2 text-sm font-semibold text-white/75">{p}</p>
              </motion.div>
            ))}
          </div>

          <AiReveal className="mt-12 text-center" delay={0.15}>
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-6 py-3">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-200">{lc.growcom}</span>
              <span className="text-white/50">→</span>
              <span className="text-sm font-semibold text-cyan-100">{prob.outcome}</span>
            </div>
          </AiReveal>
        </div>
      </div>
    </section>
  );
}
