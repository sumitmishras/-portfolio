import Link from "next/link";
import { Download, ArrowLeft } from "lucide-react";
import { personalInfo } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { experiences } from "@/data/experience";
import { skills } from "@/data/skills";
import { certifications } from "@/data/certifications";
import { education } from "@/data/education";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: `Professional resume of ${personalInfo.name} - ${personalInfo.title}`,
};

export default function ResumePage() {
  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-4xl px-4">
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
          <Button asChild>
            <a href={personalInfo.resumeUrl} download>
              <Download className="mr-2 h-4 w-4" /> Download PDF
            </a>
          </Button>
        </div>

        <div className="rounded-xl border bg-card p-8 md:p-12">
          <header className="text-center border-b pb-6 mb-6">
            <h1 className="text-3xl font-bold">{personalInfo.name}</h1>
            <p className="text-lg text-primary font-medium">{personalInfo.title}</p>
            <p className="mt-2 text-sm text-muted-foreground">
              {personalInfo.email} | {personalInfo.location}
            </p>
          </header>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Professional Summary</h2>
            <p className="text-muted-foreground">{personalInfo.description}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Experience</h2>
            <div className="space-y-6">
              {experiences.map((exp) => (
                <div key={exp.company} className="border-l-2 border-primary pl-4">
                  <h3 className="font-semibold">{exp.role}</h3>
                  <p className="text-sm text-primary">{exp.company} | {exp.duration}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{exp.description}</p>
                  <ul className="mt-2 space-y-1">
                    {exp.achievements.map((ach, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Skills</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill) => (
                <div key={skill.name} className="flex items-center justify-between">
                  <span className="text-sm">{skill.name}</span>
                  <span className="text-xs text-muted-foreground">{skill.proficiency}%</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Education</h2>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.degree} className="border-l-2 border-primary pl-4">
                  <h3 className="font-semibold">{edu.degree}</h3>
                  <p className="text-sm text-primary">{edu.institution}, {edu.location}</p>
                  <p className="text-sm text-muted-foreground">Graduated: {edu.duration}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{edu.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Certifications</h2>
            <div className="space-y-3">
              {certifications.map((cert) => (
                <div key={cert.title} className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0" />
                  <div>
                    <p className="font-medium">{cert.title}</p>
                    <p className="text-sm text-muted-foreground">{cert.issuer} - {cert.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
