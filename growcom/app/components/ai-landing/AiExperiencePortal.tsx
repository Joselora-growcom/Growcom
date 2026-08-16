"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { useI18n } from "../../i18n/LanguageProvider";
import ServiceOfferCard from "../ServiceOfferCard";
import AiLandingPage from "./AiLandingPage";

export const AI_EXPERIENCE_LAYOUT_ID = "growcom-ai-experience";
const LAYOUT_ID = AI_EXPERIENCE_LAYOUT_ID;

type AiExperiencePortalProps = {
  open: boolean;
  onClose: () => void;
};

export function AiServiceCardTrigger({
  index,
  icon,
  title,
  description,
  bullets,
  onOpen,
}: {
  index: number;
  icon: ReactNode;
  title: string;
  description: string;
  bullets: readonly string[];
  onOpen: () => void;
}) {
  const { t } = useI18n();

  return (
    <ServiceOfferCard
      index={index}
      icon={icon}
      title={title}
      description={description}
      bullets={bullets}
      ctaLabel={t.services.exploreAi}
      viewMoreHint={t.services.viewMore}
      onClick={onOpen}
      layoutId={LAYOUT_ID}
    />
  );
}

export default function AiExperiencePortal({ open, onClose }: AiExperiencePortalProps) {
  const { t } = useI18n();
  const portal = t.landing.ai.portal;
  const lc = t.landing.common;
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (typeof window === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open ? (
        <>
          <motion.div
            className="fixed inset-0 z-[190] bg-[#020408]/75 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={onClose}
            aria-hidden
          />

          {!reduce ? (
            <motion.div
              className="ai-transition-sweep pointer-events-none fixed inset-0 z-[195]"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.9, times: [0, 0.35, 1] }}
              aria-hidden
            />
          ) : null}

          <motion.div
            layoutId={LAYOUT_ID}
            className="fixed inset-0 z-[200] overflow-y-auto bg-[#03050a] outline-none"
            role="dialog"
            aria-modal="true"
            aria-label={portal.ariaLabel}
            transition={{ layout: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }}
          >
            <div className="sticky top-0 z-30 flex items-center justify-between border-b border-white/10 bg-[#03050a]/85 px-4 py-3 backdrop-blur-xl sm:px-6">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-300/90 sm:text-xs">
                {portal.header}
              </p>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-10 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 text-sm font-semibold text-white/90 transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
              >
                {lc.backToServices}
                <span aria-hidden>×</span>
              </button>
            </div>

            <motion.div
              initial={reduce ? false : { opacity: 0, filter: "blur(12px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 0.2, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <AiLandingPage embedded />
            </motion.div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>,
    document.body
  );
}
