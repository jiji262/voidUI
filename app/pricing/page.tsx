"use client";

import React from "react";
import Link from "next/link";
import { Button, Card } from "@/components/voidui";
import { CheckIcon, ArrowRightIcon } from "lucide-react";

const TIERS = [
  { name: "Starter", price: "Free", cadence: "forever", highlight: false, features: ["10 components", "Light + dark mode", "MIT license", "Community Discord"], cta: "Start building", href: "/components" },
  { name: "Pro", price: "$0", cadence: "(it's still free)", highlight: true, features: ["All 30 components", "All 10 themes", "All 19 block sets", "Figma source", "Priority issues"], cta: "Get Pro", href: "/themes" },
  { name: "Team", price: "$0", cadence: "(seriously, free)", highlight: false, features: ["Everything in Pro", "Unlimited seats", "Token playground", "Slack support", "Custom themes"], cta: "Talk to us", href: "#" },
];

export default function PricingPage() {
  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <section style={{ padding: "64px 24px 32px", borderBottom: "1.5px solid var(--border)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <div className="label" style={{ marginBottom: 12 }}>Pricing</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 5.5vw, 64px)", fontWeight: 500, letterSpacing: "-0.03em", margin: "0 0 16px", lineHeight: 1.0 }}>
            Free, <em style={{ fontStyle: "italic", color: "var(--primary)" }}>forever</em>
          </h1>
          <p style={{ fontSize: 17, color: "var(--fg-muted)", margin: 0, lineHeight: 1.55 }}>
            voidUI is MIT licensed. The tiers below are aspirational pricing for a future hosted offering — today, all of it ships open source.
          </p>
        </div>
      </section>

      <section style={{ padding: "48px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, alignItems: "stretch" }}>
          {TIERS.map((t) => (
            <div key={t.name} className="card" style={{ padding: 28, position: "relative", display: "flex", flexDirection: "column", gap: 16, ...(t.highlight ? { background: "var(--fg)", color: "var(--bg)", borderColor: "var(--fg)" } : {}) }}>
              {t.highlight && (
                <span style={{ position: "absolute", top: -10, left: 24, padding: "3px 10px", fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 600, background: "var(--primary)", color: "var(--primary-fg)", border: "1.5px solid var(--border)", borderRadius: "var(--r-pill)", boxShadow: "var(--sh-xs)" }}>Recommended</span>
              )}
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", opacity: 0.7, marginBottom: 8 }}>{t.name}</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: 56, fontWeight: 500, lineHeight: 0.95, letterSpacing: "-0.03em" }}>{t.price}</span>
                  <span style={{ fontSize: 13, opacity: 0.65 }}>{t.cadence}</span>
                </div>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
                {t.features.map((f) => (
                  <li key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14 }}>
                    <CheckIcon size={14} style={{ flexShrink: 0, color: t.highlight ? "var(--primary)" : "var(--primary)" }} />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href={t.href} style={{ textDecoration: "none" }}>
                <Button fullWidth variant={t.highlight ? "default" : "outline"} style={t.highlight ? { background: "var(--primary)", color: "var(--primary-fg)", borderColor: "var(--bg)" } : {}}>
                  {t.cta} <ArrowRightIcon size={13} />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "48px 24px 96px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 500, letterSpacing: "-0.02em", margin: "0 0 24px", textAlign: "center" }}>Common questions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              ["Is voidUI really free?", "Yes. All 30 components, 10 themes, and 19 block sets are MIT licensed and free for any use."],
              ["Will pricing ever apply?", "If we ship a hosted token playground or Figma sync service, those would be paid. The library itself stays free."],
              ["Can I use this commercially?", "Yes — MIT permits commercial use, modification, and distribution with attribution."],
              ["Do you offer support?", "Issues and PRs on GitHub. Sponsorship opens a Discord support channel."],
            ].map(([q, a]) => (
              <Card key={q as string} style={{ padding: 20 }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 14, fontWeight: 600, marginBottom: 6 }}>{q}</div>
                <p style={{ margin: 0, fontSize: 14, color: "var(--fg-muted)", lineHeight: 1.6 }}>{a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
