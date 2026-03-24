import { Project, Experience, Skill, Service } from "@/types";

export const siteConfig = {
  name: "Rahul",
  role: "Full Stack Developer",
  tagline: "Building scalable web experiences from frontend to backend.",
  bio: "I'm Rahul, a passionate Full Stack Developer who loves crafting clean, performant, and user-centric web applications. I thrive at the intersection of design and engineering — turning ideas into production-ready products.",
  email: "rahulpoonia-dev@gmail.com",
  github: "https://github.com/rahulpoonia-dev",
  linkedin: "https://linkedin.com/in/rahulpoonia-dev",
  resumeUrl: "/Rahul-Choudhary-CV.pdf",
};

export const skills: Skill[] = [
  // Frontend
  { name: "HTML", category: "frontend" },
  { name: "CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Vue.js", category: "frontend" },      
  { name: "Angular", category: "frontend" },     
  { name: "Tailwind CSS", category: "frontend" }, 
  // Backend
  { name: "Node.js", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "REST APIs", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "JWT", category: "backend" },          
  { name: "Mongoose", category: "backend" },
  { name: "WebSockets", category: "backend" },
  { name: "Socket.io", category: "backend" },     
  // Tools
  { name: "Git", category: "tools" },
  { name: "GitHub", category: "tools" },
  { name: "Postman", category: "tools" },
  { name: "Thunder Client", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "Linux", category: "tools" }, 
  { name: "Vercel", category: "tools" },         
  { name: "Cloudinary", category: "tools" },     
  { name: "npm", category: "tools" },            
];

export const services: Service[] = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "Building pixel-perfect, responsive UIs using React and Next.js with a strong focus on performance and accessibility.",
    icon: "monitor",
  },
  {
    id: 2,
    title: "Backend Development",
    description:
      "Designing robust RESTful APIs and server-side logic with Node.js and Express, backed by scalable databases.",
    icon: "server",
  },
  {
    id: 3,
    title: "Full Stack Solutions",
    description:
      "End-to-end web application development — from database schema to deployed product — tailored to your business needs.",
    icon: "layers",
  },
  {
    id: 4,
    title: "API Integration",
    description:
      "Seamlessly integrating third-party APIs and services into your existing or new web applications.",
    icon: "plug",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Designer Here",
  description:
    "A production-grade creative platform where designers can showcase work, connect with clients, and manage communications — built to solve the gap between design talent and opportunity.",
  tech: ["Next.js", "TypeScript", "Tailwind CSS", "Cloudinary", "Socket.io", "Brevo"],
    github: "https://github.com/rahulpoonia-dev/designer-here",
    live: "https://designer-here.vercel.app",
    featured: true,
  },
  {
    id: 2,
    title: "Aakhri Pizza",
    description:
      "A responsive pizza ordering app with a dynamic cart system handling real-time price calculations and item modifications.",
    tech: ["React.js", "Tailwind CSS"],
    github: "https://github.com/rahulpoonia-dev/aakhri-pizza",
    live: "https://aakhri-pizza.vercel.app",
  },
  {
    id: 3,
    title: "Meal Search",
    description:
      "A real-time recipe discovery app with async API search, meal filtering, and embedded YouTube cooking tutorials.",
    tech: ["React.js", "REST API", "TheMealDB"],
    github: "https://github.com/rahulpoonia-dev/meal-search",
    live: "https://meal-search-smoky.vercel.app",
  },
];

export const experiences: Experience[] = [
{
  id: 1,
  role: "Full Stack Developer",
  company: "Designer Here",
  duration: "Late 2025 – Present",
  location: "Personal Project · Next.js, TypeScript, Tailwind CSS",
description: [
  "Identified a gap between designers and clients — built a full-stack platform to help designers showcase work, attract opportunities, and manage client communications in one place.",
  "Engineered real-time messaging with WebSockets and Socket.io so designers and clients can communicate instantly without leaving the platform.",
  "Built a categorized email system using Brevo so users receive relevant, organized notifications instead of inbox clutter — improving engagement and retention.",
  "Designed a full settings page with granular notification preferences, giving users control over their experience — a standard expected in any production-grade application.",
],
  current: true,
},
  {
    id: 2,
    role: "Frontend Developer",
    company: "Aakhri Pizza & Meal Search",
    duration: "Mid 2024 – Late 2025",
    location: "Personal Projects · React.js, REST API",
    description: [
      "Built a responsive pizza ordering interface with a dynamic cart system for real-time price calculations and item modifications.",
      "Developed a real-time meal discovery app integrating TheMealDB API with async search, filtering, and embedded YouTube tutorials.",
      "Focused on component architecture, state management, and clean UI across both projects.",
    ],
  },
  {
    id: 3,
    role: "Self-Taught Developer",
    company: "Learning Journey",
    duration: "Early 2024 – Present",
    location: "Online Courses + Independent Study",
    description: [
      "Progressed from HTML, CSS, and JavaScript through React, Node.js, Express, Next.js, and TypeScript within a year.",
      "Explored Vue and Angular fundamentals to broaden frontend perspective beyond the React ecosystem.",
      "Applied learning consistently through real-world projects using Git, GitHub, Postman, and Thunder Client.",
    ],
  },
];