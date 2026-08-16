import type { Metadata } from "next";
import AiPageClient from "./AiPageClient";

export const metadata: Metadata = {
  title: "Inteligencia Artificial para Empresas | Growcom",
  description:
    "IA enterprise para automatizar decisiones, integrar sistemas y multiplicar la capacidad operativa de tu equipo.",
};

export default function InteligenciaArtificialPage() {
  return <AiPageClient />;
}
