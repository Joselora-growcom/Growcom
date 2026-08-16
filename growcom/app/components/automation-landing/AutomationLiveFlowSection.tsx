"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { useI18n } from "../../i18n/LanguageProvider";
import AiReveal from "../ai-landing/AiReveal";

export default function AutomationLiveFlowSection() {
  const { t } = useI18n();
  const flow = t.landing.automation.liveFlow;
  const flowSteps = flow.steps;
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => setActive((a) => (a + 1) % flowSteps.length), 2600);
    return () => window.clearInterval(id);
  }, [reduce, flowSteps.length]);

  return (
    <section id="como-funciona" className="relative overflow-hidden py-24 sm:py-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_50%,rgba(56,189,248,0.1),transparent_65%)]" />
      <div className="ai-section-grid pointer-events-none absolute inset-0 opacity-25" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AiReveal className="max-w-3xl">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.32em] text-cyan-300/80">
            {flow.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-5xl">
            {flow.title1}
            <span className="mt-2 block bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              {flow.title2}
            </span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/55">{flow.sub}</p>
        </AiReveal>

        <div className="relative mt-16 max-w-2xl lg:max-w-none">
          <div className="absolute left-[27px] top-4 bottom-4 w-px bg-gradient-to-b from-cyan-400/50 via-cyan-400/20 to-transparent lg:left-1/2 lg:-translate-x-px" />

          <ul className="space-y-4 lg:space-y-0">
            {flowSteps.map((step, i) => {
              const lit = i <= active;
              const current = i === active;
              const alignRight = i % 2 === 1;
              return (
                <motion.li
                  key={step.label}
                  className={[
                    "relative flex items-center gap-4 lg:grid lg:grid-cols-2 lg:gap-12",
                    alignRight ? "lg:flex-row-reverse" : "",
                  ].join(" ")}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <div
                    className={[
                      "hidden lg:block",
                      alignRight ? "lg:col-start-2" : "lg:col-start-1",
                    ].join(" ")}
                  />
                  <motion.div
                    className={[
                      "relative z-10 flex flex-1 items-center gap-4 rounded-2xl border p-4 backdrop-blur-md transition-all duration-500 sm:p-5",
                      lit ? "border-cyan-400/35 bg-cyan-400/[0.06] shadow-[0_0_40px_rgba(56,189,248,0.12)]" : "border-white/8 bg-white/[0.02]",
                      alignRight ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-2",
                    ].join(" ")}
                    animate={current && !reduce ? { scale: [1, 1.02, 1] } : undefined}
                    transition={{ duration: 1.2, repeat: Infinity }}
                  >
                    <span
                      className={[
                        "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-mono text-[10px] font-bold uppercase",
                        lit ? "bg-cyan-400/20 text-cyan-200" : "bg-white/5 text-white/35",
                      ].join(" ")}
                    >
                      {step.tag}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className={lit ? "font-semibold text-white" : "text-white/45"}>{step.label}</p>
                      {current ? (
                        <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-amber-300/90">
                          {i % 3 === 0 ? flow.processing : i % 3 === 1 ? flow.synced : flow.completed}
                        </p>
                      ) : null}
                    </div>
                    {current && !reduce ? (
                      <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,1)]" />
                    ) : null}
                  </motion.div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
