"use client";

import { motion, useReducedMotion } from "framer-motion";
import AiApplicationsSection from "./AiApplicationsSection";
import AiBackground from "./AiBackground";
import AiDashboardMockup from "./AiDashboardMockup";
import AiIntegrationsSection from "./AiIntegrationsSection";
import AiReveal from "./AiReveal";
import AiRoiSection from "./AiRoiSection";
import AiWorkflowSection from "./AiWorkflowSection";
import { useI18n } from "../../i18n/LanguageProvider";
import { openContactForm } from "../../lib/openContactForm";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

type AiLandingPageProps = {
  embedded?: boolean;
};

export default function AiLandingPage({ embedded = false }: AiLandingPageProps) {
  const { t } = useI18n();
  const hero = t.landing.ai.hero;
  const finalCta = t.landing.ai.finalCta;
  const reduce = useReducedMotion();

  return (
    <div className="ai-landing relative bg-[#03050a] text-white selection:bg-cyan-500/30 selection:text-white">
      <div className="ai-noise pointer-events-none fixed inset-0 z-[1] opacity-[0.035]" aria-hidden />

      {/* HERO */}
      <section
        className={[
          "relative overflow-hidden",
          embedded ? "min-h-0 pt-4" : "min-h-[100dvh] pt-6",
        ].join(" ")}
      >
        <AiBackground intensity={embedded ? 0.85 : 1} />
        <div className="dark-tech-grid pointer-events-none absolute inset-0 opacity-[0.22]" aria-hidden />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_-5%,rgba(56,189,248,0.22),transparent_58%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,#03050a_92%)]" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-16 px-4 pb-24 pt-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14 lg:px-8 lg:pb-32 lg:pt-20">
          <AiReveal>
            <p className="inline-flex items-center gap-2.5 rounded-full border border-cyan-400/30 bg-cyan-400/[0.08] px-4 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-100/90 backdrop-blur-md sm:text-[11px]">
              <span className="relative flex h-2 w-2">
                {!reduce ? (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-50" />
                ) : null}
                <span className="relative h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,1)]" />
              </span>
              {hero.badge}
            </p>
            <h1 className="mt-10 text-[2.35rem] font-black leading-[1.02] tracking-tight sm:text-5xl lg:text-[3.6rem] lg:leading-[1.02]">
              {hero.title1}
              <span className="mt-3 block bg-gradient-to-r from-cyan-200 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                {hero.title2}
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/65 sm:text-xl">{hero.sub}</p>
            <div className="mt-11 flex flex-wrap gap-4">
              <button type="button" onClick={openContactForm} className="ai-cta-primary rounded-full px-8 py-4 text-sm font-bold text-[#03050a] sm:text-base">
                {hero.ctaAudit}
              </button>
              <button
                type="button"
                onClick={() => scrollToId("aplicaciones")}
                className="rounded-full border border-white/18 bg-white/[0.04] px-8 py-4 text-sm font-semibold text-white backdrop-blur-md transition hover:border-cyan-400/45 hover:bg-cyan-400/10 sm:text-base"
              >
                {hero.ctaApps}
              </button>
            </div>
          </AiReveal>

          <AiReveal delay={0.12} className="lg:justify-self-end">
            <AiDashboardMockup />
          </AiReveal>
        </div>
      </section>

      <AiWorkflowSection />
      <AiApplicationsSection />
      <AiIntegrationsSection />
      <AiRoiSection />

      {/* FINAL CTA */}
      <section className="relative overflow-hidden py-28 sm:py-40">
        <AiBackground intensity={0.7} />
        <div className="dark-tech-grid pointer-events-none absolute inset-0 opacity-20" aria-hidden />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_65%_at_50%_50%,rgba(56,189,248,0.18),transparent_68%)]" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
          <AiReveal>
            <h2 className="text-3xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.25rem]">
              {finalCta.title1}
              <span className="mt-3 block bg-gradient-to-r from-cyan-200 via-sky-400 to-blue-400 bg-clip-text text-transparent">
                {finalCta.title2}
              </span>
            </h2>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/60 sm:text-xl">{finalCta.sub}</p>
            <button
              type="button"
              onClick={openContactForm}
              className="ai-cta-primary mt-12 rounded-full px-12 py-4.5 text-base font-bold text-[#03050a] sm:text-lg"
            >
              {finalCta.cta}
            </button>
          </AiReveal>
        </div>
      </section>
    </div>
  );
}
