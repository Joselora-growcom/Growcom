import Hero from "./components/Hero";
import Partners from "./components/Partners";
import SolutionSection from "./components/SolutionSection";
import ServicesSection from "./components/ServicesSection";
import ResultsSection from "./components/ResultsSection";
import About from "./components/About";
import HowItWorks from "./components/HowItWorks";
import SuccessStoriesSection from "./components/SuccessStoriesSection";
import UrgencyCtaSection from "./components/UrgencyCtaSection";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import CalendlyModal from "./components/CalendlyModal";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 selection:bg-blue-500 selection:text-white">
      <Hero />
      <ScrollReveal variant="fade">
        <Partners />
      </ScrollReveal>
      <ScrollReveal variant="left">
        <SolutionSection />
      </ScrollReveal>
      <ScrollReveal variant="flip">
        <ServicesSection />
      </ScrollReveal>
      <ScrollReveal variant="zoom">
        <ResultsSection />
      </ScrollReveal>
      <ScrollReveal variant="blur">
        <HowItWorks />
      </ScrollReveal>
      <ScrollReveal variant="right">
        <About />
      </ScrollReveal>
      <ScrollReveal variant="up">
        <SuccessStoriesSection />
      </ScrollReveal>
      <ScrollReveal variant="zoom">
        <UrgencyCtaSection />
      </ScrollReveal>
      <ScrollReveal variant="fade">
        <Footer />
      </ScrollReveal>
      <ContactModal />
      <CalendlyModal />
    </main>
  );
}
