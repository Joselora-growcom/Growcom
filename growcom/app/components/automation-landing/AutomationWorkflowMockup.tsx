"use client";

import { useI18n } from "../../i18n/LanguageProvider";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const STATUS_CLASS = {
  received: "border-sky-400/40 bg-sky-400/10 text-sky-200",
  processing: "border-amber-400/40 bg-amber-400/10 text-amber-200",
  synced: "border-cyan-400/40 bg-cyan-400/10 text-cyan-200",
  completed: "border-emerald-400/40 bg-emerald-400/10 text-emerald-200",
} as const;

export default function AutomationWorkflowMockup() {
  const { t } = useI18n();
  const wm = t.landing.automation.workflowMockup;
  const lc = t.landing.common;
  const steps = wm.steps;
  const statusLabels = {
    received: lc.statusReceived,
    processing: lc.statusProcessing,
    synced: lc.statusSynced,
    completed: lc.statusCompleted,
  } as const;
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => setActive((a) => (a + 1) % steps.length), 2400);
    return () => window.clearInterval(id);
  }, [reduce]);

  return (
    <motion.div
      className="relative w-full max-w-xl lg:max-w-none"
      animate={reduce ? undefined : { y: [0, -8, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="pointer-events-none absolute -inset-8 rounded-[40px] bg-gradient-to-br from-cyan-500/20 via-blue-600/10 to-sky-500/15 blur-3xl" />
      <div className="relative overflow-hidden rounded-[28px] border border-white/12 bg-[#070c14]/95 p-5 shadow-[0_48px_120px_rgba(0,0,0,0.6)] backdrop-blur-2xl sm:p-6">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-300/85">
              {wm.engineTitle}
            </p>
            <p className="mt-1 text-sm font-bold text-white">{wm.title}</p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-[10px] font-bold text-cyan-200">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
            {wm.runningBadge}
          </span>
        </div>

        <ul className="relative mt-5 space-y-0">
          {steps.map((step, i) => {
            const lit = i <= active;
            const current = i === active;
            const st = { className: STATUS_CLASS[step.status], text: statusLabels[step.status] };
            return (
              <li key={step.label} className="relative flex gap-4 pb-5 last:pb-0">
                {i < steps.length - 1 ? (
                  <span
                    className={[
                      "absolute left-[15px] top-8 h-[calc(100%-8px)] w-px",
                      lit ? "bg-gradient-to-b from-cyan-400/60 to-cyan-400/10" : "bg-white/10",
                    ].join(" ")}
                  />
                ) : null}
                <motion.span
                  className={[
                    "relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-[10px] font-bold",
                    lit ? "border-cyan-400/50 bg-cyan-400/15 text-cyan-200" : "border-white/10 bg-white/5 text-white/30",
                  ].join(" ")}
                  animate={current && !reduce ? { scale: [1, 1.12, 1] } : undefined}
                  transition={{ duration: 0.8, repeat: Infinity }}
                >
                  {i + 1}
                </motion.span>
                <div className="min-w-0 flex-1 pt-0.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className={lit ? "text-sm font-semibold text-white" : "text-sm text-white/40"}>{step.label}</p>
                    <AnimatePresence mode="wait">
                      {current ? (
                        <motion.span
                          key="badge"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          className={["rounded-full border px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider", st.className].join(" ")}
                        >
                          {st.text}
                        </motion.span>
                      ) : lit ? (
                        <span className={["rounded-full border px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider opacity-60", st.className].join(" ")}>
                          {st.text}
                        </span>
                      ) : null}
                    </AnimatePresence>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
}
