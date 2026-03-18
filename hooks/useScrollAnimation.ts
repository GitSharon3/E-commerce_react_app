"use client";

import { useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimation(setup: () => void) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      setup();
    });

    return () => ctx.revert();
  }, [setup]);
}
