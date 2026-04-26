"use client";

import React from "react";
import { BlockPage, BlockShowcase, Placeholder, InitialAvatar } from "@/components/blocks/_kit";
import { Button, Badge, Card } from "@/components/voidui";
import { ArrowRightIcon, SparklesIcon, PlayIcon, GithubIcon, StarIcon, ZapIcon } from "lucide-react";

export default function HeroSectionsPage() {
  return (
    <BlockPage eyebrow="Marketing — Hero Sections" title="Hero sections" subtitle="Six variants — split layouts, centered, full-bleed, eyebrow-led, with imagery, and a stat-anchored hero. All token-driven.">
      <BlockShowcase name="01 — Split with preview" tag="default">
        <div style={{ padding: "64px 48px", display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 48, alignItems: "center" }}>
          <div>
            <span className="badge ghost" style={{ marginBottom: 16, display: "inline-flex", gap: 6, alignItems: "center" }}><SparklesIcon size={11} /> v3.0 launch</span>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 500, letterSpacing: "-0.035em", lineHeight: 1.0, margin: "0 0 20px" }}>
              Build interfaces<br /><em style={{ fontStyle: "italic", color: "var(--primary)" }}>with intent</em>
            </h1>
            <p style={{ fontSize: 17, color: "var(--fg-muted)", lineHeight: 1.6, margin: "0 0 28px" }}>The component library for teams that want pixel-perfect output without designing from scratch.</p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <Button>Get started <ArrowRightIcon size={14} /></Button>
              <Button variant="outline"><PlayIcon size={13} /> Watch demo</Button>
            </div>
          </div>
          <Placeholder height={380} label="product preview" />
        </div>
      </BlockShowcase>

      <BlockShowcase name="02 — Centered with badge cluster" bg="elev">
        <div style={{ padding: "96px 48px", textAlign: "center", maxWidth: 880, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", gap: 6, marginBottom: 24 }}>
            <span className="badge">New</span>
            <span className="badge ghost">10 themes</span>
            <span className="badge ghost">MIT</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(48px, 7vw, 88px)", fontWeight: 500, letterSpacing: "-0.035em", lineHeight: 0.95, margin: "0 0 24px" }}>
            One system,<br /><em style={{ fontStyle: "italic", color: "var(--primary)" }}>ten directions</em>
          </h1>
          <p style={{ fontSize: 18, color: "var(--fg-muted)", lineHeight: 1.55, margin: "0 0 32px", maxWidth: 600, marginInline: "auto" }}>Switch theme with one attribute. Components follow. Light or dark. Brutalist or refined.</p>
          <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
            <Button>Explore themes</Button>
            <Button variant="ghost"><GithubIcon size={13} /> Star on GitHub · 2.1k</Button>
          </div>
        </div>
      </BlockShowcase>

      <BlockShowcase name="03 — Full-bleed inverted" bg="fg">
        <div style={{ padding: "96px 48px", color: "var(--bg)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "end" }}>
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, opacity: 0.6, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Issue 03 — Spring 2026</div>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(56px, 8vw, 112px)", fontWeight: 500, letterSpacing: "-0.04em", lineHeight: 0.92, margin: 0 }}>
              Designed,<br />not <em style={{ fontStyle: "italic", color: "var(--primary)" }}>generated</em>.
            </h1>
          </div>
          <div>
            <p style={{ fontSize: 17, opacity: 0.8, lineHeight: 1.55, margin: "0 0 24px", maxWidth: 460 }}>Every component carries opinions about spacing, motion, and contrast. Read them, override them, ship them.</p>
            <Button style={{ background: "var(--primary)", color: "var(--primary-fg)", borderColor: "var(--bg)" }}>Read the manifesto <ArrowRightIcon size={13} /></Button>
          </div>
        </div>
      </BlockShowcase>

      <BlockShowcase name="04 — Eyebrow-led editorial">
        <div style={{ padding: "80px 48px", maxWidth: 980, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
            <span style={{ width: 48, height: 1.5, background: "var(--fg)" }} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>A note from the team</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 500, letterSpacing: "-0.025em", lineHeight: 1.05, margin: "0 0 32px" }}>
            We started voidUI because every component library felt like a compromise — too generic, too stylized, or too brittle. So we built one that holds opinions, but lets you change them.
          </h1>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <InitialAvatar name="Ada Lovelace" size={40} />
            <div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 600 }}>Ada Lovelace</div>
              <div style={{ fontSize: 12, color: "var(--fg-muted)" }}>Founder, voidUI</div>
            </div>
          </div>
        </div>
      </BlockShowcase>

      <BlockShowcase name="05 — Stat-anchored" bg="elev">
        <div style={{ padding: "80px 48px" }}>
          <div style={{ maxWidth: 720, marginBottom: 56 }}>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 5.5vw, 68px)", fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1.0, margin: "0 0 20px" }}>
              The library trusted by <em style={{ fontStyle: "italic", color: "var(--primary)" }}>teams shipping fast</em>
            </h1>
            <p style={{ fontSize: 16, color: "var(--fg-muted)", margin: 0, lineHeight: 1.6 }}>From two-person startups to public companies — voidUI scales with you.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 0, border: "1.5px solid var(--border)", background: "var(--bg)", borderRadius: "var(--r)", overflow: "hidden" }}>
            {[["12k+", "active teams"], ["48M", "components rendered"], ["99.9%", "a11y-AA contrast"], ["2.1k", "GitHub stars"]].map(([n, l], i) => (
              <div key={l} style={{ padding: 24, borderRight: i < 3 ? "1.5px solid var(--border-subtle)" : "none" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 44, fontWeight: 500, lineHeight: 1, letterSpacing: "-0.03em" }}>{n}</div>
                <div style={{ fontSize: 12, color: "var(--fg-muted)", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.06em", marginTop: 8 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </BlockShowcase>

      <BlockShowcase name="06 — Asymmetric with feature card">
        <div style={{ padding: "80px 48px", display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 32, alignItems: "stretch" }}>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div className="label" style={{ marginBottom: 16 }}>For design teams</div>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 4.5vw, 56px)", fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1.0, margin: "0 0 20px" }}>
              Stop reinventing the <em style={{ fontStyle: "italic", color: "var(--primary)" }}>button</em>.
            </h1>
            <p style={{ fontSize: 16, color: "var(--fg-muted)", lineHeight: 1.6, margin: "0 0 24px", maxWidth: 460 }}>Token contracts let designers and engineers move at the same speed without stepping on each other.</p>
            <div style={{ display: "flex", gap: 10 }}>
              <Button>Get the kit</Button>
              <Button variant="outline">Figma file</Button>
            </div>
          </div>
          <Card style={{ padding: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}>
            <div style={{ padding: 20, background: "var(--primary)", color: "var(--primary-fg)", borderBottom: "1.5px solid var(--border)" }}>
              <ZapIcon size={20} style={{ marginBottom: 12 }} />
              <div style={{ fontFamily: "var(--font-display)", fontSize: 24, lineHeight: 1.1, fontWeight: 500, letterSpacing: "-0.02em" }}>Ship 3× faster</div>
            </div>
            <div style={{ padding: 20, fontSize: 13, color: "var(--fg-muted)", lineHeight: 1.6, flex: 1 }}>Teams using voidUI report shipping new flows in days, not weeks.</div>
            <div style={{ padding: "12px 20px", borderTop: "1.5px solid var(--border-subtle)", display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "var(--font-mono)", fontSize: 12 }}>
              <span style={{ color: "var(--fg-muted)" }}>Read case study</span><ArrowRightIcon size={12} />
            </div>
          </Card>
        </div>
      </BlockShowcase>
    </BlockPage>
  );
}
