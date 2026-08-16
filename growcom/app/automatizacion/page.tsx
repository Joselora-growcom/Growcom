import type { Metadata } from "next";
import AutomatizacionPageClient from "./AutomatizacionPageClient";

export const metadata: Metadata = {
  title: "Automatización de Procesos para Empresas | Growcom",
  description:
    "Automatización enterprise para eliminar tareas repetitivas, conectar herramientas y escalar operaciones sin aumentar carga interna.",
};

export default function AutomatizacionPage() {
  return <AutomatizacionPageClient />;
}
