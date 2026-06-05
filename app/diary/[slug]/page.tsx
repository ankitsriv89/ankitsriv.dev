import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllDiaryEntries, getDiaryEntry } from "@/lib/diary";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllDiaryEntries().map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return { title: `${slug} — Diary — Ankit Srivastava` };
}

export default async function DiaryEntryPage({ params }: Props) {
  const { slug } = await params;
  const entry = getDiaryEntry(slug);
  if (!entry) notFound();

  return (
    <div className="container-page py-16">
      <div className="mx-auto max-w-2xl">
        <Link href="/diary" className="mono mb-8 inline-block text-xs link-soft">
          ← Diary
        </Link>

        <div className="mb-8">
          <div className="mono text-sm" style={{ color: "var(--text-muted)" }}>
            {entry.date}
          </div>
          {entry.mood && (
            <div className="mono mt-1 text-xs" style={{ color: "var(--cyan)" }}>
              mood: {entry.mood}
            </div>
          )}
        </div>

        <div className="h-px mb-8" style={{ background: "var(--border)" }} />

        <article className="prose-cyberpunk">
          <MDXRemote source={entry.content} />
        </article>
      </div>
    </div>
  );
}
