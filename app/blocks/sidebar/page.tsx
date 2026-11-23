"use client";

import React, { useState } from "react";
import { BlockPage, BlockShowcase, InitialAvatar } from "@/components/blocks/_kit";
import { Card, Badge, Button } from "@/components/voidui";
import { LayoutDashboardIcon, FolderIcon, UsersIcon, BarChart3Icon, SettingsIcon, LogOutIcon, SearchIcon, ChevronDownIcon, BellIcon, BookmarkIcon, InboxIcon, ZapIcon } from "lucide-react";

const NavItem = ({ icon: Icon, label, active, badge }: any) => (
  <button style={{ width: "100%", display: "flex", alignItems: "center", gap: 10, padding: "8px 10px", border: "none", background: active ? "var(--bg-elev)" : "transparent", borderRadius: "var(--r-sm)", color: active ? "var(--fg)" : "var(--fg-muted)", fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: active ? 600 : 400, cursor: "pointer", textAlign: "left" }}>
    <Icon size={15} />
    <span style={{ flex: 1 }}>{label}</span>
    {badge && <Badge style={{ fontSize: 10, padding: "1px 6px" }}>{badge}</Badge>}
  </button>
);

export default function SidebarPage() {
  const [active, setActive] = useState("dash");
  return (
    <BlockPage eyebrow="Application — Sidebar" title="Sidebar layouts" subtitle="Three variants — minimal monospace nav, grouped with workspace switcher, and an icon rail with collapsible labels.">
      <BlockShowcase name="01 — Minimal mono nav" bg="elev">
        <div style={{ padding: 16, maxWidth: 1100, marginInline: "auto" }}>
          <Card style={{ padding: 0, overflow: "hidden", height: 540, display: "grid", gridTemplateColumns: "240px 1fr" }}>
            <aside style={{ borderRight: "1.5px solid var(--border-subtle)", padding: 14, display: "flex", flexDirection: "column" }}>
              <div style={{ padding: "6px 8px", marginBottom: 14, fontFamily: "var(--font-mono)", fontSize: 14, fontWeight: 700, letterSpacing: "-0.01em" }}>void/dashboard</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 2, flex: 1 }}>
                <NavItem icon={LayoutDashboardIcon} label="dashboard" active />
                <NavItem icon={FolderIcon} label="projects" badge="14" />
                <NavItem icon={UsersIcon} label="team" />
                <NavItem icon={BarChart3Icon} label="analytics" />
                <NavItem icon={InboxIcon} label="inbox" badge="3" />
                <div style={{ height: 1, background: "var(--border-subtle)", margin: "12px 4px" }} />
                <NavItem icon={SettingsIcon} label="settings" />
                <NavItem icon={LogOutIcon} label="sign out" />
              </div>
              <div style={{ padding: 10, border: "1.5px solid var(--border-subtle)", borderRadius: "var(--r-sm)", display: "flex", alignItems: "center", gap: 8 }}>
                <InitialAvatar name="Ada L" size={28} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 12, fontWeight: 600, fontFamily: "var(--font-mono)" }}>ada</div>
                  <div style={{ fontSize: 10, color: "var(--fg-muted)" }}>pro plan</div>
                </div>
              </div>
            </aside>
            <main style={{ padding: 28, background: "var(--bg)" }}>
              <div className="label" style={{ marginBottom: 8 }}>Dashboard</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 500, letterSpacing: "-0.025em", margin: "0 0 8px" }}>Welcome back, Ada</h3>
              <p style={{ color: "var(--fg-muted)", margin: 0 }}>Main content goes here. Sidebar nav is the focus of this block.</p>
            </main>
          </Card>
        </div>
      </BlockShowcase>

      <BlockShowcase name="02 — Workspace switcher + groups">
        <div style={{ padding: 16, maxWidth: 1100, marginInline: "auto" }}>
          <Card style={{ padding: 0, overflow: "hidden", height: 600, display: "grid", gridTemplateColumns: "260px 1fr" }}>
            <aside style={{ borderRight: "1.5px solid var(--border-subtle)", padding: 12, display: "flex", flexDirection: "column", background: "var(--bg-elev)" }}>
              <button style={{ display: "flex", alignItems: "center", gap: 10, padding: 10, border: "1.5px solid var(--border)", background: "var(--bg)", borderRadius: "var(--r-sm)", marginBottom: 14, cursor: "pointer", width: "100%" }}>
                <div style={{ width: 24, height: 24, borderRadius: 6, background: "var(--primary)", color: "var(--primary-fg)", display: "grid", placeItems: "center", fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700 }}>v</div>
                <div style={{ flex: 1, textAlign: "left", minWidth: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>void Studio</div>
                  <div style={{ fontSize: 10, color: "var(--fg-muted)", fontFamily: "var(--font-mono)" }}>team plan · 14 seats</div>
                </div>
                <ChevronDownIcon size={14} style={{ color: "var(--fg-muted)" }} />
              </button>
              <div style={{ position: "relative", marginBottom: 14 }}>
                <SearchIcon size={13} style={{ position: "absolute", top: "50%", left: 10, transform: "translateY(-50%)", color: "var(--fg-muted)" }} />
                <input placeholder="Search…" style={{ width: "100%", padding: "8px 10px 8px 32px", border: "1.5px solid var(--border)", borderRadius: "var(--r-sm)", fontSize: 12, background: "var(--bg)", color: "var(--fg)", fontFamily: "var(--font-sans)", outline: "none" }} />
              </div>
              <div style={{ flex: 1, overflowY: "auto" }}>
                <div className="label" style={{ marginBottom: 6 }}>Workspace</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 2, marginBottom: 16 }}>
                  {[
                    { i: LayoutDashboardIcon, l: "Overview", k: "dash" },
                    { i: FolderIcon, l: "Projects", k: "proj", b: "12" },
                    { i: InboxIcon, l: "Inbox", k: "inbox", b: "5" },
                    { i: BookmarkIcon, l: "Saved", k: "save" },
                  ].map((it: any) => <NavItem key={it.k} icon={it.i} label={it.l} active={active === it.k} badge={it.b} />)}
                </div>
                <div className="label" style={{ marginBottom: 6 }}>Insights</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 2, marginBottom: 16 }}>
                  <NavItem icon={BarChart3Icon} label="Analytics" />
                  <NavItem icon={ZapIcon} label="Automations" />
                </div>
                <div className="label" style={{ marginBottom: 6 }}>Account</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <NavItem icon={UsersIcon} label="Team" />
                  <NavItem icon={SettingsIcon} label="Settings" />
                </div>
              </div>
              <div style={{ marginTop: 12, padding: 12, border: "1.5px solid var(--border)", borderRadius: "var(--r-sm)", background: "var(--bg)" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--fg-muted)", marginBottom: 4 }}>UPGRADE</div>
                <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 8 }}>Unlock unlimited projects</div>
                <Button size="sm" style={{ width: "100%" }}>Go pro</Button>
              </div>
            </aside>
            <main style={{ padding: 28 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 500, letterSpacing: "-0.02em", margin: 0 }}>Projects</h3>
                <Button size="sm">New</Button>
              </div>
              <div style={{ color: "var(--fg-muted)", fontSize: 13 }}>Workspace switcher and grouped nav demonstrated on the left.</div>
            </main>
          </Card>
        </div>
      </BlockShowcase>

      <BlockShowcase name="03 — Icon rail" bg="elev">
        <div style={{ padding: 16, maxWidth: 1100, marginInline: "auto" }}>
          <Card style={{ padding: 0, overflow: "hidden", height: 540, display: "grid", gridTemplateColumns: "60px 200px 1fr" }}>
            <aside style={{ borderRight: "1.5px solid var(--border-subtle)", padding: 10, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: "var(--primary)", color: "var(--primary-fg)", display: "grid", placeItems: "center", fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 700, marginBottom: 8 }}>v</div>
              {[LayoutDashboardIcon, FolderIcon, UsersIcon, BarChart3Icon, BellIcon].map((Icon, i) => (
                <button key={i} style={{ width: 36, height: 36, border: "none", background: i === 0 ? "var(--bg-elev)" : "transparent", borderRadius: "var(--r-sm)", display: "grid", placeItems: "center", color: i === 0 ? "var(--fg)" : "var(--fg-muted)", cursor: "pointer" }}><Icon size={16} /></button>
              ))}
              <div style={{ flex: 1 }} />
              <InitialAvatar name="Ada" size={32} />
            </aside>
            <aside style={{ borderRight: "1.5px solid var(--border-subtle)", padding: 14, background: "var(--bg)" }}>
              <h4 style={{ fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 700, letterSpacing: "0.05em", color: "var(--fg-muted)", margin: "4px 0 12px" }}>PROJECTS</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {["Design System v3", "Marketing site", "Component library", "Brand refresh", "Internal tools"].map((p, i) => (
                  <button key={p} style={{ width: "100%", display: "flex", alignItems: "center", gap: 8, padding: "8px 10px", border: "none", background: i === 0 ? "var(--bg-elev)" : "transparent", borderRadius: "var(--r-sm)", color: "var(--fg)", fontSize: 13, cursor: "pointer", textAlign: "left", fontFamily: "var(--font-sans)" }}>
                    <div style={{ width: 8, height: 8, borderRadius: 2, background: ["var(--primary)", "var(--success)", "var(--warning)", "var(--info)", "var(--fg-muted)"][i] }} />
                    <span style={{ flex: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{p}</span>
                  </button>
                ))}
              </div>
            </aside>
            <main style={{ padding: 28, background: "var(--bg)" }}>
              <div className="label" style={{ marginBottom: 6 }}>Project · Design System v3</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 500, letterSpacing: "-0.02em", margin: "0 0 8px" }}>Two-column nav</h3>
              <p style={{ color: "var(--fg-muted)", margin: 0, maxWidth: 480 }}>Icon rail collapses workspace navigation; the second column drills into the active section.</p>
            </main>
          </Card>
        </div>
      </BlockShowcase>
    </BlockPage>
  );
}
