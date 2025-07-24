"use client";

import { Button } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import { useTheme } from "@/lib/theme-context";
import { useEffect, useState } from "react";

export default function PurpleTestPage() {
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // 检查当前是否为深色模式
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    
    checkDarkMode();
    
    // 监听深色模式变化
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  const switchToPurple = () => {
    setTheme('purple');
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* 控制面板 */}
        <Card className="p-6">
          <Card.Header>
            <Card.Title>紫色主题测试页面</Card.Title>
            <Card.Description>
              测试紫色主题在不同模式下的表现，特别是按钮文字颜色
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <div className="flex flex-wrap gap-4 mb-4">
              <Button onClick={switchToPurple} variant="outline">
                切换到紫色主题
              </Button>
              <Button onClick={toggleDarkMode} variant="outline">
                切换 {isDark ? '浅色' : '深色'} 模式
              </Button>
              <ThemeSwitcher />
            </div>
            <div className="text-sm text-muted-foreground">
              <p>当前主题: <strong>{theme}</strong></p>
              <p>当前模式: <strong>{isDark ? '深色' : '浅色'}</strong></p>
            </div>
          </Card.Content>
        </Card>

        {/* 按钮测试区域 */}
        <Card className="p-6">
          <Card.Header>
            <Card.Title>按钮文字颜色测试</Card.Title>
            <Card.Description>
              确保所有按钮在深色和浅色模式下文字都清晰可见
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <div className="space-y-6">
              {/* 主要按钮 */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">主要按钮 (Primary)</h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="default" size="sm">小按钮</Button>
                  <Button variant="default" size="md">中等按钮</Button>
                  <Button variant="default" size="lg">大按钮</Button>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  文字颜色应该是: {theme === 'purple' ? '白色 (#ffffff)' : '黑色 (#000)'}
                </p>
              </div>

              {/* 次要按钮 */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">次要按钮 (Secondary)</h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="secondary" size="sm">小按钮</Button>
                  <Button variant="secondary" size="md">中等按钮</Button>
                  <Button variant="secondary" size="lg">大按钮</Button>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  文字颜色应该根据背景自动调整
                </p>
              </div>

              {/* 轮廓按钮 */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">轮廓按钮 (Outline)</h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="outline" size="sm">小按钮</Button>
                  <Button variant="outline" size="md">中等按钮</Button>
                  <Button variant="outline" size="lg">大按钮</Button>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  文字颜色应该跟随前景色
                </p>
              </div>
            </div>
          </Card.Content>
        </Card>

        {/* 颜色变量显示 */}
        <Card className="p-6">
          <Card.Header>
            <Card.Title>当前主题颜色变量</Card.Title>
            <Card.Description>
              显示当前主题下的实际颜色值
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-primary border border-border rounded"></div>
                  <span>Primary: var(--primary)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-primary-hover border border-border rounded"></div>
                  <span>Primary Hover: var(--primary-hover)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-secondary border border-border rounded"></div>
                  <span>Secondary: var(--secondary)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-accent border border-border rounded"></div>
                  <span>Accent: var(--accent)</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-background border border-border rounded"></div>
                  <span>Background: var(--background)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-foreground border border-border rounded"></div>
                  <span>Foreground: var(--foreground)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-muted border border-border rounded"></div>
                  <span>Muted: var(--muted)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 border-2 border-border rounded"></div>
                  <span>Border: var(--border)</span>
                </div>
              </div>
            </div>
          </Card.Content>
        </Card>

        {/* 悬停效果测试 */}
        <Card className="p-6">
          <Card.Header>
            <Card.Title>悬停效果测试</Card.Title>
            <Card.Description>
              测试按钮悬停时的颜色变化，确保没有黄色元素
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                将鼠标悬停在下面的按钮上，观察颜色变化：
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="default">悬停测试 - 主要</Button>
                <Button variant="secondary">悬停测试 - 次要</Button>
                <Button variant="outline">悬停测试 - 轮廓</Button>
              </div>
              <p className="text-sm text-muted-foreground">
                紫色主题下，悬停效果应该只使用紫色系颜色，不应该出现黄色
              </p>
            </div>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
}