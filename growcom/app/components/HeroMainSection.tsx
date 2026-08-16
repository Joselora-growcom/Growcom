"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { useIsMobileViewport } from "../hooks/useIsMobileViewport";
import { useI18n } from "../i18n/LanguageProvider";

export const HERO_MAIN_VIDEO_SRC = "/hero/0519.mp4";
export const HERO_MAIN_VIDEO_MOBILE_SRC = "/hero/7692863-hd_1920_1080_25fps.mp4";

type HeroMainSectionProps = {
  scrollProgress: number;
  contentEase: number;
  horizonFlash: number;
  canPlayMp4: boolean;
  videoError: string | null;
  onVideoError: () => void;
  onOpenContact: () => void;
};

export default function HeroMainSection({
  scrollProgress,
  contentEase,
  horizonFlash,
  canPlayMp4,
  videoError,
  onVideoError,
  onOpenContact,
}: HeroMainSectionProps) {
  const { t } = useI18n();
  const isMobile = useIsMobileViewport();
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const shouldLoadVideo = scrollProgress > 0.12;
  const videoSrc = isMobile ? HERO_MAIN_VIDEO_MOBILE_SRC : HERO_MAIN_VIDEO_SRC;
  const ctaEase = Math.max(0, (contentEase - 0.1) / 0.9);
  const contentLift = isMobile ? 18 : 24;

  useEffect(() => {
    if (!shouldLoadVideo) return;

    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    let visible = false;

    const tryPlay = () => {
      if (!visible || document.hidden) return;
      void video.play().catch(() => undefined);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = Boolean(entry?.isIntersecting && entry.intersectionRatio >= 0.08);
        if (visible) tryPlay();
        else video.pause();
      },
      { threshold: [0, 0.08, 0.25] }
    );

    observer.observe(section);
    video.addEventListener("canplay", tryPlay);
    video.addEventListener("loadeddata", tryPlay);

    return () => {
      observer.disconnect();
      video.removeEventListener("canplay", tryPlay);
      video.removeEventListener("loadeddata", tryPlay);
    };
  }, [shouldLoadVideo, videoSrc]);

  return (
    <section
      ref={sectionRef}
      id="hero-main"
      className="hero-main-section relative z-10 flex min-h-[calc(100dvh-82px)] items-center justify-center overflow-hidden bg-[#030712] text-center text-white"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {/* Poster estático hasta que el vídeo entre en carga */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={isMobile ? "/hero/7692863-poster.jpg" : "/hero/0519-poster.jpg"}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          decoding="async"
        />
        {shouldLoadVideo ? (
          <video
            ref={videoRef}
            key={videoSrc}
            className="hero-main-video absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster={isMobile ? "/hero/7692863-poster.jpg" : "/hero/0519-poster.jpg"}
            disablePictureInPicture
            disableRemotePlayback
            onError={onVideoError}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : null}
        <div className="absolute inset-0 bg-[#030712]/18" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/35 via-transparent to-[#030712]/45" />
        <div
          className="hero-main-horizon absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent"
          style={{ opacity: horizonFlash * contentEase * 0.7 }}
        />
      </div>

      {(!canPlayMp4 || videoError) && (
        <div className="absolute inset-0 z-[1] grid place-items-center bg-[#030712] px-6">
          <div className="max-w-xl space-y-3 text-center">
            <p className="text-base font-semibold text-white">{videoError ?? t.hero.videoError}</p>
            <p className="text-sm text-white/75">
              {t.hero.videoHint} <span className="font-mono">{videoSrc}</span>
            </p>
          </div>
        </div>
      )}

      <div
        className="relative z-10 mx-auto w-full max-w-5xl px-4 py-20 sm:px-6 lg:px-8"
        style={{
          opacity: contentEase,
          transform: `translate3d(0, ${(1 - contentEase) * contentLift}px, 0)`,
        }}
      >
        <p className="hero-main-badge mb-6 inline-flex items-center gap-2.5 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-100/90 sm:text-[11px]">
          <span className="relative h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
          {t.hero.contentBadge}
        </p>

        <h1 className="mx-auto max-w-4xl text-balance text-[2rem] font-black leading-[1.06] tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] sm:text-6xl md:text-[4.25rem]">
          {t.hero.h1Line1}
          <br />
          <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
            {t.hero.h1Emphasis}
          </span>
          <br />
          <span className="text-white">{t.hero.h1Line3}</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/90 sm:mt-7 sm:text-xl sm:leading-relaxed">
          {t.hero.sub}
        </p>

        <div
          className="mt-9 flex flex-wrap items-center justify-center gap-3 sm:mt-10 sm:gap-4"
          style={{
            opacity: ctaEase,
            transform: `translate3d(0, ${(1 - ctaEase) * 12}px, 0)`,
          }}
        >
          <button
            type="button"
            onClick={onOpenContact}
            className="hero-main-cta-primary inline-flex h-12 items-center justify-center rounded-xl px-7 text-base font-semibold text-[#030712] sm:h-14 sm:px-9 sm:text-lg"
          >
            {t.hero.ctaPrimary}
          </button>
          <Link
            href="#how-it-works"
            className="inline-flex h-12 items-center justify-center rounded-xl border border-white/20 bg-white/[0.06] px-7 text-base font-semibold text-white transition hover:border-cyan-400/40 hover:bg-white/10 sm:h-14 sm:px-9 sm:text-lg"
          >
            {t.hero.ctaSecondary}
          </Link>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-24 bg-gradient-to-b from-transparent to-[#030712]/80"
        aria-hidden
      />
    </section>
  );
}
