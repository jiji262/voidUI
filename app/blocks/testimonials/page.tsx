"use client";

import React from "react";
import { BlockPage, BlockShowcase, InitialAvatar } from "@/components/blocks/_kit";
import { Card } from "@/components/voidui";
import { StarIcon } from "lucide-react";

const Q = [
  { quote: "voidUI shipped our new dashboard in a weekend. The token system makes brand updates trivial.", name: "Maya O.", role: "Founding Designer, Lattice" },
  { quote: "Finally a library that doesn't fight my design system. I just override tokens and everything follows.", name: "Tom J.", role: "Engineering Lead, Linear" },
  { quote: "We replaced three internal libraries with voidUI. Our team velocity 3x&apos;d.", name: "Rin S.", role: "PM, Notion" },
  { quote: "The dark-mode contrast work alone is worth the install. Real WCAG-AA out of the box.", name: "Ada L.", role: "Accessibility Engineer" },
  { quote: "It's the first 'neobrutalist' library that doesn't feel like a meme. Restrained, considered.", name: "Jules R.", role: "Creative Director, Studio Atlas" },
];

export default function TestimonialsPage() {
  return (
    <BlockPage eyebrow="Marketing — Testimonials" title="Testimonials" subtitle="Five variants — three-up grid, single editorial pull, masonry wall, video tile, and a logo + quote ribbon.">
      <BlockShowcase name="01 — Three-up cards" bg="elev">
        <div style={{ padding: "64px 32px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14, maxWidth: 1100, marginInline: "auto" }}>
          {Q.slice(0, 3).map((q, i) => (
            <Card key={i} style={{ padding: 24 }}>
              <div style={{ display: "flex", gap: 2, marginBottom: 14 }}>{[0, 0, 0, 0, 0].map((_, j) => <StarIcon key={j} size={12} style={{ color: "var(--primary)" }} fill="var(--primary)" />)}</div>
              <p style={{ margin: "0 0 18px", fontSize: 15, lineHeight: 1.55 }}>&ldquo;{q.quote}&rdquo;</p>
              <div style={{ display: "flex", alignItems: "center", gap: 10, paddingTop: 14, borderTop: "1.5px solid var(--border-subtle)" }}>
                <InitialAvatar name={q.name} />
                <div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 600 }}>{q.name}</div>
                  <div style={{ fontSize: 11, color: "var(--fg-muted)" }}>{q.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </BlockShowcase>

      <BlockShowcase name="02 — Editorial pull-quote">
        <div style={{ padding: "80px 32px", maxWidth: 800, marginInline: "auto", textAlign: "center" }}>
          <div className="label" style={{ marginBottom: 16 }}>What teams are saying</div>
          <blockquote style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
            &ldquo;voidUI shipped our new dashboard in a weekend. The token system makes brand updates <em style={{ fontStyle: "italic", color: "var(--primary)" }}>trivial.</em>&rdquo;
          </blockquote>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 12, marginTop: 32 }}>
            <InitialAvatar name="Maya O." size={44} />
            <div style={{ textAlign: "left" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 14, fontWeight: 600 }}>Maya O.</div>
              <div style={{ fontSize: 12, color: "var(--fg-muted)" }}>Founding Designer, Lattice</div>
            </div>
          </div>
        </div>
      </BlockShowcase>

      <BlockShowcase name="03 — Masonry wall" bg="elev">
        <div style={{ padding: "48px 32px" }}>
          <div style={{ columnCount: 3, columnGap: 14, maxWidth: 1100, marginInline: "auto" }} className="vui-masonry">
            {Q.map((q, i) => (
              <Card key={i} style={{ padding: 18, marginBottom: 14, breakInside: "avoid", display: "inline-block", width: "100%" }}>
                <p style={{ margin: "0 0 12px", fontSize: 13, lineHeight: 1.55 }}>&ldquo;{q.quote}&rdquo;</p>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <InitialAvatar name={q.name} size={28} />
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}><strong>{q.name}</strong> · <span style={{ color: "var(--fg-muted)" }}>{q.role}</span></div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </BlockShowcase>

      <BlockShowcase name="04 — Logo + quote ribbon">
        <div style={{ padding: "48px 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 0, border: "1.5px solid var(--border)", borderRadius: "var(--r)", overflow: "hidden", maxWidth: 1100, marginInline: "auto" }}>
            {Q.slice(0, 3).map((q, i) => (
              <div key={i} style={{ padding: 28, borderRight: i < 2 ? "1.5px solid var(--border-subtle)" : "none" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 500, color: "var(--fg-muted)", marginBottom: 16 }}>{["Lattice", "Linear", "Notion"][i]}</div>
                <p style={{ margin: "0 0 14px", fontSize: 14, lineHeight: 1.55 }}>&ldquo;{q.quote}&rdquo;</p>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-muted)" }}><strong style={{ color: "var(--fg)" }}>{q.name}</strong> — {q.role.split(",")[0]}</div>
              </div>
            ))}
          </div>
        </div>
      </BlockShowcase>

      <BlockShowcase name="05 — Single quote with metric" bg="fg">
        <div style={{ padding: "80px 32px", color: "var(--bg)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center", maxWidth: 1100, marginInline: "auto" }}>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 96, fontWeight: 500, lineHeight: 0.9, letterSpacing: "-0.04em", color: "var(--primary)" }}>3×</div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, opacity: 0.7, textTransform: "uppercase", letterSpacing: "0.08em", marginTop: 12 }}>Faster delivery</div>
          </div>
          <div>
            <p style={{ fontFamily: "var(--font-display)", fontSize: 24, lineHeight: 1.45, margin: "0 0 24px" }}>&ldquo;We replaced three internal libraries with voidUI. Our team velocity 3x&apos;d.&rdquo;</p>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <InitialAvatar name="Rin S." />
              <div><div style={{ fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 600 }}>Rin S.</div><div style={{ fontSize: 11, opacity: 0.65 }}>PM, Notion</div></div>
            </div>
          </div>
        </div>
      </BlockShowcase>
    </BlockPage>
  );
}
