"use client";

import { motion, useReducedMotion } from "framer-motion";
import AiBackground from "../ai-landing/AiBackground";
import AiReveal from "../ai-landing/AiReveal";
import AutomationBenefitsSection from "./AutomationBenefitsSection";
import AutomationCategoriesSection from "./AutomationCategoriesSection";
import AutomationIntegrationsSection from "./AutomationIntegrationsSection";
import AutomationLiveFlowSection from "./AutomationLiveFlowSection";
import AutomationProblemSection from "./AutomationProblemSection";
import AutomationRoiSection from "./AutomationRoiSection";
import { useI18n } from "../../i18n/LanguageProvider";
import AutomationWorkflowMockup from "./AutomationWorkflowMockup";

function openContact() {
  window.dispatchEvent(new Event("open-contact-modal"));
}

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

type AutomationLandingPageProps = {
  embedded?: boolean;
};

export default function AutomationLandingPage({ embedded = false }: AutomationLandingPageProps) {
  const { t } = useI18n();
  const hero = t.landing.automation.hero;
  const finalCta = t.landing.automation.finalCta;
  const lc = t.landing.common;
  const reduce = useReducedMotion();

  return (
    <div className="auto-landing relative bg-[#03050a] text-white selection:bg-cyan-500/30 selection:text-white">
      <div className="ai-noise pointer-events-none fixed inset-0 z-[1] opacity-[0.03]" aria-hidden />

      {/* HERO */}
      <section className={["relative overflow-hidden", embedded ? "min-h-0 pt-4" : "min-h-[100dvh] pt-6"].join(" ")}>
        <AiBackground intensity={embedded ? 0.85 : 1} />
        <div className="dark-tech-grid pointer-events-none absolute inset-0 opacity-[0.24]" aria-hidden />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_-5%,rgba(56,189,248,0.2),transparent_58%)]" />
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
            <h1 className="mt-10 text-[2.1rem] font-black leading-[1.04] tracking-tight sm:text-5xl lg:text-[3.35rem]">
              {hero.title}
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/65 sm:text-xl">
              {hero.sub}
            </p>
            <div className="mt-11 flex flex-wrap gap-4">
              <button type="button" onClick={openContact} className="ai-cta-primary rounded-full px-8 py-4 text-sm font-bold text-[#03050a] sm:text-base">
                {lc.requestAudit}
              </button>
              <button
                type="button"
                onClick={() => scrollToId("procesos")}
                className="rounded-full border border-white/18 bg-white/[0.04] px-8 py-4 text-sm font-semibold text-white backdrop-blur-md transition hover:border-cyan-400/45 hover:bg-cyan-400/10 sm:text-base"
              >
                {hero.ctaProcesses}
              </button>
            </div>
          </AiReveal>

          <AiReveal delay={0.12} className="lg:justify-self-end">
            <AutomationWorkflowMockup />
          </AiReveal>
        </div>
      </section>

      <AutomationProblemSection />
      <AutomationCategoriesSection />
      <AutomationLiveFlowSection />
      <AutomationRoiSection />
      <AutomationIntegrationsSection />
      <AutomationBenefitsSection />

      {/* FINAL CTA */}
      <section className="relative overflow-hidden py-28 sm:py-40">
        <AiBackground intensity={0.65} />
        <div className="dark-tech-grid pointer-events-none absolute inset-0 opacity-20" aria-hidden />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_65%_at_50%_50%,rgba(56,189,248,0.16),transparent_68%)]" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
          <AiReveal>
            <h2 className="text-3xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.1rem]">
              {finalCta.title1}
              <span className="mt-3 block bg-gradient-to-r from-cyan-200 via-sky-400 to-blue-400 bg-clip-text text-transparent">
                {finalCta.title2}
              </span>
            </h2>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/60 sm:text-xl">
              {finalCta.sub}
            </p>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <button type="button" onClick={openContact} className="ai-cta-primary rounded-full px-12 py-4.5 text-base font-bold text-[#03050a] sm:text-lg">
                {lc.requestFreeAudit}
              </button>
              <button
                type="button"
                onClick={openContact}
                className="rounded-full border border-white/18 bg-white/[0.04] px-10 py-4 text-base font-semibold text-white backdrop-blur-md transition hover:border-cyan-400/45 hover:bg-cyan-400/10"
              >
                {lc.talkToGrowcom}
              </button>
            </div>
          </AiReveal>
        </div>
      </section>
    </div>
  );
}
