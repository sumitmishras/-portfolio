"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { projects, projectCategories } from "@/data/projects";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { ExternalLink, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const filtered = projects.filter((p) => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 340;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section id="projects" className="relative py-24">
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
            Featured <span className="gradient-text-strong">Projects</span>
          </motion.h2>
          <motion.div variants={fadeInUp} className="mt-3 h-1 w-20 bg-gradient-to-r from-primary via-accent to-purple-500 rounded-full mx-auto" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mt-10 flex flex-col items-center gap-4"
        >
          <div className="flex flex-wrap justify-center gap-2">
            {projectCategories.map((cat) => (
              <motion.button
                key={cat}
                variants={fadeInUp}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200",
                  activeCategory === cat
                    ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/25"
                    : "bg-card text-muted-foreground border border-border hover:border-primary/30"
                )}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </motion.div>

        <div className="relative mt-10 group">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-background/80 backdrop-blur border shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory [-webkit-overflow-scrolling:touch] scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {filtered.map((project) => (
              <div
                key={project.id}
                className="min-w-[300px] md:min-w-[340px] snap-start"
              >
                <div className="group/card rounded-xl border bg-card overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 gradient-border-card h-full">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 via-accent/5 to-purple-500/10 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 group-hover/card:scale-110 transition-transform duration-500" />
                    <span className="text-5xl font-bold gradient-text-strong opacity-30 relative z-10">
                      {project.title.charAt(0)}
                    </span>
                  </div>

                  <div className="p-5">
                    <Badge variant="secondary" className="mb-2 bg-gradient-to-r from-primary/10 to-accent/10 text-primary border-0">
                      {project.category}
                    </Badge>
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                      {project.description}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center rounded-full bg-muted px-2 py-0.5 text-xs border"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-xs text-muted-foreground">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    <div className="mt-4 flex gap-3 pt-3 border-t">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" /> Code
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" /> Live
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-background/80 backdrop-blur border shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {filtered.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-10 text-center text-muted-foreground"
          >
            No projects found. Try a different search or category.
          </motion.p>
        )}
      </div>
    </section>
  );
}
