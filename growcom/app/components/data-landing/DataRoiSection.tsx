"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useI18n } from "../../i18n/LanguageProvider";
import AiReveal from "../ai-landing/AiReveal";

export default function DataRoiSection() {
  const { t } = useI18n();
  const roi = t.landing.data.roi;
  const lc = t.landing.common;
  const reduce = useReducedMotion();

  return (
    <section className="relative py-24 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AiReveal className="mb-14 text-center">
          <h2 className="text-3xl font-black text-white sm:text-5xl">{lc.beforeVsAfter}</h2>
        </AiReveal>
        <div className="ai-roi-split grid overflow-hidden rounded-[32px] border border-white/10 lg:grid-cols-2">
          <div className="bg-gradient-to-br from-[#120a0a] to-[#080606] p-8 sm:p-12">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-red-300/90">{lc.before}</p>
            <ul className="mt-8 space-y-3 text-white/60">
              {roi.before.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-red-400">×</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t border-white/10 bg-gradient-to-br from-[#061018] to-[#03080f] p-8 sm:p-12 lg:border-l lg:border-t-0">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-cyan-300/90">{lc.after}</p>
            <ul className="mt-8 space-y-3 text-white/90">
              {roi.after.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-cyan-400">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {roi.metrics.map((m, i) => (
            <motion.div
              key={m.label}
              className="ai-metric-card rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={reduce ? undefined : { y: -4 }}
            >
              <p className="text-3xl font-black text-cyan-300">{m.value}</p>
              <p className="mt-2 text-sm text-white/50">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
