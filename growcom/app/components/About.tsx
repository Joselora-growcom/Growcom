"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { useI18n } from "../i18n/LanguageProvider";
import AboutTechBackground from "./AboutTechBackground";

const teamImages = [
  {
    image: "/about-us/manuel-franco-professional.png",
    imageClass: "object-cover object-[center_40%]",
    linkedin: "https://www.linkedin.com/in/manuelfrancoguardiola/",
  },
  {
    image: "/about-us/jose-lora-20260426.png",
    imageClass: "scale-[1.42] object-[center_26%]",
    linkedin: "https://www.linkedin.com/in/jos%C3%A9-lora-tamayo-iglesias-52768b251/",
  },
  {
    image: "/about-us/manuel-lora-tamayo.png",
    imageClass: "object-cover object-[center_22%]",
    linkedin: "https://www.linkedin.com/in/manuel-lora-tamayo-iglesias/",
  },
] as const;

const ease = [0.22, 1, 0.36, 1] as const;

type AboutProps = {
  immediateReveal?: boolean;
};

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  immediate?: boolean;
};

function Reveal({ children, className = "", delay = 0, immediate = false }: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  if (immediate) {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, delay, ease }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.75, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

function LinkedinIcon({ href }: { href: string }) {
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white/90 backdrop-blur-md transition hover:border-cyan-400/40 hover:bg-cyan-400/15 hover:text-white"
    >
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    </a>
  );
}

export default function About({ immediateReveal = false }: AboutProps) {
  const { t } = useI18n();
  const reduce = useReducedMotion();
  const [selectedMember, setSelectedMember] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  const team = t.aboutSection.team.map((person, idx) => ({
    ...person,
    ...teamImages[idx],
  }));
  const selected = selectedMember !== null ? t.aboutSection.backgrounds[selectedMember] : null;
  const reveal = immediateReveal;

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (selectedMember === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedMember(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedMember]);

  return (
    <div className="about-v2 relative overflow-hidden bg-[#03050a] text-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="dark-tech-grid absolute inset-0 opacity-[0.18]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-15%,rgba(56,189,248,0.14),transparent_58%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_100%_60%,rgba(139,92,246,0.08),transparent_50%)]" />
      </div>

      {/* Hero */}
      <section className="relative min-h-[92dvh] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={reduce ? false : { scale: 1.06, opacity: 0 }}
          animate={reduce ? undefined : { scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease }}
        >
          <AboutTechBackground />
        </motion.div>
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-[#03050a]/35 via-transparent to-[#03050a]/90"
          aria-hidden
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#03050a]/70 via-transparent to-transparent"
          aria-hidden
        />

        {!reduce ? (
          <motion.div
            className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]"
            animate={{ opacity: [0.3, 0.55, 0.3], scale: [1, 1.08, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        ) : null}

        <div className="relative z-10 mx-auto flex min-h-[92dvh] max-w-7xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-24 lg:px-8">
          <Reveal immediate={reveal} className="max-w-3xl">
            <p className="inline-flex items-center gap-2.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-100/90 backdrop-blur-md sm:text-[11px]">
              <span className="relative flex h-2 w-2">
                {!reduce ? (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-50" />
                ) : null}
                <span className="relative h-2 w-2 rounded-full bg-cyan-400" />
              </span>
              Growcom
            </p>
            <h1 className="mt-8 text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              {t.aboutSection.title.split(" ").length > 1 ? (
                <>
                  {t.aboutSection.title.split(" ")[0]}{" "}
                  <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                    {t.aboutSection.title.split(" ").slice(1).join(" ")}
                  </span>
                </>
              ) : (
                t.aboutSection.title
              )}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg sm:leading-8">
              {t.aboutSection.intro}
            </p>
          </Reveal>

          <Reveal immediate={reveal} delay={0.16} className="mt-8 w-full max-w-2xl">
            <figure className="about-belief-card relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-md sm:p-7">
              <span
                className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-transparent via-cyan-400/80 to-transparent"
                aria-hidden
              />
              <figcaption className="inline-flex rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-200/90">
                {t.aboutSection.beliefLabel}
              </figcaption>
              <blockquote className="mt-4 text-lg font-semibold leading-snug tracking-tight text-white sm:text-xl sm:leading-[1.45]">
                <span className="text-cyan-400/70">&ldquo;</span>
                {t.aboutSection.bannerQuote}
                <span className="text-cyan-400/70">&rdquo;</span>
              </blockquote>
            </figure>
          </Reveal>
        </div>

        {!reduce ? (
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2.2, repeat: Infinity }}
            aria-hidden
          >
            <motion.div className="h-10 w-px bg-gradient-to-b from-transparent via-cyan-400/60 to-transparent" />
          </motion.div>
        ) : null}
      </section>

      {/* Team — Quiénes somos */}
      <section id="quienes-somos" className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal immediate={reveal} className="mb-12 flex flex-col gap-4 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.32em] text-cyan-300/85">
                {t.aboutSection.teamEyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">{t.aboutSection.teamHeading}</h2>
            </div>
            <p className="max-w-md text-sm text-white/55 sm:text-base">{t.aboutSection.teamSub}</p>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {team.map((person, idx) => (
              <Reveal key={person.name} immediate={reveal} delay={0.08 + idx * 0.1}>
                <motion.article
                  className="group rounded-2xl p-1 transition-all duration-300 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.35),0_0_38px_rgba(34,211,238,0.2)]"
                  whileHover={reduce ? undefined : { y: -6 }}
                  transition={{ duration: 0.35, ease }}
                >
                  <motion.div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10">
                    <motion.div className="relative h-full w-full overflow-hidden transition-transform duration-500 group-hover:scale-[1.03]">
                      <Image
                        src={person.image}
                        alt={person.name}
                        fill
                        unoptimized
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className={[
                          "h-full w-full object-cover grayscale transition-all duration-700 ease-out",
                          reduce ? "" : "group-hover:grayscale-0",
                          person.imageClass,
                        ].join(" ")}
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div className="mt-5 flex items-center justify-between gap-3">
                    <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">{person.name}</h3>
                    <LinkedinIcon href={person.linkedin} />
                  </motion.div>

                  <p className="mt-1 text-base font-semibold text-cyan-300/90">{person.role}</p>

                  <button
                    type="button"
                    onClick={() => setSelectedMember(idx)}
                    className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-4 py-2.5 text-sm font-semibold text-white/85 transition hover:border-cyan-400/35 hover:bg-cyan-400/10 hover:text-white"
                  >
                    {t.aboutSection.backgroundButton}
                    <span aria-hidden className="transition group-hover:translate-x-0.5">→</span>
                  </button>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {mounted && selected
        ? createPortal(
            <AnimatePresence>
              <motion.div
                className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedMember(null)}
              >
                <motion.div className="absolute inset-0 bg-[#03050a]/80 backdrop-blur-md" />
                <motion.div
                  role="dialog"
                  aria-modal
                  className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[28px] border border-white/12 bg-[#0a1018]/95 p-7 shadow-[0_40px_100px_rgba(0,0,0,0.6)] backdrop-blur-2xl sm:p-9"
                  initial={{ opacity: 0, y: 24, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 16, scale: 0.98 }}
                  transition={{ duration: 0.35, ease }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedMember(null)}
                    className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 text-lg text-white/70 transition hover:border-white/30 hover:text-white"
                    aria-label={t.aboutSection.closeBackground}
                  >
                    ×
                  </button>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-300/80">
                    {t.aboutSection.backgroundTag}
                  </p>
                  <h3 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">{selected.name}</h3>
                  <p className="mt-2 text-base font-semibold text-cyan-300">{selected.role}</p>
                  <p className="mt-6 text-base leading-relaxed text-white/75 sm:text-lg sm:leading-8">{selected.summary}</p>
                  <ul className="mt-6 space-y-3">
                    {selected.highlights.map((item, i) => (
                      <motion.li
                        key={item}
                        initial={reduce ? false : { opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 + i * 0.05 }}
                        className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/80 sm:text-base"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            </AnimatePresence>,
            document.body,
          )
        : null}
    </div>
  );
}
