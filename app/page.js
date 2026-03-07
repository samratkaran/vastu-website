import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import MediaCarousel from "@/components/MediaCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";
import GetInTouchSection from "@/components/GetInTouchSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <MediaCarousel />
      <TestimonialsSection />
      <GetInTouchSection />
      <Footer />
    </main>
  );
}
