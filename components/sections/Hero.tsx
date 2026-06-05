export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src="/hero-systems.png"
          alt=""
          className="h-full w-full object-cover object-center opacity-55"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(5,7,13,0.98) 0%, rgba(5,7,13,0.86) 42%, rgba(5,7,13,0.34) 100%)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-32"
          style={{ background: "linear-gradient(180deg, transparent, var(--bg))" }}
        />
      </div>

      <div className="container-page grid min-h-[calc(100svh-8rem)] items-center gap-10 py-16 md:grid-cols-[minmax(0,0.95fr)_minmax(19rem,0.55fr)] md:py-20">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-2"
            style={{
              background: "rgba(13, 20, 32, 0.74)",
              borderColor: "rgba(89, 230, 173, 0.24)",
            }}
          >
            <span
              className="inline-block h-2 w-2 rounded-full animate-pulse-cyan"
              style={{ background: "var(--green)" }}
            />
            <span className="mono text-xs" style={{ color: "var(--text-dim)" }}>
              Available for systems, data, and backend work
            </span>
          </div>

          <h1 className="max-w-4xl text-5xl font-bold sm:text-6xl lg:text-7xl">
            I build dependable software for messy, high-volume systems.
          </h1>

          <p
            className="mt-6 max-w-2xl text-lg leading-8 md:text-xl"
            style={{ color: "var(--text)" }}
          >
            I am Ankit Srivastava, a software engineer focused on distributed
            systems, data pipelines, infrastructure tooling, and the interfaces
            that make complex systems easier to operate.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="/projects" className="button-primary">
              View projects
            </a>
            <a href="/resume" className="button-secondary">
              Resume
            </a>
            <a href="/ask" className="button-muted">
              Ask me anything
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
            {[
              { label: "GitHub", href: "https://github.com/ankitsriv89" },
              { label: "LinkedIn", href: "https://linkedin.com/in/ankitsriv89" },
              { label: "Email", href: "mailto:anksr2018@gmail.com" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="mono text-xs link-soft"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <aside className="grid gap-3 md:justify-self-end">
          {[
            ["Focus", "Distributed systems"],
            ["Current", "50-project system design series"],
            ["Stack", "Go, Python, Kafka, ClickHouse, React"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="panel w-full min-w-0 p-4 md:w-80"
              style={{ background: "rgba(13, 20, 32, 0.72)" }}
            >
              <div className="label-cyan">{label}</div>
              <div className="mt-2 text-lg font-semibold" style={{ color: "var(--text-bright)" }}>
                {value}
              </div>
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
}
