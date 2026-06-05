import PlaceholderPage from "@/components/sections/PlaceholderPage";

export default function Page() {
  return (
    <PlaceholderPage
      eyebrow="Blog"
      title="Long-form technical notes are queued."
      description="The blog will focus on design tradeoffs, systems experiments, and practical lessons from building the public project series."
      items={["System design writeups", "Data infrastructure lessons", "Postmortems from experiments"]}
    />
  );
}
