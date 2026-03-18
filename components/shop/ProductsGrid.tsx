"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import { categories, products } from "@/lib/products";
import type { ProductCategory } from "@/lib/types";
import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { formatMoneyFromCents } from "@/lib/format";
import { useCart } from "@/hooks/useCart";

export function ProductsGrid() {
  const [filter, setFilter] = useState<ProductCategory | "all">("all");
  const [quickSlug, setQuickSlug] = useState<string | null>(null);
  const cart = useCart();

  const filtered = useMemo(() => {
    if (filter === "all") return products;
    return products.filter((p) => p.categories.includes(filter));
  }, [filter]);

  const quick = useMemo(
    () => products.find((p) => p.slug === quickSlug) ?? null,
    [quickSlug],
  );

  return (
    <section className="pb-24">
      <Container>
        <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-xs font-medium tracking-[0.22em] text-black/55 dark:text-white/55">
              SHOP
            </div>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight text-black dark:text-white sm:mt-3 sm:text-3xl md:text-4xl">
              The collection
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-black/65 dark:text-white/65 sm:mt-3">
              Browse premium frames with soft geometry and cinematic materials.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c.value}
                className={`rounded-full border px-3 py-1.5 text-[11px] font-medium backdrop-blur-xl transition-colors sm:px-4 sm:py-2 sm:text-xs ${
                  filter === c.value
                    ? "border-black/18 bg-black/10 text-black dark:border-white/18 dark:bg-white/12 dark:text-white"
                    : "border-black/10 bg-white/70 text-black/75 hover:bg-black/5 hover:text-black dark:border-white/10 dark:bg-white/5 dark:text-white/75 dark:hover:bg-white/10 dark:hover:text-white"
                }`}
                onClick={() => setFilter(c.value)}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p) => (
            <motion.div
              key={p.id}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 500, damping: 34 }}
            >
              <Card className="group overflow-hidden">
                <Link href={`/products/${p.slug}`} className="block">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={p.heroImage}
                      alt={p.title}
                      fill
                      sizes="(max-width: 1024px) 90vw, 360px"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  </div>
                </Link>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div className="truncate text-sm font-medium text-black dark:text-white">
                        {p.title}
                      </div>
                      <div className="mt-1 line-clamp-1 text-xs text-black/65 dark:text-white/65">
                        {p.subtitle}
                      </div>
                    </div>
                    <div className="text-sm font-medium text-black dark:text-white">
                      {formatMoneyFromCents(p.priceCents)}
                    </div>
                  </div>

                  <div className="mt-3 flex items-center gap-2 sm:mt-4">
                    <Button
                      variant="secondary"
                      className="h-9 flex-1 px-3 py-2 text-[11px] sm:h-10 sm:px-4 sm:py-2 sm:text-xs"
                      onClick={() => setQuickSlug(p.slug)}
                    >
                      Quick view
                    </Button>
                    <Button
                      className="h-9 flex-1 px-3 py-2 text-[11px] sm:h-10 sm:px-4 sm:py-2 sm:text-xs"
                      onClick={() =>
                        cart.add({
                          item: {
                            productId: p.id,
                            title: p.title,
                            priceCents: p.priceCents,
                            imageUrl: p.heroImage,
                          },
                          quantity: 1,
                        })
                      }
                    >
                      Add
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>

      <Modal open={!!quick} onClose={() => setQuickSlug(null)} title={quick?.title}>
        {quick ? (
          <div className="grid gap-4 md:gap-5 md:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-black/10 bg-black/5 dark:border-white/10 dark:bg-white/5">
              <Image
                src={quick.heroImage}
                alt={quick.title}
                fill
                sizes="(max-width: 768px) 92vw, 520px"
                className="object-cover"
              />
            </div>
            <div>
              <div className="text-sm text-black/70 dark:text-white/70">{quick.subtitle}</div>
              <div className="mt-2 text-xl font-semibold tracking-tight text-black dark:text-white sm:mt-3 sm:text-2xl">
                {formatMoneyFromCents(quick.priceCents)}
              </div>
              <p className="mt-2 text-sm leading-7 text-black/65 dark:text-white/65 sm:mt-3">
                {quick.description}
              </p>
              <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:mt-5">
                <Link href={`/products/${quick.slug}`} className="flex-1">
                  <Button variant="secondary" className="w-full">
                    View details
                  </Button>
                </Link>
                <Button
                  className="flex-1"
                  onClick={() =>
                    cart.add({
                      item: {
                        productId: quick.id,
                        title: quick.title,
                        priceCents: quick.priceCents,
                        imageUrl: quick.heroImage,
                      },
                      quantity: 1,
                    })
                  }
                >
                  Add to cart
                </Button>
              </div>
            </div>
          </div>
        ) : null}
      </Modal>
    </section>
  );
}
