import {
  UserRound,
  Folder,
  Layers,
  Terminal,
  FlaskConical,
  Mail,
  Settings,
} from "lucide-react";

const menuItems = [
  { id: "about", label: "About Me", icon: UserRound },
  { id: "projects", label: "Projects", icon: Folder },
  { id: "skills", label: "Tech Stack", icon: Layers },
  { id: "terminal", label: "Terminal", icon: Terminal },
  { id: "api", label: "API Playground", icon: FlaskConical },
  { id: "contact", label: "Contact", icon: Mail },
];

interface SidebarProps {
  activeApp: string;
  onSelect: (id: string) => void;
}

export default function Sidebar({
  activeApp,
  onSelect,
}: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="sidebar-menu">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => onSelect(item.id)}
              className={`sidebar-item ${
                activeApp === item.id ? "active" : ""
              }`}
            >
              <Icon size={23} strokeWidth={1.8} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>

      <button className="settings-button" aria-label="Settings">
        <Settings size={21} />
      </button>
    </aside>
  );
}
