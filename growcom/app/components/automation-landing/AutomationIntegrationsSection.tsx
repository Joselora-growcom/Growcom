"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useI18n } from "../../i18n/LanguageProvider";
import AiReveal from "../ai-landing/AiReveal";

export default function AutomationIntegrationsSection() {
  const { t } = useI18n();
  const integ = t.landing.automation.integrations;
  const lc = t.landing.common;
  const tools = integ.tools;
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-24 sm:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AiReveal className="max-w-3xl">
          <h2 className="text-3xl font-black text-white sm:text-5xl">{integ.title}</h2>
          <p className="mt-5 text-lg text-white/55">{integ.sub}</p>
        </AiReveal>

        <div className="relative mx-auto mt-20 aspect-square max-w-[min(100%,540px)]">
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 400" aria-hidden>
            {tools.map((_, i) => {
              const angle = (i / tools.length) * Math.PI * 2 - Math.PI / 2;
              const cx = 200 + Math.cos(angle) * 155;
              const cy = 200 + Math.sin(angle) * 155;
              return (
                <motion.line
                  key={i}
                  x1="200"
                  y1="200"
                  x2={cx}
                  y2={cy}
                  stroke="rgba(56,189,248,0.22)"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, duration: 0.7 }}
                />
              );
            })}
          </svg>

          <motion.div
            className="absolute left-1/2 top-1/2 z-10 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-cyan-300/40 bg-[#071018]/95 px-3 text-center shadow-[0_0_80px_rgba(56,189,248,0.35)] backdrop-blur-xl sm:h-36 sm:w-36"
            animate={
              reduce
                ? undefined
                : { boxShadow: ["0 0 40px rgba(56,189,248,0.2)", "0 0 90px rgba(56,189,248,0.45)", "0 0 40px rgba(56,189,248,0.2)"] }
            }
            transition={{ duration: 3.5, repeat: Infinity }}
          >
            <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.2em] text-cyan-200/70 sm:text-[9px]">
              {lc.growcom}
            </p>
            <p className="mt-1 text-xs font-black leading-tight text-white sm:text-sm">{t.landing.automation.workflowMockup.engineTitle}</p>
          </motion.div>

          {tools.map((name, i) => {
            const angle = (i / tools.length) * Math.PI * 2 - Math.PI / 2;
            const x = 50 + Math.cos(angle) * 44;
            const y = 50 + Math.sin(angle) * 44;
            return (
              <motion.span
                key={name}
                className="absolute z-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/12 bg-[#0a101c]/95 px-3 py-2 text-[10px] font-semibold text-white/85 backdrop-blur-md sm:text-xs"
                style={{ left: `${x}%`, top: `${y}%` }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.04 }}
                whileHover={reduce ? undefined : { scale: 1.05, borderColor: "rgba(56,189,248,0.4)" }}
              >
                {name}
              </motion.span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
