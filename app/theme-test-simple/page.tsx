"use client";

import { Button } from "@/components/retroui/Button";
import { useTheme } from "@/lib/theme-context";
import { ThemeDebug } from "@/components/ui/theme-debug";

export default function SimpleThemeTest() {
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
          简单主题测试
        </h1>
        
        <div className="bg-card p-6 border-2 border-border">
          <p className="text-card-foreground mb-4">
            当前主题: <strong>{theme}</strong>
          </p>
          
          <Button onClick={handleThemeChange}>
            切换到 {theme === 'default' ? '紫色' : '默认'} 主题
          </Button>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">按钮测试</h2>
          <div className="flex gap-4">
            <Button variant="default">主要按钮</Button>
            <Button variant="secondary">次要按钮</Button>
            <Button variant="outline">轮廓按钮</Button>
          </div>
        </div>

        <div className="bg-muted p-4 border-2 border-border">
          <p className="text-muted-foreground">
            这是一个静音色背景的区域，用于测试颜色对比度。
          </p>
        </div>
      </div>
      
      <ThemeDebug />
    </div>
  );
}