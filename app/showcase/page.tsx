"use client";

import React, { useState } from "react";
import Link from "next/link";
import { GithubIcon, Search, BookOpen, Code2, Package } from "lucide-react";
import { CodeBlockWithCopy } from "@/components/ui/code-block-with-copy";
import {
  Text,
  Card,
  Button,
  Input,
  Badge,
  Tab,
  TabsTriggerList,
  TabsTrigger,
  TabsPanels,
  TabsContent,
} from "@/components/voidui";
import ErrorBoundary from "@/components/ui/error-boundary";
import { BreadcrumbNav } from "@/components/ui/breadcrumb-nav";
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
  const [activeTab, setActiveTab] = useState("preview");
  const examples = getAllComponentExamples(name);
  const basicExample = getComponentExample(name, "basic");

  // Dynamic import of preview component
  const PreviewComponent = React.lazy(
    () => import(`@/preview/components/${name.toLowerCase()}-style-default`)
      .catch(() => ({ default: () => <div>Preview not available</div> }))
  );

  return (
    <Card className="w-full shadow-md hover:shadow-lg transition-shadow" id={name.toLowerCase()}>
      <Card.Header>
        <div className="flex justify-between items-start">
          <div>
            <Card.Title className="text-xl">{name}</Card.Title>
            <Card.Description>
              <Badge variant="outline" className="mt-2">{category}</Badge>
            </Card.Description>
          </div>
          <div className="flex gap-2">
            <Link 
              href={`https://github.com/jiji262/voidui-next/blob/main/components/voidui/${name}.tsx`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm">
                <GithubIcon className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </Card.Header>
      <Card.Content>
        <Tab>
          <TabsTriggerList className="grid w-full grid-cols-3">
            <TabsTrigger>Preview</TabsTrigger>
            <TabsTrigger>Code</TabsTrigger>
            <TabsTrigger>Examples</TabsTrigger>
          </TabsTriggerList>
          <TabsPanels className="mt-4">
            <TabsContent>
              <div className="border rounded-md p-6 flex justify-center items-center min-h-[200px] bg-background">
                <ErrorBoundary>
                  <React.Suspense fallback={<div>Loading preview...</div>}>
                    <PreviewComponent />
                  </React.Suspense>
                </ErrorBoundary>
              </div>
            </TabsContent>
            <TabsContent>
              {basicExample && (
                <CodeBlockWithCopy
                  code={basicExample}
                  title="Basic Usage"
                  language="tsx"
                />
              )}
            </TabsContent>
            <TabsContent>
              <div className="space-y-4">
                {examples && Object.entries(examples).map(([variant, code]) => (
                  <CodeBlockWithCopy
                    key={variant}
                    code={code}
                    title={variant.charAt(0).toUpperCase() + variant.slice(1)}
                    language="tsx"
                  />
                ))}
              </div>
            </TabsContent>
          </TabsPanels>
        </Tab>
      </Card.Content>
    </Card>
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
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="border-b border-border bg-muted/30">
        <div className="container max-w-7xl mx-auto px-4 lg:px-0 py-16">
          <div className="text-center mb-8">
            <Text as="h1" className="text-4xl lg:text-5xl mb-4">
              VoidUI <span className="text-outlined">Component Library</span>
            </Text>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive collection of retro-styled React components. 
              Copy the code and customize to fit your needs.
            </p>
          </div>
          
          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link href="https://www.npmjs.com/package/@voidui/components" target="_blank">
              <Button size="lg">
                <Package className="mr-2 h-4 w-4" />
                Install Package
              </Button>
            </Link>
            <Link href="/demo">
              <Button variant="outline" size="lg">
                <Code2 className="mr-2 h-4 w-4" />
                Live Playground
              </Button>
            </Link>
            <Link href="https://github.com/jiji262/voidui-next" target="_blank">
              <Button variant="outline" size="lg">
                <BookOpen className="mr-2 h-4 w-4" />
                Documentation
              </Button>
            </Link>
          </div>

          {/* Installation */}
          <div className="max-w-2xl mx-auto">
            <CodeBlockWithCopy
              code="npm install @voidui/components"
              title="Installation"
              language="bash"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container max-w-7xl mx-auto px-4 lg:px-0 py-8">
        {/* Search and Filter Bar */}
        <div className="sticky top-0 z-10 bg-background py-4 mb-8 border-b border-border">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search components..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2 flex-wrap">
              <Button
                variant={selectedCategory === "All" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("All")}
              >
                All
              </Button>
              {Object.keys(componentCategories).map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Component Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {Object.entries(filteredComponents).map(([category, components]) => (
            components.map((component) => (
              <ComponentShowcase
                key={component}
                name={component}
                category={category}
              />
            ))
          ))}
        </div>

        {/* No Results */}
        {Object.keys(filteredComponents).length === 0 && (
          <div className="text-center py-16">
            <Text as="h3" className="text-xl mb-2">No components found</Text>
            <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      <BackToTop />

      {/* Footer */}
      <footer className="border-t border-border py-16 mt-16">
        <div className="container max-w-7xl mx-auto px-4 lg:px-0">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <Text as="h4" className="text-lg mb-4">VoidUI</Text>
              <p className="text-muted-foreground text-sm">
                Beautiful void-styled components for modern React applications.
              </p>
            </div>
            
            <div>
              <Text as="h4" className="text-lg mb-4">Resources</Text>
              <div className="space-y-2 text-sm">
                <div><Link href="/showcase" className="text-muted-foreground hover:text-foreground">Component Library</Link></div>
                <div><Link href="/demo" className="text-muted-foreground hover:text-foreground">Playground</Link></div>
                <div><Link href="/blocks" className="text-muted-foreground hover:text-foreground">Building Blocks</Link></div>
              </div>
            </div>
            
            <div>
              <Text as="h4" className="text-lg mb-4">Community</Text>
              <div className="space-y-2 text-sm">
                <div><Link href="https://github.com/jiji262/voidui-next" target="_blank" className="text-muted-foreground hover:text-foreground">GitHub</Link></div>
                <div><Link href="https://www.npmjs.com/package/@voidui/components" target="_blank" className="text-muted-foreground hover:text-foreground">NPM Package</Link></div>
                <div><Link href="https://discord.gg/voidui" target="_blank" className="text-muted-foreground hover:text-foreground">Discord</Link></div>
              </div>
            </div>
            
            <div>
              <Text as="h4" className="text-lg mb-4">Stay Updated</Text>
              <p className="text-sm text-muted-foreground mb-4">
                Get notified about new components and updates.
              </p>
              <div className="flex gap-2">
                <Input placeholder="Enter email" className="flex-1" />
                <Button size="sm">Subscribe</Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 VoidUI. Built with React, TypeScript, and TailwindCSS.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}