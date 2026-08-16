import About from "../components/About";
import Footer from "../components/Footer";
import ContactModal from "../components/ContactModal";
import CalendlyModal from "../components/CalendlyModal";

export default function SobreNosotrosPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white selection:bg-blue-500 selection:text-white">
      <About immediateReveal />
      <Footer />
      <ContactModal />
      <CalendlyModal />
    </main>
  );
}
