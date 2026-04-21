import React from "react";
import Link from "next/link";
import { LogoMark } from "@/components/Logo";

/**
 * Footer — 4-column layout from the Claude Design handoff.
 * Logo + tagline on the left; Product / Resources / Company columns on the
 * right; copyright + build attribution on a 1.5px-subtle-border bottom bar.
 */
export function Footer() {
  const columns: Array<{ h: string; items: Array<{ label: string; href: string; external?: boolean }> }> = [
    {
      h: "Product",
      items: [
        { label: "Components", href: "/components" },
        { label: "Blocks", href: "/blocks" },
        { label: "Demo", href: "/demo" },
        { label: "Pricing", href: "/pricing" },
      ],
    },
    {
      h: "Resources",
      items: [
        { label: "Docs", href: "/components" },
        { label: "Changelog", href: "/components" },
        { label: "Figma kit", href: "#" },
        { label: "Roadmap", href: "#" },
      ],
    },
    {
      h: "Company",
      items: [
        { label: "About", href: "#" },
        { label: "GitHub", href: "https://github.com/jiji262/voidUI", external: true },
        { label: "Twitter", href: "#", external: true },
        { label: "License", href: "#" },
      ],
    },
  ];

  return (
    <footer
      style={{
        borderTop: "1.5px solid var(--border)",
        padding: "64px 24px 40px",
        background: "var(--bg)",
        color: "var(--fg)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 48,
            marginBottom: 48,
          }}
          className="vui-footer-grid"
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
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
            </div>
            <p
              style={{
                color: "var(--fg-muted)",
                fontSize: 14,
                maxWidth: 320,
                margin: 0,
                lineHeight: 1.65,
              }}
            >
              A refined neobrutalist component library for React. Built with TailwindCSS. Open source.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.h}>
              <div className="label" style={{ marginBottom: 12 }}>
                {col.h}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {col.items.map((item) =>
                  item.external ? (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: 14, color: "var(--fg-muted)", textDecoration: "none" }}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      key={item.label}
                      href={item.href}
                      style={{ fontSize: 14, color: "var(--fg-muted)", textDecoration: "none" }}
                    >
                      {item.label}
                    </Link>
                  ),
                )}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            paddingTop: 24,
            borderTop: "1.5px solid var(--border-subtle)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 13,
            color: "var(--fg-muted)",
            fontFamily: "var(--font-mono)",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          <span>© 2026 voidUI. MIT licensed.</span>
          <span>Built with React + TailwindCSS</span>
        </div>
      </div>
    </footer>
  );
}
