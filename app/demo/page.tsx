"use client";

import React from "react";
import {
  Button, Badge, Card, Input, Label, Textarea, Checkbox, Switch, Slider,
  RadioGroup, RadioGroupItem, Select, SelectTrigger, SelectValue, SelectContent, SelectItem,
  Avatar, AvatarFallback, Alert, AlertTitle, AlertDescription, Progress,
  Tabs, TabsList, TabsTrigger, TabsContent,
  Table, TableHeader, TableBody, TableRow, TableHead, TableCell,
  Toaster,
} from "@/components/voidui";
import { toast } from "sonner";
import { CheckIcon, MailIcon, BellIcon, GlobeIcon, AlertCircleIcon } from "lucide-react";

export default function DemoPage() {
  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh", padding: "48px 24px 96px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ marginBottom: 32 }}>
          <div className="label" style={{ marginBottom: 12 }}>Demo</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 500, letterSpacing: "-0.03em", margin: "0 0 8px", lineHeight: 1.0 }}>
            Live, interactive showcase
          </h1>
          <p style={{ fontSize: 15, color: "var(--fg-muted)", maxWidth: 640, margin: 0, lineHeight: 1.6 }}>
            Switch theme & mode in the header. Components below respond live, with no remount.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 24 }} className="vui-demo-grid">
          <Card style={{ padding: 28 }}>
            <div className="label" style={{ marginBottom: 16 }}>Account form</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div>
                <Label htmlFor="full">Full name</Label>
                <Input id="full" placeholder="Ada Lovelace" />
              </div>
              <div>
                <Label htmlFor="email" required>Email</Label>
                <Input id="email" type="email" placeholder="ada@voidui.dev" />
              </div>
              <div>
                <Label htmlFor="role">Role</Label>
                <Select>
                  <SelectTrigger id="role"><SelectValue placeholder="Choose your role" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="design">Designer</SelectItem>
                    <SelectItem value="eng">Engineer</SelectItem>
                    <SelectItem value="pm">Product</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="bio">Bio</Label>
                <Textarea id="bio" placeholder="Tell us a bit about yourself..." rows={3} />
              </div>
              <RadioGroup defaultValue="m" style={{ display: "flex", gap: 16 }}>
                <div style={{ display: "flex", gap: 6 }}><RadioGroupItem value="m" id="r1" /><Label htmlFor="r1">Monthly</Label></div>
                <div style={{ display: "flex", gap: 6 }}><RadioGroupItem value="y" id="r2" /><Label htmlFor="r2">Yearly</Label></div>
              </RadioGroup>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}><Checkbox id="agree" defaultChecked /><Label htmlFor="agree">I agree to the terms</Label></div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}><Switch id="news" /><Label htmlFor="news">Newsletter</Label></div>
                <Button onClick={() => toast.success("Account created", { description: "We sent a confirmation to your inbox." })}>
                  Create account
                </Button>
              </div>
            </div>
          </Card>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <Card style={{ padding: 24 }}>
              <div className="label" style={{ marginBottom: 12 }}>Status</div>
              <Alert>
                <CheckIcon size={14} />
                <AlertTitle>All systems operational</AlertTitle>
                <AlertDescription>Last incident resolved 14 days ago.</AlertDescription>
              </Alert>
              <div style={{ marginTop: 16 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: 12, fontFamily: "var(--font-mono)" }}>
                  <span>API uptime</span><span style={{ color: "var(--fg-muted)" }}>99.97%</span>
                </div>
                <Progress value={99.97} />
              </div>
              <div style={{ marginTop: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: 12, fontFamily: "var(--font-mono)" }}>
                  <span>p95 latency</span><span style={{ color: "var(--fg-muted)" }}>132ms</span>
                </div>
                <Progress value={62} />
              </div>
            </Card>

            <Card style={{ padding: 24 }}>
              <div className="label" style={{ marginBottom: 12 }}>Plan controls</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: 12, fontFamily: "var(--font-mono)" }}>
                    <span>Seats</span><span style={{ color: "var(--fg-muted)" }}>12</span>
                  </div>
                  <Slider defaultValue={[12]} min={1} max={50} step={1} />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 12px", border: "1.5px solid var(--border-subtle)", borderRadius: "var(--r-sm)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13 }}><BellIcon size={13} /> Push notifications</div>
                  <Switch defaultChecked />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 12px", border: "1.5px solid var(--border-subtle)", borderRadius: "var(--r-sm)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13 }}><GlobeIcon size={13} /> Public profile</div>
                  <Switch />
                </div>
              </div>
            </Card>
          </div>
        </div>

        <Card style={{ padding: 0, overflow: "hidden", marginTop: 24 }}>
          <Tabs defaultValue="overview">
            <div style={{ padding: "12px 16px", borderBottom: "1.5px solid var(--border-subtle)" }}>
              <TabsList><TabsTrigger value="overview">Overview</TabsTrigger><TabsTrigger value="usage">Usage</TabsTrigger><TabsTrigger value="billing">Billing</TabsTrigger></TabsList>
            </div>
            <TabsContent value="overview" style={{ padding: 24 }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 16 }}>
                {[["MRR", "$4,829"], ["Customers", "128"], ["Churn", "1.2%"], ["NPS", "62"]].map(([l, v]) => (
                  <div key={l}>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-muted)", textTransform: "uppercase", letterSpacing: "0.06em" }}>{l}</div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 500, marginTop: 4 }}>{v}</div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="usage" style={{ padding: 24 }}>
              <Table>
                <TableHeader><TableRow><TableHead>Endpoint</TableHead><TableHead>Calls</TableHead><TableHead>Errors</TableHead></TableRow></TableHeader>
                <TableBody>
                  <TableRow><TableCell>/api/items</TableCell><TableCell>4,182</TableCell><TableCell>3</TableCell></TableRow>
                  <TableRow><TableCell>/api/users</TableCell><TableCell>1,927</TableCell><TableCell>0</TableCell></TableRow>
                  <TableRow><TableCell>/api/billing</TableCell><TableCell>318</TableCell><TableCell>1</TableCell></TableRow>
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="billing" style={{ padding: 24 }}>
              <p style={{ margin: 0, fontSize: 14, color: "var(--fg-muted)" }}>Next charge on May 18 — $148.00</p>
            </TabsContent>
          </Tabs>
        </Card>

        <div style={{ marginTop: 24, display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
          <Button onClick={() => toast.success("Saved", { description: "Settings synced across devices." })}>Toast: Success</Button>
          <Button variant="outline" onClick={() => toast.error("Failed", { description: "Network error — retrying." })}>Toast: Error</Button>
          <Button variant="ghost" onClick={() => toast("New message", { description: "Ada sent you a draft." })}>Toast: Default</Button>
        </div>
      </div>
      <Toaster />
    </main>
  );
}
