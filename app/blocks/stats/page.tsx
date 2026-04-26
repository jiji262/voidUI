"use client";

import React from "react";
import { BlockPage, BlockShowcase } from "@/components/blocks/_kit";
import { Card } from "@/components/voidui";
import { TrendingUpIcon, UsersIcon, GlobeIcon, ZapIcon, ArrowUpRightIcon } from "lucide-react";

export default function StatsPage() {
  return (
    <BlockPage eyebrow="Marketing — Stats" title="Stat sections" subtitle="Five variants — divided row, card grid, icon grid, contrast hero, and a numbered editorial list.">
      <BlockShowcase name="01 — Divided row" bg="elev">
        <div style={{ padding: "64px 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 0, border: "1.5px solid var(--border)", background: "var(--bg)", borderRadius: "var(--r)", overflow: "hidden", maxWidth: 1100, marginInline: "auto" }}>
            {[["12k+", "active teams"], ["48M", "components rendered"], ["99.97%", "uptime"], ["2.1k", "GitHub stars"]].map(([n, l], i) => (
              <div key={l} style={{ padding: 32, borderRight: i < 3 ? "1.5px solid var(--border-subtle)" : "none", textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 56, fontWeight: 500, lineHeight: 1, letterSpacing: "-0.03em" }}>{n}</div>
                <div style={{ fontSize: 12, color: "var(--fg-muted)", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.06em", marginTop: 10 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </BlockShowcase>

      <BlockShowcase name="02 — Card grid with icons">
        <div style={{ padding: "48px 32px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14, maxWidth: 1100, marginInline: "auto" }}>
          {[[TrendingUpIcon, "+248%", "MRR growth", "+12% this quarter"], [UsersIcon, "12,492", "Active users", "+8.2% this month"], [GlobeIcon, "84", "Countries", "5 new in March"], [ZapIcon, "132ms", "Avg response", "p95 latency"]].map(([Ic, v, l, d], i) => (
            <Card key={l as string} style={{ padding: 22 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                <Ic size={18} style={{ color: "var(--primary)" }} />
                <ArrowUpRightIcon size={14} style={{ color: "var(--fg-muted)" }} />
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 500, lineHeight: 1, letterSpacing: "-0.025em" }}>{v as string}</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 600, marginTop: 8 }}>{l as string}</div>
              <div style={{ fontSize: 11, color: "var(--fg-muted)", marginTop: 2 }}>{d as string}</div>
            </Card>
          ))}
        </div>
      </BlockShowcase>

      <BlockShowcase name="03 — Contrast hero" bg="fg">
        <div style={{ padding: "80px 32px", color: "var(--bg)" }}>
          <div style={{ maxWidth: 720, marginBottom: 48 }}>
            <div className="label" style={{ marginBottom: 16, color: "var(--bg)", opacity: 0.6 }}>By the numbers</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: 48, fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1.0, margin: 0 }}>Trusted at <em style={{ fontStyle: "italic", color: "var(--primary)" }}>scale</em></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 32 }}>
            {[["12k+", "teams"], ["48M+", "renders / mo"], ["99.97%", "uptime"], ["AAA", "contrast"]].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 64, fontWeight: 500, lineHeight: 0.95, letterSpacing: "-0.035em" }}>{n}</div>
                <div style={{ fontSize: 12, fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.08em", marginTop: 12, opacity: 0.7 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </BlockShowcase>

      <BlockShowcase name="04 — Editorial numbered" bg="elev">
        <div style={{ padding: "64px 32px", maxWidth: 720, marginInline: "auto" }}>
          {[["Teams shipping daily", "12,492", "across 84 countries"], ["Total components rendered", "48M+", "every month, growing"], ["Active GitHub contributors", "127", "and counting"]].map(([l, v, d], i, arr) => (
            <div key={l} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 32, paddingBlock: 24, borderBottom: i < arr.length - 1 ? "1.5px solid var(--border-subtle)" : "none" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 600, color: "var(--fg-muted)", letterSpacing: "0.08em", paddingTop: 12 }}>{String(i + 1).padStart(2, "0")}</div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 12 }}>
                <div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 600 }}>{l}</div>
                  <div style={{ fontSize: 12, color: "var(--fg-muted)", marginTop: 2 }}>{d}</div>
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 44, fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1 }}>{v}</div>
              </div>
            </div>
          ))}
        </div>
      </BlockShowcase>

      <BlockShowcase name="05 — Logo cloud + headline">
        <div style={{ padding: "64px 32px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 500, letterSpacing: "-0.025em", margin: "0 0 8px" }}>Trusted by teams at</h2>
          <p style={{ color: "var(--fg-muted)", fontSize: 14, margin: "0 0 32px" }}>From two-person studios to public companies</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 20, maxWidth: 1000, marginInline: "auto" }}>
            {["Lattice", "Linear", "Vercel", "Stripe", "Notion", "Figma"].map((co) => (
              <div key={co} style={{ padding: "18px 12px", border: "1.5px solid var(--border-subtle)", borderRadius: "var(--r-sm)", fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 500, letterSpacing: "-0.02em", color: "var(--fg-muted)" }}>{co}</div>
            ))}
          </div>
        </div>
      </BlockShowcase>
    </BlockPage>
  );
}
