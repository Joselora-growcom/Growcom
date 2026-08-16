"use client";

import { useI18n } from "../../i18n/LanguageProvider";
import { motion, useReducedMotion } from "framer-motion";

const AGENT_ACCENT = {
  sales: { accent: "from-violet-500/30 to-cyan-500/10", dot: "bg-violet-400" },
  support: { accent: "from-cyan-500/30 to-blue-500/10", dot: "bg-cyan-400" },
  ops: { accent: "from-sky-500/25 to-indigo-500/10", dot: "bg-sky-400" },
} as const;

function AgentIcon({ id }: { id: string }) {
  if (id === "sales") {
    return (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    );
  }
  if (id === "support") {
    return (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" strokeLinecap="round" />
      <rect x="7" y="7" width="10" height="10" rx="2" />
    </svg>
  );
}

export default function AiDashboardMockup() {
  const { t } = useI18n();
  const dash = t.landing.ai.dashboard;
  const lc = t.landing.common;
  const kpis = dash.kpis;
  const agents = dash.agents.map((a) => ({ ...a, ...AGENT_ACCENT[a.id as keyof typeof AGENT_ACCENT] }));
  const reasoning = dash.reasoning;
  const stack = dash.stack;
  const reduce = useReducedMotion();

  return (
    <div className="ai-dashboard relative w-full max-w-xl lg:max-w-none">
      <div className="pointer-events-none absolute -inset-10 rounded-[48px] bg-gradient-to-br from-violet-500/20 via-cyan-500/15 to-blue-600/10 blur-3xl" />

      <motion.div
        className="relative overflow-hidden rounded-[28px] border border-white/12 bg-[#070c16]/95 p-4 shadow-[0_48px_140px_rgba(0,0,0,0.65),0_0_0_1px_rgba(255,255,255,0.04)_inset] backdrop-blur-2xl sm:p-6"
        animate={reduce ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/50 to-cyan-400/60" />

        <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-cyan-300/85">
              {dash.header}
            </p>
            <p className="mt-1.5 text-base font-bold text-white">{dash.title}</p>
            <p className="mt-1 text-[11px] text-white/45">{dash.sub}</p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/35 bg-violet-400/10 px-3 py-1.5 text-[11px] font-bold text-violet-200">
            <span className="relative flex h-2 w-2">
              {!reduce ? (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-60" />
              ) : null}
              <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-400" />
            </span>
            {dash.liveBadge}
          </span>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2.5 sm:gap-3">
          {kpis.map((kpi, i) => (
            <motion.div
              key={kpi.label}
              className="rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-3"
              animate={reduce ? undefined : { opacity: [0.88, 1, 0.88] }}
              transition={{ duration: 3.5 + i * 0.4, repeat: Infinity }}
            >
              <p className="text-[10px] text-white/45">{kpi.label}</p>
              <p className="mt-1 text-xl font-black text-white">{kpi.value}</p>
              <p className="mt-0.5 text-[10px] font-semibold text-cyan-300/90">{kpi.trend}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-[1.15fr_1fr]">
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3.5">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-white/45">{dash.deployed}</p>
            <ul className="mt-3 space-y-2">
              {agents.map((agent, i) => (
                <motion.li
                  key={agent.id}
                  className={[
                    "flex items-center gap-3 rounded-lg border border-white/8 bg-gradient-to-r p-2.5",
                    agent.accent,
                  ].join(" ")}
                  initial={reduce ? false : { opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 + i * 0.12, duration: 0.45 }}
                >
                  <span
                    className={[
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-black/30 text-cyan-200",
                    ].join(" ")}
                  >
                    <AgentIcon id={agent.id} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[11px] font-bold text-white">{agent.name}</p>
                    <p className="truncate text-[10px] text-white/50">{agent.role}</p>
                  </div>
                  <span className="flex shrink-0 items-center gap-1.5 rounded-full border border-white/10 bg-black/25 px-2 py-0.5">
                    <span className={`h-1.5 w-1.5 rounded-full ${agent.dot} shadow-[0_0_6px_currentColor]`} />
                    <span className="text-[9px] font-medium text-white/70">{agent.status}</span>
                  </span>
                </motion.li>
              ))}
            </ul>
            <motion.div
              className="mt-3 flex items-center gap-2 rounded-lg border border-dashed border-cyan-400/25 bg-cyan-400/[0.04] px-3 py-2"
              animate={reduce ? undefined : { opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-violet-500 to-cyan-500 text-[10px] font-black text-white">
                AI
              </span>
              <p className="text-[10px] text-white/55">
                <span className="font-semibold text-white/80">{dash.orchestrator}</span> {dash.orchestratorHint}
              </p>
            </motion.div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3.5">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-white/45">{dash.reasoningTitle}</p>
            <ul className="mt-3 space-y-2.5">
              {reasoning.map((item, i) => (
                <motion.li
                  key={item.text}
                  className="border-b border-white/[0.04] pb-2 last:border-0 last:pb-0"
                  initial={reduce ? false : { opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.45 + i * 0.35, duration: 0.45 }}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-[11px] leading-snug text-white/75">
                      <span className="font-semibold text-cyan-300/90">{item.agent}</span>
                      <span className="text-white/40"> · </span>
                      {item.text}
                    </span>
                    <span className="shrink-0 font-mono text-[9px] text-white/35">{item.time}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          {stack.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-violet-400/25 bg-violet-400/[0.08] px-2.5 py-1 font-mono text-[10px] font-medium text-violet-100/90"
            >
              {tag}
            </span>
          ))}
          <span className="ml-auto font-mono text-[9px] text-white/30">{dash.inference}</span>
        </div>
      </motion.div>
    </div>
  );
}
