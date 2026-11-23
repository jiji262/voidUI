"use client";

import React from "react";
import { BlockPage, BlockShowcase } from "@/components/blocks/_kit";
import { Button, Card, Badge } from "@/components/voidui";
import { CheckIcon, ArrowRightIcon } from "lucide-react";

const PLANS = [
  { name: "Hobby", price: "$0", desc: "For tinkering", features: ["3 projects", "Public sharing", "Community support"], cta: "Start free", highlight: false },
  { name: "Pro", price: "$19", desc: "For serious work", features: ["Unlimited projects", "Custom domains", "Token playground", "Priority support", "Figma sync"], cta: "Get Pro", highlight: true },
  { name: "Team", price: "$49", desc: "Per seat / month", features: ["Everything in Pro", "Roles & SSO", "Audit log", "Slack support", "Custom themes"], cta: "Talk to sales", highlight: false },
];

export default function PricingTablesPage() {
  return (
    <BlockPage eyebrow="Marketing — Pricing" title="Pricing tables" subtitle="Four variants — three-tier highlighted, comparison table, single-product, and a stripped editorial pricing block.">
      <BlockShowcase name="01 — Three tier with highlight" bg="elev">
        <div style={{ padding: "64px 32px" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: 44, fontWeight: 500, letterSpacing: "-0.03em", margin: "0 0 8px" }}>Plans for every size</h2>
            <p style={{ color: "var(--fg-muted)", margin: 0 }}>Start free, scale as you grow.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16, maxWidth: 980, marginInline: "auto" }}>
            {PLANS.map((p) => (
              <div key={p.name} className="card" style={{ padding: 28, position: "relative", display: "flex", flexDirection: "column", gap: 16, ...(p.highlight ? { background: "var(--fg)", color: "var(--bg)", borderColor: "var(--fg)" } : {}) }}>
                {p.highlight && <span style={{ position: "absolute", top: -10, left: 24, padding: "3px 10px", fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 600, background: "var(--primary)", color: "var(--primary-fg)", border: "1.5px solid var(--border)", borderRadius: "var(--r-pill)" }}>Most popular</span>}
                <div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 600, opacity: 0.7, marginBottom: 4 }}>{p.name}</div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 48, fontWeight: 500, lineHeight: 1, letterSpacing: "-0.03em" }}>{p.price}<span style={{ fontSize: 14, opacity: 0.6 }}>/mo</span></div>
                  <div style={{ fontSize: 13, opacity: 0.65, marginTop: 4 }}>{p.desc}</div>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
                  {p.features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14 }}>
                      <CheckIcon size={13} style={{ flexShrink: 0, color: "var(--primary)" }} />{f}
                    </li>
                  ))}
                </ul>
                <Button fullWidth variant={p.highlight ? "default" : "outline"} style={p.highlight ? { background: "var(--primary)", color: "var(--primary-fg)", borderColor: "var(--bg)" } : {}}>{p.cta}</Button>
              </div>
            ))}
          </div>
        </div>
      </BlockShowcase>

      <BlockShowcase name="02 — Comparison table">
        <div style={{ padding: "64px 32px" }}>
          <div style={{ overflow: "auto", border: "1.5px solid var(--border)", borderRadius: "var(--r)" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-mono)", fontSize: 13 }}>
              <thead>
                <tr style={{ background: "var(--bg-elev)" }}>
                  <th style={{ padding: 16, textAlign: "left", borderBottom: "1.5px solid var(--border)", fontWeight: 600 }}>Feature</th>
                  {PLANS.map((p) => (
                    <th key={p.name} style={{ padding: 16, borderBottom: "1.5px solid var(--border)", borderLeft: "1.5px solid var(--border-subtle)", fontWeight: 600 }}>{p.name}<div style={{ fontSize: 11, opacity: 0.65, marginTop: 2 }}>{p.price}/mo</div></th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[["Projects", "3", "∞", "∞"], ["Custom domains", "—", "✓", "✓"], ["Token playground", "—", "✓", "✓"], ["SSO & roles", "—", "—", "✓"], ["Audit log", "—", "—", "✓"], ["Support", "Community", "Priority", "Slack + DM"]].map((row, i) => (
                  <tr key={i} style={{ borderBottom: i < 5 ? "1.5px solid var(--border-subtle)" : "none" }}>
                    {row.map((cell, j) => (
                      <td key={j} style={{ padding: 14, borderLeft: j > 0 ? "1.5px solid var(--border-subtle)" : "none", textAlign: j === 0 ? "left" : "center", color: cell === "—" ? "var(--fg-muted)" : "inherit", fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <td style={{ padding: 16 }}></td>
                  {PLANS.map((p) => (
                    <td key={p.name} style={{ padding: 16, borderLeft: "1.5px solid var(--border-subtle)", textAlign: "center" }}>
                      <Button size="sm" variant={p.highlight ? "default" : "outline"}>{p.cta}</Button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </BlockShowcase>

      <BlockShowcase name="03 — Single product, generous" bg="fg">
        <div style={{ padding: "80px 48px", color: "var(--bg)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
          <div>
            <Badge style={{ marginBottom: 16, background: "var(--primary)", color: "var(--primary-fg)" }}>Pro</Badge>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: 56, fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1.0, margin: "0 0 16px" }}>Everything you need, <em style={{ fontStyle: "italic", color: "var(--primary)" }}>nothing more</em></h2>
            <p style={{ opacity: 0.75, fontSize: 16, lineHeight: 1.6, margin: 0 }}>One plan. Every feature. No tier-gating.</p>
          </div>
          <div style={{ background: "var(--bg)", color: "var(--fg)", border: "1.5px solid var(--bg)", borderRadius: "var(--r)", padding: 32 }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 24 }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: 64, fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1 }}>$29</span>
              <span style={{ fontSize: 14, color: "var(--fg-muted)" }}>per month</span>
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: 8 }}>
              {["Unlimited projects", "All themes & components", "Token playground", "Figma source files", "Priority support", "Cancel anytime"].map((f) => (
                <li key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14 }}><CheckIcon size={14} style={{ color: "var(--primary)" }} />{f}</li>
              ))}
            </ul>
            <Button fullWidth>Start 14-day trial <ArrowRightIcon size={13} /></Button>
          </div>
        </div>
      </BlockShowcase>

      <BlockShowcase name="04 — Editorial pricing">
        <div style={{ padding: "80px 48px", maxWidth: 800, margin: "0 auto" }}>
          <div className="label" style={{ marginBottom: 16 }}>Pricing — direct</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 44, fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1.0, margin: "0 0 32px" }}>It costs what it costs.</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1.5px solid var(--border)", borderRadius: "var(--r)", overflow: "hidden" }}>
            {[["Starter", "$0", "Up to 3 projects", "—"], ["Pro", "$19", "Unlimited, with Figma sync", "Get Pro"], ["Team", "$49 / seat", "SSO, audit log, custom themes", "Contact"], ["Enterprise", "Custom", "Volume, SLAs, on-prem", "Contact"]].map(([n, p, d, c], i) => (
              <div key={n} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 2fr auto", gap: 16, alignItems: "center", padding: 20, borderBottom: i < 3 ? "1.5px solid var(--border-subtle)" : "none", background: i === 1 ? "var(--bg-elev)" : "var(--bg)" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 600 }}>{n}</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 500, letterSpacing: "-0.02em" }}>{p}</div>
                <div style={{ fontSize: 13, color: "var(--fg-muted)" }}>{d}</div>
                {c !== "—" ? <Button size="sm" variant="outline">{c}</Button> : <span style={{ color: "var(--fg-muted)", fontSize: 13 }}>Free</span>}
              </div>
            ))}
          </div>
        </div>
      </BlockShowcase>
    </BlockPage>
  );
}
