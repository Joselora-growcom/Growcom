import type { Metadata } from "next";
import DataSistemasPageClient from "./DataSistemasPageClient";

export const metadata: Metadata = {
  title: "Data & Sistemas para Empresas | Growcom",
  description:
    "Infraestructura de datos enterprise: centralización, dashboards en tiempo real, integraciones y control operativo.",
};

export default function DataSistemasPage() {
  return <DataSistemasPageClient />;
}
