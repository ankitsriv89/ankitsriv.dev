// ─────────────────────────────────────────────────────────────
//  DEMO CONTENT — replace with your real details.
//  This is plausible scaffolding so the site looks complete.
//  Every string here is safe to edit freely.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Ankit Srivastava",
  short: "Ankit",
  tagline: "I build systems, and I think across the fields that shape them.",
  location: "Remote",
  email: "anksr2018@gmail.com",
  github: "https://github.com/ankitsriv89",
  linkedin: "https://linkedin.com/in/ankitsriv89",
  // The one-paragraph "who am I" — the heart of the page.
  intro:
    "I'm an engineer by craft and a generalist by temperament. My work lives where " +
    "software meets the systems it serves — markets, institutions, regulation, and the " +
    "people who use them. Over the years I've studied and worked across technology, " +
    "finance, economics, law, and psychology, and I've found the interesting problems " +
    "usually sit between those fields rather than inside any one of them.",
} as const;

export type DisciplineKey = "tech" | "finance" | "econ" | "law" | "psych";

export type Discipline = {
  key: DisciplineKey;
  label: string;
  accentClass: string;
  blurb: string;
  highlights: string[];
};

export const disciplines: Discipline[] = [
  {
    key: "tech",
    label: "Technology",
    accentClass: "disc-tech",
    blurb:
      "Distributed systems, data pipelines, and backend infrastructure — the engineering core I build on.",
    highlights: ["Distributed systems", "Real-time data", "Backend infra", "Go · Python · TS"],
  },
  {
    key: "finance",
    label: "Finance",
    accentClass: "disc-finance",
    blurb:
      "Markets, instruments, and the data behind them — from macro indicators to market microstructure.",
    highlights: ["Markets & instruments", "Quant data", "Risk", "Financial pipelines"],
  },
  {
    key: "econ",
    label: "Economics",
    accentClass: "disc-econ",
    blurb:
      "How incentives, institutions, and information shape outcomes at scale.",
    highlights: ["Macro & micro", "Game theory", "Incentive design", "Policy"],
  },
  {
    key: "law",
    label: "Law",
    accentClass: "disc-law",
    blurb:
      "Regulation, compliance, and the rules that govern systems and data.",
    highlights: ["Regulatory frameworks", "Data & privacy", "Compliance", "Contracts"],
  },
  {
    key: "psych",
    label: "Psychology",
    accentClass: "disc-psych",
    blurb:
      "Behavior, decision-making, and how people actually use the systems we design.",
    highlights: ["Behavioral science", "Decision-making", "UX & cognition", "Bias"],
  },
];

export const navLinks = [
  { href: "/",          label: "Home",      sub: "Start here" },
  { href: "/timeline",  label: "Path",      sub: "The journey" },
  { href: "/projects",  label: "Work",      sub: "What I've built" },
  { href: "/resume",    label: "Resume",    sub: "Experience" },
  { href: "/blog",      label: "Writing",   sub: "Essays & notes" },
  { href: "/diary",     label: "Journal",   sub: "Thinking aloud" },
  { href: "/certs",     label: "Credentials", sub: "Degrees & certs" },
  { href: "/ask",       label: "Ask",       sub: "Get in touch" },
];

// ─────────────────────────────────────────────────────────────
//  HUD DASHBOARD DATA — drives the terminal/HUD home page.
//  All demo-quality; safe to edit.
// ─────────────────────────────────────────────────────────────

export const statusIdentity = {
  user: "ankit",
  host: "portfolio",
  path: "~",
  status: "available",
} as const;

// Typed-effect words cycled after "I work across ___"
export const heroTyped = ["systems.", "markets.", "people.", "the dots."];

// The "connect the dots" manifesto (from the multidisciplinary infographic).
export const connectLines = [
  "I build systems.",
  "I study systems.",
  "I try to understand people.",
  "I care about impact.",
] as const;

export const systemInfo: { key: string; value: string }[] = [
  { key: "role",       value: "Engineer / Generalist" },
  { key: "focus",      value: "Systems × People" },
  { key: "fields",     value: "Tech · Fin · Econ · Law · Psych" },
  { key: "location",   value: "Remote" },
  { key: "status",     value: "available" },
  { key: "uptime",     value: "curious, always" },
];

export const skills: { label: string; value: number; accentClass?: string }[] = [
  { label: "Systems design",    value: 92, accentClass: "disc-tech" },
  { label: "Backend / data",    value: 88, accentClass: "disc-tech" },
  { label: "Finance & markets", value: 74, accentClass: "disc-finance" },
  { label: "Economics",         value: 70, accentClass: "disc-econ" },
  { label: "Law & policy",      value: 62, accentClass: "disc-law" },
  { label: "Behavioral / UX",   value: 66, accentClass: "disc-psych" },
];

export const stack: { label: string }[] = [
  { label: "Go" },
  { label: "Python" },
  { label: "TypeScript" },
  { label: "Kafka" },
  { label: "ClickHouse" },
  { label: "Postgres" },
  { label: "FastAPI" },
  { label: "Docker" },
  { label: "React" },
  { label: "Redis" },
  { label: "AWS" },
  { label: "SQL" },
];

// Weekly contribution-ish values for the activity sparkline (0-12 scale).
export const activity: number[] = [4, 7, 3, 8, 6, 9, 5, 11, 7, 4, 9, 6, 10, 8, 5, 7];
export const activityLabel = "build cadence · 16 wk";

export const pinnedNote = {
  quote: "The interesting problems live between the disciplines, not inside any one of them.",
  author: "— working principle",
} as const;

// Where the five fields overlap — the heart of the multidisciplinary story.
export const intersections: { pair: string; label: string; blurb: string }[] = [
  { pair: "Tech × Law",     label: "Compliance as code", blurb: "Turning regulation into enforceable system constraints." },
  { pair: "Finance × Psych", label: "Behavioral markets", blurb: "How bias and incentive move prices and people." },
  { pair: "Econ × Tech",    label: "Incentive systems",  blurb: "Designing platforms where the incentives actually align." },
  { pair: "Law × Psych",    label: "Consent & trust",    blurb: "Rules people understand, and actually act on." },
];

export const recentArticles: { title: string; tag: string; href: string }[] = [
  { title: "Why the hard problems live between disciplines", tag: "essay",          href: "/blog" },
  { title: "Reading a market like a distributed system",     tag: "finance · tech", href: "/blog" },
  { title: "Incentives are an API for human behavior",       tag: "economics",      href: "/blog" },
];
