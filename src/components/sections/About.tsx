"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/profile";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Code2, Palette, Target } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Technologies", items: personalInfo.technologies },
  { icon: Palette, label: "Interests", items: personalInfo.interests },
  { icon: Target, label: "Goals", items: personalInfo.goals },
];

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold">
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.div variants={fadeInUp} className="mt-2 h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mt-12 grid gap-8 md:grid-cols-2"
        >
          <motion.div variants={fadeInUp} className="space-y-4">
            {personalInfo.aboutParagraphs.map((para, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed">
                {para}
              </p>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-6">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="rounded-xl border bg-card p-5 transition-all duration-300 hover:shadow-md hover:border-primary/20"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <h.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">{h.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {h.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
