"use client";

import { AnimatePresence, motion } from "framer-motion";

export function Drawer({
  open,
  onClose,
  children,
  title,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            aria-label="Close"
            className="absolute inset-0 bg-black/55 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.aside
            className="absolute right-0 top-0 h-full w-full sm:w-[400px] md:w-[420px] border-l border-black/10 bg-white/95 text-black shadow-[0_24px_80px_rgba(0,0,0,0.20)] backdrop-blur-2xl dark:border-white/10 dark:bg-black/60 dark:text-white dark:shadow-[0_24px_80px_rgba(0,0,0,0.7)]"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between px-5 py-4">
              <div className="text-sm font-medium tracking-tight text-black/70 dark:text-white/80">
                {title ?? ""}
              </div>
              <button
                className="rounded-full border border-black/10 bg-black/5 px-3 py-2 text-xs text-black/80 hover:bg-black/7 dark:border-white/15 dark:bg-white/5 dark:text-white/85 dark:hover:bg-white/10"
                onClick={onClose}
              >
                Close
              </button>
            </div>
            <div className="h-[calc(100%-56px)] overflow-auto px-5 pb-6">
              {children}
            </div>
          </motion.aside>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
