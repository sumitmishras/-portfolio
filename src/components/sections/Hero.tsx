"use client";

import { motion } from "framer-motion";
import { Download, ExternalLink, ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/profile";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const floatingShapes = [
  { size: 60, x: "10%", y: "20%", delay: 0, duration: 6, color: "bg-primary/20" },
  { size: 40, x: "85%", y: "15%", delay: 1, duration: 7, color: "bg-accent/20" },
  { size: 30, x: "75%", y: "70%", delay: 2, duration: 5, color: "bg-purple-500/20" },
  { size: 50, x: "20%", y: "75%", delay: 0.5, duration: 8, color: "bg-primary/15" },
  { size: 25, x: "50%", y: "10%", delay: 1.5, duration: 6, color: "bg-accent/15" },
  { size: 35, x: "90%", y: "45%", delay: 0.8, duration: 7, color: "bg-indigo-500/15" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-mesh"
    >
      <div className="absolute inset-0 bg-grid" />

      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${shape.color} blur-xl`}
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
          }}
          animate={{
            y: [0, -20, 0, 15, 0],
            x: [0, 10, -10, 5, 0],
            scale: [1, 1.1, 0.95, 1.05, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-primary/5 via-accent/5 to-purple-500/5 blur-3xl" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-4xl px-4 text-center"
      >
        <motion.div variants={fadeInUp} className="mb-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary shadow-sm">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            Available for opportunities
          </span>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <div className="h-28 w-28 md:h-36 md:w-36 rounded-full bg-gradient-to-br from-primary via-accent to-purple-500 p-[3px]">
              <div className="h-full w-full rounded-full bg-muted flex items-center justify-center text-4xl md:text-5xl font-bold gradient-text-strong">
                SM
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-green-500 border-4 border-background" />
          </div>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text-strong">{personalInfo.name}</span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="mt-4 text-lg md:text-xl text-primary font-medium"
        >
          {personalInfo.title}
        </motion.p>

        <motion.p
          variants={fadeInUp}
          className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          {personalInfo.shortBio}
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Button size="lg" asChild className="shadow-glow">
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
            href="https://github.com/sumitmishras"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary hover:shadow-glow hover:-translate-y-1 transition-all duration-300"
            aria-label="GitHub"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/sumitmishra"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary hover:shadow-glow hover:-translate-y-1 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a
            href="mailto:cse.sumitmishra@gmail.com"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary hover:shadow-glow hover:-translate-y-1 transition-all duration-300"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-muted-foreground">Scroll to explore</span>
            <div className="h-10 w-6 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
              <motion.div
                className="h-2.5 w-1.5 rounded-full bg-gradient-to-b from-primary to-accent"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
