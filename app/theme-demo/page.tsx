"use client";

import { Button } from "@/components/voidui/Button";
import { Card } from "@/components/voidui/Card";
import { Input } from "@/components/voidui/Input";
import { Badge } from "@/components/voidui/Badge";
import { Alert } from "@/components/voidui/Alert";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import { useTheme } from "@/lib/theme-context";

export default function ThemeDemo() {
  const { theme } = useTheme();
  
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">
            主题演示页面
          </h1>
          <p className="text-muted-foreground">
            当前主题: <span className="font-semibold">{theme === 'default' ? '默认黄色' : '全新优化紫色'}</span>
          </p>
          <ThemeSwitcher />
        </div>

        {/* 按钮演示 */}
        <Card className="p-6">
          <Card.Header>
            <Card.Title>按钮组件演示</Card.Title>
            <Card.Description>
              展示不同变体的按钮在当前主题下的效果
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <div className="flex flex-wrap gap-4">
              <Button variant="default">主要按钮</Button>
              <Button variant="secondary">次要按钮</Button>
              <Button variant="outline">轮廓按钮</Button>
              <Button variant="link">链接按钮</Button>
            </div>
            <div className="mt-4 flex flex-wrap gap-4">
              <Button size="sm">小按钮</Button>
              <Button size="md">中等按钮</Button>
              <Button size="lg">大按钮</Button>
            </div>
          </Card.Content>
        </Card>

        {/* 输入框和表单元素 */}
        <Card className="p-6">
          <Card.Header>
            <Card.Title>表单元素演示</Card.Title>
            <Card.Description>
              输入框和其他表单元素的主题适配
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <div className="space-y-4">
              <Input placeholder="请输入文本..." />
              <Input placeholder="错误状态示例" aria-invalid />
              <div className="flex gap-2">
                <Badge>默认徽章</Badge>
                <Badge variant="solid">实心徽章</Badge>
                <Badge variant="outline">轮廓徽章</Badge>
                <Badge variant="surface">表面徽章</Badge>
              </div>
            </div>
          </Card.Content>
        </Card>

        {/* 警告和状态 */}
        <Card className="p-6">
          <Card.Header>
            <Card.Title>状态和警告</Card.Title>
            <Card.Description>
              不同状态下的组件颜色表现
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <div className="space-y-4">
              <Alert>
                <Alert.Title>信息提示</Alert.Title>
                <Alert.Description>
                  这是一个普通的信息提示框
                </Alert.Description>
              </Alert>
              <Alert variant="destructive">
                <Alert.Title>错误提示</Alert.Title>
                <Alert.Description>
                  这是一个错误状态的提示框
                </Alert.Description>
              </Alert>
            </div>
          </Card.Content>
        </Card>

        {/* 颜色展示 */}
        <Card className="p-6">
          <Card.Header>
            <Card.Title>主题颜色展示</Card.Title>
            <Card.Description>
              当前主题的主要颜色变量
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <div className="w-full h-16 bg-primary rounded border-2 border-border"></div>
                <p className="text-sm text-center">Primary</p>
              </div>
              <div className="space-y-2">
                <div className="w-full h-16 bg-secondary rounded border-2 border-border"></div>
                <p className="text-sm text-center">Secondary</p>
              </div>
              <div className="space-y-2">
                <div className="w-full h-16 bg-accent rounded border-2 border-border"></div>
                <p className="text-sm text-center">Accent</p>
              </div>
              <div className="space-y-2">
                <div className="w-full h-16 bg-muted rounded border-2 border-border"></div>
                <p className="text-sm text-center">Muted</p>
              </div>
            </div>
          </Card.Content>
        </Card>

        {/* 文字颜色演示 */}
        <Card className="p-6">
          <Card.Header>
            <Card.Title>文字颜色演示</Card.Title>
            <Card.Description>
              不同层级的文字颜色效果
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <div className="space-y-3">
              <p className="text-foreground text-lg font-semibold">
                主要文字颜色 (foreground)
              </p>
              <p className="text-muted-foreground">
                次要文字颜色 (muted-foreground)
              </p>
              <p className="text-primary font-medium">
                主题色文字 (primary)
              </p>
              <p className="text-secondary-foreground bg-secondary px-3 py-1 rounded">
                次要背景上的文字
              </p>
              <p className="text-accent-foreground bg-accent px-3 py-1 rounded">
                强调背景上的文字
              </p>
            </div>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
}