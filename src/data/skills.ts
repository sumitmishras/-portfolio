import { Skill } from "@/types";

export const skills: Skill[] = [
  { name: "C#", proficiency: 90, category: "Backend" },
  { name: "ASP.NET", proficiency: 88, category: "Backend" },
  { name: "JavaScript", proficiency: 80, category: "Frontend" },
  { name: "HTML5", proficiency: 90, category: "Frontend" },
  { name: "CSS3", proficiency: 85, category: "Frontend" },
  { name: "MySQL", proficiency: 85, category: "Database" },
  { name: "Stored Procedures", proficiency: 82, category: "Database" },
  { name: "Query Optimization", proficiency: 80, category: "Database" },
  { name: "AWS EC2", proficiency: 78, category: "Cloud" },
  { name: "AWS S3", proficiency: 75, category: "Cloud" },
  { name: "AWS Lightsail", proficiency: 72, category: "Cloud" },
  { name: "Google Cloud Platform", proficiency: 75, category: "Cloud" },
  { name: "Kubernetes", proficiency: 70, category: "Cloud" },
  { name: "Docker", proficiency: 80, category: "Tools" },
  { name: "Azure DevOps", proficiency: 78, category: "Tools" },
  { name: "CI/CD Pipelines", proficiency: 82, category: "Tools" },
  { name: "Git", proficiency: 88, category: "Tools" },
  { name: "GitHub", proficiency: 88, category: "Tools" },
  { name: "REST APIs", proficiency: 85, category: "Backend" },
  { name: "Agile Methodology", proficiency: 80, category: "Tools" },
  { name: "Networking", proficiency: 72, category: "Tools" },
  { name: "Troubleshooting", proficiency: 85, category: "Tools" },
];

export const skillCategories = ["Frontend", "Backend", "Database", "Cloud", "Tools"] as const;
