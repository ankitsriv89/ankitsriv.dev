import { techStack } from "@/lib/home";

// tech_stack — a tidy grid of labels.
export default function TechStack() {
  return (
    <div className="hud-panel">
      <div className="hud-head">
        <span className="hud-head__title">tech_stack</span>
      </div>
      <div className="hud-body">
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
          {techStack.map((t) => (
            <span key={t} className="tech-chip">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
