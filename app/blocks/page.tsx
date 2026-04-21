"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/icon";

/**
 * /blocks — 1:1 port of the Claude Design handoff (project/pages/Blocks.jsx).
 * Hero + 5 curated BlockFrames (hero / pricing / stats / testimonials / CTA),
 * each with a chrome strip that shows block name + tag + Copy / Open actions.
 *
 * Individual block pages still live at /blocks/<kind>/ for detailed drills;
 * this landing page is the canonical design-aligned showcase.
 */

function BlockFrame({
  name,
  tag,
  href,
  children,
}: {
  name: string;
  tag?: string;
  href?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="card" style={{ overflow: "hidden", padding: 0 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 16px",
          borderBottom: "1.5px solid var(--border)",
          background: "var(--bg)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            {name}
          </span>
          {tag && <span className="badge ghost">{tag}</span>}
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          <button className="btn ghost sm">
            <Icon name="copy" size={12} /> Copy code
          </button>
          {href ? (
            <Link href={href} style={{ textDecoration: "none" }}>
              <button className="btn ghost sm">
                <Icon name="external" size={12} /> Open
              </button>
            </Link>
          ) : (
            <button className="btn ghost sm">
              <Icon name="external" size={12} /> Open
            </button>
          )}
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default function BlocksPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{ padding: "64px 24px 32px", borderBottom: "1.5px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="label" style={{ marginBottom: 12 }}>
            Blocks · 20+ ready-made
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
            Blocks
          </h1>
          <p
            style={{
              fontSize: 16,
              color: "var(--fg-muted)",
              maxWidth: 600,
              margin: 0,
              lineHeight: 1.65,
            }}
          >
            Full-width compositions — heroes, pricing tables, stats, CTAs. Copy the full block or remix.
          </p>
        </div>
      </section>

      {/* Blocks */}
      <section style={{ padding: "48px 24px" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: 32,
          }}
        >
          {/* Hero block */}
          <BlockFrame name="hero · split" tag="marketing" href="/blocks/hero-sections">
            <div
              className="vui-blocks-hero"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 40,
                alignItems: "center",
                padding: 40,
              }}
            >
              <div>
                <span className="badge primary" style={{ marginBottom: 14 }}>New · Series B</span>
                <h3
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 36,
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                    fontWeight: 500,
                    margin: "14px 0 12px",
                  }}
                >
                  Infra that doesn&apos;t<br />
                  melt on Friday.
                </h3>
                <p
                  style={{
                    color: "var(--fg-muted)",
                    fontSize: 15,
                    marginBottom: 20,
                    lineHeight: 1.6,
                  }}
                >
                  Keep your services running even when everything else goes sideways.
                </p>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <button className="btn">
                    Start trial <Icon name="arrow-right" size={13} />
                  </button>
                  <button className="btn outline">Book a demo</button>
                </div>
              </div>
              <div className="card" style={{ padding: 20, background: "var(--primary)" }}>
                <div className="label" style={{ marginBottom: 10 }}>
                  Uptime · 90d
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 40,
                    fontWeight: 600,
                  }}
                >
                  99.998%
                </div>
                <div style={{ display: "flex", gap: 3, marginTop: 16 }}>
                  {Array.from({ length: 30 }).map((_, i) => (
                    <div
                      key={i}
                      style={{
                        width: 6,
                        height: 28,
                        background: "var(--fg)",
                        opacity: i === 17 ? 0.3 : 1,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </BlockFrame>

          {/* Pricing block */}
          <BlockFrame name="pricing · three-up" tag="marketing" href="/pricing">
            <div style={{ padding: 40 }}>
              <div style={{ textAlign: "center", marginBottom: 32 }}>
                <div className="label" style={{ marginBottom: 8 }}>
                  Pricing
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 32,
                    fontWeight: 500,
                    letterSpacing: "-0.02em",
                    margin: 0,
                  }}
                >
                  Simple, honest plans
                </h3>
              </div>
              <div
                className="vui-blocks-pricing"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: 16,
                }}
              >
                {[
                  { n: "Starter", p: "$0", d: "For hobby projects", f: ["Up to 3 projects", "Community support", "Core components"] },
                  { n: "Pro", p: "$12", d: "For small teams", f: ["Unlimited projects", "Email support", "All components", "Figma kit"], featured: true },
                  { n: "Team", p: "$49", d: "For scaling orgs", f: ["Everything in Pro", "Priority support", "SSO + SCIM", "Custom themes"] },
                ].map((p) => (
                  <div
                    key={p.n}
                    className="card"
                    style={{
                      padding: 24,
                      background: p.featured ? "var(--fg)" : "var(--card)",
                      color: p.featured ? "var(--bg)" : "var(--fg)",
                    }}
                  >
                    {p.featured && (
                      <span className="badge primary" style={{ marginBottom: 10 }}>
                        Most popular
                      </span>
                    )}
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 14,
                        fontWeight: 600,
                        marginBottom: 4,
                        marginTop: p.featured ? 10 : 0,
                      }}
                    >
                      {p.n}
                    </div>
                    <div style={{ fontSize: 13, opacity: 0.6, marginBottom: 14 }}>{p.d}</div>
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 36,
                        fontWeight: 600,
                        marginBottom: 2,
                      }}
                    >
                      {p.p}
                      <span style={{ fontSize: 14, fontWeight: 400, opacity: 0.6 }}>/mo</span>
                    </div>
                    <div
                      style={{
                        borderTop: "1.5px solid",
                        borderColor: p.featured ? "rgba(255,255,255,0.2)" : "var(--border-subtle)",
                        margin: "16px 0",
                        paddingTop: 16,
                      }}
                    >
                      {p.f.map((item) => (
                        <div
                          key={item}
                          style={{
                            fontSize: 13,
                            marginBottom: 8,
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                          }}
                        >
                          <Icon
                            name="check"
                            size={12}
                            style={{ color: p.featured ? "var(--primary)" : "var(--success)" }}
                          />
                          {item}
                        </div>
                      ))}
                    </div>
                    <button
                      className={`btn ${p.featured ? "" : "outline"}`}
                      style={{ width: "100%", justifyContent: "center" }}
                    >
                      Choose {p.n}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </BlockFrame>

          {/* Stats block */}
          <BlockFrame name="stats · grid" tag="marketing" href="/blocks/stats">
            <div
              className="vui-blocks-stats"
              style={{
                padding: 40,
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 0,
              }}
            >
              {[
                { v: "2.4M", l: "Components rendered" },
                { v: "142ms", l: "p95 first paint" },
                { v: "14.2kb", l: "Core bundle (gz)" },
                { v: "100%", l: "Tree-shakeable" },
              ].map((s, i) => (
                <div
                  key={s.l}
                  style={{
                    padding: 16,
                    borderRight: i < 3 ? "1.5px solid var(--border-subtle)" : "none",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 40,
                      fontWeight: 500,
                      letterSpacing: "-0.03em",
                      lineHeight: 1,
                    }}
                  >
                    {s.v}
                  </div>
                  <div className="label" style={{ marginTop: 8 }}>
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </BlockFrame>

          {/* Testimonials */}
          <BlockFrame name="testimonials · cards" tag="marketing" href="/blocks/testimonials">
            <div
              className="vui-blocks-testimonials"
              style={{
                padding: 40,
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 16,
              }}
            >
              {[
                { n: "Elena K.", r: "Design lead, Plaxo", q: "Finally a library that has a point of view but doesn't scream it.", c: "var(--accent-2)" },
                { n: "Marcus B.", r: "Eng manager, Ortho", q: "The shadow system is deliberate. Everything else I tried was copy-paste chaos.", c: "var(--accent-1)" },
                { n: "Zara B.", r: "Founder, Tallgrass", q: "Shipped our landing in 3 hours using blocks. Our brand feels distinct now.", c: "var(--accent-3)" },
              ].map((t) => (
                <div key={t.n} className="card" style={{ padding: 20 }}>
                  <p style={{ margin: "0 0 16px", fontSize: 15, lineHeight: 1.5 }}>
                    &ldquo;{t.q}&rdquo;
                  </p>
                  <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        border: "1.5px solid var(--border)",
                        borderRadius: "50%",
                        background: t.c,
                        color: "var(--primary-fg)",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "var(--font-mono)",
                        fontWeight: 600,
                        fontSize: 14,
                        flexShrink: 0,
                      }}
                    >
                      {t.n[0]}
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: 13,
                          fontWeight: 600,
                        }}
                      >
                        {t.n}
                      </div>
                      <div style={{ fontSize: 12, color: "var(--fg-muted)" }}>{t.r}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </BlockFrame>

          {/* CTA */}
          <BlockFrame name="cta · banner" tag="marketing" href="/blocks/call-to-action">
            <div
              className="vui-blocks-cta"
              style={{
                padding: 48,
                background: "var(--primary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 32,
                flexWrap: "wrap",
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 32,
                    fontWeight: 500,
                    letterSpacing: "-0.02em",
                    margin: "0 0 8px",
                  }}
                >
                  Ready to ship?
                </h3>
                <p style={{ margin: 0, fontSize: 15 }}>
                  Grab the starter template and deploy in minutes.
                </p>
              </div>
              <div style={{ display: "flex", gap: 10, flexShrink: 0, flexWrap: "wrap" }}>
                <button className="btn secondary">Start free</button>
                <button className="btn outline">Read docs</button>
              </div>
            </div>
          </BlockFrame>
        </div>
      </section>
    </main>
  );
}
