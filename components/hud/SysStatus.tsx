import { sysStatus } from "@/lib/home";

function Spark({ data }: { data: number[] }) {
  const w = 56;
  const h = 16;
  const max = Math.max(...data, 1);
  const step = w / (data.length - 1);
  const pts = data
    .map((v, i) => `${(i * step).toFixed(1)},${(h - (v / max) * h).toFixed(1)}`)
    .join(" ");
  return (
    <svg width={w} height={h} aria-hidden className="overflow-visible">
      <polyline
        points={pts}
        fill="none"
        stroke="var(--cyan)"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.85"
      />
    </svg>
  );
}

// sys_status — labeled metrics with sparklines.
export default function SysStatus() {
  return (
    <div className="hud-panel">
      <div className="hud-head">
        <span className="hud-head__title">sys_status</span>
      </div>
      <div className="hud-body">
        <ul className="space-y-2.5">
          {sysStatus.map((m) => (
            <li key={m.key} className="flex items-center gap-3">
              <span
                className="w-20 text-xs"
                style={{ fontFamily: "var(--font-jetbrains), monospace", color: "var(--text-muted)" }}
              >
                {m.key}
              </span>
              <span
                className="w-12 text-xs tabular"
                style={{ fontFamily: "var(--font-jetbrains), monospace", color: "var(--text)" }}
              >
                {m.value}
              </span>
              <span className="ml-auto">
                <Spark data={m.spark} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
