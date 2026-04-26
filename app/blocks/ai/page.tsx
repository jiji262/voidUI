"use client";

import React, { useState } from "react";
import { BlockPage, BlockShowcase, InitialAvatar } from "@/components/blocks/_kit";
import { Card, Badge, Button, Input } from "@/components/voidui";
import { SparklesIcon, SendIcon, CommandIcon, ArrowUpIcon, FileTextIcon, ImageIcon, CodeIcon } from "lucide-react";

export default function AIPage() {
  const [msg, setMsg] = useState("");
  return (
    <BlockPage eyebrow="Application — AI" title="AI assistant blocks" subtitle="Three variants — chat thread with composer, command palette, and a generative prompt-and-output workspace.">
      <BlockShowcase name="01 — Chat thread + composer" bg="elev">
        <div style={{ padding: 32, maxWidth: 720, marginInline: "auto" }}>
          <Card style={{ padding: 0, overflow: "hidden", display: "flex", flexDirection: "column", height: 540 }}>
            <div style={{ padding: "14px 18px", borderBottom: "1.5px solid var(--border-subtle)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--success)" }} />
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 600 }}>void · assistant</div>
              </div>
              <Badge variant="ghost" style={{ fontSize: 10 }}>gpt-void-3</Badge>
            </div>
            <div style={{ flex: 1, padding: 20, overflowY: "auto", display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}>
                <div style={{ background: "var(--primary)", color: "var(--primary-fg)", padding: "10px 14px", borderRadius: "var(--r)", maxWidth: "72%", fontSize: 14, lineHeight: 1.5 }}>How do I add a new theme to voidUI?</div>
                <InitialAvatar name="You" size={32} />
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--bg-elev)", border: "1.5px solid var(--border)", display: "grid", placeItems: "center", flexShrink: 0 }}><SparklesIcon size={14} style={{ color: "var(--primary)" }} /></div>
                <div style={{ background: "var(--bg-elev)", border: "1.5px solid var(--border-subtle)", padding: "12px 16px", borderRadius: "var(--r)", maxWidth: "78%", fontSize: 14, lineHeight: 1.55 }}>Add a new entry to <code style={{ background: "var(--bg)", padding: "1px 6px", borderRadius: 4, fontFamily: "var(--font-mono)", fontSize: 12 }}>app/global.css</code>:<br /><br />Define your CSS variables under a new <code style={{ background: "var(--bg)", padding: "1px 6px", borderRadius: 4, fontFamily: "var(--font-mono)", fontSize: 12 }}>[data-theme=&quot;...&quot;]</code> selector. The components automatically pick up the tokens.</div>
              </div>
              <div style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}>
                <div style={{ background: "var(--primary)", color: "var(--primary-fg)", padding: "10px 14px", borderRadius: "var(--r)", maxWidth: "72%", fontSize: 14, lineHeight: 1.5 }}>Show me an example.</div>
                <InitialAvatar name="You" size={32} />
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--bg-elev)", border: "1.5px solid var(--border)", display: "grid", placeItems: "center", flexShrink: 0 }}><SparklesIcon size={14} style={{ color: "var(--primary)" }} /></div>
                <div style={{ background: "var(--bg-elev)", border: "1.5px solid var(--border-subtle)", padding: 0, borderRadius: "var(--r)", maxWidth: "78%", fontSize: 12, fontFamily: "var(--font-mono)", overflow: "hidden" }}>
                  <pre style={{ margin: 0, padding: 14, lineHeight: 1.6, color: "var(--fg)" }}>{`[data-theme="seafoam"] {
  --primary: oklch(70% 0.12 180);
  --bg: oklch(98% 0.01 180);
  --fg: oklch(20% 0.02 180);
}`}</pre>
                </div>
              </div>
            </div>
            <div style={{ padding: 14, borderTop: "1.5px solid var(--border-subtle)" }}>
              <div style={{ display: "flex", gap: 8, alignItems: "flex-end", border: "1.5px solid var(--border)", borderRadius: "var(--r)", padding: 8, background: "var(--bg)" }}>
                <Input value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Ask anything…" style={{ border: "none", boxShadow: "none", padding: "6px 8px", flex: 1 }} />
                <Button size="sm" disabled={!msg}><ArrowUpIcon size={14} /></Button>
              </div>
              <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
                <Badge variant="ghost" style={{ fontSize: 10 }}>⌘K commands</Badge>
                <Badge variant="ghost" style={{ fontSize: 10 }}>↵ to send</Badge>
              </div>
            </div>
          </Card>
        </div>
      </BlockShowcase>

      <BlockShowcase name="02 — Command palette">
        <div style={{ padding: 64, display: "grid", placeItems: "center", minHeight: 420 }}>
          <Card style={{ width: "min(560px, 100%)", padding: 0, overflow: "hidden", boxShadow: "0 12px 40px rgba(0,0,0,0.18)" }}>
            <div style={{ padding: 14, borderBottom: "1.5px solid var(--border-subtle)", display: "flex", alignItems: "center", gap: 10 }}>
              <CommandIcon size={16} style={{ color: "var(--fg-muted)" }} />
              <input autoFocus placeholder="Type a command or search…" style={{ flex: 1, border: "none", outline: "none", background: "transparent", fontSize: 15, color: "var(--fg)", fontFamily: "var(--font-sans)" }} />
              <Badge variant="ghost" style={{ fontSize: 10 }}>esc</Badge>
            </div>
            <div style={{ padding: 8 }}>
              <div style={{ fontSize: 10, fontFamily: "var(--font-mono)", color: "var(--fg-muted)", padding: "8px 10px", letterSpacing: "0.08em" }}>SUGGESTED</div>
              {[
                { icon: SparklesIcon, label: "Generate component from sketch", kbd: "G" },
                { icon: FileTextIcon, label: "Summarize current document", kbd: "S" },
                { icon: CodeIcon, label: "Refactor selection", kbd: "R" },
                { icon: ImageIcon, label: "Describe attached image", kbd: "I" },
              ].map(({ icon: Icon, label, kbd }, i) => (
                <button key={i} style={{ width: "100%", display: "flex", alignItems: "center", gap: 12, padding: "10px 10px", borderRadius: "var(--r-sm)", border: "none", background: i === 0 ? "var(--bg-elev)" : "transparent", color: "inherit", textAlign: "left", cursor: "pointer", fontSize: 14 }}>
                  <Icon size={15} style={{ color: "var(--fg-muted)" }} />
                  <span style={{ flex: 1 }}>{label}</span>
                  <Badge variant="outline" style={{ fontSize: 10, fontFamily: "var(--font-mono)" }}>⌘{kbd}</Badge>
                </button>
              ))}
            </div>
          </Card>
        </div>
      </BlockShowcase>

      <BlockShowcase name="03 — Generative workspace" bg="elev">
        <div style={{ padding: 32, maxWidth: 1100, marginInline: "auto", display: "grid", gridTemplateColumns: "320px 1fr", gap: 16 }}>
          <Card style={{ padding: 18 }}>
            <div className="label" style={{ marginBottom: 12 }}>Prompt</div>
            <textarea defaultValue="A pricing card with three tiers, monospace headings, restrained palette." style={{ width: "100%", minHeight: 140, border: "1.5px solid var(--border)", borderRadius: "var(--r)", padding: 12, fontFamily: "var(--font-sans)", fontSize: 13, lineHeight: 1.5, resize: "vertical", color: "var(--fg)", background: "var(--bg)" }} />
            <div style={{ display: "grid", gap: 10, marginTop: 14 }}>
              <div><div style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--fg-muted)", marginBottom: 4 }}>STYLE</div><Badge variant="outline" style={{ marginRight: 4 }}>Editorial</Badge><Badge>Mono</Badge></div>
              <div><div style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--fg-muted)", marginBottom: 4 }}>OUTPUT</div><Badge variant="outline">React + CSS</Badge></div>
            </div>
            <Button style={{ width: "100%", marginTop: 14 }}><SparklesIcon size={14} />Generate</Button>
          </Card>
          <Card style={{ padding: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}>
            <div style={{ padding: "12px 16px", borderBottom: "1.5px solid var(--border-subtle)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--fg-muted)" }}>preview · pricing-card.tsx</div>
              <div style={{ display: "flex", gap: 6 }}><Badge variant="ghost" style={{ fontSize: 10 }}>v3</Badge><Button variant="ghost" size="sm">Regenerate</Button></div>
            </div>
            <div style={{ flex: 1, padding: 32, display: "grid", placeItems: "center", background: "var(--bg-elev)" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, width: "100%" }}>
                {["Free", "Pro", "Team"].map((t, i) => (
                  <div key={t} style={{ background: "var(--bg)", border: "1.5px solid var(--border)", borderRadius: "var(--r)", padding: 18 }}>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-muted)" }}>0{i + 1}</div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 500, marginTop: 4 }}>{t}</div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 24, fontWeight: 700, marginTop: 8 }}>${[0, 24, 79][i]}</div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </BlockShowcase>
    </BlockPage>
  );
}
