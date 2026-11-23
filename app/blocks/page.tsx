"use client";

import React from "react";
import Link from "next/link";
import { Card } from "@/components/voidui";
import { ArrowRightIcon } from "lucide-react";

const BLOCKS: { slug: string; name: string; group: string; count: number }[] = [
  { slug: "hero-sections", name: "Hero Sections", group: "Marketing", count: 6 },
  { slug: "feature-blocks", name: "Feature Blocks", group: "Marketing", count: 6 },
  { slug: "call-to-action", name: "Call to Action", group: "Marketing", count: 5 },
  { slug: "pricing-tables", name: "Pricing Tables", group: "Marketing", count: 4 },
  { slug: "testimonials", name: "Testimonials", group: "Marketing", count: 5 },
  { slug: "stats", name: "Stats", group: "Marketing", count: 5 },
  { slug: "faq", name: "FAQ", group: "Marketing", count: 4 },
  { slug: "bento-grids", name: "Bento Grids", group: "Marketing", count: 4 },
  { slug: "cards", name: "Cards", group: "Application", count: 6 },
  { slug: "forms", name: "Forms", group: "Application", count: 5 },
  { slug: "navbar", name: "Navbars", group: "Application", count: 4 },
  { slug: "sidebar", name: "Sidebars", group: "Application", count: 3 },
  { slug: "authentication", name: "Authentication", group: "Application", count: 4 },
  { slug: "onboarding", name: "Onboarding", group: "Application", count: 3 },
  { slug: "profile", name: "Profile", group: "Application", count: 3 },
  { slug: "blogs", name: "Blogs", group: "Content", count: 4 },
  { slug: "career-sections", name: "Career Sections", group: "Content", count: 3 },
  { slug: "affiliate", name: "Affiliate", group: "Content", count: 3 },
  { slug: "ai", name: "AI", group: "Content", count: 4 },
];

const GROUPS = ["Marketing", "Application", "Content"];

export default function BlocksIndex() {
  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <section style={{ padding: "64px 24px 32px", borderBottom: "1.5px solid var(--border)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="label" style={{ marginBottom: 12 }}>Blocks</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 500, letterSpacing: "-0.03em", margin: "0 0 12px", lineHeight: 1.0 }}>
            Production-ready <em style={{ fontStyle: "italic", color: "var(--primary)" }}>page sections</em>
          </h1>
          <p style={{ fontSize: 16, color: "var(--fg-muted)", maxWidth: 640, margin: 0, lineHeight: 1.65 }}>
            19 categories. 80+ variants. Drop-in sections built from the same token system, ready for any of the 10 themes.
          </p>
        </div>
      </section>
      <section style={{ padding: "48px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: 56 }}>
          {GROUPS.map((g) => (
            <div key={g}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 20, paddingBottom: 12, borderBottom: "1.5px solid var(--border)" }}>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 500, margin: 0, letterSpacing: "-0.02em" }}>{g}</h2>
                <span className="badge ghost">{BLOCKS.filter((b) => b.group === g).length}</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
                {BLOCKS.filter((b) => b.group === g).map((b) => (
                  <Link key={b.slug} href={`/blocks/${b.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                    <Card interactive style={{ padding: 20, height: "100%", display: "flex", flexDirection: "column", gap: 8 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
                        <h3 style={{ fontFamily: "var(--font-mono)", fontSize: 14, fontWeight: 600, margin: 0 }}>{b.name}</h3>
                        <ArrowRightIcon size={14} style={{ color: "var(--fg-muted)" }} />
                      </div>
                      <p style={{ margin: 0, fontSize: 12, color: "var(--fg-muted)" }}>{b.count} variants</p>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
