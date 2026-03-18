import type { ReactNode } from "react";

import { Navbar } from "@/components/layout/Navbar";
import { CustomCursor } from "@/components/effects/CustomCursor";
import { ScrollProgress } from "@/components/effects/ScrollProgress";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh bg-[#f7f7fb] text-[#0b0f14] dark:bg-[#05060A] dark:text-white">
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-48 -top-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(160,110,255,0.18),rgba(160,110,255,0))] blur-2xl dark:bg-[radial-gradient(circle_at_center,rgba(160,110,255,0.30),rgba(160,110,255,0))]" />
        <div className="absolute -right-40 top-40 h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,220,255,0.14),rgba(0,220,255,0))] blur-2xl dark:bg-[radial-gradient(circle_at_center,rgba(0,220,255,0.22),rgba(0,220,255,0))]" />
        <div className="absolute bottom-[-260px] left-1/2 h-[720px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.08),rgba(0,0,0,0))] blur-2xl dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.14),rgba(255,255,255,0))]" />
      </div>
      <main className="pt-28">{children}</main>
    </div>
  );
}
