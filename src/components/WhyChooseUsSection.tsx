import { Cpu, Target, TrendingUp, Shield } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: Cpu,
    title: "AI-First Approach",
    description: "Every solution is powered by artificial intelligence, ensuring smarter decisions and continuous optimization.",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Target,
    title: "Systems Thinking",
    description: "We don't build isolated tools. We create interconnected systems where every component amplifies the others.",
    color: "from-secondary/20 to-secondary/5",
  },
  {
    icon: TrendingUp,
    title: "Results-Driven",
    description: "Our work is measured by one metric: your growth. Every strategy is data-backed and performance-focused.",
    color: "from-accent/15 to-accent/5",
  },
  {
    icon: Shield,
    title: "Future-Proof Tech",
    description: "Built on cutting-edge stacks with scalable architecture, so your infrastructure grows with you — not against you.",
    color: "from-primary/15 to-secondary/10",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="relative py-20 sm:py-32 px-4 sm:px-6" id="why-us">
      <div className="absolute top-0 left-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-14 sm:mb-20">
          <p className="text-primary font-medium text-xs sm:text-sm tracking-widest uppercase mb-3 sm:mb-4">Why Orbition X</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Engineered for <span className="gradient-text">Dominance</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-2">
            We combine AI intelligence with systems architecture to create unfair advantages for our clients.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="group text-center p-4 sm:p-8 rounded-2xl glass gradient-border hover:bg-card/60 transition-all duration-500"
            >
              <motion.div
                className={`w-12 sm:w-14 h-12 sm:h-14 rounded-xl bg-gradient-to-br ${reason.color} flex items-center justify-center mx-auto mb-4 sm:mb-6`}
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <reason.icon className="w-5 sm:w-7 h-5 sm:h-7 text-primary" />
              </motion.div>
              <h3 className="font-display text-sm sm:text-lg font-semibold mb-2 sm:mb-3">{reason.title}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
