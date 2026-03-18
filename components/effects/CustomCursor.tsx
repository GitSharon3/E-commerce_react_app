"use client";

import { motion } from "framer-motion";

import { useCursorEffect } from "@/hooks/useCursorEffect";

export function CustomCursor() {
  const { pos, active } = useCursorEffect();

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-white/5 backdrop-blur-md md:block"
      animate={{
        x: pos.x,
        y: pos.y,
        opacity: active ? 1 : 0,
        scale: active ? 1 : 0.9,
      }}
      transition={{ type: "spring", stiffness: 700, damping: 38 }}
    />
  );
}
