import type { Metadata } from "next";
import { getTimelineEvents } from "@/lib/timeline";
import TimelineView from "@/components/sections/TimelineView";

export const metadata: Metadata = {
  title: "Timeline — Ankit Srivastava",
  description: "Career and life timeline — jobs, projects, education, and milestones.",
};

export default async function TimelinePage() {
  const events = await getTimelineEvents();
  return <TimelineView events={events} />;
}
