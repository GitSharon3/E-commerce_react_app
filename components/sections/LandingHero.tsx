"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { fadeUp } from "@/animations/motion";

export function LandingHero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Background Image - Meta Style Full Width */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1577803645773-f96470509666?w=1920&q=80&auto=format&fit=crop"
          alt="Premium eyeglasses on white surface"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Gradient Overlays for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent dark:from-[#05060A]/90 dark:via-[#05060A]/70 dark:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-white/30 dark:from-[#05060A]/80 dark:to-[#05060A]/30" />
      </div>

      {/* Content */}
      <Container className="relative z-10 flex min-h-[90vh] items-center">
        <div className="grid w-full items-center gap-10 py-16 md:grid-cols-2 md:py-20">
          {/* Left Content */}
          <div className="max-w-xl">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-3 py-1.5 text-[11px] font-medium text-black/70 backdrop-blur-md dark:border-white/20 dark:bg-black/40 dark:text-white/80 sm:px-4 sm:py-2 sm:text-xs"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              New Collection 2024
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.08 }}
              className="mt-4 text-balance text-4xl font-bold tracking-tight text-[#0b0f14] dark:text-white sm:text-5xl md:text-6xl lg:text-7xl sm:mt-6"
            >
              See the world
              <span className="mt-1 block bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent sm:mt-2">
                differently.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.16 }}
              className="mt-4 max-w-lg text-base leading-relaxed text-black/70 dark:text-white/70 sm:text-lg sm:mt-6"
            >
              Premium titanium frames engineered for all-day comfort. 
              Where precision meets artistry.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.24 }}
              className="mt-6 flex flex-col gap-3 sm:flex-row sm:mt-8"
            >
              <Link href="/products" className="w-full sm:w-auto">
                <Button className="h-11 w-full px-6 text-sm font-semibold sm:h-12 sm:px-8">
                  Shop Collection
                </Button>
              </Link>
              <Link href="/products/halo-titanium" className="w-full sm:w-auto">
                <Button variant="secondary" className="h-11 w-full px-6 text-sm sm:h-12 sm:px-8">
                  Explore Halo
                </Button>
              </Link>
            </motion.div>

            {/* Stats Row - Meta Style */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.32 }}
              className="mt-8 flex flex-wrap items-center gap-4 border-t border-black/10 pt-6 dark:border-white/10 sm:gap-8 sm:mt-12 sm:pt-8"
            >
              <div>
                <div className="text-xl font-bold text-[#0b0f14] dark:text-white sm:text-2xl">50K+</div>
                <div className="text-[11px] text-black/60 dark:text-white/60 sm:text-xs">Happy Customers</div>
              </div>
              <div className="h-8 w-px bg-black/10 dark:bg-white/10 sm:h-10" />
              <div>
                <div className="text-xl font-bold text-[#0b0f14] dark:text-white sm:text-2xl">4.9</div>
                <div className="text-[11px] text-black/60 dark:text-white/60 sm:text-xs">Average Rating</div>
              </div>
              <div className="h-8 w-px bg-black/10 dark:bg-white/10 sm:h-10" />
              <div>
                <div className="text-xl font-bold text-[#0b0f14] dark:text-white sm:text-2xl">30+</div>
                <div className="text-[11px] text-black/60 dark:text-white/60 sm:text-xs">Frame Styles</div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Feature Cards Floating */}
          <div className="relative hidden md:block">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative ml-auto max-w-sm"
            >
              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="rounded-2xl border border-black/10 bg-white/90 p-5 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-black/60"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 text-lg dark:bg-violet-900/30">
                    ✨
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#0b0f14] dark:text-white">
                      Titanium Grade 5
                    </div>
                    <div className="text-xs text-black/60 dark:text-white/60">
                      Feather-light durability
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="mt-4 rounded-2xl border border-black/10 bg-white/90 p-5 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-black/60"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100 text-lg dark:bg-cyan-900/30">
                    🛡️
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#0b0f14] dark:text-white">
                      UV Protection
                    </div>
                    <div className="text-xs text-black/60 dark:text-white/60">
                      100% UVA/UVB blocking
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="mt-4 rounded-2xl border border-black/10 bg-white/90 p-5 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-black/60"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-lg dark:bg-emerald-900/30">
                    🎯
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#0b0f14] dark:text-white">
                      Precision Fit
                    </div>
                    <div className="text-xs text-black/60 dark:text-white/60">
                      Adjustable nose pads
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Container>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-black/40 dark:text-white/40"
        >
          <span className="text-xs">Scroll to explore</span>
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
