import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AIBrainAnimation from "./AIBrainAnimation";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-accent/3 blur-[80px]" />
      </div>

      {/* Orbit rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] orbit-ring animate-spin-slow opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] orbit-ring animate-spin-slow opacity-20" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] orbit-ring animate-spin-slow opacity-10" style={{ animationDuration: '40s' }} />

      {/* Small glowing dots on orbits */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] animate-spin-slow">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '30s' }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-secondary animate-pulse-glow" />
      </div>

      {/* AI Brain Neural Network Animation */}
      <AIBrainAnimation />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 text-sm text-muted-foreground animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          AI-Powered Growth Systems
        </div>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-6 animate-fade-in" style={{ animationDelay: '0.1s', opacity: 0 }}>
          Build the Future<br />
          <span className="gradient-text">with Intelligence</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.2s', opacity: 0 }}>
          We engineer AI-driven marketing systems, automation pipelines, and digital infrastructure that scales your business beyond limits.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s', opacity: 0 }}>
          <Button size="lg" className="px-8 h-12 text-base font-semibold glow-blue rounded-full bg-primary hover:bg-primary/90">
            Get Started
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button variant="outline" size="lg" className="px-8 h-12 text-base font-semibold rounded-full border-border/50 hover:bg-muted">
            Book Consultation
          </Button>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
