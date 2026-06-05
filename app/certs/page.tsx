import PlaceholderPage from "@/components/sections/PlaceholderPage";

export default function Page() {
  return (
    <PlaceholderPage
      eyebrow="Certs"
      title="Credentials and coursework will live here."
      description="This page will become a compact record of verified training, certifications, and focused study tracks."
      items={["Cloud and platform certifications", "Relevant coursework", "Verification links"]}
    />
  );
}
