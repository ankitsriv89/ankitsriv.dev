import { skills } from "@/lib/profile";

export default function Skills() {
  return (
    <div className="panel-hud p-4">
      <div className="panel-head">skills</div>
      <div className="flex flex-col gap-3">
        {skills.map((s) => (
          <div key={s.label} className={s.accentClass}>
            <div className="flex items-center justify-between mb-1">
              <span className="mono text-[0.64rem]" style={{ color: "var(--text-dim)" }}>{s.label}</span>
              <span className="mono text-[0.58rem] tabular" style={{ color: "var(--text-muted)" }}>{s.value}%</span>
            </div>
            <div className="hud-bar">
              <div className="hud-bar-fill" style={{ width: `${s.value}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
