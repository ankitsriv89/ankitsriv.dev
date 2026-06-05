import ResumeView from "@/components/sections/ResumeView";
import { getResume, RESUME_VERSIONS } from "@/lib/resume";
import type { ResumeVersion, ResumeData } from "@/lib/resume";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume — Ankit Srivastava",
  description: "Software engineer resume — distributed systems, data pipelines, backend infrastructure.",
};

export default async function ResumePage() {
  const all = Object.fromEntries(
    await Promise.all(
      RESUME_VERSIONS.map(async (v) => [v, await getResume(v)])
    )
  ) as Record<ResumeVersion, ResumeData>;

  return <ResumeView initial={all.swe} all={all} />;
}
