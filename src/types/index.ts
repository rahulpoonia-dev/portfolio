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
  tag: string;
  icon: string;
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  url: string;
}
