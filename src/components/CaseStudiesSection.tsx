import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import ProjectCard from "./ProjectCard";

// Oxy Plus assets
import oxyHero from "@/assets/oxy-hero.png";
import oxyProductDuo from "@/assets/oxy-product-duo.png";
import oxyAthlete1 from "@/assets/oxy-athlete-1.png";
import oxyAthlete2 from "@/assets/oxy-athlete-2.png";

// Proof / dashboard assets
import adsDashboard from "@/assets/ads-dashboard-proof.png";
import proofShopifySales from "@/assets/proof-shopify-sales.png";
import proofMetaAds1 from "@/assets/proof-meta-ads-1.jpeg";
import proofMetaAds2 from "@/assets/proof-meta-ads-2.jpeg";
import proofInstagramAds from "@/assets/proof-instagram-ads.jpeg";
import proofSeoCranes from "@/assets/proof-seo-cranes.png";
import proofOrbitionSales from "@/assets/proof-orbition-sales.jpeg";
import proofUsSales from "@/assets/proof-us-sales.jpeg";

// New Shopify & WordPress assets
import proofStuzzi from "@/assets/proof-stuzzi-store.png";
import proofEliteSales from "@/assets/proof-elite-sales.jpg";
import proofRemedy from "@/assets/proof-remedy-store.jpg";
import proofRains from "@/assets/proof-rains-store.jpg";
import proofTaika from "@/assets/proof-taika-store.jpg";
import proofWakeup from "@/assets/proof-wakeup-store.png";
import proofShopifyDaily from "@/assets/proof-shopify-daily-sales.webp";
import tailixProfile from "@/assets/tailix-profile.png";
import proofTailixAds from "@/assets/proof-tailix-ads.jpeg";

const projects = [
  {
    client: "Tailix (tailix.qa)",
    industry: "Performance Marketing & Social Media",
    description:
      "Qatari-based all-in-one pet platform — Shop, Care, Connect. We run performance marketing and social media for Tailix, driving qualified app installs across iOS scale campaigns with optimized cost-per-result and growing an engaged community of pet lovers in Qatar.",
    metric: "385",
    metricLabel: "Mobile App Installs · 22.4K Reach",
    link: "https://www.tailix.qa",
    images: [
      { src: tailixProfile, label: "@tailix.qa — Instagram", alt: "Tailix Instagram profile" },
      { src: proofTailixAds, label: "iOS Scale Phase 1 — 385 Installs, ر.ق 0.89 CPI", alt: "Meta Ads campaign showing 385 mobile app installs for Tailix" },
    ],
  },
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
  },
  {
    client: "Shopify Stores",
    industry: "Shopify / E-commerce",
    description:
      "Custom Shopify store design & development for multiple brands — from premium hot sauces to skincare to coffee. Full store builds with optimized product pages, conversion-focused layouts, and brand-aligned design systems.",
    metric: "Rs 2.4M+",
    metricLabel: "Total Sales Generated",
    images: [
      { src: proofStuzzi, label: "Stuzzi — Premium Hot Sauce Store", alt: "Stuzzi hot sauce Shopify store" },
      { src: proofRemedy, label: "Remedy — Skincare Store", alt: "Remedy skincare product page" },
      { src: proofTaika, label: "Taika — Coffee E-commerce", alt: "Taika coffee Shopify store" },
      { src: proofWakeup, label: "Wake Up Pill — Health Supplements", alt: "Wake Up Pill product page with subscription" },
    ],
  },
  {
    client: "Shopify Sales & Analytics",
    industry: "Shopify / Performance",
    description:
      "Driving real revenue through optimized Shopify stores — Rs 2.367M in total sales with 154% growth, 951 orders, and consistent scaling across multiple storefronts. Full analytics tracking and conversion optimization.",
    metric: "↑154%",
    metricLabel: "Sales Growth",
    images: [
      { src: proofEliteSales, label: "Elite Store — Rs 2.367M Sales, ↑154%", alt: "Shopify dashboard showing Rs 2.367M total sales" },
      { src: proofShopifyDaily, label: "Daily Sales Report — $17.9K, 122 Orders", alt: "Shopify daily sales report" },
      { src: proofShopifySales, label: "Store Analytics — QAR 3,370 Net Sales", alt: "Shopify sales analytics" },
      { src: proofOrbitionSales, label: "Orbition — $989.9 Sales, ↑17%", alt: "Orbition Shopify sales dashboard" },
    ],
  },
  {
    client: "WordPress Sites",
    industry: "WordPress / Web Design",
    description:
      "Professional WordPress website design and development for fashion, lifestyle, and retail brands. Fully responsive, SEO-optimized, with custom themes and conversion-focused architecture.",
    metric: "10+",
    metricLabel: "Sites Launched",
    images: [
      { src: proofRains, label: "RAINS — Fashion & Outerwear", alt: "RAINS clothing website navigation" },
      { src: proofSeoCranes, label: "SEO — #1 Google Ranking", alt: "Google search ranking showing client at top" },
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
      { src: proofMetaAds1, label: "Meta Ads — 385 Installs", alt: "Meta ads app install campaign" },
      { src: proofMetaAds2, label: "Full Campaign View", alt: "Meta ads full campaign overview" },
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
      { src: proofUsSales, label: "US Sales — ↑519%", alt: "US store sales showing 519% growth" },
    ],
  },
];

const CaseStudiesSection = () => {
  return (
    <section className="relative py-32 px-6" id="portfolio">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px]" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full bg-primary/3 blur-[120px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
            Portfolio
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
