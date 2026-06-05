import { systemInfo } from "@/lib/profile";

export default function SystemInfo() {
  return (
    <div className="panel-hud p-4">
      <div className="panel-head">system_info</div>
      <div className="flex flex-col gap-2">
        {systemInfo.map(({ key, value }) => (
          <div key={key} className="flex items-center justify-between gap-3">
            <span className="mono text-[0.66rem]" style={{ color: "var(--text-muted)" }}>{key}</span>
            <span
              className="mono text-[0.66rem] text-right tabular"
              style={{ color: key === "status" ? "var(--green-bright)" : "var(--text-dim)" }}
            >
              {key === "status" ? (
                <span className="flex items-center justify-end gap-1.5">
                  <span className="status-dot status-dot--avail animate-pulse-cyan" />
                  {value}
                </span>
              ) : (
                value
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
