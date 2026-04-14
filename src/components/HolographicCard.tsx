import { motion, useMotionValue, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface HolographicCardProps {
  children: ReactNode;
  className?: string;
}

const HolographicCard = ({ children, className = "" }: HolographicCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useTransform(mouseY, [0, 1], [4, -4]);
  const rotateY = useTransform(mouseX, [0, 1], [-4, 4]);
  const sheenX = useTransform(mouseX, [0, 1], ["-100%", "200%"]);
  const sheenY = useTransform(mouseY, [0, 1], ["-100%", "200%"]);

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 800,
        transformStyle: "preserve-3d",
      }}
      className={`relative overflow-hidden ${className}`}
    >
      {children}
      {/* Holographic sheen */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(135deg, transparent 30%, hsl(187 100% 50% / 0.06) 50%, transparent 70%)`,
          left: sheenX,
          top: sheenY,
          width: "100%",
          height: "100%",
        }}
      />
    </motion.div>
  );
};

export default HolographicCard;
