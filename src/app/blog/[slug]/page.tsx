import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogContent, getBlogSlugs } from "@/lib/blog";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ShareButton } from "@/components/forms/ShareButton";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getBlogSlugs();
  return slugs.map((s) => ({ slug: s.replace(/\.md$/, "") }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogContent(slug);
  if (!post) return {};
  return {
    title: post.meta.title,
    description: post.meta.description,
    openGraph: {
      title: post.meta.title,
      description: post.meta.description,
      type: "article",
      publishedTime: post.meta.date,
      authors: [post.meta.author],
      tags: post.meta.tags,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogContent(slug);

  if (!post) notFound();

  const { meta, content } = post;

  return (
    <article className="pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-4">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>

        <header>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge>{meta.category}</Badge>
            {meta.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold">{meta.title}</h1>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" /> {meta.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" /> {meta.readingTime}
            </span>
            <span>By {meta.author}</span>
          </div>
        </header>

        <div className="mt-10 prose prose-sm dark:prose-invert max-w-none">
          {content.split("\n").map((line, i) => {
            if (line.startsWith("# ")) return <h1 key={i}>{line.slice(2)}</h1>;
            if (line.startsWith("## ")) return <h2 key={i}>{line.slice(3)}</h2>;
            if (line.startsWith("### ")) return <h3 key={i}>{line.slice(4)}</h3>;
            if (line.startsWith("```")) return null;
            if (line.startsWith("- **")) {
              const match = line.match(/- \*\*(.+?)\*\*(.+)/);
              if (match)
                return (
                  <p key={i}>
                    <strong>{match[1]}</strong>
                    {match[2]}
                  </p>
                );
            }
            if (line.startsWith("- ")) return <li key={i}>{line.slice(2)}</li>;
            if (line.startsWith("```")) return null;
            if (line.trim() === "") return <br key={i} />;
            return <p key={i}>{line}</p>;
          })}
        </div>

        <div className="mt-10 pt-6 border-t flex items-center justify-between">
          <div className="flex gap-2">
            {meta.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <ShareButton title={meta.title} url={`/blog/${meta.slug}`} />
        </div>
      </div>
    </article>
  );
}
