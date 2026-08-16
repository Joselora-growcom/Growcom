"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useI18n } from "../i18n/LanguageProvider";
import ScrollReveal from "./ScrollReveal";

const stepImages = ["/how-it-works/step-1.png", "/how-it-works/step-2.png", "/how-it-works/step-3.png"] as const;

function Icon({ step }: { step: number }) {
  const sizeClass = "h-6 w-6";

  if (step === 1) {
    return (
      <svg viewBox="0 0 24 24" className={sizeClass} fill="none" aria-hidden="true">
        <path d="M4 11 8.5 6.5h11v11L15 22V11H4Z" fill="currentColor" />
      </svg>
    );
  }
  if (step === 2) {
    return (
      <svg viewBox="0 0 24 24" className={sizeClass} fill="none" aria-hidden="true">
        <path d="M4 20h4l10-10-4-4L4 16v4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="m12.5 7.5 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <path
        d="M21 4 3 11l7 2 2 7 9-16Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="m10 13 11-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

type Card = {
  number: string;
  title: string;
  description: string;
  rail: readonly string[];
  bullets: readonly string[];
  imageAlt: string;
  image: string;
};

function StepRail({ items }: { items: readonly string[] }) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-y-2 rounded-2xl border border-white/10 bg-black/35 p-3 font-mono text-[10px] leading-none text-slate-200 sm:text-[11px]">
      {items.map((label, i) => (
        <span key={`${label}-${i}`} className="flex items-center">
          {i > 0 ? <span className="mx-2 text-cyan-400/80">→</span> : null}
          <span className="rounded-lg border border-white/10 bg-white/[0.06] px-2.5 py-1.5">{label}</span>
        </span>
      ))}
    </div>
  );
}

function StepCard({ card, step }: { card: Card; step: number }) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-sm font-bold tabular-nums tracking-[0.2em] text-cyan-300/95">{card.number}</span>
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-[0_8px_24px_rgba(34,211,238,0.35)]">
          <Icon step={step} />
        </div>
      </div>

      <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-[1.85rem]">{card.title}</h3>
      <p className="mt-3 text-base leading-relaxed text-slate-400 sm:text-lg sm:leading-relaxed">{card.description}</p>

      <StepRail items={card.rail} />

      <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-6 text-sm leading-relaxed text-slate-300 sm:text-[0.95rem]">
        {card.bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.65)]" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function StepImage({ src, alt, hoverVideoSrc }: { src: string; alt: string; hoverVideoSrc?: string }) {
  const [isHovering, setIsHovering] = useState(false);
  const [loadVideo, setLoadVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const wantPlayRef = useRef(false);

  useEffect(() => {
    if (!loadVideo || !wantPlayRef.current) return;
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    void video.play().catch(() => {
      setIsHovering(false);
    });
  }, [loadVideo]);

  const handleEnter = () => {
    if (!hoverVideoSrc) return;
    wantPlayRef.current = true;
    setLoadVideo(true);
    setIsHovering(true);
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    void video.play().catch(() => {
      setIsHovering(false);
    });
  };

  const handleLeave = () => {
    if (!hoverVideoSrc) return;
    wantPlayRef.current = false;
    setIsHovering(false);
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  };

  return (
    <div
      className="group relative h-full min-h-[300px] overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 shadow-[0_20px_60px_rgba(0,0,0,0.5)] ring-1 ring-white/5 sm:min-h-[320px]"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onBlur={handleLeave}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-indigo-500/10 opacity-80 transition group-hover:opacity-100" />
      <Image
        src={src}
        alt={alt}
        fill
        quality={75}
        sizes="(max-width: 1024px) 100vw, 50vw"
        className={`h-full w-full object-cover transition duration-500 ${isHovering ? "scale-105 opacity-0" : "scale-100 opacity-100"}`}
      />
      {hoverVideoSrc && loadVideo ? (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="none"
          className={`absolute inset-0 h-full w-full object-cover transition duration-500 ${isHovering ? "scale-105 opacity-100" : "scale-100 opacity-0"}`}
        >
          <source src={hoverVideoSrc} type="video/mp4" />
        </video>
      ) : null}
    </div>
  );
}

export default function HowItWorks() {
  const { t } = useI18n();
  const cards: Card[] = t.howItWorksSection.cards.map((card, idx) => ({
    ...card,
    image: stepImages[idx],
  }));

  return (
    <section id="how-it-works" className="relative overflow-x-clip bg-[#030712] py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(56,189,248,0.15),transparent)]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[min(90%,720px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] lg:items-start lg:gap-12 xl:grid-cols-[minmax(0,19rem)_minmax(0,1fr)] xl:gap-16">
          <header className="mb-12 lg:sticky lg:top-[calc(82px+1.5rem)] lg:z-10 lg:mb-0 lg:self-start">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-400/90">Pipeline</p>
            <h2 className="mt-3 text-left text-4xl font-semibold tracking-tight sm:text-5xl">{t.howItWorksSection.title}</h2>
            <p className="mt-4 text-left text-lg leading-relaxed text-slate-400">{t.howItWorksSection.sub}</p>
          </header>

          <div className="min-w-0 space-y-12 sm:space-y-16">
          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
            <ScrollReveal variant="left" delayMs={40}>
              <StepCard card={cards[0]} step={1} />
            </ScrollReveal>
            <ScrollReveal variant="right" delayMs={120}>
              <StepImage src={cards[0].image} alt={cards[0].imageAlt} hoverVideoSrc="/how-it-works/step-1-hover.mp4" />
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
            <ScrollReveal variant="left" delayMs={40} className="order-2 lg:order-1">
              <StepImage src={cards[1].image} alt={cards[1].imageAlt} hoverVideoSrc="/how-it-works/step-2-hover.mp4" />
            </ScrollReveal>
            <ScrollReveal variant="right" delayMs={120} className="order-1 lg:order-2">
              <StepCard card={cards[1]} step={2} />
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
            <ScrollReveal variant="left" delayMs={40}>
              <StepCard card={cards[2]} step={3} />
            </ScrollReveal>
            <ScrollReveal variant="right" delayMs={120}>
              <StepImage src={cards[2].image} alt={cards[2].imageAlt} hoverVideoSrc="/how-it-works/step-3-hover.mp4" />
            </ScrollReveal>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
