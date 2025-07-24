"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { defaultTheme, purpleTheme, RetroUITheme } from '@/lib/theme-config';

// Define theme types
export type Theme = 'default' | 'purple';

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
      backgroundImage: theme.backgroundImageLight
    },
    dark: {
      background: '#1a1a1a',
      foreground: '#f5f5f5',
      card: '#242424',
      cardForeground: '#f5f5f5',
      primary: theme.primary,
      primaryHover: theme.primaryHover,
      primaryForeground: theme.primaryForeground,
      secondary: theme.secondary === '#000' ? '#3a3a3a' : theme.secondary,
      secondaryForeground: theme.secondaryForeground === '#fff' ? '#f5f5f5' : theme.secondaryForeground,
      muted: '#3f3f46',
      mutedForeground: '#a0a0a0',
      accent: theme.accent,
      accentForeground: theme.accentForeground,
      destructive: theme.destructive,
      destructiveForeground: theme.destructiveForeground,
      border: theme.border === '#000' ? '#3a3a3a' : theme.border,
      backgroundImage: theme.backgroundImageDark
    }
  };
}

// Define themes
export const themes: Record<Theme, ThemeConfig> = {
  default: convertToThemeConfig(defaultTheme),
  purple: convertToThemeConfig(purpleTheme)
};

// Create context
type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  themeConfig: ThemeConfig;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Theme provider component
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('default');
  
  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('retro-ui-theme') as Theme | null;
    if (savedTheme && savedTheme in themes) {
      setTheme(savedTheme);
    }
  }, []);
  
  // Apply theme colors when theme or dark mode changes
  useEffect(() => {
    // Save theme to localStorage
    localStorage.setItem('retro-ui-theme', theme);
    
    // Apply CSS variables to root
    const root = document.documentElement;
    const isDark = root.classList.contains('dark');
    const themeColors = isDark ? themes[theme].dark : themes[theme].light;
    
    Object.entries(themeColors).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });
  }, [theme]);
  
  // Re-apply colors when dark mode changes
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          // Apply CSS variables to root
          const root = document.documentElement;
          const isDark = root.classList.contains('dark');
          const themeColors = isDark ? themes[theme].dark : themes[theme].light;
          
          Object.entries(themeColors).forEach(([key, value]) => {
            root.style.setProperty(`--${key}`, value);
          });
        }
      });
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
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
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}