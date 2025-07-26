"use client";

import { Badge } from "@/components/retroui/Badge";
import { Card } from "@/components/retroui/Card";
import { useTheme } from "@/lib/theme-context";

export default function BadgeTest() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "default" ? "purple" : "default");
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* 控制面板 */}
        <Card className="p-6">
          <Card.Header>
            <Card.Title>Badge 组件测试</Card.Title>
            <Card.Description>
              测试Badge组件的各种变体和尺寸，参考RetroUI官方样式
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <div className="flex gap-4 mb-4">
              <button
                onClick={toggleTheme}
                className="px-4 py-2 bg-primary text-primary-foreground border-2 border-border shadow-md hover:shadow-none transition hover:translate-y-1"
              >
                切换到 {theme === "default" ? "紫色" : "默认"} 主题
              </button>
            </div>
            <div className="text-sm text-muted-foreground">
              <p>
                <strong>当前主题:</strong> {theme}
              </p>
            </div>
          </Card.Content>
        </Card>

        {/* Badge 变体测试 */}
        <Card className="p-6">
          <Card.Header>
            <Card.Title>Badge 变体</Card.Title>
            <Card.Description>
              Default、Outline、Solid、Surface 四种变体
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <div className="flex flex-wrap gap-4">
              <Badge variant="default">Default</Badge>
              <Badge variant="outline">Outlined</Badge>
              <Badge variant="solid">Solid</Badge>
              <Badge variant="surface">Surface</Badge>
            </div>
          </Card.Content>
        </Card>

        {/* Badge 尺寸测试 */}
        <Card className="p-6">
          <Card.Header>
            <Card.Title>Badge 尺寸</Card.Title>
            <Card.Description>Small、Medium、Large 三种尺寸</Card.Description>
          </Card.Header>
          <Card.Content>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="w-16 text-sm">Small:</span>
                <Badge size="sm" variant="default">
                  small
                </Badge>
                <Badge size="sm" variant="outline">
                  small
                </Badge>
                <Badge size="sm" variant="solid">
                  small
                </Badge>
                <Badge size="sm" variant="surface">
                  small
                </Badge>
              </div>

              <div className="flex items-center gap-4">
                <span className="w-16 text-sm">Medium:</span>
                <Badge size="md" variant="default">
                  medium
                </Badge>
                <Badge size="md" variant="outline">
                  medium
                </Badge>
                <Badge size="md" variant="solid">
                  medium
                </Badge>
                <Badge size="md" variant="surface">
                  medium
                </Badge>
              </div>

              <div className="flex items-center gap-4">
                <span className="w-16 text-sm">Large:</span>
                <Badge size="lg" variant="default">
                  large
                </Badge>
                <Badge size="lg" variant="outline">
                  large
                </Badge>
                <Badge size="lg" variant="solid">
                  large
                </Badge>
                <Badge size="lg" variant="surface">
                  large
                </Badge>
              </div>
            </div>
          </Card.Content>
        </Card>

        {/* 实际使用示例 */}
        <Card className="p-6">
          <Card.Header>
            <Card.Title>实际使用示例</Card.Title>
            <Card.Description>在不同场景下使用Badge组件</Card.Description>
          </Card.Header>
          <Card.Content>
            <div className="space-y-6">
              {/* 状态标签 */}
              <div>
                <h3 className="text-lg font-semibold mb-3">状态标签</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="default">待处理</Badge>
                  <Badge variant="surface">进行中</Badge>
                  <Badge variant="solid">已完成</Badge>
                  <Badge variant="outline">已取消</Badge>
                </div>
              </div>

              {/* 分类标签 */}
              <div>
                <h3 className="text-lg font-semibold mb-3">分类标签</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="default" size="sm">
                    前端
                  </Badge>
                  <Badge variant="default" size="sm">
                    后端
                  </Badge>
                  <Badge variant="default" size="sm">
                    设计
                  </Badge>
                  <Badge variant="default" size="sm">
                    产品
                  </Badge>
                </div>
              </div>

              {/* 数量标签 */}
              <div>
                <h3 className="text-lg font-semibold mb-3">数量标签</h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span>消息</span>
                    <Badge variant="surface" size="sm">
                      5
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>通知</span>
                    <Badge variant="solid" size="sm">
                      12
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>待办</span>
                    <Badge variant="outline" size="sm">
                      3
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </Card.Content>
        </Card>

        {/* 主题对比 */}
        <Card className="p-6">
          <Card.Header>
            <Card.Title>主题对比</Card.Title>
            <Card.Description>在不同主题下Badge的表现</Card.Description>
          </Card.Header>
          <Card.Content>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Default 变体 (灰色背景)</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  使用固定的灰色背景，不受主题影响
                </p>
                <Badge variant="default">Default Badge</Badge>
              </div>

              <div>
                <h4 className="font-semibold mb-2">
                  Surface 变体 (主题色背景)
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  使用主题的primary颜色作为背景
                </p>
                <Badge variant="surface">Surface Badge</Badge>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Solid 变体 (前景色背景)</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  使用主题的foreground颜色作为背景
                </p>
                <Badge variant="solid">Solid Badge</Badge>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Outline 变体 (轮廓样式)</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  使用outline样式，跟随主题前景色
                </p>
                <Badge variant="outline">Outline Badge</Badge>
              </div>
            </div>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
}
