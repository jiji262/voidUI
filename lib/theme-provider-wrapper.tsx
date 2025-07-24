"use client";

// 临时包装器，用于测试不同版本的主题提供者
// 可以通过环境变量或其他方式切换

import { ReactNode } from 'react';

// 导入两个版本的主题提供者
import { ThemeProvider as OriginalThemeProvider } from './theme-context';
import { ThemeProvider as SimpleThemeProvider } from './theme-context-simple';

interface ThemeProviderWrapperProps {
  children: ReactNode;
  useSimple?: boolean;
}

export function ThemeProviderWrapper({ children, useSimple = false }: ThemeProviderWrapperProps) {
  if (useSimple) {
    return <SimpleThemeProvider>{children}</SimpleThemeProvider>;
  }
  
  return <OriginalThemeProvider>{children}</OriginalThemeProvider>;
}

// 导出简化版本的hook
export { useTheme } from './theme-context-simple';