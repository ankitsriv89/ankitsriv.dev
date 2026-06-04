"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/",          label: "HOME" },
  { href: "/projects",  label: "PROJECTS" },
  { href: "/timeline",  label: "TIMELINE" },
  { href: "/resume",    label: "RESUME" },
  { href: "/blog",      label: "BLOG" },
  { href: "/diary",     label: "DIARY" },
  { href: "/certs",     label: "CERTS" },
  { href: "/ask",       label: "ASK_ME" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 border-b"
      style={{ background: "var(--bg2)", borderColor: "var(--border)" }}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
        {/* Logo */}
        <Link href="/" className="mono text-sm font-medium" style={{ color: "var(--cyan)" }}>
          ANKIT<span style={{ color: "var(--text-dim)" }}>@</span>SRIVASTAVA
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className="mono px-3 py-1 text-xs tracking-widest transition-colors rounded"
                style={{
                  color: active ? "var(--cyan)" : "var(--text-dim)",
                  background: active ? "rgba(0,212,255,0.07)" : "transparent",
                  borderBottom: active ? "1px solid var(--cyan)" : "1px solid transparent",
                }}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden mono text-xs"
          style={{ color: "var(--text-dim)" }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "[CLOSE]" : "[MENU]"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t px-4 py-3 flex flex-col gap-2"
          style={{ background: "var(--bg2)", borderColor: "var(--border)" }}
        >
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="mono text-xs tracking-widest py-2"
              style={{ color: pathname === href ? "var(--cyan)" : "var(--text-dim)" }}
              onClick={() => setOpen(false)}
            >
              {"> "}{label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
