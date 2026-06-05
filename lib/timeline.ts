export type TimelineEvent = {
  id: string;
  year: number;
  month: string;
  title: string;
  description: string;
  type: "job" | "project" | "education" | "achievement" | "personal";
  link: string | null;
};

export async function getTimelineEvents(): Promise<TimelineEvent[]> {
  const data = await import("@/content/timeline/events.json");
  return (data.default as TimelineEvent[]).sort((a, b) => b.year - a.year);
}
