import { pinnedNote } from "@/lib/profile";

export default function PinnedNote() {
  return (
    <div className="panel-hud p-4" style={{ borderColor: "rgba(230,184,90,0.28)" }}>
      <div className="panel-head" style={{ color: "var(--amber)" }}>pinned_note</div>
      <p className="text-[0.78rem] leading-relaxed" style={{ color: "var(--text-dim)" }}>
        &ldquo;{pinnedNote.quote}&rdquo;
      </p>
      <div className="mono text-[0.58rem] mt-3" style={{ color: "var(--text-muted)" }}>
        {pinnedNote.author}
      </div>
    </div>
  );
}
