"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Download, ExternalLink, ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/profile";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-mesh"
    >
      <motion.div className="absolute inset-0 bg-grid" style={{ opacity }} />

      <motion.div
        className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl"
        animate={{
          x: [0, 30, -20, 10, 0],
          y: [0, -30, 20, -10, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
        animate={{
          x: [0, -20, 30, -10, 0],
          y: [0, 20, -30, 10, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-purple-500/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 0.9, 1.1, 1],
          opacity: [0.3, 0.6, 0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div style={{ y, opacity, scale }} className="relative z-10 w-full">
        <div className="mx-auto max-w-4xl px-4 text-center">


          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative group">
              <div className="h-28 w-28 md:h-36 md:w-36 rounded-full bg-gradient-to-br from-primary via-accent to-purple-500 p-[3px] rotate-0 group-hover:rotate-6 transition-transform duration-500">
                <div className="h-full w-full rounded-full bg-muted flex items-center justify-center text-4xl md:text-5xl font-bold gradient-text-strong">
                  SM
                </div>
              </div>
              <motion.div
                className="absolute -bottom-1 -right-1 h-8 w-8 rounded-full bg-green-500 border-4 border-background"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text-strong">{personalInfo.name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-4 text-lg md:text-xl text-primary font-medium"
          >
            {personalInfo.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            {personalInfo.shortBio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Button size="lg" asChild className="shadow-glow hover:shadow-xl hover:scale-105 transition-all duration-300">
              <a href="#contact">
                Hire Me <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="hover:scale-105 transition-all duration-300">
              <a href={personalInfo.resumeUrl} download>
                <Download className="mr-2 h-4 w-4" /> Resume
              </a>
            </Button>
            <Button variant="ghost" size="lg" asChild className="hover:scale-105 transition-all duration-300">
              <a href="#projects">
                View Projects <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-12 flex items-center justify-center gap-4"
          >
            {[
              { icon: GithubIcon, href: "https://github.com/sumitmishras", label: "GitHub" },
              { icon: LinkedinIcon, href: "https://linkedin.com/in/sumitmishra", label: "LinkedIn" },
              { icon: Mail, href: "mailto:cse.sumitmishra@gmail.com", label: "Email" },
            ].map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary hover:shadow-glow transition-all duration-300"
                aria-label={s.label}
              >
                <s.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground">Scroll</span>
        <div className="h-10 w-6 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
          <motion.div
            className="h-2.5 w-1.5 rounded-full bg-gradient-to-b from-primary to-accent"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
