"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/icon";

/**
 * Home — 1:1 port of the Claude Design handoff (project/pages/Home.jsx).
 * Hero → install strip → feature grid → preview grid → dark CTA.
 *
 * Uses design tokens (var(--bg), var(--fg), ...) and the font-display /
 * font-sans / font-mono CSS variables that are set per theme in
 * app/global.css. Components intentionally use inline styles to stay pixel-
 * identical with the design prototype; the production voidUI components in
 * components/voidui/ stay available for consumers but the home page uses
 * the design's lightweight primitives directly for fidelity.
 */

function Btn({
  variant = "default",
  size = "md",
  children,
  className = "",
  style = {},
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}) {
  const classes = [
    "btn",
    variant === "default" ? "" : variant,
    size === "md" ? "" : size,
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <button className={classes} style={style} {...props}>
      {children}
    </button>
  );
}

function Badge({
  variant = "default",
  children,
  style = {},
}: {
  variant?: "default" | "primary" | "ink" | "ghost";
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <span className={`badge${variant === "default" ? "" : " " + variant}`} style={style}>
      {children}
    </span>
  );
}

function Card({
  children,
  style = {},
  lift = false,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  lift?: boolean;
}) {
  return (
    <div className={`card${lift ? " lift" : ""}`} style={style}>
      {children}
    </div>
  );
}

function Avatar({
  size = 36,
  label,
  color = "var(--primary)",
}: {
  size?: number;
  label: string;
  color?: string;
}) {
  return (
    <div
      style={{
        width: size,
        height: size,
        border: "1.5px solid var(--border)",
        borderRadius: "50%",
        background: color,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-mono)",
        fontSize: Math.round(size * 0.38),
        fontWeight: 600,
        color: "var(--primary-fg)",
        flexShrink: 0,
      }}
    >
      {label}
    </div>
  );
}

function Progress({ value }: { value: number }) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      style={{
        width: "100%",
        height: 12,
        border: "1.5px solid var(--border)",
        borderRadius: "var(--r-sm)",
        background: "var(--bg-elev)",
        overflow: "hidden",
        boxShadow: "var(--sh-xs)",
      }}
    >
      <div
        style={{
          width: `${pct}%`,
          height: "100%",
          background: "var(--primary)",
          transition: "width 240ms cubic-bezier(.4,0,.2,1)",
        }}
      />
    </div>
  );
}

function Alert({
  variant = "default",
  title,
  icon,
  children,
}: {
  variant?: "default" | "info" | "success" | "warning" | "danger";
  title?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  const bgMap: Record<string, string> = {
    default: "var(--bg-elev)",
    info: "var(--alert-info-bg, var(--bg-elev))",
    success: "var(--alert-success-bg, var(--bg-elev))",
    warning: "var(--alert-warning-bg, var(--bg-elev))",
    danger: "var(--alert-danger-bg, var(--bg-elev))",
  };
  return (
    <div
      role={variant === "danger" ? "alert" : "status"}
      style={{
        display: "flex",
        gap: 12,
        padding: 14,
        border: "1.5px solid var(--border)",
        borderRadius: "var(--r)",
        background: bgMap[variant],
        color: "var(--fg)",
        boxShadow: "var(--sh-sm)",
      }}
    >
      {icon && <div style={{ flexShrink: 0, marginTop: 1 }}>{icon}</div>}
      <div style={{ flex: 1, minWidth: 0 }}>
        {title && (
          <div
            className="mono"
            style={{ fontWeight: 600, fontSize: 13, marginBottom: 2 }}
          >
            {title}
          </div>
        )}
        <div style={{ fontSize: 13, color: "var(--fg-muted)", lineHeight: 1.55 }}>
          {children}
        </div>
      </div>
    </div>
  );
}

function Switch({ checked }: { checked: boolean }) {
  return (
    <span
      role="switch"
      aria-checked={checked}
      style={{
        width: 40,
        height: 22,
        padding: 2,
        border: "1.5px solid var(--border)",
        borderRadius: "var(--r-lg)",
        background: checked ? "var(--primary)" : "var(--bg-elev)",
        display: "inline-flex",
        alignItems: "center",
        flexShrink: 0,
        transition: "background 160ms",
      }}
    >
      <span
        style={{
          width: 15,
          height: 15,
          background: checked ? "var(--primary-fg)" : "var(--fg)",
          borderRadius: "50%",
          transform: checked ? "translateX(18px)" : "translateX(0)",
          transition: "transform 180ms cubic-bezier(.4,0,.2,1)",
        }}
      />
    </span>
  );
}

function Checkbox({ checked, label }: { checked: boolean; label: string }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        fontSize: 14,
        color: "var(--fg)",
      }}
    >
      <span
        style={{
          width: 18,
          height: 18,
          border: "1.5px solid var(--border)",
          borderRadius: "var(--r-sm)",
          background: checked ? "var(--primary)" : "var(--bg-elev)",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "var(--sh-xs)",
          flexShrink: 0,
        }}
      >
        {checked && (
          <Icon
            name="check"
            size={12}
            style={{ color: "var(--primary-fg)", strokeWidth: 3 }}
          />
        )}
      </span>
      {label}
    </span>
  );
}

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section
        style={{
          padding: "96px 24px 64px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          className="vui-home-hero"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.25fr 1fr",
            gap: 64,
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                gap: 8,
                marginBottom: 24,
                flexWrap: "wrap",
              }}
            >
              <Badge variant="primary">
                <Icon name="sparkle" size={11} /> v2.0 · 8 themes
              </Badge>
              <Badge variant="ghost">42 components</Badge>
              <Badge variant="ghost">中英双语</Badge>
            </div>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 68,
                lineHeight: 0.98,
                letterSpacing: "-0.035em",
                fontWeight: 500,
                margin: "0 0 16px",
              }}
            >
              Components
              <br />
              <span style={{ color: "var(--fg-muted)" }}>with</span> character.
            </h1>
            <div
              className="cn"
              style={{
                fontSize: 22,
                fontWeight: 500,
                letterSpacing: "0.01em",
                marginBottom: 24,
                lineHeight: 1.4,
              }}
            >
              有性格的组件库 · 八套完整主题 · 中英一等公民
            </div>
            <p
              style={{
                fontSize: 16,
                color: "var(--fg-muted)",
                maxWidth: 540,
                marginBottom: 32,
                lineHeight: 1.65,
              }}
            >
              voidUI 是一套基于 React 的组件库，提供八套精心调校的配色方案 —
              从极简 Swiss 到赛博终端，从编辑部杂志到日系清冷。每一套都支持深浅色模式，中英文混排经过逐字审校。
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link
                href="/themes"
                style={{ textDecoration: "none" }}
              >
                <Btn size="lg">
                  Browse themes · 查看主题 <Icon name="arrow-right" size={14} />
                </Btn>
              </Link>
              <Link href="/components" style={{ textDecoration: "none" }}>
                <Btn size="lg" variant="outline">
                  <Icon name="layers" size={14} /> All components
                </Btn>
              </Link>
            </div>
            <div
              style={{
                marginTop: 40,
                display: "flex",
                gap: 32,
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 26,
                    fontWeight: 600,
                  }}
                >
                  8
                </div>
                <div className="label" style={{ marginTop: 2 }}>
                  Themes · 主题
                </div>
              </div>
              <div style={{ width: 1, height: 40, background: "var(--border-subtle)" }} />
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 26,
                    fontWeight: 600,
                  }}
                >
                  42
                </div>
                <div className="label" style={{ marginTop: 2 }}>
                  Components
                </div>
              </div>
              <div style={{ width: 1, height: 40, background: "var(--border-subtle)" }} />
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 26,
                    fontWeight: 600,
                  }}
                >
                  2
                </div>
                <div className="label" style={{ marginTop: 2 }}>
                  Modes · 明暗
                </div>
              </div>
            </div>
          </div>

          {/* Stacked floating cards */}
          <div className="vui-home-hero-stack" style={{ position: "relative", height: 480 }}>
            <Card
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: 280,
                padding: 20,
                transform: "rotate(1.5deg)",
                zIndex: 1,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 12,
                }}
              >
                <Avatar size={32} label="林" />
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontWeight: 600,
                      fontSize: 13,
                    }}
                  >
                    林晚舟
                  </div>
                  <div style={{ fontSize: 11, color: "var(--fg-muted)" }}>
                    设计总监 · Lead
                  </div>
                </div>
              </div>
              <p
                className="cn"
                style={{ fontSize: 13, margin: 0, color: "var(--fg-muted)" }}
              >
                &quot;八套主题各有脾气，中英混排居然都稳。&quot;
              </p>
            </Card>

            <Card
              style={{
                position: "absolute",
                top: 180,
                left: 0,
                width: 240,
                padding: 16,
                background: "var(--primary)",
                color: "var(--primary-fg)",
                zIndex: 2,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: 6,
                }}
              >
                Deploy · 部署
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontFamily: "var(--font-mono)",
                  fontSize: 14,
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "var(--fg)",
                  }}
                />
                production · 2 分钟前
              </div>
            </Card>

            <Card
              style={{
                position: "absolute",
                bottom: 10,
                right: 40,
                width: 320,
                padding: 18,
              }}
            >
              <div className="label" style={{ marginBottom: 10 }}>
                上传进度
              </div>
              <Progress value={72} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: 8,
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--fg-muted)",
                }}
              >
                <span>voidui-2.0.zip</span>
                <span>72%</span>
              </div>
            </Card>

            <Card
              style={{
                position: "absolute",
                bottom: 90,
                left: 20,
                width: 220,
                padding: "14px 16px",
                transform: "rotate(-2.5deg)",
              }}
            >
              <div style={{ display: "flex", gap: 8 }}>
                <Btn size="sm">确认</Btn>
                <Btn size="sm" variant="outline">
                  取消
                </Btn>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Install strip */}
      <section
        style={{
          padding: 24,
          borderTop: "1.5px solid var(--border)",
          borderBottom: "1.5px solid var(--border)",
          background: "var(--bg-elev)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            gap: 24,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <span className="label">Install · 安装</span>
          <code
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 14,
              padding: "8px 14px",
              background: "var(--bg)",
              border: "1.5px solid var(--border-subtle)",
              borderRadius: "var(--r)",
            }}
          >
            <span style={{ color: "var(--fg-muted)" }}>$ </span>
            pnpm add @voidui/components
          </code>
          <Btn variant="ghost" size="sm">
            <Icon name="copy" size={12} /> Copy
          </Btn>
          <span style={{ width: 1, height: 20, background: "var(--border-subtle)" }} />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 13,
              color: "var(--fg-muted)",
            }}
          >
            Next.js · React 18 · Tailwind v4
          </span>
        </div>
      </section>

      {/* Feature grid */}
      <section style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 48 }}>
            <div className="label" style={{ marginBottom: 12 }}>
              What&apos;s new · 新版亮点
            </div>
            <h2
              className="display"
              style={{
                fontSize: 40,
                lineHeight: 1.12,
                fontWeight: 600,
                margin: 0,
                maxWidth: 720,
              }}
            >
              Same DNA. Eight voices.
            </h2>
            <p
              className="cn"
              style={{
                marginTop: 14,
                color: "var(--fg-muted)",
                fontSize: 16,
                maxWidth: 640,
                lineHeight: 1.65,
              }}
            >
              同一套组件，八种表达。每一套主题都经过中英文逐字审校，确保混排时节奏一致、权重相当。
            </p>
          </div>
          <div
            className="vui-home-features"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 16,
            }}
          >
            {[
              {
                icon: "palette",
                t: "八套完整主题",
                d: "Neobrutal · Swiss · Editorial · Stripe · Hanko · Terra · Cyber · Milktea，各有完整深浅色。",
              },
              {
                icon: "zap",
                t: "Bilingual-first",
                d: "中英文在每个主题中都经过校准：字号、行高、字重、间距分别调过，混排不突兀。",
              },
              {
                icon: "layers",
                t: "Token-driven",
                d: "全部通过 CSS 变量驱动。切主题只要改 data-theme，所有组件即时响应。",
              },
              {
                icon: "box",
                t: "深浅双模式",
                d: "每套主题都有对应暗色，不是简单反色 — 色温、对比、明度都重新调过。",
              },
              {
                icon: "code",
                t: "可直接覆盖",
                d: "提供每套主题的 global.css + TSX 压缩包，直接替换原项目即可生效。",
              },
              {
                icon: "sparkle",
                t: "字体混排优雅",
                d: "英文用 Inter / Fraunces / IBM Plex，中文思源黑体 / Noto Serif SC，严格配对。",
              },
            ].map((f) => (
              <Card key={f.t} lift style={{ padding: 24 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    border: "1.5px solid var(--border)",
                    borderRadius: "var(--r)",
                    background: "var(--primary)",
                    color: "var(--primary-fg)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 16,
                    boxShadow: "var(--sh-sm)",
                  }}
                >
                  {/* @ts-expect-error - Icon name is typed narrowly */}
                  <Icon name={f.icon} size={18} />
                </div>
                <h3
                  className="cn"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 17,
                    fontWeight: 600,
                    margin: "0 0 6px",
                  }}
                >
                  {f.t}
                </h3>
                <p
                  className="cn"
                  style={{ margin: 0, color: "var(--fg-muted)", fontSize: 14 }}
                >
                  {f.d}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Component preview row */}
      <section style={{ padding: "96px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 48 }}>
            <div className="label" style={{ marginBottom: 12 }}>
              Library · 组件
            </div>
            <h2
              className="display"
              style={{
                fontSize: 40,
                lineHeight: 1.12,
                fontWeight: 600,
                margin: 0,
                maxWidth: 720,
              }}
            >
              Built for real interfaces.
            </h2>
            <p
              className="cn"
              style={{
                marginTop: 14,
                color: "var(--fg-muted)",
                fontSize: 16,
                maxWidth: 640,
                lineHeight: 1.65,
              }}
            >
              按钮、表单、弹层、导航、数据展示 — 每一个原子组件都在八套主题下逐个审校。
            </p>
          </div>
          <div
            className="vui-home-preview"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              gap: 16,
            }}
          >
            <Card style={{ gridColumn: "span 5", padding: 24 }}>
              <div className="label" style={{ marginBottom: 16 }}>
                Buttons · 按钮
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                <Btn>Default</Btn>
                <Btn variant="secondary">次要</Btn>
                <Btn variant="outline">Outline</Btn>
                <Btn variant="ghost">Ghost</Btn>
                <Btn>
                  <Icon name="plus" size={13} /> 添加
                </Btn>
              </div>
            </Card>

            <Card style={{ gridColumn: "span 7", padding: 24 }}>
              <div className="label" style={{ marginBottom: 16 }}>
                Form · 表单控件
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 16,
                }}
              >
                <input
                  className="input"
                  placeholder="your@email.com"
                  readOnly
                />
                <div
                  style={{
                    display: "flex",
                    gap: 16,
                    alignItems: "center",
                  }}
                >
                  <Checkbox checked label="同意条款" />
                  <Switch checked />
                </div>
              </div>
            </Card>

            <Card style={{ gridColumn: "span 7", padding: 24 }}>
              <div className="label" style={{ marginBottom: 16 }}>
                Alerts · 提示
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <Alert
                  variant="info"
                  title="计划维护"
                  icon={<Icon name="info" size={16} />}
                >
                  部署窗口将于周五 22:00 (UTC) 开启。Deploy window opens Friday.
                </Alert>
                <Alert
                  variant="success"
                  title="保存成功"
                  icon={<Icon name="check" size={16} />}
                >
                  Your changes were published successfully. 更改已发布。
                </Alert>
              </div>
            </Card>

            <Card style={{ gridColumn: "span 5", padding: 24 }}>
              <div className="label" style={{ marginBottom: 16 }}>
                Data · 数据
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 32,
                  fontWeight: 600,
                }}
              >
                ¥24,891
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  color: "var(--fg-muted)",
                  fontSize: 13,
                  marginBottom: 14,
                }}
              >
                <Badge variant="primary" style={{ fontSize: 10 }}>
                  +12.4%
                </Badge>
                <span>较上月 · vs. last month</span>
              </div>
              <Progress value={64} />
            </Card>
          </div>
          <div style={{ marginTop: 32, textAlign: "center" }}>
            <Link href="/themes" style={{ textDecoration: "none" }}>
              <Btn variant="outline">
                Compare 8 themes · 对比主题{" "}
                <Icon name="arrow-right" size={13} />
              </Btn>
            </Link>
          </div>
        </div>
      </section>

      {/* Dark CTA */}
      <section
        style={{
          padding: "96px 24px",
          borderTop: "1.5px solid var(--border)",
          background: "var(--fg)",
          color: "var(--bg)",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 48,
              fontWeight: 500,
              letterSpacing: "-0.025em",
              margin: "0 0 20px",
              lineHeight: 1.05,
            }}
          >
            Pick a voice. Ship with character.
          </h2>
          <div
            className="cn"
            style={{
              fontSize: 19,
              fontWeight: 500,
              marginBottom: 12,
              color: "var(--bg)",
            }}
          >
            选一个声音，做有性格的产品。
          </div>
          <p
            style={{
              fontSize: 16,
              color: "var(--fg-subtle)",
              margin: "0 auto 32px",
              maxWidth: 520,
            }}
          >
            八套主题，MIT 协议，零锁定。Copy what you need, extend what you don&apos;t.
          </p>
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link href="/themes" style={{ textDecoration: "none" }}>
              <Btn size="lg">
                Get started <Icon name="arrow-right" size={14} />
              </Btn>
            </Link>
            <a
              href="https://github.com/jiji262/voidUI"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Btn
                size="lg"
                variant="outline"
                style={{
                  color: "var(--bg)",
                  borderColor: "var(--bg)",
                  background: "transparent",
                }}
              >
                <Icon name="github" size={14} /> View source
              </Btn>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
