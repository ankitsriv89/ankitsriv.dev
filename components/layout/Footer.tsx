export default function Footer() {
  return (
    <footer
      className="border-t mt-auto"
      style={{ background: "var(--bg2)", borderColor: "var(--border)" }}
    >
      <div className="container-page flex flex-col gap-5 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="mono text-xs" style={{ color: "var(--text-bright)" }}>
            Ankit Srivastava
          </div>
          <div className="mt-1 text-sm" style={{ color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} · Built with Next.js 16
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          {[
            { label: "GitHub", href: "https://github.com/ankitsriv89" },
            { label: "LinkedIn", href: "https://linkedin.com/in/ankitsriv89" },
            { label: "Email", href: "mailto:anksr2018@gmail.com" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="mono text-xs link-soft"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
