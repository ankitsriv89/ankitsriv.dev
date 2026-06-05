import Link from "next/link";
import { recentArticles } from "@/lib/profile";

export default function RecentArticles() {
  return (
    <div className="panel-hud p-4">
      <div className="panel-head">recent_articles</div>
      <div className="flex flex-col gap-2.5">
        {recentArticles.map((a) => (
          <Link key={a.title} href={a.href} className="group flex items-start gap-2">
            <span className="mono text-[0.6rem] mt-0.5 shrink-0" style={{ color: "var(--cyan-bright)" }}>▸</span>
            <span>
              <span
                className="block text-[0.74rem] leading-snug transition-colors group-hover:text-[var(--text-bright)]"
                style={{ color: "var(--text-dim)" }}
              >
                {a.title}
              </span>
              <span className="mono text-[0.55rem]" style={{ color: "var(--text-muted)" }}>{a.tag}</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
