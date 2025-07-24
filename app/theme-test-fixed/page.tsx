"use client";

import { Button } from "@/components/retroui/Button";
import { useTheme } from "@/lib/theme-context-simple";

export default function FixedThemeTest() {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    console.log('当前主题:', theme);
    const newTheme = theme === 'default' ? 'purple' : 'default';
    console.log('切换到:', newTheme);
    setTheme(newTheme);
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-foreground">
          修复版主题测试
        </h1>
        
        <div className="bg-card p-6 border-2 border-border shadow-md">
          <p className="text-card-foreground mb-4">
            当前主题: <strong className="text-primary">{theme}</strong>
          </p>
          
          <Button onClick={handleThemeChange}>
            切换到 {theme === 'default' ? '紫色' : '默认'} 主题
          </Button>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">按钮测试</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="default">主要按钮</Button>
            <Button variant="secondary">次要按钮</Button>
            <Button variant="outline">轮廓按钮</Button>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button variant="default" size="sm">小按钮</Button>
            <Button variant="default" size="md">中等按钮</Button>
            <Button variant="default" size="lg">大按钮</Button>
          </div>
        </div>

        <div className="bg-muted p-4 border-2 border-border shadow-md">
          <p className="text-muted-foreground">
            这是一个静音色背景的区域，用于测试颜色对比度。
          </p>
        </div>

        <div className="bg-accent p-4 border-2 border-border shadow-md">
          <p className="text-accent-foreground">
            这是一个强调色背景的区域。
          </p>
        </div>

        <div className="space-y-2 text-sm">
          <h3 className="font-semibold">调试信息:</h3>
          <p>主题状态: {theme}</p>
          <p>localStorage: {typeof window !== 'undefined' ? localStorage.getItem('retro-ui-theme') : 'N/A'}</p>
          <p>DOM data-theme: {typeof window !== 'undefined' ? document.documentElement.getAttribute('data-theme') : 'N/A'}</p>
        </div>
      </div>
    </div>
  );
}