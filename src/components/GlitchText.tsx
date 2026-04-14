import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlitchTextProps {
  children: ReactNode;
  className?: string;
}

const GlitchText = ({ children, className = "" }: GlitchTextProps) => {
  return (
    <span className={`relative inline-block ${className}`}>
      {children}
      {/* Glitch layers */}
      <motion.span
        className="absolute inset-0 text-primary/60"
        style={{ clipPath: "inset(20% 0 60% 0)" }}
        animate={{
          x: [-2, 2, -1, 0],
          opacity: [0, 0.7, 0, 0],
        }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          repeatDelay: 4,
          times: [0, 0.3, 0.6, 1],
        }}
        aria-hidden
      >
        {children}
      </motion.span>
      <motion.span
        className="absolute inset-0 text-accent/50"
        style={{ clipPath: "inset(60% 0 10% 0)" }}
        animate={{
          x: [2, -2, 1, 0],
          opacity: [0, 0.5, 0, 0],
        }}
        transition={{
          duration: 0.25,
          repeat: Infinity,
          repeatDelay: 5,
          delay: 2,
          times: [0, 0.3, 0.6, 1],
        }}
        aria-hidden
      >
        {children}
      </motion.span>
    </span>
  );
};

export default GlitchText;
