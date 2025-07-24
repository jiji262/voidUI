// Theme configuration system for RetroUI
// This file provides a simple way to configure themes in external projects

export type RetroUITheme = {
  primary: string;
  primaryHover: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  accent: string;
  accentForeground: string;
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  muted: string;
  mutedForeground: string;
  destructive: string;
  destructiveForeground: string;
  border: string;
  backgroundImageLight: string;
  backgroundImageDark: string;
};

// Default RetroUI theme (yellow)
export const defaultTheme: RetroUITheme = {
  primary: '#ffdb33',
  primaryHover: '#ffcc00',
  primaryForeground: '#000',
  secondary: '#000',
  secondaryForeground: '#fff',
  accent: '#ffcc00',
  accentForeground: '#000',
  background: '#fff',
  foreground: '#000',
  card: '#fff',
  cardForeground: '#000',
  muted: '#aeaeae',
  mutedForeground: '#5a5a5a',
  destructive: '#e63946',
  destructiveForeground: '#fff',
  border: '#000',
  backgroundImageLight: 'url("/images/banner_void_2.svg")',
  backgroundImageDark: 'url("/images/bg_void_3.svg")'
};

// Purple theme
export const purpleTheme: RetroUITheme = {
  primary: '#624aff',
  primaryHover: '#523af2',
  primaryForeground: '#fff',
  secondary: '#4a3aac',
  secondaryForeground: '#fff',
  accent: '#a99bff',
  accentForeground: '#000',
  background: '#fff',
  foreground: '#000',
  card: '#fff',
  cardForeground: '#000',
  muted: '#aeaeae',
  mutedForeground: '#5a5a5a',
  destructive: '#e63946',
  destructiveForeground: '#fff',
  border: '#4a3aac',
  backgroundImageLight: 'url("/images/banner_void_2.svg")',
  backgroundImageDark: 'url("/images/bg_void_3.svg")'
};

// Function to apply theme to CSS variables
export function applyRetroUITheme(theme: RetroUITheme, isDarkMode: boolean = false) {
  const root = document.documentElement;
  
  // Apply base colors
  root.style.setProperty('--primary', theme.primary);
  root.style.setProperty('--primary-hover', theme.primaryHover);
  root.style.setProperty('--primary-foreground', theme.primaryForeground);
  root.style.setProperty('--secondary', theme.secondary);
  root.style.setProperty('--secondary-foreground', theme.secondaryForeground);
  root.style.setProperty('--accent', theme.accent);
  root.style.setProperty('--accent-foreground', theme.accentForeground);
  root.style.setProperty('--background', theme.background);
  root.style.setProperty('--foreground', theme.foreground);
  root.style.setProperty('--card', theme.card);
  root.style.setProperty('--card-foreground', theme.cardForeground);
  root.style.setProperty('--muted', theme.muted);
  root.style.setProperty('--muted-foreground', theme.mutedForeground);
  root.style.setProperty('--destructive', theme.destructive);
  root.style.setProperty('--destructive-foreground', theme.destructiveForeground);
  root.style.setProperty('--border', theme.border);
  
  // Apply background image based on mode
  if (isDarkMode) {
    root.style.setProperty('--background-image', theme.backgroundImageDark);
  } else {
    root.style.setProperty('--background-image', theme.backgroundImageLight);
  }
}

// Function to create a custom theme
export function createCustomTheme(
  primary: string,
  primaryHover: string,
  primaryForeground: string,
  secondary: string = '#000',
  secondaryForeground: string = '#fff',
  accent: string = primaryHover,
  accentForeground: string = primaryForeground
): RetroUITheme {
  return {
    primary,
    primaryHover,
    primaryForeground,
    secondary,
    secondaryForeground,
    accent,
    accentForeground,
    background: '#fff',
    foreground: '#000',
    card: '#fff',
    cardForeground: '#000',
    muted: '#aeaeae',
    mutedForeground: '#5a5a5a',
    destructive: '#e63946',
    destructiveForeground: '#fff',
    border: '#000',
    backgroundImageLight: 'url("/images/banner_void_2.svg")',
    backgroundImageDark: 'url("/images/bg_void_3.svg")'
  };
}