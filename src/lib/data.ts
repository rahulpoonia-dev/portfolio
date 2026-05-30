import type {
  Project,
  Experience,
  Skill,
  Service,
  Certification,
} from "@/types";

export const siteConfig = {
  name: "Rahul",
  email: "rahulpoonia.dev@gmail.com",
  github: "https://github.com/rahulpoonia-dev",
  linkedin: "https://linkedin.com/in/rahulpoonia-dev",
  resumeUrl: "/Rahul-Poonia-CV.pdf",
  tagline:
    "Full Stack Developer specialising in React, TypeScript, and Next.js.",
  bio: "I'm Rahul, a Full Stack Developer based in Jaipur with 2.5+ years of experience building production-grade web applications. I specialise in React, Next.js, TypeScript, and Node.js — owning projects end-to-end from architecture decisions to deployment. I care about real performance, clean systems, and interfaces people actually enjoy using.",
  bio2: "Every project I take on is owned completely — architecture, frontend, backend, auth, deployment. No handoffs, no shortcuts. I'm comfortable making technical decisions under pressure and shipping things that work at production quality.",
  aboutInfo: [
    { label: "Location", value: "Jaipur, Rajasthan" },
    { label: "Status", value: "Open to work" },
    { label: "Focus", value: "Full Stack Dev" },
    { label: "Experience", value: "2.5+ Years" },
  ],
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Designer Here",
    description:
      "A production-ready full-stack designer marketplace built with Next.js 15+, MongoDB, and WebSockets. Features dual authentication (Google OAuth 2.0 + custom JWT), real-time messaging via Socket.io, a secure Admin Dashboard with RBAC, automated media delivery via Cloudinary SDK, and 95+ Lighthouse scores across Performance, SEO, and Accessibility.",
    tech: [
      "Next.js 15+",
      "TypeScript",
      "MongoDB",
      "Socket.io",
      "Cloudinary",
      "Tailwind CSS",
    ],
    github: "https://github.com/rahulpoonia-dev/designer-here",
    live: "https://designer-here.vercel.app",
    featured: true,
  },
  {
    id: 2,
    title: "Aakhri Pizza",
    description:
      "A responsive pizza ordering interface with dynamic cart logic, real-time price calculations, and category filtering. Built mobile-first with consistent UX across all screen sizes.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/rahulpoonia-dev/aakhri-pizza",
    live: "https://aakhri-pizza.vercel.app",
  },
  {
    id: 3,
    title: "Meal Search",
    description:
      "A real-time meal discovery interface consuming a third-party REST API. Handles async data fetching, complex UI states, loading indicators, and API error states using React Hooks.",
    tech: ["React", "REST APIs", "JavaScript"],
    github: "https://github.com/rahulpoonia-dev/meal-search",
    live: "https://meal-search-smoky.vercel.app",
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Contract & Independent Projects",
    duration: "Oct 2023 – Present",
    location: "Remote",
    current: true,
    description: [
      "Independently designed and built full-stack applications from scratch — owning the entire lifecycle including system architecture, frontend, backend APIs, authentication, and cloud deployment.",
      "Architected and delivered Designer Here, a production-ready marketplace using Next.js 15+, MongoDB, and WebSockets, making all technical decisions without a team.",
      "Implemented dual authentication — Google OAuth 2.0 for social login and a custom JWT system with secure session handling and protected routes.",
      "Achieved 95+ Lighthouse scores across Performance, SEO, and Accessibility through advanced SSR optimisation and hydration fixes.",
      "Reduced LCP by 40% by implementing automated media transformation and optimised asset delivery via Cloudinary SDK.",
      "Designed and implemented a role-based access control (RBAC) system with server-side route protection and an Admin Dashboard for real-time user moderation.",
      "Configured CI/CD pipelines on Vercel with automatic deployments on every git push, ensuring zero-downtime releases.",
    ],
  },
];

export const skills: Skill[] = [
  { name: "React", category: "frontend" },
  { name: "Next.js 15+", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "JavaScript (ES6+)", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Redux", category: "frontend" },
  { name: "HTML", category: "frontend" },
  { name: "CSS", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "WebSockets", category: "backend" },
  { name: "Socket.io", category: "backend" },
  { name: "REST APIs", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "JWT Auth", category: "backend" },
  { name: "Google OAuth 2.0", category: "backend" },
  { name: "RBAC", category: "backend" },
  { name: "Git & GitHub", category: "tools" },
  { name: "Vercel", category: "tools" },
  { name: "Cloudinary SDK", category: "tools" },
  { name: "AWS", category: "tools" },
  { name: "Docker", category: "tools" },
  { name: "CI/CD", category: "tools" },
  { name: "Chrome DevTools", category: "tools" },
  { name: "Postman", category: "tools" },
];

export const services: Service[] = [
  {
    id: 1,
    title: "Frontend Engineering",
    tag: "React · Next.js · TypeScript",
    description:
      "Architected and delivered production-grade interfaces using React and Next.js 15+ — achieving 95+ Lighthouse scores through SSR optimisation, hydration strategies, and Core Web Vitals tuning. Every UI I ship is fast, accessible, and built to scale, not just to look good in a demo.",
    icon: "monitor",
  },
  {
    id: 2,
    title: "Backend & API Development",
    tag: "Node.js · Express · MongoDB",
    description:
      "Engineered robust RESTful APIs and server-side systems with Node.js and Express, underpinned by MongoDB and PostgreSQL. Delivered dual auth systems (Google OAuth 2.0 + custom JWT), RBAC with server-side route protection, and real-time communication layers via WebSockets — handling the full backend, not just CRUD endpoints.",
    icon: "server",
  },
  {
    id: 3,
    title: "Full Stack Product Development",
    tag: "End-to-End · Deployed · Production",
    description:
      "Spearheaded end-to-end product development independently — from system architecture and database schema design through to CI/CD pipeline configuration and zero-downtime Vercel deployments. Proven ability to own the full lifecycle of a product without a team, delivering at production quality with real users on the platform.",
    icon: "layers",
  },
  {
    id: 4,
    title: "Third-Party & Cloud Integration",
    tag: "Cloudinary · AWS · OAuth",
    description:
      "Leveraged industry-standard cloud services and third-party APIs — integrating Cloudinary SDK for automated media optimisation (driving a 40% LCP reduction), AWS infrastructure, OAuth providers, and notification pipelines — cleanly wired into existing architectures without disrupting core systems.",
    icon: "plug",
  },
  {
    id: 5,
    title: "Performance & Technical Consulting",
    tag: "Audits · Optimisation · Strategy",
    description:
      "Partnered with teams to diagnose and resolve performance bottlenecks, architectural debt, and scalability constraints in existing web applications. Delivered actionable recommendations on SSR strategy, bundle optimisation, database indexing, and deployment workflows — translating technical findings into measurable business outcomes.",
    icon: "chart",
  },
  {
    id: 6,
    title: "Code Review & Technical Mentorship",
    tag: "Reviews · Best Practices · Guidance",
    description:
      "Provided structured code reviews and technical guidance focused on maintainability, security, and performance — covering React patterns, API design, auth implementation, and CI/CD best practices. Helped developers ship cleaner code and make better architectural decisions earlier in the development cycle.",
    icon: "users",
  },
];

export const certifications: Certification[] = [
  {
    id: 1,
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "March 2026",
    url: "https://freecodecamp.org/certification/jussrahull/responsive-web-design-v9",
  },
];
