"use client";

import React from "react";
import { Icon } from "@/components/ui/icon";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import { useTheme, THEME_META } from "@/lib/theme-context";

/**
 * /theme-demo — Theme sandbox. Exercises the current theme across buttons,
 * forms, alerts, color tokens and text hierarchy, all using the design's
 * raw `.btn` / `.card` / `.input` / `.badge` primitive classes and explicit
 * px sizes (no Tailwind text-* mix) so every page stays on-design.
 */

export default function ThemeDemo() {
  const { theme, mode } = useTheme();
  const meta = THEME_META[theme];

  return (
    <main>
      {/* Hero */}
      <section style={{ padding: "64px 24px 32px", borderBottom: "1.5px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="label" style={{ marginBottom: 12 }}>
            Theme sandbox · 主题沙盒
          </div>
          <h1
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 52,
              fontWeight: 500,
              letterSpacing: "-0.03em",
              margin: "0 0 12px",
              lineHeight: 1,
            }}
          >
            主题演示
          </h1>
          <p
            className="cn"
            style={{
              fontSize: 16,
              color: "var(--fg-muted)",
              maxWidth: 640,
              lineHeight: 1.65,
              margin: "0 0 20px",
            }}
          >
            当前主题：<span style={{ color: "var(--fg)", fontWeight: 600 }}>{meta.label}</span>
            <span style={{ margin: "0 8px", color: "var(--fg-subtle)" }}>·</span>
            模式：<span style={{ color: "var(--fg)", fontWeight: 600 }}>{mode === "dark" ? "深色" : "浅色"}</span>
          </p>
          <ThemeSwitcher />
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: "48px 24px" }}>
        <div
          style={{
            maxWidth: 1024,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          {/* Buttons */}
          <div className="card" style={{ padding: 28 }}>
            <div className="label" style={{ marginBottom: 6 }}>
              Buttons · 按钮
            </div>
            <div className="cn" style={{ fontSize: 13, color: "var(--fg-muted)", marginBottom: 20 }}>
              展示不同变体的按钮在当前主题下的效果
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 12 }}>
              <button className="btn">主要按钮</button>
              <button className="btn secondary">次要按钮</button>
              <button className="btn outline">轮廓按钮</button>
              <button className="btn ghost">链接按钮</button>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              <button className="btn sm">小按钮</button>
              <button className="btn">中等按钮</button>
              <button className="btn lg">大按钮</button>
            </div>
          </div>

          {/* Form */}
          <div className="card" style={{ padding: 28 }}>
            <div className="label" style={{ marginBottom: 6 }}>
              Forms · 表单元素
            </div>
            <div className="cn" style={{ fontSize: 13, color: "var(--fg-muted)", marginBottom: 20 }}>
              输入框和其他表单元素的主题适配
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <input className="input" placeholder="请输入文本..." />
              <input className="input" placeholder="错误状态示例" />
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                <span className="badge">默认徽章</span>
                <span className="badge primary">实心徽章</span>
                <span className="badge ghost">轮廓徽章</span>
                <span className="badge ink">主色徽章</span>
              </div>
            </div>
          </div>

          {/* Alerts */}
          <div className="card" style={{ padding: 28 }}>
            <div className="label" style={{ marginBottom: 6 }}>
              Alerts · 提示
            </div>
            <div className="cn" style={{ fontSize: 13, color: "var(--fg-muted)", marginBottom: 20 }}>
              不同语义下的提示框
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {([
                { v: "info", t: "信息提示", d: "这是一个普通的信息提示框", icon: "info" as const },
                { v: "success", t: "保存成功", d: "Your changes were published.", icon: "check" as const },
                { v: "warning", t: "注意事项", d: "API 用量已达 80%。", icon: "alert" as const },
                { v: "danger", t: "错误提示", d: "这是一个错误状态的提示框", icon: "x" as const },
              ] as const).map((a) => (
                <div
                  key={a.v}
                  role={a.v === "danger" ? "alert" : "status"}
                  style={{
                    display: "flex",
                    gap: 12,
                    padding: 14,
                    border: "1.5px solid var(--border)",
                    borderRadius: "var(--r)",
                    background: `var(--alert-${a.v}-bg, var(--bg-elev))`,
                    color: "var(--fg)",
                    boxShadow: "var(--sh-sm)",
                  }}
                >
                  <div style={{ flexShrink: 0, marginTop: 1 }}>
                    <Icon name={a.icon} size={16} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontWeight: 600,
                        fontSize: 13,
                        marginBottom: 2,
                      }}
                    >
                      {a.t}
                    </div>
                    <div style={{ fontSize: 13, color: "var(--fg-muted)", lineHeight: 1.55 }}>
                      {a.d}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Color swatches */}
          <div className="card" style={{ padding: 28 }}>
            <div className="label" style={{ marginBottom: 6 }}>
              Colors · 主题颜色
            </div>
            <div className="cn" style={{ fontSize: 13, color: "var(--fg-muted)", marginBottom: 20 }}>
              当前主题的核心颜色变量
            </div>
            <div
              className="vui-theme-demo-swatches"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 12,
              }}
            >
              {[
                { name: "primary", var: "var(--primary)" },
                { name: "foreground", var: "var(--fg)" },
                { name: "muted", var: "var(--border-subtle)" },
                { name: "destructive", var: "var(--danger)" },
              ].map((s) => (
                <div key={s.name}>
                  <div
                    style={{
                      height: 56,
                      background: s.var,
                      border: "1.5px solid var(--border)",
                      borderRadius: "var(--r-sm)",
                    }}
                  />
                  <div className="label" style={{ marginTop: 8, textAlign: "center" }}>
                    {s.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Text hierarchy */}
          <div className="card" style={{ padding: 28 }}>
            <div className="label" style={{ marginBottom: 6 }}>
              Typography · 文字层级
            </div>
            <div className="cn" style={{ fontSize: 13, color: "var(--fg-muted)", marginBottom: 20 }}>
              The quick brown fox / 敏捷的狐狸跃过懒犬
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 32,
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                }}
              >
                Display heading
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 20,
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                }}
              >
                Mono subheading
              </div>
              <p className="cn" style={{ fontSize: 16, color: "var(--fg)", margin: 0 }}>
                正文文字 — body paragraph, 15-16px sans with CJK mixing.
              </p>
              <p style={{ fontSize: 14, color: "var(--fg-muted)", margin: 0, lineHeight: 1.6 }}>
                Secondary text · 次要信息 — muted foreground, 14px.
              </p>
              <p style={{ fontSize: 13, color: "var(--fg-subtle)", margin: 0 }}>
                Subtle · 最次要 — fg-subtle, 13px.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
