"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useI18n } from "../../i18n/LanguageProvider";
import AiReveal from "../ai-landing/AiReveal";
import {
  IconAutomation,
  IconControl,
  IconEfficiency,
  IconFastDecision,
  IconGrowth,
  IconTeamSync,
} from "./DataIcons";

const BENEFIT_META = [
  { icon: IconFastDecision, accent: "from-amber-500/30 via-orange-500/10", bar: 92 },
  { icon: IconControl, accent: "from-cyan-500/30 via-blue-500/10", bar: 88 },
  { icon: IconAutomation, accent: "from-violet-500/30 via-indigo-500/10", bar: 85 },
  { icon: IconGrowth, accent: "from-emerald-500/30 via-teal-500/10", bar: 90 },
  { icon: IconTeamSync, accent: "from-sky-500/30 via-cyan-500/10", bar: 87 },
  { icon: IconEfficiency, accent: "from-blue-500/30 via-cyan-500/10", bar: 94 },
] as const;

export default function DataBenefitsSection() {
  const { t } = useI18n();
  const ben = t.landing.data.benefits;
  const benefits = BENEFIT_META.map((meta, i) => ({ ...meta, ...ben.items[i] }));
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-24 sm:py-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,rgba(56,189,248,0.1),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AiReveal className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.32em] text-cyan-300/90">{ben.eyebrow}</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">{ben.title}</h2>
            <p className="mt-4 text-lg text-white/65">{ben.sub}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {ben.summary.map((chip) => (
              <span
                key={chip.label}
                className="rounded-2xl border border-white/12 bg-white/[0.05] px-4 py-3 text-center backdrop-blur-sm"
              >
                <span className="block font-mono text-lg font-black text-cyan-200">{chip.value}</span>
                <span className="mt-0.5 block text-[10px] uppercase tracking-wider text-white/45">{chip.label}</span>
              </span>
            ))}
          </div>
        </AiReveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, i) => (
            <motion.article
              key={benefit.title}
              className="group relative overflow-hidden rounded-[24px] p-[1px]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ delay: i * 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              whileHover={reduce ? undefined : { y: -6, transition: { duration: 0.3 } }}
            >
              <div
                className={[
                  "pointer-events-none absolute inset-0 rounded-[24px] bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                  benefit.accent,
                ].join(" ")}
              />
              <div className="relative h-full rounded-[23px] border border-white/12 bg-[#080c14]/95 p-6 backdrop-blur-xl transition group-hover:border-cyan-400/30 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.4),0_0_32px_rgba(56,189,248,0.08)]">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/[0.06] text-cyan-100 transition group-hover:border-cyan-400/35 group-hover:bg-cyan-400/10">
                    <benefit.icon />
                  </div>
                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-wider text-cyan-200/90">
                    {benefit.tag}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-white">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{benefit.text}</p>
                <div className="mt-5">
                  <div className="mb-1.5 flex justify-between font-mono text-[9px] uppercase tracking-wider text-white/40">
                    <span>{ben.impact}</span>
                    <span className="text-cyan-300/80">{benefit.bar}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${benefit.bar}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, delay: 0.15 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
