"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { useCart } from "@/hooks/useCart";
import { formatMoneyFromCents } from "@/lib/format";
import { products } from "@/lib/products";

const featuredProducts = [
  { ...products[0], badge: "Best Seller" },
  { ...products[4], badge: "Premium" },
  { ...products[1], badge: "New" },
  { ...products[6], badge: "Limited" },
];

export function FeaturedProducts() {
  const cart = useCart();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 sm:py-20 md:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 sm:mb-10"
        >
          <div className="text-[11px] font-medium tracking-[0.22em] text-black/55 dark:text-white/55 sm:text-xs">
            FEATURED
          </div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-black dark:text-white sm:mt-3 sm:text-3xl md:text-4xl">
            Best Sellers
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-black/65 dark:text-white/65 sm:mt-3">
            Our most loved frames, handpicked for style and comfort.
          </p>
        </motion.div>

        <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Card className="group overflow-hidden">
                <Link href={`/products/${product.slug}`} className="block">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={product.heroImage}
                      alt={product.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Badge */}
                    <div className="absolute left-3 top-3">
                      <span
                        className={`inline-block rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider sm:px-3 sm:text-xs ${
                          product.badge === "Best Seller"
                            ? "bg-amber-500 text-white"
                            : product.badge === "New"
                              ? "bg-emerald-500 text-white"
                              : product.badge === "Limited"
                                ? "bg-rose-500 text-white"
                                : "bg-violet-500 text-white"
                        }`}
                      >
                        {product.badge}
                      </span>
                    </div>
                    {/* Quick Add Overlay */}
                    <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/60 via-transparent to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:p-4">
                      <Button
                        variant="secondary"
                        className="w-full bg-white/95 text-black hover:bg-white"
                        onClick={(e) => {
                          e.preventDefault();
                          cart.add({
                            item: {
                              productId: product.id,
                              title: product.title,
                              priceCents: product.priceCents,
                              imageUrl: product.heroImage,
                            },
                            quantity: 1,
                          });
                        }}
                      >
                        Quick Add
                      </Button>
                    </div>
                  </div>
                  <div className="p-3 sm:p-4">
                    <div className="truncate text-sm font-medium text-black dark:text-white">
                      {product.title}
                    </div>
                    <div className="mt-1 line-clamp-1 text-xs text-black/65 dark:text-white/65">
                      {product.subtitle}
                    </div>
                    <div className="mt-2 text-sm font-medium text-black dark:text-white">
                      {formatMoneyFromCents(product.priceCents)}
                    </div>
                  </div>
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex justify-center sm:mt-10"
        >
          <Link href="/products">
            <Button variant="secondary" className="h-11 px-6 text-sm sm:h-12 sm:px-8">
              View All Products
            </Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
