import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SectionDivider from "@/components/SectionDivider";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <SectionDivider />
      <AnimatedSection>
        <ServicesSection />
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
