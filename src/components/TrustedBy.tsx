import { motion } from "framer-motion";

const clients = [
  "TAILIX",
  "ORBITION X",
  "DOHA VENTURES",
  "NORTH STAR",
  "AL MANARA",
  "PULSE QA",
  "VANTAGE LABS",
  "MERIDIAN",
];

const TrustedBy = () => {
  return (
    <section className="relative py-12 sm:py-16 border-y border-border/40 bg-card/20 backdrop-blur-sm overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-muted-foreground/70">
            Trusted by ambitious brands across Qatar &amp; beyond
          </span>
          <div className="font-ar text-[11px] text-muted-foreground/40 mt-1">
            موثوق به من قبل العلامات التجارية الطموحة
          </div>
        </div>

        {/* Marquee */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          <motion.div
            className="flex gap-12 sm:gap-16 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...clients, ...clients].map((name, i) => (
              <div
                key={i}
                className="font-display text-xl sm:text-2xl font-bold tracking-[0.2em] text-muted-foreground/40 hover:text-primary/80 transition-colors"
              >
                {name}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
