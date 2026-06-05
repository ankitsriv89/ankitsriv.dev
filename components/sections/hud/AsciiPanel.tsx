const GLOBE = String.raw`
        .-""""-.
      .'  . . .  '.
     / . *   .  *  \
    | .  ___  .   . |
    |. /   \ *  .   |
     \ \___/ . *  ./
      '.  . *  . .'
        '-....-'
`;

export default function AsciiPanel() {
  return (
    <div className="panel-hud p-4 flex flex-col">
      <div className="panel-head">node // AS-01</div>
      <pre
        className="mono leading-tight"
        style={{ color: "var(--cyan-bright)", opacity: 0.55, fontSize: "0.6rem" }}
      >
        {GLOBE}
      </pre>
      <div className="mono text-[0.55rem] mt-auto pt-2" style={{ color: "var(--text-muted)" }}>
        lat 28.61 · lon 77.20 · sync ok
      </div>
    </div>
  );
}
