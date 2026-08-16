"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useId, useState } from "react";
import { useI18n } from "../../i18n/LanguageProvider";
import AiReveal from "./AiReveal";

export default function AiWorkflowSection() {
  const { t } = useI18n();
  const wf = t.landing.ai.workflow;
  const steps = wf.steps;
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const uid = useId().replace(/:/g, "");
  const lineGradId = `ai-flow-line-${uid}`;
  const glowFilterId = `ai-glow-${uid}`;

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => setActive((a) => (a + 1) % steps.length), 2200);
    return () => window.clearInterval(id);
  }, [reduce, steps.length]);

  return (
    <section id="workflow" className="relative overflow-hidden py-24 sm:py-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(56,189,248,0.1),transparent_60%)]" />
      <div className="ai-section-grid pointer-events-none absolute inset-0 opacity-30" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AiReveal className="text-center">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.32em] text-cyan-300/90 sm:text-xs">
            {wf.eyebrow}
          </p>
          <p className="mx-auto mt-8 max-w-3xl text-2xl font-bold leading-snug text-white sm:text-4xl">
            {wf.title1}
            <span className="mt-1 block bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              {wf.title2}
            </span>
          </p>
        </AiReveal>

        {/* Desktop: línea + nodos */}
        <div className="relative mt-16 hidden min-h-[140px] lg:block">
          <svg
            className="absolute left-[7%] right-[7%] top-[28px] h-3 w-[86%]"
            viewBox="0 0 1000 12"
            preserveAspectRatio="none"
            aria-hidden
          >
            <defs>
              <linearGradient id={lineGradId} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(56,189,248,0.15)" />
                <stop offset="50%" stopColor="rgba(56,189,248,0.85)" />
                <stop offset="100%" stopColor="rgba(56,189,248,0.15)" />
              </linearGradient>
              <filter id={glowFilterId}>
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <line x1="0" y1="6" x2="1000" y2="6" stroke={`url(#${lineGradId})`} strokeWidth="2" strokeDasharray="6 8" />
            {!reduce ? (
              <motion.circle
                r="5"
                cy="6"
                fill="#67e8f9"
                filter={`url(#${glowFilterId})`}
                animate={{ cx: [0, 1000] }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
              />
            ) : null}
          </svg>

          <div className="relative flex justify-between gap-1 pt-0">
            {steps.map((step, i) => {
              const lit = i <= active;
              const current = i === active;
              return (
                <motion.div
                  key={step.id}
                  className="ai-workflow-node group flex w-[12%] min-w-0 flex-col items-center"
                  animate={current && !reduce ? { y: [0, -6, 0] } : { y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div
                    className={[
                      "relative flex h-[56px] w-[56px] items-center justify-center rounded-2xl border backdrop-blur-xl transition-shadow duration-500",
                      lit
                        ? "border-cyan-400/50 bg-cyan-400/10 shadow-[0_0_40px_rgba(56,189,248,0.35)]"
                        : "border-white/10 bg-white/[0.03]",
                    ].join(" ")}
                    animate={
                      current && !reduce
                        ? {
                            boxShadow: [
                              "0 0 20px rgba(56,189,248,0.2)",
                              "0 0 50px rgba(56,189,248,0.5)",
                              "0 0 20px rgba(56,189,248,0.2)",
                            ],
                          }
                        : undefined
                    }
                    transition={{ duration: 1.8, repeat: Infinity }}
                  >
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-cyan-200/90">
                      {step.short}
                    </span>
                    {current ? (
                      <span className="absolute -inset-px rounded-2xl bg-gradient-to-br from-cyan-400/30 to-transparent opacity-60" />
                    ) : null}
                  </motion.div>
                  <p
                    className={[
                      "mt-4 text-center text-[11px] font-semibold leading-tight transition-colors",
                      lit ? "text-white/90" : "text-white/40",
                    ].join(" ")}
                  >
                    {step.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Móvil / tablet: lista vertical */}
        <div className="relative mt-12 space-y-3 lg:hidden">
          {steps.map((step, i) => {
            const lit = i <= active;
            const current = i === active;
            return (
              <motion.div
                key={step.id}
                className={[
                  "flex items-center gap-4 rounded-2xl border px-4 py-3 backdrop-blur-md transition-colors",
                  lit ? "border-cyan-400/35 bg-cyan-400/[0.08]" : "border-white/8 bg-white/[0.02]",
                ].join(" ")}
                animate={current && !reduce ? { x: [0, 4, 0] } : undefined}
                transition={{ duration: 0.8 }}
              >
                <span
                  className={[
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-mono text-[9px] font-bold uppercase",
                    lit ? "bg-cyan-400/20 text-cyan-200" : "bg-white/5 text-white/40",
                  ].join(" ")}
                >
                  {step.short}
                </span>
                <p className={lit ? "text-sm font-semibold text-white" : "text-sm text-white/45"}>{step.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
