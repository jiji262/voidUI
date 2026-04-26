"use client";

import React from "react";
import { BlockPage, BlockShowcase, Placeholder } from "@/components/blocks/_kit";
import { Card, Button, Badge } from "@/components/voidui";
import { ZapIcon, ShieldIcon, PaletteIcon, LayersIcon, BoxIcon, GitBranchIcon, CodeIcon, AccessibilityIcon, ArrowRightIcon } from "lucide-react";

const F = [
  { icon: PaletteIcon, title: "10 themes", body: "From earthy Terra to electric Cyber. Each is a complete contract." },
  { icon: LayersIcon, title: "Token-driven", body: "Change the variable, every component follows." },
  { icon: BoxIcon, title: "30 components", body: "Inputs, displays, overlays. Built on Radix where it counts." },
  { icon: ZapIcon, title: "Motion tokens", body: "Tuned timing, not random eases." },
  { icon: ShieldIcon, title: "A11y first", body: "WCAG-AA contrast, focus rings, aria-invalid." },
  { icon: CodeIcon, title: "RSC ready", body: "Server tree stays a server tree." },
];

export default function FeatureBlocksPage() {
  return (
    <BlockPage eyebrow="Marketing — Features" title="Feature blocks" subtitle="Six variants — grid, alternating split, icon list, bento, sticky scroll, and a numbered editorial layout.">
      <BlockShowcase name="01 — Six-up grid" bg="elev">
        <div style={{ padding: "64px 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 0, border: "1.5px solid var(--border)", background: "var(--bg)", borderRadius: "var(--r)", overflow: "hidden", maxWidth: 1100, marginInline: "auto" }}>
            {F.map((f, i) => (
              <div key={f.title} style={{ padding: 28, borderRight: i % 3 !== 2 ? "1.5px solid var(--border-subtle)" : "none", borderBottom: i < 3 ? "1.5px solid var(--border-subtle)" : "none" }}>
                <div style={{ width: 36, height: 36, border: "1.5px solid var(--border)", background: "var(--primary)", color: "var(--primary-fg)", borderRadius: "var(--r-sm)", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: 16, boxShadow: "var(--sh-xs)" }}><f.icon size={16} /></div>
                <h3 style={{ fontFamily: "var(--font-mono)", fontSize: 15, fontWeight: 600, margin: "0 0 8px" }}>{f.title}</h3>
                <p style={{ margin: 0, fontSize: 14, color: "var(--fg-muted)", lineHeight: 1.6 }}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </BlockShowcase>

      <BlockShowcase name="02 — Alternating split">
        <div style={{ padding: "64px 32px", display: "flex", flexDirection: "column", gap: 64, maxWidth: 1100, marginInline: "auto" }}>
          {[0, 1].map((i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center", direction: i % 2 ? "rtl" : "ltr" }}>
              <Placeholder height={300} label={`feature ${i + 1}`} />
              <div style={{ direction: "ltr" }}>
                <div className="label" style={{ marginBottom: 12 }}>Feature {String(i + 1).padStart(2, "0")}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 500, letterSpacing: "-0.025em", margin: "0 0 12px", lineHeight: 1.05 }}>{i === 0 ? "Token contracts that scale" : "Motion that feels intentional"}</h3>
                <p style={{ margin: "0 0 16px", color: "var(--fg-muted)", lineHeight: 1.6 }}>{i === 0 ? "Designers and engineers reference the same names. Spec drift becomes nearly impossible." : "Every press, hover, and reveal uses tuned tokens — not random easings."}</p>
                <Button variant="outline" size="sm">Learn more <ArrowRightIcon size={12} /></Button>
              </div>
            </div>
          ))}
        </div>
      </BlockShowcase>

      <BlockShowcase name="03 — Icon list" bg="elev">
        <div style={{ padding: "64px 32px", maxWidth: 1100, marginInline: "auto", display: "grid", gridTemplateColumns: "1fr 2fr", gap: 48 }}>
          <div>
            <div className="label" style={{ marginBottom: 12 }}>Why teams choose voidUI</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: 40, fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1.05, margin: 0 }}>Built for the way you actually <em style={{ fontStyle: "italic", color: "var(--primary)" }}>ship</em></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {F.slice(0, 4).map((f) => (
              <div key={f.title} style={{ display: "flex", gap: 14 }}>
                <div style={{ width: 32, height: 32, border: "1.5px solid var(--border)", borderRadius: "var(--r-sm)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0, background: "var(--bg)" }}><f.icon size={14} /></div>
                <div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 14, fontWeight: 600, marginBottom: 4 }}>{f.title}</div>
                  <p style={{ margin: 0, fontSize: 13, color: "var(--fg-muted)", lineHeight: 1.55 }}>{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </BlockShowcase>

      <BlockShowcase name="04 — Bento layout">
        <div style={{ padding: "64px 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridTemplateRows: "200px 200px", gap: 14, maxWidth: 1100, marginInline: "auto" }}>
            <Card style={{ padding: 24, gridColumn: "span 2", gridRow: "span 2", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "var(--primary)", color: "var(--primary-fg)" }}>
              <PaletteIcon size={28} />
              <div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 500, letterSpacing: "-0.02em", margin: "0 0 6px", lineHeight: 1.05 }}>10 themes, light + dark</h3>
                <p style={{ margin: 0, opacity: 0.85, fontSize: 14, lineHeight: 1.55 }}>One token contract. Twenty visual identities ready out of the box.</p>
              </div>
            </Card>
            {F.slice(2, 6).map((f, i) => (
              <Card key={f.title} style={{ padding: 20, gridColumn: i === 1 ? "span 2" : "span 1" }}>
                <f.icon size={20} style={{ marginBottom: 10 }} />
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 600 }}>{f.title}</div>
                <p style={{ margin: "4px 0 0", fontSize: 12, color: "var(--fg-muted)", lineHeight: 1.5 }}>{f.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </BlockShowcase>

      <BlockShowcase name="05 — Stacked steps" bg="elev">
        <div style={{ padding: "64px 32px", maxWidth: 720, marginInline: "auto" }}>
          {F.slice(0, 3).map((f, i) => (
            <div key={f.title} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 24, paddingBottom: i < 2 ? 32 : 0, marginBottom: i < 2 ? 32 : 0, borderBottom: i < 2 ? "1.5px solid var(--border-subtle)" : "none" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 64, fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 0.9, color: "var(--primary)" }}>{String(i + 1).padStart(2, "0")}</div>
              <div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 500, letterSpacing: "-0.02em", margin: "0 0 8px", lineHeight: 1.1 }}>{f.title}</h3>
                <p style={{ margin: 0, fontSize: 15, color: "var(--fg-muted)", lineHeight: 1.6 }}>{f.body} Detailed enough to act on, terse enough to read.</p>
              </div>
            </div>
          ))}
        </div>
      </BlockShowcase>

      <BlockShowcase name="06 — Compact card row">
        <div style={{ padding: "64px 32px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14, maxWidth: 1100, marginInline: "auto" }}>
          {F.map((f) => (
            <Card key={f.title} style={{ padding: 20 }}>
              <f.icon size={18} style={{ marginBottom: 10, color: "var(--primary)" }} />
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 600, marginBottom: 4 }}>{f.title}</div>
              <p style={{ margin: 0, fontSize: 12, color: "var(--fg-muted)", lineHeight: 1.55 }}>{f.body}</p>
            </Card>
          ))}
        </div>
      </BlockShowcase>
    </BlockPage>
  );
}
