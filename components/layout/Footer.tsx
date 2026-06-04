export default function Footer() {
  return (
    <footer
      className="border-t mt-auto"
      style={{ background: "var(--bg2)", borderColor: "var(--border)" }}
    >
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <span className="mono text-xs" style={{ color: "var(--text-dim)" }}>
          © {new Date().getFullYear()} ANKIT SRIVASTAVA
        </span>
        <div className="flex items-center gap-4">
          {[
            { label: "GITHUB",   href: "https://github.com/ankitsriv89" },
            { label: "LINKEDIN", href: "https://linkedin.com/in/ankitsriv89" },
            { label: "EMAIL",    href: "mailto:anksr2018@gmail.com" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="mono text-xs tracking-widest footer-link"
            >
              {label}
            </a>
          ))}
        </div>
        <span className="mono text-xs" style={{ color: "var(--text-dim)" }}>
          BUILT WITH NEXT.JS 16 + CLOUDFLARE
        </span>
      </div>
    </footer>
  );
}
