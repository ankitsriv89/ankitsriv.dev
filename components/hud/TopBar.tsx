import Clock from "./Clock";
import { identity } from "@/lib/home";

// Top instrument bar: shell prompt (left), live clock (center),
// availability + signal bars (right).
export default function TopBar() {
  return (
    <header
      className="sticky top-0 z-40 border-b backdrop-blur-xl"
      style={{ background: "rgba(7, 11, 20, 0.85)", borderColor: "var(--line)" }}
    >
      <div className="flex h-12 items-center justify-between px-4 sm:px-6">
        <span
          className="text-sm"
          style={{ fontFamily: "var(--font-jetbrains), monospace", color: "var(--text-dim)" }}
        >
          <span style={{ color: "var(--emerald)" }}>{identity.user}</span>
          <span style={{ color: "var(--text-muted)" }}>@</span>
          <span style={{ color: "var(--cyan)" }}>{identity.host}</span>
          <span style={{ color: "var(--text-muted)" }}>:{identity.path}$</span>
        </span>

        <span className="hidden text-sm sm:block" style={{ color: "var(--text-dim)" }}>
          <Clock />
        </span>

        <span className="flex items-center gap-3">
          <span className="flex items-center gap-2">
            <span className="dot dot--live pulse-soft" aria-hidden />
            <span
              className="text-xs"
              style={{ fontFamily: "var(--font-jetbrains), monospace", color: "var(--emerald)" }}
            >
              {identity.status}
            </span>
          </span>
          <span className="signal" aria-hidden>
            <span style={{ height: "4px" }} />
            <span style={{ height: "6px" }} />
            <span style={{ height: "9px" }} />
            <span style={{ height: "12px" }} />
          </span>
        </span>
      </div>
    </header>
  );
}
