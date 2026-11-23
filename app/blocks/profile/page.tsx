"use client";

import React from "react";
import { BlockPage, BlockShowcase, Placeholder, InitialAvatar } from "@/components/blocks/_kit";
import { Card, Badge, Button, Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/voidui";
import { MapPinIcon, LinkIcon, MailIcon, GitBranchIcon, StarIcon } from "lucide-react";

export default function ProfilePage() {
  return (
    <BlockPage eyebrow="Application — Profile" title="Profile sections" subtitle="Three variants — cover header with stats, sidebar profile card, and editorial bio layout.">
      <BlockShowcase name="01 — Cover + tabs" bg="elev">
        <div style={{ padding: 24, maxWidth: 1100, marginInline: "auto" }}>
          <Card style={{ padding: 0, overflow: "hidden" }}>
            <Placeholder height={180} label="cover" />
            <div style={{ padding: 24, position: "relative" }}>
              <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginTop: -64, marginBottom: 18 }}>
                <InitialAvatar name="Ada Lovelace" size={108} />
                <div style={{ display: "flex", gap: 8 }}><Button variant="outline">Message</Button><Button>Follow</Button></div>
              </div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 500, letterSpacing: "-0.02em", margin: "0 0 4px" }}>Ada Lovelace</h2>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--fg-muted)", marginBottom: 12 }}>@ada · Design Systems Lead at void</div>
              <p style={{ fontSize: 14, color: "var(--fg-muted)", maxWidth: 560, margin: "0 0 14px", lineHeight: 1.55 }}>Building token-driven design systems for the past decade. Currently leading systems at void. Previously Stripe, Linear, Notion.</p>
              <div style={{ display: "flex", gap: 16, fontSize: 12, color: "var(--fg-muted)", marginBottom: 18 }}>
                <span style={{ display: "flex", alignItems: "center", gap: 6 }}><MapPinIcon size={13} />Berlin, DE</span>
                <span style={{ display: "flex", alignItems: "center", gap: 6 }}><LinkIcon size={13} />ada.studio</span>
                <span style={{ display: "flex", alignItems: "center", gap: 6 }}><MailIcon size={13} />ada@void.dev</span>
              </div>
              <div style={{ display: "flex", gap: 24, paddingBlock: 14, borderTop: "1.5px solid var(--border-subtle)", borderBottom: "1.5px solid var(--border-subtle)" }}>
                {[["Followers", "12.4k"], ["Following", "284"], ["Projects", "47"], ["Stars", "8.9k"]].map(([k, v]) => (
                  <div key={k}><div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 500, letterSpacing: "-0.02em" }}>{v}</div><div style={{ fontSize: 11, color: "var(--fg-muted)", fontFamily: "var(--font-mono)" }}>{k}</div></div>
                ))}
              </div>
              <Tabs defaultValue="overview" style={{ marginTop: 18 }}>
                <TabsList><TabsTrigger value="overview">Overview</TabsTrigger><TabsTrigger value="projects">Projects</TabsTrigger><TabsTrigger value="activity">Activity</TabsTrigger></TabsList>
                <TabsContent value="overview"><div style={{ fontSize: 13, color: "var(--fg-muted)", lineHeight: 1.6 }}>Public bio, pinned writing, recent talks. Tab content area is fully composable.</div></TabsContent>
              </Tabs>
            </div>
          </Card>
        </div>
      </BlockShowcase>

      <BlockShowcase name="02 — Sidebar profile card">
        <div style={{ padding: 32, maxWidth: 1000, marginInline: "auto", display: "grid", gridTemplateColumns: "300px 1fr", gap: 18 }}>
          <Card style={{ padding: 22 }}>
            <InitialAvatar name="Tom Jefferson" size={88} />
            <div style={{ marginTop: 14 }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 500, letterSpacing: "-0.015em" }}>Tom Jefferson</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--fg-muted)", marginBottom: 10 }}>@tjeff</div>
              <p style={{ fontSize: 13, color: "var(--fg-muted)", lineHeight: 1.55, margin: "0 0 14px" }}>Frontend engineer, working on developer tools. Lover of monospace.</p>
              <Button style={{ width: "100%", marginBottom: 8 }}>Follow</Button>
              <Button variant="outline" style={{ width: "100%" }}>Message</Button>
              <div style={{ marginTop: 18, display: "grid", gap: 8, fontSize: 12 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--fg-muted)" }}><MapPinIcon size={12} />Lisbon</div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--fg-muted)" }}><LinkIcon size={12} />tomj.dev</div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--fg-muted)" }}><GitBranchIcon size={12} />tjeff/dotfiles</div>
              </div>
            </div>
          </Card>
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 12 }}><Badge>Frontend</Badge><Badge variant="outline">TypeScript</Badge><Badge variant="outline">Design Systems</Badge></div>
            {["Migrated Linear's design tokens to OKLCH", "Open-sourced typegrid: a CSS Grid debugger", "Talk: Server components and the death of CSS-in-JS"].map((p, i) => (
              <Card key={i} style={{ padding: 18, marginBottom: 10 }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-muted)", marginBottom: 4 }}>P/{String(i + 1).padStart(2, "0")}</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 500, letterSpacing: "-0.01em", marginBottom: 6 }}>{p}</div>
                <div style={{ display: "flex", gap: 12, fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--fg-muted)" }}><span><StarIcon size={11} style={{ verticalAlign: "middle" }} /> {[842, 1240, 624][i]}</span><span>{["Mar 2026", "Feb 2026", "Jan 2026"][i]}</span></div>
              </Card>
            ))}
          </div>
        </div>
      </BlockShowcase>

      <BlockShowcase name="03 — Editorial bio" bg="elev">
        <div style={{ padding: "64px 32px", maxWidth: 760, marginInline: "auto" }}>
          <div style={{ marginBottom: 28 }}>
            <InitialAvatar name="Maya Otieno" size={64} />
          </div>
          <div className="label" style={{ marginBottom: 12 }}>Profile · Maya Otieno</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 56, fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 0.95, margin: "0 0 24px" }}>Brand designer, type<br /><em style={{ fontStyle: "italic", color: "var(--primary)" }}>obsessive,</em> reluctant manager.</h2>
          <p style={{ fontSize: 17, color: "var(--fg-muted)", lineHeight: 1.55, margin: "0 0 16px", textWrap: "pretty" as any }}>Currently leading brand at void. Previously at IDEO, Pentagram, and a tiny studio in Nairobi that nobody&apos;s heard of.</p>
          <p style={{ fontSize: 17, color: "var(--fg-muted)", lineHeight: 1.55, margin: "0 0 24px", textWrap: "pretty" as any }}>I write occasionally about typefaces, design education, and the strange politics of brand systems. I do not write about AI. I am very tired of AI.</p>
          <div style={{ display: "flex", gap: 8 }}><Button>Get in touch</Button><Button variant="outline">Read writing</Button></div>
        </div>
      </BlockShowcase>
    </BlockPage>
  );
}
