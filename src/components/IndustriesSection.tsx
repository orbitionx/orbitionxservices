import { motion } from "framer-motion";

const industries = [
  { icon: "💄", name: "Beauty & Wellness", ar: "الجمال والعافية", desc: "DTC beauty brand scaling through paid social, AI funnels, and conversion-first creative." },
  { icon: "👗", name: "Fashion & Retail", ar: "الأزياء والتجزئة", desc: "E-commerce growth for clothing and accessories brands across Shopify and Meta." },
  { icon: "☕", name: "F&B & Hospitality", ar: "المطاعم والضيافة", desc: "Restaurant and café growth across local markets with targeted paid campaigns." },
  { icon: "🤝", name: "B2B & SaaS", ar: "B2B والبرمجيات", desc: "AI-powered outreach and sales automation for B2B pipeline growth." },
  { icon: "🌍", name: "International", ar: "الأسواق الدولية", desc: "Cross-border growth bridging the GCC with US, UK, and global markets." },
  { icon: "💻", name: "Agencies & Freelance", ar: "الوكالات والمستقلون", desc: "Business development consulting to win higher-value clients." },
  { icon: "🏥", name: "Healthcare", ar: "الرعاية الصحية", desc: "Patient acquisition systems and AI booking agents for clinics and practices." },
  { icon: "🏠", name: "Real Estate", ar: "العقارات", desc: "Lead generation and AI nurturing flows for brokers and developers." },
];

const IndustriesSection = () => {
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6" id="industries">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-accent" />
            <span className="text-[10px] font-semibold tracking-[0.35em] uppercase text-accent">Industries</span>
            <span className="font-ar text-[11px] text-accent/60">القطاعات</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Sectors</span> We Serve
          </h2>
          <div className="font-ar text-base sm:text-lg text-muted-foreground/40 mt-2">القطاعات التي نخدمها</div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass rounded-xl p-5 sm:p-6 hover:border-primary/40 transition-all duration-300"
            >
              <div className="text-2xl mb-3">{ind.icon}</div>
              <h3 className="font-display text-sm sm:text-base font-semibold mb-1">{ind.name}</h3>
              <div className="font-ar text-xs text-secondary/80 mb-2">{ind.ar}</div>
              <p className="text-xs text-muted-foreground leading-relaxed">{ind.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
