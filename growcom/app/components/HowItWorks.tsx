"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { useI18n } from "../i18n/LanguageProvider";
import ScrollReveal from "./ScrollReveal";
const stepImages = ["/how-it-works/step-1.png", "/how-it-works/step-2.png", "/how-it-works/step-3.png"] as const;

function Icon({ step }: { step: number }) {
  const sizeClass = "h-7 w-7";

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
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden="true">
      <path d="M21 4 3 11l7 2 2 7 9-16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m10 13 11-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

type Card = {
  number: string;
  title: string;
  description: string;
  bullets: readonly string[];
  imageAlt: string;
  image: string;
};

function StepCard({ card, step }: { card: Card; step: number }) {
  return (
    <article className="h-full rounded-2xl border border-[#e7edf5] bg-white p-6 sm:p-8 md:p-9">
      <div className="flex items-center gap-4">
        <span className="text-6xl font-black leading-none text-gray-200">{card.number}</span>
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1094ff] text-white shadow-[0_10px_25px_rgba(16,148,255,0.35)]">
          <Icon step={step} />
        </div>
      </div>

      <h3 className="mt-5 text-3xl font-extrabold tracking-tight text-[#111827] sm:text-4xl md:text-[2.1rem]">{card.title}</h3>
      <p className="mt-4 text-base leading-7 text-[#4b5563] sm:text-xl sm:leading-9 md:text-[1.55rem] md:leading-[1.5]">{card.description}</p>

      <ul className="mt-7 space-y-3 text-base text-[#374151] sm:mt-8 sm:text-[1.05rem] md:text-[1.15rem]">
        {card.bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-3">
            <span className="mt-[0.62em] h-2.5 w-2.5 flex-none rounded-full bg-[#23c0df]" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function StepImage({ src, alt, hoverVideoSrc }: { src: string; alt: string; hoverVideoSrc?: string }) {
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleEnter = () => {
    if (!hoverVideoSrc) return;
    setIsHovering(true);
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    void video.play().catch(() => {
      // Ignore autoplay errors and keep image visible.
      setIsHovering(false);
    });
  };

  const handleLeave = () => {
    if (!hoverVideoSrc) return;
    setIsHovering(false);
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  };

  return (
    <div
      className="relative h-full min-h-[320px] overflow-hidden rounded-2xl"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onBlur={handleLeave}
    >
      <Image
        src={src}
        alt={alt}
        fill
        unoptimized
        quality={100}
        sizes="(max-width: 1024px) 100vw, 50vw"
        className={`h-full w-full object-cover transition-opacity duration-300 ${isHovering ? "opacity-0" : "opacity-100"}`}
      />
      {hoverVideoSrc ? (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="metadata"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${isHovering ? "opacity-100" : "opacity-0"}`}
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
    <section id="how-it-works" className="bg-[#edf6f9] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-12 text-center">
          <h2 className="text-4xl font-black tracking-tight text-[#101828] sm:text-5xl md:text-6xl">{t.howItWorksSection.title}</h2>
          <p className="mt-3 text-lg text-[#4b5563] sm:mt-4 sm:text-2xl md:text-[1.75rem]">
            {t.howItWorksSection.sub}
          </p>
        </header>

        <div className="space-y-10">
          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
            <ScrollReveal variant="left" delayMs={40}>
              <StepCard card={cards[0]} step={1} />
            </ScrollReveal>
            <ScrollReveal variant="right" delayMs={120}>
              <StepImage src={cards[0].image} alt={cards[0].imageAlt} hoverVideoSrc="/how-it-works/step-1-hover.mp4" />
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
            <ScrollReveal variant="left" delayMs={40} className="order-2 lg:order-1">
              <StepImage src={cards[1].image} alt={cards[1].imageAlt} hoverVideoSrc="/how-it-works/step-2-hover.mp4" />
            </ScrollReveal>
            <ScrollReveal variant="right" delayMs={120} className="order-1 lg:order-2">
              <StepCard card={cards[1]} step={2} />
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
            <ScrollReveal variant="left" delayMs={40}>
              <StepCard card={cards[2]} step={3} />
            </ScrollReveal>
            <ScrollReveal variant="right" delayMs={120}>
              <StepImage src={cards[2].image} alt={cards[2].imageAlt} hoverVideoSrc="/how-it-works/step-3-hover.mp4" />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
