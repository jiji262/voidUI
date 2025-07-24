"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon, ArrowRightIcon } from "lucide-react";
import { Button, Text } from "@/components/retroui";
import { CodeBlock } from "@/components/ui/code-block";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container max-w-6xl mx-auto px-4 lg:px-0 text-gray-900 flex justify-center items-center lg:gap-28 xl:gap-32 py-28">
        <div className="text-center lg:text-left w-full lg:w-2/3">
          <Text as="h1" className="text-5xl text-foreground lg:text-6xl mb-6">
            RetroUI
            <br />
            <span className="text-outlined">Component Showcase</span>
          </Text>

          <p className="text-lg text-muted-foreground mb-8">
            A collection of retro-styled React components built with TailwindCSS. 
            Bring nostalgic aesthetics to modern web applications with our comprehensive 
            component library featuring buttons, forms, navigation, and more.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link href="/components">
              <Button size="lg" className="w-full sm:w-auto">
                Explore Components
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/demo">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Live Demo
              </Button>
            </Link>
            <Link
              href="https://github.com/Logging-Stuff/retroui"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <GithubIcon size="16" className="mr-2" />
                GitHub
              </Button>
            </Link>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/3">
          <Image
            alt="RetroUI showcase"
            src="/images/tv_radio.png"
            width={500}
            height={500}
            className="h-full w-full object-contain"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="container max-w-6xl mx-auto px-4 lg:px-0 py-16">
        <Text as="h2" className="text-3xl text-center mb-16">
          Why Choose <span className="text-outlined">RetroUI</span>?
        </Text>
        
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎨</span>
            </div>
            <Text as="h3" className="text-xl mb-2">Retro Design</Text>
            <p className="text-muted-foreground">
              Nostalgic aesthetics with modern functionality. Perfect for creating unique, memorable user interfaces.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <Text as="h3" className="text-xl mb-2">Built with React</Text>
            <p className="text-muted-foreground">
              Modern React components with TypeScript support. Easy to integrate into your existing projects.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <Text as="h3" className="text-xl mb-2">TailwindCSS</Text>
            <p className="text-muted-foreground">
              Styled with TailwindCSS for easy customization and consistent design system integration.
            </p>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="container max-w-6xl mx-auto px-4 lg:px-0 py-16 bg-muted/30">
        <div className="text-center max-w-3xl mx-auto">
          <Text as="h2" className="text-3xl mb-8">
            Get Started with <span className="text-outlined">RetroUI</span>
          </Text>
          
          <div className="grid gap-6 md:grid-cols-2 text-left">
            <div className="bg-background p-6 rounded-lg border">
              <Text as="h3" className="text-lg mb-3">1. Installation</Text>
              <CodeBlock code="npm install @retroui/components" language="bash" />
            </div>
            
            <div className="bg-background p-6 rounded-lg border">
              <Text as="h3" className="text-lg mb-3">2. Import Components</Text>
              <CodeBlock code="import { Button } from '@retroui/components'" language="jsx" />
            </div>
          </div>
          
          <p className="text-muted-foreground mt-8 mb-8">
            Start building retro-styled interfaces in minutes. Copy components directly from our showcase or install the package.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/components">
              <Button size="lg">
                Browse Components
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/demo">
              <Button variant="outline" size="lg">
                View Live Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-16">
        <div className="container max-w-6xl mx-auto px-4 lg:px-0">
          <div className="grid gap-8 md:grid-cols-3 text-center md:text-left">
            <div>
              <Text as="h4" className="text-lg mb-4">RetroUI</Text>
              <p className="text-muted-foreground text-sm">
                Retro-styled React components for modern web applications.
              </p>
            </div>
            
            <div>
              <Text as="h4" className="text-lg mb-4">Explore</Text>
              <div className="space-y-2 text-sm">
                <div><Link href="/components" className="text-muted-foreground hover:text-foreground">Component Library</Link></div>
                <div><Link href="/demo" className="text-muted-foreground hover:text-foreground">Live Demo</Link></div>
                <div><Link href="https://github.com/jiji262/retroui-next" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">GitHub Repository</Link></div>
              </div>
            </div>
            
            <div>
              <Text as="h4" className="text-lg mb-4">Get Started</Text>
              <div className="flex flex-col sm:flex-row md:flex-col gap-2">
                <Link href="/components">
                  <Button variant="outline" size="sm" className="w-full">
                    Browse Components
                  </Button>
                </Link>
                <Link
                  href="https://github.com/jiji262/retroui-next"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="sm" className="w-full">
                    <GithubIcon size="14" className="mr-2" />
                    Star on GitHub
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>Built with React and TailwindCSS. Open source and ready to use.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}