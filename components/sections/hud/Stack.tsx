import { stack } from "@/lib/profile";

export default function Stack() {
  return (
    <div className="panel-hud p-4">
      <div className="panel-head">stack</div>
      <div className="grid grid-cols-3 gap-1.5">
        {stack.map((s) => (
          <span
            key={s.label}
            className="mono text-[0.62rem] text-center rounded px-1.5 py-1.5"
            style={{ background: "rgba(255,255,255,0.025)", border: "1px solid var(--border)", color: "var(--text-dim)" }}
          >
            {s.label}
          </span>
        ))}
      </div>
    </div>
  );
}
