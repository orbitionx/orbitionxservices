import orbitionLogo from "@/assets/orbition-logo-new.png.asset.json";
import AnimatedCounter from "./AnimatedCounter";

const AboutSection = () => {
  return (
    <section className="relative py-20 sm:py-32 px-4 sm:px-6" id="about">
      <div className="absolute top-1/2 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-secondary/5 blur-[150px] -translate-y-1/2" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Visual */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full border border-primary/10 animate-spin-slow" />
              <div className="absolute inset-6 rounded-full border border-secondary/15 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />
              <div className="absolute inset-12 rounded-full border border-accent/10 animate-spin-slow" style={{ animationDuration: '25s' }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 sm:w-24 h-20 sm:h-24 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-xl" />
                <div className="absolute w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center p-2.5">
                  <img src={orbitionLogo.url} alt="Orbition X" className="w-full h-full object-contain rounded-full" />
                </div>
              </div>
              {/* Orbit dots */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary glow-blue" />
              </div>
              <div className="absolute inset-6 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }}>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-secondary glow-purple" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">Our Vision</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-5 sm:mb-6">
              Intelligence at the <span className="gradient-text">Core</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-5 sm:mb-6">
              Orbition X was built on a singular belief: that every business deserves access to the same AI-powered systems that drive the world's most valuable companies.
            </p>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8">
              We don't just build tools — we architect complete growth ecosystems. From intelligent marketing automation to custom tech infrastructure, every system we create is designed to learn, adapt, and scale with your ambitions.
            </p>
            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              <AnimatedCounter value="150+" label="Projects Delivered" />
              <AnimatedCounter value="98%" label="Client Retention" />
              <AnimatedCounter value="10x" label="Average ROI" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
