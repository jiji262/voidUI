"use client";

import React, { useState } from "react";
import Link from "next/link";
import { GithubIcon, Search, BookOpen, Code2, Package } from "lucide-react";
import { CodeBlockWithCopy } from "@/components/ui/code-block-with-copy";
import ErrorBoundary from "@/components/ui/error-boundary";
import { BackToTop } from "@/components/ui/back-to-top";
import { getAllComponentExamples, getComponentExample } from "@/lib/component-code-examples";

// Component categories
const componentCategories = {
  "Core": ["Button", "IconButton", "Toggle", "ToggleGroup"],
  "Forms": ["Input", "Textarea", "Checkbox", "Radio", "Select", "Switch", "Slider", "Label"],
  "Layout": ["Card", "Accordion", "Tab", "Table", "Breadcrumb"],
  "Feedback": ["Alert", "Badge", "Progress", "Sonner", "Tooltip"],
  "Overlay": ["Dialog", "Menu", "Popover"],
  "Display": ["Avatar", "Text", "CommandDisplay"],
};

interface ComponentShowcaseProps {
  name: string;
  category: string;
}

const ComponentShowcase: React.FC<ComponentShowcaseProps> = ({ name, category }) => {
  const [tab, setTab] = useState<"preview" | "code" | "examples">("preview");
  const examples = getAllComponentExamples(name);
  const basicExample = getComponentExample(name, "basic");

  // Dynamic import of preview component
  const PreviewComponent = React.lazy(
    () =>
      import(`@/preview/components/${name.toLowerCase()}-style-default`).catch(() => ({
        default: () => (
          <div style={{ color: "var(--fg-subtle)", fontSize: 13 }}>Preview not available</div>
        ),
      })),
  );

  return (
    <div className="card" style={{ overflow: "hidden", padding: 0 }} id={name.toLowerCase()}>
      {/* Chrome strip — matches design's ComponentBlock */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 16px",
          borderBottom: "1.5px solid var(--border)",
          background: "var(--bg)",
          gap: 12,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            {name}
          </span>
          <span className="badge ghost">{category.toLowerCase()}</span>
        </div>
        <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
          {(["preview", "code", "examples"] as const).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                padding: "4px 10px",
                border: "1.5px solid",
                borderColor: tab === t ? "var(--border)" : "transparent",
                background: tab === t ? "var(--primary)" : "transparent",
                color: tab === t ? "var(--primary-fg)" : "var(--fg-muted)",
                borderRadius: 2,
                cursor: "pointer",
                fontWeight: tab === t ? 600 : 500,
              }}
            >
              {t}
            </button>
          ))}
          <Link
            href={`https://github.com/jiji262/voidUI/blob/main/components/voidui/${name}.tsx`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", marginLeft: 4 }}
          >
            <button className="btn ghost sm" aria-label={`${name} source on GitHub`}>
              <GithubIcon style={{ width: 13, height: 13 }} />
            </button>
          </Link>
        </div>
      </div>

      <div
        style={{
          padding: 24,
          background: "var(--bg-elev)",
          minHeight: 160,
          display: "flex",
          alignItems: tab === "preview" ? "center" : "flex-start",
          justifyContent: tab === "preview" ? "center" : "flex-start",
        }}
      >
        {tab === "preview" ? (
          <ErrorBoundary>
            <React.Suspense
              fallback={
                <div style={{ color: "var(--fg-muted)", fontSize: 13 }}>Loading preview…</div>
              }
            >
              <PreviewComponent />
            </React.Suspense>
          </ErrorBoundary>
        ) : tab === "code" ? (
          basicExample ? (
            <div style={{ width: "100%" }}>
              <CodeBlockWithCopy code={basicExample} title="Basic usage" language="tsx" />
            </div>
          ) : (
            <div style={{ color: "var(--fg-subtle)", fontSize: 13 }}>No example available.</div>
          )
        ) : examples && Object.keys(examples).length > 0 ? (
          <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 12 }}>
            {Object.entries(examples).map(([variant, code]) => (
              <CodeBlockWithCopy
                key={variant}
                code={code}
                title={variant.charAt(0).toUpperCase() + variant.slice(1)}
                language="tsx"
              />
            ))}
          </div>
        ) : (
          <div style={{ color: "var(--fg-subtle)", fontSize: 13 }}>No extra examples.</div>
        )}
      </div>
    </div>
  );
};

export default function ShowcasePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter components based on search and category
  const filteredComponents = Object.entries(componentCategories).reduce((acc, [category, components]) => {
    if (selectedCategory !== "All" && selectedCategory !== category) return acc;
    
    const filtered = components.filter(component =>
      component.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    if (filtered.length > 0) {
      acc[category] = filtered;
    }
    
    return acc;
  }, {} as Record<string, string[]>);

  return (
    <main>
      {/* Hero Section — design rhythm: label · 52px mono display · 16px desc */}
      <section
        style={{
          padding: "64px 24px 32px",
          borderBottom: "1.5px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="label" style={{ marginBottom: 12 }}>
            Library · 42 components
          </div>
          <h1
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 52,
              fontWeight: 500,
              letterSpacing: "-0.03em",
              margin: "0 0 12px",
              lineHeight: 1,
            }}
          >
            Components
          </h1>
          <p
            style={{
              fontSize: 16,
              color: "var(--fg-muted)",
              maxWidth: 600,
              lineHeight: 1.65,
              margin: "0 0 24px",
            }}
          >
            Every primitive in the voidUI library. Copy the code and customize to fit your needs.
            中英文混排、八套主题、无忘录构建。
          </p>

          {/* Quick actions — design btn shadow/border rhythm */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 24 }}>
            <Link
              href="https://www.npmjs.com/package/@voidui/components"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <button className="btn">
                <Package className="h-4 w-4" />
                Install Package
              </button>
            </Link>
            <Link href="/demo" style={{ textDecoration: "none" }}>
              <button className="btn outline">
                <Code2 className="h-4 w-4" />
                Live Playground
              </button>
            </Link>
            <Link
              href="https://github.com/jiji262/voidUI"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <button className="btn outline">
                <BookOpen className="h-4 w-4" />
                Documentation
              </button>
            </Link>
          </div>

          {/* Installation */}
          <div style={{ maxWidth: 640 }}>
            <CodeBlockWithCopy
              code="pnpm add @voidui/components"
              title="Installation"
              language="bash"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 24px" }}>
        {/* Search and Filter Bar */}
        <div
          style={{
            display: "flex",
            gap: 12,
            marginBottom: 32,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div style={{ position: "relative", flex: 1, minWidth: 240 }}>
            <Search
              style={{
                position: "absolute",
                left: 12,
                top: "50%",
                transform: "translateY(-50%)",
                color: "var(--fg-muted)",
                width: 16,
                height: 16,
                pointerEvents: "none",
              }}
            />
            <input
              className="input"
              style={{ paddingLeft: 38 }}
              placeholder="Search components..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {["All", ...Object.keys(componentCategories)].map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={active ? "btn sm" : "btn sm outline"}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Component Grid */}
        <div
          className="vui-components-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: 16,
          }}
        >
          {Object.entries(filteredComponents).map(([category, components]) =>
            components.map((component) => (
              <ComponentShowcase key={component} name={component} category={category} />
            )),
          )}
        </div>

        {/* No Results */}
        {Object.keys(filteredComponents).length === 0 && (
          <div style={{ textAlign: "center", padding: "64px 0" }}>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 20,
                fontWeight: 500,
                marginBottom: 8,
              }}
            >
              No components found
            </div>
            <p style={{ color: "var(--fg-muted)", fontSize: 14, margin: 0 }}>
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>

      <BackToTop />
    </main>
  );
}
