"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { Container } from "@/components/layout/Container";

const valueProps = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: "Titanium Durability",
    description: "Aerospace-grade titanium frames that resist corrosion and maintain their shape for years.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Lightweight Comfort",
    description: "Weighing just 8-12 grams, our frames are designed for all-day wear without pressure marks.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.077-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.048 4.025a3 3 0 01-4.244 4.245 2.25 2.25 0 01-2.4-2.245 4.5 4.5 0 008.4 0zM16.5 18.75a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
      </svg>
    ),
    title: "Prescription Ready",
    description: "Every frame is compatible with prescription lenses. Upload your prescription at checkout.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
    title: "30-Day Returns",
    description: "Not satisfied? Return or exchange within 30 days, no questions asked. Free return shipping.",
  },
];

export function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 sm:py-20 md:py-24 bg-black/[0.02] dark:bg-white/[0.02]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 text-center sm:mb-12"
        >
          <div className="text-[11px] font-medium tracking-[0.22em] text-black/55 dark:text-white/55 sm:text-xs">
            WHY AURORA
          </div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-black dark:text-white sm:mt-3 sm:text-3xl md:text-4xl">
            Why Choose Us
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-7 text-black/65 dark:text-white/65 sm:mt-3">
            Premium craftsmanship meets modern design. Experience eyewear reimagined.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((prop, index) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              className="group rounded-2xl border border-black/10 bg-white/80 p-5 backdrop-blur-xl transition-all duration-300 hover:border-black/20 hover:shadow-lg hover:shadow-black/5 dark:border-white/10 dark:bg-black/40 dark:hover:border-white/20 dark:hover:shadow-white/5 sm:p-6"
            >
              <motion.div
                initial={{ rotate: 0, scale: 1 }}
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 text-violet-600 dark:from-violet-400/20 dark:to-cyan-400/20 dark:text-violet-400"
              >
                {prop.icon}
              </motion.div>
              <h3 className="text-base font-semibold text-black dark:text-white sm:text-lg">
                {prop.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-black/65 dark:text-white/65">
                {prop.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
