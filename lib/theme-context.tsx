"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from "react";

import {
  THEMES,
  DEFAULT_THEME,
  DEFAULT_MODE,
  LS_THEME_KEY,
  LS_MODE_KEY,
  type Theme,
  type Mode,
} from "@/lib/theme-config";

export { THEMES, THEME_META } from "@/lib/theme-config";
export type { Theme, Mode } from "@/lib/theme-config";

type ThemeContextValue = {
  theme: Theme;
  mode: Mode;
  setTheme: (theme: Theme) => void;
  setMode: (mode: Mode) => void;
  toggleMode: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function isValidTheme(value: unknown): value is Theme {
  return typeof value === "string" && (THEMES as readonly string[]).includes(value);
}

function isValidMode(value: unknown): value is Mode {
  return value === "light" || value === "dark";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(DEFAULT_THEME);
  const [mode, setModeState] = useState<Mode>(DEFAULT_MODE);

  // Hydrate from storage + already-applied <html> attributes (the inline
  // script in app/layout.tsx sets these before React mounts to prevent FOUC).
  useEffect(() => {
    const root = document.documentElement;
    const attrTheme = root.getAttribute("data-theme");
    const attrMode = root.getAttribute("data-mode");
    if (isValidTheme(attrTheme)) setThemeState(attrTheme);
    if (isValidMode(attrMode)) setModeState(attrMode);
    try {
      const stored = localStorage.getItem(LS_THEME_KEY);
      const storedMode = localStorage.getItem(LS_MODE_KEY);
      if (isValidTheme(stored)) setThemeState(stored);
      if (isValidMode(storedMode)) setModeState(storedMode);
    } catch {}
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    root.setAttribute("data-mode", mode);
    try {
      localStorage.setItem(LS_THEME_KEY, theme);
      localStorage.setItem(LS_MODE_KEY, mode);
    } catch {}
  }, [theme, mode]);

  const setTheme = useCallback((next: Theme) => setThemeState(next), []);
  const setMode = useCallback((next: Mode) => setModeState(next), []);
  const toggleMode = useCallback(
    () => setModeState((m) => (m === "dark" ? "light" : "dark")),
    [],
  );

  return (
    <ThemeContext.Provider value={{ theme, mode, setTheme, setMode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}
