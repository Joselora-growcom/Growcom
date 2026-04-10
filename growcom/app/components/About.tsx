"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useI18n } from "../i18n/LanguageProvider";

const teamImages = [
  {
    image: "/about-us/manuel-franco-v2.png",
    imageClass: "object-[center_24%]",
    linkedin: "https://www.linkedin.com/in/manuelfrancoguardiola/",
  },
  {
    image: "/about-us/jose-lora-v2.png",
    // Zoom + encuadre para acercar el rostro al mismo tamaño aparente que Manu
    imageClass: "scale-[1.64] object-[34%_28%]",
    linkedin: "https://www.linkedin.com/in/jos%C3%A9-lora-tamayo-iglesias-52768b251/",
  },
  {
    image: "/about-us/aitor-bernal-v2.png",
    imageClass: "object-[center_18%]",
    linkedin: "https://www.linkedin.com/in/aitor-bernal-fintech-data/",
  },
] as const;

function LinkedinPill({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-[#f3f4f6] text-[12px] font-bold text-[#111827] transition-colors hover:bg-[#e5e7eb]"
    >
      in
    </a>
  );
}

export default function About() {
  const { t } = useI18n();
  const [selectedMember, setSelectedMember] = useState<number | null>(null);
  const team = t.aboutSection.team.map((person, idx) => ({
    ...person,
    bio: "",
    ...teamImages[idx],
  }));
  const selected = selectedMember !== null ? t.aboutSection.backgrounds[selectedMember] : null;

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
    <section id="about" className="bg-[#edf6f9] py-16 text-[#101828]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-black tracking-tight text-[#111827] sm:text-5xl md:text-6xl">{t.aboutSection.title}</h2>
          <p className="mx-auto mt-4 max-w-4xl text-base leading-7 text-[#4b5563] sm:mt-5 sm:text-lg sm:leading-8 md:text-[1.6rem] md:leading-[1.45]">
            {t.aboutSection.intro}
          </p>
        </header>

        <div className="relative mt-14 overflow-hidden rounded-[20px]">
          <Image
            src="/about-us/leadership-banner-city-v2.png"
            alt={t.aboutSection.bannerAlt}
            width={835}
            height={335}
            unoptimized
            className="h-[230px] w-full object-cover sm:h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/10" />
          <div className="absolute left-3 top-3 rounded-xl bg-black/35 p-2 backdrop-blur-[2px] sm:left-8 sm:top-8 sm:p-3">
            <Image
              src="/growcom-logo-white-clean.png"
              alt="Growcom"
              width={220}
              height={62}
              unoptimized
              className="h-auto w-[105px] sm:w-[150px] md:w-[190px]"
            />
          </div>
          <p className="absolute bottom-3 left-3 right-3 max-w-5xl rounded-xl bg-black/50 px-3 py-2.5 text-[0.86rem] font-semibold leading-snug text-white shadow-[0_10px_30px_rgba(0,0,0,0.45)] sm:bottom-6 sm:left-6 sm:right-6 sm:px-5 sm:py-4 sm:text-xl md:bottom-8 md:left-8 md:right-auto md:text-[2.35rem]">
            {t.aboutSection.bannerQuote}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {team.map((person, idx) => (
            <article
              key={person.name}
              className="group rounded-2xl p-1 transition-all duration-300 hover:bg-[#1ea3ff]/10 hover:shadow-[0_0_0_1px_rgba(30,163,255,0.45),0_0_38px_rgba(30,163,255,0.35)]"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <div className="relative h-full w-full transition-transform duration-300 group-hover:scale-[1.03]">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={`h-full w-full object-cover grayscale ${person.imageClass ?? ""}`}
                  />
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between gap-3 sm:mt-5">
                <h3 className="text-[1.75rem] font-extrabold leading-tight text-[#111827] sm:text-[2rem]">{person.name}</h3>
                <LinkedinPill href={person.linkedin} />
              </div>

              <p className="mt-1 text-lg font-semibold text-[#2f9ac7] md:text-[1.2rem]">{person.role}</p>
              <button
                type="button"
                onClick={() => setSelectedMember(idx)}
                className="mt-4 inline-flex items-center gap-2 rounded-xl border border-[#c3cfdf] bg-white px-4 py-2 text-sm font-semibold text-[#0f172a] transition hover:border-[#1ea3ff]/70 hover:text-[#0369a1]"
              >
                {t.aboutSection.backgroundButton}
              </button>
              {person.bio ? (
                <p className="mt-4 text-lg leading-8 text-[#4b5563] md:text-[1.55rem] md:leading-[1.5]">{person.bio}</p>
              ) : null}
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-[20px] bg-[radial-gradient(circle_at_50%_0%,#0a1b46_0%,#030712_62%)] px-5 py-10 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] sm:px-8 sm:py-14 md:px-14 md:py-16">
          <h3 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-[3.3rem]">{t.aboutSection.missionTitle}</h3>
          <p className="mx-auto mt-5 max-w-5xl text-base leading-7 text-white/88 sm:mt-7 sm:text-lg sm:leading-9 md:text-[2rem] md:leading-[1.45]">
            {t.aboutSection.missionText}
          </p>
        </div>
      </div>

      {typeof window !== "undefined" && selected
        ? createPortal(
            <div
              className="fixed inset-0 z-[110] flex items-center justify-center bg-black/50 p-4"
              onClick={() => setSelectedMember(null)}
            >
              <div
                className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-[#dfe7ef] bg-white p-7 shadow-[0_16px_45px_rgba(15,23,42,0.24)] sm:p-9"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setSelectedMember(null)}
                  className="absolute right-4 top-4 rounded-md border border-[#d7dde7] px-2 py-1 text-base font-bold leading-none text-[#334155] hover:bg-[#f8fafc]"
                  aria-label={t.aboutSection.closeBackground}
                >
                  ×
                </button>
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#64748b]">
                      {t.aboutSection.backgroundTag}
                    </p>
                    <h3 className="mt-1 text-3xl font-black tracking-tight text-[#0f172a] sm:text-4xl">{selected.name}</h3>
                    <p className="mt-2 text-base font-semibold text-[#0ea5e9] sm:text-lg">{selected.role}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedMember(null)}
                    className="rounded-lg border border-[#d7dde7] px-3 py-2 text-sm font-semibold text-[#334155] hover:bg-[#f8fafc]"
                  >
                    {t.aboutSection.closeBackground}
                  </button>
                </div>

                <p className="text-base leading-7 text-[#334155] sm:text-lg sm:leading-8">{selected.summary}</p>
                <ul className="mt-5 space-y-3">
                  {selected.highlights.map((item) => (
                    <li
                      key={item}
                      className="rounded-xl border border-[#dbe4ef] bg-[#f8fbff] px-4 py-3 text-sm font-medium text-[#1e293b] sm:text-base"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>,
            document.body
          )
        : null}
    </section>
  );
}
