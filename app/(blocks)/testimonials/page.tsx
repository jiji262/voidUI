"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Text, Button, Card } from "@/components/retroui";
import { StarIcon, QuoteIcon } from "lucide-react";

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="container max-w-6xl mx-auto px-4 lg:px-0 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <Text as="h1" className="text-4xl lg:text-5xl mb-6">
            Testimonial <span className="text-outlined">Sections</span>
          </Text>
          <p className="text-lg text-muted-foreground mb-8">
            Social proof sections to build trust and credibility. Showcase customer 
            feedback and success stories effectively.
          </p>
        </div>
      </section>

      {/* Testimonial Blocks */}
      <section className="container max-w-6xl mx-auto px-4 lg:px-0 pb-16 space-y-16">
        
        {/* Simple Grid Testimonials */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Grid Layout Testimonials</Text>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6">
                This product has completely transformed how we work. The interface is 
                intuitive and the features are exactly what we needed.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 relative">
                  <Image
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                    alt="Customer"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <Text as="p" className="font-semibold text-sm">John Smith</Text>
                  <p className="text-xs text-muted-foreground">CEO, TechCorp</p>
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