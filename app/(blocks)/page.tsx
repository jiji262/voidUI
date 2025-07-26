"use client";

import React from "react";
import Link from "next/link";
import { Text, Button, Card } from "@/components/retroui";
import { ArrowRightIcon } from "lucide-react";

const blockCategories = [
  {
    title: "Hero Sections",
    description: "Eye-catching hero sections to make a great first impression",
    href: "/blocks/hero-sections",
    icon: "🚀",
  },
  {
    title: "Cards",
    description: "Versatile card components for displaying content",
    href: "/blocks/cards",
    icon: "🃏",
  },
  {
    title: "Forms",
    description: "Beautiful and functional form layouts",
    href: "/blocks/forms",
    icon: "📝",
  },
  {
    title: "Navigation",
    description: "Navigation bars and menu components",
    href: "/blocks/navbar",
    icon: "🧭",
  },
  {
    title: "Testimonials",
    description: "Social proof sections to build trust",
    href: "/blocks/testimonials",
    icon: "💬",
  },
  {
    title: "Pricing Tables",
    description: "Clear and compelling pricing sections",
    href: "/blocks/pricing-tables",
    icon: "💰",
  },
  {
    title: "Feature Blocks",
    description: "Showcase your product features effectively",
    href: "/blocks/feature-blocks",
    icon: "⭐",
  },
  {
    title: "Call to Action",
    description: "Convert visitors with compelling CTAs",
    href: "/blocks/call-to-action",
    icon: "📢",
  },
  {
    title: "FAQ",
    description: "Frequently asked questions sections",
    href: "/blocks/faq",
    icon: "❓",
  },
  {
    title: "Stats",
    description: "Display impressive numbers and metrics",
    href: "/blocks/stats",
    icon: "📊",
  },
  {
    title: "Profile",
    description: "User profile and team member sections",
    href: "/blocks/profile",
    icon: "👤",
  },
  {
    title: "Authentication",
    description: "Login and signup form layouts",
    href: "/blocks/authentication",
    icon: "🔐",
  },
  {
    title: "Bento Grids",
    description: "Modern grid layouts for content organization",
    href: "/blocks/bento-grids",
    icon: "🍱",
  },
  {
    title: "Blogs",
    description: "Blog post layouts and article sections",
    href: "/blocks/blogs",
    icon: "📰",
  },
  {
    title: "AI",
    description: "AI-powered interface components",
    href: "/blocks/ai",
    icon: "🤖",
  },
];

export default function BlocksPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container max-w-6xl mx-auto px-4 lg:px-0 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <Text as="h1" className="text-4xl lg:text-5xl mb-6">
            UI <span className="text-outlined">Blocks</span>
          </Text>
          <p className="text-lg text-muted-foreground mb-8">
            Premium UI blocks built with RetroUI components. Copy and paste ready-to-use 
            sections for your projects. Each block is carefully crafted with retro aesthetics 
            and modern functionality.
          </p>
        </div>
      </section>

      {/* Blocks Grid */}
      <section className="container max-w-6xl mx-auto px-4 lg:px-0 pb-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blockCategories.map((category) => (
            <Link key={category.href} href={category.href}>
              <Card className="p-6 h-full hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{category.icon}</div>
                  <div className="flex-1">
                    <Text as="h3" className="text-lg font-semibold mb-2">
                      {category.title}
                    </Text>
                    <p className="text-muted-foreground text-sm mb-4">
                      {category.description}
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      View Blocks
                      <ArrowRightIcon className="ml-2 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="container max-w-6xl mx-auto px-4 lg:px-0 py-16 bg-muted/30">
        <div className="text-center max-w-3xl mx-auto">
          <Text as="h2" className="text-3xl mb-6">
            How to Use <span className="text-outlined">Blocks</span>
          </Text>
          <div className="grid gap-6 md:grid-cols-3 text-left">
            <div className="bg-background p-6 rounded-lg border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">1️⃣</span>
              </div>
              <Text as="h3" className="text-lg mb-2">Browse</Text>
              <p className="text-muted-foreground text-sm">
                Explore our collection of UI blocks organized by category.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">2️⃣</span>
              </div>
              <Text as="h3" className="text-lg mb-2">Copy</Text>
              <p className="text-muted-foreground text-sm">
                Copy the React/JSX code for any block you like.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">3️⃣</span>
              </div>
              <Text as="h3" className="text-lg mb-2">Customize</Text>
              <p className="text-muted-foreground text-sm">
                Paste into your project and customize to match your brand.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}