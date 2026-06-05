import Link from "next/link";
import { navItems, socials, identity } from "@/lib/home";

// Minimal, professional footer — present on every page.
export default function HQFooter() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="mt-auto border-t"
      style={{ borderColor: "var(--line)", background: "rgba(8, 12, 21, 0.6)" }}
    >
      <div className="container-page py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span className="dot dot--cyan" aria-hidden />
              <span className="text-sm font-semibold" style={{ color: "var(--text-bright)" }}>
                {identity.name}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--text-dim)" }}>
              {identity.tagline}
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navItems.map(({ href, label }) => (
              <Link key={href} href={href} className="link-more">
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div
          className="mt-8 flex flex-col gap-3 border-t pt-6 text-xs sm:flex-row sm:items-center sm:justify-between"
          style={{ borderColor: "var(--line)", color: "var(--text-muted)" }}
        >
          <span style={{ fontFamily: "var(--font-jetbrains), monospace" }}>
            © {year} {identity.name} · built with intent
          </span>
          <div className="flex items-center gap-5">
            <a href={socials.github} target="_blank" rel="noopener noreferrer" className="link-soft">
              GitHub
            </a>
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="link-soft">
              LinkedIn
            </a>
            <a href={`mailto:${socials.email}`} className="link-soft">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
