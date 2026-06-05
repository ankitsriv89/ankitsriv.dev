import PlaceholderPage from "@/components/sections/PlaceholderPage";

export default function Page() {
  return (
    <PlaceholderPage
      eyebrow="Timeline"
      title="The project and career timeline is next."
      description="This page will connect the public work to the sequence of decisions, roles, experiments, and technical milestones behind it."
      items={["Career milestones", "Project launch history", "Learning roadmap"]}
    />
  );
}
