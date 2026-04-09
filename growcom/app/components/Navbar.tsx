"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useI18n } from "../i18n/LanguageProvider";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useI18n();
  const openContactModal = () => {
    window.dispatchEvent(new Event("open-contact-modal"));
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-black/10 bg-[#f9fafb]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-[82px] max-w-[1240px] items-center justify-between px-5 sm:px-7 lg:px-10">
        <Link href="/" className="flex items-center">
          <Image
            src="/growcom-logo-retouched.png"
            alt="Growcom Logo"
            width={165}
            height={35}
            className="h-8 w-auto"
            priority
          />
        </Link>

        <div className="hidden items-center gap-9 lg:flex">
          <Link
            href="#services"
            className="text-[15px] font-medium text-[#4b5563] transition-colors hover:text-black"
          >
            {t.nav.services}
          </Link>
          <Link
            href="#how-it-works"
            className="text-[15px] font-medium text-[#4b5563] transition-colors hover:text-black"
          >
            {t.nav.howWeWork}
          </Link>
          <Link
            href="#case-studies"
            className="text-[15px] font-medium text-[#4b5563] transition-colors hover:text-black"
          >
            {t.nav.caseStudies}
          </Link>
          <Link
            href="#about"
            className="text-[15px] font-medium text-[#4b5563] transition-colors hover:text-black"
          >
            {t.nav.aboutUs}
          </Link>
        </div>

        <div className="hidden items-center gap-3.5 lg:flex">
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
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 text-gray-700 lg:hidden"
        >
          <span className="text-lg">{menuOpen ? "\u00d7" : "\u2261"}</span>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-black/5 bg-white px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            <Link href="#services" className="text-sm font-medium text-gray-700">
              {t.nav.services}
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium text-gray-700">
              {t.nav.howWeWork}
            </Link>
            <Link href="#case-studies" className="text-sm font-medium text-gray-700">
              {t.nav.caseStudies}
            </Link>
            <Link href="#about" className="text-sm font-medium text-gray-700">
              {t.nav.aboutUs}
            </Link>
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
