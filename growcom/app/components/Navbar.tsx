"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { openContactForm } from "../lib/openContactForm";
import { useI18n } from "../i18n/LanguageProvider";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useI18n();
  const openContactModal = () => {
    openContactForm();
    setMenuOpen(false);
  };

  const isPrivateIntakeRoute =
    pathname === "/documentacion" ||
    pathname === "/documentaciondemogrowcom" ||
    pathname === "/documentacongrowcom" ||
    pathname === "/linkedin" ||
    pathname === "/linkedin-form" ||
    pathname === "/reunion-linkedin" ||
    pathname === "/llamada" ||
    pathname === "/solicitar-llamada";

  if (isPrivateIntakeRoute) return null;

  const isAiLanding = pathname === "/inteligencia-artificial";

  const navItems = [
    { href: "/#services", label: t.nav.services },
    { href: "/#how-it-works", label: t.nav.howWeWork },
    { href: "/#case-studies", label: t.nav.caseStudies },
    { href: "/sobre-nosotros", label: t.nav.aboutUs },
  ] as const;

  const navLinkClass = (active = false) =>
    [
      "group relative inline-flex items-center py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] transition-colors duration-300",
      "after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gradient-to-r after:from-cyan-500 after:via-sky-400 after:to-blue-500 after:transition-[width] after:duration-300",
      "hover:after:w-full",
      isAiLanding
        ? active
          ? "text-cyan-200 after:w-full"
          : "text-white/55 hover:text-cyan-100"
        : active
          ? "text-slate-900 after:w-full"
          : "text-slate-500 hover:text-slate-900",
    ].join(" ");

  return (
    <nav
      className={[
        "sticky top-0 z-50 w-full backdrop-blur-md",
        isAiLanding
          ? "border-b border-white/10 bg-[#03050a]/80"
          : "border-b border-black/10 bg-white/95 backdrop-blur-sm",
      ].join(" ")}
    >
      <div className="mx-auto flex h-[82px] max-w-[1240px] items-center justify-between px-5 sm:px-7 lg:px-10">
        <Link href="/" className="flex shrink-0 items-center pt-0.5">
          <Image
            src={isAiLanding ? "/growcom-logo-white-clean.png" : "/growcom-logo-navbar-black.png"}
            alt="Growcom"
            width={188}
            height={32}
            className="h-[26px] w-auto sm:h-7 lg:h-[29px]"
            priority
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex lg:gap-10">
          {navItems.map((item) => {
            const active = item.href === "/sobre-nosotros" && pathname === "/sobre-nosotros";
            return (
              <Link key={item.href} href={item.href} className={navLinkClass(active)}>
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3.5 md:flex">
          <div className="inline-flex items-center rounded-xl border border-black/10 bg-[#eef0f2] p-1">
            <button
              type="button"
              onClick={() => setLang("es")}
              className={[
                "min-w-9 rounded-lg px-3 py-1 text-xs font-semibold transition-colors",
                lang === "es"
                  ? "bg-white text-gray-800 shadow-sm"
                  : "text-gray-500 hover:text-gray-700",
              ].join(" ")}
            >
              ES
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              className={[
                "min-w-9 rounded-lg px-3 py-1 text-xs font-semibold transition-colors",
                lang === "en"
                  ? "bg-white text-gray-800 shadow-sm"
                  : "text-gray-500 hover:text-gray-700",
              ].join(" ")}
            >
              EN
            </button>
          </div>
          <button
            type="button"
            onClick={openContactModal}
            className="inline-flex h-11 items-center justify-center rounded-xl bg-black px-7 text-sm font-semibold text-white transition-colors hover:bg-[#111]"
          >
            {t.nav.contact} <span className="ml-1 text-base">&rarr;</span>
          </button>
        </div>

        <button
          type="button"
          aria-label={t.nav.openMenu}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 text-gray-700 md:hidden"
        >
          <span className="text-lg">{menuOpen ? "\u00d7" : "\u2261"}</span>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-black/5 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => {
              const active = item.href === "/sobre-nosotros" && pathname === "/sobre-nosotros";
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={navLinkClass(active)}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="inline-flex w-fit items-center rounded-xl border border-black/10 bg-[#f2f3f5] p-1">
              <button
                type="button"
                onClick={() => setLang("es")}
                className={[
                  "rounded-lg px-3 py-1 text-xs font-semibold transition-colors",
                  lang === "es"
                    ? "bg-white text-gray-800 shadow-sm"
                    : "text-gray-500 hover:text-gray-700",
                ].join(" ")}
              >
                ES
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={[
                  "rounded-lg px-3 py-1 text-xs font-semibold transition-colors",
                  lang === "en"
                    ? "bg-white text-gray-800 shadow-sm"
                    : "text-gray-500 hover:text-gray-700",
                ].join(" ")}
              >
                EN
              </button>
            </div>
            <button
              type="button"
              onClick={openContactModal}
              className="inline-flex h-11 w-fit items-center justify-center rounded-xl bg-black px-6 text-sm font-semibold text-white"
            >
              {t.nav.contact} <span className="ml-1 text-base">&rarr;</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
