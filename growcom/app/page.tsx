import dynamic from "next/dynamic";
import Hero from "./components/Hero";
import ScrollReveal from "./components/ScrollReveal";

const Partners = dynamic(() => import("./components/Partners"));
const SolutionSection = dynamic(() => import("./components/SolutionSection"));
const HowItWorks = dynamic(() => import("./components/HowItWorks"));
const SuccessStoriesSection = dynamic(() => import("./components/SuccessStoriesSection"));
const UrgencyCtaSection = dynamic(() => import("./components/UrgencyCtaSection"));
const Footer = dynamic(() => import("./components/Footer"));
const ContactModal = dynamic(() => import("./components/ContactModal"));
const CalendlyModal = dynamic(() => import("./components/CalendlyModal"));

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712] text-white selection:bg-cyan-500 selection:text-[#030712]">
      <Hero />
      <div className="section-deferred">
        <ScrollReveal variant="fade">
          <Partners />
        </ScrollReveal>
      </div>
      <div className="section-deferred">
        <ScrollReveal variant="left">
          <SolutionSection />
        </ScrollReveal>
      </div>
      <div className="section-deferred">
        <ScrollReveal variant="blur">
          <HowItWorks />
        </ScrollReveal>
      </div>
      <div className="section-deferred">
        <ScrollReveal variant="up">
          <SuccessStoriesSection />
        </ScrollReveal>
      </div>
      <div className="section-deferred">
        <ScrollReveal variant="zoom">
          <UrgencyCtaSection />
        </ScrollReveal>
      </div>
      <div className="section-deferred">
        <ScrollReveal variant="fade">
          <Footer />
        </ScrollReveal>
      </div>
      <ContactModal />
      <CalendlyModal />
    </main>
  );
}
