import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import FloatingParticles from "./FloatingParticles";

const CTASection = () => {
  return (
    <section className="relative py-20 sm:py-32 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto relative">
        {/* Glow background */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/5 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative glass rounded-3xl p-8 sm:p-12 md:p-20 text-center gradient-border overflow-hidden"
        >
          <FloatingParticles />
          
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs text-primary mb-6"
          >
            <Sparkles className="w-3 h-3" />
            Free Strategy Session
          </motion.div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Ready to <span className="gradient-text">Accelerate?</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto mb-8 sm:mb-10 px-2">
            Let's build the intelligent systems your business needs to dominate. Start with a free strategy consultation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Button size="lg" className="w-full sm:w-auto px-10 h-13 text-base font-semibold glow-blue rounded-full bg-primary hover:bg-primary/90">
              Get Started Now
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <a href="https://calendly.com/muaazahmadn" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto px-10 h-13 text-base font-semibold rounded-full border-border/50 hover:bg-muted">
                Book a Call
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
