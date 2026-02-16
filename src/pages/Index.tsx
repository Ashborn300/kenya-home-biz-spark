import CountdownBanner from "@/components/CountdownBanner";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AdvantageSection from "@/components/AdvantageSection";
import InsideGuideSection from "@/components/InsideGuideSection";
import StatsSection from "@/components/StatsSection";
import WhoAmISection from "@/components/WhoAmISection";
import TrustedSection from "@/components/TrustedSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { usePageView } from "@/hooks/usePageView";

const Index = () => {
  usePageView("/");
  return (
    <main>
      <CountdownBanner />
      <HeroSection />
      <BenefitsSection />
      <TestimonialsSection />
      <StatsSection />
      <AdvantageSection />
      <InsideGuideSection />
      <WhoAmISection />
      <TrustedSection />
      <FAQSection />
      <FooterSection />
      <StickyMobileCTA />
    </main>
  );
};

export default Index;
