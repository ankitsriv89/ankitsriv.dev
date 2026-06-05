import Link from "next/link";
import { projects } from "@/components/sections/Projects";

const statusColor = {
  live: "var(--green-bright)",
  building: "var(--amber)",
  research: "var(--text-muted)",
} as const;

export default function FeaturedProjects() {
  return (
    <div className="panel-hud p-4">
      <div className="panel-head">featured_projects</div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {projects.slice(0, 3).map((p) => (
          <article key={p.name} className={`${p.accentClass} flex flex-col gap-2.5 rounded p-3`}
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)" }}
          >
            <div className="flex items-center justify-between gap-2">
              <span className="flex items-center gap-1.5">
                <span className="disc-dot" />
                <span className="mono text-[0.58rem]" style={{ color: "var(--text-muted)" }}>{p.field}</span>
              </span>
              <span className="mono text-[0.58rem]" style={{ color: statusColor[p.status] }}>
                {p.status}
              </span>
            </div>

            <div className="font-display text-sm font-semibold" style={{ color: "var(--text-bright)" }}>
              {p.name}
            </div>
            <p className="text-[0.72rem] leading-snug" style={{ color: "var(--text-dim)" }}>
              {p.description}
            </p>

            <div className="flex flex-wrap gap-1">
              {p.tags.slice(0, 3).map((t) => (
                <span key={t} className="mono text-[0.55rem] rounded px-1.5 py-0.5"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", color: "var(--text-muted)" }}
                >
                  {t}
                </span>
              ))}
            </div>

            <Link href="/projects" className="mono text-[0.62rem] mt-auto" style={{ color: "var(--cyan-bright)" }}>
              view project →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
