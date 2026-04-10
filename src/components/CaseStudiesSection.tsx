import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import ProjectCard from "./ProjectCard";
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

const projects = [
  {
    client: "Oxy Plus",
    industry: "E-commerce / Health",
    description:
      "End-to-end e-commerce project — from branding, product photography, AI-generated creatives to a live Shopify store driving sales. We handled everything: concept, identity, packaging design, photoshoots, and store launch.",
    metric: "🚀",
    metricLabel: "Full Launch",
    link: "https://www.oxypluss.com",
    images: [
      { src: oxyHero, label: "Product Hero", alt: "Oxy Plus nasal strips product packaging" },
      { src: oxyProductDuo, label: "Dual Display", alt: "Two Oxy Plus packages on futuristic pedestal" },
      { src: oxyAthlete1, label: "Performance Ad", alt: "Athlete wearing Oxy Plus nasal strip" },
      { src: oxyAthlete2, label: "Endurance Ad", alt: "Female athlete wearing Oxy Plus nasal strip" },
    ],
    extraImages: [
      { src: oxyMannequin, label: "Product Demo", alt: "Mannequin showing Oxy Plus nasal strip" },
      { src: oxyPackaging, label: "Packaging", alt: "Oxy Plus packaging and product information" },
    ],
  },
  {
    client: "NovaTech Labs",
    industry: "SaaS",
    description:
      "Deployed AI-powered lead scoring and automated nurture sequences that transformed their pipeline. Our predictive models identified high-intent prospects, increasing conversion rates dramatically.",
    metric: "+340%",
    metricLabel: "Qualified Leads",
    images: [
      { src: proofMetaAds1, label: "Meta Ads", alt: "Meta ads app install campaign" },
      { src: proofMetaAds2, label: "Campaign View", alt: "Meta ads full campaign overview" },
    ],
  },
  {
    client: "Apex Ventures",
    industry: "Finance",
    description:
      "Built a predictive analytics engine for campaign optimization, slashing customer acquisition cost by 60%. Smart budget allocation powered by real-time performance data.",
    metric: "5x",
    metricLabel: "ROAS",
    images: [
      { src: adsDashboard, label: "Ads Dashboard", alt: "Meta ads campaign dashboard" },
      { src: proofInstagramAds, label: "Instagram Ads", alt: "Instagram profile visit campaign" },
    ],
  },
  {
    client: "Velocity Commerce",
    industry: "E-commerce",
    description:
      "Full-stack automation system handling inventory, pricing, and marketing at scale. From SEO dominance to explosive sales growth across multiple storefronts.",
    metric: "$2.4M",
    metricLabel: "Automated Revenue",
    images: [
      { src: proofShopifySales, label: "Shopify Sales", alt: "Shopify sales analytics dashboard" },
      { src: proofOrbitionSales, label: "Orbition Sales", alt: "Shopify store sales dashboard" },
      { src: proofUsSales, label: "US Sales +519%", alt: "US store sales showing 519% growth" },
      { src: proofSeoCranes, label: "SEO #1 Rank", alt: "Google search ranking showing client at top" },
    ],
  },
];

const CaseStudiesSection = () => {
  return (
    <section className="relative py-32 px-6" id="results">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px]" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full bg-primary/3 blur-[120px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
            Our Projects
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Proof in <span className="gradient-text">Performance</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real outcomes from real partnerships. Each project tells a story of strategy, execution, and measurable results.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.client}
              client={project.client}
              industry={project.industry}
              description={project.description}
              metric={project.metric}
              metricLabel={project.metricLabel}
              link={project.link}
              images={project.images}
              reversed={index % 2 === 1}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
