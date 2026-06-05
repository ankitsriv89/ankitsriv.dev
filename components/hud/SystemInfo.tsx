import { systemInfo } from "@/lib/home";

const accentColor: Record<string, string> = {
  emerald: "var(--emerald)",
  cyan: "var(--cyan)",
  amber: "var(--amber)",
};

// Right-rail system_info readout.
export default function SystemInfo() {
  return (
    <div className="hud-panel">
      <div className="hud-head">
        <span className="hud-head__title">system_info</span>
      </div>
      <div className="hud-body">
        <dl>
          {systemInfo.map(({ key, value, accent }) => (
            <div key={key} className="hud-row">
              <dt className="hud-row__k">{key}</dt>
              <dd
                className="hud-row__v"
                style={{ color: accent ? accentColor[accent] : "var(--text)" }}
              >
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
