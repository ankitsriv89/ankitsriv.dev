import type { Metadata } from "next";
import { getCerts } from "@/lib/certs";

export const metadata: Metadata = {
  title: "Certifications — Ankit Srivastava",
  description: "Verified credentials, certifications, and focused study tracks.",
};

export default async function CertsPage() {
  const certs = await getCerts();

  return (
    <div className="container-page py-16">
      <div className="mb-10">
        <div className="label-cyan mb-3">Certifications</div>
        <h1 className="text-4xl font-bold sm:text-5xl" style={{ color: "var(--text-bright)" }}>
          Credentials.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7" style={{ color: "var(--text-dim)" }}>
          Verified training, certifications, and focused study tracks.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certs.map((cert) => (
          <article key={cert.id} className="panel flex flex-col gap-4 p-5">
            {/* Issuer badge */}
            <div className="flex items-center gap-3">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border mono text-xs font-bold"
                style={{
                  background: `${cert.badgeColor}18`,
                  borderColor: `${cert.badgeColor}44`,
                  color: cert.badgeColor,
                }}
              >
                {cert.issuerShort.slice(0, 3).toUpperCase()}
              </div>
              <div>
                <div className="mono text-xs" style={{ color: "var(--text-muted)" }}>
                  {cert.issuer}
                </div>
                <div className="mono text-xs" style={{ color: "var(--text-muted)" }}>
                  {cert.date}
                </div>
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-base font-semibold leading-snug" style={{ color: "var(--text-bright)" }}>
                {cert.name}
              </h3>
              {cert.credentialId && cert.credentialId !== "TODO" && (
                <div className="mono mt-1 text-xs" style={{ color: "var(--text-muted)" }}>
                  ID: {cert.credentialId}
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-1.5">
              {cert.tags.filter((t) => t !== "TODO").map((tag) => (
                <span
                  key={tag}
                  className="mono rounded border px-2 py-0.5 text-xs"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    borderColor: "var(--border)",
                    color: "var(--text-muted)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {cert.verifyUrl && cert.verifyUrl !== "https://example.com/verify" && (
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button-muted px-3 py-2 text-xs"
              >
                Verify credential →
              </a>
            )}
          </article>
        ))}
      </div>

      {certs.every((c) => c.name.startsWith("TODO")) && (
        <div className="mt-4 panel p-8 text-center">
          <p className="mono text-sm" style={{ color: "var(--text-muted)" }}>
            Update <code className="text-cyan">content/certifications/certs.json</code> with your certifications.
          </p>
        </div>
      )}
    </div>
  );
}
