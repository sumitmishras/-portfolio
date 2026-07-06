"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export default function BlogPage() {
  const [search, setSearch] = useState("");

  const filtered = blogPosts.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center"
        >
          <motion.h1 variants={fadeInUp} className="text-4xl font-bold">
            <span className="gradient-text">Blog</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Thoughts, tutorials, and insights on web development, TypeScript, and modern technologies.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mt-8 relative max-w-md mx-auto"
        >
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search posts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((post) => (
            <motion.article
              key={post.slug}
              variants={fadeInUp}
              className="group rounded-xl border bg-card overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/20"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <span className="text-3xl font-bold gradient-text opacity-50">
                    {post.title.charAt(0)}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {post.readingTime}
                    </span>
                  </div>
                  <h2 className="font-semibold group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {post.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary">
                    Read More <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-muted-foreground">
            No posts found. Try a different search term.
          </p>
        )}
      </div>
    </div>
  );
}
