"use client";

import { useI18n } from "../i18n/LanguageProvider";

type ClientItem = {
  name: string;
  logoSrc?: string;
  logoAlt?: string;
  logoClass?: string;
};

const clients: ClientItem[] = [
  {
    name: "Asesoria Velar",
    logoSrc: "/clients/pyme-asesoria-velar-texto-v2.svg",
    logoAlt: "Logo de Asesoria Velar",
  },
  {
    name: "Aurea Partners",
    logoSrc: "/clients/pyme-aurea-partners-v2.svg",
    logoAlt: "Logo de Aurea Partners",
  },
  {
    name: "Clinica Dental La Encina",
    logoSrc: "/clients/pyme-clinica-la-encina-v5.svg",
    logoAlt: "Logo de Clinica Dental La Encina",
  },
  {
    name: "FAMMANTE",
    logoSrc: "/clients/fammante.png",
    logoAlt: "Logo de FAMMANTE",
  },
  {
    name: "Gómez Berruezo Abogados",
    logoSrc: "/clients/gomez-berruezo-abogados-transparent-v3.svg",
    logoAlt: "Logo de Gómez Berruezo Abogados",
  },
  {
    name: "LDR Sports",
    logoSrc: "/clients/ldr-sports-no-bg.png",
    logoAlt: "Logo de LDR Sports",
  },
];

export default function SuccessStoriesSection() {
  const { t } = useI18n();
  const loopedClients = [...clients, ...clients];
  const testimonials = t.successStories.testimonials;

  return (
    <section id="case-studies" className="bg-[radial-gradient(circle_at_50%_0%,#0a1b46_0%,#030712_62%)] py-16 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="text-center">
          <h2 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
            {t.successStories.titleLine1}
            <br />
            <span className="text-[#19b4ff]">{t.successStories.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-base text-white/70 sm:mt-5 sm:text-xl md:text-2xl">
            {t.successStories.sub}
          </p>
        </header>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="rounded-2xl border border-white/10 bg-[linear-gradient(160deg,rgba(30,46,84,0.55),rgba(11,18,34,0.88))] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
            >
              <div className="flex items-center justify-between">
                <div className="text-xl text-[#ffd44d]">★★★★★</div>
                <span className="text-5xl font-black leading-none text-[#1ec6ff]/25">”</span>
              </div>

              <p className="mt-4 text-base leading-7 text-white/88 sm:text-lg sm:leading-8 md:text-[1.45rem]">{item.quote}</p>

              <div className="mt-7 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#1d9fff] text-base font-bold text-white">
                  {item.initial}
                </span>
                <div>
                  <p className="text-lg font-bold">{item.name}</p>
                  <p className="text-base text-white/65">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-white/55 md:text-base">
            {t.successStories.clientsTitle}
          </p>

          <div className="relative mt-6 overflow-hidden rounded-2xl border border-[#c9dbf5]/35 bg-[#e8f1ff] py-5">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#dbe9ff] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#dbe9ff] to-transparent" />

            <div className="logo-marquee gap-3 pl-1">
              {loopedClients.map((client, idx) => (
                <span
                  key={`${client.name}-${idx}`}
                  className={`inline-flex shrink-0 items-center justify-center px-0 py-2 text-sm font-semibold md:text-base ${
                    client.logoSrc ? "" : "text-[#10233e]"
                  }`}
                >
                  {client.logoSrc ? (
                    <span className="flex w-full items-center justify-center">
                      <img
                        src={client.logoSrc}
                        alt={client.logoAlt ?? `Logo de ${client.name}`}
                        className={client.logoClass ?? "mx-auto h-[6.1rem] w-auto max-w-none object-contain object-center"}
                        loading="eager"
                        decoding="async"
                      />
                    </span>
                  ) : (
                    client.name
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
