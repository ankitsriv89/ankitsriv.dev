import PlaceholderPage from "@/components/sections/PlaceholderPage";

export default function Page() {
  return (
    <PlaceholderPage
      eyebrow="Resume"
      title="Experience details are being organized."
      description="This route will present a concise engineering resume with systems work, core skills, project depth, and contact paths."
      items={["Experience timeline", "Skills by domain", "Downloadable resume"]}
    />
  );
}
