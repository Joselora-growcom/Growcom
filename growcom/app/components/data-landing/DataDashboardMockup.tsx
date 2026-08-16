"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useI18n } from "../../i18n/LanguageProvider";

export default function DataDashboardMockup() {
  const { t } = useI18n();
  const dash = t.landing.data.dashboardMockup;
  const kpis = dash.kpis;
  const activity = dash.activity;
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="relative w-full max-w-xl lg:max-w-none"
      animate={reduce ? undefined : { y: [0, -8, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="pointer-events-none absolute -inset-10 rounded-[48px] bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-indigo-600/15 blur-3xl" />
      <div className="relative overflow-hidden rounded-[28px] border border-white/12 bg-[#060a12]/95 shadow-[0_48px_120px_rgba(0,0,0,0.65)] backdrop-blur-2xl">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
        <div className="border-b border-white/10 px-5 py-4 sm:px-6">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-300/85">
            {dash.commandCenter}
          </p>
          <p className="mt-1 text-sm font-bold text-white">{dash.title}</p>
        </div>

        <div className="grid grid-cols-2 gap-2 p-4 sm:grid-cols-4 sm:gap-3 sm:p-5">
          {kpis.map((k, i) => (
            <motion.div
              key={k.label}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-3"
              animate={reduce ? undefined : { opacity: [0.9, 1, 0.9] }}
              transition={{ duration: 3 + i * 0.3, repeat: Infinity }}
            >
              <p className="text-[9px] uppercase tracking-wider text-white/45">{k.label}</p>
              <p className="mt-1 text-lg font-black text-white">{k.value}</p>
              <p className="mt-0.5 font-mono text-[10px] text-emerald-400/90">{k.delta}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-3 px-4 pb-5 sm:grid-cols-2 sm:px-5 sm:pb-6">
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3.5">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-white/45">{dash.performance}</p>
            <div className="mt-3 flex h-20 items-end gap-1">
              {[35, 48, 42, 58, 52, 72, 65, 88, 78].map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 rounded-t bg-gradient-to-t from-indigo-600/40 to-cyan-400/90"
                  style={{ height: `${h}%` }}
                  animate={reduce ? undefined : { scaleY: [1, 1.1, 1] }}
                  transition={{ duration: 2.5, delay: i * 0.08, repeat: Infinity }}
                />
              ))}
            </div>
            </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3.5">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-white/45">{dash.activityStream}</p>
            <ul className="mt-2 space-y-2">
              {activity.map((item, i) => (
                <motion.li
                  key={item}
                  className="flex items-center gap-2 text-[11px] text-white/70"
                  initial={{ opacity: 0, x: 6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.35 }}
                >
                  <span className="h-1 w-1 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,1)]" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
