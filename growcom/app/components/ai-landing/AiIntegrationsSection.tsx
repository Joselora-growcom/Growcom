"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useI18n } from "../../i18n/LanguageProvider";
import AiReveal from "./AiReveal";

const INTEGRATION_ANGLES = [-90, -45, 0, 45, 90, 135, 180, 225] as const;

export default function AiIntegrationsSection() {
  const { t } = useI18n();
  const integ = t.landing.ai.integrations;
  const lc = t.landing.common;
  const integrations = integ.tools.map((name, i) => ({ name, angle: INTEGRATION_ANGLES[i] }));
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-24 sm:py-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(56,189,248,0.08),transparent_70%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AiReveal className="max-w-3xl">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.32em] text-cyan-300/80">
            {integ.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
            {integ.title1}{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">{integ.title2}</span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/55">{integ.sub}</p>
        </AiReveal>

        <div className="relative mx-auto mt-20 aspect-square max-w-[min(100%,520px)]">
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 400" aria-hidden>
            {integrations.map((item, i) => {
              const rad = (item.angle * Math.PI) / 180;
              const cx = 200 + Math.cos(rad) * 150;
              const cy = 200 + Math.sin(rad) * 150;
              return (
                <g key={item.name}>
                  <motion.line
                    x1="200"
                    y1="200"
                    x2={cx}
                    y2={cy}
                    stroke="rgba(56,189,248,0.25)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.8 }}
                  />
                  {!reduce ? (
                    <motion.circle
                      r="3"
                      fill="#67e8f9"
                      animate={{
                        cx: [200, cx, 200],
                        cy: [200, cy, 200],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 3.5,
                        delay: i * 0.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  ) : null}
                </g>
              );
            })}
          </svg>

          <motion.div
            className="absolute left-1/2 top-1/2 z-10 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-300/40 bg-[#071018]/95 shadow-[0_0_80px_rgba(56,189,248,0.4)] backdrop-blur-xl sm:h-36 sm:w-36"
            animate={
              reduce
                ? undefined
                : {
                    boxShadow: [
                      "0 0 40px rgba(56,189,248,0.25)",
                      "0 0 100px rgba(56,189,248,0.5)",
                      "0 0 40px rgba(56,189,248,0.25)",
                    ],
                  }
            }
            transition={{ duration: 3.5, repeat: Infinity }}
          >
            <div className="text-center">
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.28em] text-cyan-200/70">{lc.growcom}</p>
              <p className="mt-1 text-sm font-black text-white sm:text-base">{lc.aiCore}</p>
            </div>
          </motion.div>

          {!reduce ? (
            <>
              <motion.div
                className="absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/15"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-cyan-400/10"
                animate={{ rotate: -360 }}
                transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
              />
            </>
          ) : null}

          {integrations.map((item, i) => {
            const rad = (item.angle * Math.PI) / 180;
            const x = 50 + Math.cos(rad) * 42;
            const y = 50 + Math.sin(rad) * 42;
            return (
              <motion.span
                key={item.name}
                className="absolute z-20 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-white/12 bg-[#0a101c]/95 px-3.5 py-2 text-[11px] font-semibold text-white/90 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-md transition hover:border-cyan-400/40 hover:text-cyan-100 sm:px-4 sm:text-xs"
                style={{ left: `${x}%`, top: `${y}%` }}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.06, duration: 0.5 }}
                whileHover={reduce ? undefined : { scale: 1.06 }}
              >
                {item.name}
              </motion.span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
