import PlaceholderPage from "@/components/sections/PlaceholderPage";

export default function Page() {
  return (
    <PlaceholderPage
      eyebrow="Ask"
      title="A small Q&A surface is coming."
      description="This will collect thoughtful answers about engineering, learning in public, and current project decisions."
      items={["Project-specific questions", "Short engineering notes", "A searchable answer archive"]}
    />
  );
}
