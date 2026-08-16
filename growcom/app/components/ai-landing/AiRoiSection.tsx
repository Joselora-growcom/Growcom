"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useI18n } from "../../i18n/LanguageProvider";
import AiReveal from "./AiReveal";

export default function AiRoiSection() {
  const { t } = useI18n();
  const roi = t.landing.ai.roi;
  const lc = t.landing.common;
  const metrics = roi.metrics.map((m, i) => ({ ...m, delay: i * 0.1 }));
  const reduce = useReducedMotion();

  return (
    <section className="relative py-24 sm:py-36">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AiReveal className="mb-14 text-center">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.32em] text-cyan-300/80">{lc.measurableImpact}</p>
          <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">{lc.beforeVsAfter}</h2>
        </AiReveal>

        <div className="ai-roi-split relative grid overflow-hidden rounded-[32px] border border-white/10 lg:grid-cols-2">
          <div className="relative bg-gradient-to-br from-[#140808] to-[#0a0606] p-8 sm:p-12">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(239,68,68,0.12),transparent_50%)]" />
            <p className="relative font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-red-300/90">
              {lc.before}
            </p>
            <ul className="relative mt-8 space-y-5">
              {roi.before.map((item, i) => (
                <motion.li
                  key={item}
                  className="flex items-center gap-4 text-base text-white/65 sm:text-lg"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-red-400/30 bg-red-400/10 text-sm text-red-300">
                    ×
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="relative border-t border-white/10 bg-gradient-to-br from-[#061018] to-[#03080f] p-8 sm:p-12 lg:border-l lg:border-t-0">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(56,189,248,0.15),transparent_55%)]" />
            <p className="relative font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-300/90">
              {lc.after}
            </p>
            <ul className="relative mt-8 space-y-5">
              {roi.after.map((item, i) => (
                <motion.li
                  key={item}
                  className="flex items-center gap-4 text-base text-white/90 sm:text-lg"
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan-400/35 bg-cyan-400/15 text-sm text-cyan-300">
                    ✓
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          {!reduce ? (
            <motion.div
              className="pointer-events-none absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent lg:block"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
          ) : null}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m) => (
            <motion.div
              key={m.label}
              className="ai-metric-card group rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-sm"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: m.delay, duration: 0.55 }}
              whileHover={reduce ? undefined : { y: -4 }}
            >
              <p className="text-3xl font-black tracking-tight text-cyan-300 sm:text-4xl">{m.value}</p>
              <p className="mt-2 text-sm text-white/50 transition group-hover:text-white/70">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
