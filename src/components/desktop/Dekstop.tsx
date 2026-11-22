import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Clock3, CalendarDays } from "lucide-react";

import Sidebar from "./Sidebar";
import Taskbar from "./TaskBar";

export default function Desktop() {
    const [activeApp, setActiveApp] = useState("about");
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
    const timer = setInterval(() => {
        setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
    }, []);

    const time = currentTime.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    });

    const date = currentTime.toLocaleDateString("id-ID", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
    });


    return (
        <motion.main
            className="desktop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
        {/* Navbar */}
        <motion.header
        className="topbar"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        >
        <div className="system-info">
            <span>
            <Clock3 size={17} />
            {time}
            </span>

            <div className="topbar-divider" />

            <span>
            <CalendarDays size={17} />
            {date}
            </span>
        </div>
        </motion.header>

        {/* Sidebar */}
        <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        style={{ position: "absolute", inset: "0 auto 0 0" }}
        >
        <Sidebar
            activeApp={activeApp}
            onSelect={setActiveApp}
        />
        </motion.div>

        {/* Workspace */}
        <motion.section
        className="workspace"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
            duration: 0.7,
            delay: 0.8,
            ease: "easeOut",
        }}
        >
        <div className="placeholder-window">
            <span className="window-label">
            DEVSPACE OS
            </span>

            <h1>
            Welcome to <span>DevSpace.</span>
            </h1>

            <p>
            Your personal developer workspace.
            </p>

            <button
            onClick={() => setActiveApp("terminal")}
            >
            Open Terminal →
            </button>
        </div>
        </motion.section>

        {/* Taskbar */}
        <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        >
        <Taskbar
            activeApp={activeApp}
            onSelect={setActiveApp}
        />
        </motion.div>
    </motion.main>
    );
}
