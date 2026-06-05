import type { Metadata } from "next";
import Link from "next/link";
import { getAllDiaryEntries } from "@/lib/diary";

export const metadata: Metadata = {
  title: "Diary — Ankit Srivastava",
  description: "A build log — progress notes, open questions, and small discoveries while projects evolve.",
};

const MOOD_EMOJI: Record<string, string> = {
  focused: "🎯",
  tired: "😴",
  excited: "⚡",
  frustrated: "😤",
  curious: "🔍",
  good: "✅",
};

export default function DiaryPage() {
  const entries = getAllDiaryEntries();

  return (
    <div className="container-page py-16">
      <div className="mb-10">
        <div className="label-cyan mb-3">Diary</div>
        <h1 className="text-4xl font-bold sm:text-5xl" style={{ color: "var(--text-bright)" }}>
          The build log.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7" style={{ color: "var(--text-dim)" }}>
          Short-form entries: what I built, what I noticed, what I'm thinking about.
        </p>
      </div>

      {entries.length === 0 ? (
        <div className="panel p-8 text-center">
          <p className="mono text-sm" style={{ color: "var(--text-muted)" }}>
            No entries yet. Drop an MDX file in <code className="text-cyan">content/diary/</code> to start.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {entries.map((entry) => (
            <Link
              key={entry.slug}
              href={`/diary/${entry.slug}`}
              className="panel flex items-center gap-4 p-4 hover:no-underline"
            >
              <div
                className="mono shrink-0 text-xs tabular-nums"
                style={{ color: "var(--text-muted)", minWidth: "6.5rem" }}
              >
                {entry.date}
              </div>
              <div className="h-4 w-px" style={{ background: "var(--border)" }} />
              {entry.mood && (
                <span className="shrink-0 text-base" title={entry.mood}>
                  {MOOD_EMOJI[entry.mood] ?? "📝"}
                </span>
              )}
              <div className="min-w-0 flex-1">
                <span className="mono text-xs" style={{ color: "var(--text-dim)" }}>
                  {entry.slug}
                </span>
              </div>
              <span className="mono shrink-0 text-xs" style={{ color: "var(--text-muted)" }}>
                →
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
