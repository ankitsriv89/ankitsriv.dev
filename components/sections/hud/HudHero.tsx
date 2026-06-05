import TypedText from "./TypedText";
import { heroTyped, connectLines, profile } from "@/lib/profile";

export default function HudHero() {
  return (
    <section className="relative px-5 md:px-8 pt-10 md:pt-14 pb-8 md:pb-10">
      <div className="mono text-[0.7rem] mb-4" style={{ color: "var(--text-muted)" }}>
        # whoami
      </div>

      <h1
        className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl"
        style={{ color: "var(--text-bright)", lineHeight: 1.05 }}
      >
        Hi, I&apos;m {profile.short}.
      </h1>

      <div
        className="mt-4 mono text-lg sm:text-xl"
        style={{ color: "var(--text-dim)" }}
      >
        I work across{" "}
        <TypedText words={heroTyped} />
      </div>

      {/* Manifesto lines */}
      <div className="mt-7 flex flex-col gap-1.5 max-w-xl">
        {connectLines.map((line) => (
          <div key={line} className="flex items-center gap-2.5">
            <span className="mono text-[0.7rem]" style={{ color: "var(--green-bright)" }}>›</span>
            <span className="text-base" style={{ color: "var(--text-dim)" }}>{line}</span>
          </div>
        ))}
        <div className="mt-2 flex items-center gap-2.5">
          <span className="mono text-[0.7rem]" style={{ color: "var(--cyan-bright)" }}>→</span>
          <span
            className="font-display text-lg font-semibold"
            style={{ color: "var(--text-bright)" }}
          >
            I connect the dots.
          </span>
        </div>
      </div>

      {/* Status tags */}
      <div className="mt-7 flex flex-wrap gap-2">
        {["systems thinker", "interdisciplinary", "builds + ships", "open to work"].map((t) => (
          <span
            key={t}
            className="mono text-[0.68rem] rounded px-2 py-1"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid var(--border)",
              color: "var(--text-muted)",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}
