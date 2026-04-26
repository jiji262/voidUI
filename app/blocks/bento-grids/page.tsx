"use client";

import React from "react";
import { BlockPage, BlockShowcase, Placeholder } from "@/components/blocks/_kit";
import { Card } from "@/components/voidui";
import { ZapIcon, PaletteIcon, LayersIcon, ShieldIcon } from "lucide-react";

export default function BentoPage() {
  return (
    <BlockPage eyebrow="Marketing — Bento" title="Bento grids" subtitle="Four variants — classic 4-up, hero-led mosaic, dense feature bento, and an editorial bento.">
      <BlockShowcase name="01 — Classic 4-up bento" bg="elev">
        <div style={{ padding: "48px 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gridTemplateRows: "200px 200px", gap: 14, maxWidth: 1000, marginInline: "auto" }}>
            <Card style={{ gridRow: "span 2", padding: 28, background: "var(--primary)", color: "var(--primary-fg)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <PaletteIcon size={28} />
              <div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.05, margin: "0 0 8px" }}>Ten themes, one contract</h3>
                <p style={{ margin: 0, fontSize: 14, opacity: 0.85, lineHeight: 1.5 }}>Light + dark variants of every theme, swapped in one attribute.</p>
              </div>
            </Card>
            <Card style={{ padding: 20 }}><LayersIcon size={20} style={{ marginBottom: 10 }} /><div style={{ fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 600 }}>Token-driven</div></Card>
            <Card style={{ padding: 20 }}><ZapIcon size={20} style={{ marginBottom: 10 }} /><div style={{ fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 600 }}>Motion tokens</div></Card>
            <Card style={{ gridColumn: "span 2", padding: 20, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
              <div><ShieldIcon size={20} style={{ marginBottom: 8 }} /><div style={{ fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 600 }}>WCAG-AA accessible</div><p style={{ margin: 0, fontSize: 12, color: "var(--fg-muted)" }}>Contrast tested in every theme</p></div>
              <Placeholder height={120} label="" />
            </Card>
          </div>
        </div>
      </BlockShowcase>

      <BlockShowcase name="02 — Hero-led mosaic">
        <div style={{ padding: "48px 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridTemplateRows: "180px 180px 180px", gap: 12, maxWidth: 1100, marginInline: "auto" }}>
            <Card style={{ gridColumn: "span 2", gridRow: "span 2", padding: 28, background: "var(--fg)", color: "var(--bg)", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 40, fontWeight: 500, letterSpacing: "-0.025em", lineHeight: 1.0, margin: 0 }}>Made for <em style={{ fontStyle: "italic", color: "var(--primary)" }}>real teams</em></h3>
            </Card>
            <Card style={{ padding: 18, gridColumn: "span 2" }}><div style={{ fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 600, marginBottom: 4 }}>Composability</div><p style={{ margin: 0, fontSize: 12, color: "var(--fg-muted)" }}>Every component composes via slots and tokens.</p></Card>
            <Card style={{ padding: 18 }}><div style={{ fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 600, marginBottom: 4 }}>Forms</div><p style={{ margin: 0, fontSize: 12, color: "var(--fg-muted)" }}>Wired aria-invalid + asterisks.</p></Card>
            <Card style={{ padding: 18 }}><div style={{ fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 600, marginBottom: 4 }}>Motion</div><p style={{ margin: 0, fontSize: 12, color: "var(--fg-muted)" }}>Tuned eases, not random ones.</p></Card>
            <Card style={{ gridColumn: "span 4", padding: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}><div style={{ fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 600 }}>RSC ready · MIT licensed · 30 components</div></Card>
          </div>
        </div>
      </BlockShowcase>

      <BlockShowcase name="03 — Dense feature bento" bg="elev">
        <div style={{ padding: "48px 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gridAutoRows: "120px", gap: 10, maxWidth: 1100, marginInline: "auto" }}>
            <Card style={{ gridColumn: "span 3", gridRow: "span 2", padding: 20 }}><Placeholder height="100%" label="primary visual" /></Card>
            <Card style={{ gridColumn: "span 3", padding: 18 }}><div style={{ fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 600 }}>30 components</div></Card>
            <Card style={{ gridColumn: "span 2", padding: 18 }}><div style={{ fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 600 }}>10 themes</div></Card>
            <Card style={{ gridColumn: "span 1", padding: 18, background: "var(--primary)", color: "var(--primary-fg)" }}><div style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 500, lineHeight: 1 }}>v3</div></Card>
            <Card style={{ gridColumn: "span 2", padding: 18 }}><div style={{ fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 600 }}>MIT</div></Card>
            <Card style={{ gridColumn: "span 4", padding: 18 }}><div style={{ fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 600 }}>Trusted by 12k+ teams</div></Card>
          </div>
        </div>
      </BlockShowcase>

      <BlockShowcase name="04 — Editorial bento">
        <div style={{ padding: "48px 32px", maxWidth: 1000, marginInline: "auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <Card style={{ padding: 36, minHeight: 320 }}>
              <div className="label" style={{ marginBottom: 16 }}>Issue 03 — Lead</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 500, letterSpacing: "-0.025em", lineHeight: 1.05, margin: 0 }}>Composing in token space</h3>
              <p style={{ margin: "16px 0 0", fontSize: 14, color: "var(--fg-muted)", lineHeight: 1.6 }}>Why component teams should think in CSS variables, not class names.</p>
            </Card>
            <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gap: 12 }}>
              <Card style={{ padding: 24 }}>
                <div className="label" style={{ marginBottom: 10 }}>02</div>
                <h4 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 500, margin: 0, letterSpacing: "-0.015em" }}>Notes on motion: don&apos;t lerp blindly</h4>
              </Card>
              <Card style={{ padding: 24, background: "var(--fg)", color: "var(--bg)" }}>
                <div className="label" style={{ marginBottom: 10, opacity: 0.6 }}>03</div>
                <h4 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 500, margin: 0, letterSpacing: "-0.015em" }}>The case against utility-first design</h4>
              </Card>
            </div>
          </div>
        </div>
      </BlockShowcase>
    </BlockPage>
  );
}
