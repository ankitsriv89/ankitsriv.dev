import { buildHeatmap, heatmapMonths } from "@/lib/home";

const dayLabels = ["", "Mon", "", "Wed", "", "Fri", ""];

// activity_heatmap — a contribution-style grid (deterministic data so
// server and client render identically).
export default function ActivityHeatmap() {
  const grid = buildHeatmap(26, 7); // 26 weeks × 7 days

  return (
    <div className="hud-panel">
      <div className="hud-head">
        <span className="hud-head__title">activity_heatmap</span>
        <span style={{ color: "var(--text-muted)" }}>182 days</span>
      </div>
      <div className="hud-body">
        {/* month axis */}
        <div
          className="mb-2 grid text-[0.6rem]"
          style={{
            gridTemplateColumns: `repeat(${heatmapMonths.length}, 1fr)`,
            fontFamily: "var(--font-jetbrains), monospace",
            color: "var(--text-muted)",
            paddingLeft: "2rem",
          }}
        >
          {heatmapMonths.map((m) => (
            <span key={m}>{m}</span>
          ))}
        </div>

        <div className="flex gap-1.5">
          {/* day axis */}
          <div className="flex w-7 shrink-0 flex-col justify-between py-px text-[0.58rem]"
            style={{ fontFamily: "var(--font-jetbrains), monospace", color: "var(--text-muted)" }}>
            {dayLabels.map((d, i) => (
              <span key={i} className="h-[10px] leading-none">{d}</span>
            ))}
          </div>

          {/* grid: weeks as columns */}
          <div
            className="grid flex-1 gap-1"
            style={{ gridTemplateColumns: `repeat(${grid.length}, 1fr)` }}
          >
            {grid.map((week, wi) => (
              <div key={wi} className="grid gap-1" style={{ gridTemplateRows: "repeat(7, 1fr)" }}>
                {week.map((lvl, di) => (
                  <span key={di} className={`heat-cell heat-${lvl}`} />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-3 flex items-center justify-end gap-1.5 text-[0.6rem]"
          style={{ fontFamily: "var(--font-jetbrains), monospace", color: "var(--text-muted)" }}>
          <span>less</span>
          {[0, 1, 2, 3, 4].map((l) => (
            <span key={l} className={`heat-cell heat-${l}`} style={{ width: 10, height: 10 }} />
          ))}
          <span>more</span>
        </div>
      </div>
    </div>
  );
}
