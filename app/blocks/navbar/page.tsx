"use client";

import React from "react";
import { BlockPage, BlockShowcase } from "@/components/blocks/_kit";
import { Button, Badge } from "@/components/voidui";
import { SearchIcon, MenuIcon, BellIcon, ChevronDownIcon } from "lucide-react";
import { Logo } from "@/components/Logo";

export default function NavbarPage() {
  return (
    <BlockPage eyebrow="Application — Navbar" title="Navbars" subtitle="Four variants — marketing, app shell with search, mega menu, and a minimal editorial bar.">
      <BlockShowcase name="01 — Marketing navbar">
        <div style={{ padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1.5px solid var(--border)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
            <Logo />
            <nav style={{ display: "flex", gap: 4, alignItems: "center" }}>
              {["Product", "Themes", "Pricing", "Docs"].map((l, i) => (
                <a key={l} href="#" style={{ padding: "8px 12px", fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: i === 0 ? 600 : 400, color: i === 0 ? "var(--fg)" : "var(--fg-muted)", textDecoration: "none", borderRadius: "var(--r-sm)" }}>{l}</a>
              ))}
            </nav>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <Button variant="ghost" size="sm">Sign in</Button><Button size="sm">Get started</Button>
          </div>
        </div>
      </BlockShowcase>

      <BlockShowcase name="02 — App shell with search" bg="elev">
        <div style={{ padding: "12px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1.5px solid var(--border)", background: "var(--bg)", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <Logo />
            <span style={{ width: 1.5, height: 20, background: "var(--border-subtle)" }} />
            <button type="button" style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "5px 10px", border: "1.5px solid var(--border)", background: "var(--bg-elev)", borderRadius: "var(--r-sm)", fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 600, cursor: "pointer", color: "var(--fg)" }}>voidUI <ChevronDownIcon size={12} /></button>
          </div>
          <div style={{ flex: 1, maxWidth: 480, position: "relative" }}>
            <SearchIcon size={14} style={{ position: "absolute", top: "50%", left: 12, transform: "translateY(-50%)", color: "var(--fg-muted)" }} />
            <input type="text" placeholder="Search components, blocks, themes..." style={{ width: "100%", padding: "8px 12px 8px 34px", border: "1.5px solid var(--border)", background: "var(--bg-elev)", borderRadius: "var(--r-sm)", fontSize: 13, fontFamily: "inherit", color: "var(--fg)" }} />
            <span style={{ position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)", fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 600, padding: "2px 6px", border: "1.5px solid var(--border-subtle)", borderRadius: 4, color: "var(--fg-muted)" }}>⌘K</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <button type="button" style={{ width: 32, height: 32, border: "1.5px solid var(--border)", background: "var(--bg-elev)", borderRadius: "var(--r-sm)", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--fg)", position: "relative" }}>
              <BellIcon size={14} />
              <span style={{ position: "absolute", top: 4, right: 4, width: 7, height: 7, background: "var(--primary)", borderRadius: "50%", border: "1.5px solid var(--bg)" }} />
            </button>
            <span style={{ width: 32, height: 32, border: "1.5px solid var(--border)", background: "var(--accent-2)", color: "var(--primary-fg)", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 600 }}>AL</span>
          </div>
        </div>
      </BlockShowcase>

      <BlockShowcase name="03 — Mega menu open">
        <div>
          <div style={{ padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1.5px solid var(--border)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
              <Logo />
              <nav style={{ display: "flex", gap: 4 }}>
                <button type="button" style={{ padding: "8px 12px", fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 600, color: "var(--fg)", border: "none", background: "var(--bg-elev)", borderRadius: "var(--r-sm)", display: "inline-flex", alignItems: "center", gap: 4, cursor: "pointer" }}>Product <ChevronDownIcon size={12} /></button>
                <a href="#" style={{ padding: "8px 12px", fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--fg-muted)", textDecoration: "none" }}>Themes</a>
                <a href="#" style={{ padding: "8px 12px", fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--fg-muted)", textDecoration: "none" }}>Pricing</a>
              </nav>
            </div>
            <Button size="sm">Get started</Button>
          </div>
          <div style={{ padding: "32px 24px", borderBottom: "1.5px solid var(--border)", background: "var(--bg-elev)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32, maxWidth: 900, margin: "0 auto" }}>
              {[
                { title: "By role", items: ["For designers", "For engineers", "For founders"] },
                { title: "By category", items: ["Components", "Blocks", "Templates"] },
                { title: "Resources", items: ["Documentation", "Changelog", "Roadmap"] },
              ].map((col) => (
                <div key={col.title}>
                  <div className="label" style={{ marginBottom: 12 }}>{col.title}</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    {col.items.map((it) => (
                      <a key={it} href="#" style={{ padding: "8px 10px", fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--fg)", textDecoration: "none", borderRadius: "var(--r-sm)" }}>{it}</a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </BlockShowcase>

      <BlockShowcase name="04 — Minimal editorial">
        <div style={{ padding: "20px 32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 500, letterSpacing: "-0.02em" }}>voidUI</span>
          <nav style={{ display: "flex", gap: 24, fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase" }}>
            <a href="#" style={{ color: "var(--fg)", textDecoration: "none", borderBottom: "1.5px solid var(--fg)", paddingBottom: 2 }}>Issues</a>
            <a href="#" style={{ color: "var(--fg-muted)", textDecoration: "none" }}>Notes</a>
            <a href="#" style={{ color: "var(--fg-muted)", textDecoration: "none" }}>About</a>
          </nav>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-muted)" }}>Issue 03 / Spring 2026</span>
        </div>
      </BlockShowcase>
    </BlockPage>
  );
}
