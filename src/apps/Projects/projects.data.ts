
export interface Project {
  id: number;
  name: string;
  description: string;
  category: "Web" | "API" | "Mobile";
  status: "In Progress" | "Concept";
  technologies: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    name: "DevSpace OS",
    description:
      "Interactive developer portfolio dengan tampilan desktop environment, window management, dan terminal.",
    category: "Web",
    status: "In Progress",
    technologies: ["React", "TypeScript", "Zustand", "Framer Motion"],
  },
  {
    id: 2,
    name: "Hotel Reservation API",
    description:
      "Backend API untuk sistem reservasi hotel, pengelolaan kamar, autentikasi, dan pembayaran.",
    category: "API",
    status: "Concept",
    technologies: ["Node.js", "TypeScript", "PostgreSQL"],
  },
  {
    id: 3,
    name: "Laporin",
    description:
      "Aplikasi pelaporan masalah di lingkungan sekolah untuk membantu proses penyampaian laporan.",
    category: "Mobile",
    status: "Concept",
    technologies: ["Kotlin", "MySQL"],
  },
  {
    id: 4,
    name: "Inventory Management",
    description:
      "Sistem pengelolaan inventaris untuk mencatat barang, stok, dan aktivitas pengelolaan.",
    category: "Web",
    status: "Concept",
    technologies: ["Laravel", "PHP", "MySQL"],
  },
];
