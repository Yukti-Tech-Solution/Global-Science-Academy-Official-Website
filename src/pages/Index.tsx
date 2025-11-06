import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import CoursesSection from "@/components/home/CoursesSection";
import PricingSection from "@/components/home/PricingSection";
import DirectorsSection from "@/components/home/DirectorsSection";
import SuccessSection from "@/components/home/SuccessSection";
import ContactSection from "@/components/home/ContactSection";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <CoursesSection />
        <PricingSection />
        <DirectorsSection />
        <SuccessSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
