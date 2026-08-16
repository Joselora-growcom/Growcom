"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ComponentType } from "react";
import AiReveal from "../ai-landing/AiReveal";
import {
  IconDashboard,
  IconDataHub,
  IconIntegrations,
  IconReporting,
  IconScale,
  IconVisibility,
} from "./DataIcons";
import { useI18n } from "../../i18n/LanguageProvider";

const CARD_META = [
  { icon: IconDataHub, gradient: "from-cyan-500/25 via-blue-600/10 to-transparent", glow: "bg-cyan-500/15", span: "lg:col-span-7" },
  { icon: IconDashboard, gradient: "from-sky-500/25 via-indigo-500/10 to-transparent", glow: "bg-sky-500/15", span: "lg:col-span-5" },
  { icon: IconIntegrations, gradient: "from-violet-500/20 via-cyan-500/10 to-transparent", glow: "bg-violet-500/15", span: "lg:col-span-4" },
  { icon: IconScale, gradient: "from-emerald-500/20 via-cyan-500/10 to-transparent", glow: "bg-emerald-500/15", span: "lg:col-span-4" },
  { icon: IconReporting, gradient: "from-blue-500/20 via-cyan-500/10 to-transparent", glow: "bg-blue-500/15", span: "lg:col-span-4" },
  { icon: IconVisibility, gradient: "from-teal-500/20 via-cyan-500/10 to-transparent", glow: "bg-teal-500/15", span: "lg:col-span-12" },
] as const;

export default function DataWhatWeDoSection() {
  const { t } = useI18n();
  const wwd = t.landing.data.whatWeDo;
  const cards = CARD_META.map((meta, i) => ({ ...meta, ...wwd.cards[i] }));
  const reduce = useReducedMotion();

  return (
    <section id="que-hacemos" className="relative overflow-hidden py-24 sm:py-36">
      <motion.div
        className="ai-section-grid pointer-events-none absolute inset-0 opacity-25"
        aria-hidden
        animate={reduce ? undefined : { opacity: [0.15, 0.28, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/35 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AiReveal className="max-w-3xl">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.32em] text-cyan-300/90">{wwd.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
            {wwd.title1}
            <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
              {wwd.title2}
            </span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/65">{wwd.sub}</p>
        </AiReveal>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {cards.map((card, i) => (
            <motion.article
              key={card.title}
              className={["group relative lg:col-span-6", card.span].join(" ")}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ delay: i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={reduce ? undefined : { y: -6, transition: { duration: 0.3 } }}
            >
              <div
                className={[
                  "pointer-events-none absolute inset-0 rounded-[26px] bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                  card.gradient,
                ].join(" ")}
              />
              <div className="ai-app-card relative h-full overflow-hidden rounded-[25px] border border-white/12 bg-[#070c14]/95 p-6 backdrop-blur-xl sm:p-7">
                <div className={["pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full blur-3xl transition duration-500 group-hover:opacity-100", card.glow, "opacity-60"].join(" ")} />
                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/25 to-blue-600/15 text-cyan-100 shadow-[0_0_28px_rgba(56,189,248,0.25)] transition group-hover:scale-105 group-hover:border-cyan-300/50">
                    <card.icon />
                  </div>
                  <span className="font-mono text-[10px] font-bold text-cyan-300/50">{String(i + 1).padStart(2, "0")}</span>
                </div>
                {"highlight" in card && card.highlight ? (
                  <span className="relative mt-4 inline-flex rounded-full border border-cyan-400/25 bg-cyan-400/10 px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-wider text-cyan-200/90">
                    {card.highlight}
                  </span>
                ) : null}
                <h3 className="relative mt-4 text-lg font-bold text-white sm:text-xl">{card.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-white/70">{card.text}</p>
                <div className="relative mt-5 h-px w-full overflow-hidden rounded-full bg-white/8">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "highlight" in card && card.highlight ? "85%" : "65%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + i * 0.05 }}
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
