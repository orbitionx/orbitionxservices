import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import adsDashboard from "@/assets/ads-dashboard-proof.png";

const caseStudies = [
  {
    client: "NovaTech Labs",
    industry: "SaaS",
    result: "340% increase in qualified leads",
    description: "Deployed AI-powered lead scoring and automated nurture sequences that transformed their pipeline.",
    metric: "+340%",
    metricLabel: "Qualified Leads",
  },
  {
    client: "Apex Ventures",
    industry: "Finance",
    result: "5x return on ad spend",
    description: "Built a predictive analytics engine for campaign optimization, slashing CAC by 60%.",
    metric: "5x",
    metricLabel: "ROAS",
  },
  {
    client: "Velocity Commerce",
    industry: "E-commerce",
    result: "$2.4M in automated revenue",
    description: "Full-stack automation system handling inventory, pricing, and marketing at scale.",
    metric: "$2.4M",
    metricLabel: "Automated Revenue",
  },
];

const CaseStudiesSection = () => {
  return (
    <section className="relative py-32 px-6" id="results">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">Results</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Proof in <span className="gradient-text">Performance</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real outcomes from real partnerships. Here's what happens when AI meets strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.client}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group glass rounded-2xl p-8 gradient-border hover:bg-card/60 transition-all duration-500 flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs tracking-widest uppercase text-muted-foreground">{study.industry}</span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <div className="mb-6">
                <div className="font-display text-4xl font-bold gradient-text mb-1">{study.metric}</div>
                <div className="text-sm text-muted-foreground">{study.metricLabel}</div>
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{study.client}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">{study.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Live proof screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 glass rounded-2xl p-4 md:p-6 gradient-border"
        >
          <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4 text-center">Live Campaign Dashboard</p>
          <div className="rounded-xl overflow-hidden border border-border/30">
            <img
              src={adsDashboard}
              alt="Live advertising campaign performance dashboard showing active campaigns and results"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
