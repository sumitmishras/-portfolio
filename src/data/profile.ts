import { NavLink, SocialLink } from "@/types";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export const personalInfo = {
  name: "Sumit Mishra",
  title: "Software Engineer",
  email: "cse.sumitmishra@gmail.com",
  location: "Sahibzada Ajit Singh Nagar, India",
  phone: "+916284397436",
  resumeUrl: "/resume/resume.pdf",
  description:
    "Detail-oriented Software Engineer experienced in ASP.NET development, MySQL management, and CI/CD deployment. Proficient in Docker, Azure DevOps, and AWS services, with a solid foundation in Google Cloud Platform, including Kubernetes.",
  shortBio:
    "Software Engineer specializing in ASP.NET, MySQL, and cloud technologies with hands-on experience in Docker, Azure DevOps, and AWS.",
  aboutParagraphs: [
    "I am a Software Engineer with experience in ASP.NET development, MySQL management, and CI/CD deployment. My expertise spans Docker containerization, Azure DevOps pipelines, and AWS cloud services including EC2, S3, and Lightsail.",
    "I have a solid foundation in Google Cloud Platform with hands-on Kubernetes training and a deep understanding of cloud computing core concepts. I specialize in building robust web applications using ASP.NET, HTML5, CSS3, and REST APIs.",
    "Currently seeking a role in Cloud Engineering or DevOps where I can leverage my skills in cloud services, containerization, and continuous deployment to drive infrastructure excellence.",
  ],
  interests: ["Cloud Computing", "DevOps", "Kubernetes", "Open Source", "Web Development"],
  goals: [
    "Transition into Cloud Engineering or DevOps role",
    "Master Kubernetes and container orchestration",
    "Build scalable cloud-native applications",
    "Contribute to the developer community",
  ],
  technologies: [
    "C#",
    "ASP.NET",
    "JavaScript",
    "MySQL",
    "Docker",
    "Azure DevOps",
    "AWS",
    "GCP",
    "Kubernetes",
    "Git",
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
  { name: "GitHub", url: "https://github.com/sumitmishras", icon: GithubIcon },
  { name: "LinkedIn", url: "https://linkedin.com/in/sumitmishra", icon: LinkedinIcon },
];
