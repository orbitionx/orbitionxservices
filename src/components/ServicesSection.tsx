import { Brain, Code, Zap, BarChart3, Bot, PhoneCall, Users, Globe, TrendingUp, Palette } from "lucide-react";
import { motion } from "framer-motion";

const aiServices = [
  {
    icon: Bot,
    title: "Custom AI Agents",
    description: "Tailor-made AI agents built for your specific business workflows — from lead qualification to data processing and internal operations.",
    gradient: "from-primary/20 to-secondary/20",
  },
  {
    icon: Users,
    title: "AI Customer Service",
    description: "24/7 intelligent customer support agents that handle queries, resolve issues, and escalate seamlessly — reducing response time by 90%.",
    gradient: "from-secondary/20 to-accent/10",
  },
  {
    icon: PhoneCall,
    title: "AI Calling Agents",
    description: "Voice-powered AI agents that make and receive calls, book appointments, qualify leads, and follow up — fully autonomous.",
    gradient: "from-accent/10 to-primary/20",
  },
];

const marketingServices = [
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    description: "Data-driven ad campaigns across Meta, Google & TikTok that maximize ROAS and scale revenue predictably.",
    gradient: "from-primary/20 to-secondary/20",
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "High-converting Shopify stores, WordPress sites, and custom web applications — designed to turn visitors into customers.",
    gradient: "from-secondary/20 to-accent/10",
  },
  {
    icon: Palette,
    title: "Branding & Creatives",
    description: "End-to-end brand identity, product photography, AI-generated creatives, and conversion-optimized design systems.",
    gradient: "from-accent/10 to-primary/20",
  },
];

const ServiceCard = ({ service, index }: { service: typeof aiServices[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
    className="group relative glass rounded-2xl p-8 hover:bg-card/60 transition-all duration-500 gradient-border"
  >
    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
      <service.icon className="w-7 h-7 text-primary" />
    </div>
    <h3 className="font-display text-xl font-semibold mb-3">{service.title}</h3>
    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
  </motion.div>
);

const ServicesSection = () => {
  return (
    <section className="relative py-32 px-6" id="services">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">What We Do</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Two Powerhouses, <span className="gradient-text">One Agency</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We combine cutting-edge AI automation with battle-tested marketing strategies to build systems that think, sell, and scale.
          </p>
        </div>

        {/* AI Agency */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
              <Brain className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold">AI Agency</h3>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aiServices.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>

        {/* Marketing Agency */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold">Marketing Agency</h3>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {marketingServices.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
