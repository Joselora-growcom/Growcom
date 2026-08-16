"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useThrottledScrollProgress } from "../hooks/useThrottledScrollProgress";
import { useIsMobileViewport, smoothstep } from "../hooks/useIsMobileViewport";
import { useI18n } from "../i18n/LanguageProvider";
import { openContactForm } from "../lib/openContactForm";
import HeroFlowBackground from "./HeroFlowBackground";
import HeroMainSection from "./HeroMainSection";

const HERO_LOGO_SRC = "/growcom-intro-logo-transparent-v2.png";
const NAV_HEIGHT = 82;

function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

export default function Hero() {
  const isMobile = useIsMobileViewport();
  const fadeDistanceFactor = isMobile ? 0.76 : 0.74;
  const progress = useThrottledScrollProgress(NAV_HEIGHT, fadeDistanceFactor);
  const [videoError, setVideoError] = useState<string | null>(null);
  const { t } = useI18n();

  const canPlayMp4 = useMemo(() => {
    if (typeof document === "undefined") return true;
    const v = document.createElement("video");
    return Boolean(v.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"') || v.canPlayType("video/mp4"));
  }, []);

  const fadeProgress = smoothstep(clamp(progress / 0.98));
  const introOpacity = 1 - fadeProgress;
  const contentReveal = smoothstep(clamp((fadeProgress - 0.12) / 0.55));
  const horizonFlash = Math.max(0, 1 - Math.abs(fadeProgress - 0.5) * 8);
  const spacerHeight = `calc((100dvh - ${NAV_HEIGHT}px) * ${fadeDistanceFactor})`;

  return (
    <>
      <div
        className="hero-intro-fixed pointer-events-none fixed inset-x-0 top-[82px] z-40 isolate h-[calc(100dvh-82px)] overflow-hidden bg-[#030712]"
        style={{
          opacity: introOpacity,
          transform: `translate3d(0, ${fadeProgress * -12}px, 0)`,
        }}
        aria-hidden={introOpacity < 0.04}
      >
        <div className="hero-intro-static-tech pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute inset-0 bg-[#030712]" />
          <HeroFlowBackground className="absolute inset-0 z-[1]" />
          <div className="hero-flow-scrim absolute inset-0 z-[2]" />
          <div className="dark-tech-grid absolute inset-0 z-[3] opacity-[0.08]" />
          <div className="tech-bg-grid hero-intro-lite-hidden absolute inset-0 opacity-[0.1]" />
          <div className="tech-aurora-cyan hero-intro-lite-hidden absolute inset-0 opacity-[0.3]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(56,189,248,0.06),transparent_55%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020618]/14 via-[#061018]/28 to-[#020308]/72" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.5)_100%)]" />
          <div className="hero-automation-accent hero-intro-lite-hidden pointer-events-none absolute inset-0 mix-blend-soft-light opacity-[0.5]" aria-hidden />
        </div>

        <div
          className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-center justify-center px-6 sm:px-10"
          style={{ opacity: introOpacity }}
        >
          <div className="hero-growcom-nucleus h-20 w-full sm:h-28 md:h-36 lg:h-40">
            <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center" aria-hidden>
              <div className="hero-growcom-nucleus-halo shrink-0" />
            </div>
            <div className="hero-growcom-pulse relative z-[1] h-full w-full origin-center">
              <Image
                src={HERO_LOGO_SRC}
                alt="Growcom"
                fill
                sizes="(max-width: 640px) 280px, 480px"
                className="object-contain object-center mix-blend-screen"
                priority
              />
            </div>
          </div>
          <p className="absolute left-1/2 top-[calc(50%+4.4rem)] -translate-x-1/2 text-center text-[0.75rem] font-medium uppercase tracking-[0.32em] text-white/80 sm:top-[calc(50%+5.8rem)] sm:text-[0.84rem]">
            {t.hero.tagline}
          </p>
        </div>

        <div
          className="absolute bottom-6 left-1/2 z-[12] -translate-x-1/2 px-4 sm:bottom-8"
          style={{ opacity: Math.max(0, introOpacity * 1.15 - 0.15) }}
        >
          <Link
            href="#hero-main"
            aria-label={t.hero.scrollMouseLabel}
            className="pointer-events-auto flex flex-col items-center rounded-2xl p-2 text-white/78 outline-none transition-[color,transform] hover:-translate-y-0.5 hover:text-white focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030712]"
          >
            <svg
              width={26}
              height={44}
              viewBox="0 0 26 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0 overflow-visible text-white/78"
              aria-hidden
            >
              <rect x="1" y="1" width="24" height="40" rx="12" stroke="currentColor" strokeWidth="2" fill="none" />
              <g className="hero-mouse-wheel-svg-g">
                <circle cx="0" cy="0" r="3" className="fill-cyan-100" />
              </g>
            </svg>
          </Link>
        </div>
      </div>

      <section
        className="relative z-20 w-full bg-[#030712]"
        style={{ height: spacerHeight }}
        aria-hidden
      />

      <HeroMainSection
        scrollProgress={fadeProgress}
        contentEase={contentReveal}
        horizonFlash={horizonFlash}
        canPlayMp4={canPlayMp4}
        videoError={videoError}
        onVideoError={() => setVideoError(t.hero.videoError)}
        onOpenContact={openContactForm}
      />
    </>
  );
}
