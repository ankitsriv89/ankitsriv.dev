export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-24 md:py-32">
      <div className="max-w-3xl">
        {/* Status line */}
        <div className="flex items-center gap-2 mb-6">
          <span
            className="inline-block w-2 h-2 rounded-full animate-pulse-cyan"
            style={{ background: "var(--green)" }}
          />
          <span className="mono text-xs tracking-widest" style={{ color: "var(--text-dim)" }}>
            ONLINE // BUILDING IN PUBLIC
          </span>
        </div>

        {/* Name */}
        <h1
          className="text-5xl md:text-7xl font-bold tracking-tight mb-2 animate-flicker"
          style={{ color: "var(--text-bright)" }}
        >
          ANKIT
          <span style={{ color: "var(--cyan)" }}>.</span>
        </h1>
        <h1
          className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
          style={{ color: "var(--text-dim)" }}
        >
          SRIVASTAVA
        </h1>

        {/* Bio */}
        <p
          className="leading-relaxed mb-10 max-w-2xl"
          style={{
            color: "var(--text)",
            fontFamily: "var(--font-ibm-mono)",
            fontSize: "0.9rem",
          }}
        >
          <span style={{ color: "var(--cyan-dim)" }}>$ </span>
          Software engineer. Systems thinker. Building distributed systems,
          data pipelines, and tools that scale.{" "}
          <span className="animate-pulse-cyan" style={{ color: "var(--cyan)" }}>
            ▋
          </span>
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-10">
          <a
            href="/projects"
            className="panel px-6 py-3 mono text-sm tracking-widest transition-all"
            style={{ color: "var(--cyan)", borderColor: "var(--cyan-dim)" }}
          >
            [VIEW_PROJECTS]
          </a>
          <a
            href="/resume"
            className="panel px-6 py-3 mono text-sm tracking-widest transition-all"
            style={{ color: "var(--green)", borderColor: "var(--green-dim)" }}
          >
            [VIEW_RESUME]
          </a>
          <a
            href="/ask"
            className="panel px-6 py-3 mono text-sm tracking-widest transition-all"
            style={{ color: "var(--text-dim)", borderColor: "var(--border)" }}
          >
            [ASK_ME_ANYTHING]
          </a>
        </div>

        {/* Social row */}
        <div className="flex items-center gap-6">
          {[
            { label: "GITHUB",   href: "https://github.com/ankitsriv89" },
            { label: "LINKEDIN", href: "https://linkedin.com/in/ankitsriv89" },
            { label: "EMAIL",    href: "mailto:anksr2018@gmail.com" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="mono text-xs tracking-widest transition-colors"
              style={{ color: "var(--text-dim)" }}
            >
              {label} ↗
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
