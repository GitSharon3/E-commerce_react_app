"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

import type { Product } from "@/lib/types";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { formatMoneyFromCents } from "@/lib/format";
import { useCart } from "@/hooks/useCart";

export function ProductDetail({ product }: { product: Product }) {
  const [active, setActive] = useState(0);
  const [color, setColor] = useState(product.colors[0]?.name ?? "");
  const cart = useCart();
  const flyRef = useRef<HTMLDivElement | null>(null);

  const images = useMemo(() => product.images, [product.images]);

  return (
    <section className="pb-16 pt-4 sm:pb-20 md:pb-24 md:pt-6">
      <Container>
        <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
          <div>
            <Card className="p-3 sm:p-4">
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-black/10 bg-black/5 dark:border-white/10 dark:bg-black/30">
                <motion.div
                  key={images[active]}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={images[active]}
                    alt={product.title}
                    fill
                    priority
                    sizes="(max-width: 768px) 92vw, 560px"
                    className="object-cover"
                  />
                </motion.div>
              </div>

              <div className="mt-3 grid grid-cols-4 gap-1.5 sm:mt-4 sm:gap-2">
                {images.slice(0, 4).map((src, idx) => (
                  <button
                    key={src}
                    className={`relative aspect-square overflow-hidden rounded-xl border bg-white/70 dark:bg-white/5 sm:rounded-2xl ${
                      idx === active ? "border-black/30 dark:border-white/30" : "border-black/10 dark:border-white/10"
                    }`}
                    onClick={() => setActive(idx)}
                    aria-label={`View image ${idx + 1}`}
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      sizes="80px"
                      className="object-cover sm:sizes-120px"
                    />
                  </button>
                ))}
              </div>

              <div className="mt-3 rounded-xl border border-black/10 bg-white/70 p-3 text-[11px] text-black/70 dark:border-white/10 dark:bg-white/5 dark:text-white/70 sm:mt-4 sm:rounded-2xl sm:p-4 sm:text-xs">
                Simulated 360° preview (frame-based) — swap thumbnails to mimic
                rotation.
              </div>
            </Card>
          </div>

          <div className="lg:pl-4">
            <div className="text-[11px] font-medium tracking-[0.22em] text-black/55 dark:text-white/55 sm:text-xs">
              PRODUCT
            </div>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight text-black dark:text-white sm:mt-3 sm:text-3xl md:text-4xl">
              {product.title}
            </h1>
            <div className="mt-1 text-sm text-black/70 dark:text-white/70 sm:mt-2">{product.subtitle}</div>

            <div className="mt-4 text-xl font-semibold tracking-tight text-black dark:text-white sm:mt-5 sm:text-2xl">
              {formatMoneyFromCents(product.priceCents)}
            </div>

            <p className="mt-3 text-sm leading-7 text-black/65 dark:text-white/65 sm:mt-4">
              {product.description}
            </p>

            <div className="mt-5 sm:mt-6">
              <div className="text-[11px] font-medium text-black/70 dark:text-white/70 sm:text-xs">Color</div>
              <div className="mt-2 flex flex-wrap gap-2 sm:mt-3">
                {product.colors.map((c) => {
                  const activeColor = c.name === color;
                  return (
                    <button
                      key={c.name}
                      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] backdrop-blur-xl transition-colors sm:px-4 sm:py-2 sm:text-xs ${
                        activeColor
                          ? "border-black/25 bg-black/10 text-black dark:border-white/25 dark:bg-white/12 dark:text-white"
                          : "border-black/10 bg-white/70 text-black/75 hover:bg-black/5 hover:text-black dark:border-white/10 dark:bg-white/5 dark:text-white/75 dark:hover:bg-white/10 dark:hover:text-white"
                      }`}
                      onClick={() => setColor(c.name)}
                    >
                      <span
                        className="h-2.5 w-2.5 rounded-full border border-black/20 dark:border-white/20 sm:h-3 sm:w-3"
                        style={{ backgroundColor: c.hex }}
                      />
                      {c.name}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-2 sm:mt-7 sm:flex-row">
              <Button
                className="h-11 flex-1 sm:h-12"
                onClick={() => {
                  cart.add({
                    item: {
                      productId: product.id,
                      variantId: color,
                      title: `${product.title} — ${color}`,
                      priceCents: product.priceCents,
                      imageUrl: product.heroImage,
                    },
                    quantity: 1,
                  });

                  const node = flyRef.current;
                  if (node) {
                    node.animate(
                      [
                        { transform: "translateY(0px)", opacity: 1 },
                        { transform: "translateY(-10px)", opacity: 0 },
                      ],
                      { duration: 450, easing: "cubic-bezier(0.22,1,0.36,1)" },
                    );
                  }
                }}
              >
                Add to cart
              </Button>
              <Button variant="secondary" className="h-11 flex-1 sm:h-12" onClick={() => cart.clear()}>
                Clear cart
              </Button>
            </div>

            <div
              ref={flyRef}
              className="mt-4 rounded-xl border border-black/10 bg-white/70 p-3 text-[11px] text-black/70 dark:border-white/10 dark:bg-white/5 dark:text-white/70 sm:mt-5 sm:rounded-2xl sm:p-4 sm:text-xs"
            >
              Click on Add to Cart if you want to look cool with this shade.... :)
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
