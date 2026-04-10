import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";

interface ProjectImage {
  src: string;
  label: string;
  alt: string;
}

interface ProjectCardProps {
  client: string;
  industry: string;
  description: string;
  metric: string;
  metricLabel: string;
  link?: string;
  images?: ProjectImage[];
  reversed?: boolean;
  index: number;
}

const ProjectCard = ({
  client,
  industry,
  description,
  metric,
  metricLabel,
  link,
  images,
  reversed,
  index,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="glass rounded-3xl gradient-border overflow-hidden"
    >
      <div className={`flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
        {/* Info side */}
        <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
          <span className="text-xs tracking-widest uppercase text-primary font-medium mb-4 block">
            {industry}
          </span>
          <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">{client}</h3>
          <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-lg">
            {description}
          </p>
          <div className="flex items-end gap-3 mb-6">
            <span className="font-display text-5xl md:text-6xl font-bold gradient-text leading-none">
              {metric}
            </span>
            <span className="text-muted-foreground text-sm pb-2">{metricLabel}</span>
          </div>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline w-fit"
            >
              Visit Project <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Images side */}
        {images && images.length > 0 && (
          <div className="flex-1 p-6 md:p-8">
            <div className={`grid ${images.length > 2 ? "grid-cols-2" : "grid-cols-1"} gap-4`}>
              {images.slice(0, 4).map((img, i) => (
                <motion.div
                  key={img.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="rounded-xl overflow-hidden border border-border/30 group"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Placeholder for projects without images */}
        {(!images || images.length === 0) && (
          <div className="flex-1 p-8 md:p-12 flex items-center justify-center">
            <div className="w-full h-48 md:h-64 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-border/20 flex items-center justify-center">
              <ArrowUpRight className="w-12 h-12 text-primary/40" />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
