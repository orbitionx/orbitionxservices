import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import AIBrainAnimation from "./AIBrainAnimation";
import FloatingParticles from "./FloatingParticles";
import GlitchText from "./GlitchText";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute top-1/3 left-1/3 w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded-full bg-secondary/5 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[200px] md:w-[300px] h-[200px] md:h-[300px] rounded-full bg-accent/3 blur-[80px]" />
      </div>

      <FloatingParticles />

      {/* Orbit rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[500px] h-[350px] md:h-[500px] orbit-ring animate-spin-slow opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[700px] h-[500px] md:h-[700px] orbit-ring animate-spin-slow opacity-20" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] md:w-[900px] h-[650px] md:h-[900px] orbit-ring animate-spin-slow opacity-10" style={{ animationDuration: '40s' }} />

      {/* Small glowing dots on orbits */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[500px] h-[350px] md:h-[500px] animate-spin-slow">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[700px] h-[500px] md:h-[700px] animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '30s' }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-secondary animate-pulse-glow" />
      </div>

      {/* AI Brain Neural Network Animation */}
      <AIBrainAnimation />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 sm:mb-8 text-xs sm:text-sm text-muted-foreground"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          AI-Powered Growth Systems
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-5 sm:mb-6"
        >
          Build the Future<br />
          <GlitchText><span className="gradient-text">with Intelligence</span></GlitchText>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 px-2"
        >
          We engineer AI-driven marketing systems, automation pipelines, and digital infrastructure that scales your business beyond limits.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <Button size="lg" className="w-full sm:w-auto px-8 h-12 text-base font-semibold glow-blue rounded-full bg-primary hover:bg-primary/90">
            Get Started
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <a href="https://calendly.com/muaazahmadn" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 h-12 text-base font-semibold rounded-full border-border/50 hover:bg-muted">
              Book Consultation
            </Button>
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-12 sm:mt-16 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50">Scroll</span>
          <motion.div
            className="w-5 h-8 rounded-full border border-muted-foreground/20 flex items-start justify-center p-1"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-2 rounded-full bg-primary/60"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
