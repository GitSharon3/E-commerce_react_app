"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useSyncExternalStore } from "react";

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  const resolved = theme === "system" ? systemTheme : theme;
  const isDark = resolved === "dark";

  if (!mounted) {
    return (
      <div className="h-10 w-[84px] rounded-full border border-black/10 bg-black/5 dark:border-white/12 dark:bg-white/5" />
    );
  }

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative h-10 w-[84px] rounded-full border border-black/10 bg-white/70 px-1 text-left backdrop-blur-xl transition-colors hover:bg-white/80 dark:border-white/12 dark:bg-white/6 dark:hover:bg-white/10"
    >
      <motion.div
        className="absolute left-1 top-1 h-8 w-8 rounded-full bg-black/85 shadow-[0_10px_30px_rgba(0,0,0,0.25)] dark:bg-white/85 dark:shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
        animate={{ x: isDark ? 44 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 38 }}
      />
      <div className="relative z-10 flex h-full items-center justify-between px-2 text-[11px] font-medium tracking-tight">
        <span
          className={
            isDark
              ? "text-black/45 dark:text-white/60"
              : "text-black dark:text-white"
          }
        >
          Light
        </span>
        <span
          className={
            isDark
              ? "text-black dark:text-white"
              : "text-black/45 dark:text-white/60"
          }
        >
          Dark
        </span>
      </div>
    </button>
  );
}
