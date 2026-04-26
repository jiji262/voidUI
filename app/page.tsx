import React from "react";
import Link from "next/link";
import { ArrowRightIcon, GithubIcon, SparklesIcon, BoxIcon, PaletteIcon, LayersIcon, CheckIcon, ZapIcon, CodeIcon, ShieldIcon } from "lucide-react";
import { Button, Badge, Avatar, AvatarFallback, Card } from "@/components/voidui";
import { THEMES, THEME_META, type Theme } from "@/lib/theme-config";

const SWATCHES: Record<Theme, [string, string, string]> = {
  neobrutal:  ["#FFF8E7", "#E8B923", "#0F0F12"],
  swiss:      ["#FAFAFA", "#E63946", "#111111"],
  editorial:  ["#F5EFE6", "#9C3D1A", "#2A1A10"],
  stripe:     ["#F4F6FB", "#2B4EA8", "#0A0E1A"],
  hanko:      ["#EAE6DD", "#3D5A7C", "#1A1F2E"],
  terra:      ["#EFEAD9", "#6B7A4A", "#2A2418"],
  cyber:      ["#0D0F11", "#00875A", "#E5E7E5"],
  milktea:    ["#F5EBDD", "#B88B6E", "#3D2C1F"],
  aurora:     ["#F0EFFA", "#4F4ED4", "#161427"],
  mono:       ["#FFFFFF", "#0A0A0A", "#0A0A0A"],
};

export default function HomePage() {
  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <Hero />
      <ThemesStrip />
      <FeatureGrid />
      <ComponentsPreview />
      <FinalCTA />
    </main>
  );
}

function Hero() {
  return (
    <section style={{ borderBottom: "1.5px solid var(--border)", padding: "clamp(48px, 8vw, 96px) 24px", position: "relative", overflow: "hidden" }}>
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, var(--border-subtle) 1px, transparent 0)", backgroundSize: "32px 32px", opacity: 0.55, pointerEvents: "none" }} />
      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 48, alignItems: "center" }} className="vui-hero-grid">
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 12px", border: "1.5px solid var(--border)", borderRadius: "var(--r-pill)", background: "var(--bg-elev)", marginBottom: 24, boxShadow: "var(--sh-xs)" }}>
            <SparklesIcon size={12} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 600 }}>v3.0 — 10 themes, refined tokens</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(48px, 7vw, 88px)", fontWeight: 500, lineHeight: 0.96, letterSpacing: "-0.035em", margin: "0 0 24px" }}>
            A refined neobrutalist<br />
            <em style={{ fontStyle: "italic", color: "var(--primary)" }}>component library</em>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.55, color: "var(--fg-muted)", margin: "0 0 32px", maxWidth: 540 }}>
            Ten themes. Light and dark. Thirty components. Built with React + TailwindCSS, designed with restraint. <span style={{ color: "var(--fg)" }}>MIT licensed.</span>
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 28 }}>
            <Link href="/themes" style={{ textDecoration: "none" }}>
              <Button>Browse themes <ArrowRightIcon size={14} /></Button>
            </Link>
            <Link href="/components" style={{ textDecoration: "none" }}>
              <Button variant="outline">View components</Button>
            </Link>
            <a href="https://github.com/jiji262/voidUI" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
              <Button variant="ghost"><GithubIcon size={14} /> Star on GitHub</Button>
            </a>
          </div>
          <div style={{ display: "flex", gap: 28, flexWrap: "wrap", paddingTop: 20, borderTop: "1.5px solid var(--border-subtle)" }}>
            {[["10", "themes"], ["30", "components"], ["19", "blocks"], ["MIT", "license"]].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 28, lineHeight: 1, fontWeight: 500 }}>{n}</div>
                <div style={{ fontSize: 11, color: "var(--fg-muted)", fontFamily: "var(--font-mono)", marginTop: 4, textTransform: "uppercase", letterSpacing: "0.06em" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        <HeroPreview />
      </div>
    </section>
  );
}

function HeroPreview() {
  return (
    <div className="card" style={{ padding: 0, overflow: "hidden", background: "var(--bg-elev)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "10px 14px", borderBottom: "1.5px solid var(--border-subtle)", background: "var(--bg)" }}>
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--accent-1)", border: "1px solid var(--border)" }} />
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--accent-2)", border: "1px solid var(--border)" }} />
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--accent-3)", border: "1px solid var(--border)" }} />
        <span style={{ marginLeft: "auto", fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-muted)" }}>preview.tsx</span>
      </div>
      <div style={{ padding: 28, display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge>● Live</Badge>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <Button>Primary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
        <Card style={{ padding: 18 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
            <Avatar>
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 600 }}>Jane Doe</div>
              <div style={{ fontSize: 11, color: "var(--fg-muted)" }}>Designer at voidUI</div>
            </div>
          </div>
          <p style={{ fontSize: 13, color: "var(--fg-muted)", margin: 0, lineHeight: 1.55 }}>
            &ldquo;Tokens are the contract. Themes are the hat.&rdquo;
          </p>
        </Card>
        <div style={{ display: "flex", justifyContent: "space-between", padding: "10px 14px", border: "1.5px solid var(--border-subtle)", borderRadius: "var(--r-sm)", background: "var(--bg)" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--fg-muted)" }}>--primary</span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 600 }}>oklch(...)</span>
        </div>
      </div>
    </div>
  );
}

function ThemesStrip() {
  return (
    <section style={{ borderBottom: "1.5px solid var(--border)", padding: "64px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: 32 }}>
          <div>
            <div className="label" style={{ marginBottom: 8 }}>Section 01 — Themes</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 500, letterSpacing: "-0.03em", margin: 0 }}>
              Ten directions, one system
            </h2>
          </div>
          <Link href="/themes" style={{ textDecoration: "none" }}>
            <Button variant="outline" size="sm">All themes <ArrowRightIcon size={12} /></Button>
          </Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 12 }}>
          {THEMES.map((t) => (
            <ThemeChip key={t} theme={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ThemeChip({ theme }: { theme: Theme }) {
  const [bg, primary, fg] = SWATCHES[theme];
  const meta = THEME_META[theme];
  return (
    <Link href={`/themes#${theme}`} style={{ textDecoration: "none", color: "inherit" }}>
      <div className="card" style={{ padding: 0, overflow: "hidden", background: bg, color: fg, transition: "transform 180ms var(--ease-out)" }}>
        <div style={{ padding: "20px 16px 16px", borderBottom: `1.5px solid ${fg}22` }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 500, letterSpacing: "-0.01em" }}>{meta.label}</div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, opacity: 0.6, marginTop: 2 }}>{meta.zh}</div>
        </div>
        <div style={{ display: "flex", height: 36 }}>
          <div style={{ flex: 1, background: bg }} />
          <div style={{ flex: 1, background: primary }} />
          <div style={{ flex: 1, background: fg }} />
        </div>
      </div>
    </Link>
  );
}

function FeatureGrid() {
  const features = [
    { icon: PaletteIcon, title: "10 themes", body: "From earthy Terra to electric Cyber. Each is a complete token set, not a recolor." },
    { icon: LayersIcon, title: "Token-driven", body: "One CSS variable changes, every component follows. Change the contract, not the components." },
    { icon: BoxIcon, title: "30 components", body: "Buttons, forms, dialogs, tables, navigation. Built on Radix where it counts." },
    { icon: ZapIcon, title: "Motion tokens", body: "--motion-fast, --ease-spring. Press feedback feels right because it's tuned, not random." },
    { icon: ShieldIcon, title: "A11y first", body: "WCAG-AA contrast in light and dark. aria-invalid, focus rings, required asterisks — built in." },
    { icon: CodeIcon, title: "RSC ready", body: "Client boundaries are explicit. Your server tree stays a server tree." },
  ];
  return (
    <section style={{ borderBottom: "1.5px solid var(--border)", padding: "80px 24px", background: "var(--bg-elev)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ marginBottom: 48, maxWidth: 640 }}>
          <div className="label" style={{ marginBottom: 8 }}>Section 02 — Why voidUI</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 500, letterSpacing: "-0.03em", margin: 0, lineHeight: 1.05 }}>
            A library that takes design <em style={{ fontStyle: "italic", color: "var(--primary)" }}>seriously</em>
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 0, border: "1.5px solid var(--border)", background: "var(--bg)", borderRadius: "var(--r)", overflow: "hidden" }}>
          {features.map((f, i) => (
            <div key={f.title} style={{ padding: 28, borderRight: i % 3 !== 2 ? "1.5px solid var(--border-subtle)" : "none", borderBottom: i < 3 ? "1.5px solid var(--border-subtle)" : "none" }}>
              <div style={{ width: 36, height: 36, border: "1.5px solid var(--border)", background: "var(--primary)", color: "var(--primary-fg)", borderRadius: "var(--r-sm)", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: 16, boxShadow: "var(--sh-xs)" }}>
                <f.icon size={16} />
              </div>
              <h3 style={{ fontFamily: "var(--font-mono)", fontSize: 15, fontWeight: 600, margin: "0 0 8px", letterSpacing: "-0.01em" }}>{f.title}</h3>
              <p style={{ margin: 0, fontSize: 14, color: "var(--fg-muted)", lineHeight: 1.6 }}>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComponentsPreview() {
  const cats = [
    { title: "Inputs", items: ["Button", "Input", "Textarea", "Select", "Checkbox", "Radio", "Switch", "Slider"] },
    { title: "Display", items: ["Badge", "Avatar", "Card", "Alert", "Progress", "Table", "Tooltip"] },
    { title: "Overlays", items: ["Dialog", "Popover", "Menu", "Sonner", "Tabs", "Accordion", "Breadcrumb"] },
    { title: "Composite", items: ["Login", "ProductCard", "BasicCard", "CommandDisplay", "ToggleGroup"] },
  ];
  return (
    <section style={{ borderBottom: "1.5px solid var(--border)", padding: "80px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: 40 }}>
          <div>
            <div className="label" style={{ marginBottom: 8 }}>Section 03 — Components</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 500, letterSpacing: "-0.03em", margin: 0 }}>
              Thirty pieces, fully composed
            </h2>
          </div>
          <Link href="/components" style={{ textDecoration: "none" }}>
            <Button variant="outline" size="sm">All components <ArrowRightIcon size={12} /></Button>
          </Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
          {cats.map((cat) => (
            <Card key={cat.title} style={{ padding: 20 }}>
              <div className="label" style={{ marginBottom: 12 }}>{cat.title}</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                {cat.items.map((it) => (
                  <li key={it} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontFamily: "var(--font-mono)" }}>
                    <CheckIcon size={11} style={{ color: "var(--primary)" }} />
                    {it}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section style={{ padding: "96px 24px", background: "var(--fg)", color: "var(--bg)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.6, marginBottom: 16 }}>Ready when you are</div>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 500, lineHeight: 1.0, letterSpacing: "-0.035em", margin: "0 0 24px" }}>
          Start with the system. <em style={{ fontStyle: "italic", color: "var(--primary)" }}>Ship the product.</em>
        </h2>
        <p style={{ fontSize: 17, opacity: 0.75, lineHeight: 1.55, margin: "0 0 36px", maxWidth: 540, marginInline: "auto" }}>
          One install. Ten themes. No design debt. MIT licensed and ready for production.
        </p>
        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/components" style={{ textDecoration: "none" }}>
            <Button>Explore components <ArrowRightIcon size={14} /></Button>
          </Link>
          <a href="https://github.com/jiji262/voidUI" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
            <Button variant="outline" style={{ background: "transparent", color: "var(--bg)", borderColor: "var(--bg)" }}>
              <GithubIcon size={14} /> View source
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
