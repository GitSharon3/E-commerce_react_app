"use client";

import Image from "next/image";
import Link from "next/link";

import { Drawer } from "@/components/ui/Drawer";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/hooks/useCart";
import { formatMoneyFromCents } from "@/lib/format";

export function CartDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const cart = useCart();

  return (
    <Drawer open={open} onClose={onClose} title="Your cart">
      {cart.items.length === 0 ? (
        <div className="mt-8 text-sm text-black/70 dark:text-white/70">Your cart is empty.</div>
      ) : (
        <div className="grid gap-3">
          {cart.items.map((i) => (
            <div
              key={`${i.productId}::${i.variantId ?? ""}`}
              className="flex gap-3 rounded-2xl border border-black/10 bg-white/70 p-3 dark:border-white/10 dark:bg-white/5"
            >
              <div className="relative h-16 w-20 overflow-hidden rounded-xl border border-black/10 bg-black/5 dark:border-white/10 dark:bg-black/20">
                <Image
                  src={i.imageUrl}
                  alt={i.title}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-medium text-black dark:text-white">
                  {i.title}
                </div>
                <div className="mt-1 text-xs text-black/70 dark:text-white/70">
                  {formatMoneyFromCents(i.priceCents)}
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <button
                    className="h-8 w-8 rounded-full border border-black/10 bg-black/5 text-sm text-black/85 hover:bg-black/10 dark:border-white/12 dark:bg-white/5 dark:text-white/85 dark:hover:bg-white/10"
                    onClick={() =>
                      cart.updateQuantity({
                        productId: i.productId,
                        variantId: i.variantId,
                        quantity: Math.max(1, i.quantity - 1),
                      })
                    }
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <div className="w-8 text-center text-xs text-black/85 dark:text-white/85">
                    {i.quantity}
                  </div>
                  <button
                    className="h-8 w-8 rounded-full border border-black/10 bg-black/5 text-sm text-black/85 hover:bg-black/10 dark:border-white/12 dark:bg-white/5 dark:text-white/85 dark:hover:bg-white/10"
                    onClick={() =>
                      cart.updateQuantity({
                        productId: i.productId,
                        variantId: i.variantId,
                        quantity: i.quantity + 1,
                      })
                    }
                    aria-label="Increase quantity"
                  >
                    +
                  </button>

                  <button
                    className="ml-auto rounded-full border border-black/10 bg-black/5 px-3 py-2 text-[11px] text-black/80 hover:bg-black/10 dark:border-white/12 dark:bg-white/5 dark:text-white/80 dark:hover:bg-white/10"
                    onClick={() =>
                      cart.remove({ productId: i.productId, variantId: i.variantId })
                    }
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-6 border-t border-black/10 pt-4 dark:border-white/10">
        <div className="flex items-center justify-between text-sm text-black/80 dark:text-white/80">
          <span>Subtotal</span>
          <span className="font-medium text-black dark:text-white">
            {formatMoneyFromCents(cart.subtotalCents)}
          </span>
        </div>
        <div className="mt-4 flex gap-2">
          <Button
            variant="secondary"
            className="flex-1"
            onClick={() => {
              onClose();
            }}
          >
            Continue
          </Button>
          <Link className="flex-1" href="/checkout" onClick={onClose}>
            <Button className="w-full">Checkout</Button>
          </Link>
        </div>
      </div>
    </Drawer>
  );
}
