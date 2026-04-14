import { useEffect, useRef } from "react";

const CHARS = "01アイウエオカキクケコABCDEF∑∆Ωπ";
const FONT_SIZE = 12;
const FADE_ALPHA = 0.04;

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const columns = Math.floor(canvas.width / FONT_SIZE);
    const drops = Array.from({ length: columns }, () =>
      Math.random() * -100
    );

    const draw = () => {
      ctx.fillStyle = `rgba(13, 17, 23, ${FADE_ALPHA})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < drops.length; i++) {
        // Only render ~15% of columns for subtlety
        if (i % 7 !== 0) continue;

        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x = i * FONT_SIZE;
        const y = drops[i] * FONT_SIZE;

        // Gradient: brighter at head, fading trail
        const alpha = 0.15 + Math.random() * 0.1;
        ctx.fillStyle = `rgba(59, 130, 246, ${alpha})`;
        ctx.font = `${FONT_SIZE}px monospace`;
        ctx.fillText(char, x, y);

        // Head glow
        ctx.fillStyle = `rgba(34, 211, 238, ${alpha + 0.1})`;
        ctx.fillText(char, x, y);

        if (y > canvas.height && Math.random() > 0.98) {
          drops[i] = 0;
        }
        drops[i] += 0.5;
      }
    };

    const interval = setInterval(draw, 50);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[0] opacity-40"
    />
  );
};

export default MatrixRain;
