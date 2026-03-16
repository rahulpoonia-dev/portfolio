export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  featured?: boolean;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
  current?: boolean;
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "tools";
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}