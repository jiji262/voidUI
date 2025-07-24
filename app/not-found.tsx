"use client";

import React from "react";
import Link from "next/link";
import { Button, Text } from "@/components/retroui";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center">
      <div className="container max-w-2xl mx-auto px-4 py-16 text-center">
        <Text as="h1" className="text-6xl font-bold mb-4">
          404
        </Text>
        <Text as="h2" className="text-3xl mb-6">
          Page Not Found
        </Text>
        <Text as="p" className="text-lg text-muted-foreground mb-8">
          Sorry, the page you are looking for does not exist or has been moved.
        </Text>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button size="lg">
              Return Home
            </Button>
          </Link>
          <Link href="/components">
            <Button variant="outline" size="lg">
              Browse Components
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}