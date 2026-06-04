# Build Phases — ankitsriv.dev

Detailed breakdown of each phase with acceptance criteria.

---

## Phase 1 — Foundation + Hero + Projects
**Status:** 🔲 Not started  
**Deploy target:** `anksysdesign.pages.dev`

### Key versions
- Next.js 16 (latest)
- TypeScript 6
- Tailwind CSS 4
- pnpm (latest)

### Deliverables
- Next.js 16 App Router + TypeScript 6 + Tailwind CSS 4
- Cyberpunk design system (CSS vars, fonts, animations)
- Sticky responsive nav
- Hero section: name, title, bio (TBD), social links (GitHub, LinkedIn)
- Projects section: card grid, each card has name, description, tech tags, repo link, live link
- Footer
- Cloudflare Pages deploy config (`wrangler.toml`)

### Acceptance criteria
- Lighthouse performance ≥ 90 on mobile
- No hydration errors
- Responsive at 320px, 768px, 1280px, 1920px

---

## Phase 2 — Resume
**Status:** 🔲 Not started

### Deliverables
- `content/resume/` directory with one MDX file per resume version
- `/resume` page with version switcher
- HTML resume with print-optimized stylesheet (Ctrl+P → clean PDF)
- Cloudflare Browser Rendering Worker at `/api/resume/pdf?version=swe`
- Resume versions: SWE, Architect, ML Engineer (fill content over time)

### Acceptance criteria
- PDF output matches HTML layout
- Version switcher works without page reload
- Each version has its own shareable URL: `/resume/swe`, `/resume/architect`

---

## Phase 3 — Timeline
**Status:** 🔲 Not started

### Deliverables
- `content/timeline/events.json` — structured event data
- `/timeline` page with interactive visualization
- Event types: job, project, education, achievement, personal
- Cyberpunk style: glowing nodes, connecting lines, scanline overlay
- Click to expand event details

### Acceptance criteria
- Works on mobile (vertical layout) and desktop (horizontal scroll or vertical)
- Events filterable by type
- Smooth animations

---

## Phase 4 — Blog + CMS
**Status:** 🔲 Not started

### Key versions
- Keystatic `@keystatic/core` 0.5.x (latest)
- Shiki 4.x (syntax highlighting)

### Deliverables
- Keystatic CMS config (`keystatic.config.ts`)
- `/blog` listing page with cards
- `/blog/[slug]` MDX post renderer
- Syntax highlighting via Shiki 4
- Tags + category filtering
- RSS feed at `/feed.xml`
- Keystatic editor at `/keystatic` (local dev only)

### Acceptance criteria
- New post publishable by creating MDX file + git push
- Code blocks have copy button + syntax highlighting
- OG image generated per post

---

## Phase 5 — Daily Diary
**Status:** 🔲 Not started

### Deliverables
- `content/diary/` with one MDX file per day
- `/diary` page with calendar or list view
- Short-form entries (mood, what I did, links, notes)
- Optional: private entries hidden from public listing
- Link from diary entry → related blog post if expanded

### Acceptance criteria
- Calendar view shows dots on days with entries
- Readable on mobile
- Entry format is simple enough to write in 2 minutes

---

## Phase 6 — Certifications
**Status:** 🔲 Not started

### Deliverables
- `content/certifications/certs.json`
- `/certs` page with card grid
- Each card: issuer logo, cert name, date, credential ID, verify link
- Badge images in Cloudflare R2

### Acceptance criteria
- Verify link opens issuer credential page
- Images lazy-loaded
- Grid responsive

---

## Phase 7 — RAG Chatbot
**Status:** 🔲 Not started

### Key versions
- Anthropic SDK (latest)
- Cloudflare Vectorize (via `wrangler` 4.x)
- AI SDK v6 (`ai` package, latest) for streaming

### Deliverables
- Embedding pipeline script: ingests blog, resume, timeline, project descriptions → Cloudflare Vectorize
- `/api/chat` route: embed query → vector search → Claude API → stream response
- `/ask` page with chat UI
- Floating chat widget (optional toggle on all pages)
- Rate limiting via Cloudflare Workers KV
- Suggested questions seeded on load

### Acceptance criteria
- Answers questions about Ankit using only his content as context
- Streams responses
- Gracefully handles out-of-context questions
- Rate limit: 10 requests/IP/hour

---

## Phase 8 — Polish + SEO
**Status:** 🔲 Not started

### Deliverables
- Dynamic OG images (Next.js `ImageResponse`)
- `sitemap.xml` auto-generated from content
- `robots.txt`
- Cloudflare Web Analytics snippet
- Favicon + apple-touch-icon
- Lighthouse audit: performance ≥ 95, accessibility ≥ 95, SEO = 100

---

## Backlog (no phase assigned yet)
- Dark/light theme toggle (cyberpunk ↔ minimal)
- Reading list / bookmarks section
- "Now" page (what I'm working on right now)
- GitHub activity feed widget
- Speaking / appearances section
- Newsletter signup (Cloudflare Email Workers)
