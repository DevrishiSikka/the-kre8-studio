import { Header } from "@/components/layout/Header";
import { Marquee } from "@/components/layout/Marquee";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { CtaBanner } from "@/components/sections/CtaBanner";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex min-h-dvh flex-col">
        <HeroSection />
        <Marquee />
      </div>
      <main>
        <ServicesSection />
        <PortfolioSection />
        <ProcessSection />
        <ContactSection />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
