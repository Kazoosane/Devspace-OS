
export interface Project {
  id: number;
  name: string;
  url: string;
  description: string;
  category: "Web" | "API" | "Mobile";
  status: "In Progress" | "Concept";
  technologies: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    name: "DevSpace OS",
    url: "http://localhost:5173",
    description:
      "Interactive developer portfolio dengan tampilan desktop environment, window management, dan terminal.",
    category: "Web",
    status: "In Progress",
    technologies: ["React", "TypeScript", "TailwindCSS", "Zustand", "Framer Motion"],
  },
];
