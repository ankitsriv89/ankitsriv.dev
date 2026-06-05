import Link from "next/link";
import FeaturedProjects from "./FeaturedProjects";
import SystemInfo from "./SystemInfo";
import Skills from "./Skills";
import Stack from "./Stack";
import Activity from "./Activity";
import RecentArticles from "./RecentArticles";
import PinnedNote from "./PinnedNote";
import AsciiPanel from "./AsciiPanel";
import Intersections from "./Intersections";
import { profile } from "@/lib/profile";

function ContactRow() {
  return (
    <div className="panel-hud p-4">
      <div className="panel-head">contact</div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        {[
          { label: "Email", href: `mailto:${profile.email}` },
          { label: "GitHub", href: profile.github },
          { label: "LinkedIn", href: profile.linkedin },
          { label: "Ask me anything", href: "/ask" },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="mono text-[0.66rem]"
            style={{ color: "var(--cyan-bright)" }}
          >
            {label} →
          </a>
        ))}
      </div>
    </div>
  );
}

export default function DashboardGrid() {
  return (
    <section
      className="px-5 md:px-8 pb-12 pt-2"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        {/* Featured projects span 2 cols on desktop */}
        <div className="lg:col-span-2 flex flex-col gap-3">
          <FeaturedProjects />
          <Intersections />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Skills />
            <div className="flex flex-col gap-3">
              <Stack />
              <Activity />
            </div>
          </div>
        </div>

        {/* Right rail */}
        <div className="flex flex-col gap-3">
          <SystemInfo />
          <RecentArticles />
          <PinnedNote />
          <AsciiPanel />
        </div>

        {/* Full-width contact row */}
        <div className="lg:col-span-3">
          <ContactRow />
        </div>
      </div>

      {/* Latest commit footer */}
      <div
        className="mt-3 flex items-center gap-3 px-4 py-2.5 rounded mono text-[0.6rem]"
        style={{ border: "1px solid var(--border)", background: "rgba(255,255,255,0.02)" }}
      >
        <span style={{ color: "var(--cyan-bright)" }}>⬡</span>
        <span style={{ color: "var(--text-muted)" }}>latest:</span>
        <Link href="/timeline" style={{ color: "var(--text-dim)" }}>
          shipped the multidisciplinary HUD — connecting the dots across five fields
        </Link>
        <span className="ml-auto shrink-0" style={{ color: "var(--text-muted)" }}>now</span>
      </div>
    </section>
  );
}
