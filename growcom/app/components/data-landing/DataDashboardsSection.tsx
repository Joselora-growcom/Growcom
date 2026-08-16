"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useI18n } from "../../i18n/LanguageProvider";
import AiReveal from "../ai-landing/AiReveal";

export default function DataDashboardsSection() {
  const { t } = useI18n();
  const db = t.landing.data.dashboards;
  const panels = db.panels;
  const reduce = useReducedMotion();

  return (
    <section className="relative py-24 sm:py-36">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AiReveal className="max-w-3xl">
          <h2 className="text-3xl font-black text-white sm:text-4xl lg:text-5xl">
            {db.title1}
            <span className="mt-2 block text-cyan-300">{db.title2}</span>
          </h2>
          <p className="mt-5 max-w-3xl text-lg text-white/55">{db.sub}</p>
        </AiReveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {panels.map((p, i) => (
            <motion.div
              key={p.title}
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={reduce ? undefined : { y: -4, borderColor: "rgba(56,189,248,0.3)" }}
            >
              <p className="text-[10px] font-semibold uppercase tracking-wider text-white/45">{p.title}</p>
              <p className="mt-3 text-3xl font-black text-white">{p.metric}</p>
              <p className="mt-1 text-sm text-cyan-300/80">{p.sub}</p>
              <motion.div className="mt-4 h-1 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                  initial={{ width: "30%" }}
                  whileInView={{ width: `${55 + i * 10}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.2 + i * 0.1 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-8 overflow-hidden rounded-[28px] border border-white/10 bg-[#070c14]/90 p-6 sm:p-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-cyan-300/80">{t.landing.data.dashboardMockup.eyebrow}</p>
            <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[10px] font-bold text-emerald-300">
              {db.liveSync}
            </span>
          </div>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="flex h-32 items-end gap-1.5 sm:h-40">
                {[40, 55, 48, 70, 62, 85, 78, 92, 88, 95].map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 rounded-t bg-gradient-to-t from-indigo-700/50 to-cyan-400"
                    style={{ height: `${h}%` }}
                    animate={reduce ? undefined : { opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2.5, delay: i * 0.1, repeat: Infinity }}
                  />
                ))}
              </div>
            </div>
            <ul className="space-y-3 text-sm text-white/65">
              {db.feed.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-cyan-400" />
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
