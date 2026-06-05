import { sysQuote } from "@/lib/home";

// sys_quote — the working principle.
export default function SysQuote() {
  return (
    <div className="hud-panel flex flex-col">
      <div className="hud-head">
        <span className="hud-head__title">sys_quote</span>
      </div>
      <div className="hud-body flex flex-1 flex-col justify-center">
        <p
          className="text-sm leading-relaxed"
          style={{ color: "var(--text)", fontStyle: "italic" }}
        >
          “{sysQuote.text}”
        </p>
        <p
          className="mt-3 text-xs"
          style={{ fontFamily: "var(--font-jetbrains), monospace", color: "var(--text-muted)" }}
        >
          — {sysQuote.author}
        </p>
      </div>
    </div>
  );
}
