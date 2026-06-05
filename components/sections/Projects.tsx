export type Project = {
  name: string;
  description: string;
  tags: string[];
  repo?: string;
  live?: string;
  status: "live" | "building" | "planned";
  highlight: string;
};

export const projects: Project[] = [
  {
    name: "System Design Portfolio",
    description:
      "50-project series implementing distributed systems from scratch: rate limiters, caches, search engines, message queues, and more.",
    tags: ["Go", "Distributed Systems", "Docker", "Redis", "PostgreSQL"],
    repo: "https://github.com/ankitsriv89/system-design",
    live: "https://anksysdesign.pages.dev",
    status: "building",
    highlight: "Architecture-first learning in public",
  },
  {
    name: "datastream-lab",
    description:
      "Streaming platform experiments with local and cloud proofs of concept across AWS, GCP, and Azure using Kafka and ClickHouse.",
    tags: ["Go", "Kafka", "ClickHouse", "AWS", "GCP", "Azure"],
    repo: "https://github.com/ankitsriv89/datastream-lab",
    status: "building",
    highlight: "Real-time data platform experiments",
  },
  {
    name: "india-findata",
    description:
      "Indian macro and markets data pipeline ingesting from RBI, MOSPI, NSE, and BSE with a React dashboard.",
    tags: ["Python", "FastAPI", "ClickHouse", "React", "NSE", "BSE"],
    repo: "https://github.com/ankitsriv89/india-findata",
    status: "building",
    highlight: "Finance data pipelines and analytics",
  },
];

const statusColor: Record<Project["status"], string> = {
  live:     "var(--green)",
  building: "var(--amber)",
  planned:  "var(--text-dim)",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="panel flex h-full flex-col gap-5 p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="label-cyan">{project.highlight}</div>
          <h3 className="mt-3 text-2xl font-semibold" style={{ color: "var(--text-bright)" }}>
            {project.name}
          </h3>
        </div>
        <span
          className="mono shrink-0 rounded-full border px-2.5 py-1 text-[0.68rem]"
          style={{
            color: statusColor[project.status],
            borderColor: "var(--border)",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          {project.status}
        </span>
      </div>

      <p className="flex-1 text-base leading-7" style={{ color: "var(--text-dim)" }}>
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="mono rounded-md border px-2.5 py-1 text-xs"
            style={{
              background: "rgba(255,255,255,0.03)",
              color: "var(--text-dim)",
              borderColor: "var(--border)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-3 pt-1">
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="button-muted min-h-0 px-3 py-2"
          >
            Repo
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="button-secondary min-h-0 px-3 py-2"
          >
            Live
          </a>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section className="container-page pb-24 pt-6">
      <div className="mb-8 flex items-center gap-4">
        <span className="label-cyan">Selected work</span>
        <div className="section-rule" />
        <a href="/projects" className="mono text-xs link-soft">
          View all
        </a>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
    </section>
  );
}
