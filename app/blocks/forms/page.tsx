"use client";

import React from "react";
import { BlockPage, BlockShowcase } from "@/components/blocks/_kit";
import { Button, Card, Input, Label, Textarea, Checkbox, Switch, Select, SelectTrigger, SelectValue, SelectContent, SelectItem, RadioGroup, RadioGroupItem } from "@/components/voidui";

export default function FormsPage() {
  return (
    <BlockPage eyebrow="Application — Forms" title="Forms" subtitle="Five variants — single column, two-column profile, address form, multi-step header, and a settings preferences pattern.">
      <BlockShowcase name="01 — Profile (single column)" bg="elev">
        <div style={{ padding: "48px 24px", display: "flex", justifyContent: "center" }}>
          <Card style={{ padding: 32, width: "100%", maxWidth: 520 }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 500, letterSpacing: "-0.02em", margin: "0 0 4px" }}>Personal details</h2>
            <p style={{ margin: "0 0 20px", fontSize: 13, color: "var(--fg-muted)" }}>This information will appear on your public profile.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div><Label htmlFor="f1-name" required>Full name</Label><Input id="f1-name" placeholder="Ada Lovelace" /></div>
              <div><Label htmlFor="f1-email" required>Email</Label><Input id="f1-email" type="email" placeholder="ada@voidui.dev" /></div>
              <div><Label htmlFor="f1-bio">Bio</Label><Textarea id="f1-bio" rows={3} placeholder="Designer, mathematician, traveler." /></div>
              <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 12, borderTop: "1.5px solid var(--border-subtle)" }}>
                <Button variant="ghost">Cancel</Button><Button>Save changes</Button>
              </div>
            </div>
          </Card>
        </div>
      </BlockShowcase>

      <BlockShowcase name="02 — Two-column with sections">
        <div style={{ padding: "48px 24px", maxWidth: 880, marginInline: "auto" }}>
          {[
            { title: "Account", desc: "Public details that appear on your profile.", fields: [["Name", "Ada Lovelace"], ["Email", "ada@voidui.dev"], ["Username", "@ada"]] },
            { title: "Workspace", desc: "Settings shared with your team.", fields: [["Workspace name", "voidUI"], ["URL slug", "voidui"]] },
          ].map((sec, i) => (
            <div key={sec.title} style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 32, paddingBlock: 32, borderBottom: i === 0 ? "1.5px solid var(--border-subtle)" : "none" }}>
              <div>
                <h3 style={{ fontFamily: "var(--font-mono)", fontSize: 14, fontWeight: 600, margin: "0 0 6px" }}>{sec.title}</h3>
                <p style={{ margin: 0, fontSize: 13, color: "var(--fg-muted)", lineHeight: 1.55 }}>{sec.desc}</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {sec.fields.map(([l, v]) => (<div key={l}><Label>{l}</Label><Input defaultValue={v} /></div>))}
              </div>
            </div>
          ))}
          <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 24 }}><Button variant="outline">Cancel</Button><Button>Save</Button></div>
        </div>
      </BlockShowcase>

      <BlockShowcase name="03 — Address (grouped)" bg="elev">
        <div style={{ padding: "48px 24px", display: "flex", justifyContent: "center" }}>
          <Card style={{ padding: 32, width: "100%", maxWidth: 640 }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 500, letterSpacing: "-0.02em", margin: "0 0 16px" }}>Shipping address</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div><Label>First</Label><Input /></div>
              <div><Label>Last</Label><Input /></div>
              <div style={{ gridColumn: "span 2" }}><Label>Street</Label><Input /></div>
              <div><Label>City</Label><Input /></div>
              <div><Label>Postal</Label><Input /></div>
              <div style={{ gridColumn: "span 2" }}>
                <Label>Country</Label>
                <Select><SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger><SelectContent><SelectItem value="us">United States</SelectItem><SelectItem value="uk">United Kingdom</SelectItem><SelectItem value="de">Germany</SelectItem></SelectContent></Select>
              </div>
            </div>
            <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 8 }}><Checkbox id="bill-same" defaultChecked /><Label htmlFor="bill-same">Billing same as shipping</Label></div>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 20, paddingTop: 16, borderTop: "1.5px solid var(--border-subtle)" }}><Button variant="outline">Back</Button><Button>Continue</Button></div>
          </Card>
        </div>
      </BlockShowcase>

      <BlockShowcase name="04 — Multi-step header">
        <div style={{ padding: "48px 24px", maxWidth: 720, marginInline: "auto" }}>
          <ol style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "flex", gap: 0, alignItems: "center" }}>
            {["Account", "Workspace", "Plan", "Confirm"].map((s, i) => (
              <li key={s} style={{ flex: 1, display: "flex", alignItems: "center", gap: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, flex: i === 3 ? "0 0 auto" : 1 }}>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", border: "1.5px solid var(--border)", background: i <= 1 ? "var(--primary)" : "var(--bg)", color: i <= 1 ? "var(--primary-fg)" : "var(--fg-muted)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700, flexShrink: 0 }}>{i + 1}</div>
                  <div>
                    <div style={{ fontSize: 11, color: "var(--fg-muted)", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Step {i + 1}</div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 600 }}>{s}</div>
                  </div>
                  {i < 3 && <div style={{ flex: 1, height: 1.5, background: i < 1 ? "var(--primary)" : "var(--border-subtle)", marginInline: 12 }} />}
                </div>
              </li>
            ))}
          </ol>
          <Card style={{ padding: 28 }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 500, letterSpacing: "-0.02em", margin: "0 0 4px" }}>Workspace details</h3>
            <p style={{ margin: "0 0 20px", fontSize: 13, color: "var(--fg-muted)" }}>Pick a name and URL — both can change later.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div><Label>Workspace name</Label><Input defaultValue="voidUI" /></div>
              <div><Label>URL</Label><Input defaultValue="voidui" /></div>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}><Button variant="outline">Back</Button><Button>Continue</Button></div>
            </div>
          </Card>
        </div>
      </BlockShowcase>

      <BlockShowcase name="05 — Preferences" bg="elev">
        <div style={{ padding: "48px 24px", maxWidth: 640, marginInline: "auto" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 500, letterSpacing: "-0.02em", margin: "0 0 16px" }}>Notifications</h2>
          {[
            ["Product updates", "Major releases and new features"],
            ["Security alerts", "Logins from new devices"],
            ["Marketing", "Tips, case studies, surveys"],
            ["Mentions", "When someone @-mentions you"],
          ].map(([t, d], i) => (
            <div key={t} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBlock: 14, borderBottom: i < 3 ? "1.5px solid var(--border-subtle)" : "none" }}>
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 600 }}>{t}</div>
                <p style={{ margin: 0, fontSize: 12, color: "var(--fg-muted)" }}>{d}</p>
              </div>
              <Switch defaultChecked={i !== 2} />
            </div>
          ))}
        </div>
      </BlockShowcase>
    </BlockPage>
  );
}
