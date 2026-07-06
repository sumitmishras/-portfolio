import { NavLink, SocialLink } from "@/types";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export const personalInfo = {
  name: "Sumit Mishra",
  title: "Senior Software Engineer",
  email: "sumit.mishra@email.com",
  location: "India",
  phone: "+91-XXXXXXXXXX",
  resumeUrl: "/resume/resume.pdf",
  description:
    "Senior Software Engineer with expertise in building scalable web applications. Passionate about clean code, performance optimization, and delivering exceptional user experiences.",
  shortBio:
    "Full-stack developer specializing in React, Next.js, and ASP.NET with 5+ years of experience building high-performance applications.",
  aboutParagraphs: [
    "I am a Senior Software Engineer with over 5 years of experience designing and building enterprise-grade web applications. My journey in software development began with a curiosity for how things work, which evolved into a deep passion for crafting elegant solutions to complex problems.",
    "I specialize in modern JavaScript frameworks, particularly React and Next.js for frontend development, and ASP.NET with C# for robust backend systems. I believe in writing clean, maintainable code that stands the test of time.",
    "When I'm not coding, I enjoy contributing to open-source projects, writing technical blog posts, and exploring new technologies. I'm a firm believer in continuous learning and staying at the cutting edge of web development.",
  ],
  interests: ["Open Source", "Cloud Computing", "System Design", "Tech Blogging", "AI/ML"],
  goals: [
    "Build products that make a difference",
    "Contribute to the developer community",
    "Master system design and architecture",
    "Explore AI and machine learning",
  ],
  technologies: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "C#",
    "ASP.NET",
    "Node.js",
    "PostgreSQL",
    "AWS",
    "Azure",
  ],
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Blog", href: "#blog" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/sumitmishra", icon: GithubIcon },
  { name: "LinkedIn", url: "https://linkedin.com/in/sumitmishra", icon: LinkedinIcon },
];
