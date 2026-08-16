"use client";

import { motion, useReducedMotion } from "framer-motion";
import AiReveal from "./AiReveal";
import { useI18n } from "../../i18n/LanguageProvider";
import { IconCommercial, IconOps, IconStrategic, IconSupport } from "./AiIcons";

const CARD_META = [
  { icon: IconCommercial, gradient: "from-blue-500/20 via-cyan-500/10 to-transparent" },
  { icon: IconSupport, gradient: "from-violet-500/20 via-cyan-500/10 to-transparent" },
  { icon: IconOps, gradient: "from-cyan-500/20 via-sky-500/10 to-transparent" },
  { icon: IconStrategic, gradient: "from-indigo-500/20 via-cyan-500/10 to-transparent" },
] as const;

export default function AiApplicationsSection() {
  const { t } = useI18n();
  const app = t.landing.ai.applications;
  const applications = CARD_META.map((meta, i) => ({ ...meta, ...app.cards[i] }));
  const reduce = useReducedMotion();

  return (
    <section id="aplicaciones" className="relative py-24 sm:py-36">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
      <motion.div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AiReveal>
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.32em] text-cyan-300/80">
            {app.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
            {app.title1}
            <span className="block bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              {app.title2}
            </span>
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/60 sm:text-xl">{app.sub}</p>
          <ul className="mt-6 flex flex-wrap gap-2.5">
            {app.highlights.map((item) => (
              <li
                key={item}
                className="rounded-full border border-cyan-400/25 bg-cyan-400/[0.08] px-3.5 py-1.5 text-sm font-medium text-cyan-100/90"
              >
                {item}
              </li>
            ))}
          </ul>
        </AiReveal>

        <motion.div className="mt-16 grid gap-5 sm:grid-cols-2">
          {applications.map((app, i) => (
            <motion.article
              key={app.title}
              className="ai-app-card group relative overflow-hidden rounded-[28px] p-[1px]"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-6%" }}
              transition={{ delay: i * 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              whileHover={reduce ? undefined : { y: -8, transition: { duration: 0.35 } }}
            >
              <motion.div
                className={[
                  "pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                  app.gradient,
                ].join(" ")}
              />
              <motion.div className="relative h-full rounded-[27px] border border-white/10 bg-[#060b14]/90 p-7 backdrop-blur-xl sm:p-9">
                <motion.div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl transition group-hover:bg-cyan-400/25" />
                <motion.div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/25 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 text-cyan-200 shadow-[0_0_30px_rgba(56,189,248,0.2)]">
                  <app.icon />
                </motion.div>
                <h3 className="relative mt-6 text-xl font-bold text-white sm:text-2xl">{app.title}</h3>
                <ul className="relative mt-6 grid gap-2.5 sm:grid-cols-2">
                  {app.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-2.5 text-sm text-white/70 transition group-hover:border-cyan-400/15 group-hover:text-white/85"
                    >
                      <span className="h-1 w-1 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
