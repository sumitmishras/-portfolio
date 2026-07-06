import { Skill } from "@/types";

export const skills: Skill[] = [
  { name: "React", proficiency: 95, category: "Frontend" },
  { name: "Next.js", proficiency: 90, category: "Frontend" },
  { name: "TypeScript", proficiency: 92, category: "Frontend" },
  { name: "JavaScript", proficiency: 95, category: "Frontend" },
  { name: "HTML", proficiency: 98, category: "Frontend" },
  { name: "CSS", proficiency: 95, category: "Frontend" },
  { name: "Tailwind CSS", proficiency: 90, category: "Frontend" },
  { name: "ASP.NET", proficiency: 88, category: "Backend" },
  { name: "C#", proficiency: 90, category: "Backend" },
  { name: "PHP", proficiency: 75, category: "Backend" },
  { name: "Node.js", proficiency: 85, category: "Backend" },
  { name: "REST APIs", proficiency: 92, category: "Backend" },
  { name: "MySQL", proficiency: 85, category: "Database" },
  { name: "PostgreSQL", proficiency: 82, category: "Database" },
  { name: "SQL Server", proficiency: 88, category: "Database" },
  { name: "AWS", proficiency: 78, category: "Cloud" },
  { name: "Azure", proficiency: 75, category: "Cloud" },
  { name: "Git", proficiency: 92, category: "Tools" },
  { name: "GitHub", proficiency: 90, category: "Tools" },
  { name: "VS Code", proficiency: 95, category: "Tools" },
  { name: "Postman", proficiency: 88, category: "Tools" },
  { name: "Docker", proficiency: 80, category: "Tools" },
];

export const skillCategories = ["Frontend", "Backend", "Database", "Cloud", "Tools"] as const;
