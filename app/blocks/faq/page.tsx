"use client";

import React from "react";
import { BlockPage, BlockShowcase } from "@/components/blocks/_kit";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent, Card, Button } from "@/components/voidui";
import { ArrowRightIcon } from "lucide-react";

const QA = [
  ["Is voidUI free?", "Yes — MIT licensed. Use commercially without attribution required."],
  ["Does it support dark mode?", "Every theme has light + dark variants. Switch with a single attribute on <html>."],
  ["Can I customize the themes?", "Yes. Edit the CSS variables in app/global.css. The components follow tokens, not class names."],
  ["Does it work with Next.js App Router?", "Yes. Components mark client boundaries explicitly so server trees stay server trees."],
  ["What about accessibility?", "WCAG-AA contrast in every theme, focus rings, aria-invalid wired through inputs."],
  ["Where do I file issues?", "GitHub: jiji262/voidUI. PRs welcome — see CONTRIBUTING.md."],
];

export default function FAQPage() {
  return (
    <BlockPage eyebrow="Marketing — FAQ" title="FAQ sections" subtitle="Four variants — single column accordion, two-column with sidebar, grid of cards, and a tabbed-by-topic FAQ.">
      <BlockShowcase name="01 — Single column accordion" bg="elev">
        <div style={{ padding: "64px 32px", maxWidth: 720, marginInline: "auto" }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: 40, fontWeight: 500, letterSpacing: "-0.025em", margin: "0 0 8px" }}>Frequently asked</h2>
            <p style={{ color: "var(--fg-muted)", margin: 0 }}>Can&apos;t find an answer? <a href="#" style={{ color: "var(--fg)", textDecoration: "underline" }}>Email us.</a></p>
          </div>
          <Accordion type="single" collapsible style={{ background: "var(--bg)", border: "1.5px solid var(--border)", borderRadius: "var(--r)", overflow: "hidden" }}>
            {QA.map(([q, a], i) => (<AccordionItem key={i} value={`q${i}`}><AccordionTrigger>{q}</AccordionTrigger><AccordionContent>{a}</AccordionContent></AccordionItem>))}
          </Accordion>
        </div>
      </BlockShowcase>

      <BlockShowcase name="02 — Two-column with sidebar">
        <div style={{ padding: "64px 32px", display: "grid", gridTemplateColumns: "1fr 2fr", gap: 48, maxWidth: 1100, marginInline: "auto" }}>
          <div>
            <div className="label" style={{ marginBottom: 12 }}>Help</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 500, letterSpacing: "-0.025em", lineHeight: 1.05, margin: "0 0 16px" }}>Got questions? <em style={{ fontStyle: "italic", color: "var(--primary)" }}>We have answers.</em></h2>
            <p style={{ color: "var(--fg-muted)", fontSize: 14, lineHeight: 1.6, margin: "0 0 16px" }}>Common questions we hear from designers and engineers evaluating voidUI.</p>
            <Button variant="outline" size="sm">Contact support <ArrowRightIcon size={12} /></Button>
          </div>
          <Accordion type="single" collapsible>
            {QA.map(([q, a], i) => (<AccordionItem key={i} value={`q${i}`}><AccordionTrigger>{q}</AccordionTrigger><AccordionContent>{a}</AccordionContent></AccordionItem>))}
          </Accordion>
        </div>
      </BlockShowcase>

      <BlockShowcase name="03 — Card grid" bg="elev">
        <div style={{ padding: "64px 32px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14, maxWidth: 1100, marginInline: "auto" }}>
          {QA.map(([q, a], i) => (
            <Card key={i} style={{ padding: 22 }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-muted)", marginBottom: 8 }}>Q{String(i + 1).padStart(2, "0")}</div>
              <h3 style={{ fontFamily: "var(--font-mono)", fontSize: 14, fontWeight: 600, margin: "0 0 8px" }}>{q}</h3>
              <p style={{ margin: 0, fontSize: 13, color: "var(--fg-muted)", lineHeight: 1.55 }}>{a}</p>
            </Card>
          ))}
        </div>
      </BlockShowcase>

      <BlockShowcase name="04 — Editorial Q&A">
        <div style={{ padding: "64px 32px", maxWidth: 720, marginInline: "auto" }}>
          {QA.slice(0, 4).map(([q, a], i, arr) => (
            <div key={i} style={{ paddingBlock: 24, borderBottom: i < arr.length - 1 ? "1.5px solid var(--border-subtle)" : "none" }}>
              <div style={{ display: "flex", gap: 16, alignItems: "baseline" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 500, letterSpacing: "-0.02em", color: "var(--primary)", lineHeight: 1, flexShrink: 0 }}>Q.</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 500, margin: 0, letterSpacing: "-0.02em", lineHeight: 1.15 }}>{q}</h3>
              </div>
              <div style={{ display: "flex", gap: 16, alignItems: "baseline", marginTop: 8 }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 500, letterSpacing: "-0.02em", color: "var(--fg-muted)", lineHeight: 1, flexShrink: 0 }}>A.</div>
                <p style={{ margin: 0, fontSize: 15, color: "var(--fg-muted)", lineHeight: 1.6 }}>{a}</p>
              </div>
            </div>
          ))}
        </div>
      </BlockShowcase>
    </BlockPage>
  );
}
