import { motion } from "framer-motion";

const steps = [
  { num: "01", name: "Discovery", ar: "الاستكشاف", desc: "Deep audit of your business, audience, and competitive landscape to identify highest-leverage opportunities." },
  { num: "02", name: "Strategy", ar: "الاستراتيجية", desc: "A bespoke AI-powered growth system designed around your goals, budget, and timeline with clear milestones." },
  { num: "03", name: "Execute", ar: "التنفيذ", desc: "Rapid deployment of AI automations, campaigns, and creatives — built for speed without sacrificing quality." },
  { num: "04", name: "Scale", ar: "التوسع", desc: "Continuous AI-driven optimisation and scaling — feeding what works, cutting what doesn't, compounding results." },
];

const ProcessSection = () => {
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6" id="process">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 sm:mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-accent" />
            <span className="text-[10px] font-semibold tracking-[0.35em] uppercase text-accent">How We Work</span>
            <span className="font-ar text-[11px] text-accent/60">كيف نعمل</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            Our Four-Phase <span className="gradient-text">Growth System</span>
          </h2>
          <div className="font-ar text-base sm:text-lg text-muted-foreground/40 mt-2">نظام النمو الرباعي المراحل</div>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
          {/* connector line */}
          <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative text-center px-2"
            >
              <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-card border border-primary/40 flex items-center justify-center font-display text-2xl font-extrabold text-primary hover:border-accent hover:text-accent hover:shadow-[0_0_20px_hsl(var(--accent)/0.3)] transition-all duration-300">
                {s.num}
              </div>
              <h3 className="font-display text-base font-bold mb-1">{s.name}</h3>
              <div className="font-ar text-xs text-secondary/80 mb-3">{s.ar}</div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
