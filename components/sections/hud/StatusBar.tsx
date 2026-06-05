import Clock from "./Clock";
import { statusIdentity } from "@/lib/profile";

export default function StatusBar() {
  const { user, host, path, status } = statusIdentity;
  return (
    <div
      className="flex items-center justify-between gap-4 px-5 md:px-8 h-9 mono text-[0.68rem]"
      style={{ borderBottom: "1px solid var(--border)", background: "rgba(11,14,19,0.55)" }}
    >
      <span style={{ color: "var(--text-muted)" }}>
        <span style={{ color: "var(--green-bright)" }}>{user}</span>
        <span style={{ color: "var(--text-muted)" }}>@{host}</span>
        <span style={{ color: "var(--text-muted)" }}>:{path}$</span>
      </span>

      <span style={{ color: "var(--text-dim)" }}>
        <Clock />
      </span>

      <span className="flex items-center gap-1.5">
        <span className="status-dot status-dot--avail animate-pulse-cyan" />
        <span style={{ color: "var(--green-bright)" }}>{status}</span>
      </span>
    </div>
  );
}
