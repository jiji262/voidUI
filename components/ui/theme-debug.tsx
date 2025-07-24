"use client";

import { useTheme } from "@/lib/theme-context";
import { useEffect, useState } from "react";

export function ThemeDebug() {
  const { theme, themeConfig } = useTheme();
  const [cssVars, setCssVars] = useState<Record<string, string>>({});
  const [dataTheme, setDataTheme] = useState<string>('');

  useEffect(() => {
    const updateDebugInfo = () => {
      const root = document.documentElement;
      const computedStyle = getComputedStyle(root);
      
      // 获取CSS变量值
      const vars: Record<string, string> = {};
      const varNames = [
        '--primary',
        '--primary-hover',
        '--primary-foreground',
        '--secondary',
        '--secondary-foreground',
        '--background',
        '--foreground',
        '--border'
      ];
      
      varNames.forEach(varName => {
        vars[varName] = computedStyle.getPropertyValue(varName).trim();
      });
      
      setCssVars(vars);
      setDataTheme(root.getAttribute('data-theme') || '');
    };

    updateDebugInfo();
    
    // 监听主题变化
    const observer = new MutationObserver(updateDebugInfo);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme', 'class']
    });

    return () => observer.disconnect();
  }, [theme]);

  return (
    <div className="fixed bottom-4 right-4 bg-card border-2 border-border p-4 text-xs max-w-xs">
      <h3 className="font-bold mb-2">主题调试信息</h3>
      <div className="space-y-1">
        <p><strong>Context主题:</strong> {theme}</p>
        <p><strong>DOM data-theme:</strong> {dataTheme}</p>
        <p><strong>深色模式:</strong> {document.documentElement.classList.contains('dark') ? '是' : '否'}</p>
      </div>
      
      <h4 className="font-bold mt-3 mb-1">CSS变量:</h4>
      <div className="space-y-1">
        {Object.entries(cssVars).map(([key, value]) => (
          <div key={key} className="flex items-center gap-2">
            <div 
              className="w-3 h-3 border border-gray-400 rounded"
              style={{ backgroundColor: value }}
            />
            <span>{key}: {value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}