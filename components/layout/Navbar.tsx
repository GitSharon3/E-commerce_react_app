"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { CartDrawer } from "@/components/shop/CartDrawer";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/hooks/useCart";

const nav = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Shop" },
  { href: "/checkout", label: "Checkout" },
];

export function Navbar() {
  const pathname = usePathname();
  const { count } = useCart();
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const activeHref = useMemo(() => {
    if (pathname?.startsWith("/products")) return "/products";
    return pathname ?? "/";
  }, [pathname]);

  return (
    <>
      <div className="pointer-events-none fixed left-0 top-0 z-40 h-24 w-full bg-gradient-to-b from-white/85 via-white/30 to-transparent dark:from-black/70 dark:via-black/20" />

      <header className="fixed left-0 top-0 z-50 w-full">
        <Container className="pt-4">
          <div className="flex items-center justify-between rounded-full border border-black/10 bg-white/75 px-4 py-3 backdrop-blur-2xl shadow-[0_18px_70px_rgba(0,0,0,0.12)] dark:border-white/10 dark:bg-black/30 dark:shadow-[0_18px_70px_rgba(0,0,0,0.35)]">
            <Link
              href="/"
              className="pointer-events-auto flex items-center gap-2"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-black/5 text-xs font-semibold tracking-tight text-black dark:border-white/10 dark:bg-white/10 dark:text-white">
                A
              </span>
              <span className="text-sm font-semibold tracking-tight text-black dark:text-white">
                AURORA
              </span>
            </Link>

            <nav className="hidden items-center gap-1 md:flex">
              {nav.map((item) => {
                const active = activeHref === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`pointer-events-auto rounded-full px-4 py-2 text-xs font-medium tracking-tight transition-colors ${
                      active
                        ? "bg-black/5 text-black dark:bg-white/12 dark:text-white"
                        : "text-black/70 hover:bg-black/5 hover:text-black dark:text-white/75 dark:hover:bg-white/10 dark:hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <div className="hidden md:block">
                <ThemeToggle />
              </div>

              <Button
                type="button"
                variant="primary"
                className="pointer-events-auto h-10 px-4 py-2 text-xs"
                onClick={() => setCartOpen(true)}
              >
                Cart
                <motion.span
                  key={count}
                  initial={{ scale: 0.85, opacity: 0.6 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="ml-1 inline-flex min-w-6 items-center justify-center rounded-full bg-white/15 px-2 py-0.5 text-[11px]"
                >
                  {count}
                </motion.span>
              </Button>

              <button
                className="pointer-events-auto inline-flex h-10 items-center justify-center rounded-full border border-black/10 bg-black/5 px-4 text-xs font-medium text-black/85 hover:bg-black/7 dark:border-white/12 dark:bg-white/6 dark:text-white/85 dark:hover:bg-white/10 md:hidden"
                onClick={() => setMenuOpen((v) => !v)}
                aria-label="Open menu"
              >
                Menu
              </button>
            </div>
          </div>

          {menuOpen ? (
            <div className="mt-3 rounded-3xl border border-black/10 bg-white/80 p-3 text-black backdrop-blur-2xl dark:border-white/10 dark:bg-black/40 dark:text-white md:hidden">
              <div className="flex items-center justify-between">
                <ThemeToggle />
                <Button
                  variant="ghost"
                  className="h-10 px-4 py-2 text-xs"
                  onClick={() => setCartOpen(true)}
                >
                  Open cart
                </Button>
              </div>
              <div className="mt-2 grid gap-1">
                {nav.map((item) => {
                  const active = activeHref === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`rounded-2xl px-4 py-3 text-sm ${
                        active
                          ? "bg-black/5 text-black dark:bg-white/10 dark:text-white"
                          : "text-black/70 hover:bg-black/5 hover:text-black dark:text-white/75 dark:hover:bg-white/10 dark:hover:text-white"
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          ) : null}
        </Container>
      </header>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
