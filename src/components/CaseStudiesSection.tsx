import { ArrowUpRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import adsDashboard from "@/assets/ads-dashboard-proof.png";
import proofShopifySales from "@/assets/proof-shopify-sales.png";
import proofMetaAds1 from "@/assets/proof-meta-ads-1.jpeg";
import proofMetaAds2 from "@/assets/proof-meta-ads-2.jpeg";
import proofInstagramAds from "@/assets/proof-instagram-ads.jpeg";
import proofSeoCranes from "@/assets/proof-seo-cranes.png";
import proofOrbitionSales from "@/assets/proof-orbition-sales.jpeg";
import proofUsSales from "@/assets/proof-us-sales.jpeg";
import oxyHero from "@/assets/oxy-hero.png";
import oxyProductDuo from "@/assets/oxy-product-duo.png";
import oxyAthlete1 from "@/assets/oxy-athlete-1.png";
import oxyAthlete2 from "@/assets/oxy-athlete-2.png";
import oxyMannequin from "@/assets/oxy-mannequin.png";
import oxyPackaging from "@/assets/oxy-packaging.png";

const caseStudies = [
  {
    client: "Oxy Plus",
    industry: "E-commerce / Health",
    result: "Full brand & store launch",
    description: "End-to-end e-commerce project — from branding, product photography, AI-generated creatives to a live Shopify store driving sales.",
    metric: "🚀",
    metricLabel: "Full Launch",
    link: "https://www.oxypluss.com",
  },
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

const oxyCreatives = [
  { src: oxyHero, label: "Oxy Plus — Product Hero Shot", alt: "Oxy Plus nasal strips product packaging" },
  { src: oxyProductDuo, label: "Oxy Plus — Dual Product Display", alt: "Two Oxy Plus packages on futuristic pedestal" },
  { src: oxyAthlete1, label: "Oxy Plus — Performance Ad Creative", alt: "Athlete wearing Oxy Plus nasal strip with performance stats" },
  { src: oxyAthlete2, label: "Oxy Plus — Endurance Ad Creative", alt: "Female athlete wearing Oxy Plus nasal strip" },
  { src: oxyMannequin, label: "Oxy Plus — Product Demonstration", alt: "Mannequin showing Oxy Plus nasal strip placement" },
  { src: oxyPackaging, label: "Oxy Plus — Packaging Design", alt: "Oxy Plus packaging and product information" },
];

const proofScreenshots = [
  { src: proofShopifySales, label: "Shopify Analytics — QAR 3,370 Net Sales", alt: "Shopify sales analytics dashboard" },
  { src: adsDashboard, label: "Meta Ads — Campaign Performance", alt: "Meta ads campaign dashboard" },
  { src: proofMetaAds1, label: "Meta Ads — 385 App Installs at $0.89/Result", alt: "Meta ads app install campaign" },
  { src: proofMetaAds2, label: "Meta Ads — Full Campaign View", alt: "Meta ads full campaign overview" },
  { src: proofInstagramAds, label: "Instagram Ads — 876 Profile Visits at $0.27/Result", alt: "Instagram profile visit campaign" },
  { src: proofSeoCranes, label: "SEO — #1 Google Ranking for Client", alt: "Google search ranking showing client at top" },
  { src: proofOrbitionSales, label: "Shopify Store — $989.9 Sales, ↑17%", alt: "Shopify store sales dashboard" },
  { src: proofUsSales, label: "US Store — $3,415.6 Sales, ↑519%", alt: "US store sales showing 519% growth" },
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                {study.link ? (
                  <a href={study.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 text-primary hover:text-primary/80 transition-colors" />
                  </a>
                ) : (
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                )}
              </div>
              <div className="mb-6">
                <div className="font-display text-4xl font-bold gradient-text mb-1">{study.metric}</div>
                <div className="text-sm text-muted-foreground">{study.metricLabel}</div>
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{study.client}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">{study.description}</p>
              {study.link && (
                <a
                  href={study.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline"
                >
                  Visit Store <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Oxy Plus Project Showcase */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-3">Featured Project</p>
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
              Oxy Plus — <span className="gradient-text">E-Commerce Launch</span>
            </h3>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              From concept to conversions: branding, AI product creatives, photoshoots & a live Shopify store.
            </p>
            <a
              href="https://www.oxypluss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-3 text-primary text-sm font-medium hover:underline"
            >
              www.oxypluss.com <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {oxyCreatives.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-4 gradient-border hover:bg-card/60 transition-all duration-500 group"
              >
                <p className="text-sm font-medium text-foreground/80 mb-3">{item.label}</p>
                <div className="rounded-xl overflow-hidden border border-border/30">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Live proof screenshots grid */}
        <div className="mt-16">
          <p className="text-xs tracking-widest uppercase text-muted-foreground mb-8 text-center">
            Live Dashboards & Results
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {proofScreenshots.map((proof, index) => (
              <motion.div
                key={proof.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-4 gradient-border hover:bg-card/60 transition-all duration-500"
              >
                <p className="text-sm font-medium text-foreground/80 mb-3">{proof.label}</p>
                <div className="rounded-xl overflow-hidden border border-border/30">
                  <img
                    src={proof.src}
                    alt={proof.alt}
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
