const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="flex flex-col">
          <span className="font-display text-lg font-bold tracking-tight">Orbition X Services</span>
          <span className="font-ar text-xs text-secondary/70">اوربيشن اكس للخدمات</span>
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
