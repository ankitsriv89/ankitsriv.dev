import Link from "next/link";
import { getTimelineEvents, type TimelineEvent } from "@/lib/timeline";

const typeColor: Record<TimelineEvent["type"], string> = {
  job: "var(--cyan)",
  project: "var(--emerald)",
  education: "var(--violet)",
  achievement: "var(--amber)",
  personal: "var(--text-muted)",
};

// journey — a compact preview of the professional/learning timeline.
// Filters out placeholder TODO entries.
export default async function JourneySnapshot() {
  const events = (await getTimelineEvents())
    .filter((e) => !e.title.startsWith("TODO"))
    .slice(0, 4);

  if (events.length === 0) return null;

  return (
    <div className="hud-panel">
      <div className="hud-head">
        <span className="hud-head__title">journey</span>
        <Link href="/timeline" className="link-more">
          full timeline →
        </Link>
      </div>
      <div className="hud-body">
        <ol className="relative space-y-3.5 pl-1">
          <span
            className="absolute bottom-1 left-[4.1rem] top-1 w-px"
            style={{ background: "var(--line)" }}
            aria-hidden
          />
          {events.map((e) => (
            <li key={e.id} className="relative flex gap-3">
              <span
                className="w-14 shrink-0 pt-px text-right text-[0.68rem] tabular"
                style={{ fontFamily: "var(--font-jetbrains), monospace", color: "var(--text-muted)" }}
              >
                {e.year}
              </span>
              <span className="relative z-10 shrink-0 pt-1">
                <span
                  className="block h-2 w-2 rounded-full"
                  style={{ background: typeColor[e.type], boxShadow: `0 0 6px ${typeColor[e.type]}` }}
                  aria-hidden
                />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-medium" style={{ color: "var(--text-bright)" }}>
                  {e.title}
                </p>
                <p className="text-xs leading-snug" style={{ color: "var(--text-dim)" }}>
                  {e.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
