import Link from "next/link";

export type Project = {
  name: string;
  description: string;
  tags: string[];
  field: string;        // which discipline this sits in
  accentClass: string;
  repo?: string;
  live?: string;
  status: "live" | "building" | "research";
};

// DEMO CONTENT — swap in your real projects.
export const projects: Project[] = [
  {
    name: "StreamFlow",
    description:
      "Real-time event processing platform for high-volume pipelines, built to stay correct under load and easy to operate.",
    tags: ["Go", "Kafka", "ClickHouse"],
    field: "Technology",
    accentClass: "disc-tech",
    repo: "https://github.com/ankitsriv89/system-design",
    live: "https://anksysdesign.pages.dev",
    status: "live",
  },
  {
    name: "India FinData",
    description:
      "Macro and markets data pipeline ingesting from RBI, MOSPI, NSE and BSE — turning messy public sources into a clean analytical layer.",
    tags: ["Python", "FastAPI", "Markets"],
    field: "Finance",
    accentClass: "disc-finance",
    repo: "https://github.com/ankitsriv89/india-findata",
    status: "building",
  },
  {
    name: "Incentive Lab",
    description:
      "Small simulations exploring how incentive structures and information asymmetry shape market outcomes — economics made runnable.",
    tags: ["Simulation", "Game theory", "Python"],
    field: "Economics",
    accentClass: "disc-econ",
    status: "research",
  },
  {
    name: "ConsentLayer",
    description:
      "A study of data-privacy regulation translated into enforceable system constraints — where law meets architecture.",
    tags: ["Privacy", "Compliance", "Policy"],
    field: "Law",
    accentClass: "disc-law",
    status: "research",
  },
  {
    name: "Decision Notes",
    description:
      "Notes and tooling on cognitive bias in decision-making, and how interface design can nudge toward better choices.",
    tags: ["Behavioral", "UX", "Cognition"],
    field: "Psychology",
    accentClass: "disc-psych",
    status: "research",
  },
];

const statusLabel: Record<Project["status"], { text: string; color: string }> = {
  live:     { text: "Live",      color: "var(--green)" },
  building: { text: "Building",  color: "var(--amber)" },
  research: { text: "Research",  color: "var(--text-muted)" },
};

export function ProjectCard({ project }: { project: Project }) {
  const s = statusLabel[project.status];
  return (
    <article className={`panel ${project.accentClass} flex flex-col gap-4 p-6`}>
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="disc-dot" />
          <span className="text-xs" style={{ color: "var(--text-muted)" }}>{project.field}</span>
        </div>
        <span className="text-xs" style={{ color: s.color }}>{s.text}</span>
      </div>

      <div>
        <h3 className="font-display text-xl font-semibold" style={{ color: "var(--text-bright)" }}>
          {project.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-dim)" }}>
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[0.72rem] rounded-md px-2 py-1"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", color: "var(--text-muted)" }}
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center gap-4 pt-1">
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-sm link-soft" style={{ color: "var(--cyan)" }}>
            Visit →
          </a>
        )}
        {project.repo && (
          <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-sm link-soft">
            Source
          </a>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section className="px-6 md:px-12 py-12 md:py-16" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="flex items-end justify-between gap-4 mb-10">
        <div>
          <div className="eyebrow mb-3">Selected work</div>
          <h2 className="font-display text-2xl md:text-3xl font-bold" style={{ color: "var(--text-bright)" }}>
            Things I&apos;ve built and explored.
          </h2>
        </div>
        <Link href="/projects" className="text-sm link-soft whitespace-nowrap">All work →</Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
    </section>
  );
}
