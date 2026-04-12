import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  label: string;
}

const AnimatedCounter = ({ value, label }: AnimatedCounterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState("0");

  const numericPart = value.replace(/[^0-9.]/g, "");
  const prefix = value.match(/^[^0-9]*/)?.[0] || "";
  const suffix = value.match(/[^0-9.]*$/)?.[0] || "";

  useEffect(() => {
    if (!isInView) return;
    const target = parseFloat(numericPart);
    if (isNaN(target)) {
      setDisplay(value);
      return;
    }
    const duration = 1500;
    const steps = 40;
    const increment = target / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(current + increment, target);
      const isInt = Number.isInteger(target);
      setDisplay(
        `${prefix}${isInt ? Math.round(current) : current.toFixed(1)}${suffix}`
      );
      if (step >= steps) {
        setDisplay(value);
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value, numericPart, prefix, suffix]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="font-display text-3xl sm:text-4xl font-bold gradient-text">
        {display}
      </div>
      <div className="text-muted-foreground text-xs sm:text-sm mt-1">{label}</div>
    </motion.div>
  );
};

export default AnimatedCounter;
