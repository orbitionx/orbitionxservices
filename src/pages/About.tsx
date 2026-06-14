import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import StatsBar from "@/components/StatsBar";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";
import SectionDivider from "@/components/SectionDivider";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground futuristic-grid">
      <Navbar />
      <div className="pt-24">
        <AnimatedSection>
          <AboutSection />
        </AnimatedSection>
        <SectionDivider />
        <AnimatedSection>
          <StatsBar />
        </AnimatedSection>
        <SectionDivider />
        <AnimatedSection>
          <WhyChooseUsSection />
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

export default About;
