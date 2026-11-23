"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDownIcon, MoonIcon, SunIcon, ArrowRightIcon } from "lucide-react";
import { Logo } from "@/components/Logo";
import { THEMES, THEME_META, type Theme, type Mode } from "@/lib/theme-config";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Themes", href: "/themes" },
  { label: "Components", href: "/components" },
  { label: "Blocks", href: "/blocks" },
  { label: "Demo", href: "/demo" },
  { label: "Pricing", href: "/pricing" },
];

const SWATCH: Record<Theme, string> = {
  neobrutal: "#E8B923",
  swiss: "#E63946",
  editorial: "#9C3D1A",
  stripe: "#2B4EA8",
  hanko: "#3D5A7C",
  terra: "#6B7A4A",
  cyber: "#00875A",
  milktea: "#B88B6E",
  aurora: "#4F4ED4",
  mono: "#0A0A0A",
};

function readDoc<T>(attr: string, fallback: T): T {
  if (typeof document === "undefined") return fallback;
  return (document.documentElement.getAttribute(attr) as T) || fallback;
}

export default function TopNav() {
  const pathname = usePathname() || "/";
  const [theme, setTheme] = React.useState<Theme>("neobrutal");
  const [mode, setMode] = React.useState<Mode>("light");
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setTheme(readDoc<Theme>("data-theme", "neobrutal"));
    setMode(readDoc<Mode>("data-mode", "light"));
  }, []);

  const applyTheme = (t: Theme) => {
    setTheme(t);
    setOpen(false);
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", t);
      try { localStorage.setItem("voidui-theme", t); } catch {}
    }
  };
  const toggleMode = () => {
    const m: Mode = mode === "dark" ? "light" : "dark";
    setMode(m);
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-mode", m);
      try { localStorage.setItem("voidui-mode", m); } catch {}
    }
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "color-mix(in srgb, var(--bg) 85%, transparent)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1.5px solid var(--border)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "14px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 10, textDecoration: "none", color: "var(--fg)" }}>
          <Logo />
          <span className="badge ghost" style={{ marginLeft: 4 }}>v3.0</span>
        </Link>

        <nav className="vui-topnav-center" style={{ display: "flex", gap: 4, alignItems: "center" }}>
          {NAV.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  fontFamily: "var(--font-mono)",
                  fontSize: 13,
                  padding: "8px 12px",
                  color: active ? "var(--fg)" : "var(--fg-muted)",
                  fontWeight: active ? 600 : 400,
                  textDecoration: "none",
                  borderRadius: "var(--r-sm)",
                  position: "relative",
                }}
              >
                {item.label}
                {active && (
                  <span
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      bottom: -16,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 20,
                      height: 2,
                      background: "var(--primary)",
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ position: "relative" }}>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              title={`Current: ${THEME_META[theme].label} · ${THEME_META[theme].zh}`}
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
              <span aria-hidden="true" style={{ width: 12, height: 12, background: SWATCH[theme], border: "1.5px solid var(--border)", borderRadius: "var(--r-sm)" }} />
              {THEME_META[theme].label}
              <ChevronDownIcon size={12} />
            </button>
            {open && (
              <div
                role="menu"
                style={{
                  position: "absolute",
                  top: "calc(100% + 6px)",
                  right: 0,
                  background: "var(--bg-elev)",
                  border: "1.5px solid var(--border)",
                  borderRadius: "var(--r)",
                  boxShadow: "var(--sh-md)",
                  padding: 6,
                  minWidth: 220,
                  display: "grid",
                  gap: 2,
                }}
              >
                {THEMES.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => applyTheme(t)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "8px 10px",
                      fontFamily: "var(--font-mono)",
                      fontSize: 12,
                      background: t === theme ? "var(--border-subtle)" : "transparent",
                      color: "var(--fg)",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      borderRadius: "var(--r-sm)",
                    }}
                  >
                    <span aria-hidden="true" style={{ width: 10, height: 10, background: SWATCH[t], border: "1.5px solid var(--border)", borderRadius: "var(--r-sm)" }} />
                    <span style={{ fontWeight: 600 }}>{THEME_META[t].label}</span>
                    <span style={{ color: "var(--fg-muted)", marginLeft: "auto" }}>{THEME_META[t].zh}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          <button
            type="button"
            onClick={toggleMode}
            title={`Switch to ${mode === "dark" ? "light" : "dark"}`}
            aria-label={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}
            style={{
              width: 34,
              height: 34,
              border: "1.5px solid var(--border)",
              background: "var(--bg-elev)",
              color: "var(--fg)",
              borderRadius: "var(--r)",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "var(--sh-xs)",
              flexShrink: 0,
            }}
          >
            {mode === "dark" ? <SunIcon size={15} /> : <MoonIcon size={15} />}
          </button>
          <Link href="/themes" style={{ textDecoration: "none" }}>
            <button type="button" className="btn sm">
              Get started
              <ArrowRightIcon size={13} />
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
