import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPost } from "@/lib/blog";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Ankit Srivastava`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <div className="container-page py-16">
      <div className="mx-auto max-w-3xl">
        {/* Back */}
        <Link href="/blog" className="mono mb-8 inline-block text-xs link-soft">
          ← Blog
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="mono mb-3 text-xs" style={{ color: "var(--text-muted)" }}>
            {post.date}
          </div>
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl" style={{ color: "var(--text-bright)" }}>
            {post.title}
          </h1>
          {post.description && (
            <p className="mt-4 text-lg leading-7" style={{ color: "var(--text-dim)" }}>
              {post.description}
            </p>
          )}
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
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
        </div>

        <div className="h-px mb-10" style={{ background: "var(--border)" }} />

        {/* Content */}
        <article className="prose-cyberpunk">
          <MDXRemote
            source={post.content}
            options={{
              mdxOptions: {
                rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
              },
            }}
          />
        </article>
      </div>
    </div>
  );
}
