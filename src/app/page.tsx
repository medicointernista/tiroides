import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";
import Benefits from "@/components/sections/benefits";
import ServicesSection from "@/components/sections/services";
import IndicationsSection from "@/components/sections/indications";
import DoctorProfile from "@/components/sections/doctor-profile";
import FAQSection from "@/components/sections/faq";
import CtaBanner from "@/components/sections/cta-banner";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <Benefits />
      <ServicesSection />
      <IndicationsSection />
      <DoctorProfile />
      <FAQSection />
      <CtaBanner />
      <Footer />
    </main>
  );
}
