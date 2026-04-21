"use client";

import React from "react";
import { useTheme, type Theme } from "@/lib/theme-context";

/**
 * /themes — 1:1 port of the Claude Design handoff (project/pages/Themes.jsx).
 * Grid of `ThemeCard`s; clicking one globally activates that theme. Scoped
 * preview inside each card renders a mini-UI using theme-aware tokens.
 * Active-theme detail row below shows Typography / Mood / Controls.
 */

type ThemeData = {
  id: Theme;
  name: string;
  cn: string;
  desc: string;
  cnDesc: string;
  swatches: string[];
  type: string;
  mood: string;
  preferredMode: "light" | "dark";
};

const THEMES_DATA: ThemeData[] = [
  {
    id: "neobrutal",
    name: "Neobrutal",
    cn: "精致野兽派",
    desc: "Warm mustard on paper. Hard shadows, refined.",
    cnDesc: "暖芥末配米白。硬阴影，精致化。",
    swatches: ["#FAFAF7", "#E8B923", "#0A0A0A", "#C85C3C", "#7A9178"],
    type: "JetBrains Mono + Inter · 思源黑体",
    mood: "Loud but controlled · 张扬可控",
    preferredMode: "light",
  },
  {
    id: "swiss",
    name: "Swiss",
    cn: "瑞士风",
    desc: "White space, tiny red accent. Content first.",
    cnDesc: "留白至上，一点红色强调。",
    swatches: ["#FFFFFF", "#E63946", "#111111", "#666666", "#EDEDED"],
    type: "Inter · IBM Plex Mono · 思源黑体",
    mood: "Content first · 内容为王",
    preferredMode: "light",
  },
  {
    id: "editorial",
    name: "Editorial",
    cn: "编辑部",
    desc: "Cream paper, rust accent, serif display.",
    cnDesc: "米色纸张，铁锈强调，衬线大标题。",
    swatches: ["#F7F3EC", "#9C3D1A", "#1A0F08", "#4A5D3A", "#B8732A"],
    type: "Fraunces + Inter · 思源宋体",
    mood: "Magazine feel · 杂志感",
    preferredMode: "light",
  },
  {
    id: "stripe",
    name: "Stripe",
    cn: "经典 SaaS",
    desc: "Deep indigo + warm orange. Pro polish.",
    cnDesc: "深靛蓝 + 暖橙，专业感。",
    swatches: ["#FAFBFF", "#2B4EA8", "#FF8A3D", "#0A1A3D", "#6B7FDB"],
    type: "Inter · JetBrains Mono · 思源黑体",
    mood: "Clean SaaS · 干净专业",
    preferredMode: "light",
  },
  {
    id: "hanko",
    name: "Hanko",
    cn: "日系清冷",
    desc: "Washi paper, sumi blue, quiet.",
    cnDesc: "和纸底，墨青蓝，克制安静。",
    swatches: ["#F4F1EA", "#3D5A7C", "#B85450", "#8B9A7B", "#D6D1C4"],
    type: "Inter · IBM Plex Mono · 思源黑体",
    mood: "Calm, quiet · 冷静克制",
    preferredMode: "light",
  },
  {
    id: "terra",
    name: "Terra",
    cn: "大地色",
    desc: "Moss, clay, rust. Natural warmth.",
    cnDesc: "苔藓、陶土、赤锈。天然温暖。",
    swatches: ["#F2EDE4", "#6B7A4A", "#C46B3D", "#8B4A3D", "#2B2419"],
    type: "Inter · JetBrains Mono · 思源黑体",
    mood: "Earthy, grounded · 沉稳大地",
    preferredMode: "light",
  },
  {
    id: "cyber",
    name: "Cyber",
    cn: "赛博终端",
    desc: "Phosphor green, mono everywhere.",
    cnDesc: "荧光绿，全等宽字。",
    swatches: ["#0B0F0B", "#2AE02A", "#FF2D55", "#C8FFC8", "#3D663D"],
    type: "JetBrains Mono everywhere · 全等宽",
    mood: "Terminal vibe · 终端感",
    preferredMode: "dark",
  },
  {
    id: "milktea",
    name: "Milktea",
    cn: "莫兰迪奶咖",
    desc: "Cream, clay, dusty rose. Soft.",
    cnDesc: "奶油、陶土、陈玫瑰。柔和。",
    swatches: ["#F5EFE7", "#B88B6E", "#C8A0A0", "#9AAFA0", "#3D3028"],
    type: "Inter · IBM Plex Mono · 思源黑体",
    mood: "Soft, warm · 柔和温暖",
    preferredMode: "light",
  },
];

function ThemeCard({
  data,
  active,
  onClick,
}: {
  data: ThemeData;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <div
      data-theme={data.id}
      data-mode={data.preferredMode}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      style={{
        cursor: "pointer",
        border: active ? "2px solid var(--primary)" : "1.5px solid var(--border)",
        borderRadius: "var(--r)",
        background: "var(--bg)",
        boxShadow: active ? "var(--sh-lg)" : "var(--sh)",
        overflow: "hidden",
        transition: "transform 160ms ease, box-shadow 160ms ease",
        transform: active ? "translateY(-2px)" : "none",
      }}
    >
      {/* Scoped preview */}
      <div style={{ padding: 24, background: "var(--bg)", color: "var(--fg)", minHeight: 240 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 16,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div
              style={{
                width: 22,
                height: 22,
                border: "1.5px solid var(--border)",
                background: "var(--primary)",
                color: "var(--primary-fg)",
                borderRadius: "var(--r)",
                boxShadow: "var(--sh-xs)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-mono)",
                fontWeight: 700,
                fontSize: 12,
              }}
            >
              v
            </div>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: 14,
                letterSpacing: "-0.01em",
              }}
            >
              voidUI
            </span>
          </div>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "2px 6px",
              border: "1.5px solid var(--border-subtle)",
              borderRadius: "var(--r-sm)",
              color: "var(--fg-muted)",
            }}
          >
            {data.preferredMode}
          </span>
        </div>

        <div
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            marginBottom: 4,
          }}
        >
          Ship with character.
        </div>
        <div
          className="cn"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 13,
            color: "var(--fg-muted)",
            marginBottom: 14,
            lineHeight: 1.6,
          }}
        >
          做有性格的产品 — 一句话测中英混排。
        </div>

        <div style={{ display: "flex", gap: 8, marginBottom: 14, flexWrap: "wrap" }}>
          <button
            type="button"
            onClick={(e) => e.stopPropagation()}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              fontWeight: 500,
              padding: "5px 10px",
              border: "1.5px solid var(--border)",
              borderRadius: "var(--r)",
              background: "var(--primary)",
              color: "var(--primary-fg)",
              boxShadow: "var(--sh-xs)",
              cursor: "pointer",
            }}
          >
            Primary
          </button>
          <button
            type="button"
            onClick={(e) => e.stopPropagation()}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              fontWeight: 500,
              padding: "5px 10px",
              border: "1.5px solid var(--border)",
              borderRadius: "var(--r)",
              background: "var(--bg-elev)",
              color: "var(--fg)",
              boxShadow: "var(--sh-xs)",
              cursor: "pointer",
            }}
          >
            Outline
          </button>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              padding: "3px 7px",
              border: "1.5px solid var(--border)",
              borderRadius: "var(--r-sm)",
              background: "var(--bg-elev)",
              color: "var(--fg)",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            Badge
          </span>
        </div>

        <div
          style={{
            display: "flex",
            gap: 4,
            borderTop: "1px solid var(--border-subtle)",
            paddingTop: 12,
          }}
        >
          {data.swatches.map((c, i) => (
            <div
              key={i}
              style={{
                width: 24,
                height: 24,
                background: c,
                border: "1.5px solid var(--border)",
                borderRadius: "var(--r-sm)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Footer meta (renders under parent theme, not card theme) */}
      <div
        style={{
          padding: "14px 20px",
          borderTop: "1.5px solid var(--border)",
          background: "var(--bg-elev)",
          color: "var(--fg)",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 4 }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 15,
              fontWeight: 600,
              letterSpacing: "-0.01em",
            }}
          >
            {data.name}
          </span>
          <span
            className="cn"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 13,
              color: "var(--fg-muted)",
              fontWeight: 500,
            }}
          >
            {data.cn}
          </span>
        </div>
        <p style={{ margin: 0, fontSize: 12, color: "var(--fg-muted)", lineHeight: 1.5 }}>
          {data.desc}
        </p>
      </div>
    </div>
  );
}

export default function ThemesPage() {
  const { theme, setTheme } = useTheme();
  const active = THEMES_DATA.find((t) => t.id === theme) ?? THEMES_DATA[0];

  return (
    <main>
      {/* Hero */}
      <section style={{ padding: "80px 24px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className="label" style={{ marginBottom: 16 }}>
            Themes · 主题 · 8 套
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 58,
              fontWeight: 500,
              letterSpacing: "-0.03em",
              margin: "0 0 12px",
              lineHeight: 1.02,
            }}
          >
            Eight voices.
            <br />
            <span style={{ color: "var(--fg-muted)" }}>One library.</span>
          </h1>
          <div
            className="cn"
            style={{
              fontSize: 22,
              fontWeight: 500,
              marginBottom: 16,
              letterSpacing: "0.01em",
            }}
          >
            一套组件，八种声音
          </div>
          <p
            style={{
              fontSize: 16,
              color: "var(--fg-muted)",
              maxWidth: 640,
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            点击任意一张卡片，整站立刻切换到对应主题。每一套都有完整的浅色与深色模式、精心校对的中英文字体搭配，以及可直接覆盖原项目的 global.css。
          </p>
        </div>
      </section>

      {/* Theme grid */}
      <section style={{ padding: "24px 24px 96px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            className="vui-themes-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 20,
            }}
          >
            {THEMES_DATA.map((t) => (
              <ThemeCard
                key={t.id}
                data={t}
                active={theme === t.id}
                onClick={() => setTheme(t.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Active theme detail */}
      <section
        style={{
          padding: "64px 24px",
          borderTop: "1.5px solid var(--border)",
          background: "var(--bg-elev)",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="label" style={{ marginBottom: 12 }}>
            Active theme · 当前主题
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 36,
              letterSpacing: "-0.02em",
              fontWeight: 500,
              margin: "0 0 32px",
            }}
          >
            {active.name}
            <span
              className="cn"
              style={{
                fontFamily: "var(--font-sans)",
                color: "var(--fg-muted)",
                fontSize: 22,
                fontWeight: 500,
                marginLeft: 14,
              }}
            >
              {active.cn}
            </span>
          </h2>

          <div
            className="vui-themes-detail"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 16,
            }}
          >
            <div className="card" style={{ padding: 24 }}>
              <div className="label" style={{ marginBottom: 12 }}>
                Typography · 字体
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 28,
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                  marginBottom: 4,
                }}
              >
                The quick brown fox
              </div>
              <div className="cn" style={{ fontSize: 18, fontWeight: 500, marginBottom: 12 }}>
                敏捷的狐狸跃过懒犬
              </div>
              <div style={{ fontSize: 13, color: "var(--fg-muted)" }}>{active.type}</div>
            </div>

            <div className="card" style={{ padding: 24 }}>
              <div className="label" style={{ marginBottom: 12 }}>
                Mood · 气质
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 22,
                  fontWeight: 500,
                  marginBottom: 12,
                  letterSpacing: "-0.01em",
                }}
              >
                {active.mood}
              </div>
              <p className="cn" style={{ fontSize: 13, color: "var(--fg-muted)", margin: 0 }}>
                {active.cnDesc}
              </p>
            </div>

            <div className="card" style={{ padding: 24 }}>
              <div className="label" style={{ marginBottom: 12 }}>
                Controls · 控件预览
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ display: "flex", gap: 8 }}>
                  <button className="btn sm">Primary</button>
                  <button className="btn sm outline">Outline</button>
                </div>
                <input className="input" placeholder="example@void.ui" readOnly />
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span
                    role="switch"
                    aria-checked="true"
                    style={{
                      width: 40,
                      height: 22,
                      padding: 2,
                      border: "1.5px solid var(--border)",
                      borderRadius: "var(--r-lg)",
                      background: "var(--primary)",
                      display: "inline-flex",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        width: 15,
                        height: 15,
                        background: "var(--primary-fg)",
                        borderRadius: "50%",
                        transform: "translateX(18px)",
                      }}
                    />
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14 }}>
                    <span
                      style={{
                        width: 18,
                        height: 18,
                        border: "1.5px solid var(--border)",
                        borderRadius: "var(--r-sm)",
                        background: "var(--primary)",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "var(--sh-xs)",
                      }}
                    >
                      <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="var(--primary-fg)" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5L20 7"/></svg>
                    </span>
                    选项
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
