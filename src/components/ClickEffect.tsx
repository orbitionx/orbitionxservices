import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ClickDot {
  id: number;
  x: number;
  y: number;
}

let idCounter = 0;

const ClickEffect = () => {
  const [dots, setDots] = useState<ClickDot[]>([]);

  const handleClick = useCallback((e: MouseEvent) => {
    const newDot: ClickDot = { id: ++idCounter, x: e.clientX, y: e.clientY };
    setDots((prev) => [...prev, newDot]);
    setTimeout(() => {
      setDots((prev) => prev.filter((d) => d.id !== newDot.id));
    }, 600);
  }, []);

  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [handleClick]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <AnimatePresence>
        {dots.map((dot) => (
          <motion.div
            key={dot.id}
            className="absolute"
            style={{ left: dot.x, top: dot.y }}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 1, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Ripple ring */}
            <motion.div
              className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/60"
              initial={{ width: 0, height: 0 }}
              animate={{ width: 40, height: 40, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
            {/* Center dot */}
            <motion.div
              className="absolute -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary"
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ClickEffect;
