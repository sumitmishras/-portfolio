"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills, skillCategories } from "@/data/skills";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

const categoryIcons: Record<string, string> = {
  Frontend: "🎨",
  Backend: "⚙️",
  Database: "🗄️",
  Cloud: "☁️",
  Tools: "🛠️",
};

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("Frontend");

  const filteredSkills = skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="relative py-24">
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
            Skills & <span className="gradient-text-strong">Expertise</span>
          </motion.h2>
          <motion.div variants={fadeInUp} className="mt-3 h-1 w-20 bg-gradient-to-r from-primary via-accent to-purple-500 rounded-full mx-auto" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          {skillCategories.map((cat) => (
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
              {categoryIcons[cat]} {cat}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl border bg-card p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 gradient-border-card"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold">{skill.name}</span>
                  <span className="text-sm font-medium text-primary">{skill.proficiency}%</span>
                </div>
                <div className="h-2.5 rounded-full bg-muted overflow-hidden p-[1px]">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.proficiency}%` }}
                    transition={{ duration: 1.2, delay: i * 0.05, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-primary via-accent to-purple-500"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
