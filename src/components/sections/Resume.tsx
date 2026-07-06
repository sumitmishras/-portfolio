"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Download, FileText, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/profile";

export function Resume() {
  return (
    <section id="resume" className="relative py-24 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold">
            My <span className="gradient-text">Resume</span>
          </motion.h2>
          <motion.div variants={fadeInUp} className="mt-2 h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
          <motion.p variants={fadeInUp} className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Download my resume to learn more about my experience, skills, and achievements.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mt-10 flex flex-col items-center gap-6"
        >
          <motion.div
            variants={fadeInUp}
            className="flex h-48 w-36 items-center justify-center rounded-xl border-2 border-dashed border-border bg-card"
          >
            <FileText className="h-12 w-12 text-muted-foreground" />
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" asChild>
              <a href={personalInfo.resumeUrl} download>
                <Download className="mr-2 h-4 w-4" /> Download PDF
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer">
                <Eye className="mr-2 h-4 w-4" /> View Online
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
