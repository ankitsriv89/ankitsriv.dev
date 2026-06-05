import HudShell from "@/components/sections/hud/HudShell";
import StatusBar from "@/components/sections/hud/StatusBar";
import HudHero from "@/components/sections/hud/HudHero";
import DashboardGrid from "@/components/sections/hud/DashboardGrid";

export default function Home() {
  return (
    <HudShell>
      <StatusBar />
      <HudHero />
      <DashboardGrid />
    </HudShell>
  );
}
