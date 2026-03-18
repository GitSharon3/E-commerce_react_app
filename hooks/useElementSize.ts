"use client";

import { useEffect, useState } from "react";

export function useElementSize<T extends HTMLElement>() {
  const [node, setNode] = useState<T | null>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!node) return;

    const measure = () => {
      const rect = node.getBoundingClientRect();
      setSize({ width: rect.width, height: rect.height });
    };

    const ro = new ResizeObserver(() => {
      measure();
    });

    ro.observe(node);

    const raf = requestAnimationFrame(() => {
      measure();
    });

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [node]);

  return { setNode, size };
}
