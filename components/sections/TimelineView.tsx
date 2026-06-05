"use client";

import { useState } from "react";
import type { TimelineEvent } from "@/lib/timeline";

const TYPE_CONFIG: Record<
  TimelineEvent["type"],
  { label: string; color: string; dot: string }
> = {
  job:         { label: "Job",         color: "var(--cyan)",    dot: "var(--cyan)" },
  project:     { label: "Project",     color: "var(--green)",   dot: "var(--green)" },
  education:   { label: "Education",   color: "var(--amber)",   dot: "var(--amber)" },
  achievement: { label: "Achievement", color: "var(--cyan)",    dot: "var(--cyan)" },
  personal:    { label: "Personal",    color: "var(--text-dim)", dot: "var(--text-muted)" },
};

const ALL_TYPES = ["all", "job", "project", "education", "achievement", "personal"] as const;
type FilterType = (typeof ALL_TYPES)[number];

export default function TimelineView({ events }: { events: TimelineEvent[] }) {
  const [filter, setFilter] = useState<FilterType>("all");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = filter === "all" ? events : events.filter((e) => e.type === filter);

  return (
    <div className="container-page py-16">
      {/* Header */}
      <div className="mb-10">
        <div className="label-cyan mb-3">Timeline</div>
        <h1 className="text-4xl font-bold sm:text-5xl" style={{ color: "var(--text-bright)" }}>
          The path so far.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7" style={{ color: "var(--text-dim)" }}>
          Jobs, projects, education, and milestones — in sequence.
        </p>
      </div>

      {/* Filter pills */}
      <div className="mb-10 flex flex-wrap gap-2">
        {ALL_TYPES.map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className="mono rounded-full border px-3 py-1.5 text-xs capitalize transition-all"
            style={{
              background: filter === t ? "rgba(63,215,255,0.12)" : "rgba(255,255,255,0.03)",
              borderColor: filter === t ? "rgba(63,215,255,0.52)" : "var(--border)",
              color: filter === t ? "var(--cyan)" : "var(--text-dim)",
            }}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div
          className="absolute left-[1.1rem] top-0 bottom-0 w-px md:left-[50%]"
          style={{ background: "linear-gradient(180deg, var(--cyan), var(--border) 60%, transparent)" }}
        />

        <div className="flex flex-col gap-0">
          {filtered.map((event, i) => {
            const cfg = TYPE_CONFIG[event.type];
            const isLeft = i % 2 === 0;
            const isOpen = expanded === event.id;

            return (
              <div key={event.id} className="relative flex items-start md:grid md:grid-cols-2 md:gap-8">
                {/* Left side (desktop) */}
                <div
                  className={`hidden md:block md:pb-10 ${isLeft ? "md:pr-10 md:text-right" : "md:order-last md:pl-10"}`}
                >
                  {isLeft && <EventCard event={event} cfg={cfg} isOpen={isOpen} onToggle={() => setExpanded(isOpen ? null : event.id)} />}
                  {!isLeft && (
                    <div className="pt-2 text-right">
                      <span className="mono text-xs" style={{ color: "var(--text-muted)" }}>
                        {event.month} {event.year}
                      </span>
                    </div>
                  )}
                </div>

                {/* Center dot */}
                <div className="relative z-10 flex shrink-0 flex-col items-center md:absolute md:left-1/2 md:-translate-x-1/2 md:top-2">
                  <div
                    className="h-4 w-4 rounded-full border-2 transition-all"
                    style={{
                      background: isOpen ? cfg.dot : "var(--bg3)",
                      borderColor: cfg.dot,
                      boxShadow: isOpen ? `0 0 12px ${cfg.dot}` : "none",
                    }}
                  />
                </div>

                {/* Right side (desktop) / mobile full width */}
                <div className={`pb-10 pl-6 md:pl-0 ${isLeft ? "md:pl-10" : "md:pr-10 md:text-right"} md:block`}>
                  {!isLeft && <EventCard event={event} cfg={cfg} isOpen={isOpen} onToggle={() => setExpanded(isOpen ? null : event.id)} />}
                  {isLeft && (
                    <div className="hidden pt-2 md:block">
                      <span className="mono text-xs" style={{ color: "var(--text-muted)" }}>
                        {event.month} {event.year}
                      </span>
                    </div>
                  )}
                  {/* Mobile card */}
                  <div className="md:hidden">
                    <EventCard event={event} cfg={cfg} isOpen={isOpen} onToggle={() => setExpanded(isOpen ? null : event.id)} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {filtered.length === 0 && (
        <div className="py-16 text-center">
          <p className="mono text-sm" style={{ color: "var(--text-muted)" }}>
            No events of type &quot;{filter}&quot; yet.
          </p>
        </div>
      )}
    </div>
  );
}

function EventCard({
  event,
  cfg,
  isOpen,
  onToggle,
}: {
  event: TimelineEvent;
  cfg: { label: string; color: string; dot: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      className="panel w-full p-4 text-left transition-all"
      style={{
        borderColor: isOpen ? cfg.dot : undefined,
        boxShadow: isOpen ? `0 0 20px rgba(0,0,0,0.4), 0 0 0 1px ${cfg.dot}33` : undefined,
      }}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span
              className="mono shrink-0 rounded border px-1.5 py-0.5 text-[0.62rem] capitalize"
              style={{ color: cfg.color, borderColor: `${cfg.dot}44`, background: `${cfg.dot}11` }}
            >
              {cfg.label}
            </span>
            <span className="mono text-xs" style={{ color: "var(--text-muted)" }}>
              {event.month} {event.year}
            </span>
          </div>
          <div
            className="mt-2 text-base font-semibold leading-snug"
            style={{ color: "var(--text-bright)" }}
          >
            {event.title}
          </div>
        </div>
        <span
          className="mono mt-1 shrink-0 text-xs transition-transform"
          style={{
            color: "var(--text-muted)",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          ▾
        </span>
      </div>

      {isOpen && (
        <div className="mt-3 border-t pt-3" style={{ borderColor: "var(--border)" }}>
          <p className="text-sm leading-6" style={{ color: "var(--text-dim)" }}>
            {event.description}
          </p>
          {event.link && (
            <a
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="mono mt-3 inline-block text-xs link-soft"
              style={{ color: cfg.color }}
            >
              View →
            </a>
          )}
        </div>
      )}
    </button>
  );
}
