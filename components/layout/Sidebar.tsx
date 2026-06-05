"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, disciplines, profile } from "@/lib/profile";

export default function Sidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* ── Desktop sidebar ── */}
      <aside
        className="hidden lg:flex flex-col shrink-0 w-64 sticky top-0 h-screen overflow-y-auto"
        style={{ background: "var(--bg2)", borderRight: "1px solid var(--border)" }}
      >
        <SidebarContent pathname={pathname} />
      </aside>

      {/* ── Mobile top bar ── */}
      <div
        className="lg:hidden sticky top-0 z-50 flex items-center justify-between px-5 h-14"
        style={{
          background: "rgba(14,17,22,0.9)",
          borderBottom: "1px solid var(--border)",
          backdropFilter: "blur(14px)",
        }}
      >
        <Link href="/" className="font-display text-base font-semibold" style={{ color: "var(--text-bright)" }}>
          {profile.short}<span style={{ color: "var(--cyan)" }}>.</span>
        </Link>
        <button
          className="text-sm px-3.5 py-2 rounded-lg border"
          style={{ borderColor: "var(--border)", color: "var(--text-dim)" }}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* ── Mobile drawer ── */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40 flex" onClick={() => setMobileOpen(false)}>
          <div
            className="w-72 max-w-[85vw] h-full flex flex-col overflow-y-auto"
            style={{ background: "var(--bg2)", borderRight: "1px solid var(--border)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <SidebarContent pathname={pathname} onNav={() => setMobileOpen(false)} />
          </div>
          <div className="flex-1" style={{ background: "rgba(0,0,0,0.55)" }} />
        </div>
      )}
    </>
  );
}

function SidebarContent({ pathname, onNav }: { pathname: string; onNav?: () => void }) {
  return (
    <>
      {/* Identity */}
      <div className="px-6 pt-8 pb-6">
        <Link href="/" onClick={onNav} className="block">
          <div className="font-display text-2xl font-bold leading-tight" style={{ color: "var(--text-bright)" }}>
            {profile.name}
          </div>
        </Link>
        <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--text-dim)" }}>
          Engineer & interdisciplinary thinker.
        </p>
        <div className="mt-3 flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full animate-pulse-cyan" style={{ background: "var(--green)" }} />
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>Open to good problems</span>
        </div>
      </div>

      <div className="mx-6 h-px" style={{ background: "var(--border)" }} />

      {/* Navigation */}
      <nav className="px-4 py-5 flex flex-col gap-0.5">
        {navLinks.map(({ href, label, sub }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              onClick={onNav}
              className="flex items-center justify-between rounded-lg px-3 py-2.5 transition-all"
              style={{
                background: active ? "rgba(86,199,230,0.08)" : "transparent",
                border: active ? "1px solid rgba(86,199,230,0.2)" : "1px solid transparent",
              }}
            >
              <div>
                <div
                  className="text-sm font-medium leading-tight flex items-center gap-1.5"
                  style={{ color: active ? "var(--text-bright)" : "var(--text-dim)" }}
                >
                  {active && (
                    <span className="mono" style={{ color: "var(--green-bright)" }}>$</span>
                  )}
                  {label}
                </div>
                <div className="text-[0.7rem] leading-tight mt-0.5" style={{ color: "var(--text-muted)" }}>
                  {sub}
                </div>
              </div>
              {active && <span style={{ color: "var(--cyan-bright)" }}>→</span>}
            </Link>
          );
        })}
      </nav>

      <div className="mx-6 h-px" style={{ background: "var(--border)" }} />

      {/* Disciplines mini-legend */}
      <div className="px-6 py-5">
        <div className="eyebrow mb-3">Working across</div>
        <div className="flex flex-col gap-2">
          {disciplines.map((d) => (
            <div key={d.key} className={`flex items-center gap-2.5 ${d.accentClass}`}>
              <span className="disc-dot" />
              <span className="text-xs" style={{ color: "var(--text-dim)" }}>{d.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer / contact */}
      <div className="mt-auto px-6 py-6" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="flex flex-col gap-2">
          {[
            { label: "GitHub", href: profile.github },
            { label: "LinkedIn", href: profile.linkedin },
            { label: "Email", href: `mailto:${profile.email}` },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="text-xs link-soft"
            >
              {label}
            </a>
          ))}
        </div>
        <div className="mt-4 text-[0.7rem]" style={{ color: "var(--text-muted)" }}>
          © {new Date().getFullYear()} {profile.name}
        </div>
      </div>
    </>
  );
}
