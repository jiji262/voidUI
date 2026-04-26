"use client";

import React from "react";
import { BlockPage, BlockShowcase, Placeholder } from "@/components/blocks/_kit";
import { Button, Card, Input, Label, Checkbox } from "@/components/voidui";
import { ArrowRightIcon, CheckIcon, SparklesIcon, RocketIcon } from "lucide-react";

export default function OnboardingPage() {
  return (
    <BlockPage eyebrow="Application — Onboarding" title="Onboarding flows" subtitle="Three variants — welcome panel, multi-step wizard, and a checklist progress card.">
      <BlockShowcase name="01 — Welcome panel" bg="elev">
        <div style={{ padding: "64px 24px", display: "flex", justifyContent: "center" }}>
          <Card style={{ padding: 0, overflow: "hidden", width: "100%", maxWidth: 560 }}>
            <div style={{ padding: 32, background: "var(--primary)", color: "var(--primary-fg)", borderBottom: "1.5px solid var(--border)" }}>
              <RocketIcon size={28} style={{ marginBottom: 12 }} />
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 500, letterSpacing: "-0.02em", margin: "0 0 6px", lineHeight: 1.05 }}>Welcome to voidUI</h2>
              <p style={{ margin: 0, opacity: 0.85, fontSize: 14, lineHeight: 1.55 }}>Three quick steps and you&apos;ll be shipping.</p>
            </div>
            <div style={{ padding: 28, display: "flex", flexDirection: "column", gap: 14 }}>
              {["Tell us about yourself", "Pick your starting theme", "Invite teammates"].map((s, i) => (
                <div key={s} style={{ display: "flex", alignItems: "center", gap: 12, padding: 12, border: "1.5px solid var(--border-subtle)", borderRadius: "var(--r-sm)" }}>
                  <div style={{ width: 28, height: 28, border: "1.5px solid var(--border)", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700, background: "var(--bg-elev)" }}>{i + 1}</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 600, flex: 1 }}>{s}</div>
                  <span className="badge ghost" style={{ fontSize: 10 }}>~30s</span>
                </div>
              ))}
              <Button fullWidth style={{ marginTop: 8 }}>Get started <ArrowRightIcon size={13} /></Button>
            </div>
          </Card>
        </div>
      </BlockShowcase>

      <BlockShowcase name="02 — Multi-step wizard">
        <div style={{ padding: "48px 24px", maxWidth: 720, marginInline: "auto" }}>
          <div style={{ display: "flex", gap: 6, marginBottom: 24 }}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} style={{ flex: 1, height: 4, background: i <= 2 ? "var(--primary)" : "var(--border-subtle)", borderRadius: 2 }} />
            ))}
          </div>
          <div className="label" style={{ marginBottom: 8 }}>Step 2 of 4</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 500, letterSpacing: "-0.025em", margin: "0 0 8px", lineHeight: 1.05 }}>What kind of <em style={{ fontStyle: "italic", color: "var(--primary)" }}>work</em> do you do?</h2>
          <p style={{ color: "var(--fg-muted)", fontSize: 14, margin: "0 0 24px" }}>We&apos;ll tailor templates and themes to match.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 10, marginBottom: 24 }}>
            {["Design system", "Marketing site", "Internal tool", "Mobile app", "Editorial", "Dashboard"].map((opt, i) => (
              <button key={opt} type="button" className="card" style={{ padding: 16, textAlign: "left", cursor: "pointer", background: i === 0 ? "var(--bg-elev)" : "var(--bg)", borderColor: i === 0 ? "var(--primary)" : "var(--border)", borderWidth: i === 0 ? 2 : 1.5 }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 600 }}>{opt}</div>
              </button>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}><Button variant="outline">Back</Button><Button>Continue <ArrowRightIcon size={13} /></Button></div>
        </div>
      </BlockShowcase>

      <BlockShowcase name="03 — Setup checklist" bg="elev">
        <div style={{ padding: "48px 24px", display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 24, maxWidth: 880, marginInline: "auto" }}>
          <Card style={{ padding: 28 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 500, margin: "0 0 4px" }}>Setup checklist</h3>
                <div style={{ fontSize: 12, color: "var(--fg-muted)" }}>3 of 5 complete</div>
              </div>
              <div style={{ position: "relative", width: 56, height: 56 }}>
                <svg width="56" height="56" viewBox="0 0 56 56" style={{ transform: "rotate(-90deg)" }}>
                  <circle cx="28" cy="28" r="24" stroke="var(--border-subtle)" strokeWidth="4" fill="none" />
                  <circle cx="28" cy="28" r="24" stroke="var(--primary)" strokeWidth="4" fill="none" strokeDasharray={`${(3 / 5) * 150.8} 150.8`} strokeLinecap="round" />
                </svg>
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 700 }}>60%</div>
              </div>
            </div>
            {[
              ["Create your account", true],
              ["Choose a theme", true],
              ["Install the package", true],
              ["Add your first component", false],
              ["Invite a teammate", false],
            ].map(([t, done], i, arr) => (
              <div key={t as string} style={{ display: "flex", alignItems: "center", gap: 12, paddingBlock: 12, borderBottom: i < arr.length - 1 ? "1.5px solid var(--border-subtle)" : "none" }}>
                <div style={{ width: 22, height: 22, border: "1.5px solid var(--border)", borderRadius: "var(--r-sm)", display: "inline-flex", alignItems: "center", justifyContent: "center", background: done ? "var(--primary)" : "transparent", color: done ? "var(--primary-fg)" : "transparent", flexShrink: 0 }}>{done ? <CheckIcon size={13} /> : null}</div>
                <span style={{ fontSize: 14, textDecoration: done ? "line-through" : "none", color: done ? "var(--fg-muted)" : "var(--fg)", flex: 1 }}>{t}</span>
                {!done && <Button size="sm" variant="ghost">Start</Button>}
              </div>
            ))}
          </Card>
          <Card style={{ padding: 24, background: "var(--fg)", color: "var(--bg)" }}>
            <SparklesIcon size={20} style={{ marginBottom: 12 }} />
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 500, margin: "0 0 8px", lineHeight: 1.1 }}>Almost there</h3>
            <p style={{ margin: "0 0 16px", fontSize: 13, opacity: 0.75, lineHeight: 1.55 }}>Finish setup to unlock all 30 components and 10 themes.</p>
            <Button size="sm" style={{ background: "var(--primary)", color: "var(--primary-fg)", borderColor: "var(--bg)" }}>Continue setup</Button>
          </Card>
        </div>
      </BlockShowcase>
    </BlockPage>
  );
}
