"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/timeline", label: "Timeline" },
  { href: "/resume", label: "Resume" },
  { href: "/blog", label: "Blog" },
  { href: "/diary", label: "Diary" },
  { href: "/certs", label: "Certs" },
  { href: "/ask", label: "Ask" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 border-b backdrop-blur-xl"
      style={{
        background: "rgba(8, 12, 20, 0.82)",
        borderColor: "rgba(32, 48, 74, 0.8)",
      }}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <Link
          href="/"
          className="mono text-sm font-medium"
          style={{ color: "var(--text-bright)" }}
        >
          ankit<span style={{ color: "var(--cyan)" }}>sriv</span>.dev
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className="mono rounded-md px-3 py-2 text-xs transition-colors"
                style={{
                  color: active ? "var(--text-bright)" : "var(--text-dim)",
                  background: active ? "rgba(63, 215, 255, 0.1)" : "transparent",
                  border: active ? "1px solid rgba(63, 215, 255, 0.22)" : "1px solid transparent",
                }}
              >
                {label}
              </Link>
            );
          })}
        </div>

        <button
          className="button-muted md:!hidden"
          onClick={() => setOpen(!open)}
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div
          className="border-t md:hidden"
          style={{ background: "var(--bg2)", borderColor: "var(--border)" }}
        >
          <div className="container-page grid gap-1 py-3">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="mono rounded-md px-3 py-3 text-sm"
                style={{
                  color: pathname === href ? "var(--text-bright)" : "var(--text-dim)",
                  background: pathname === href ? "rgba(63, 215, 255, 0.1)" : "transparent",
                }}
                onClick={() => setOpen(false)}
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
