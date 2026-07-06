"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold">
            Work <span className="gradient-text">Experience</span>
          </motion.h2>
          <motion.div variants={fadeInUp} className="mt-2 h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
        </motion.div>

        <div className="relative mt-12">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-transparent -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden md:flex md:w-1/2 items-start justify-center">
                  <motion.div
                    variants={fadeInUp}
                    className={`w-full ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}
                  >
                    {index % 2 === 0 && (
                      <div className="inline-block text-left">
                        <ExperienceCard exp={exp} />
                      </div>
                    )}
                  </motion.div>
                </div>

                <div className="hidden md:flex relative items-start justify-center">
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 z-10">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-background">
                      <Briefcase className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                </div>

                <motion.div variants={fadeInUp} className="md:w-1/2">
                  {index % 2 !== 0 && (
                    <div className="hidden md:block">
                      <ExperienceCard exp={exp} />
                    </div>
                  )}
                  <div className="md:hidden">
                    <ExperienceCard exp={exp} />
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

function ExperienceCard({ exp }: { exp: (typeof experiences)[0] }) {
  return (
    <div className="rounded-xl border bg-card p-6 transition-all duration-300 hover:shadow-md hover:border-primary/20">
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
        <Briefcase className="h-4 w-4 text-primary" />
        <span>{exp.duration}</span>
      </div>
      <h3 className="text-xl font-bold">{exp.role}</h3>
      <p className="text-primary font-medium">{exp.company}</p>
      <p className="mt-3 text-sm text-muted-foreground">{exp.description}</p>
      <ul className="mt-4 space-y-2">
        {exp.achievements.map((ach, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            {ach}
          </li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-2">
        {exp.technologies.map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
