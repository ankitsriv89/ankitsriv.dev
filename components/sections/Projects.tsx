type Project = {
  name: string;
  description: string;
  tags: string[];
  repo?: string;
  live?: string;
  status: "live" | "building" | "planned";
};

const projects: Project[] = [
  {
    name: "System Design Portfolio",
    description:
      "50-project series implementing distributed systems from scratch — rate limiters, caches, search engines, message queues, and more.",
    tags: ["Go", "Distributed Systems", "Docker", "Redis", "PostgreSQL"],
    repo: "https://github.com/ankitsriv89/system-design",
    live: "https://anksysdesign.pages.dev",
    status: "building",
  },
  {
    name: "datastream-lab",
    description:
      "Streaming platform experiments — 6 local POCs and 3 cloud POCs across AWS, GCP, and Azure using Kafka and ClickHouse.",
    tags: ["Go", "Kafka", "ClickHouse", "AWS", "GCP", "Azure"],
    repo: "https://github.com/ankitsriv89/datastream-lab",
    status: "building",
  },
  {
    name: "india-findata",
    description:
      "Indian macro and markets data pipeline ingesting from RBI, MOSPI, NSE, and BSE with a React dashboard.",
    tags: ["Python", "FastAPI", "ClickHouse", "React", "NSE", "BSE"],
    repo: "https://github.com/ankitsriv89/india-findata",
    status: "building",
  },
];

const statusColor: Record<Project["status"], string> = {
  live:     "var(--green)",
  building: "var(--amber)",
  planned:  "var(--text-dim)",
};

export default function Projects() {
  return (
    <section className="max-w-7xl mx-auto px-4 pb-24">
      <div className="flex items-center gap-4 mb-10">
        <span className="label-cyan">PROJECTS</span>
        <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
        <a href="/projects" className="mono text-xs footer-link">
          VIEW_ALL ↗
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((p) => (
          <div key={p.name} className="panel p-5 flex flex-col gap-3">
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-base font-semibold leading-tight" style={{ color: "var(--text-bright)" }}>
                {p.name}
              </h3>
              <span
                className="mono text-xs shrink-0 mt-0.5"
                style={{ color: statusColor[p.status] }}
              >
                [{p.status.toUpperCase()}]
              </span>
            </div>

            <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--text)", opacity: 0.8 }}>
              {p.description}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="mono text-xs px-2 py-0.5 rounded"
                  style={{
                    background: "var(--bg3)",
                    color: "var(--text-dim)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-1">
              {p.repo && (
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mono text-xs footer-link"
                >
                  REPO ↗
                </a>
              )}
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mono text-xs project-live-link"
                >
                  LIVE ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
