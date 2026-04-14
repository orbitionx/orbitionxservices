import { Button } from "@/components/ui/button";
import orbitionLogo from "@/assets/orbition-x-logo.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const hashLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleHashClick = (e: React.MouseEvent, href: string) => {
    setOpen(false);
    if (location.pathname !== "/") {
      window.location.href = "/" + href;
      return;
    }
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={orbitionLogo} alt="Orbition X" className="h-8 w-8 object-contain" />
          <span className="font-display text-lg font-bold tracking-tight">Orbition X</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {hashLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => handleHashClick(item.href)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
          <Link
            to="/get-a-quote"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Get a Quote
          </Link>
        </div>

        <Link to="/get-a-quote">
          <Button size="sm" className="hidden md:inline-flex rounded-full bg-primary hover:bg-primary/90 text-sm font-semibold px-6">
            Free Evaluation
          </Button>
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden glass border-t border-white/5"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {hashLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => handleHashClick(item.href)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  {item.label}
                </a>
              ))}
              <Link
                to="/get-a-quote"
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Get a Quote
              </Link>
              <Link to="/get-a-quote" onClick={() => setOpen(false)}>
                <Button size="sm" className="rounded-full bg-primary hover:bg-primary/90 text-sm font-semibold w-full mt-2">
                  Free Evaluation
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
