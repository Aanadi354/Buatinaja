import HeroSection from "./components/hero-section";
import FloatingNavbar from "./components/floating-navbar";
import ServicesSection from "./components/services-section";
import ProjectsSection from "./components/projects-section";
import TrustStrip from "./components/trust-strip";

export default function Home() {
  return (
    <>
      <FloatingNavbar />
      <HeroSection />
      <TrustStrip />
      <ServicesSection />
      <ProjectsSection />
    </>
  );
}
