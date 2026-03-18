"use client";

import { useCallback, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function ScrollShowcase() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  const setup = useCallback(() => {
    const root = rootRef.current;
    if (!root) return;

    const items = root.querySelectorAll<HTMLElement>("[data-fly]");

    gsap.registerPlugin(ScrollTrigger);

    items.forEach((el, idx) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 20, rotateX: 10, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 78%",
          },
          delay: idx * 0.05,
        },
      );
    });
  }, []);

  useScrollAnimation(setup);

  return (
    <section className="pb-24">
      <Container>
        <div className="mb-10">
          <div className="text-xs font-medium tracking-[0.22em] text-black/55 dark:text-white/55">
            CRAFTED DETAILS
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-black dark:text-white sm:text-4xl">
            Scroll-triggered motion.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-black/65 dark:text-white/65">
            Subtle depth, soft easing, and micro-contrast for a premium feel.
            GSAP ScrollTrigger powers section reveals while Framer Motion handles
            UI interactions.
          </p>
        </div>

        <div ref={rootRef} className="grid gap-4 md:grid-cols-3">
          <Card data-fly className="p-6">
            <div className="text-sm font-medium text-black dark:text-white">Glassmorphism UI</div>
            <div className="mt-2 text-sm text-black/65 dark:text-white/65">
              Layered blur, gradients, and soft shadows—minimal yet luxurious.
            </div>
          </Card>
          <Card data-fly className="p-6">
            <div className="text-sm font-medium text-black dark:text-white">Parallax illusion</div>
            <div className="mt-2 text-sm text-black/65 dark:text-white/65">
              Floating hero object with transform-based depth and smooth motion.
            </div>
          </Card>
          <Card data-fly className="p-6">
            <div className="text-sm font-medium text-black dark:text-white">Performance-first</div>
            <div className="mt-2 text-sm text-black/65 dark:text-white/65">
              Transforms + opacity for 60fps. Minimal layout thrash.
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
