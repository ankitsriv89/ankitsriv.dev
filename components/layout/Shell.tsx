"use client";

import { usePathname } from "next/navigation";
import HQNav from "./HQNav";
import HQFooter from "./HQFooter";

// On the HUD home ("/") the page owns its full chrome (TopBar, sidebar,
// footer), so we render it full-bleed. Every other route gets the
// shared top nav + footer.
export default function Shell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  if (isHome) {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <HQNav />
      <main className="flex flex-1 flex-col">{children}</main>
      <HQFooter />
    </div>
  );
}
