import {
  Home,
  Folder,
  Code2,
  Database,
  Terminal,
  Mail,
  ChartNoAxesColumn,
} from "lucide-react";

const apps = [
  { id: "home", icon: Home },
  { id: "projects", icon: Folder },
  { id: "skills", icon: Code2 },
  { id: "database", icon: Database },
  { id: "terminal", icon: Terminal },
  { id: "contact", icon: Mail },
];

interface TaskbarProps {
  activeApp: string;
  onSelect: (id: string) => void;
}

export default function Taskbar({
  activeApp,
  onSelect,
}: TaskbarProps) {
  return (
    <nav className="taskbar">
      {apps.map((app) => {
        const Icon = app.icon;

        return (
          <button
            key={app.id}
            onClick={() => onSelect(app.id)}
            className={`taskbar-item ${
              activeApp === app.id ? "active" : ""
            }`}
            aria-label={app.id}
          >
            <Icon size={25} strokeWidth={1.8} />
          </button>
        );
      })}

      <div className="taskbar-divider" />

      <button className="taskbar-item" aria-label="Statistics">
        <ChartNoAxesColumn size={24} />
      </button>
    </nav>
  );
}