import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { BlogMeta } from "@/types";

const blogDir = path.join(process.cwd(), "src", "content", "blog");

export function getBlogSlugs() {
  if (!fs.existsSync(blogDir)) return [];
  return fs.readdirSync(blogDir).filter((f) => f.endsWith(".md"));
}

export function getBlogPost(slug: string): BlogMeta | null {
  try {
    const filePath = path.join(blogDir, `${slug}.md`);
    if (!fs.existsSync(filePath)) return null;
    const source = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(source);
    const readTime = readingTime(source);
    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      author: data.author || "Sumit Mishra",
      category: data.category || "Uncategorized",
      tags: data.tags || [],
      image: data.image,
      readingTime: readTime.text,
    };
  } catch {
    return null;
  }
}

export function getBlogPosts(): BlogMeta[] {
  const slugs = getBlogSlugs();
  const posts = slugs
    .map((f) => getBlogPost(f.replace(/\.md$/, "")))
    .filter((p): p is BlogMeta => p !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return posts;
}

export function getBlogContent(slug: string): { content: string; meta: BlogMeta } | null {
  try {
    const filePath = path.join(blogDir, `${slug}.md`);
    if (!fs.existsSync(filePath)) return null;
    const source = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(source);
    const readTime = readingTime(source);
    return {
      content,
      meta: {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        author: data.author || "Sumit Mishra",
        category: data.category || "Uncategorized",
        tags: data.tags || [],
        image: data.image,
        readingTime: readTime.text,
      },
    };
  } catch {
    return null;
  }
}
