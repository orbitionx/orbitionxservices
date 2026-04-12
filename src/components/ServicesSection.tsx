import { Brain, BarChart3, Bot, PhoneCall, Users, Globe, TrendingUp, Palette } from "lucide-react";
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
    whileHover={{ y: -6, transition: { duration: 0.3 } }}
    className="group relative glass rounded-2xl p-6 sm:p-8 hover:bg-card/60 transition-all duration-500 gradient-border"
  >
    <motion.div
      className={`w-12 sm:w-14 h-12 sm:h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 sm:mb-6`}
      whileHover={{ scale: 1.15, rotate: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <service.icon className="w-6 sm:w-7 h-6 sm:h-7 text-primary" />
    </motion.div>
    <h3 className="font-display text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{service.title}</h3>
    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{service.description}</p>
    
    {/* Hover glow effect */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/5 group-hover:to-secondary/5 transition-all duration-500 pointer-events-none" />
  </motion.div>
);

const ServicesSection = () => {
  return (
    <section className="relative py-20 sm:py-32 px-4 sm:px-6" id="services">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 sm:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-medium text-xs sm:text-sm tracking-widest uppercase mb-3 sm:mb-4"
          >
            What We Do
          </motion.p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Two Powerhouses, <span className="gradient-text">One Agency</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-2">
            We combine cutting-edge AI automation with battle-tested marketing strategies to build systems that think, sell, and scale.
          </p>
        </div>

        {/* AI Agency */}
        <div className="mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6 sm:mb-8"
          >
            <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
              <Brain className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
            </div>
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold">AI Agency</h3>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
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
            className="flex items-center gap-3 mb-6 sm:mb-8"
          >
            <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center">
              <BarChart3 className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
            </div>
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold">Marketing Agency</h3>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
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
