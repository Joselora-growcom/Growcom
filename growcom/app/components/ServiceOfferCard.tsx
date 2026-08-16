"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { ServiceCardArrow, ServiceCardInlineArrow } from "./ServiceCardArrow";

type ServiceOfferCardProps = {
  index: number;
  icon: ReactNode;
  title: string;
  description: string;
  bullets: readonly string[];
  ctaLabel: string;
  viewMoreHint: string;
  onClick: () => void;
  layoutId?: string;
};

export default function ServiceOfferCard({
  index,
  icon,
  title,
  description,
  bullets,
  ctaLabel,
  viewMoreHint,
  onClick,
  layoutId,
}: ServiceOfferCardProps) {
  return (
    <motion.button
      type="button"
      layoutId={layoutId}
      onClick={onClick}
      className="ai-service-trigger service-offer-card group relative grid w-full gap-6 px-6 py-10 text-left transition-colors sm:grid-cols-[5rem_1fr] sm:gap-10 sm:px-8 sm:py-12 lg:grid-cols-[6rem_1fr] lg:px-10"
      style={{ animationDelay: `${index * 0.35}s` }}
      whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
      transition={{ layout: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }}
    >
      <span
        className="service-offer-card-glow pointer-events-none absolute inset-0 rounded-[20px]"
        style={{ animationDelay: `${index * 0.35}s` }}
        aria-hidden
      />
      <span className="pointer-events-none absolute inset-0 rounded-[20px] opacity-0 ring-1 ring-cyan-400/0 transition group-hover:opacity-100 group-hover:ring-cyan-400/45" />
      <span className="pointer-events-none absolute -inset-px rounded-[20px] bg-gradient-to-r from-cyan-500/0 via-cyan-400/12 to-violet-500/0 opacity-0 blur-sm transition group-hover:opacity-100" />

      <ServiceCardArrow variant="accent" hint={viewMoreHint} pulseDelay={index * 0.35} />

      <span className="relative font-mono text-5xl font-black leading-none text-white/[0.08] transition-colors group-hover:text-cyan-400/30 sm:text-6xl">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative pr-2 sm:pr-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-[0_12px_32px_rgba(34,211,238,0.35)]">
          {icon}
        </div>
        <h3 className="mt-5 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">{title}</h3>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">{description}</p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {bullets.map((b) => (
            <li
              key={b}
              className="rounded-full border border-white/12 bg-white/[0.06] px-3 py-1.5 text-xs text-white/75 sm:text-sm"
            >
              {b}
            </li>
          ))}
        </ul>
        <p
          className="ai-service-cta service-offer-cta-pulse mt-8 inline-flex items-center gap-2.5 rounded-full border border-cyan-400/35 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.15)] transition group-hover:border-cyan-300/55 group-hover:bg-cyan-400/18 group-hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]"
          style={{ animationDelay: `${index * 0.35 + 0.15}s` }}
        >
          {ctaLabel}
          <ServiceCardInlineArrow />
        </p>
      </div>
    </motion.button>
  );
}
