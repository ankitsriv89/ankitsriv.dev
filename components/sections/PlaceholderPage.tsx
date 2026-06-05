type PlaceholderPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: string[];
};

export default function PlaceholderPage({
  eyebrow,
  title,
  description,
  items,
}: PlaceholderPageProps) {
  return (
    <section className="container-page py-20 md:py-24">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(18rem,0.45fr)]">
        <div>
          <span className="label-cyan">{eyebrow}</span>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold md:text-6xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8" style={{ color: "var(--text-dim)" }}>
            {description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="/projects" className="button-primary">
              View projects
            </a>
            <a href="mailto:anksr2018@gmail.com" className="button-muted">
              Email Ankit
            </a>
          </div>
        </div>

        <aside className="panel p-5">
          <div className="label-cyan">Coming next</div>
          <ul className="mt-5 grid gap-4">
            {items.map((item) => (
              <li key={item} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ background: "var(--cyan)" }}
                />
                <span style={{ color: "var(--text-dim)" }}>{item}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
