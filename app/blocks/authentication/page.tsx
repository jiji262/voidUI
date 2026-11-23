"use client";

import React from "react";
import { BlockPage, BlockShowcase, InitialAvatar } from "@/components/blocks/_kit";
import { Button, Card, Input, Label, Checkbox } from "@/components/voidui";
import { ArrowRightIcon, GithubIcon, MailIcon, KeyIcon, LockIcon, FingerprintIcon } from "lucide-react";

export default function AuthPage() {
  return (
    <BlockPage eyebrow="Application — Auth" title="Authentication" subtitle="Four variants — sign-in, sign-up with side panel, magic link, and a 2FA confirmation step.">
      <BlockShowcase name="01 — Sign in" bg="elev">
        <div style={{ padding: "64px 24px", display: "flex", justifyContent: "center" }}>
          <Card style={{ padding: 32, width: "100%", maxWidth: 380 }}>
            <div style={{ marginBottom: 20 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 500, letterSpacing: "-0.02em", margin: "0 0 6px" }}>Welcome back</h2>
              <p style={{ margin: 0, fontSize: 13, color: "var(--fg-muted)" }}>Sign in to continue to voidUI</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <Button variant="outline" fullWidth><GithubIcon size={14} /> Continue with GitHub</Button>
              <div style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-muted)", margin: "8px 0" }}><span style={{ flex: 1, height: 1, background: "var(--border-subtle)" }} />OR<span style={{ flex: 1, height: 1, background: "var(--border-subtle)" }} /></div>
              <div><Label htmlFor="si-email">Email</Label><Input id="si-email" type="email" placeholder="you@voidui.dev" /></div>
              <div><Label htmlFor="si-pw">Password</Label><Input id="si-pw" type="password" placeholder="••••••••" /></div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", gap: 6, alignItems: "center" }}><Checkbox id="rem" /><Label htmlFor="rem">Remember me</Label></div>
                <a href="#" style={{ fontSize: 12, color: "var(--fg-muted)", textDecoration: "underline" }}>Forgot?</a>
              </div>
              <Button fullWidth>Sign in <ArrowRightIcon size={13} /></Button>
              <p style={{ margin: 0, fontSize: 12, color: "var(--fg-muted)", textAlign: "center" }}>No account? <a href="#" style={{ color: "var(--fg)" }}>Sign up</a></p>
            </div>
          </Card>
        </div>
      </BlockShowcase>

      <BlockShowcase name="02 — Sign up split">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 520 }}>
          <div style={{ padding: 48, background: "var(--fg)", color: "var(--bg)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, opacity: 0.6, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 16 }}>Join 12,000+ teams</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: 44, fontWeight: 500, letterSpacing: "-0.025em", lineHeight: 1.0, margin: "0 0 16px" }}>Start shipping in <em style={{ fontStyle: "italic", color: "var(--primary)" }}>minutes</em></h2>
              <p style={{ opacity: 0.7, fontSize: 14, lineHeight: 1.55, margin: 0 }}>Free forever. No credit card. Cancel any time, since there&apos;s nothing to cancel.</p>
            </div>
            <blockquote style={{ margin: 0, paddingTop: 24, borderTop: "1.5px solid rgba(255,255,255,0.15)", fontFamily: "var(--font-display)", fontSize: 18, lineHeight: 1.5 }}>
              &ldquo;voidUI shipped our new dashboard in a weekend.&rdquo;
              <footer style={{ marginTop: 10, fontSize: 12, fontFamily: "var(--font-mono)", opacity: 0.7, fontStyle: "normal" }}>— Maya O., founding designer at Lattice</footer>
            </blockquote>
          </div>
          <div style={{ padding: 48, background: "var(--bg)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 500, margin: "0 0 20px", letterSpacing: "-0.02em" }}>Create your account</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                <div><Label htmlFor="su-fn">First</Label><Input id="su-fn" placeholder="Ada" /></div>
                <div><Label htmlFor="su-ln">Last</Label><Input id="su-ln" placeholder="Lovelace" /></div>
              </div>
              <div><Label htmlFor="su-email">Work email</Label><Input id="su-email" type="email" /></div>
              <div><Label htmlFor="su-pw">Password</Label><Input id="su-pw" type="password" /></div>
              <Button fullWidth>Create account <ArrowRightIcon size={13} /></Button>
              <p style={{ margin: 0, fontSize: 11, color: "var(--fg-muted)", lineHeight: 1.4 }}>By signing up, you agree to the Terms and Privacy Policy.</p>
            </div>
          </div>
        </div>
      </BlockShowcase>

      <BlockShowcase name="03 — Magic link" bg="elev">
        <div style={{ padding: "80px 24px", display: "flex", justifyContent: "center" }}>
          <Card style={{ padding: 40, width: "100%", maxWidth: 420, textAlign: "center" }}>
            <div style={{ width: 56, height: 56, border: "1.5px solid var(--border)", background: "var(--primary)", color: "var(--primary-fg)", borderRadius: "var(--r)", margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "var(--sh-xs)" }}><MailIcon size={24} /></div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 500, letterSpacing: "-0.02em", margin: "0 0 8px" }}>Check your inbox</h2>
            <p style={{ margin: "0 0 20px", fontSize: 14, color: "var(--fg-muted)", lineHeight: 1.6 }}>We sent a magic link to <strong style={{ color: "var(--fg)" }}>ada@voidui.dev</strong>. It expires in 15 minutes.</p>
            <Button variant="outline" fullWidth>Resend link</Button>
            <p style={{ margin: "16px 0 0", fontSize: 12, color: "var(--fg-muted)" }}>Wrong address? <a href="#" style={{ color: "var(--fg)", textDecoration: "underline" }}>Use a different email</a></p>
          </Card>
        </div>
      </BlockShowcase>

      <BlockShowcase name="04 — 2FA verification">
        <div style={{ padding: "64px 24px", display: "flex", justifyContent: "center" }}>
          <Card style={{ padding: 32, width: "100%", maxWidth: 420 }}>
            <FingerprintIcon size={28} style={{ marginBottom: 12, color: "var(--primary)" }} />
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 500, letterSpacing: "-0.02em", margin: "0 0 6px" }}>Two-factor verification</h2>
            <p style={{ margin: "0 0 20px", fontSize: 13, color: "var(--fg-muted)" }}>Enter the 6-digit code from your authenticator app.</p>
            <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <Input key={i} maxLength={1} style={{ textAlign: "center", fontFamily: "var(--font-mono)", fontSize: 22, fontWeight: 600, padding: 0, height: 48 }} />
              ))}
            </div>
            <Button fullWidth>Verify</Button>
            <p style={{ margin: "12px 0 0", fontSize: 12, color: "var(--fg-muted)", textAlign: "center" }}>Lost device? <a href="#" style={{ color: "var(--fg)", textDecoration: "underline" }}>Use a recovery code</a></p>
          </Card>
        </div>
      </BlockShowcase>
    </BlockPage>
  );
}
