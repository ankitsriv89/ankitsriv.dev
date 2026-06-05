// ─────────────────────────────────────────────────────────────
//  HOME — terminal-HUD dashboard data model (generalist edition).
//  Drives the mission-control homepage: sidebar, whoami hero,
//  system_info, featured_projects, domains, tech_stack, heatmap,
//  sys_status, recent_activity, journey, and quote panels.
//  Demo strings are safe to edit; wire counts to real content later.
// ─────────────────────────────────────────────────────────────

export const identity = {
  name: "Ankit Srivastava",
  first: "Ankit",
  user: "ankit",
  host: "hq",
  path: "~",
  status: "available" as const,
  location: "Remote",
  role: "Engineer / Generalist",
  // typed in the hero after "I build "
  typed: ["systems.", "intelligence.", "understanding.", "leverage."],
  tagline: "I build systems, study how they behave, and connect ideas across disciplines.",
  currently: ["building", "shipping", "learning"],
  // a few "whoami" descriptors shown as a list in the hero
  descriptors: [
    "systems thinker",
    "backend engineer",
    "lifelong learner",
    "generalist",
    "pattern hunter",
  ],
} as const;

// ── SIDEBAR NAV — numbered rail (01–08), like the reference HUD ──
export type NavItem = {
  n: string;
  label: string;
  sub: string;
  href: string;
  icon: string; // simple glyph; rendered in the rail
  soon?: boolean;
};

export const navItems: NavItem[] = [
  { n: "01", label: "home", sub: "overview", href: "/", icon: "▸" },
  { n: "02", label: "resume", sub: "experience", href: "/resume", icon: "▤" },
  { n: "03", label: "projects", sub: "work", href: "/projects", icon: "◆" },
  { n: "04", label: "timeline", sub: "journey", href: "/timeline", icon: "⋔" },
  { n: "05", label: "blog", sub: "thoughts", href: "/blog", icon: "✎" },
  { n: "06", label: "diary", sub: "journal", href: "/diary", icon: "❏" },
  { n: "07", label: "certs", sub: "credentials", href: "/certs", icon: "✦" },
  { n: "08", label: "ask", sub: "let's talk", href: "/ask", icon: "✆" },
];

// the "$ cat about.txt" lines in the sidebar footer panel
export const aboutTxt = [
  "Systems thinker.",
  "Backend engineer.",
  "Multidisciplinary.",
  "Problem solver.",
];

// ── SYSTEM_INFO — right-rail instrument panel ──
export const systemInfo: { key: string; value: string; accent?: "emerald" | "cyan" | "amber" }[] = [
  { key: "role", value: "Engineer / Generalist" },
  { key: "focus", value: "Systems × People" },
  { key: "domains", value: "Eng·AI·Econ·Fin·Law·Psych" },
  { key: "location", value: "Remote" },
  { key: "status", value: "available", accent: "emerald" },
  { key: "uptime", value: "curious, always" },
];

// ── RECENT_ACTIVITY — git-log-style feed ──
export const recentActivity: { hash: string; msg: string; when: string }[] = [
  { hash: "a7f3c9e", msg: "essay: hard problems live between disciplines", when: "2h ago" },
  { hash: "3b1d7aa", msg: "feat: india-findata RBI + NSE ingestion", when: "1d ago" },
  { hash: "d9e2f44", msg: "notes: incentives as an API for behavior", when: "2d ago" },
  { hash: "7c8a1e2", msg: "build: rate limiter from scratch (write-up)", when: "4d ago" },
  { hash: "0fe9b21", msg: "study: consent & data-privacy as constraints", when: "6d ago" },
];

// ── FEATURED PROJECTS — mixed external/internal links ──
export type FeaturedProject = {
  slug: string;
  name: string;
  domainKey: DomainKey;
  domainLabel: string;
  description: string;
  tags: string[];
  status: "live" | "building" | "research";
  count?: string;          // e.g. "50 systems"
  linkType: "external" | "internal";
  href: string;            // external URL or internal /projects/<slug>
};

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "system-design",
    name: "System Design Lab",
    domainKey: "engineering",
    domainLabel: "Engineering",
    description:
      "50 distributed systems built from scratch — rate limiters, caches, queues, consensus — each with notes and working code.",
    tags: ["Go", "Distributed", "50 builds"],
    status: "live",
    count: "50 systems",
    linkType: "external",
    href: "https://anksysdesign.pages.dev",
  },
  {
    slug: "india-findata",
    name: "India FinData",
    domainKey: "finance",
    domainLabel: "Finance",
    description:
      "Macro & markets data pipeline ingesting RBI, MOSPI, NSE and BSE into a clean analytical layer.",
    tags: ["Python", "FastAPI", "Markets"],
    status: "building",
    linkType: "external",
    href: "https://github.com/ankitsriv89/india-findata",
  },
  {
    slug: "incentive-lab",
    name: "Incentive Lab",
    domainKey: "economics",
    domainLabel: "Economics",
    description:
      "Runnable simulations of how incentives and information asymmetry shape market outcomes.",
    tags: ["Simulation", "Game theory"],
    status: "research",
    linkType: "internal",
    href: "/projects",
  },
];

// ── DOMAINS — generalist strength panel (NO % bars; counts + status) ──
export type DomainKey =
  | "engineering"
  | "ai"
  | "economics"
  | "finance"
  | "psychology"
  | "law";

export type Domain = {
  key: DomainKey;
  label: string;
  accentClass: string;
  projects: number;
  notes: number;
  state: "active" | "study" | "exploring";
};

export const domains: Domain[] = [
  { key: "engineering", label: "Engineering", accentClass: "disc-tech", projects: 12, notes: 8, state: "active" },
  { key: "ai", label: "AI", accentClass: "disc-ai", projects: 4, notes: 9, state: "active" },
  { key: "finance", label: "Finance", accentClass: "disc-finance", projects: 3, notes: 5, state: "active" },
  { key: "economics", label: "Economics", accentClass: "disc-econ", projects: 2, notes: 6, state: "study" },
  { key: "psychology", label: "Psychology", accentClass: "disc-psych", projects: 1, notes: 4, state: "exploring" },
  { key: "law", label: "Law", accentClass: "disc-law", projects: 1, notes: 3, state: "exploring" },
];

export const stateMeta: Record<Domain["state"], { label: string; color: string }> = {
  active: { label: "active", color: "var(--emerald)" },
  study: { label: "studying", color: "var(--amber)" },
  exploring: { label: "exploring", color: "var(--cyan)" },
};

// ── TECH_STACK — logos/labels ──
export const techStack: string[] = [
  "Go", "Python", "TypeScript", "Kafka", "ClickHouse", "Postgres",
  "FastAPI", "Docker", "React", "Redis", "AWS", "SQL",
];

// ── ACTIVITY_HEATMAP — contribution-style grid (weeks × days) ──
// Deterministic pseudo-data so SSR and client match (no hydration drift).
export function buildHeatmap(weeks = 26, days = 7): number[][] {
  const grid: number[][] = [];
  let seed = 1337;
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  for (let w = 0; w < weeks; w++) {
    const col: number[] = [];
    for (let d = 0; d < days; d++) {
      const r = rand();
      // weight toward lower values, occasional spikes
      col.push(r > 0.82 ? 4 : r > 0.62 ? 3 : r > 0.4 ? 2 : r > 0.18 ? 1 : 0);
    }
    grid.push(col);
  }
  return grid;
}

export const heatmapMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

// ── SYS_STATUS — sparkline metrics ──
export const sysStatus: { key: string; value: string; spark: number[] }[] = [
  { key: "shipped", value: "37 wk", spark: [3, 5, 2, 6, 4, 7, 5, 8] },
  { key: "reading", value: "12 bk", spark: [2, 3, 4, 3, 5, 4, 6, 5] },
  { key: "writing", value: "08 mo", spark: [1, 2, 1, 3, 2, 4, 3, 4] },
  { key: "learning", value: "∞", spark: [4, 5, 4, 6, 5, 7, 6, 8] },
];

export const sysQuote = {
  text: "The interesting problems live between the disciplines, not inside any one of them.",
  author: "working principle",
} as const;

export const socials = {
  github: "https://github.com/ankitsriv89",
  linkedin: "https://linkedin.com/in/ankitsriv89",
  email: "anksr2018@gmail.com",
} as const;
