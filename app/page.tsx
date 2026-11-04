import HeroSection from "./components/hero-section";
import ServicesSection from "./components/services-section";
import TrustStrip from "./components/trust-strip";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <ServicesSection />
    </>
  );
}
