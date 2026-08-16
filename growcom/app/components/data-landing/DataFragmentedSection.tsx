"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useI18n } from "../../i18n/LanguageProvider";
import AiReveal from "../ai-landing/AiReveal";

const NODE_LAYOUT = [
  { short: "XL", x: 10, y: 22 },
  { short: "CRM", x: 82, y: 14 },
  { short: "WA", x: 88, y: 48 },
  { short: "@", x: 72, y: 78 },
  { short: "ERP", x: 48, y: 86 },
  { short: "FM", x: 14, y: 72 },
  { short: "GD", x: 6, y: 46 },
  { short: "SL", x: 32, y: 10 },
  { short: "N", x: 54, y: 32 },
] as const;

const hub = { x: 50, y: 52 };

export default function DataFragmentedSection() {
  const { t } = useI18n();
  const frag = t.landing.data.fragmented;
  const lc = t.landing.common;
  const nodes = NODE_LAYOUT.map((layout, i) => ({ ...layout, name: frag.nodes[i] }));
  const stats = frag.stats;
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-24 sm:py-36">
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(rgba(248,113,113,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(248,113,113,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        animate={reduce ? undefined : { backgroundPosition: ["0px 0px", "48px 48px"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AiReveal className="max-w-3xl">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.32em] text-red-300/90">
            {frag.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
            {frag.title1}{" "}
            <span className="bg-gradient-to-r from-red-300 via-orange-300 to-amber-200 bg-clip-text text-transparent">
              {frag.title2}
            </span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/70">{frag.sub}</p>
        </AiReveal>

        <AiReveal className="relative mt-14" delay={0.08}>
          <div className="relative overflow-hidden rounded-[28px] border border-red-400/25 bg-gradient-to-b from-[#12080c] via-[#0a0608] to-[#050508] shadow-[0_32px_80px_rgba(239,68,68,0.12)] sm:rounded-[36px]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(239,68,68,0.18),transparent_55%)]" />
            <motion.div
              className="pointer-events-none absolute -left-1/4 top-1/3 h-64 w-64 rounded-full bg-red-500/20 blur-[100px]"
              animate={reduce ? undefined : { opacity: [0.3, 0.55, 0.3], scale: [1, 1.1, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="relative flex flex-wrap items-center justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-8 sm:py-5">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  {!reduce ? (
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-60" />
                  ) : null}
                  <span className="relative h-2.5 w-2.5 rounded-full bg-red-400 shadow-[0_0_12px_rgba(248,113,113,0.9)]" />
                </span>
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-red-200">
                  {frag.stateLabel}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {stats.map((s) => (
                  <span
                    key={s.label}
                    className="rounded-full border border-white/12 bg-white/[0.06] px-3 py-1.5 text-[10px] text-white/55 backdrop-blur-sm"
                  >
                    <span className="text-white/40">{s.label}: </span>
                    <span className="font-bold text-red-200">{s.value}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="relative mx-auto aspect-[4/3] max-h-[520px] w-full min-h-[300px] sm:aspect-[16/10] sm:min-h-[380px]">
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
                <defs>
                  <linearGradient id="frag-line" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(248,113,113,0.05)" />
                    <stop offset="50%" stopColor="rgba(248,113,113,0.55)" />
                    <stop offset="100%" stopColor="rgba(248,113,113,0.05)" />
                  </linearGradient>
                </defs>
                {nodes.map((node, i) => (
                  <motion.line
                    key={node.name}
                    x1={hub.x}
                    y1={hub.y}
                    x2={node.x}
                    y2={node.y}
                    stroke="url(#frag-line)"
                    strokeWidth="0.35"
                    strokeDasharray="2 3"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    animate={
                      reduce
                        ? undefined
                        : {
                            strokeDashoffset: [0, -12],
                            opacity: [0.35, 0.75, 0.35],
                          }
                    }
                    transition={{
                      pathLength: { duration: 0.8, delay: i * 0.05 },
                      strokeDashoffset: { duration: 2.5 + i * 0.15, repeat: Infinity, ease: "linear" },
                      opacity: { duration: 2.5 + i * 0.15, repeat: Infinity },
                    }}
                  />
                ))}
                {!reduce
                  ? nodes.map((node, i) => (
                      <motion.circle
                        key={`pulse-${node.name}`}
                        cx={node.x}
                        cy={node.y}
                        r="0.8"
                        fill="rgba(248,113,113,0.9)"
                        animate={{ opacity: [0, 1, 0], r: [0.4, 1.2, 0.4] }}
                        transition={{ duration: 2, delay: i * 0.35, repeat: Infinity }}
                      />
                    ))
                  : null}
              </svg>

              <motion.div
                className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
                animate={reduce ? undefined : { y: [0, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-red-400/40 bg-[#1a0a0e]/90 shadow-[0_0_48px_rgba(239,68,68,0.35)] backdrop-blur-md sm:h-24 sm:w-24">
                  {!reduce ? (
                    <motion.div
                      className="absolute inset-0 rounded-2xl border border-red-400/30"
                      animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2.2, repeat: Infinity }}
                    />
                  ) : null}
                  <span className="font-mono text-2xl font-black text-red-300/90" aria-hidden>
                    ?
                  </span>
                </div>
                <p className="mt-3 font-mono text-[9px] font-semibold uppercase tracking-[0.22em] text-red-300/80 sm:text-[10px]">
                  {frag.noSingleSource}
                </p>
              </motion.div>

              {nodes.map((node, i) => (
                <motion.div
                  key={node.name}
                  className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.05, type: "spring", stiffness: 260, damping: 22 }}
                  animate={
                    reduce
                      ? undefined
                      : {
                          y: [0, (i % 2 === 0 ? -6 : 6), 0],
                          x: [0, (i % 3 === 0 ? 4 : -4), 0],
                        }
                  }
                  {...(reduce
                    ? {}
                    : {
                        transition: {
                          y: { duration: 5 + i * 0.3, repeat: Infinity, ease: "easeInOut" },
                          x: { duration: 6 + i * 0.25, repeat: Infinity, ease: "easeInOut" },
                        },
                      })}
                >
                  <div className="group flex items-center gap-2 rounded-2xl border border-white/20 bg-[#14141c]/95 px-3 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-md transition hover:border-red-400/45 hover:shadow-[0_0_24px_rgba(239,68,68,0.2)] sm:px-3.5 sm:py-2.5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-red-500/25 to-orange-500/10 font-mono text-[10px] font-bold text-red-200 ring-1 ring-red-400/25 sm:h-9 sm:w-9 sm:text-[11px]">
                      {node.short}
                    </span>
                    <span className="hidden whitespace-nowrap text-sm font-semibold text-white sm:block">{node.name}</span>
                  </div>
                  {!reduce ? (
                    <motion.span
                      className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.9)]"
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1.2 + i * 0.1, repeat: Infinity }}
                      title={lc.disconnected}
                    />
                  ) : (
                    <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-amber-400" title={lc.disconnected} />
                  )}
                </motion.div>
              ))}
            </div>

            <div className="relative border-t border-white/10 px-5 py-4 sm:px-8">
              <p className="flex flex-wrap items-center gap-2 text-sm text-white/60">
                <span className="rounded-md bg-red-500/15 px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-red-200">
                  {frag.alertLabel}
                </span>
                {frag.alertText}
              </p>
            </div>
          </div>
        </AiReveal>
      </div>
    </section>
  );
}
