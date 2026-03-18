"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Container } from "@/components/layout/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/hooks/useCart";
import { formatMoneyFromCents } from "@/lib/format";

export function CheckoutPage() {
  const cart = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [isPlacing, setIsPlacing] = useState(false);

  const handlePlaceOrder = () => {
    setIsPlacing(true);
    // Simulate order processing
    setTimeout(() => {
      setIsPlacing(false);
      setOrderPlaced(true);
      cart.clear();
    }, 1500);
  };

  if (orderPlaced) {
    return (
      <section className="pb-16 pt-4 sm:pb-20 md:pb-24 md:pt-6">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-md text-center"
          >
            <Card className="p-8 sm:p-10">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                <svg
                  className="h-8 w-8 text-green-600 dark:text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-black dark:text-white">
                Order Placed!
              </h2>
              <p className="mt-3 text-sm text-black/70 dark:text-white/70">
                Thank you for your purchase. Your order has been successfully placed and will be processed shortly.
              </p>
              <div className="mt-6">
                <Button onClick={() => (window.location.href = "/products")}>
                  Continue Shopping
                </Button>
              </div>
            </Card>
          </motion.div>
        </Container>
      </section>
    );
  }

  return (
    <section className="pb-16 pt-4 sm:pb-20 md:pb-24 md:pt-6">
      <Container>
        <div className="mb-6 sm:mb-8">
          <div className="text-[11px] font-medium tracking-[0.22em] text-black/55 dark:text-white/55 sm:text-xs">
            CHECKOUT
          </div>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-black dark:text-white sm:mt-3 sm:text-3xl md:text-4xl">
            Checkout
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-black/65 dark:text-white/65 sm:mt-3">
            Click on Place Order to proceed please !!
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <Card className="p-4 sm:p-6 lg:col-span-2">
            <div className="text-sm font-medium text-black dark:text-white">Details</div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <input
                placeholder="Full name"
                className="h-11 rounded-xl border border-black/10 bg-white px-3 text-sm text-black outline-none placeholder:text-black/40 focus:border-black/25 dark:border-white/12 dark:bg-white/5 dark:text-white/85 dark:placeholder:text-white/40 dark:focus:border-white/25 sm:h-12 sm:rounded-2xl sm:px-4"
              />
              <input
                placeholder="Email"
                className="h-11 rounded-xl border border-black/10 bg-white px-3 text-sm text-black outline-none placeholder:text-black/40 focus:border-black/25 dark:border-white/12 dark:bg-white/5 dark:text-white/85 dark:placeholder:text-white/40 dark:focus:border-white/25 sm:h-12 sm:rounded-2xl sm:px-4"
              />
              <input
                placeholder="Address"
                className="h-11 rounded-xl border border-black/10 bg-white px-3 text-sm text-black outline-none placeholder:text-black/40 focus:border-black/25 dark:border-white/12 dark:bg-white/5 dark:text-white/85 dark:placeholder:text-white/40 dark:focus:border-white/25 sm:h-12 sm:rounded-2xl sm:px-4 sm:col-span-2"
              />
              <input
                placeholder="City"
                className="h-11 rounded-xl border border-black/10 bg-white px-3 text-sm text-black outline-none placeholder:text-black/40 focus:border-black/25 dark:border-white/12 dark:bg-white/5 dark:text-white/85 dark:placeholder:text-white/40 dark:focus:border-white/25 sm:h-12 sm:rounded-2xl sm:px-4"
              />
              <input
                placeholder="Postal code"
                className="h-11 rounded-xl border border-black/10 bg-white px-3 text-sm text-black outline-none placeholder:text-black/40 focus:border-black/25 dark:border-white/12 dark:bg-white/5 dark:text-white/85 dark:placeholder:text-white/40 dark:focus:border-white/25 sm:h-12 sm:rounded-2xl sm:px-4"
              />
            </div>

            <div className="mt-6 flex flex-col gap-2 sm:flex-row">
              <Button
                className="h-11 flex-1 sm:h-12"
                onClick={handlePlaceOrder}
                disabled={isPlacing || cart.items.length === 0}
              >
                {isPlacing ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 animate-spin"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Placing order...
                  </span>
                ) : (
                  "Place order"
                )}
              </Button>
              <Button
                variant="secondary"
                className="h-11 flex-1 sm:h-12"
                onClick={() => cart.clear()}
              >
                Clear cart
              </Button>
            </div>
          </Card>

          <Card className="p-4 sm:p-6">
            <div className="text-sm font-medium text-black dark:text-white">Order summary</div>

            {cart.items.length === 0 ? (
              <div className="mt-6 text-sm text-black/70 dark:text-white/70">No items yet.</div>
            ) : (
              <div className="mt-4 grid gap-3">
                {cart.items.map((i) => (
                  <div key={`${i.productId}::${i.variantId ?? ""}`} className="flex gap-3">
                    <div className="relative h-12 w-14 overflow-hidden rounded-xl border border-black/10 bg-black/5 dark:border-white/10 dark:bg-white/5">
                      <Image
                        src={i.imageUrl}
                        alt={i.title}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-xs font-medium text-black dark:text-white">
                        {i.title}
                      </div>
                      <div className="mt-1 text-xs text-black/60 dark:text-white/60">
                        Qty {i.quantity}
                      </div>
                    </div>
                    <div className="text-xs font-medium text-black dark:text-white">
                      {formatMoneyFromCents(i.priceCents * i.quantity)}
                    </div>
                  </div>
                ))}

                <div className="mt-3 border-t border-black/10 pt-3 dark:border-white/10">
                  <div className="flex items-center justify-between text-xs text-black/70 dark:text-white/70">
                    <span>Subtotal</span>
                    <span className="text-black dark:text-white">
                      {formatMoneyFromCents(cart.subtotalCents)}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-xs text-black/70 dark:text-white/70">
                    <span>Shipping</span>
                    <span className="text-black dark:text-white">Free</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-sm font-semibold text-black dark:text-white">
                    <span>Total</span>
                    <span>{formatMoneyFromCents(cart.subtotalCents)}</span>
                  </div>
                </div>
              </div>
            )}
          </Card>
        </div>
      </Container>
    </section>
  );
}
