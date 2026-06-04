import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export → produces an `out/` directory of plain HTML for Cloudflare Pages.
  // Valid while the whole site is static (Phases 1–6). Revisit at Phase 7 (chatbot API)
  // when we pick Option 2 (next-on-pages adapter) vs Option 3 (separate Worker API).
  output: "export",
  // Static export cannot run the server-side image optimizer.
  images: { unoptimized: true },
  // Emit /route/index.html so Cloudflare serves clean URLs without a trailing-slash redirect.
  trailingSlash: true,
};

export default nextConfig;
