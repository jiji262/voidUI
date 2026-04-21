"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/lib/theme-context";
import { Icon } from "@/components/ui/icon";
import { LogoMark } from "@/components/Logo";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";

/**
 * TopNav — sticky, backdrop-blurred, 1.5px bottom border.
 * Left: logo + wordmark + v2.0 badge
 * Center: page links with primary underline on the active route
 * Right: ThemeSwitcher popover · moon/sun mode toggle · "Get started" button
 *
 * 1:1 port of the Claude Design handoff (project/components/Chrome.jsx).
 */
export default function TopNav() {
  const pathname = usePathname() ?? "/";
  const { mode, toggleMode } = useTheme();

  const links = [
    { id: "/", label: "Home" },
    { id: "/themes", label: "Themes · 主题" },
    { id: "/components", label: "Components" },
    { id: "/blocks", label: "Blocks" },
    { id: "/demo", label: "Demo" },
    { id: "/pricing", label: "Pricing" },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

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
        {/* Logo lockup */}
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
            color: "var(--fg)",
          }}
        >
          <LogoMark size={28} />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 17,
              fontWeight: 600,
              letterSpacing: "-0.02em",
            }}
          >
            voidUI
          </span>
          {/* Matches design: <Badge variant="ghost">v2.0</Badge> */}
          <span className="badge ghost" style={{ marginLeft: 4 }}>v2.0</span>
        </Link>

        {/* Center nav — hidden on small screens */}
        <nav
          style={{
            display: "flex",
            gap: 4,
            alignItems: "center",
          }}
          className="vui-topnav-center"
        >
          {links.map((l) => {
            const active = isActive(l.id);
            return (
              <Link
                key={l.id}
                href={l.id}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  fontFamily: "var(--font-mono)",
                  fontSize: 13,
                  padding: "8px 12px",
                  color: active ? "var(--fg)" : "var(--fg-muted)",
                  fontWeight: active ? 600 : 400,
                  textDecoration: "none",
                  borderRadius: 2,
                  position: "relative",
                }}
              >
                {l.label}
                {active && (
                  <span
                    aria-hidden
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

        {/* Right cluster */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <ThemeSwitcher />

          <button
            type="button"
            onClick={toggleMode}
            title={mode === "dark" ? "Switch to light" : "Switch to dark"}
            aria-label={mode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
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
            <Icon name={mode === "dark" ? "sun" : "moon"} size={15} />
          </button>

          {/* Matches design's <Btn size="sm">: .btn.sm = padding 6px 12px / 12px mono */}
          <Link href="/themes" style={{ textDecoration: "none" }}>
            <button type="button" className="btn sm">
              Get started
              <Icon name="arrow-right" size={13} />
            </button>
          </Link>
        </div>
      </div>

    </header>
  );
}
