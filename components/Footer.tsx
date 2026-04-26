"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";

const COLS: { title: string; items: { label: string; href: string; ext?: boolean }[] }[] = [
  {
    title: "Product",
    items: [
      { label: "Components", href: "/components" },
      { label: "Blocks", href: "/blocks" },
      { label: "Themes", href: "/themes" },
      { label: "Demo", href: "/demo" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Docs", href: "/components" },
      { label: "Changelog", href: "/components" },
      { label: "Figma kit", href: "#" },
      { label: "Roadmap", href: "#" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About", href: "#" },
      { label: "GitHub", href: "https://github.com/jiji262/voidUI", ext: true },
      { label: "Twitter", href: "#", ext: true },
      { label: "License", href: "#" },
    ],
  },
];

export function Footer() {
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
          className="vui-footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 48,
            marginBottom: 48,
          }}
        >
          <div>
            <div style={{ marginBottom: 16 }}>
              <Logo />
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
              A refined neobrutalist component library for React. 10 themes, light + dark.
              Built with TailwindCSS. Open source.
            </p>
            <div style={{ display: "flex", gap: 6, marginTop: 16, flexWrap: "wrap" }}>
              <span className="badge ghost">v3.0</span>
              <span className="badge ghost">MIT</span>
              <span className="badge ghost">RSC ready</span>
            </div>
          </div>
          {COLS.map((col) => (
            <div key={col.title}>
              <div className="label" style={{ marginBottom: 12 }}>
                {col.title}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {col.items.map((item) =>
                  item.ext ? (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: 14,
                        color: "var(--fg-muted)",
                        textDecoration: "none",
                      }}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      key={item.label}
                      href={item.href}
                      style={{
                        fontSize: 14,
                        color: "var(--fg-muted)",
                        textDecoration: "none",
                      }}
                    >
                      {item.label}
                    </Link>
                  )
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

export default Footer;
