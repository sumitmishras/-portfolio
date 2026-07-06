import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, cart, checkout, payment integration, and admin dashboard.",
    features: [
      "Product catalog with search and filters",
      "Shopping cart and checkout flow",
      "Payment gateway integration",
      "Admin dashboard with analytics",
      "Order management system",
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Tailwind CSS"],
    category: "Full Stack",
    image: "/projects/ecommerce.png",
    githubUrl: "https://github.com/sumitmishra/ecommerce",
    liveUrl: "https://ecommerce-demo.vercel.app",
    caseStudy: "/blog/ecommerce-case-study",
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop boards, and team features.",
    features: [
      "Kanban boards with drag and drop",
      "Real-time collaboration",
      "Team management and permissions",
      "Task assignments and notifications",
      "Analytics and reporting",
    ],
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Docker"],
    category: "Full Stack",
    image: "/projects/taskmanager.png",
    githubUrl: "https://github.com/sumitmishra/taskmanager",
    liveUrl: "https://taskmanager-demo.vercel.app",
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "A modern, performant personal portfolio website built with Next.js 15, featuring dark mode, animations, and blog.",
    features: [
      "Server-side rendering for SEO",
      "Dark/light mode toggle",
      "Blog with markdown support",
      "Project showcase with filters",
      "Contact form with validation",
    ],
    technologies: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS", "MDX"],
    category: "Frontend",
    image: "/projects/portfolio.png",
    githubUrl: "https://github.com/sumitmishra/portfolio",
    liveUrl: "https://sumitmishra.dev",
  },
  {
    id: "api-gateway",
    title: "API Gateway Service",
    description:
      "A microservices API gateway with rate limiting, authentication, logging, and request routing capabilities.",
    features: [
      "Request routing and load balancing",
      "JWT authentication and authorization",
      "Rate limiting and throttling",
      "Request/response logging",
      "Service discovery integration",
    ],
    technologies: ["C#", "ASP.NET", "Redis", "Docker", "Azure"],
    category: "Backend",
    image: "/projects/api-gateway.png",
    githubUrl: "https://github.com/sumitmishra/api-gateway",
  },
  {
    id: "real-time-chat",
    title: "Real-Time Chat Application",
    description:
      "A real-time messaging application with WebSocket support, chat rooms, file sharing, and message history.",
    features: [
      "Real-time messaging with WebSockets",
      "Chat rooms and private messaging",
      "File and image sharing",
      "Message search and history",
      "Online/offline status",
    ],
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "AWS"],
    category: "Full Stack",
    image: "/projects/chat.png",
    githubUrl: "https://github.com/sumitmishra/chat-app",
    liveUrl: "https://chat-demo.vercel.app",
  },
  {
    id: "analytics-dashboard",
    title: "Analytics Dashboard",
    description:
      "An interactive analytics dashboard with real-time data visualization, charts, and customizable reports.",
    features: [
      "Interactive charts and graphs",
      "Real-time data updates",
      "Customizable dashboard layouts",
      "Export reports to PDF/CSV",
      "User permission management",
    ],
    technologies: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL"],
    category: "Frontend",
    image: "/projects/analytics.png",
    githubUrl: "https://github.com/sumitmishra/analytics-dashboard",
    liveUrl: "https://analytics-demo.vercel.app",
  },
];

export const projectCategories = ["All", "Full Stack", "Frontend", "Backend"] as const;
