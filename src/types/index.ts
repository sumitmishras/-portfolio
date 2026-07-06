import { LucideIcon } from "lucide-react";
import { ComponentType, SVGProps } from "react";

export type IconType = ComponentType<SVGProps<SVGSVGElement>>;

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: IconType;
}

export interface Skill {
  name: string;
  icon?: LucideIcon | string;
  proficiency: number;
  category: SkillCategory;
}

export type SkillCategory = "Frontend" | "Backend" | "Database" | "Cloud" | "Tools";

export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string;
  achievements: string[];
  technologies: string[];
  logo?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  category: string;
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  caseStudy?: string;
  screenshots?: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  url?: string;
  image?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  image?: string;
  readingTime: string;
  published: boolean;
}

export interface BlogMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  image?: string;
  readingTime: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company?: string;
  avatar?: string;
  content: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
