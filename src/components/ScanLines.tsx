import { motion } from "framer-motion";

const ScanLines = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[1]">
      {/* CRT scan lines overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(216 100% 50% / 0.08) 2px, hsl(216 100% 50% / 0.08) 4px)",
        }}
      />
      {/* Moving scan beam */}
      <motion.div
        className="absolute left-0 right-0 h-[2px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, hsl(187 100% 50% / 0.12) 20%, hsl(187 100% 50% / 0.25) 50%, hsl(187 100% 50% / 0.12) 80%, transparent 100%)",
          boxShadow: "0 0 20px hsl(187 100% 50% / 0.1)",
        }}
        animate={{ top: ["-2px", "100vh"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

export default ScanLines;
