import { disciplines } from "@/lib/profile";

export default function Disciplines() {
  return (
    <section className="px-6 md:px-12 py-12 md:py-16" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="eyebrow mb-3">Disciplines</div>
      <h2 className="font-display text-2xl md:text-3xl font-bold mb-3" style={{ color: "var(--text-bright)" }}>
        Five fields, one way of thinking.
      </h2>
      <p className="measure text-base leading-relaxed mb-10" style={{ color: "var(--text-dim)" }}>
        I don&apos;t see these as separate résumés. They&apos;re lenses — each one changes how I read a
        problem, and the best solutions usually borrow from more than one.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {disciplines.map((d) => (
          <article
            key={d.key}
            className={`panel ${d.accentClass} p-6`}
            style={{ borderTop: "2px solid var(--disc)" }}
          >
            <div className="flex items-center gap-2.5 mb-3">
              <span className="disc-dot" />
              <h3 className="font-display text-lg font-semibold" style={{ color: "var(--text-bright)" }}>
                {d.label}
              </h3>
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-dim)" }}>
              {d.blurb}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {d.highlights.map((h) => (
                <span
                  key={h}
                  className="text-[0.72rem] rounded-md px-2 py-1"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid var(--border)",
                    color: "var(--text-muted)",
                  }}
                >
                  {h}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
