import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import WaitlistCTA from "@/components/WaitlistCTA";
import Footer from "@/components/Footer";
import { useScrollReveal, useScrollDepthTracking } from "@/hooks/use-scroll";

const Index = () => {
  const revealRef = useScrollReveal();
  useScrollDepthTracking();

  return (
    <div ref={revealRef} className="min-h-screen">
      <Navbar />
      <Hero />
      <HowItWorks />
      <SocialProof />
      <FAQ />
      <WaitlistCTA />
      <Footer />
    </div>
  );
};

export default Index;
