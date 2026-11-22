import {
  motion,
  AnimatePresence,
  useDragControls,
  useMotionValue,
} from "framer-motion";

import {
  Minus,
  Square,
  X,
  UserRound,
  Terminal,
} from "lucide-react";

import { useWindowStore } from "../../stores/windowStore";
import type { WindowItem } from "../../stores/windowStore";

interface WindowProps {
  window: WindowItem;
  children: React.ReactNode;
}

export default function Window({
  window: win,
  children,
}: WindowProps) {
  const {
    closeWindow,
    minimizeWindow,
    maximizeWindow,
    focusWindow,
  } = useWindowStore();

  const dragControls = useDragControls();

  const icons: Record<string, React.ElementType> = {
    about: UserRound,
    terminal: Terminal,
  };

  const Icon = icons[win.id] ?? Square;

  const isVisible = win.isOpen && !win.isMinimized;

  const dragX = useMotionValue(0);
  const dragY = useMotionValue(0);
  
  const updatePosition = useWindowStore(
    (state) => state.updatePosition
  );

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
        key={win.id}
        className={`window ${win.isMaximized ? "maximized" : ""}`}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.92 }}
        transition={{ duration: 0.2 }}

        drag={!win.isMaximized}
        dragListener={false}
        dragControls={dragControls}
        dragMomentum={false}

        onPointerDown={() => focusWindow(win.id)}

        onDragEnd={() => {
            const newX = win.x + dragX.get();
            const newY = win.y + dragY.get();

            updatePosition(win.id, newX, newY);

            // Reset transform setelah posisi disimpan
            dragX.set(0);
            dragY.set(0);
        }}

        style={{
            x: dragX,
            y: dragY,

            position: "absolute",
            left: win.isMaximized ? 10 : win.x,
            top: win.isMaximized ? 10 : win.y,

            width: win.isMaximized ? "auto" : win.width,
            height: win.isMaximized ? "auto" : win.height,

            right: win.isMaximized ? 10 : "auto",
            bottom: win.isMaximized ? 10 : "auto",

            zIndex: win.zIndex,
        }}
        >
          <div className="window-header">
            <div
              className="window-title"
              onPointerDown={(event) => {
                if (!win.isMaximized) {
                  dragControls.start(event);
                }
              }}
            >
              <Icon size={19} />
              <span>{win.title}</span>
            </div>

            <div className="window-controls">
              <button
                onClick={() => minimizeWindow(win.id)}
                aria-label="Minimize"
              >
                <Minus size={17} />
              </button>

              <button
                onClick={() => maximizeWindow(win.id)}
                aria-label="Maximize"
              >
                <Square size={14} />
              </button>

              <button
                className="close-button"
                onClick={() => closeWindow(win.id)}
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          <div className="window-content">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}