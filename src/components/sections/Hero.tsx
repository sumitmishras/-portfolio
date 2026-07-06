"use client";

import { motion } from "framer-motion";
import { Download, ExternalLink, ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/profile";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute top-1/4 -left-32 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-4xl px-4 text-center"
      >
        <motion.div variants={fadeInUp} className="mb-6">
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            Available for opportunities
          </span>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">{personalInfo.name.split(" ")[0]}</span>
          <br />
          <span className="text-foreground">{personalInfo.title}</span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          {personalInfo.shortBio}
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Button size="lg" asChild>
            <a href="#contact">
              Hire Me <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href={personalInfo.resumeUrl} download>
              <Download className="mr-2 h-4 w-4" /> Resume
            </a>
          </Button>
          <Button variant="ghost" size="lg" asChild>
            <a href="#projects">
              View Projects <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>

        <motion.div variants={fadeInUp} className="mt-12 flex items-center justify-center gap-4">
          <a
            href="https://github.com/sumitmishra"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary hover:shadow-glow transition-all duration-300"
            aria-label="GitHub"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/sumitmishra"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary hover:shadow-glow transition-all duration-300"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a
            href="mailto:sumit.mishra@email.com"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary hover:shadow-glow transition-all duration-300"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <div className="h-8 w-5 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
            <div className="h-2 w-1 rounded-full bg-muted-foreground/50" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
