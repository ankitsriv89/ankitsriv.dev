"use client";

import { useState } from "react";
import type { ResumeData, ResumeVersion } from "@/lib/resume";
import { RESUME_VERSIONS } from "@/lib/resume";

const VERSION_LABELS: Record<ResumeVersion, string> = {
  swe: "Software Engineer",
  architect: "Solutions Architect",
  ml: "ML Engineer",
};

export default function ResumeView({
  initial,
  all,
}: {
  initial: ResumeData;
  all: Record<ResumeVersion, ResumeData>;
}) {
  const [active, setActive] = useState<ResumeVersion>(initial.version as ResumeVersion);
  const resume = all[active];

  return (
    <div className="container-page py-16">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between print:hidden">
        <div>
          <div className="label-cyan mb-2">Resume</div>
          <h1 className="text-4xl font-bold" style={{ color: "var(--text-bright)" }}>
            {resume.name}
          </h1>
          <p className="mono mt-1 text-sm" style={{ color: "var(--text-dim)" }}>
            {resume.title}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {RESUME_VERSIONS.map((v) => (
            <button
              key={v}
              onClick={() => setActive(v)}
              className="mono rounded-md border px-3 py-2 text-xs transition-all"
              style={{
                background: active === v ? "rgba(63,215,255,0.12)" : "rgba(255,255,255,0.03)",
                borderColor: active === v ? "rgba(63,215,255,0.52)" : "var(--border)",
                color: active === v ? "var(--cyan)" : "var(--text-dim)",
              }}
            >
              {VERSION_LABELS[v]}
            </button>
          ))}
          <button
            onClick={() => window.print()}
            className="button-muted ml-2 px-3 py-2 text-xs"
          >
            Print / PDF
          </button>
        </div>
      </div>

      {/* Print header (hidden on screen) */}
      <div className="mb-6 hidden print:block">
        <h1 className="text-3xl font-bold">{resume.name}</h1>
        <p className="text-base">{resume.title}</p>
        <div className="mt-1 flex gap-4 text-sm">
          <span>{resume.email}</span>
          <span>{resume.location}</span>
          <span>{resume.github}</span>
          <span>{resume.linkedin}</span>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_18rem]">
        {/* Main column */}
        <div className="flex flex-col gap-8">
          {/* Summary */}
          <section>
            <SectionHeader label="Summary" />
            <p className="mt-4 leading-7" style={{ color: "var(--text)" }}>
              {resume.summary}
            </p>
          </section>

          {/* Experience */}
          <section>
            <SectionHeader label="Experience" />
            <div className="mt-4 flex flex-col gap-6">
              {resume.experience.map((job, i) => (
                <div key={i} className="panel p-5">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <div className="text-lg font-semibold" style={{ color: "var(--text-bright)" }}>
                        {job.role}
                      </div>
                      <div className="mono text-sm" style={{ color: "var(--cyan)" }}>
                        {job.company}
                      </div>
                    </div>
                    <div className="mono text-xs" style={{ color: "var(--text-muted)" }}>
                      {job.period} · {job.location}
                    </div>
                  </div>
                  <ul className="mt-3 flex flex-col gap-1.5 pl-4">
                    {job.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="relative text-sm leading-6"
                        style={{ color: "var(--text-dim)" }}
                      >
                        <span
                          className="absolute -left-3 top-2.5 h-1 w-1 rounded-full"
                          style={{ background: "var(--cyan-dim)" }}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section>
            <SectionHeader label="Projects" />
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {resume.projects.map((p) => (
                <a
                  key={p.name}
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="panel block p-4 hover:no-underline"
                >
                  <div className="text-sm font-semibold" style={{ color: "var(--text-bright)" }}>
                    {p.name}
                  </div>
                  <div className="mt-1 text-xs leading-5" style={{ color: "var(--text-dim)" }}>
                    {p.description}
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <SectionHeader label="Education" />
            <div className="mt-4 flex flex-col gap-3">
              {resume.education.map((e, i) => (
                <div key={i} className="panel p-4">
                  <div className="text-sm font-semibold" style={{ color: "var(--text-bright)" }}>
                    {e.degree}
                  </div>
                  <div className="mono mt-0.5 text-xs" style={{ color: "var(--text-dim)" }}>
                    {e.institution} · {e.year}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="flex flex-col gap-6">
          {/* Contact */}
          <div className="panel p-5">
            <SectionHeader label="Contact"  />
            <div className="mt-4 flex flex-col gap-3">
              <ContactItem label="Email" value={resume.email} href={`mailto:${resume.email}`} />
              <ContactItem label="GitHub" value="ankitsriv89" href={resume.github} />
              <ContactItem label="LinkedIn" value="ankitsriv89" href={resume.linkedin} />
              <ContactItem label="Location" value={resume.location} />
            </div>
          </div>

          {/* Skills */}
          <div className="panel p-5">
            <SectionHeader label="Skills"  />
            <div className="mt-4 flex flex-col gap-4">
              {resume.skills.map((s) => (
                <div key={s.domain}>
                  <div className="label-cyan mb-2">{s.domain}</div>
                  <div className="flex flex-wrap gap-1.5">
                    {s.items.map((item) => (
                      <span
                        key={item}
                        className="mono rounded border px-2 py-0.5 text-xs"
                        style={{
                          background: "rgba(255,255,255,0.03)",
                          borderColor: "var(--border)",
                          color: "var(--text-dim)",
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function SectionHeader({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="label-cyan">{label}</span>
      <div className="section-rule" />
    </div>
  );
}

function ContactItem({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div>
      <div className="label-cyan text-[0.65rem]">{label}</div>
      {href ? (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="mt-0.5 block text-sm link-soft"
        >
          {value}
        </a>
      ) : (
        <div className="mt-0.5 text-sm" style={{ color: "var(--text-dim)" }}>
          {value}
        </div>
      )}
    </div>
  );
}
