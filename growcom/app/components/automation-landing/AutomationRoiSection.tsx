"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useI18n } from "../../i18n/LanguageProvider";
import AiReveal from "../ai-landing/AiReveal";

export default function AutomationRoiSection() {
  const { t } = useI18n();
  const roi = t.landing.automation.roi;
  const lc = t.landing.common;
  const reduce = useReducedMotion();

  return (
    <section className="relative py-24 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AiReveal className="mb-14 text-center">
          <h2 className="text-3xl font-black text-white sm:text-5xl">{lc.beforeVsAfter}</h2>
        </AiReveal>

        <div className="ai-roi-split relative grid overflow-hidden rounded-[32px] border border-white/10 lg:grid-cols-2">
          <div className="relative bg-gradient-to-br from-[#120a0a] to-[#080606] p-8 sm:p-12">
            <div className="pointer-events-none absolute inset-2 rounded-2xl border border-dashed border-red-400/10 opacity-60" />
            <p className="relative font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-red-300/90">{roi.beforeTag}</p>
            <ul className="relative mt-8 space-y-4">
              {roi.before.map((item, i) => (
                <motion.li
                  key={item}
                  className="flex items-center gap-3 text-white/60"
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <span className="text-red-400/80">×</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="relative border-t border-white/10 bg-gradient-to-br from-[#061018] to-[#03080f] p-8 sm:p-12 lg:border-l lg:border-t-0">
            <div className="pointer-events-none absolute inset-2 rounded-2xl border border-cyan-400/15" />
            <p className="relative font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-300/90">{roi.afterTag}</p>
            <ul className="relative mt-8 space-y-4">
              {roi.after.map((item, i) => (
                <motion.li
                  key={item}
                  className="flex items-center gap-3 text-white/90"
                  initial={{ opacity: 0, x: 8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <span className="text-cyan-400">✓</span>
                  {item}
                </motion.li>
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
