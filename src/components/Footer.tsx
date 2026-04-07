const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-display text-lg font-bold tracking-tight">Orbition X</div>
        <div className="flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#services" className="hover:text-foreground transition-colors">Services</a>
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#results" className="hover:text-foreground transition-colors">Results</a>
        </div>
        <p className="text-sm text-muted-foreground">© 2026 Orbition X. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
