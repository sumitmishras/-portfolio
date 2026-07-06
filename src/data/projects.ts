import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "cloud-deployment-pipeline",
    title: "CI/CD Deployment Pipeline",
    description:
      "Automated CI/CD pipeline using Azure DevOps for containerized ASP.NET applications deployed on AWS infrastructure.",
    features: [
      "Automated build and deployment pipeline",
      "Docker containerization",
      "Multi-environment deployment (dev, staging, prod)",
      "Infrastructure as Code",
      "Automated testing integration",
    ],
    technologies: ["Azure DevOps", "Docker", "AWS EC2", "ASP.NET", "MySQL"],
    category: "DevOps",
    image: "/projects/devops.png",
    githubUrl: "https://github.com/sumitmishras",
  },
  {
    id: "kubernetes-cluster-management",
    title: "Kubernetes Cluster Management",
    description:
      "Hands-on Kubernetes cluster setup and management on Google Cloud Platform with container orchestration.",
    features: [
      "GKE cluster provisioning",
      "Pod and service management",
      "Load balancing and scaling",
      "Container image management",
      "Cluster monitoring",
    ],
    technologies: ["Kubernetes", "GCP", "Docker", "Google Kubernetes Engine"],
    category: "Cloud",
    image: "/projects/kubernetes.png",
    githubUrl: "https://github.com/sumitmishras",
  },
  {
    id: "aspnet-webapp",
    title: "ASP.NET Web Application",
    description:
      "Full-featured web application built with ASP.NET with MySQL database backend and RESTful API architecture.",
    features: [
      "MVC architecture with ASP.NET",
      "MySQL database with stored procedures",
      "RESTful API integration",
      "SSL and domain configuration",
      "VPS hosting deployment",
    ],
    technologies: ["ASP.NET", "C#", "MySQL", "HTML5", "CSS3", "REST APIs"],
    category: "Full Stack",
    image: "/projects/webapp.png",
    githubUrl: "https://github.com/sumitmishras",
  },
  {
    id: "cloud-infrastructure-setup",
    title: "Cloud Infrastructure Setup",
    description:
      "Designed and deployed cloud infrastructure on AWS including EC2 instances, S3 storage, and Lightsail for web hosting.",
    features: [
      "EC2 instance provisioning and configuration",
      "S3 bucket setup for static assets",
      "Lightsail deployment for web apps",
      "Security group and IAM configuration",
      "Domain and SSL management",
    ],
    technologies: ["AWS EC2", "AWS S3", "AWS Lightsail", "Linux", "SSL"],
    category: "Cloud",
    image: "/projects/cloud.png",
    githubUrl: "https://github.com/sumitmishras",
  },
];

export const projectCategories = ["All", "Full Stack", "Cloud", "DevOps"] as const;
