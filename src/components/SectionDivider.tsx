import { motion } from "framer-motion";

const SectionDivider = () => {
  return (
    <div className="flex items-center justify-center py-4">
      <motion.div
        className="h-px w-32 bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      <motion.div
        className="mx-3 w-1.5 h-1.5 rounded-full bg-primary/60"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.4 }}
      />
      <motion.div
        className="h-px w-32 bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </div>
  );
};

export default SectionDivider;
