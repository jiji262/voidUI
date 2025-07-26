"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Text, Button, Card, Badge } from "@/components/retroui";
import { ArrowRightIcon, HeartIcon, ShareIcon, CalendarIcon, UserIcon, StarIcon } from "lucide-react";

export default function CardsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="container max-w-6xl mx-auto px-4 lg:px-0 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <Text as="h1" className="text-4xl lg:text-5xl mb-6">
            Card <span className="text-outlined">Components</span>
          </Text>
          <p className="text-lg text-muted-foreground mb-8">
            Versatile card components for displaying content. Perfect for blog posts, 
            product showcases, team members, and more.
          </p>
        </div>
      </section>

      {/* Card Blocks */}
      <section className="container max-w-6xl mx-auto px-4 lg:px-0 pb-16 space-y-16">
        
        {/* Product Cards */}
        <div>
          <Text as="h3" className="text-2xl mb-6">Product Cards</Text>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="overflow-hidden">
              <div className="aspect-square relative">
                <Image
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop"
                  alt="Product"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary">New</Badge>
                </div>
              </div>
              <div className="p-6">
                <Text as="h4" className="text-lg font-semibold mb-2">Premium Headphones</Text>
                <p className="text-muted-foreground text-sm mb-4">
                  High-quality wireless headphones with noise cancellation
                </p>
                <div className="flex items-center justify-between">
                  <Text as="span" className="text-2xl font-bold">$299</Text>
                  <Button size="sm">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </Card>
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