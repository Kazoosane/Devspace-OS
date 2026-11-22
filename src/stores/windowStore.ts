
import { create } from "zustand";

export interface WindowItem {
  id: string;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  x: number;
  y: number;
  width: number;
  height: number;
  zIndex: number;
}

interface WindowState {
  windows: WindowItem[];

  openWindow: (id: string, title: string) => void;
  closeWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  maximizeWindow: (id: string) => void;
  focusWindow: (id: string) => void;
  updatePosition: (id: string, x: number, y: number) => void;
}



export const useWindowStore = create<WindowState>((set) => ({
  windows: [
    {
      id: "about",
      title: "About Me",
      isOpen: true,
      isMinimized: false,
      isMaximized: false,
      x: 45,
      y: 65,
      width: 650,
      height: 440,
      zIndex: 2,
    },
    {
      id: "terminal",
      title: "Terminal",
      isOpen: true,
      isMinimized: false,
      isMaximized: false,
      x: 720,
      y: 140,
      width: 470,
      height: 370,
      zIndex: 3,
    },
  ],

  openWindow: (id, title) =>
    set((state) => {
      const existing = state.windows.find(
        (window) => window.id === id
      );

      const highestZ = Math.max(
        0,
        ...state.windows.map((window) => window.zIndex)
      );

      if (existing) {
        return {
          windows: state.windows.map((window) =>
            window.id === id
              ? {
                  ...window,
                  isOpen: true,
                  isMinimized: false,
                  zIndex: highestZ + 1,
                }
              : window
          ),
        };
      }

      return {
        windows: [
          ...state.windows,
          {
            id,
            title,
            isOpen: true,
            isMinimized: false,
            isMaximized: false,
            x: 100 + state.windows.length * 25,
            y: 80 + state.windows.length * 25,
            width: 600,
            height: 400,
            zIndex: highestZ + 1,
          },
        ],
      };
    }),

  closeWindow: (id) =>
    set((state) => ({
      windows: state.windows.map((window) =>
        window.id === id
          ? { ...window, isOpen: false, isMinimized: false }
          : window
      ),
    })),

  minimizeWindow: (id) =>
    set((state) => ({
      windows: state.windows.map((window) =>
        window.id === id
          ? { ...window, isMinimized: true }
          : window
      ),
    })),

  maximizeWindow: (id) =>
    set((state) => ({
      windows: state.windows.map((window) =>
        window.id === id
          ? { ...window, isMaximized: !window.isMaximized }
          : window
      ),
    })),

  focusWindow: (id) =>
    set((state) => {
      const highestZ = Math.max(
        0,
        ...state.windows.map((window) => window.zIndex)
      );

      return {
        windows: state.windows.map((window) =>
          window.id === id
            ? { ...window, zIndex: highestZ + 1 }
            : window
        ),
      };
    }),

    updatePosition: (id, x, y) =>
        set((state) => ({
            windows: state.windows.map((window) =>
            window.id === id
                ? { ...window, x, y }
                : window
            ),
        })),
}));
