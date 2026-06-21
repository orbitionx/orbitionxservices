import orbitionLogo from "@/assets/orbition-logo-new.png.asset.json";
import { Instagram, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="flex flex-col">
          <span className="font-display text-lg font-bold tracking-tight">Orbition X Services</span>
          <span className="font-ar text-xs text-secondary/70">اوربيشن اكس للخدمات</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/orbitionx/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full glass text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://orbition-x-glow.lovable.app"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full glass text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
            aria-label="Website"
          >
            <Globe className="w-5 h-5" />
          </a>
        </div>

        <div className="flex flex-col items-center text-xs text-muted-foreground/80">
          <span className="tracking-widest uppercase">Location: Doha, Qatar</span>
          <span className="font-ar text-[10px] text-muted-foreground/50 mt-1">الدوحة، قطر</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
