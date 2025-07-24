"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { defaultTheme, purpleTheme, RetroUITheme } from "@/lib/theme-config";

// Define theme types
export type Theme = "default" | "purple";

export type ThemeColors = {
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  primary: string;
  primaryHover: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  destructive: string;
  destructiveForeground: string;
  border: string;
  backgroundImage: string;
};

export type ThemeConfig = {
  light: ThemeColors;
  dark: ThemeColors;
};

// Convert RetroUITheme to ThemeConfig
function convertToThemeConfig(theme: RetroUITheme): ThemeConfig {
  const isPurpleTheme = theme.primary === "#8b5cf6";

  return {
    light: {
      background: theme.background,
      foreground: theme.foreground,
      card: theme.card,
      cardForeground: theme.cardForeground,
      primary: theme.primary,
      primaryHover: theme.primaryHover,
      primaryForeground: theme.primaryForeground,
      secondary: theme.secondary,
      secondaryForeground: theme.secondaryForeground,
      muted: theme.muted,
      mutedForeground: theme.mutedForeground,
      accent: theme.accent,
      accentForeground: theme.accentForeground,
      destructive: theme.destructive,
      destructiveForeground: theme.destructiveForeground,
      border: theme.border,
      backgroundImage: theme.backgroundImageLight,
    },
    dark: {
      background: isPurpleTheme ? "#0f0b1f" : "#1a1a1a",
      foreground: isPurpleTheme ? "#f1f5f9" : "#f5f5f5",
      card: isPurpleTheme ? "#1e1b4b" : "#242424",
      cardForeground: isPurpleTheme ? "#f1f5f9" : "#f5f5f5",
      primary: isPurpleTheme ? "#a78bfa" : theme.primary,
      primaryHover: isPurpleTheme ? "#8b5cf6" : theme.primaryHover,
      primaryForeground: "#ffffff",
      secondary:
        theme.secondary === "#000"
          ? "#3a3a3a"
          : isPurpleTheme
            ? "#312e81"
            : theme.secondary,
      secondaryForeground: isPurpleTheme ? "#f1f5f9" : "#f5f5f5",
      muted: isPurpleTheme ? "#4c1d95" : "#3f3f46",
      mutedForeground: isPurpleTheme ? "#c7d2fe" : "#a0a0a0",
      accent: isPurpleTheme ? "#c4b5fd" : theme.accent,
      accentForeground: isPurpleTheme ? "#1e1b4b" : theme.accentForeground,
      destructive: theme.destructive,
      destructiveForeground: theme.destructiveForeground,
      border:
        theme.border === "#000"
          ? "#3a3a3a"
          : isPurpleTheme
            ? "#6366f1"
            : theme.border,
      backgroundImage: theme.backgroundImageDark,
    },
  };
}

// Define themes
export const themes: Record<Theme, ThemeConfig> = {
  default: convertToThemeConfig(defaultTheme),
  purple: convertToThemeConfig(purpleTheme),
};

// Create context
type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  themeConfig: ThemeConfig;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 应用主题颜色的辅助函数
function applyThemeToDOM(theme: Theme) {
  const root = document.documentElement;
  const isDark = root.classList.contains("dark");
  const themeColors = isDark ? themes[theme].dark : themes[theme].light;

  // Set theme data attribute
  root.setAttribute("data-theme", theme);

  // Apply CSS variables
  Object.entries(themeColors).forEach(([key, value]) => {
    root.style.setProperty(`--${key}`, value);
  });
}

// Theme provider component
export function ThemeProvider({ children }: { children: ReactNode }) {
  // 初始化主题状态
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("retro-ui-theme") as Theme | null;
      return saved && saved in themes ? saved : "default";
    }
    return "default";
  });

  // 自定义setTheme函数，处理localStorage和DOM更新
  const setTheme = (newTheme: Theme) => {
    console.log("设置主题:", newTheme);
    setThemeState(newTheme);

    // 立即保存到localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("retro-ui-theme", newTheme);
      applyThemeToDOM(newTheme);
    }
  };

  // 初始化时应用主题
  useEffect(() => {
    if (typeof window !== "undefined") {
      applyThemeToDOM(theme);
    }
  }, []);

  // 监听深色模式变化
  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          applyThemeToDOM(theme);
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, [theme]);

  const themeConfig = themes[theme];

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themeConfig }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook to use theme context
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
