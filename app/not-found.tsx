import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="py-20">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-white backdrop-blur-2xl">
        <div className="text-xs font-medium tracking-[0.22em] text-white/55">
          404
        </div>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">Not found</h1>
        <p className="mt-3 text-sm text-white/70">
          The page you’re looking for doesn’t exist.
        </p>
        <div className="mt-6">
          <Link href="/">
            <Button>Go home</Button>
          </Link>
        </div>
      </div>
    </Container>
  );
}
