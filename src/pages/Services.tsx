import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import IndustriesSection from "@/components/IndustriesSection";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";
import SectionDivider from "@/components/SectionDivider";

const Services = () => {
  return (
    <div className="min-h-screen bg-background text-foreground futuristic-grid">
      <Navbar />
      <div className="pt-24">
        <AnimatedSection>
          <ServicesSection />
        </AnimatedSection>
        <SectionDivider />
        <AnimatedSection>
          <ProcessSection />
        </AnimatedSection>
        <SectionDivider />
        <AnimatedSection>
          <IndustriesSection />
        </AnimatedSection>
        <SectionDivider />
        <AnimatedSection>
          <CTASection />
        </AnimatedSection>
        <Footer />
      </div>
    </div>
  );
};

export default Services;
