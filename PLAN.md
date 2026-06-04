# ankitsriv.dev — Personal Hub

Personal website for Ankit Srivastava. A living digital presence — not just a portfolio, but a personal OS: projects, resume, blog, timeline, certifications, RAG chatbot, and daily diary.

**Live URL:** https://ankitsriv.dev  
**Deploy:** Cloudflare Pages  
**Domain registrar:** Cloudflare

---

## Vision

A single canonical URL that aggregates everything:
- Showcase work across multiple repos and projects
- Multiple resume versions (HTML + PDF)
- Blog and daily diary (CMS-backed, git-stored)
- Interactive career timeline
- Certifications wall
- RAG chatbot — answers questions about Ankit using his own content as context

---

## Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | Next.js (App Router) | API routes for RAG chatbot; MDX for blog; SSG for everything else |
| Language | TypeScript | Type safety across site + chatbot |
| Styling | Tailwind CSS + custom CSS vars | Cyberpunk design system, easy theming |
| CMS | Keystatic | Git-based, no database, editor UI at `/keystatic` |
| Content storage | Git + MDX/JSON | Blog, diary, timeline, certs — all versioned |
| Asset storage | Cloudflare R2 | Images, PDFs, binary files only |
| Vector store | Cloudflare Vectorize | RAG embeddings |
| LLM | Claude (Anthropic API) | RAG chatbot answers |
| Deploy | Cloudflare Pages | Free tier, auto-deploy on push |
| Package manager | pnpm | Fast, disk-efficient |

---

## Phases

### Phase 1 — Foundation + Hero + Projects (current)
- [ ] Next.js + TypeScript + Tailwind scaffold
- [ ] Cyberpunk design system (CSS vars, fonts, components)
- [ ] Hero section (name, bio, social links)
- [ ] Projects section (cards linking to repos/live demos)
  - System design portfolio
  - Other repos (datastream-lab, india-findata, etc.)
- [ ] Navigation (sticky, responsive)
- [ ] Footer
- [ ] Deploy to Cloudflare Pages as `anksysdesign.pages.dev`

### Phase 2 — Resume
- [ ] Multi-version resume system (MDX files per version)
- [ ] HTML resume page with print stylesheet
- [ ] PDF export (Cloudflare Browser Rendering Worker)
- [ ] Resume switcher UI (e.g. "SWE", "ML Engineer", "Architect")

### Phase 3 — Timeline
- [ ] Interactive career/life timeline component
- [ ] Timeline entries as MDX/JSON in git
- [ ] Visual: horizontal scroll or vertical with milestones
- [ ] Cyberpunk aesthetic: glowing nodes, connecting lines

### Phase 4 — Blog + CMS
- [ ] Keystatic CMS setup
- [ ] MDX blog post rendering (syntax highlighting, images, callouts)
- [ ] Tags, categories, search
- [ ] Blog editor UI at `/keystatic`
- [ ] RSS feed

### Phase 5 — Daily Diary
- [ ] Diary entries (short-form, date-indexed MDX)
- [ ] Calendar or timeline view
- [ ] Optional: private entries (password-protected routes via Cloudflare Access)
- [ ] Linked to blog (long-form → blog, short-form → diary)

### Phase 6 — Certifications
- [ ] Certifications data in JSON
- [ ] Card grid with issuer, date, credential link
- [ ] Badge images stored in R2

### Phase 7 — RAG Chatbot
- [ ] Embedding pipeline: ingest blog, resume, timeline, project descriptions
- [ ] Cloudflare Vectorize for vector storage
- [ ] Claude API for answer generation
- [ ] Chat UI on site (floating widget or dedicated `/ask` page)
- [ ] Rate limiting via Cloudflare Workers

### Phase 8 — Polish + SEO
- [ ] Open Graph images (dynamic, generated per page)
- [ ] Sitemap + robots.txt
- [ ] Analytics (Cloudflare Web Analytics — privacy-first, free)
- [ ] Lighthouse score ≥ 95

---

## Content Model

```
content/
├── projects/
│   └── *.mdx              # project cards
├── resume/
│   ├── swe.mdx            # Software Engineer resume
│   ├── architect.mdx      # Solutions Architect resume
│   └── ml.mdx             # ML Engineer resume
├── timeline/
│   └── events.json        # [{year, title, description, type}]
├── blog/
│   └── YYYY-MM-DD-slug.mdx
├── diary/
│   └── YYYY-MM-DD.mdx
└── certifications/
    └── certs.json
```

---

## Design System

Base: cyberpunk terminal aesthetic (carried from system-design portfolio)

```
--bg:           #050810
--bg2:          #090d1a
--cyan:         #00d4ff
--green:        #00ff9d
--amber:        #ffb700
--text:         #c8d8f0
```

Fonts: Share Tech Mono (monospace), Rajdhani (headings), IBM Plex Mono (code)

Alternate themes to explore later:
- Minimal monochrome (clean, editorial)
- Glassmorphism (frosted panels, blur)
- Terminal green (classic CRT)

---

## Repo Structure

```
ankitsriv.dev/
├── app/                   # Next.js App Router
│   ├── page.tsx           # Home (hero + projects)
│   ├── resume/
│   ├── timeline/
│   ├── blog/
│   ├── diary/
│   ├── certs/
│   ├── ask/               # RAG chatbot
│   └── api/
│       ├── chat/          # RAG endpoint
│       └── resume/pdf/    # PDF generation
├── components/
│   ├── ui/                # Base components
│   ├── layout/            # Nav, footer
│   └── sections/          # Hero, Projects, etc.
├── content/               # All MDX/JSON content
├── lib/
│   ├── mdx.ts
│   ├── rag.ts
│   └── vectorize.ts
├── public/
├── styles/
│   └── globals.css        # Design system vars
├── keystatic.config.ts
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## External Links (Projects Section)

- System Design Portfolio: https://anksysdesign.pages.dev (+ future custom domain)
- datastream-lab: https://github.com/ankitsriv89/datastream-lab
- india-findata: https://github.com/ankitsriv89/india-findata
- (more added as built)

---

## Notes

- Bio: TBD — will be added to hero section once written
- All text content (blog, diary, resume) lives in git — no external CMS database
- R2 bucket: `ankitsriv-assets` — images and PDFs only
- Cloudflare Vectorize index: `ankitsriv-rag` — created in Phase 7
