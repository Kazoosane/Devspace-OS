export interface CommandResult {
  output: string[];
  clear?: boolean;
}

export function executeCommand(
  input: string
): CommandResult {
  const command = input.trim().toLowerCase();

  if (!command) {
    return { output: [] };
  }

  switch (command) {
    case "help":
      return {
        output: [
          "Available commands:",
          "",
          "help      - Show available commands",
          "about     - Developer information",
          "projects  - View projects",
          "skills    - View technologies",
          "contact   - Contact information",
          "date      - Current date",
          "whoami    - Visitor identity",
          "neofetch  - System information",
          "clear     - Clear terminal",
        ],
      };

    case "about":
      return {
        output: [
          "Developer Profile",
          "-----------------",
          "Name: Hadi Sumanjaya",
          "Role: Full Stack Developer Enthusiast",
          "Location: Jakarta, Indonesia",
          "Focus: Full Stack Development",
        ],
      };

    case "projects":
      return {
        output: [
          "Selected Projects",
          "-----------------",
          "No projects configured yet.",
          "Projects will be available soon.",
        ],
      };

    case "skills":
      return {
        output: [
          "Technology Stack",
          "----------------",
          "PHP",
          "Javascript",
          "Laravel",
          "Node.js",
          "Express.js",
          "TypeScript",
          "React",
          "PostgreSQL",
          "MySQL"
        ],
      };

    case "contact":
      return {
        output: [
          "Contact Information",
          "-------------------",
          "GitHub: github.com/Kazoosane",
          "Instagram: @yourusername",
          "Email: hadisumanjaya282@gmail.com"
        ],
      };

    case "date":
      return {
        output: [new Date().toLocaleString("id-ID")],
      };

    case "whoami":
      return {
        output: ["visitor"],
      };

    case "neofetch":
      return {
        output: [
          "       DEVSPACE OS",
          "-------------------------",
          "OS: DevSpace OS",
          "Shell: DevSpace Terminal",
          "Environment: Web Browser",
          "Theme: Dark Futuristic",
          "Version: 1.0.0",
        ],
      };

    case "clear":
      return {
        output: [],
        clear: true,
      };

    default:
      return {
        output: [
          `Command not found: ${command}`,
          "Type 'help' to see available commands.",
        ],
      };
  }
}