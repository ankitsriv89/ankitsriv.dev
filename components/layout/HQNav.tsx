"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/lib/home";

// Persistent top instrument bar — the command-center frame shared by
// every page. Slim, monospace labels, an active-route indicator.
export default function HQNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav
      className="sticky top-0 z-50 border-b backdrop-blur-xl"
      style={{ background: "rgba(7, 11, 20, 0.82)", borderColor: "var(--line)" }}
    >
      <div className="container-page flex h-14 items-center justify-between">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="dot dot--live" aria-hidden />
          <span
            className="text-sm font-semibold tracking-tight"
            style={{ color: "var(--text-bright)" }}
          >
            ankit<span style={{ color: "var(--cyan)" }}>sriv</span>
            <span style={{ color: "var(--text-muted)" }}>.dev</span>
          </span>
        </Link>

        <div className="hidden items-center gap-0.5 md:flex">
          {navItems.map(({ href, label }) => {
            const active = isActive(href);
            return (
              <Link
                key={href}
                href={href}
                className="rounded-md px-3 py-1.5 text-[0.8rem] font-medium transition-colors"
                style={{
                  fontFamily: "var(--font-jetbrains), monospace",
                  letterSpacing: "0.02em",
                  color: active ? "var(--text-bright)" : "var(--text-dim)",
                  background: active ? "rgba(76, 201, 240, 0.1)" : "transparent",
                  border: active
                    ? "1px solid rgba(76, 201, 240, 0.28)"
                    : "1px solid transparent",
                }}
              >
                {label}
              </Link>
            );
          })}
        </div>

        <button
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="btn btn--ghost md:hidden"
        >
          {open ? "close" : "menu"}
        </button>
      </div>

      {open && (
        <div
          className="border-t md:hidden"
          style={{ borderColor: "var(--line)", background: "rgba(10, 15, 28, 0.96)" }}
        >
          <div className="container-page grid grid-cols-2 gap-1 py-3">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm"
                style={{
                  fontFamily: "var(--font-jetbrains), monospace",
                  color: isActive(href) ? "var(--cyan)" : "var(--text-dim)",
                  background: isActive(href) ? "rgba(76, 201, 240, 0.08)" : "transparent",
                }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
