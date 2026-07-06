"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/profile";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Code2, Palette, Target, Sparkles } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Technologies", items: personalInfo.technologies, color: "from-blue-500 to-cyan-500" },
  { icon: Palette, label: "Interests", items: personalInfo.interests, color: "from-purple-500 to-pink-500" },
  { icon: Target, label: "Goals", items: personalInfo.goals, color: "from-amber-500 to-orange-500" },
];

export function About() {
  return (
    <section id="about" className="relative py-24">
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
            About <span className="gradient-text-strong">Me</span>
          </motion.h2>
          <motion.div variants={fadeInUp} className="mt-3 h-1 w-20 bg-gradient-to-r from-primary via-accent to-purple-500 rounded-full mx-auto" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mt-12 grid gap-8 md:grid-cols-2"
        >
          <motion.div variants={fadeInUp} className="space-y-5">
            <div className="rounded-2xl border bg-card p-6 md:p-8 shadow-card hover:shadow-glow transition-shadow duration-300 gradient-border-card">
              {personalInfo.aboutParagraphs.map((para, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">
                  {para}
                </p>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-5">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="rounded-xl border bg-card p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 gradient-border-card"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${h.color}`}>
                    <h.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg">{h.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {h.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center rounded-full bg-gradient-to-r from-primary/10 to-accent/10 px-3 py-1 text-xs font-medium border border-primary/10"
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
