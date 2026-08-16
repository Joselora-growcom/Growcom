"use client";

import { useEffect, useRef, useState } from "react";
import { useIsMobileViewport } from "../hooks/useIsMobileViewport";
import { useI18n } from "../i18n/LanguageProvider";

type PainKey = "manual" | "disconnected" | "timeLoss" | "slowDecisions";

const painMeta: Record<
  PainKey,
  { index: string; accent: string; glow: string; visual: "manual" | "disconnected" | "time" | "slow" }
> = {
  manual: {
    index: "01",
    accent: "from-rose-500/20 via-rose-400/5 to-transparent",
    glow: "group-hover:shadow-[0_0_48px_rgba(244,63,94,0.22)]",
    visual: "manual",
  },
  disconnected: {
    index: "02",
    accent: "from-amber-500/20 via-orange-400/5 to-transparent",
    glow: "group-hover:shadow-[0_0_48px_rgba(251,146,60,0.2)]",
    visual: "disconnected",
  },
  timeLoss: {
    index: "03",
    accent: "from-violet-500/20 via-violet-400/5 to-transparent",
    glow: "group-hover:shadow-[0_0_48px_rgba(139,92,246,0.22)]",
    visual: "time",
  },
  slowDecisions: {
    index: "04",
    accent: "from-cyan-500/20 via-sky-400/5 to-transparent",
    glow: "group-hover:shadow-[0_0_48px_rgba(34,211,238,0.2)]",
    visual: "slow",
  },
};

export default function Partners() {
  const { t } = useI18n();

  const painPoints: { key: PainKey; title: string; text: string }[] = [
    { key: "manual", ...t.page2.painPoints.manual },
    { key: "disconnected", ...t.page2.painPoints.disconnected },
    { key: "timeLoss", ...t.page2.painPoints.timeLoss },
    { key: "slowDecisions", ...t.page2.painPoints.slowDecisions },
  ];

  return (
    <section className="familiar-section relative overflow-hidden bg-[#030712] py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="dark-tech-grid absolute inset-0 opacity-[0.14]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(56,189,248,0.12),transparent_55%),radial-gradient(ellipse_60%_40%_at_100%_80%,rgba(244,63,94,0.1),transparent_50%),radial-gradient(ellipse_50%_40%_at_0%_90%,rgba(139,92,246,0.08),transparent_45%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/20 via-transparent to-[#030712]/90" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <p className="familiar-section-badge mb-5 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-cyan-200/90 backdrop-blur-md sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-400 shadow-[0_0_8px_rgba(251,113,133,0.9)]" />
            {t.page2.familiarBadge}
          </p>
          <h2 className="text-balance text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
            {t.page2.familiarTitle}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/65 sm:text-xl sm:leading-relaxed">
            {t.page2.familiarSub}
          </p>
        </header>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:grid-cols-12 lg:gap-5">
          {painPoints.map((item, i) => {
            const meta = painMeta[item.key];
            const spanClass =
              i === 0
                ? "lg:col-span-7"
                : i === 1
                  ? "lg:col-span-5"
                  : i === 2
                    ? "lg:col-span-5"
                    : "lg:col-span-7";

            if (item.key === "manual") {
              return (
                <VideoPainCard
                  key={item.key}
                  spanClass={spanClass}
                  glow={meta.glow}
                  index={meta.index}
                  title={item.title}
                  text={item.text}
                  videoSrc="/videos/procesos-manuales.mp4"
                  posterSrc="/videos/procesos-manuales-poster.jpg"
                  tint="rose"
                />
              );
            }

            if (item.key === "disconnected") {
              return (
                <VideoPainCard
                  key={item.key}
                  spanClass={spanClass}
                  glow={meta.glow}
                  index={meta.index}
                  title={item.title}
                  text={item.text}
                  videoSrc="/videos/herramientas-desconectadas.mp4"
                  posterSrc="/videos/herramientas-desconectadas-poster.jpg"
                  tint="amber"
                />
              );
            }

            if (item.key === "timeLoss") {
              return (
                <VideoPainCard
                  key={item.key}
                  spanClass={spanClass}
                  glow={meta.glow}
                  index={meta.index}
                  title={item.title}
                  text={item.text}
                  videoSrc="/videos/perdida-tiempo.mp4"
                  posterSrc="/videos/perdida-tiempo-poster.jpg"
                  tint="violet"
                />
              );
            }

            return (
              <VideoPainCard
                key={item.key}
                spanClass={spanClass}
                glow={meta.glow}
                index={meta.index}
                title={item.title}
                text={item.text}
                videoSrc="/videos/decisiones-lentas.mp4"
                posterSrc="/videos/decisiones-lentas-poster.jpg"
                tint="cyan"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

type VideoPainCardProps = {
  spanClass: string;
  glow: string;
  index: string;
  title: string;
  text: string;
  videoSrc: string;
  posterSrc?: string;
  tint: "rose" | "amber" | "violet" | "cyan";
};

const tintStyles = {
  rose: {
    base: "bg-rose-500/10 group-hover:bg-rose-500/6",
    accent: "bg-gradient-to-br from-rose-500/16 via-rose-400/6 to-transparent",
    gradient: "bg-gradient-to-r from-[#030712]/45 via-[#030712]/15 to-transparent",
  },
  amber: {
    base: "bg-yellow-400/10 group-hover:bg-yellow-400/6",
    accent: "bg-gradient-to-br from-yellow-400/16 via-amber-300/6 to-transparent",
    gradient: "bg-gradient-to-r from-[#030712]/45 via-[#030712]/15 to-transparent",
  },
  violet: {
    base: "bg-violet-500/10 group-hover:bg-violet-500/6",
    accent: "bg-gradient-to-br from-violet-500/16 via-violet-400/6 to-transparent",
    gradient: "bg-gradient-to-r from-[#030712]/45 via-[#030712]/15 to-transparent",
  },
  cyan: {
    base: "bg-cyan-500/10 group-hover:bg-cyan-500/6",
    accent: "bg-gradient-to-br from-cyan-500/16 via-sky-400/6 to-transparent",
    gradient: "bg-gradient-to-r from-[#030712]/45 via-[#030712]/15 to-transparent",
  },
} as const;

function VideoPainCard({ spanClass, glow, index, title, text, videoSrc, posterSrc, tint }: VideoPainCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const pendingPlayRef = useRef(false);
  const isMobile = useIsMobileViewport();
  const [loadVideo, setLoadVideo] = useState(false);
  const [inView, setInView] = useState(false);
  const styles = tintStyles[tint];

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        const visible = entry.isIntersecting && entry.intersectionRatio >= 0.2;
        setInView(visible);
        // En móvil cargamos al entrar en vista; en desktop solo al hover (ahorra red).
        if (visible && window.matchMedia("(hover: none)").matches) {
          pendingPlayRef.current = true;
          setLoadVideo(true);
        }
      },
      { threshold: [0, 0.2, 0.45], rootMargin: "48px 0px" }
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!loadVideo) return;
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = () => {
      if (!pendingPlayRef.current) return;
      void video.play().catch(() => undefined);
    };

    video.addEventListener("canplay", tryPlay);
    tryPlay();

    return () => video.removeEventListener("canplay", tryPlay);
  }, [loadVideo]);

  useEffect(() => {
    if (!loadVideo) return;
    const video = videoRef.current;
    if (!video) return;
    if (!window.matchMedia("(hover: none)").matches) return;

    if (inView) {
      pendingPlayRef.current = true;
      void video.play().catch(() => undefined);
    } else {
      video.pause();
    }
  }, [loadVideo, inView]);

  const playVideo = () => {
    pendingPlayRef.current = true;
    setLoadVideo(true);
    const video = videoRef.current;
    if (!video) return;
    void video.play().catch(() => undefined);
  };

  const pauseVideo = () => {
    if (isMobile && inView) return;
    pendingPlayRef.current = false;
    const video = videoRef.current;
    if (!video) return;
    video.pause();
  };

  const overlayFade = isMobile && inView ? "opacity-35" : "";

  return (
    <article
      ref={cardRef}
      className={`familiar-pain-card group relative min-h-[280px] overflow-hidden rounded-3xl border border-white/10 bg-[#060a12] shadow-[0_24px_60px_rgba(0,0,0,0.35)] transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-1 hover:border-white/20 sm:min-h-[300px] ${spanClass} ${glow}`}
      onMouseEnter={playVideo}
      onMouseLeave={pauseVideo}
      onFocus={playVideo}
      onBlur={pauseVideo}
    >
      {posterSrc ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={posterSrc}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          decoding="async"
          aria-hidden
        />
      ) : (
        <div className="absolute inset-0 bg-[#060a12]" aria-hidden />
      )}
      {loadVideo ? (
        <video
          ref={videoRef}
          className="pain-card-video absolute inset-0 h-full w-full object-cover"
          src={videoSrc}
          muted
          loop
          playsInline
          preload="none"
          poster={posterSrc}
          aria-hidden
        />
      ) : null}
      <div
        className={`pointer-events-none absolute inset-0 ${isMobile ? "transition-opacity duration-500" : "transition-colors duration-500"} ${styles.base} ${overlayFade}`}
        aria-hidden
      />
      {styles.accent ? (
        <div
          className={`pointer-events-none absolute inset-0 ${isMobile ? `transition-opacity duration-500 ${overlayFade}` : ""} ${styles.accent}`}
          aria-hidden
        />
      ) : null}
      <div
        className={`pointer-events-none absolute inset-0 ${styles.gradient} ${isMobile && inView ? "opacity-70" : ""}`}
        aria-hidden
      />

      <div className="relative z-10 flex min-h-[280px] flex-col justify-center p-6 sm:min-h-[300px] sm:p-7">
        <span className="absolute right-4 top-4 font-mono text-[0.65rem] font-medium tracking-widest text-white/50">
          {index}
        </span>
        <h3 className="pr-10 text-xl font-bold leading-snug tracking-tight text-white drop-shadow-sm sm:text-2xl">{title}</h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-white/85 drop-shadow-sm sm:text-base sm:leading-relaxed">{text}</p>
      </div>
    </article>
  );
}

function PainVisual({ type }: { type: "manual" | "disconnected" | "time" | "slow" }) {
  const base = "h-[88px] w-[88px] sm:h-[100px] sm:w-[100px]";

  if (type === "manual") {
    return (
      <svg className={base} viewBox="0 0 100 100" fill="none" aria-hidden>
        <circle cx="50" cy="50" r="38" className="stroke-rose-400/40" strokeWidth="1.5" strokeDasharray="4 6" />
        <path
          d="M50 22 v12 M50 66 v12 M22 50 h12 M66 50 h12"
          className="stroke-rose-300/70"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M38 38 L50 50 L62 38 M38 62 L50 50 L62 62"
          className="stroke-rose-200"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="50" cy="50" r="8" className="fill-rose-400/30 stroke-rose-300" strokeWidth="1.5" />
      </svg>
    );
  }

  if (type === "disconnected") {
    return (
      <svg className={base} viewBox="0 0 100 100" fill="none" aria-hidden>
        <circle cx="28" cy="50" r="14" className="fill-amber-500/20 stroke-amber-300/80" strokeWidth="2" />
        <circle cx="72" cy="32" r="12" className="fill-amber-500/15 stroke-amber-300/60" strokeWidth="2" />
        <circle cx="72" cy="68" r="12" className="fill-amber-500/15 stroke-amber-300/60" strokeWidth="2" />
        <path d="M40 48 L58 36" className="stroke-amber-200/50" strokeWidth="2" strokeDasharray="3 5" strokeLinecap="round" />
        <path d="M40 52 L58 64" className="stroke-amber-200/50" strokeWidth="2" strokeDasharray="3 5" strokeLinecap="round" />
        <path d="M46 50 h12" className="stroke-rose-400" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M58 44 l6 6 M58 56 l6 -6" className="stroke-rose-400/90" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "time") {
    return (
      <svg className={base} viewBox="0 0 100 100" fill="none" aria-hidden>
        <circle cx="50" cy="54" r="32" className="stroke-violet-300/70" strokeWidth="2" />
        <path d="M50 54 V34" className="stroke-violet-200" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M50 54 L64 62" className="stroke-violet-200" strokeWidth="2.5" strokeLinecap="round" />
        <path
          d="M30 78 Q50 88 70 78"
          className="stroke-violet-400/50"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="72" cy="28" r="10" className="fill-violet-500/25 stroke-violet-300/80" strokeWidth="1.5" />
        <path d="M68 28 h8 M72 24 v8" className="stroke-violet-200/80" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg className={base} viewBox="0 0 100 100" fill="none" aria-hidden>
      <path d="M18 68 L35 52 L52 58 L68 38 L82 48" className="stroke-cyan-300/40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 68 L35 52 L52 58 L68 38 L82 28" className="stroke-cyan-200" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="82" cy="28" r="5" className="fill-cyan-400/40 stroke-cyan-200" strokeWidth="1.5" />
      <rect x="22" y="22" width="56" height="36" rx="6" className="stroke-cyan-300/30" strokeWidth="1.5" fill="cyan-500/10" />
      <path d="M30 42 h40 M30 50 h28" className="stroke-cyan-200/40" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
