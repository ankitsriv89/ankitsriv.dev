import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import Whoami from "./Whoami";
import SystemInfo from "./SystemInfo";
import RecentActivity from "./RecentActivity";
import FeaturedProjects from "./FeaturedProjects";
import Domains from "./Domains";
import TechStack from "./TechStack";
import ActivityHeatmap from "./ActivityHeatmap";
import SysStatus from "./SysStatus";
import SysQuote from "./SysQuote";
import JourneySnapshot from "./JourneySnapshot";
import { socials } from "@/lib/home";

// The mission-control homepage: persistent numbered sidebar + a dense
// dashboard grid. Modeled on the reference HUD, adapted to a generalist
// profile (no skill bars; six domains; mixed project links).
export default function HudHome() {
  return (
    <div className="relative min-h-screen">
      <div className="hud-backdrop" aria-hidden />
      <div className="hud-grid" aria-hidden />
      <TopBar />

      <div className="relative z-10 mx-auto w-full max-w-[100rem] px-3 py-4 sm:px-5 sm:py-5">
        <div className="flex flex-col gap-4 lg:flex-row">
          {/* ── sidebar ── */}
          <aside className="lg:sticky lg:top-16 lg:h-fit lg:w-[16.5rem] lg:shrink-0">
            <Sidebar />
          </aside>

          {/* ── main grid ── */}
          <div className="min-w-0 flex-1 space-y-4">
            {/* hero + right rail */}
            <div className="grid grid-cols-1 gap-4 xl:grid-cols-[1fr_19rem]">
              <Whoami />
              <div className="space-y-4">
                <SystemInfo />
                <RecentActivity />
              </div>
            </div>

            {/* featured projects */}
            <FeaturedProjects />

            {/* domains + journey */}
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <Domains />
              <JourneySnapshot />
            </div>

            {/* instrument row */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
              <TechStack />
              <ActivityHeatmap />
              <SysStatus />
              <SysQuote />
            </div>

            {/* footer line */}
            <footer
              className="flex flex-col gap-3 border-t pt-4 sm:flex-row sm:items-center sm:justify-between"
              style={{ borderColor: "var(--line)" }}
            >
              <span
                className="text-xs"
                style={{ fontFamily: "var(--font-jetbrains), monospace", color: "var(--text-muted)" }}
              >
                &gt; built with curiosity, caffeine, and a lot of logs.
              </span>
              <div className="flex items-center gap-5 text-xs">
                <a href={socials.github} target="_blank" rel="noopener noreferrer" className="link-soft">
                  GitHub
                </a>
                <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="link-soft">
                  LinkedIn
                </a>
                <a href={`mailto:${socials.email}`} className="link-soft">
                  Email
                </a>
                <span style={{ color: "var(--text-muted)" }}>© {new Date().getFullYear()}</span>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
