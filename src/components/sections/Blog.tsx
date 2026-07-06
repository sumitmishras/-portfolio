"use client";

import { motion } from "framer-motion";
import { blogPosts } from "@/data/blog-posts";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export function Blog() {
  return (
    <section id="blog" className="relative py-24">
      <div className="absolute inset-0 bg-mesh opacity-50" />
      <div className="mx-auto max-w-6xl px-4 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold">
            Latest <span className="gradient-text-strong">Blog Posts</span>
          </motion.h2>
          <motion.div variants={fadeInUp} className="mt-3 h-1 w-20 bg-gradient-to-r from-primary via-accent to-purple-500 rounded-full mx-auto" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mt-10 grid gap-6 md:grid-cols-3"
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.slug}
              variants={fadeInUp}
              className="group rounded-xl border bg-card overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 gradient-border-card"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="aspect-video bg-gradient-to-br from-primary/10 via-accent/5 to-purple-500/10 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 group-hover:scale-110 transition-transform duration-500" />
                  <span className="text-4xl font-bold gradient-text-strong opacity-30 relative z-10">
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
                  <h3 className="font-semibold group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {post.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-gradient-to-r from-primary/10 to-accent/10 border-0">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary pt-3 border-t">
                    Read More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mt-10 text-center"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-2.5 text-sm font-medium transition-all duration-200 hover:border-primary hover:text-primary hover:shadow-glow"
          >
            View All Posts <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
