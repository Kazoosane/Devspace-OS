import { useWindowStore } from "../../stores/windowStore";
import Window from "./Window";
import AboutMe from "../../apps/AboutMe/AboutMe";
import TerminalApp from "../terminal/Terminal";
import Projects from "../../apps/Projects/Projects";
import Contact from "../../apps/Contacts/Contact";

function AppContent({ id }: { id: string }) {
  switch (id) {
    case "about":
        return <AboutMe />

    case "terminal":
      return <TerminalApp />

    case "projects":
        return <Projects />

    case "contacts":
        return <Contact />

    default:
      return (
        <div className="app-placeholder">
          <h2>{id}</h2>
          <p>Application is under development.</p>
        </div>
      );
  }
}

export default function WindowManager() {
  const windows = useWindowStore(
    (state) => state.windows
  );

  return (
    <div className="window-manager">
      {windows.map((win) => (
        <Window key={win.id} window={win}>
          <AppContent id={win.id} />
        </Window>
      ))}
    </div>
  );
}