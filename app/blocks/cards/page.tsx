"use client";

import React from "react";
import { BlockPage, BlockShowcase, Placeholder, InitialAvatar } from "@/components/blocks/_kit";
import { Button, Card, Badge } from "@/components/voidui";
import { ArrowRightIcon, MoreHorizontalIcon, CheckIcon, StarIcon } from "lucide-react";

export default function CardsPage() {
  return (
    <BlockPage eyebrow="Application — Cards" title="Cards" subtitle="Six variants — article, product, profile, stat, action, and a horizontal feature card.">
      <BlockShowcase name="01 — Article cards" bg="elev">
        <div style={{ padding: "48px 32px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16, maxWidth: 1100, marginInline: "auto" }}>
          {[1, 2, 3].map((i) => (
            <Card key={i} interactive style={{ padding: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <Placeholder height={180} label={`cover ${i}`} />
              <div style={{ padding: 20, flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
                <div style={{ display: "flex", gap: 6, marginBottom: 4 }}><Badge variant="outline" style={{ fontSize: 10 }}>Design</Badge><Badge variant="outline" style={{ fontSize: 10 }}>5 min</Badge></div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 500, letterSpacing: "-0.015em", margin: 0, lineHeight: 1.15 }}>Token contracts for design teams</h3>
                <p style={{ margin: 0, fontSize: 13, color: "var(--fg-muted)", lineHeight: 1.55 }}>Why CSS variables make better design systems than Tailwind classes.</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto", paddingTop: 12 }}>
                  <span style={{ fontSize: 12, fontFamily: "var(--font-mono)", color: "var(--fg-muted)" }}>Apr 26</span>
                  <ArrowRightIcon size={14} style={{ color: "var(--fg-muted)" }} />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </BlockShowcase>

      <BlockShowcase name="02 — Product cards">
        <div style={{ padding: "48px 32px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14, maxWidth: 1000, marginInline: "auto" }}>
          {[["Neobrutal kit", "$48"], ["Editorial set", "$36"], ["Aurora theme", "$24"], ["Mono pack", "$18"]].map(([n, p], i) => (
            <Card key={n} interactive style={{ padding: 0, overflow: "hidden" }}>
              <div style={{ position: "relative" }}>
                <Placeholder ratio="1/1" label={`product ${i + 1}`} />
                {i === 0 && <span style={{ position: "absolute", top: 10, left: 10, padding: "3px 8px", fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 700, background: "var(--primary)", color: "var(--primary-fg)", border: "1.5px solid var(--border)", borderRadius: "var(--r-pill)" }}>NEW</span>}
              </div>
              <div style={{ padding: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 600 }}>{n}</div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 500 }}>{p}</div>
                </div>
                <div style={{ display: "flex", gap: 2 }}>{[0, 0, 0, 0, 0].map((_, j) => <StarIcon key={j} size={11} style={{ color: j < 4 ? "var(--primary)" : "var(--border-subtle)" }} fill={j < 4 ? "var(--primary)" : "transparent"} />)}</div>
              </div>
            </Card>
          ))}
        </div>
      </BlockShowcase>

      <BlockShowcase name="03 — Profile cards" bg="elev">
        <div style={{ padding: "48px 32px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14, maxWidth: 980, marginInline: "auto" }}>
          {[["Ada Lovelace", "Founder"], ["Grace Hopper", "Eng Lead"], ["Maya O.", "Designer"], ["Rin Sato", "PM"]].map(([n, r], i) => (
            <Card key={n} style={{ padding: 22, textAlign: "center" }}>
              <InitialAvatar name={n} size={56} bg={i % 2 ? "var(--accent-1)" : "var(--accent-2)"} />
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 14, fontWeight: 600, marginTop: 12 }}>{n}</div>
              <div style={{ fontSize: 12, color: "var(--fg-muted)", marginBottom: 12 }}>{r}</div>
              <Button variant="outline" size="sm" fullWidth>View profile</Button>
            </Card>
          ))}
        </div>
      </BlockShowcase>

      <BlockShowcase name="04 — Stat cards">
        <div style={{ padding: "48px 32px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14, maxWidth: 1000, marginInline: "auto" }}>
          {[["Active users", "12,492", "+8.2%"], ["MRR", "$48,329", "+12.4%"], ["Churn", "1.2%", "-0.3%"], ["NPS", "62", "+4"]].map(([l, v, d], i) => (
            <Card key={l} style={{ padding: 22 }}>
              <div className="label" style={{ marginBottom: 10 }}>{l}</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 500, lineHeight: 1, letterSpacing: "-0.025em" }}>{v}</div>
              <div style={{ marginTop: 10, fontSize: 12, fontFamily: "var(--font-mono)", color: i === 2 ? "var(--primary)" : "var(--primary)", fontWeight: 600 }}>{d} this month</div>
            </Card>
          ))}
        </div>
      </BlockShowcase>

      <BlockShowcase name="05 — Action card with menu" bg="elev">
        <div style={{ padding: "48px 32px", maxWidth: 480, marginInline: "auto" }}>
          <Card style={{ padding: 22 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 600 }}>Q2 Roadmap</div>
                <div style={{ fontSize: 12, color: "var(--fg-muted)" }}>Last edited 2 days ago</div>
              </div>
              <button type="button" style={{ width: 28, height: 28, border: "1.5px solid var(--border-subtle)", background: "transparent", borderRadius: "var(--r-sm)", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--fg-muted)" }}><MoreHorizontalIcon size={14} /></button>
            </div>
            <p style={{ margin: "0 0 16px", fontSize: 13, color: "var(--fg-muted)", lineHeight: 1.55 }}>Ship 3 new themes, refactor token system, and launch the Figma plugin.</p>
            <div style={{ display: "flex", gap: 6, marginBottom: 14 }}>
              {[0, 1, 2, 3].map((j) => <InitialAvatar key={j} name={["Ada L", "Maya O", "Rin S", "Tom J"][j]} size={28} />)}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 12, borderTop: "1.5px solid var(--border-subtle)" }}>
              <span style={{ fontSize: 12, fontFamily: "var(--font-mono)", color: "var(--fg-muted)" }}>3 of 7 done</span>
              <Button size="sm" variant="ghost">Open <ArrowRightIcon size={11} /></Button>
            </div>
          </Card>
        </div>
      </BlockShowcase>

      <BlockShowcase name="06 — Horizontal feature card">
        <div style={{ padding: "48px 32px", maxWidth: 720, marginInline: "auto" }}>
          <Card style={{ padding: 0, overflow: "hidden", display: "grid", gridTemplateColumns: "180px 1fr", alignItems: "stretch" }}>
            <Placeholder height="100%" label="hero" />
            <div style={{ padding: 22 }}>
              <Badge style={{ marginBottom: 8 }}>Featured</Badge>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 500, margin: "0 0 6px", letterSpacing: "-0.02em" }}>The token system, explained</h3>
              <p style={{ margin: "0 0 12px", fontSize: 13, color: "var(--fg-muted)", lineHeight: 1.55 }}>How voidUI uses CSS variables to swap themes without rebuilding components.</p>
              <Button size="sm" variant="outline">Read article <ArrowRightIcon size={12} /></Button>
            </div>
          </Card>
        </div>
      </BlockShowcase>
    </BlockPage>
  );
}
