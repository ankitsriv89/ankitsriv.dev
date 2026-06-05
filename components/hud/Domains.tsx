import Link from "next/link";
import { domains, stateMeta } from "@/lib/home";

// Generalist domain panel — replaces the reference's skill BARS with
// a counts + status readout (no percentages). Each row deep-links to
// the blog filtered by domain.
export default function Domains() {
  return (
    <div className="hud-panel">
      <div className="hud-head">
        <span className="hud-head__title">domains</span>
        <span style={{ color: "var(--text-muted)" }}>6 fields</span>
      </div>
      <div className="hud-body">
        <ul className="space-y-1">
          {domains.map((d) => {
            const st = stateMeta[d.state];
            return (
              <li key={d.key}>
                <Link
                  href={`/blog?domain=${d.key}`}
                  className={`${d.accentClass} flex items-center gap-3 rounded-md px-2 py-2 transition-colors hover:bg-[rgba(76,201,240,0.04)]`}
                >
                  <span className="disc-dot" aria-hidden />
                  <span className="w-28 text-sm font-medium" style={{ color: "var(--text)" }}>
                    {d.label}
                  </span>
                  <span
                    className="text-xs tabular"
                    style={{ fontFamily: "var(--font-jetbrains), monospace", color: "var(--text-muted)" }}
                  >
                    {String(d.projects).padStart(2, "0")} proj · {String(d.notes).padStart(2, "0")} notes
                  </span>
                  <span
                    className="ml-auto text-[0.68rem] uppercase tracking-wider"
                    style={{ fontFamily: "var(--font-jetbrains), monospace", color: st.color }}
                  >
                    {st.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
