import { intersections, disciplines } from "@/lib/profile";

export default function Intersections() {
  return (
    <div className="panel-hud p-4">
      <div className="panel-head">intersections</div>

      {/* Field legend */}
      <div className="flex flex-wrap gap-x-4 gap-y-1.5 mb-4">
        {disciplines.map((d) => (
          <span key={d.key} className={`${d.accentClass} flex items-center gap-1.5`}>
            <span className="disc-dot" />
            <span className="mono text-[0.6rem]" style={{ color: "var(--text-dim)" }}>{d.label}</span>
          </span>
        ))}
      </div>

      {/* Overlap cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {intersections.map((x) => (
          <div
            key={x.pair}
            className="rounded p-3"
            style={{ background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)" }}
          >
            <div className="mono text-[0.58rem] mb-1" style={{ color: "var(--cyan-bright)" }}>{x.pair}</div>
            <div className="font-display text-[0.82rem] font-semibold" style={{ color: "var(--text-bright)" }}>
              {x.label}
            </div>
            <p className="text-[0.7rem] leading-snug mt-1" style={{ color: "var(--text-dim)" }}>
              {x.blurb}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
