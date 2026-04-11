import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto relative">
        {/* Glow background */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/5 blur-3xl" />

        <div className="relative glass rounded-3xl p-12 md:p-20 text-center gradient-border">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="gradient-text">Accelerate?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
            Let's build the intelligent systems your business needs to dominate. Start with a free strategy consultation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="px-10 h-13 text-base font-semibold glow-blue rounded-full bg-primary hover:bg-primary/90">
              Get Started Now
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <a href="https://calendar.google.com/calendar/u/0/r" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="px-10 h-13 text-base font-semibold rounded-full border-border/50 hover:bg-muted">
                Book a Call
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
