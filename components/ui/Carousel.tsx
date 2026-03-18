"use client";

import {
  animate,
  motion,
  type PanInfo,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export function Carousel({
  children,
  itemWidth,
  gap = 16,
  className = "",
}: {
  children: React.ReactNode;
  itemWidth: number;
  gap?: number;
  className?: string;
}) {
  const x = useMotionValue(0);

  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [viewportWidth, setViewportWidth] = useState(0);

  const childrenCount = useMemo(
    () => (Array.isArray(children) ? children.length : 1),
    [children],
  );

  const totalWidth = useMemo(() => {
    const items = Math.max(1, childrenCount);
    return items * itemWidth + Math.max(0, items - 1) * gap;
  }, [childrenCount, gap, itemWidth]);

  const dragBounds = useMemo(() => {
    const maxLeft = Math.min(0, viewportWidth - totalWidth);
    return { left: maxLeft, right: 0 };
  }, [totalWidth, viewportWidth]);

  useEffect(() => {
    const viewportEl = viewportRef.current;
    if (!viewportEl) return;

    const measure = () => {
      const rect = viewportEl.getBoundingClientRect();
      setViewportWidth(rect.width);
    };

    const ro = new ResizeObserver(() => {
      measure();
    });

    ro.observe(viewportEl);
    const raf = requestAnimationFrame(measure);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!viewportWidth) return;

    const maxLeft = dragBounds.left;
    const current = x.get();
    if (current < maxLeft) x.set(maxLeft);
    if (current > 0) x.set(0);
  }, [dragBounds.left, viewportWidth, x]);

  const progress = useTransform(() => {
    const left = dragBounds.left;
    if (left === 0) return 0;
    return Math.min(1, Math.max(0, x.get() / left));
  });

  const snapToNearest = useCallback(
    (velocityX: number) => {
      const step = itemWidth + gap;
      if (step <= 0) return;

      const left = dragBounds.left;
      const right = dragBounds.right;

      const current = x.get();
      const projected = current + velocityX * 0.18;
      const rawIndex = -projected / step;
      const snappedIndex = Math.round(rawIndex);
      const target = -snappedIndex * step;

      const clamped = Math.min(right, Math.max(left, target));
      animate(x, clamped, {
        type: "spring",
        stiffness: 420,
        damping: 40,
        mass: 0.8,
      });
    },
    [dragBounds.left, dragBounds.right, gap, itemWidth, x],
  );

  const onDragEnd = useCallback(
    (_: MouseEvent | PointerEvent | TouchEvent, info: PanInfo) => {
      snapToNearest(info.velocity.x);
    },
    [snapToNearest],
  );

  return (
    <div
      ref={viewportRef}
      className={`relative overflow-hidden ${className}`}
    >
      <motion.div
        ref={trackRef}
        className="flex will-change-transform"
        style={{ x, gap }}
        drag="x"
        dragConstraints={dragBounds}
        dragElastic={0.08}
        onDragEnd={onDragEnd}
      >
        {children}
      </motion.div>

      <div className="mt-5 h-px w-full bg-white/10" />
      <motion.div
        className="mt-[-1px] h-px w-full origin-left bg-gradient-to-r from-white/60 via-white/25 to-white/0"
        style={{ scaleX: progress }}
      />
    </div>
  );
}
