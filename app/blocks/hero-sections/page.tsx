"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Text, Button, Card } from "@/components/retroui";
import { ArrowRightIcon, PlayIcon, StarIcon, CheckIcon } from "lucide-react";
import { BlockPreview } from "@/components/ui/block-preview";

export default function HeroSectionsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="container max-w-6xl mx-auto px-4 lg:px-0 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <Text as="h1" className="text-4xl lg:text-5xl mb-6">
            Hero <span className="text-outlined">Sections</span>
          </Text>
          <p className="text-lg text-muted-foreground mb-8">
            Eye-catching hero sections to make a great first impression. Perfect for landing pages, 
            product launches, and marketing websites.
          </p>
        </div>
      </section>

      {/* Hero Blocks */}
      <section className="container max-w-6xl mx-auto px-4 lg:px-0 pb-16 space-y-16">
        
        {/* Hero Block 1: Simple Center */}
        <BlockPreview
          title="Simple Centered Hero"
          description="A clean, centered hero section perfect for landing pages"
          code={`<section className="text-center max-w-3xl mx-auto py-16">
  <Text as="h1" className="text-4xl lg:text-6xl mb-6">
    Build Amazing
    <br />
    <span className="text-outlined">Products</span>
  </Text>
  <p className="text-lg text-muted-foreground mb-8">
    Create stunning web applications with our modern component library. 
    Fast, accessible, and beautifully designed.
  </p>
  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    <Button size="lg">
      Get Started
      <ArrowRightIcon className="ml-2 h-4 w-4" />
    </Button>
    <Button variant="outline" size="lg">
      <PlayIcon className="mr-2 h-4 w-4" />
      Watch Demo
    </Button>
  </div>
</section>`}
        >
          <div className="text-center max-w-3xl mx-auto">
            <Text as="h1" className="text-4xl lg:text-6xl mb-6">
              Build Amazing
              <br />
              <span className="text-outlined">Products</span>
            </Text>
            <p className="text-lg text-muted-foreground mb-8">
              Create stunning web applications with our modern component library. 
              Fast, accessible, and beautifully designed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Get Started
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                <PlayIcon className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>
          </div>
        </BlockPreview>

        {/* Hero Block 2: Split Layout */}
        <Card className="p-8">
          <Text as="h3" className="text-xl mb-4">Split Layout Hero</Text>
          <div className="border-2 border-dashed border-muted p-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Text as="h1" className="text-4xl lg:text-5xl mb-6">
                  The Future of
                  <br />
                  <span className="text-outlined">Web Design</span>
                </Text>
                <p className="text-lg text-muted-foreground mb-8">
                  Revolutionary tools and components that help you build faster, 
                  better, and more accessible web applications.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg">
                    Start Building
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </div>
                <div className="flex items-center gap-6 mt-8">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    Trusted by 10,000+ developers
                  </span>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                  <Image
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=500&fit=crop"
                    alt="Hero illustration"
                    width={400}
                    height={400}
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Hero Block 3: With Features */}
        <Card className="p-8">
          <Text as="h3" className="text-xl mb-4">Hero with Features</Text>
          <div className="border-2 border-dashed border-muted p-8">
            <div className="text-center max-w-4xl mx-auto">
              <Text as="h1" className="text-4xl lg:text-6xl mb-6">
                Everything You Need to
                <br />
                <span className="text-outlined">Succeed</span>
              </Text>
              <p className="text-lg text-muted-foreground mb-8">
                Comprehensive toolkit with all the features you need to build, 
                deploy, and scale your applications.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg">
                  Start Free Trial
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  View Pricing
                </Button>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <CheckIcon className="h-6 w-6 text-primary" />
                  </div>
                  <Text as="h4" className="font-semibold mb-2">Easy Setup</Text>
                  <p className="text-sm text-muted-foreground">
                    Get started in minutes with our simple setup process
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <CheckIcon className="h-6 w-6 text-primary" />
                  </div>
                  <Text as="h4" className="font-semibold mb-2">Fast Performance</Text>
                  <p className="text-sm text-muted-foreground">
                    Optimized for speed and performance out of the box
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <CheckIcon className="h-6 w-6 text-primary" />
                  </div>
                  <Text as="h4" className="font-semibold mb-2">24/7 Support</Text>
                  <p className="text-sm text-muted-foreground">
                    Round-the-clock support from our expert team
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Hero Block 4: Minimal */}
        <Card className="p-8">
          <Text as="h3" className="text-xl mb-4">Minimal Hero</Text>
          <div className="border-2 border-dashed border-muted p-8">
            <div className="text-center max-w-2xl mx-auto py-16">
              <Text as="h1" className="text-5xl lg:text-7xl mb-8">
                <span className="text-outlined">Simple.</span>
                <br />
                Powerful.
              </Text>
              <p className="text-xl text-muted-foreground mb-12">
                The minimalist approach to building great products.
              </p>
              <Button size="lg" className="px-12">
                Get Started
              </Button>
            </div>
          </div>
        </Card>

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