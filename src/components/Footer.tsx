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

        <div className="flex flex-col items-center md:items-end gap-1 text-xs text-muted-foreground">
          <div className="tracking-wider">
            CR: <span className="text-secondary font-semibold">240212</span> · License: <span className="text-secondary font-semibold">329140</span>
          </div>
          <a href="https://orbition-x-glow.lovable.app" className="text-accent hover:underline text-[11px]">
            orbition-x-glow.lovable.app
          </a>
          <p className="text-[10px] text-muted-foreground/60">© 2026 Orbition X Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
