import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const BLOG_DIR = path.join(process.cwd(), "content/blogs");

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  coverImage?: string;
  tags?: string[];
  readingTime: string;
}

export interface Heading {
  id: string;
  text: string;
  level: 2 | 3;
}

export interface Post extends PostMeta {
  content: string;
  headings: Heading[];
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

// Extracts H2/H3 headings from raw markdown for the table of contents.
function extractHeadings(content: string): Heading[] {
  const lines = content.split("\n");
  const headings: Heading[] = [];
  const seen = new Map<string, number>();
  let h1Count = 0;

  for (const line of lines) {
    const match = line.match(/^(#{1,3})\s+(.*)$/);
    if (!match) continue;

    const hashes = match[1].length;
    if (hashes === 1) {
      h1Count++;
      continue; // skip H1s — the post title is already the page's H1
    }

    const level = hashes === 2 ? 2 : 3;
    const text = match[2].trim();
    let id = slugify(text);

    const count = seen.get(id) ?? 0;
    seen.set(id, count + 1);
    if (count > 0) id = `${id}-${count}`;

    headings.push({ id, text, level });
  }

  if (h1Count > 0) {
    console.warn(
      `[blog] Post has ${h1Count} stray "# " heading(s) in the body. ` +
        `These are being ignored — use "## " for section headings instead, ` +
        `since the post title already renders as the page's H1.`
    );
  }

  return headings;
}

export function getPostBySlug(slug: string): Post {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  if (!data.title || !data.date) {
    throw new Error(
      `Post "${slug}.md" is missing required frontmatter (title and/or date). ` +
        `Add a --- frontmatter block at the top of the file.`
    );
  }

  return {
    slug,
    title: data.title,
    description: data.description ?? "",
    date: data.date,
    coverImage: data.coverImage ?? null,
    tags: data.tags ?? [],
    readingTime: readingTime(content).text,
    content,
    headings: extractHeadings(content),
  };
}

export function getAllPosts(): PostMeta[] {
  return getAllSlugs()
    .map((slug) => {
      const post = getPostBySlug(slug);
      const { content, headings, ...meta } = post;
      return meta;
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}