import type { Metadata } from "next";
import LinkedinLeadFormClient from "../linkedin/LinkedinLeadFormClient";

export const metadata: Metadata = {
  title: "Solicitar llamada | Growcom",
  description:
    "Solicita una llamada con Growcom para identificar mejoras en automatización, IA y procesos de crecimiento.",
  openGraph: {
    title: "Solicitar llamada | Growcom",
    description:
      "Solicita una llamada con Growcom para identificar mejoras en automatización, IA y procesos de crecimiento.",
    images: [
      {
        url: "/growcom-logo-navbar-black.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solicitar llamada | Growcom",
    description:
      "Solicita una llamada con Growcom para identificar mejoras en automatización, IA y procesos de crecimiento.",
    images: ["/growcom-logo-navbar-black.png"],
  },
};

export default function LlamadaPage() {
  return <LinkedinLeadFormClient />;
}
