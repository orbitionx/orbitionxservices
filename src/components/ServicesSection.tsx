import { Brain, Code, Zap, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Brain,
    title: "AI Marketing",
    description: "Intelligent campaigns powered by machine learning that adapt, optimize, and deliver results autonomously.",
    gradient: "from-primary/20 to-secondary/20",
  },
  {
    icon: Code,
    title: "Tech Development",
    description: "Custom platforms, web applications, and digital infrastructure built with cutting-edge technology stacks.",
    gradient: "from-secondary/20 to-accent/10",
  },
  {
    icon: Zap,
    title: "Automation",
    description: "End-to-end business automation that eliminates manual work and creates seamless operational workflows.",
    gradient: "from-accent/10 to-primary/20",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Deep insights from your data, transformed into actionable strategies that drive measurable growth.",
    gradient: "from-primary/20 to-accent/10",
  },
];

const ServicesSection = () => {
  return (
    <section className="relative py-32 px-6" id="services">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">What We Do</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Systems That <span className="gradient-text">Think & Scale</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We build intelligent digital ecosystems that automate growth, optimize performance, and future-proof your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative glass rounded-2xl p-8 hover:bg-card/60 transition-all duration-500 gradient-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
