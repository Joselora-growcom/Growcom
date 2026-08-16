"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useI18n } from "../i18n/LanguageProvider";

export default function PageMetaSync() {
  const pathname = usePathname();
  const { t } = useI18n();

  useEffect(() => {
    const titles: Record<string, string> = {
      "/": t.meta.home,
      "/inteligencia-artificial": t.meta.ai,
      "/automatizacion": t.meta.automation,
      "/data-sistemas": t.meta.data,
      "/sobre-nosotros": t.meta.about,
      "/contact": t.meta.contact,
      "/llamada": t.meta.call,
      "/solicitar-llamada": t.meta.call,
      "/linkedin": t.meta.call,
    };

    document.title = titles[pathname] ?? t.meta.home;
  }, [pathname, t]);

  return null;
}
