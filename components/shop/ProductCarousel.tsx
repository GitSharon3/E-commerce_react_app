"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Carousel } from "@/components/ui/Carousel";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { products } from "@/lib/products";
import { formatMoneyFromCents } from "@/lib/format";
import { useCart } from "@/hooks/useCart";

const ITEM_W = 320;

export function ProductCarousel({ title }: { title: string }) {
  const cart = useCart();

  return (
    <section className="pb-10">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <div className="text-xs font-medium tracking-[0.22em] text-white/55">
            FEATURED
          </div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {title}
          </h2>
        </div>
        <Link
          href="/products"
          className="text-xs font-medium text-white/70 hover:text-white"
        >
          View all
        </Link>
      </div>

      <Carousel itemWidth={ITEM_W} gap={16} className="select-none">
        {products.map((p) => (
          <motion.div
            key={p.id}
            className="shrink-0"
            style={{ width: ITEM_W }}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 500, damping: 35 }}
          >
            <Card className="group overflow-hidden">
              <Link href={`/products/${p.slug}`} className="block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.heroImage}
                    alt={p.title}
                    fill
                    sizes="320px"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.07]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                </div>
              </Link>
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="truncate text-sm font-medium text-white">
                      {p.title}
                    </div>
                    <div className="mt-1 line-clamp-1 text-xs text-white/65">
                      {p.subtitle}
                    </div>
                  </div>
                  <div className="text-sm font-medium text-white">
                    {formatMoneyFromCents(p.priceCents)}
                  </div>
                </div>

                <div className="mt-4">
                  <Button
                    className="h-10 w-full px-4 py-2 text-xs"
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
                    Add to cart
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </Carousel>
    </section>
  );
}
