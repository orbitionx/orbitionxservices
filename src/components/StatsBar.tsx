import { motion } from "framer-motion";

const stats = [
  { val: "3", label: "Licensed Activities", ar: "الأنشطة المرخصة", color: "text-accent" },
  { val: "360°", label: "Full Funnel", ar: "التغطية الكاملة", color: "text-secondary" },
  { val: "8+", label: "Industries Served", ar: "القطاعات المخدومة", color: "text-primary" },
];

const StatsBar = () => {
  return (
    <section className="relative border-y border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border/40">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center py-10 sm:py-12 px-6 hover:bg-primary/5 transition-colors"
          >
            <div className={`font-display text-4xl sm:text-5xl font-extrabold tracking-tight mb-2 ${s.color}`}>
              {s.val}
            </div>
            <div className="text-[10px] font-semibold tracking-[0.2em] uppercase text-muted-foreground">
              {s.label}
            </div>
            <div className="font-ar text-[11px] text-muted-foreground/60 mt-1">{s.ar}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsBar;
