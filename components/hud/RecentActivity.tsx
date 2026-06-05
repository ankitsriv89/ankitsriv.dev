import Link from "next/link";
import { recentActivity } from "@/lib/home";

// Right-rail recent_activity — a git-log-style feed.
export default function RecentActivity() {
  return (
    <div className="hud-panel">
      <div className="hud-head">
        <span className="hud-head__title">recent_activity</span>
        <span style={{ color: "var(--text-muted)" }}>git log</span>
      </div>
      <div className="hud-body">
        <ul className="space-y-3">
          {recentActivity.map((a) => (
            <li key={a.hash} className="flex gap-2.5">
              <span
                className="shrink-0 pt-0.5 text-xs"
                style={{ fontFamily: "var(--font-jetbrains), monospace", color: "var(--amber)" }}
              >
                {a.hash}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[0.82rem] leading-snug" style={{ color: "var(--text)" }}>
                  {a.msg}
                </p>
                <span
                  className="text-[0.68rem]"
                  style={{ fontFamily: "var(--font-jetbrains), monospace", color: "var(--text-muted)" }}
                >
                  {a.when}
                </span>
              </div>
            </li>
          ))}
        </ul>
        <Link
          href="https://github.com/ankitsriv89"
          className="mt-4 inline-block text-xs link-more"
        >
          more on GitHub →
        </Link>
      </div>
    </div>
  );
}
