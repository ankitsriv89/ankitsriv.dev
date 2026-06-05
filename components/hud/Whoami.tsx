import { identity } from "@/lib/home";
import TypedText from "./TypedText";

// The hero panel: "// whoami" → big greeting with a typed word,
// descriptors, tagline, and a [ currently … ] strip. A faint
// generalist node diagram sits in the background (decorative).
export default function Whoami() {
  return (
    <section className="hud-panel relative overflow-hidden">
      <div className="hud-head">
        <span className="hud-head__title">whoami</span>
        <span style={{ color: "var(--text-muted)" }}>~/intro</span>
      </div>

      {/* decorative background diagram */}
      <DomainDiagram />

      <div className="relative z-10 p-6 sm:p-8">
        <p
          className="text-sm"
          style={{ fontFamily: "var(--font-jetbrains), monospace", color: "var(--cyan)" }}
        >
          $ ./introduce --self
        </p>

        <h1
          className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
          style={{ color: "var(--text-bright)" }}
        >
          Hi, I&apos;m {identity.first}.
        </h1>

        <p className="mt-4 text-xl font-medium sm:text-2xl" style={{ color: "var(--text)" }}>
          I build{" "}
          <TypedText
            words={identity.typed}
            className="text-[var(--cyan)]"
          />
        </p>

        {/* descriptors as instrument labels */}
        <div className="mt-5 flex flex-wrap items-center gap-x-2.5 gap-y-1.5">
          {identity.descriptors.map((d, i) => (
            <span key={d} className="flex items-center gap-2.5">
              {i > 0 && (
                <span style={{ color: "var(--line-bright)" }} aria-hidden>
                  ·
                </span>
              )}
              <span
                className="text-sm"
                style={{ fontFamily: "var(--font-jetbrains), monospace", color: "var(--text-dim)" }}
              >
                {d}
              </span>
            </span>
          ))}
        </div>

        <p
          className="measure mt-6 text-base leading-relaxed"
          style={{ color: "var(--text-dim)" }}
        >
          {identity.tagline}
        </p>

        {/* currently strip */}
        <div className="mt-7 inline-flex flex-wrap items-center gap-2 rounded-md border px-3 py-2"
          style={{ borderColor: "var(--line)", background: "rgba(255,255,255,0.015)" }}>
          <span
            className="text-xs"
            style={{ fontFamily: "var(--font-jetbrains), monospace", color: "var(--text-muted)" }}
          >
            [ currently
          </span>
          {identity.currently.map((c, i) => (
            <span key={c} className="flex items-center gap-2">
              {i > 0 && <span style={{ color: "var(--text-muted)" }}>·</span>}
              <span
                className="text-xs"
                style={{ fontFamily: "var(--font-jetbrains), monospace", color: "var(--emerald)" }}
              >
                {c}
              </span>
            </span>
          ))}
          <span
            className="text-xs"
            style={{ fontFamily: "var(--font-jetbrains), monospace", color: "var(--text-muted)" }}
          >
            ]
          </span>
        </div>
      </div>
    </section>
  );
}

// A faint connected-node graph — the six domains orbiting a center.
// Purely decorative; hidden from assistive tech.
function DomainDiagram() {
  const nodes = [
    { x: 86, y: 18, c: "var(--cyan)", r: 3 },
    { x: 92, y: 50, c: "var(--violet)", r: 2.5 },
    { x: 80, y: 78, c: "var(--emerald)", r: 3 },
    { x: 60, y: 88, c: "var(--amber)", r: 2.5 },
    { x: 70, y: 36, c: "var(--rose)", r: 2 },
    { x: 96, y: 70, c: "var(--cyan)", r: 2 },
  ];
  const cx = 74;
  const cy = 52;
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full opacity-60"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMaxYMid slice"
    >
      <g stroke="var(--line-bright)" strokeWidth="0.25" opacity="0.7">
        {nodes.map((n, i) => (
          <line key={i} x1={cx} y1={cy} x2={n.x} y2={n.y} />
        ))}
      </g>
      <circle cx={cx} cy={cy} r="3.5" fill="none" stroke="var(--cyan)" strokeWidth="0.4" opacity="0.6" />
      <circle cx={cx} cy={cy} r="1.6" fill="var(--cyan)" opacity="0.8" />
      {nodes.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r={n.r} fill={n.c} opacity="0.7" />
      ))}
    </svg>
  );
}
