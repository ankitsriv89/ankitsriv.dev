"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, aboutTxt } from "@/lib/home";

// The persistent numbered nav rail (01–08) + an about.txt panel,
// modeled on the reference HUD. Sticky on desktop.
export default function Sidebar() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="flex h-full flex-col gap-4">
      <div className="hud-panel">
        <div className="hud-head">
          <span className="hud-head__title">navigate</span>
        </div>
        <div className="flex flex-col gap-1 p-2">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link key={item.href} href={item.href} className="nav-tile" data-active={active}>
                <span
                  aria-hidden
                  className="grid h-8 w-8 shrink-0 place-items-center rounded-md text-sm"
                  style={{
                    color: active ? "var(--cyan)" : "var(--text-dim)",
                    background: active ? "rgba(76,201,240,0.1)" : "rgba(255,255,255,0.02)",
                    border: "1px solid var(--line)",
                  }}
                >
                  {item.icon}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-2">
                    <span className="nav-tile__n">{item.n}</span>
                    <span
                      className="text-sm font-medium"
                      style={{ color: active ? "var(--text-bright)" : "var(--text)" }}
                    >
                      {item.label}
                    </span>
                  </span>
                  <span className="block text-[0.68rem]" style={{ color: "var(--text-muted)" }}>
                    {item.sub}
                  </span>
                </span>
                {active && <span className="dot dot--live" aria-hidden />}
              </Link>
            );
          })}
        </div>
      </div>

      {/* about.txt panel */}
      <div className="hud-panel">
        <div className="hud-head">
          <span style={{ color: "var(--emerald)" }}>$</span>
          <span className="flex-1" style={{ color: "var(--text-dim)" }}>
            cat about.txt
          </span>
        </div>
        <div className="hud-body">
          <ul className="space-y-1.5">
            {aboutTxt.map((line) => (
              <li
                key={line}
                className="text-sm"
                style={{ fontFamily: "var(--font-jetbrains), monospace", color: "var(--text-dim)" }}
              >
                {line}
              </li>
            ))}
          </ul>
          <span className="caret mt-2 inline-block" aria-hidden />
        </div>
      </div>
    </nav>
  );
}
