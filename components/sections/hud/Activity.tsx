import { activity, activityLabel } from "@/lib/profile";

export default function Activity() {
  const max = Math.max(...activity);
  return (
    <div className="panel-hud p-4">
      <div className="panel-head">activity</div>
      <div className="flex items-end gap-[3px] h-16">
        {activity.map((v, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm"
            style={{
              height: `${(v / max) * 100}%`,
              background: i >= activity.length - 4 ? "var(--cyan-bright)" : "rgba(92,225,255,0.28)",
              boxShadow: i >= activity.length - 4 ? "0 0 6px rgba(92,225,255,0.5)" : "none",
            }}
          />
        ))}
      </div>
      <div className="mt-2.5 flex items-center justify-between">
        <span className="mono text-[0.55rem]" style={{ color: "var(--text-muted)" }}>{activityLabel}</span>
        <span className="mono text-[0.55rem]" style={{ color: "var(--green-bright)" }}>↑ active</span>
      </div>
    </div>
  );
}
