"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useI18n } from "../i18n/LanguageProvider";

export default function Hero() {
  const [progress, setProgress] = useState(0);
  const navHeight = 82;
  const fadeDistanceFactor = 0.72;
  const [videoError, setVideoError] = useState<string | null>(null);
  const { t } = useI18n();
  const canPlayMp4 = useMemo(() => {
    if (typeof document === "undefined") return true;
    const v = document.createElement("video");
    return Boolean(v.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"') || v.canPlayType("video/mp4"));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = Math.max((window.innerHeight - navHeight) * fadeDistanceFactor, 1);
      const current = Math.min(Math.max(window.scrollY, 0), maxScroll);

      setProgress(current / maxScroll);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const fadeProgress = Math.max(0, Math.min(1, (progress - 0.06) / 0.94));
  const introOpacity = Math.max(0, 1 - fadeProgress * 1.25);
  const introLayerOpacity = Math.max(0, 1 - fadeProgress * 1.5);
  const introBlur = fadeProgress * 8;
  const introDisappear = fadeProgress > 0.985;
  return (
    <>
      <div
        className="pointer-events-none fixed inset-x-0 top-[82px] z-30 h-[calc(100vh-82px)] overflow-hidden transition-opacity duration-300"
        style={{
          opacity: introLayerOpacity,
          filter: `blur(${introBlur}px)`,
          transform: `scale(${1 - fadeProgress * 0.04})`,
          visibility: introDisappear ? "hidden" : "visible",
        }}
      >
        <div className="absolute inset-0 bg-[#05030f]" />
        <div className="tech-bg-grid absolute inset-0 opacity-28" />
        <div className="tech-grid-drift absolute inset-0 opacity-32" />
        <div className="tech-scanline absolute inset-0 opacity-22" />
        <div className="tech-aurora-cyan absolute inset-0 opacity-100" />
        <div className="tech-shadow-orbit-a absolute -left-[24%] top-[6%] h-[48vh] w-[56vw] rounded-full bg-[#35d3ee]/28 blur-[105px]" />
        <div className="tech-shadow-orbit-b absolute -right-[26%] bottom-[0%] h-[46vh] w-[52vw] rounded-full bg-[#28b8dc]/24 blur-[105px]" />
        <div className="tech-light-sweep tech-light-sweep-a absolute -left-1/3 top-[14%] h-36 w-[78%] rounded-full bg-[#35d3ee]/30 blur-3xl" />
        <div className="tech-light-sweep tech-light-sweep-b absolute -right-1/3 top-[58%] h-32 w-[76%] rounded-full bg-[#28b8dc]/26 blur-3xl" />
        <div className="tech-particles absolute inset-0 opacity-55" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_22%,rgba(53,211,238,0.34),transparent_34%),radial-gradient(circle_at_84%_22%,rgba(40,184,220,0.26),transparent_36%),radial-gradient(circle_at_50%_82%,rgba(8,25,36,0.72),transparent_54%)]" />
        <div className="absolute left-1/2 top-[52%] h-64 w-[92%] max-w-5xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#35d3ee]/24 blur-[120px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/18 via-black/44 to-black/82" />

        <div
          className="relative mx-auto flex h-full w-full max-w-7xl items-center justify-center px-6 sm:px-10"
          style={{
            opacity: introOpacity,
            filter: `blur(${introBlur * 0.6}px)`,
          }}
        >
          <div className="relative h-20 w-full sm:h-28 md:h-36 lg:h-40">
            <Image
              src="/growcom-logo-white-clean.png"
              alt="Growcom"
              fill
              className="object-contain object-center"
              priority
            />
          </div>
        </div>

        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
          style={{ opacity: Math.max(0, 1 - fadeProgress * 1.6) }}
        >
          <p className="text-xs font-semibold tracking-[0.25em] text-white/65">{t.hero.scroll}</p>
          <p className="mt-1 text-xl leading-none text-white/55">&darr;</p>
        </div>
      </div>

      <section className="relative z-20 h-[72vh] w-full" aria-hidden />

      <section className="relative z-10 overflow-hidden bg-white px-4 pb-24 pt-0 text-center sm:px-6 lg:px-8">
        <div className="light-tech-grid pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#eef5ff]/80 via-white to-white" />

        <div className="relative mx-auto w-full max-w-5xl pt-4 transition-[transform,opacity] duration-300 sm:pt-6">
          <h1 className="mx-auto mt-0 max-w-4xl text-balance text-4xl font-black leading-[1.05] tracking-tight text-[#0d1220] sm:text-6xl md:text-7xl">
            {t.hero.h1Line1}
            <br />
            <span className="text-[#0a87f5]">{t.hero.h1Emphasis}</span>
            <br />
            {t.hero.h1Line3}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg font-medium text-[#5a6575] sm:text-2xl">
            {t.hero.sub}
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#calendly"
              className="inline-flex h-14 items-center justify-center rounded-xl bg-black px-8 text-lg font-semibold text-white shadow-[0_8px_24px_rgba(0,0,0,0.22)] transition-transform hover:-translate-y-0.5"
            >
              {t.hero.ctaPrimary} <span className="ml-2 text-xl">&rarr;</span>
            </Link>
            <Link
              href="#how-it-works"
              className="inline-flex h-14 items-center justify-center rounded-xl border-2 border-black bg-white px-8 text-lg font-semibold text-black transition-transform hover:-translate-y-0.5"
            >
              {t.hero.ctaSecondary}
            </Link>
          </div>

          <div className="mx-auto mt-14 w-full max-w-5xl overflow-hidden rounded-2xl border border-black/10 bg-black shadow-[0_20px_55px_rgba(0,0,0,0.12)]">
            <div className="relative aspect-[16/9] w-full">
              <video
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                onError={() => {
                  setVideoError(t.hero.videoError);
                }}
              >
                <source src="/2516162-hd_1920_1080_24fps.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>

              {(!canPlayMp4 || videoError) && (
                <div className="absolute inset-0 grid place-items-center bg-black/70 px-6 text-center">
                  <div className="max-w-xl space-y-3">
                    <p className="text-base font-semibold text-white">
                      {videoError ?? t.hero.videoError}
                    </p>
                    <p className="text-sm text-white/75">
                      {t.hero.videoHint}{" "}
                      <span className="font-mono">/2516162-hd_1920_1080_24fps.mp4</span>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
