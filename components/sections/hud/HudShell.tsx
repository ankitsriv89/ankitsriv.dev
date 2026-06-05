export default function HudShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Dimmed wireframe-globe backdrop + grid (scoped to home only) */}
      <div className="hud-bg-layer" aria-hidden />
      <div className="hud-grid" aria-hidden />
      {/* Moving scanline */}
      <div className="scanline animate-scanline" aria-hidden />
      {children}
    </div>
  );
}
