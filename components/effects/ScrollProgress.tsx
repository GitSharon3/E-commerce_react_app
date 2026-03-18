"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40 });

  return (
    <motion.div
      aria-hidden
      className="fixed left-0 top-0 z-[55] h-[2px] w-full origin-left bg-gradient-to-r from-white/20 via-white/70 to-white/20"
      style={{ scaleX }}
    />
  );
}
