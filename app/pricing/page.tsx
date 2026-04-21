"use client";

import React, { useState } from "react";
import { Icon } from "@/components/ui/icon";

/**
 * /pricing — 1:1 port of the Claude Design handoff (project/pages/Pricing.jsx).
 * Hero with monthly/annual toggle · 3-up plan cards · comparison table.
 */

type Plan = {
  n: string;
  p: number;
  pa: number;
  d: string;
  f: string[];
  featured?: boolean;
};

const PLANS: Plan[] = [
  {
    n: "Starter",
    p: 0,
    pa: 0,
    d: "For hobby projects and learning",
    f: ["Up to 3 projects", "Community support", "Core components (28)", "MIT license", "Monthly patches"],
  },
  {
    n: "Pro",
    p: 12,
    pa: 10,
    d: "For indie makers and small teams",
    f: [
      "Unlimited projects",
      "Email support",
      "All 42 components",
      "Figma kit + tokens",
      "Priority patches",
      "20+ blocks",
    ],
    featured: true,
  },
  {
    n: "Team",
    p: 49,
    pa: 40,
    d: "For scaling organizations",
    f: [
      "Everything in Pro",
      "Priority + Slack support",
      "SSO + SCIM",
      "Custom themes",
      "Private Discord",
      "Design review hours",
    ],
  },
];

const COMPARE_ROWS: string[][] = [
  ["Component library", "28", "42", "42"],
  ["Blocks", "—", "20+", "20+"],
  ["Figma kit", "—", "✓", "✓"],
  ["Dark mode", "✓", "✓", "✓"],
  ["Custom themes", "—", "3", "Unlimited"],
  ["Support", "Community", "Email", "Priority + Slack"],
  ["SSO / SCIM", "—", "—", "✓"],
];

function Switch({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      style={{
        width: 40,
        height: 22,
        padding: 2,
        border: "1.5px solid var(--border)",
        borderRadius: "var(--r-lg)",
        background: checked ? "var(--primary)" : "var(--bg-elev)",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        flexShrink: 0,
        transition: "background 160ms",
      }}
    >
      <span
        style={{
          width: 15,
          height: 15,
          background: checked ? "var(--primary-fg)" : "var(--fg)",
          borderRadius: "50%",
          transform: checked ? "translateX(18px)" : "translateX(0)",
          transition: "transform 180ms cubic-bezier(.4,0,.2,1)",
        }}
      />
    </button>
  );
}

export default function PricingPage() {
  const [annual, setAnnual] = useState(true);

  return (
    <main>
      {/* Hero */}
      <section style={{ padding: "64px 24px 32px", borderBottom: "1.5px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <div className="label" style={{ marginBottom: 12 }}>
            Pricing · MIT core, paid extras
          </div>
          <h1
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 52,
              fontWeight: 500,
              letterSpacing: "-0.03em",
              margin: "0 0 12px",
              lineHeight: 1,
            }}
          >
            Simple, honest plans
          </h1>
          <p
            style={{
              fontSize: 16,
              color: "var(--fg-muted)",
              maxWidth: 520,
              margin: "0 auto 24px",
              lineHeight: 1.65,
            }}
          >
            The component library is and will always be MIT. Paid tiers support blocks, Figma kits, and support hours.
          </p>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              padding: "6px 14px",
              border: "1.5px solid var(--border)",
              borderRadius: 4,
              background: "var(--bg-elev)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 13,
                color: annual ? "var(--fg-muted)" : "var(--fg)",
                fontWeight: annual ? 400 : 600,
              }}
            >
              Monthly
            </span>
            <Switch checked={annual} onChange={setAnnual} />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 13,
                color: annual ? "var(--fg)" : "var(--fg-muted)",
                fontWeight: annual ? 600 : 400,
              }}
            >
              Annual
            </span>
            <span className="badge primary" style={{ fontSize: 10 }}>Save 17%</span>
          </div>
        </div>
      </section>

      {/* Plan cards */}
      <section style={{ padding: "48px 24px" }}>
        <div
          className="vui-pricing-grid"
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
          }}
        >
          {PLANS.map((p) => {
            const price = annual ? p.pa : p.p;
            return (
              <div
                key={p.n}
                className="card"
                style={{
                  padding: 28,
                  background: p.featured ? "var(--fg)" : "var(--card)",
                  color: p.featured ? "var(--bg)" : "var(--fg)",
                  position: "relative",
                }}
              >
                {p.featured && (
                  <div style={{ position: "absolute", top: -12, left: 28 }}>
                    <span className="badge primary">Most popular</span>
                  </div>
                )}
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 15,
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {p.n}
                </div>
                <div style={{ fontSize: 13, opacity: 0.65, marginBottom: 20, marginTop: 4 }}>
                  {p.d}
                </div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 4 }}>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 48,
                      fontWeight: 600,
                      letterSpacing: "-0.03em",
                      lineHeight: 1,
                    }}
                  >
                    ${price}
                  </span>
                  <span style={{ fontSize: 14, opacity: 0.6 }}>/mo</span>
                </div>
                <div
                  style={{
                    fontSize: 12,
                    opacity: 0.55,
                    marginBottom: 20,
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {p.p === 0
                    ? "Free forever"
                    : annual
                      ? `$${p.pa * 12} billed annually`
                      : "Billed monthly"}
                </div>
                <button
                  className={`btn ${p.featured ? "" : "outline"}`}
                  style={{ width: "100%", justifyContent: "center", marginBottom: 24 }}
                >
                  {p.p === 0 ? "Start free" : `Choose ${p.n}`}
                </button>
                <div
                  style={{
                    borderTop: "1.5px solid",
                    borderColor: p.featured ? "rgba(255,255,255,0.15)" : "var(--border-subtle)",
                    paddingTop: 18,
                  }}
                >
                  <div className="label" style={{ marginBottom: 10, opacity: p.featured ? 0.6 : 1 }}>
                    Included
                  </div>
                  {p.f.map((item) => (
                    <div
                      key={item}
                      style={{
                        fontSize: 14,
                        marginBottom: 10,
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                      }}
                    >
                      <div
                        style={{
                          width: 18,
                          height: 18,
                          borderRadius: 2,
                          border: "1.5px solid",
                          borderColor: p.featured ? "rgba(255,255,255,0.3)" : "var(--border)",
                          background: p.featured ? "transparent" : "var(--primary)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <Icon
                          name="check"
                          size={11}
                          style={{
                            strokeWidth: 3,
                            color: p.featured ? "var(--primary)" : "var(--fg)",
                          }}
                        />
                      </div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison */}
        <div style={{ maxWidth: 1100, margin: "64px auto 0" }}>
          <h3
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 24,
              fontWeight: 500,
              letterSpacing: "-0.02em",
              margin: "0 0 24px",
            }}
          >
            Compare features
          </h3>
          <div className="card" style={{ overflow: "hidden", padding: 0 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ background: "var(--bg)" }}>
                  <th className="label" style={{ textAlign: "left", padding: "14px 20px" }}>
                    Feature
                  </th>
                  <th className="label" style={{ padding: "14px 20px" }}>Starter</th>
                  <th className="label" style={{ padding: "14px 20px" }}>Pro</th>
                  <th className="label" style={{ padding: "14px 20px" }}>Team</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map((row, i) => (
                  <tr key={i} style={{ borderTop: "1.5px solid var(--border-subtle)" }}>
                    {row.map((c, j) => (
                      <td
                        key={j}
                        style={{
                          padding: "14px 20px",
                          textAlign: j === 0 ? "left" : "center",
                          fontFamily: j === 0 ? "var(--font-sans)" : "var(--font-mono)",
                          fontWeight: j === 0 ? 500 : 400,
                          color: c === "—" ? "var(--fg-subtle)" : "var(--fg)",
                        }}
                      >
                        {c}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
