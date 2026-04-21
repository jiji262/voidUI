"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTheme, THEME_META, type Theme } from "@/lib/theme-context";
import { Icon } from "@/components/ui/icon";
import Link from "next/link";

type ThemeMeta = {
  id: Theme;
  name: string;
  cn: string;
  hex: string;
};

// Matches design/index.html top-level THEMES array.
const THEME_LIST: ThemeMeta[] = [
  { id: "neobrutal", name: "Neobrutal", cn: "精致野兽派", hex: "#E8B923" },
  { id: "swiss", name: "Swiss", cn: "瑞士风", hex: "#E63946" },
  { id: "editorial", name: "Editorial", cn: "编辑部", hex: "#9C3D1A" },
  { id: "stripe", name: "Stripe", cn: "经典 SaaS", hex: "#2B4EA8" },
  { id: "hanko", name: "Hanko", cn: "日系清冷", hex: "#3D5A7C" },
  { id: "terra", name: "Terra", cn: "大地色", hex: "#6B7A4A" },
  { id: "cyber", name: "Cyber", cn: "赛博终端", hex: "#2AE02A" },
  { id: "milktea", name: "Milktea", cn: "莫兰迪奶咖", hex: "#B88B6E" },
];

/**
 * ThemeSwitcher — design-faithful popover.
 *
 * Renders a trigger button (swatch + theme name + chevron) that opens a
 * 320px floating panel containing:
 *   - 2×4 grid of theme cards (swatch + name + CN description)
 *   - light / dark mode toggle
 *   - "Compare all 8 themes →" CTA linking to /themes.
 */
export function ThemeSwitcher() {
  const { theme, mode, setTheme, setMode } = useTheme();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  // Close on outside click / Escape.
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const current = THEME_LIST.find((t) => t.id === theme) ?? THEME_LIST[0];

  return (
    <div ref={rootRef} style={{ position: "relative" }}>
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        title={`Current: ${current.name} · ${current.cn}`}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          padding: "7px 11px 7px 9px",
          border: "1.5px solid var(--border)",
          background: "var(--bg-elev)",
          borderRadius: "var(--r)",
          cursor: "pointer",
          boxShadow: "var(--sh-xs)",
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          fontWeight: 500,
          color: "var(--fg)",
          whiteSpace: "nowrap",
        }}
      >
        <span
          aria-hidden
          style={{
            width: 12,
            height: 12,
            background: current.hex,
            border: "1.5px solid var(--border)",
            borderRadius: "var(--r-sm)",
          }}
        />
        {current.name}
        <Icon name="chevron-down" size={12} />
      </button>

      {/* Panel */}
      {open && (
        <div
          role="dialog"
          aria-label="Theme switcher"
          style={{
            position: "absolute",
            top: "calc(100% + 10px)",
            right: 0,
            width: 320,
            background: "var(--bg-elev)",
            border: "1.5px solid var(--border)",
            borderRadius: "var(--r)",
            boxShadow: "var(--sh-lg)",
            padding: 16,
            zIndex: 200,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 14,
            }}
          >
            <span className="label">Theme · 主题</span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--fg-muted)",
              }}
            >
              {current.name}
            </span>
          </div>

          {/* 2×4 theme grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            {THEME_LIST.map((t) => {
              const active = theme === t.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTheme(t.id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "9px 10px",
                    border: active
                      ? "1.5px solid var(--primary)"
                      : "1.5px solid var(--border-subtle)",
                    borderRadius: "var(--r)",
                    background: active
                      ? "color-mix(in srgb, var(--primary) 12%, var(--bg-elev))"
                      : "var(--bg-elev)",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "all 120ms",
                  }}
                >
                  <span
                    aria-hidden
                    style={{
                      width: 16,
                      height: 16,
                      background: t.hex,
                      border: "1.5px solid var(--border)",
                      borderRadius: "var(--r-sm)",
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ minWidth: 0, flex: 1 }}>
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 12,
                        fontWeight: 600,
                        color: "var(--fg)",
                        lineHeight: 1.2,
                      }}
                    >
                      {t.name}
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        color: "var(--fg-muted)",
                        lineHeight: 1.2,
                        marginTop: 1,
                      }}
                    >
                      {t.cn}
                    </div>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Mode toggle */}
          <div
            style={{
              marginTop: 14,
              paddingTop: 14,
              borderTop: "1.5px solid var(--border-subtle)",
            }}
          >
            <div className="label" style={{ marginBottom: 8 }}>
              Mode · 模式
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
              {(["light", "dark"] as const).map((m) => {
                const active = mode === m;
                return (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setMode(m)}
                    style={{
                      padding: "7px 10px",
                      border: active
                        ? "1.5px solid var(--primary)"
                        : "1.5px solid var(--border-subtle)",
                      borderRadius: "var(--r)",
                      background: active
                        ? "color-mix(in srgb, var(--primary) 12%, var(--bg-elev))"
                        : "var(--bg-elev)",
                      cursor: "pointer",
                      fontFamily: "var(--font-mono)",
                      fontSize: 12,
                      fontWeight: 500,
                      color: "var(--fg)",
                      textTransform: "capitalize",
                    }}
                  >
                    {m === "light" ? "☀ Light" : "☾ Dark"}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Compare link */}
          <Link
            href="/themes"
            onClick={() => setOpen(false)}
            style={{
              marginTop: 14,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              width: "100%",
              padding: "9px 12px",
              border: "1.5px solid var(--border)",
              borderRadius: "var(--r)",
              background: "var(--primary)",
              color: "var(--primary-fg)",
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              fontWeight: 500,
              textDecoration: "none",
              boxShadow: "var(--sh-xs)",
              textAlign: "center",
            }}
          >
            Compare all 8 themes
            <Icon name="arrow-right" size={12} />
          </Link>
        </div>
      )}
    </div>
  );
}
