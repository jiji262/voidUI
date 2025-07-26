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
      <section className="container max-w-6xl mx-auto px-6 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <Text as="h1" className="font-head text-5xl lg:text-7xl mb-6 leading-tight">
            Premium <span className="text-outlined">blocks</span>, templates & more
          </Text>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Premium blocks and templates inspired by the Neo-Brutalism design system. 
            Built with React, TailwindCSS, and Shadcn for modern, bold, and customizable interfaces.
          </p>
        </div>
      </section>

      {/* Blocks Grid */}
      <section className="container max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blockCategories.map((category) => (
            <Link key={category.href} href={category.href}>
              <div className="group rounded-lg border-2 border-black bg-white overflow-hidden transition-all duration-300 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="relative h-48 border-b-2 border-black overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                  <div className="relative h-full flex items-center justify-center">
                    <div className="text-6xl">{category.icon}</div>
                  </div>
                </div>
                <div className="p-6">
                  <Text as="h3" className="font-head text-xl font-medium mb-3 text-black">
                    {category.title}
                  </Text>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="font-head outline-hidden rounded-md cursor-pointer shadow-md hover:shadow-xs bg-white text-black border-2 border-black transition-all hover:translate-y-1 px-4 py-2 text-sm inline-flex items-center">
                    View Blocks
                    <ArrowRightIcon className="ml-2 h-3 w-3" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="bg-muted/20 py-16">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <Text as="h2" className="font-head text-3xl lg:text-4xl mb-6">
              How to Use <span className="text-outlined">Blocks</span>
            </Text>
            <div className="grid gap-6 md:grid-cols-3 text-left mt-12">
              <div className="bg-background border-2 border-black rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-primary border-2 border-black rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <Text as="h3" className="font-head text-lg font-medium mb-2">Browse</Text>
                <p className="text-muted-foreground text-sm">
                  Explore our collection of UI blocks organized by category.
                </p>
              </div>
              
              <div className="bg-background border-2 border-black rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-primary border-2 border-black rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <Text as="h3" className="font-head text-lg font-medium mb-2">Copy</Text>
                <p className="text-muted-foreground text-sm">
                  Copy the React/JSX code for any block you like.
                </p>
              </div>
              
              <div className="bg-background border-2 border-black rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-primary border-2 border-black rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <Text as="h3" className="font-head text-lg font-medium mb-2">Customize</Text>
                <p className="text-muted-foreground text-sm">
                  Paste into your project and customize to match your brand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}