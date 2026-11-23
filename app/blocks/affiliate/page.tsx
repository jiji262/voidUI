"use client";

import React from "react";
import { BlockPage, BlockShowcase, Placeholder } from "@/components/blocks/_kit";
import { Card, Badge, Button, Input, Label } from "@/components/voidui";
import { DollarSignIcon, TrendingUpIcon, UsersIcon, ArrowRightIcon } from "lucide-react";

export default function AffiliatePage() {
  return (
    <BlockPage eyebrow="Marketing — Affiliate" title="Affiliate program sections" subtitle="Three variants — program overview, calculator + signup, and partner showcase.">
      <BlockShowcase name="01 — Program overview" bg="elev">
        <div style={{ padding: "64px 32px", maxWidth: 1100, marginInline: "auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <Badge variant="outline" style={{ marginBottom: 16 }}>Affiliate · 30% commission</Badge>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: 56, fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 0.95, margin: "0 0 16px", maxWidth: 720, marginInline: "auto" }}>Earn for every team you bring.</h2>
            <p style={{ color: "var(--fg-muted)", maxWidth: 540, margin: "0 auto 24px" }}>30% recurring on every Pro and Team subscription, paid monthly. No minimums.</p>
            <div style={{ display: "flex", gap: 8, justifyContent: "center" }}><Button>Become an affiliate</Button><Button variant="outline">Read terms</Button></div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
            {[
              { icon: DollarSignIcon, k: "30%", v: "Recurring commission for life" },
              { icon: TrendingUpIcon, k: "$2,400", v: "Avg. affiliate annual earnings" },
              { icon: UsersIcon, k: "60 days", v: "Cookie attribution window" },
            ].map(({ icon: Icon, k, v }, i) => (
              <Card key={i} style={{ padding: 28, textAlign: "center" }}>
                <Icon size={22} style={{ color: "var(--primary)", margin: "0 auto 12px" }} />
                <div style={{ fontFamily: "var(--font-display)", fontSize: 44, fontWeight: 500, letterSpacing: "-0.025em", lineHeight: 1, marginBottom: 6 }}>{k}</div>
                <div style={{ fontSize: 13, color: "var(--fg-muted)" }}>{v}</div>
              </Card>
            ))}
          </div>
        </div>
      </BlockShowcase>

      <BlockShowcase name="02 — Calculator + signup">
        <div style={{ padding: "64px 32px", maxWidth: 1000, marginInline: "auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "center" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: 40, fontWeight: 500, letterSpacing: "-0.025em", margin: "0 0 12px", lineHeight: 1.05 }}>Estimate your earnings</h2>
            <p style={{ color: "var(--fg-muted)", margin: "0 0 24px" }}>Based on Pro plan ($24/mo) at 30% commission.</p>
            <Card style={{ padding: 24, background: "var(--bg-elev)" }}>
              <div style={{ display: "grid", gap: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1.5px solid var(--border-subtle)" }}><span style={{ fontSize: 13, color: "var(--fg-muted)" }}>10 referrals</span><span style={{ fontFamily: "var(--font-mono)", fontWeight: 600 }}>$72/mo</span></div>
                <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1.5px solid var(--border-subtle)" }}><span style={{ fontSize: 13, color: "var(--fg-muted)" }}>50 referrals</span><span style={{ fontFamily: "var(--font-mono)", fontWeight: 600 }}>$360/mo</span></div>
                <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 0" }}><span style={{ fontSize: 13, color: "var(--fg-muted)" }}>200 referrals</span><span style={{ fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--primary)" }}>$1,440/mo</span></div>
              </div>
            </Card>
          </div>
          <Card style={{ padding: 28 }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 500, margin: "0 0 16px", letterSpacing: "-0.02em" }}>Apply now</h3>
            <div style={{ display: "grid", gap: 12 }}>
              <div><Label>Full name</Label><Input placeholder="Ada Lovelace" /></div>
              <div><Label>Email</Label><Input type="email" placeholder="ada@studio.co" /></div>
              <div><Label>Audience size</Label><Input placeholder="e.g. 12,000 newsletter subs" /></div>
              <Button style={{ marginTop: 6 }}>Submit application</Button>
            </div>
          </Card>
        </div>
      </BlockShowcase>

      <BlockShowcase name="03 — Top partners" bg="elev">
        <div style={{ padding: "64px 32px", maxWidth: 1100, marginInline: "auto" }}>
          <div style={{ marginBottom: 24 }}>
            <div className="label" style={{ marginBottom: 8 }}>Featured partners</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 500, letterSpacing: "-0.025em", margin: 0 }}>Studios building with voidUI</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14 }}>
            {["Field Studio", "Chroma Labs", "Northing & Co.", "Halftone"].map((s, i) => (
              <Card key={i} style={{ padding: 20 }}>
                <Placeholder height={140} label={`${s} work`} />
                <div style={{ marginTop: 14 }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--fg-muted)", marginBottom: 4 }}>P/{String(i + 1).padStart(2, "0")}</div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 500, letterSpacing: "-0.015em", marginBottom: 4 }}>{s}</div>
                  <div style={{ fontSize: 12, color: "var(--fg-muted)" }}>120+ teams referred</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </BlockShowcase>
    </BlockPage>
  );
}
