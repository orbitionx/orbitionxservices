import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import IndustriesSection from "@/components/IndustriesSection";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";
import SectionDivider from "@/components/SectionDivider";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background text-foreground futuristic-grid">
      <Navbar />
      <div className="pt-24">
        <AnimatedSection>
          <CaseStudiesSection />
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

export default Portfolio;
