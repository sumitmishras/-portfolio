"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Mail, MapPin, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { personalInfo } from "@/data/profile";
import { ContactForm } from "@/components/forms/ContactForm";

const contactDetails = [
  { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: Phone, label: "Phone", value: personalInfo.phone },
  { icon: MapPin, label: "Location", value: personalInfo.location },
  { icon: GithubIcon, label: "GitHub", value: "github.com/sumitmishras", href: "https://github.com/sumitmishras" },
  { icon: LinkedinIcon, label: "LinkedIn", value: "linkedin.com/in/sumitmishra", href: "https://linkedin.com/in/sumitmishra" },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold">
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>
          <motion.div variants={fadeInUp} className="mt-2 h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
          <motion.p variants={fadeInUp} className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Have a project in mind or just want to say hi? I&apos;d love to hear from you.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mt-12 grid gap-8 md:grid-cols-2"
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            {contactDetails.map((detail) => (
              <div key={detail.label} className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <detail.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{detail.label}</p>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium hover:text-primary transition-colors"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <p className="font-medium">{detail.value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp}>
            <ContactForm />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
