"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useI18n } from "../i18n/LanguageProvider";

type ClientItem = {
  name: string;
  logoSrc: string;
  logoAlt: string;
  logoClass?: string;
};

const clients: ClientItem[] = [
  { name: "Asesoria Velar", logoSrc: "/clients/pyme-asesoria-velar-texto-v2.svg", logoAlt: "Logo de Asesoria Velar" },
  { name: "Aurea Partners", logoSrc: "/clients/pyme-aurea-partners-v2.svg", logoAlt: "Logo de Aurea Partners" },
  { name: "Clinica Dental La Encina", logoSrc: "/clients/pyme-clinica-la-encina-v5.svg", logoAlt: "Logo de Clinica Dental La Encina" },
  { name: "FAMMANTE", logoSrc: "/clients/fammante.png", logoAlt: "Logo de FAMMANTE" },
  { name: "Gómez Berruezo Abogados", logoSrc: "/clients/gomez-berruezo-abogados-transparent-v3.svg", logoAlt: "Logo de Gómez Berruezo Abogados" },
  { name: "LDR Sports", logoSrc: "/clients/ldr-sports-no-bg.png", logoAlt: "Logo de LDR Sports" },
];

const accentStyles = [
  {
    ring: "from-cyan-400/80 via-sky-500/40 to-transparent",
    glow: "shadow-[0_0_60px_rgba(34,211,238,0.22)]",
    badge: "bg-cyan-500/15 text-cyan-200 border-cyan-400/30",
    avatar: "from-cyan-400 to-sky-600",
  },
  {
    ring: "from-violet-400/80 via-fuchsia-500/40 to-transparent",
    glow: "shadow-[0_0_60px_rgba(139,92,246,0.22)]",
    badge: "bg-violet-500/15 text-violet-200 border-violet-400/30",
    avatar: "from-violet-400 to-fuchsia-600",
  },
  {
    ring: "from-emerald-400/80 via-teal-500/40 to-transparent",
    glow: "shadow-[0_0_60px_rgba(52,211,153,0.2)]",
    badge: "bg-emerald-500/15 text-emerald-200 border-emerald-400/30",
    avatar: "from-emerald-400 to-teal-600",
  },
] as const;

function ClientLogo({ client }: { client: ClientItem }) {
  return (
    <span className="success-client-chip">
      <Image
        src={client.logoSrc}
        alt={client.logoAlt}
        width={160}
        height={64}
        unoptimized
        className={client.logoClass ?? "h-10 w-auto max-h-11 object-contain sm:h-12 sm:max-h-12"}
      />
    </span>
  );
}

export default function SuccessStoriesSection() {
  const { t } = useI18n();
  const testimonials = t.successStories.testimonials;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const marqueeClients = [...clients, ...clients, ...clients];

  useEffect(() => {
    if (isPaused || testimonials.length <= 1) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, [isPaused, testimonials.length]);

  return (
    <section id="case-studies" className="success-section relative overflow-x-clip py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[#030712]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_0%_0%,rgba(56,189,248,0.14),transparent_55%),radial-gradient(ellipse_70%_50%_at_100%_20%,rgba(139,92,246,0.12),transparent_50%),radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(16,185,129,0.08),transparent_45%)]" />
        <div className="success-section-grid absolute inset-0 opacity-[0.12]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl">
          <p className="success-section-badge inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-cyan-200/95 backdrop-blur-md sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
            Casos reales
          </p>
          <h2 className="mt-6 text-left text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            {t.successStories.titleLine1}
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">
              {t.successStories.titleHighlight}
            </span>
          </h2>
          <p className="mt-5 max-w-2xl text-left text-base leading-relaxed text-white/70 sm:text-lg">{t.successStories.sub}</p>
        </header>

        <div
          className="relative mt-14"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-1 shadow-[0_32px_100px_rgba(0,0,0,0.45)] backdrop-blur-sm">
            <div
              className="flex transition-transform duration-[850ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translate3d(-${activeIndex * 100}%, 0, 0)` }}
            >
              {testimonials.map((item, index) => {
                const accent = accentStyles[index % accentStyles.length];
                return (
                  <article
                    key={item.name}
                    className={`relative w-full shrink-0 px-4 py-8 sm:px-10 sm:py-12 lg:px-14 lg:py-14 ${accent.glow}`}
                    aria-hidden={activeIndex !== index}
                  >
                    <div className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r ${accent.ring}`} />
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className={`rounded-full border px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] ${accent.badge}`}
                      >
                        Voz {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm font-medium text-white/45">Resultados medibles</span>
                    </div>
                    <blockquote className="mt-8 max-w-4xl text-left text-xl font-medium leading-relaxed text-white/92 sm:text-2xl sm:leading-relaxed lg:text-[1.75rem] lg:leading-[1.5]">
                      {item.quote}
                    </blockquote>
                    <div className="mt-10 flex items-center gap-4">
                      <span
                        className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${accent.avatar} text-lg font-bold text-white shadow-lg`}
                      >
                        {item.initial}
                      </span>
                      <div>
                        <p className="text-lg font-bold text-white sm:text-xl">{item.name}</p>
                        <p className="mt-0.5 text-sm text-white/60 sm:text-base">{item.role}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              {testimonials.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Ver testimonio de ${item.name}`}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    activeIndex === index ? "w-10 bg-cyan-400" : "w-2 bg-white/25 hover:bg-white/45"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setActiveIndex((activeIndex - 1 + testimonials.length) % testimonials.length)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-lg text-white/80 transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
                aria-label="Testimonio anterior"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => setActiveIndex((activeIndex + 1) % testimonials.length)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-lg text-white/80 transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
                aria-label="Testimonio siguiente"
              >
                →
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/95 sm:text-sm md:text-base">
                {t.successStories.clientsTitle}
              </p>
              <p className="mt-3 text-lg font-medium text-white/70 sm:text-xl md:text-2xl">Marcas que confían en Growcom</p>
            </div>
          </div>

          <div className="success-clients-stage relative mt-8 overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] py-6">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0a1020] via-[#0a1020]/80 to-transparent sm:w-24" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0a1020] via-[#0a1020]/80 to-transparent sm:w-24" />

            <div className="success-clients-marquee">
              {marqueeClients.map((client, idx) => (
                <ClientLogo key={`${client.name}-${idx}`} client={client} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
