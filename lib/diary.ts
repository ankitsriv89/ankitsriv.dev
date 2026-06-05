import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type DiaryEntry = {
  slug: string;
  date: string;
  mood?: string;
  content: string;
  published: boolean;
};

export type DiaryMeta = Omit<DiaryEntry, "content">;

const DIARY_DIR = path.join(process.cwd(), "content/diary");

export function getAllDiaryEntries(): DiaryMeta[] {
  if (!fs.existsSync(DIARY_DIR)) return [];
  return fs
    .readdirSync(DIARY_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(DIARY_DIR, file), "utf8");
      const { data } = matter(raw);
      const slug = file.replace(/\.mdx?$/, "");
      return {
        slug,
        date: data.date ?? slug,
        mood: data.mood,
        published: data.published !== false,
      };
    })
    .filter((e) => e.published)
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getDiaryEntry(slug: string): DiaryEntry | null {
  const mdx = path.join(DIARY_DIR, `${slug}.mdx`);
  const md = path.join(DIARY_DIR, `${slug}.md`);
  const filePath = fs.existsSync(mdx) ? mdx : fs.existsSync(md) ? md : null;
  if (!filePath) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    date: data.date ?? slug,
    mood: data.mood,
    content,
    published: data.published !== false,
  };
}
