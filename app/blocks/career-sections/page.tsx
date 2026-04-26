"use client";

import React from "react";
import { BlockPage, BlockShowcase, Placeholder } from "@/components/blocks/_kit";
import { Card, Badge, Button } from "@/components/voidui";
import { ArrowRightIcon, MapPinIcon, BriefcaseIcon } from "lucide-react";

const ROLES = [
  { team: "Engineering", title: "Senior Frontend Engineer", loc: "Remote · EU", type: "Full-time" },
  { team: "Engineering", title: "Design Systems Lead", loc: "Berlin · Hybrid", type: "Full-time" },
  { team: "Design", title: "Product Designer, Tokens", loc: "Remote · Global", type: "Full-time" },
  { team: "Design", title: "Brand Designer", loc: "Berlin · On-site", type: "Contract" },
  { team: "Operations", title: "Developer Relations", loc: "Remote · US", type: "Full-time" },
];

export default function CareersPage() {
  return (
    <BlockPage eyebrow="Marketing — Careers" title="Career sections" subtitle="Three variants — values manifesto, role list grouped by team, and a culture grid.">
      <BlockShowcase name="01 — Values + open roles">
        <div style={{ padding: "64px 32px", maxWidth: 1100, marginInline: "auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="label" style={{ marginBottom: 12 }}>Careers · 2026</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: 56, fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 0.95, margin: "0 0 16px", maxWidth: 720, marginInline: "auto" }}>Build the system <em style={{ fontStyle: "italic", color: "var(--primary)" }}>that builds the web.</em></h2>
            <p style={{ color: "var(--fg-muted)", maxWidth: 540, margin: "0 auto" }}>Small team, opinionated tooling, real product impact. Hiring across engineering, design, and DX.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14, marginBottom: 48 }}>
            {[["Restraint", "Ship less, mean more."], ["Tokens > styles", "Decisions live in variables."], ["Owners, not roles", "Designers ship code; engineers shape product."], ["Async-first", "Calendars are for emergencies."]].map(([t, d]) => (
              <Card key={t} style={{ padding: 20 }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-muted)", marginBottom: 10 }}>—</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 500, margin: "0 0 6px", letterSpacing: "-0.015em" }}>{t}</h3>
                <p style={{ margin: 0, fontSize: 13, color: "var(--fg-muted)", lineHeight: 1.55 }}>{d}</p>
              </Card>
            ))}
          </div>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 500, margin: "0 0 16px", letterSpacing: "-0.02em" }}>Open positions</h3>
          <div style={{ border: "1.5px solid var(--border)", borderRadius: "var(--r)", overflow: "hidden", background: "var(--bg)" }}>
            {ROLES.map((r, i, arr) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "120px 1fr auto auto auto", gap: 16, padding: "16px 20px", alignItems: "center", borderBottom: i < arr.length - 1 ? "1.5px solid var(--border-subtle)" : "none" }}>
                <Badge variant="outline" style={{ fontSize: 10 }}>{r.team}</Badge>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 14, fontWeight: 600 }}>{r.title}</div>
                <div style={{ fontSize: 12, color: "var(--fg-muted)", display: "flex", alignItems: "center", gap: 6 }}><MapPinIcon size={12} />{r.loc}</div>
                <Badge variant="ghost" style={{ fontSize: 10 }}>{r.type}</Badge>
                <Button variant="ghost" size="sm">Apply <ArrowRightIcon size={12} /></Button>
              </div>
            ))}
          </div>
        </div>
      </BlockShowcase>

      <BlockShowcase name="02 — Grouped by team" bg="elev">
        <div style={{ padding: "64px 32px", maxWidth: 800, marginInline: "auto" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 40, fontWeight: 500, letterSpacing: "-0.025em", margin: "0 0 32px" }}>Open roles</h2>
          {["Engineering", "Design", "Operations"].map((team) => (
            <div key={team} style={{ marginBottom: 32 }}>
              <div className="label" style={{ marginBottom: 14 }}>{team} · {ROLES.filter((r) => r.team === team).length} open</div>
              {ROLES.filter((r) => r.team === team).map((r, i) => (
                <a key={i} href="#" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 0", borderBottom: "1.5px solid var(--border-subtle)", textDecoration: "none", color: "inherit" }}>
                  <div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 500, letterSpacing: "-0.015em", marginBottom: 4 }}>{r.title}</div>
                    <div style={{ fontSize: 12, color: "var(--fg-muted)", fontFamily: "var(--font-mono)" }}>{r.loc} · {r.type}</div>
                  </div>
                  <ArrowRightIcon size={14} style={{ color: "var(--fg-muted)" }} />
                </a>
              ))}
            </div>
          ))}
        </div>
      </BlockShowcase>

      <BlockShowcase name="03 — Culture grid">
        <div style={{ padding: "48px 32px", maxWidth: 1100, marginInline: "auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridAutoRows: 180, gap: 14 }}>
            <Placeholder label="office" />
            <Card style={{ padding: 24, gridColumn: "span 2" }}>
              <BriefcaseIcon size={24} style={{ color: "var(--primary)", marginBottom: 14 }} />
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 500, margin: "0 0 6px", letterSpacing: "-0.02em" }}>What we offer</h3>
              <p style={{ margin: 0, fontSize: 13, color: "var(--fg-muted)", lineHeight: 1.6 }}>Competitive equity, 6 weeks paid leave, annual hardware refresh, conference budget.</p>
            </Card>
            <Placeholder label="team retreat" />
            <Card style={{ padding: 24, gridColumn: "span 2" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 500, margin: "0 0 6px", letterSpacing: "-0.02em" }}>Where we work</h3>
              <p style={{ margin: 0, fontSize: 13, color: "var(--fg-muted)", lineHeight: 1.6 }}>HQ in Berlin. Distributed across 12 timezones. We meet in-person twice a year.</p>
            </Card>
            <Placeholder label="workspace" />
            <Placeholder label="off-site" />
          </div>
        </div>
      </BlockShowcase>
    </BlockPage>
  );
}
