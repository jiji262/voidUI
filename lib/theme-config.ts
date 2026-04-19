// Theme configuration system for voidUI
// This file provides a simple way to configure themes in external projects

export type VoidUITheme = {
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

// Default voidUI theme (yellow)
export const defaultTheme: VoidUITheme = {
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

// Purple theme - 全新优化的紫色配色方案
export const purpleTheme: VoidUITheme = {
  primary: '#8b5cf6',        // 明亮的紫色，确保良好的可见性
  primaryHover: '#7c3aed',   // 深紫色悬停状态，避免黄色
  primaryForeground: '#ffffff', // 纯白色文字，确保最佳对比度
  secondary: '#1e1b4b',      // 深紫蓝色作为次要色
  secondaryForeground: '#f8fafc', // 几乎白色的文字，确保深色背景下可读性
  accent: '#d8b4fe',         // 淡紫色强调色，柔和优雅
  accentForeground: '#581c87', // 深紫色文字，确保对比度
  background: '#ffffff',     // 纯白背景
  foreground: '#0f172a',     // 深色文字，确保可读性
  card: '#ffffff',           // 白色卡片
  cardForeground: '#0f172a', // 深色卡片文字
  muted: '#e9d5ff',          // 非常淡的紫色作为静音背景
  mutedForeground: '#6b21a8', // 中等深度紫色作为静音文字
  destructive: '#dc2626',    // 红色保持不变
  destructiveForeground: '#ffffff',
  border: '#7c3aed',         // 使用主要紫色作为边框
  backgroundImageLight: 'url("/images/banner_void_2.svg")',
  backgroundImageDark: 'url("/images/bg_void_3.svg")'
};

// Function to apply theme to CSS variables
export function applyVoidUITheme(theme: VoidUITheme, isDarkMode: boolean = false) {
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
): VoidUITheme {
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
