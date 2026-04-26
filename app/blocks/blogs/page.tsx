"use client";

import React from "react";
import { BlockPage, BlockShowcase, Placeholder, InitialAvatar } from "@/components/blocks/_kit";
import { Card, Badge, Button } from "@/components/voidui";
import { ArrowRightIcon, ClockIcon } from "lucide-react";

const POSTS = [
  { tag: "Design", title: "Token contracts for design teams", excerpt: "Why CSS variables make better design systems than utility classes.", author: "Ada L.", time: "5 min" },
  { tag: "Engineering", title: "Server components + design systems", excerpt: "Where to draw the client boundary in component libraries.", author: "Tom J.", time: "8 min" },
  { tag: "Process", title: "Notes on shipping voidUI v3", excerpt: "What changed, what didn't, and what we learned.", author: "Maya O.", time: "6 min" },
  { tag: "Design", title: "Why we don't ship gradients", excerpt: "An opinion on neobrutalism, restraint, and trends.", author: "Jules R.", time: "4 min" },
];

export default function BlogsPage() {
  return (
    <BlockPage eyebrow="Content — Blogs" title="Blog layouts" subtitle="Four variants — featured + grid, magazine column, list view, and a stacked editorial layout.">
      <BlockShowcase name="01 — Featured + grid" bg="elev">
        <div style={{ padding: "48px 32px", display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 16, maxWidth: 1100, marginInline: "auto" }}>
          <Card interactive style={{ padding: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}>
            <Placeholder height={280} label="featured cover" />
            <div style={{ padding: 24 }}>
              <Badge style={{ marginBottom: 10 }}>Featured</Badge>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 500, letterSpacing: "-0.02em", margin: "0 0 8px", lineHeight: 1.1 }}>{POSTS[0].title}</h3>
              <p style={{ margin: "0 0 14px", fontSize: 14, color: "var(--fg-muted)", lineHeight: 1.6 }}>{POSTS[0].excerpt}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 12, color: "var(--fg-muted)" }}>
                <InitialAvatar name={POSTS[0].author} size={28} /><span>{POSTS[0].author}</span><span>·</span><ClockIcon size={11} /><span>{POSTS[0].time}</span>
              </div>
            </div>
          </Card>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {POSTS.slice(1).map((p, i) => (
              <Card key={i} interactive style={{ padding: 18 }}>
                <Badge variant="outline" style={{ marginBottom: 8, fontSize: 10 }}>{p.tag}</Badge>
                <h4 style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 500, margin: "0 0 6px", letterSpacing: "-0.015em", lineHeight: 1.2 }}>{p.title}</h4>
                <p style={{ margin: "0 0 8px", fontSize: 12, color: "var(--fg-muted)", lineHeight: 1.5 }}>{p.excerpt}</p>
                <div style={{ fontSize: 11, color: "var(--fg-muted)", fontFamily: "var(--font-mono)" }}>{p.author} · {p.time}</div>
              </Card>
            ))}
          </div>
        </div>
      </BlockShowcase>

      <BlockShowcase name="02 — Magazine column">
        <div style={{ padding: "48px 32px", maxWidth: 1100, marginInline: "auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
          {POSTS.map((p, i) => (
            <article key={i}>
              <Placeholder height={180} label={`cover ${i + 1}`} />
              <Badge variant="outline" style={{ marginTop: 14, fontSize: 10 }}>{p.tag}</Badge>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 500, margin: "10px 0 6px", letterSpacing: "-0.015em", lineHeight: 1.15 }}>{p.title}</h3>
              <p style={{ margin: "0 0 10px", fontSize: 13, color: "var(--fg-muted)", lineHeight: 1.55 }}>{p.excerpt}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--fg-muted)" }}>{p.author} · {p.time}</div>
            </article>
          ))}
        </div>
      </BlockShowcase>

      <BlockShowcase name="03 — List view" bg="elev">
        <div style={{ padding: "48px 32px", maxWidth: 800, marginInline: "auto" }}>
          {POSTS.map((p, i, arr) => (
            <a key={i} href="#" style={{ display: "grid", gridTemplateColumns: "120px 1fr auto", gap: 20, padding: 20, borderBottom: i < arr.length - 1 ? "1.5px solid var(--border-subtle)" : "none", textDecoration: "none", color: "inherit", alignItems: "center" }}>
              <Placeholder height={80} ratio="3/2" label="" />
              <div>
                <div style={{ display: "flex", gap: 8, fontSize: 11, color: "var(--fg-muted)", fontFamily: "var(--font-mono)", marginBottom: 6 }}>{p.tag} · {p.time}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 500, margin: "0 0 4px", letterSpacing: "-0.015em" }}>{p.title}</h3>
                <p style={{ margin: 0, fontSize: 13, color: "var(--fg-muted)" }}>{p.excerpt}</p>
              </div>
              <ArrowRightIcon size={14} style={{ color: "var(--fg-muted)" }} />
            </a>
          ))}
        </div>
      </BlockShowcase>

      <BlockShowcase name="04 — Editorial stacked">
        <div style={{ padding: "48px 32px", maxWidth: 720, marginInline: "auto" }}>
          {POSTS.map((p, i, arr) => (
            <article key={i} style={{ paddingBlock: 28, borderBottom: i < arr.length - 1 ? "1.5px solid var(--border-subtle)" : "none" }}>
              <div className="label" style={{ marginBottom: 8 }}>{String(i + 1).padStart(2, "0")} — {p.tag}</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 500, letterSpacing: "-0.025em", margin: "0 0 8px", lineHeight: 1.1 }}>{p.title}</h3>
              <p style={{ margin: "0 0 12px", fontSize: 15, color: "var(--fg-muted)", lineHeight: 1.6 }}>{p.excerpt}</p>
              <div style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--fg-muted)" }}>By {p.author} · {p.time} read</div>
            </article>
          ))}
        </div>
      </BlockShowcase>
    </BlockPage>
  );
}
