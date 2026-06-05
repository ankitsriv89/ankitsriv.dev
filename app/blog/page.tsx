import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Ankit Srivastava",
  description: "Long-form technical notes on distributed systems, data infrastructure, and software engineering.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="container-page py-16">
      <div className="mb-10">
        <div className="label-cyan mb-3">Blog</div>
        <h1 className="text-4xl font-bold sm:text-5xl" style={{ color: "var(--text-bright)" }}>
          Notes from the build.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7" style={{ color: "var(--text-dim)" }}>
          System design tradeoffs, data infrastructure lessons, and practical notes from building in public.
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="panel p-8 text-center">
          <p className="mono text-sm" style={{ color: "var(--text-muted)" }}>
            No posts yet. Drop an MDX file in <code className="text-cyan">content/blog/</code> to get started.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="panel block p-6 hover:no-underline">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0 flex-1">
                  <h2 className="text-xl font-semibold leading-snug" style={{ color: "var(--text-bright)" }}>
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6" style={{ color: "var(--text-dim)" }}>
                    {post.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
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
                <div className="mono shrink-0 text-xs" style={{ color: "var(--text-muted)" }}>
                  {post.date}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
