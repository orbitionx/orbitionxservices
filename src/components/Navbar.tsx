import orbitionLogo from "@/assets/orbition-logo-new.png.asset.json";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const servicesDropdown = [
  { label: "AI Agents & Automation", heading: true },
  { label: "Custom AI Agents", to: "/services#ai" },
  { label: "AI Customer Service", to: "/services#ai" },
  { label: "AI Calling Agents", to: "/services#ai" },
  { label: "Marketing & Advertising", heading: true },
  { label: "Performance Marketing", to: "/services#marketing" },
  { label: "Growth Marketing", heading: true },
  { label: "SEO", to: "/services#growth" },
  { label: "Social Media Management", to: "/services#growth" },
  { label: "Content Marketing", to: "/services#growth" },
  { label: "Email Marketing", to: "/services#growth" },
  { label: "Creative & Design", heading: true },
  { label: "Website Development", to: "/services#creative" },
  { label: "Graphic Design", to: "/services#creative" },
  { label: "Branding & Creatives", to: "/services#creative" },
  { label: "Video Production", to: "/services#creative" },
];

const navLinks = [
  { label: "Services", to: "/services", dropdown: servicesDropdown },
  { label: "Case Studies", to: "/portfolio" },
  { label: "About", to: "/about" },
  { label: "Get a Quote", to: "/get-a-quote" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={orbitionLogo} alt="Orbition X" className="h-8 w-8 object-contain" />
          <span className="font-display text-lg font-bold tracking-tight">Orbition X</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) =>
            item.dropdown ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  to={item.to}
                  className={`text-sm transition-colors flex items-center gap-1 ${
                    location.pathname === item.to
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                  <ChevronDown size={14} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </Link>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-3 min-w-[260px]"
                    >
                      <div className="glass rounded-xl border border-white/5 py-2 shadow-xl max-h-[70vh] overflow-y-auto">
                        {item.dropdown.map((sub) =>
                          sub.heading ? (
                            <div
                              key={sub.label}
                              className="px-4 pt-3 pb-1 text-[10px] font-semibold uppercase tracking-wider text-secondary/70"
                            >
                              {sub.label}
                            </div>
                          ) : (
                            <Link
                              key={sub.label}
                              to={sub.to}
                              className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
                            >
                              {sub.label}
                            </Link>
                          )
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.to}
                className={`text-sm transition-colors ${
                  location.pathname === item.to
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
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
            <div className="flex flex-col px-6 py-4 gap-2">
              {navLinks.map((item) =>
                item.dropdown ? (
                  <div key={item.label}>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="flex items-center justify-between w-full text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                    >
                      {item.label}
                      <ChevronDown size={14} className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden pl-4 flex flex-col gap-1"
                        >
                          {item.dropdown.map((sub) =>
                            sub.heading ? (
                              <div
                                key={sub.label}
                                className="pt-2 pb-1 text-[10px] font-semibold uppercase tracking-wider text-secondary/70"
                              >
                                {sub.label}
                              </div>
                            ) : (
                              <Link
                                key={sub.label}
                                to={sub.to}
                                onClick={() => setOpen(false)}
                                className="text-sm text-muted-foreground hover:text-foreground transition-colors py-1.5"
                              >
                                {sub.label}
                              </Link>
                            )
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                  >
                    {item.label}
                  </Link>
                )
              )}
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
