"use client";

import React from "react";
import Link from "next/link";
import { THEMES, THEME_META, type Theme } from "@/lib/theme-config";
import { Button, Badge, Avatar, AvatarFallback, Card, Input, Switch } from "@/components/voidui";
import { ArrowRightIcon, CheckIcon } from "lucide-react";

const SWATCHES: Record<Theme, { bg: string; elev: string; primary: string; accent: string; fg: string; muted: string }> = {
  neobrutal:  { bg: "#FFF8E7", elev: "#FFFCEF", primary: "#E8B923", accent: "#FF6F61", fg: "#0F0F12", muted: "#5A5A60" },
  swiss:      { bg: "#FAFAFA", elev: "#FFFFFF", primary: "#E63946", accent: "#1D3557", fg: "#111111", muted: "#5A5A5A" },
  editorial:  { bg: "#F5EFE6", elev: "#FAF6EE", primary: "#9C3D1A", accent: "#6B5B47", fg: "#2A1A10", muted: "#6E5D4E" },
  stripe:     { bg: "#F4F6FB", elev: "#FFFFFF", primary: "#2B4EA8", accent: "#6E45E0", fg: "#0A0E1A", muted: "#525F7F" },
  hanko:      { bg: "#EAE6DD", elev: "#F2EEE5", primary: "#3D5A7C", accent: "#A03333", fg: "#1A1F2E", muted: "#5C6478" },
  terra:      { bg: "#EFEAD9", elev: "#F5F0E0", primary: "#6B7A4A", accent: "#A0522D", fg: "#2A2418", muted: "#6B6354" },
  cyber:      { bg: "#0D0F11", elev: "#15181B", primary: "#00875A", accent: "#FF3366", fg: "#E5E7E5", muted: "#8A9094" },
  milktea:    { bg: "#F5EBDD", elev: "#FBF3E5", primary: "#B88B6E", accent: "#D4A574", fg: "#3D2C1F", muted: "#7A6452" },
  aurora:     { bg: "#F0EFFA", elev: "#F8F7FE", primary: "#4F4ED4", accent: "#D946A6", fg: "#161427", muted: "#5A5878" },
  mono:       { bg: "#FFFFFF", elev: "#FAFAFA", primary: "#0A0A0A", accent: "#525252", fg: "#0A0A0A", muted: "#737373" },
};

export default function ThemesPage() {
  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <section style={{ padding: "64px 24px 32px", borderBottom: "1.5px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="label" style={{ marginBottom: 12 }}>Themes</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 500, letterSpacing: "-0.03em", margin: "0 0 12px", lineHeight: 1.0 }}>
            Ten complete <em style={{ fontStyle: "italic", color: "var(--primary)" }}>token sets</em>
          </h1>
          <p style={{ fontSize: 16, color: "var(--fg-muted)", maxWidth: 640, margin: 0, lineHeight: 1.65 }}>
            Each theme is a contract — bg, fg, primary, accent, plus motion and shadow. Switch with one attribute. Below: each theme rendered with the same component set, in light mode.
          </p>
        </div>
      </section>

      <section style={{ padding: "48px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: 28 }}>
          {THEMES.map((t) => <ThemeCard key={t} theme={t} />)}
        </div>
      </section>
    </main>
  );
}

function ThemeCard({ theme }: { theme: Theme }) {
  const c = SWATCHES[theme];
  const meta = THEME_META[theme];
  return (
    <article id={theme} className="card" style={{ padding: 0, overflow: "hidden", background: c.bg, color: c.fg, scrollMarginTop: 80 }}>
      <header style={{ padding: "24px 28px", borderBottom: `1.5px solid ${c.fg}1A`, display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 16, flexWrap: "wrap" }}>
        <div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, opacity: 0.6, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>{meta.family} family</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 500, margin: 0, letterSpacing: "-0.02em" }}>
            {meta.label} <span style={{ fontFamily: "var(--font-mono)", fontSize: 14, opacity: 0.55, marginLeft: 8 }}>{meta.zh}</span>
          </h2>
          <p style={{ fontSize: 14, opacity: 0.7, margin: "6px 0 0", maxWidth: 480, lineHeight: 1.55 }}>{meta.description}</p>
        </div>
        <Link href="/demo" style={{ textDecoration: "none", color: c.fg }}>
          <button type="button" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 600, padding: "8px 14px", border: `1.5px solid ${c.fg}`, background: "transparent", color: c.fg, cursor: "pointer", borderRadius: 6 }}>
            Try in demo <ArrowRightIcon size={12} />
          </button>
        </Link>
      </header>
      <div style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 0 }} className="vui-themecard-grid">
        <div style={{ padding: 28, borderRight: `1.5px solid ${c.fg}1A` }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, opacity: 0.55, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 12 }}>Tokens</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10, marginBottom: 20 }}>
            {[["bg", c.bg], ["elev", c.elev], ["primary", c.primary], ["accent", c.accent], ["fg", c.fg], ["muted", c.muted]].map(([name, val]) => (
              <div key={name} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 10px", border: `1.5px solid ${c.fg}1A`, borderRadius: 6, background: c.elev }}>
                <span style={{ width: 18, height: 18, background: val, border: `1.5px solid ${c.fg}33`, borderRadius: 4, flexShrink: 0 }} />
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 600 }}>--{name}</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, opacity: 0.55 }}>{val}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, opacity: 0.55, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>Type</div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 32, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 4 }}>The quick brown fox</div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, opacity: 0.65 }}>jumps over the lazy dog 0123456789</div>
        </div>
        <div style={{ padding: 28, background: c.elev, display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <button type="button" style={{ padding: "9px 16px", background: c.primary, color: c.bg, border: `1.5px solid ${c.fg}`, fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 600, borderRadius: 6, cursor: "pointer", boxShadow: `2px 2px 0 0 ${c.fg}` }}>Primary</button>
            <button type="button" style={{ padding: "9px 16px", background: "transparent", color: c.fg, border: `1.5px solid ${c.fg}`, fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 600, borderRadius: 6, cursor: "pointer" }}>Outline</button>
            <button type="button" style={{ padding: "9px 16px", background: "transparent", color: c.fg, border: "1.5px solid transparent", fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 600, borderRadius: 6, cursor: "pointer" }}>Ghost</button>
          </div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {["Default", "Active", "Beta", "● Live"].map((b, i) => (
              <span key={i} style={{ padding: "3px 10px", fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 600, border: `1.5px solid ${c.fg}`, borderRadius: 999, background: i === 0 ? c.primary : i === 3 ? c.accent : "transparent", color: i === 0 || i === 3 ? c.bg : c.fg }}>{b}</span>
            ))}
          </div>
          <div style={{ padding: 16, background: c.bg, border: `1.5px solid ${c.fg}33`, borderRadius: 6 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
              <span style={{ width: 32, height: 32, background: c.accent, color: c.bg, border: `1.5px solid ${c.fg}`, borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700 }}>VU</span>
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 600 }}>Card title</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, opacity: 0.6 }}>Subtitle line</div>
              </div>
            </div>
            <p style={{ margin: 0, fontSize: 12, opacity: 0.75, lineHeight: 1.55 }}>The component composes from tokens. Swap the theme attribute on &lt;html&gt; — everything follows.</p>
          </div>
        </div>
      </div>
    </article>
  );
}
