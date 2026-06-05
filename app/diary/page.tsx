import PlaceholderPage from "@/components/sections/PlaceholderPage";

export default function Page() {
  return (
    <PlaceholderPage
      eyebrow="Diary"
      title="A build log for the work between releases."
      description="The diary will be lighter than the blog: progress notes, open questions, and small discoveries while projects evolve."
      items={["Weekly build notes", "Reading and research trails", "Decisions worth revisiting"]}
    />
  );
}
