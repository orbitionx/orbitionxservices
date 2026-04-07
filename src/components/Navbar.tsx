import { Button } from "@/components/ui/button";
import orbitionLogo from "@/assets/orbition-x-logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={orbitionLogo} alt="Orbition X" className="h-8 w-8 object-contain" />
          <span className="font-display text-lg font-bold tracking-tight">Orbition X</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {["Services", "About", "Results"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <Button size="sm" className="rounded-full bg-primary hover:bg-primary/90 text-sm font-semibold px-6">
          Contact
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
