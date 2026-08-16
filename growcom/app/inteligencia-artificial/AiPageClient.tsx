"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AiExperiencePortal from "../components/ai-landing/AiExperiencePortal";
import ContactModal from "../components/ContactModal";
import CalendlyModal from "../components/CalendlyModal";

export default function AiPageClient() {
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
      <AiExperiencePortal open={open} onClose={() => setOpen(false)} />
      <ContactModal />
      <CalendlyModal />
    </>
  );
}
