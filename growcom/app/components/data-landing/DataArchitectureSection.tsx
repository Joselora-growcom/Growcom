"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { useI18n } from "../../i18n/LanguageProvider";
import AiReveal from "../ai-landing/AiReveal";

export default function DataArchitectureSection() {
  const { t } = useI18n();
  const arch = t.landing.data.architecture;
  const lc = t.landing.common;
  const layers = arch.layers;
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => setActive((a) => (a + 1) % layers.length), 2200);
    return () => window.clearInterval(id);
  }, [reduce, layers.length]);

  return (
    <section id="arquitectura" className="relative overflow-hidden py-24 sm:py-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(56,189,248,0.12),transparent_65%)]" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <AiReveal className="text-center">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.32em] text-cyan-300/80">{arch.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">
            {arch.title1}
            <span className="mt-2 block bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              {arch.title2}
            </span>
          </h2>
          <p className="mt-5 text-lg text-white/55">{arch.sub}</p>
        </AiReveal>

        <ul className="relative mt-16 space-y-3">
          <div className="absolute left-[27px] top-6 bottom-6 w-px bg-gradient-to-b from-cyan-400/50 via-cyan-400/20 to-transparent sm:left-1/2 sm:-translate-x-px" />
          {layers.map((layer, i) => {
            const lit = i <= active;
            const current = i === active;
            return (
              <motion.li
                key={layer.label}
                className={[
                  "relative flex items-center gap-4 rounded-2xl border px-5 py-4 backdrop-blur-md transition-all duration-500",
                  "highlight" in layer && layer.highlight
                    ? "border-cyan-400/45 bg-cyan-400/10"
                    : lit
                      ? "border-cyan-400/25 bg-white/[0.04]"
                      : "border-white/8 bg-white/[0.02]",
                ].join(" ")}
                animate={current && !reduce ? { scale: [1, 1.02, 1] } : undefined}
                transition={{ duration: 1.2, repeat: Infinity }}
              >
                <span
                  className={[
                    "relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-mono text-[9px] font-bold uppercase",
                    lit ? "bg-cyan-400/20 text-cyan-200" : "bg-white/5 text-white/35",
                  ].join(" ")}
                >
                  {layer.tag}
                </span>
                <div className="flex-1">
                  <p className={lit ? "font-semibold text-white" : "text-white/45"}>{layer.label}</p>
                  {current ? (
                    <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-emerald-400/90">{lc.syncedLive}</p>
                  ) : null}
                </div>
                {current && !reduce ? (
                  <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,1)]" />
                ) : null}
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
