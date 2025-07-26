"use client";

import React from "react";
import Link from "next/link";
import { Text, Button } from "@/components/retroui";
import { BlockPreview } from "@/components/ui/block-preview";
import { EnhancedCodeBlock } from "@/components/ui/enhanced-code-block";

export default function TestFeaturesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="container max-w-6xl mx-auto px-4 lg:px-0 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <Text as="h1" className="text-4xl lg:text-5xl mb-6">
            Feature <span className="text-outlined">Testing</span>
          </Text>
          <p className="text-lg text-muted-foreground mb-8">
            Testing code copy and syntax highlighting features
          </p>
        </div>
      </section>

      {/* Test Blocks */}
      <section className="container max-w-6xl mx-auto px-4 lg:px-0 pb-16 space-y-16">
        
        {/* Test BlockPreview Component */}
        <BlockPreview
          title="Simple Button Component"
          description="A basic button component with copy functionality"
          code={`import { Button } from "@/components/retroui";

export function SimpleButton() {
  return (
    <Button 
      onClick={() => console.log("Clicked!")}
      className="bg-primary text-white"
    >
      Click Me
    </Button>
  );
}`}
          language="jsx"
        >
          <div className="flex gap-4">
            <Button>Primary Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="secondary">Secondary Button</Button>
          </div>
        </BlockPreview>

        {/* Test Enhanced Code Block */}
        <div>
          <Text as="h3" className="text-2xl mb-6">Enhanced Code Block Test</Text>
          
          <div className="space-y-6">
            <div>
              <Text as="h4" className="text-lg mb-4">JSX/TypeScript</Text>
              <EnhancedCodeBlock
                title="React Component"
                language="tsx"
                showLineNumbers={true}
                code={`interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  disabled?: boolean;
}

export function Button({ 
  children, 
  variant = "primary", 
  size = "md",
  onClick,
  disabled = false 
}: ButtonProps) {
  const baseClasses = "font-medium rounded-lg transition-colors";
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-600 text-white hover:bg-gray-700", 
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
  };
  
  return (
    <button
      className={\`\${baseClasses} \${variantClasses[variant]}\`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}`}
              />
            </div>

            <div>
              <Text as="h4" className="text-lg mb-4">CSS</Text>
              <EnhancedCodeBlock
                title="Button Styles"
                language="css"
                code={`.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 0.375rem;
  border: 1px solid transparent;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}

.button-primary {
  background-color: #3b82f6;
  color: #ffffff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.button-primary:hover {
  background-color: #2563eb;
  transform: translateY(-1px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.button-outline {
  background-color: transparent;
  border-color: #3b82f6;
  color: #3b82f6;
}

.button-outline:hover {
  background-color: #3b82f6;
  color: #ffffff;
}`}
              />
            </div>

            <div>
              <Text as="h4" className="text-lg mb-4">Bash/Shell</Text>
              <EnhancedCodeBlock
                title="Installation Commands"
                language="bash"
                code={`# Install dependencies
npm install @radix-ui/react-slot class-variance-authority
npm install -D tailwindcss postcss autoprefixer

# Initialize Tailwind CSS
npx tailwindcss init -p

# Add to your CSS file
echo "@tailwind base;" >> ./src/globals.css
echo "@tailwind components;" >> ./src/globals.css  
echo "@tailwind utilities;" >> ./src/globals.css

# Start development server
npm run dev

# Build for production
npm run build

# Deploy to Vercel
vercel --prod`}
              />
            </div>

            <div>
              <Text as="h4" className="text-lg mb-4">HTML</Text>
              <EnhancedCodeBlock
                title="HTML Structure"
                language="html"
                code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>RetroUI Components</title>
  <link rel="stylesheet" href="./styles.css">
</head>
<body>
  <header class="header">
    <nav class="navigation" role="navigation" aria-label="Main navigation">
      <div class="nav-brand">
        <img src="./logo.png" alt="RetroUI Logo" class="logo">
        <span class="brand-text">RetroUI</span>
      </div>
      <ul class="nav-links">
        <li><a href="#home" class="nav-link">Home</a></li>
        <li><a href="#components" class="nav-link">Components</a></li>
        <li><a href="#docs" class="nav-link">Documentation</a></li>
      </ul>
    </nav>
  </header>
  
  <main class="main-content">
    <section class="hero-section">
      <h1 class="hero-title">Build Amazing UIs</h1>
      <p class="hero-description">Modern components for modern web apps</p>
      <button class="cta-button" type="button">Get Started</button>
    </section>
  </main>
  
  <script src="./script.js"></script>
</body>
</html>`}
              />
            </div>
          </div>
        </div>

      </section>

      {/* Back to Blocks */}
      <section className="container max-w-6xl mx-auto px-4 lg:px-0 pb-16">
        <div className="text-center">
          <Link href="/blocks">
            <Button variant="outline">
              ← Back to All Blocks
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}