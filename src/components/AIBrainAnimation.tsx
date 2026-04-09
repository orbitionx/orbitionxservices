import React from "react";
import { motion } from "framer-motion";

const nodes = [
  { x: 50, y: 20 }, { x: 80, y: 35 }, { x: 65, y: 55 },
  { x: 35, y: 55 }, { x: 20, y: 35 }, { x: 50, y: 50 },
  { x: 50, y: 80 }, { x: 30, y: 75 }, { x: 70, y: 75 },
  { x: 15, y: 55 }, { x: 85, y: 55 }, { x: 40, y: 30 },
  { x: 60, y: 30 },
];

const connections = [
  [0, 1], [0, 4], [0, 5], [0, 11], [0, 12],
  [1, 2], [1, 5], [1, 10], [1, 12],
  [2, 5], [2, 6], [2, 8], [2, 10],
  [3, 4], [3, 5], [3, 6], [3, 7], [3, 9],
  [4, 5], [4, 9], [4, 11],
  [5, 6], [5, 7], [5, 8],
  [6, 7], [6, 8],
  [7, 9], [8, 10],
  [9, 11], [10, 12], [11, 12],
];

const AIBrainAnimation = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <motion.div
        className="relative w-[420px] h-[420px] md:w-[520px] md:h-[520px]"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      >
        {/* Neural connections */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          {connections.map(([from, to], i) => (
            <motion.line
              key={`conn-${i}`}
              x1={nodes[from].x}
              y1={nodes[from].y}
              x2={nodes[to].x}
              y2={nodes[to].y}
              stroke="hsl(216 100% 60%)"
              strokeWidth="0.25"
              initial={{ opacity: 0.15 }}
              animate={{ opacity: [0.12, 0.45, 0.12] }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}

          {/* Data pulse traveling along connections */}
          {connections.slice(0, 16).map(([from, to], i) => (
            <React.Fragment key={`pulse-${i}`}>
              <motion.circle
                r="1"
                fill="hsl(187 100% 65%)"
                initial={{ opacity: 0 }}
                animate={{
                  cx: [nodes[from].x, nodes[to].x],
                  cy: [nodes[from].y, nodes[to].y],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.35,
                  ease: "easeInOut",
                }}
                style={{ filter: "drop-shadow(0 0 3px hsl(187 100% 65%))" }}
              />
              <motion.circle
                r="2"
                fill="hsl(187 100% 65% / 0.3)"
                initial={{ opacity: 0 }}
                animate={{
                  cx: [nodes[from].x, nodes[to].x],
                  cy: [nodes[from].y, nodes[to].y],
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.35,
                  ease: "easeInOut",
                }}
              />
            </React.Fragment>
          ))}
        </svg>

        {/* Neural nodes */}
        {nodes.map((node, i) => (
          <motion.div
            key={`node-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ scale: 0 }}
            animate={{
              scale: [0.8, 1.2, 0.8],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.15,
            }}
          >
            <div
              className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-primary"
              style={{
                boxShadow: "0 0 10px hsl(216 100% 50% / 0.5), 0 0 20px hsl(216 100% 50% / 0.2)",
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Inner counter-rotating ring */}
      <motion.div
        className="absolute w-[200px] h-[200px] md:w-[260px] md:h-[260px] rounded-full border border-primary/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent" style={{ boxShadow: "0 0 8px hsl(187 100% 50% / 0.6)" }} />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1 h-1 rounded-full bg-secondary" style={{ boxShadow: "0 0 8px hsl(262 78% 57% / 0.6)" }} />
      </motion.div>

      {/* Center AI core */}
      <motion.div
        className="absolute w-16 h-16 md:w-20 md:h-20 rounded-full"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background: "radial-gradient(circle, hsl(216 100% 50% / 0.3), hsl(262 78% 57% / 0.1), transparent)",
          boxShadow: "0 0 40px hsl(216 100% 50% / 0.15), 0 0 80px hsl(262 78% 57% / 0.08)",
        }}
      />

      {/* Floating hex shapes */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`hex-${i}`}
          className="absolute w-3 h-3 border border-primary/20 rotate-45"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.1, 0.4, 0.1],
            rotate: [45, 135, 45],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: i * 0.7,
          }}
        />
      ))}
    </div>
  );
};

export default AIBrainAnimation;
