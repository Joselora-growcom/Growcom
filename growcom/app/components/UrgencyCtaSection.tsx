"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useI18n } from "../i18n/LanguageProvider";
import { openContactForm } from "../lib/openContactForm";

const ease = [0.22, 1, 0.36, 1] as const;

function CheckIcon() {
  return (
    <svg className="h-4 w-4 shrink-0 text-cyan-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path
        fillRule="evenodd"
        d="M16.704 5.29a1 1 0 0 1 0 1.42l-7.25 7.25a1 1 0 0 1-1.42 0l-3.25-3.25a1 1 0 1 1 1.42-1.42l2.54 2.54 6.54-6.54a1 1 0 0 1 1.42 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function UrgencyCtaSection() {
  const { t } = useI18n();
  const reduce = useReducedMotion();
  const fadeUp = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-10%" },
          transition: { duration: 0.7, delay, ease },
        };

  return (
    <section className="urgency-cta-section relative overflow-hidden bg-[#030712] py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="dark-tech-grid absolute inset-0 opacity-[0.14]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_20%_50%,rgba(244,63,94,0.12),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_90%_40%,rgba(34,211,238,0.1),transparent_50%)]" />
      </div>

      <motion.div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.article
          {...fadeUp(0)}
          className="urgency-cta-card relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-transparent shadow-[0_40px_120px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:rounded-[32px]"
        >
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-rose-500/15 blur-[100px]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-cyan-500/12 blur-[90px]"
            aria-hidden
          />

          <div className="relative grid lg:grid-cols-12 lg:gap-0">
            <motion.div
              {...fadeUp(0.08)}
              className="flex flex-col justify-center border-b border-white/10 p-8 sm:p-10 lg:col-span-5 lg:border-b-0 lg:border-r lg:p-12"
            >
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-rose-400/30 bg-rose-500/10 px-3.5 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-rose-200/95 sm:text-[11px]">
                <span className="relative flex h-2 w-2">
                  {!reduce ? (
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-50" />
                  ) : null}
                  <span className="relative h-2 w-2 rounded-full bg-rose-400" />
                </span>
                {t.urgencyCta.badge}
              </span>

              <h2 className="mt-6 text-left text-3xl font-black leading-[1.06] tracking-tight text-white sm:text-4xl lg:text-[2.65rem]">
                {t.urgencyCta.titleLine1}
                <br />
                <span className="bg-gradient-to-r from-rose-300 via-rose-400 to-orange-300 bg-clip-text text-transparent">
                  {t.urgencyCta.titleHighlight}
                </span>
              </h2>
            </motion.div>

            <motion.div
              {...fadeUp(0.16)}
              className="flex flex-col justify-center p-8 sm:p-10 lg:col-span-7 lg:p-12"
            >
              <p className="max-w-xl text-left text-base leading-relaxed text-white/70 sm:text-lg sm:leading-8">
                {t.urgencyCta.sub}
              </p>

              <button
                type="button"
                onClick={openContactForm}
                className="urgency-cta-btn mt-8 inline-flex w-fit items-center gap-3 rounded-xl px-7 py-3.5 text-base font-semibold text-[#030712] sm:mt-9 sm:text-lg"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#030712]/10" aria-hidden>
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {t.urgencyCta.button}
                <span className="text-lg opacity-80" aria-hidden>
                  &rarr;
                </span>
              </button>

              <ul className="mt-8 grid gap-3 sm:mt-9">
                {t.urgencyCta.bullets.map((bullet, i) => (
                  <motion.li
                    key={bullet}
                    {...(reduce
                      ? {}
                      : {
                          initial: { opacity: 0, x: -12 },
                          whileInView: { opacity: 1, x: 0 },
                          viewport: { once: true },
                          transition: { delay: 0.25 + i * 0.08, duration: 0.5, ease },
                        })}
                    className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.04] px-4 py-3 text-left text-sm text-white/80 sm:text-base"
                  >
                    <CheckIcon />
                    {bullet}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.article>
      </motion.div>
    </section>
  );
}
