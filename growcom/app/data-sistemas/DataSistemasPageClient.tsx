"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DataExperiencePortal from "../components/data-landing/DataExperiencePortal";
import CalendlyModal from "../components/CalendlyModal";
import ContactModal from "../components/ContactModal";

export default function DataSistemasPageClient() {
  const router = useRouter();
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (!open) {
      router.push("/#services");
    }
  }, [open, router]);

  return (
    <>
      <div className="min-h-screen bg-[#03050a]" aria-hidden />
      <DataExperiencePortal open={open} onClose={() => setOpen(false)} />
      <ContactModal />
      <CalendlyModal />
    </>
  );
}
