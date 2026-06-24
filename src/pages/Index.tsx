import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import ServicesSection from "@/components/ServicesSection";
import IndustriesSection from "@/components/IndustriesSection";
import ProcessSection from "@/components/ProcessSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ROICalculator from "@/components/ROICalculator";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SectionDivider from "@/components/SectionDivider";
import TrustedBy from "@/components/TrustedBy";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground futuristic-grid">
      <Navbar />
      <HeroSection />
      <AnimatedSection>
        <TrustedBy />
      </AnimatedSection>
      <AnimatedSection>
        <StatsBar />
      </AnimatedSection>
      <SectionDivider />
      <AnimatedSection>
        <ServicesSection />
      </AnimatedSection>
      <SectionDivider />
      <AnimatedSection>
        <IndustriesSection />
      </AnimatedSection>
      <SectionDivider />
      <AnimatedSection>
        <ProcessSection />
      </AnimatedSection>
      <SectionDivider />
      <AnimatedSection>
        <AboutSection />
      </AnimatedSection>
      <SectionDivider />
      <AnimatedSection>
        <WhyChooseUsSection />
      </AnimatedSection>
      <SectionDivider />
      <AnimatedSection>
        <CaseStudiesSection />
      </AnimatedSection>
      <SectionDivider />
      <AnimatedSection>
        <ROICalculator />
      </AnimatedSection>
      <SectionDivider />
      <AnimatedSection>
        <ContactSection />
      </AnimatedSection>
      <SectionDivider />
      <AnimatedSection>
        <CTASection />
      </AnimatedSection>
      <AnimatedSection>
        <Footer />
      </AnimatedSection>
    </div>
  );
};

export default Index;
