import { ProjectCard, projects } from "@/components/sections/Projects";

export default function Page() {
  return (
    <section className="container-page py-20 md:py-24">
      <div className="mb-10 max-w-3xl">
        <span className="label-cyan">Projects</span>
        <h1 className="mt-4 text-4xl font-bold md:text-6xl">Systems work in progress.</h1>
        <p className="mt-5 text-lg leading-8" style={{ color: "var(--text-dim)" }}>
          A focused set of backend, infrastructure, and data projects. Most are
          built as public learning artifacts with notes, experiments, and working
          code.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
