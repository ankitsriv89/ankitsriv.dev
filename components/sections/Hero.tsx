import Link from "next/link";
import { profile } from "@/lib/profile";

export default function Hero() {
  return (
    <section className="px-6 md:px-12 pt-16 md:pt-24 pb-12 md:pb-16">
      <div className="measure">
        <div className="eyebrow mb-6">Hello — I&apos;m {profile.name}</div>

        <h1
          className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl"
          style={{ color: "var(--text-bright)", lineHeight: 1.08 }}
        >
          {profile.tagline}
        </h1>

        <p
          className="mt-8 text-lg leading-relaxed"
          style={{ color: "var(--text-dim)" }}
        >
          {profile.intro}
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/projects" className="button-primary">View my work</Link>
          <Link href="/resume" className="button-secondary">Read résumé</Link>
          <Link href="/ask" className="button-muted">Get in touch</Link>
        </div>
      </div>
    </section>
  );
}
