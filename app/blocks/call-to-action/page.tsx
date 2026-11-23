"use client";

import React from "react";
import { BlockPage, BlockShowcase } from "@/components/blocks/_kit";
import { Button, Card, Input } from "@/components/voidui";
import { ArrowRightIcon, ZapIcon, SparklesIcon, MailIcon } from "lucide-react";

export default function CTAPage() {
  return (
    <BlockPage eyebrow="Marketing — Call to Action" title="Call-to-action sections" subtitle="Five variants — full-width inverted, split, newsletter capture, banner strip, and a stat-anchored CTA.">
      <BlockShowcase name="01 — Inverted full-width" bg="fg">
        <div style={{ padding: "96px 48px", textAlign: "center", color: "var(--bg)" }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, opacity: 0.6, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Limited spots</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 6vw, 80px)", fontWeight: 500, lineHeight: 1.0, letterSpacing: "-0.035em", margin: "0 0 20px", maxWidth: 760, marginInline: "auto" }}>
            Ready to <em style={{ fontStyle: "italic", color: "var(--primary)" }}>ship something good?</em>
          </h2>
          <p style={{ fontSize: 17, opacity: 0.75, lineHeight: 1.55, margin: "0 0 32px", maxWidth: 540, marginInline: "auto" }}>The system is open source. The community is welcoming. The output is yours.</p>
          <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
            <Button style={{ background: "var(--primary)", color: "var(--primary-fg)", borderColor: "var(--bg)" }}>Start building <ArrowRightIcon size={14} /></Button>
            <Button variant="outline" style={{ background: "transparent", color: "var(--bg)", borderColor: "var(--bg)" }}>Read the docs</Button>
          </div>
        </div>
      </BlockShowcase>

      <BlockShowcase name="02 — Split with form" bg="elev">
        <div style={{ padding: "64px 48px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
          <div>
            <div className="label" style={{ marginBottom: 12 }}>Newsletter</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: 44, fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1.05, margin: "0 0 16px" }}>
              Two emails a month, <em style={{ fontStyle: "italic", color: "var(--primary)" }}>worth reading</em>
            </h2>
            <p style={{ fontSize: 15, color: "var(--fg-muted)", lineHeight: 1.6, margin: 0, maxWidth: 420 }}>Component releases, design notes, and one curated link from elsewhere on the web.</p>
          </div>
          <Card style={{ padding: 28 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <Input placeholder="you@voidui.dev" type="email" />
              <Button fullWidth><MailIcon size={14} /> Subscribe</Button>
              <p style={{ margin: 0, fontSize: 12, color: "var(--fg-muted)", textAlign: "center" }}>No spam. Unsubscribe anytime.</p>
            </div>
          </Card>
        </div>
      </BlockShowcase>

      <BlockShowcase name="03 — Banner strip" bg="primary">
        <div style={{ padding: "20px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, color: "var(--primary-fg)", flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <SparklesIcon size={16} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 14, fontWeight: 600 }}>v3.0 just landed — 10 themes, refined tokens, new motion system.</span>
          </div>
          <Button size="sm" style={{ background: "var(--bg)", color: "var(--fg)", borderColor: "var(--fg)" }}>What&apos;s new <ArrowRightIcon size={12} /></Button>
        </div>
      </BlockShowcase>

      <BlockShowcase name="04 — Card-anchored">
        <div style={{ padding: "80px 48px" }}>
          <Card style={{ padding: "56px 48px", maxWidth: 880, marginInline: "auto", textAlign: "center", background: "var(--bg-elev)" }}>
            <ZapIcon size={28} style={{ marginBottom: 16 }} />
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: 40, fontWeight: 500, letterSpacing: "-0.025em", lineHeight: 1.05, margin: "0 0 12px" }}>Set up in <em style={{ fontStyle: "italic", color: "var(--primary)" }}>under 60 seconds</em></h2>
            <p style={{ fontSize: 15, color: "var(--fg-muted)", margin: "0 0 24px", maxWidth: 520, marginInline: "auto" }}>Single npm install. No webpack config. No CSS overrides.</p>
            <pre style={{ display: "inline-block", margin: "0 0 24px", padding: "10px 16px", border: "1.5px solid var(--border)", borderRadius: "var(--r-sm)", background: "var(--bg)", fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 500 }}>$ pnpm add @voidui/react</pre>
            <div><Button>Get started <ArrowRightIcon size={13} /></Button></div>
          </Card>
        </div>
      </BlockShowcase>

      <BlockShowcase name="05 — Stat-anchored CTA" bg="elev">
        <div style={{ padding: "80px 48px", display: "grid", gridTemplateColumns: "1fr auto", gap: 48, alignItems: "center" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: 48, fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1.0, margin: "0 0 12px" }}>
              <em style={{ fontStyle: "italic", color: "var(--primary)" }}>12,000+</em> teams already shipping
            </h2>
            <p style={{ fontSize: 16, color: "var(--fg-muted)", margin: 0, maxWidth: 480, lineHeight: 1.55 }}>Join indie hackers, design studios, and Fortune 100s — all building on voidUI&apos;s token system.</p>
          </div>
          <div style={{ display: "flex", gap: 10, flexDirection: "column" }}>
            <Button size="lg">Join them <ArrowRightIcon size={14} /></Button>
            <Button variant="ghost" size="sm">View case studies</Button>
          </div>
        </div>
      </BlockShowcase>
    </BlockPage>
  );
}
