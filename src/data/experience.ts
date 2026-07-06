import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    company: "Tech Corp",
    role: "Senior Software Engineer",
    duration: "Jan 2023 - Present",
    description:
      "Leading the development of enterprise web applications, mentoring junior developers, and driving architectural decisions.",
    achievements: [
      "Architected and built a scalable SaaS platform serving 50K+ users",
      "Reduced application load time by 40% through performance optimization",
      "Led a team of 5 developers to deliver projects on time",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
    ],
    technologies: ["React", "Next.js", "TypeScript", "ASP.NET", "PostgreSQL", "AWS"],
  },
  {
    company: "Digital Solutions Inc.",
    role: "Software Engineer",
    duration: "Jun 2020 - Dec 2022",
    description:
      "Developed and maintained multiple client-facing web applications using modern technologies.",
    achievements: [
      "Built 10+ production applications using React and Node.js",
      "Developed RESTful APIs serving 1M+ requests daily",
      "Migrated legacy PHP applications to modern React stack",
      "Wrote comprehensive unit and integration tests (90%+ coverage)",
    ],
    technologies: ["React", "Node.js", "PHP", "MySQL", "Docker", "Git"],
  },
  {
    company: "StartupHub",
    role: "Junior Developer",
    duration: "Jan 2019 - May 2020",
    description:
      "Started my professional journey building web applications and learning industry best practices.",
    achievements: [
      "Developed responsive web pages using HTML, CSS, and JavaScript",
      "Built and maintained REST APIs with C# and ASP.NET",
      "Collaborated on database design and optimization",
      "Participated in code reviews and agile development processes",
    ],
    technologies: ["C#", "ASP.NET", "SQL Server", "JavaScript", "HTML", "CSS"],
  },
];
