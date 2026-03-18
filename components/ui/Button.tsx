"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

type Variant = "primary" | "secondary" | "ghost";

type Props = HTMLMotionProps<"button"> & {
  variant?: Variant;
};

const styles: Record<Variant, string> = {
  primary:
    "bg-black text-white border border-black/10 hover:bg-black/90 dark:bg-white/10 dark:text-white dark:border-white/15 dark:hover:bg-white/14 dark:hover:border-white/20",
  secondary:
    "bg-white text-black border border-black/10 hover:bg-black/5 hover:border-black/15 dark:bg-white/10 dark:text-white dark:border-white/15 dark:hover:bg-white/14 dark:hover:border-white/20",
  ghost:
    "bg-transparent text-black/80 border border-transparent hover:bg-black/5 dark:text-white/90 dark:hover:bg-white/8",
};

export function Button({
  className = "",
  variant = "primary",
  ...props
}: Props) {
  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      whileHover={{ y: -1 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-tight backdrop-blur-md shadow-[0_12px_40px_rgba(0,0,0,0.22)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 ${styles[variant]} ${className}`}
      {...props}
    />
  );
}
