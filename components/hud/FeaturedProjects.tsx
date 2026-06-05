import Link from "next/link";
import { featuredProjects, type FeaturedProject } from "@/lib/home";

const statusMeta: Record<FeaturedProject["status"], { label: string; color: string }> = {
  live: { label: "live", color: "var(--emerald)" },
  building: { label: "building", color: "var(--amber)" },
  research: { label: "research", color: "var(--text-muted)" },
};

function Card({ p, i }: { p: FeaturedProject; i: number }) {
  const s = statusMeta[p.status];
  return (
    <article className={`hud-panel ${domainAccent(p.domainKey)} flex h-full flex-col`}>
      <div className="hud-head">
        <span style={{ color: "var(--text-muted)" }}>
          {String(i + 1).padStart(2, "0")}
        </span>
        <span className="flex items-center gap-2">
          <span
            className="dot"
            style={{ background: s.color, boxShadow: `0 0 8px ${s.color}` }}
            aria-hidden
          />
          <span style={{ color: s.color }}>{s.label}</span>
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-center gap-2">
          <span className="disc-dot" aria-hidden />
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>
            {p.domainLabel}
          </span>
          {p.count && (
            <span
              className="ml-auto text-[0.68rem]"
              style={{ fontFamily: "var(--font-jetbrains), monospace", color: "var(--cyan)" }}
            >
              {p.count}
            </span>
          )}
        </div>

        <h3 className="text-lg font-semibold" style={{ color: "var(--text-bright)" }}>
          {p.name}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "var(--text-dim)" }}>
          {p.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
          {p.tags.map((t) => (
            <span key={t} className="tech-chip">
              {t}
            </span>
          ))}
        </div>

        <span
          className="mt-2 inline-flex items-center gap-1.5 text-sm"
          style={{ color: "var(--cyan)" }}
        >
          {p.linkType === "external" ? "visit project" : "view project"}
          <span aria-hidden>{p.linkType === "external" ? "↗" : "→"}</span>
        </span>
      </div>
    </article>
  );
}

// Each card links to its own destination: external → the project's own
// domain/subdomain (new tab); internal → an internal detail page.
export default function FeaturedProjects() {
  return (
    <div className="hud-panel">
      <div className="hud-head">
        <span className="hud-head__title">featured_projects</span>
        <Link href="/projects" className="link-more">
          view all →
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-3 p-3 md:grid-cols-3">
        {featuredProjects.map((p, i) =>
          p.linkType === "external" ? (
            <a
              key={p.slug}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <Card p={p} i={i} />
            </a>
          ) : (
            <Link key={p.slug} href={p.href} className="block h-full">
              <Card p={p} i={i} />
            </Link>
          ),
        )}
      </div>
    </div>
  );
}

function domainAccent(key: FeaturedProject["domainKey"]): string {
  const map: Record<FeaturedProject["domainKey"], string> = {
    engineering: "disc-tech",
    ai: "disc-ai",
    economics: "disc-econ",
    finance: "disc-finance",
    psychology: "disc-psych",
    law: "disc-law",
  };
  return map[key];
}
