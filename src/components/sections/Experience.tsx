"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Briefcase, Calendar } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="relative py-24">
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
            Work <span className="gradient-text-strong">Experience</span>
          </motion.h2>
          <motion.div variants={fadeInUp} className="mt-3 h-1 w-20 bg-gradient-to-r from-primary via-accent to-purple-500 rounded-full mx-auto" />
        </motion.div>

        <div className="relative mt-12">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-purple-500/20 -translate-x-1/2" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="relative flex flex-col md:flex-row gap-6 md:gap-12"
              >
                <div className={`hidden md:flex md:w-1/2 ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                  <motion.div variants={fadeInUp} className="w-full max-w-lg">
                    <ExperienceCard exp={exp} index={index} />
                  </motion.div>
                </div>

                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-primary bg-background shadow-lg shadow-primary/25">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                </div>

                <motion.div variants={fadeInUp} className="md:w-1/2">
                  <div className="md:hidden">
                    <ExperienceCard exp={exp} index={index} />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ exp, index }: { exp: (typeof experiences)[0]; index: number }) {
  return (
    <div className="rounded-xl border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 gradient-border-card">
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
        <Calendar className="h-4 w-4 text-primary" />
        <span>{exp.duration}</span>
      </div>
      <h3 className="text-xl font-bold">{exp.role}</h3>
      <p className="text-primary font-medium">{exp.company}</p>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
      <ul className="mt-4 space-y-2">
        {exp.achievements.map((ach, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-primary to-accent" />
            {ach}
          </li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-2">
        {exp.technologies.map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center rounded-full bg-gradient-to-r from-primary/10 to-accent/10 px-2.5 py-0.5 text-xs font-medium border border-primary/10"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
