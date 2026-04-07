import { Cpu, Target, TrendingUp, Shield } from "lucide-react";

const reasons = [
  {
    icon: Cpu,
    title: "AI-First Approach",
    description: "Every solution is powered by artificial intelligence, ensuring smarter decisions and continuous optimization.",
  },
  {
    icon: Target,
    title: "Systems Thinking",
    description: "We don't build isolated tools. We create interconnected systems where every component amplifies the others.",
  },
  {
    icon: TrendingUp,
    title: "Results-Driven",
    description: "Our work is measured by one metric: your growth. Every strategy is data-backed and performance-focused.",
  },
  {
    icon: Shield,
    title: "Future-Proof Tech",
    description: "Built on cutting-edge stacks with scalable architecture, so your infrastructure grows with you — not against you.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="relative py-32 px-6" id="why-us">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">Why Orbition X</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Engineered for <span className="gradient-text">Dominance</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We combine AI intelligence with systems architecture to create unfair advantages for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group text-center p-8 rounded-2xl glass gradient-border hover:bg-card/60 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <reason.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-3">{reason.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
