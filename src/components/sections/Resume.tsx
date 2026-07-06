"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Download, FileText, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/profile";

export function Resume() {
  return (
    <section id="resume" className="relative py-24">
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
            My <span className="gradient-text-strong">Resume</span>
          </motion.h2>
          <motion.div variants={fadeInUp} className="mt-3 h-1 w-20 bg-gradient-to-r from-primary via-accent to-purple-500 rounded-full mx-auto" />
          <motion.p variants={fadeInUp} className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Download my resume to learn more about my skills, experience, and qualifications.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mt-10 flex flex-col items-center gap-8"
        >
          <motion.div
            variants={fadeInUp}
            className="flex h-56 w-40 items-center justify-center rounded-2xl border-2 border-dashed border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5 relative group cursor-pointer hover:shadow-glow transition-all duration-300"
          >
            <FileText className="h-14 w-14 text-primary/40 group-hover:text-primary/60 transition-colors" />
            <div className="absolute -top-3 -right-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent text-white text-xs font-bold shadow-lg">
                PDF
              </span>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" asChild className="shadow-glow">
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
