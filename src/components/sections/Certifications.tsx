"use client";

import { motion } from "framer-motion";
import { certifications } from "@/data/certifications";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Award, ExternalLink, Verified } from "lucide-react";

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24">
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
            <span className="gradient-text-strong">Certifications</span>
          </motion.h2>
          <motion.div variants={fadeInUp} className="mt-3 h-1 w-20 bg-gradient-to-r from-primary via-accent to-purple-500 rounded-full mx-auto" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mt-10 grid gap-5 sm:grid-cols-2"
        >
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.title}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
              className="group rounded-xl border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 gradient-border-card"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
                  <Award className="h-7 w-7 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <Verified className="h-4 w-4 text-primary shrink-0" />
                  </div>
                  <p className="mt-0.5 text-sm text-muted-foreground">{cert.issuer}</p>
                  <div className="mt-2 flex items-center gap-3">
                    <span className="inline-flex items-center rounded-full bg-gradient-to-r from-primary/10 to-accent/10 px-2.5 py-0.5 text-xs font-medium border border-primary/10">
                      {cert.date}
                    </span>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
