import { HeroSection } from "@/components/sections/HeroSection";
import { CompanyIntroSection } from "@/components/sections/CompanyIntroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/layout/FloatingCTA";

export default function Home() {
  return (
    <main className="flex flex-col items-start relative bg-neutral-950 border border-solid border-transparent [border-image:linear-gradient(180deg,rgba(16,16,16,0.6)_0%,rgba(28,28,28,0)_100%)_1] w-full overflow-x-clip">
      <div className="flex flex-col items-start relative self-stretch w-full">
        {/* Hero with overlay elements */}
        <div className="relative w-full">
          <HeroSection />

          {/* Gradient overlay at bottom of hero */}
          <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1920px] h-[178px] bg-[linear-gradient(180deg,rgba(6,6,6,0)_0%,rgba(10,10,10,1)_100%)]" />
        </div>

        <CompanyIntroSection />
        <AboutSection />
        <ServicesSection />
        <CaseStudiesSection />
        <IndustriesSection />
        <TestimonialsSection />
        <WhyChooseSection />
        <ContactFormSection />
        <FaqSection />
        <CTASection />
        <Footer />
      </div>

      <FloatingCTA />
    </main>
  );
}
