"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import { useI18n } from "../i18n/LanguageProvider";
import AiExperiencePortal, { AI_EXPERIENCE_LAYOUT_ID } from "./ai-landing/AiExperiencePortal";
import AutomationExperiencePortal, { AUTOMATION_EXPERIENCE_LAYOUT_ID } from "./automation-landing/AutomationExperiencePortal";
import DataExperiencePortal, { DATA_EXPERIENCE_LAYOUT_ID } from "./data-landing/DataExperiencePortal";
import ServiceOfferCard from "./ServiceOfferCard";

const automationIcon = (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
    <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" stroke="currentColor" strokeWidth="2" />
    <path
      d="M19.4 15a8.2 8.2 0 0 0 .1-1l2-1.2-2-3.4-2.3.6a8.2 8.2 0 0 0-1.7-1L15.2 6h-6.4l-.3 2.6c-.6.3-1.1.6-1.7 1l-2.3-.6-2 3.4 2 1.2a8.2 8.2 0 0 0 0 2l-2 1.2 2 3.4 2.3-.6c.5.4 1.1.8 1.7 1l.3 2.6h6.4l.3-2.6c.6-.3 1.2-.6 1.7-1l2.3.6 2-3.4-2-1.2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

const dataIcon = (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
    <path d="M5 19V5m0 14h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M8 16v-4m4 4V8m4 8v-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default function ServicesOfferList() {
  const { t, lang } = useI18n();
  const reduce = useReducedMotion();
  const [aiOpen, setAiOpen] = useState(false);
  const [automationOpen, setAutomationOpen] = useState(false);
  const [dataOpen, setDataOpen] = useState(false);

  useEffect(() => {
    const openAi = () => {
      setAiOpen(true);
      document.getElementById("services")?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    window.addEventListener("open-ai-experience", openAi);
    return () => window.removeEventListener("open-ai-experience", openAi);
  }, []);

  type ServiceItem = {
    index: number;
    title: string;
    description: string;
    bullets: readonly string[];
    icon: ReactNode;
    ctaLabel: string;
    onClick: () => void;
    layoutId?: string;
  };

  const services: ServiceItem[] = [
    {
      ...t.services.cards.ai,
      index: 0,
      icon: <span className="text-sm font-black tracking-[0.18em]">{lang === "en" ? "AI" : "IA"}</span>,
      ctaLabel: t.services.exploreAi,
      onClick: () => setAiOpen(true),
      layoutId: AI_EXPERIENCE_LAYOUT_ID,
    },
    {
      ...t.services.cards.automation,
      index: 1,
      icon: automationIcon,
      ctaLabel: t.services.exploreAutomation,
      onClick: () => setAutomationOpen(true),
      layoutId: AUTOMATION_EXPERIENCE_LAYOUT_ID,
    },
    {
      ...t.services.cards.data,
      index: 2,
      icon: dataIcon,
      ctaLabel: t.services.exploreData,
      onClick: () => setDataOpen(true),
      layoutId: DATA_EXPERIENCE_LAYOUT_ID,
    },
  ];

  const isCardHidden = (index: number) =>
    (index === 0 && aiOpen) || (index === 1 && automationOpen) || (index === 2 && dataOpen);

  return (
    <>
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="dark-tech-grid absolute inset-0 opacity-35" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_100%_0%,rgba(56,189,248,0.14),transparent_55%),radial-gradient(ellipse_60%_45%_at_0%_100%,rgba(139,92,246,0.1),transparent_50%)]" />
      </div>

      <div className="relative divide-y divide-white/10 rounded-[24px] border border-white/10 bg-white/[0.02]">
        {services.map((s) =>
          isCardHidden(s.index) ? (
            <div key={s.title} className="py-10 sm:py-12" aria-hidden />
          ) : (
            <motion.div
              key={s.title}
              initial={reduce ? false : { opacity: 0, y: 28 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.55, delay: s.index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <ServiceOfferCard
                index={s.index}
                icon={s.icon}
                title={s.title}
                description={s.description}
                bullets={s.bullets}
                ctaLabel={s.ctaLabel}
                viewMoreHint={t.services.viewMore}
                onClick={s.onClick}
                layoutId={s.layoutId}
              />
            </motion.div>
          ),
        )}
      </div>

      <AiExperiencePortal open={aiOpen} onClose={() => setAiOpen(false)} />
      <AutomationExperiencePortal open={automationOpen} onClose={() => setAutomationOpen(false)} />
      <DataExperiencePortal open={dataOpen} onClose={() => setDataOpen(false)} />
    </>
  );
}
