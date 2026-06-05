export type ResumeData = {
  version: string;
  label: string;
  name: string;
  title: string;
  email: string;
  github: string;
  linkedin: string;
  location: string;
  summary: string;
  experience: {
    company: string;
    role: string;
    period: string;
    location: string;
    bullets: string[];
  }[];
  skills: { domain: string; items: string[] }[];
  projects: { name: string; description: string; link: string }[];
  education: { institution: string; degree: string; year: string }[];
};

export const RESUME_VERSIONS = ["swe", "architect", "ml"] as const;
export type ResumeVersion = (typeof RESUME_VERSIONS)[number];

export async function getResume(version: ResumeVersion): Promise<ResumeData> {
  const data = await import(`@/content/resume/${version}.json`);
  return data.default as ResumeData;
}
