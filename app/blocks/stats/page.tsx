"use client";

import React from "react";
import Link from "next/link";
import { Text, Button, Card } from "@/components/retroui";
import { TrendingUpIcon, UsersIcon, DollarSignIcon, BarChart3Icon, StarIcon, ZapIcon } from "lucide-react";
import { CodeDisplay } from "@/components/CodeDisplay";

// Code snippet for Stats Dashboard
const statsDashboardCode = `import React from "react";
import { TrendingUpIcon, UsersIcon, DollarSignIcon, BarChart3Icon } from "lucide-react";

const StatsDashboard = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white border-2 border-black rounded-lg p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">Company Statistics</h3>
        <p className="text-gray-600">Real-time metrics and achievements</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="text-center p-6 bg-gray-50 border-2 border-black rounded-lg">
          <div className="w-12 h-12 bg-blue-300 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-black">
            <UsersIcon className="h-6 w-6" />
          </div>
          <div className="text-3xl font-bold mb-2">10,000+</div>
          <p className="text-gray-600">Happy Customers</p>
        </div>

        <div className="text-center p-6 bg-gray-50 border-2 border-black rounded-lg">
          <div className="w-12 h-12 bg-green-300 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-black">
            <TrendingUpIcon className="h-6 w-6" />
          </div>
          <div className="text-3xl font-bold mb-2">99.9%</div>
          <p className="text-gray-600">Uptime</p>
        </div>

        <div className="text-center p-6 bg-gray-50 border-2 border-black rounded-lg">
          <div className="w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-black">
            <DollarSignIcon className="h-6 w-6" />
          </div>
          <div className="text-3xl font-bold mb-2">$2.5M</div>
          <p className="text-gray-600">Revenue</p>
        </div>

        <div className="text-center p-6 bg-gray-50 border-2 border-black rounded-lg">
          <div className="w-12 h-12 bg-purple-300 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-black">
            <BarChart3Icon className="h-6 w-6" />
          </div>
          <div className="text-3xl font-bold mb-2">150+</div>
          <p className="text-gray-600">Countries</p>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t-2 border-black">
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-green-600 mb-1">↗ 23%</div>
            <p className="text-sm text-gray-600">Growth this month</p>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600 mb-1">4.9★</div>
            <p className="text-sm text-gray-600">Customer rating</p>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-600 mb-1">24/7</div>
            <p className="text-sm text-gray-600">Support available</p>
          </div>
        </div>
      </div>
    </div>
  );
};`;

// Stats Dashboard Component
const StatsDashboard = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white border-2 border-black rounded-lg p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">Company Statistics</h3>
        <p className="text-gray-600">Real-time metrics and achievements</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="text-center p-6 bg-gray-50 border-2 border-black rounded-lg">
          <div className="w-12 h-12 bg-blue-300 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-black">
            <UsersIcon className="h-6 w-6" />
          </div>
          <div className="text-3xl font-bold mb-2">10,000+</div>
          <p className="text-gray-600">Happy Customers</p>
        </div>

        <div className="text-center p-6 bg-gray-50 border-2 border-black rounded-lg">
          <div className="w-12 h-12 bg-green-300 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-black">
            <TrendingUpIcon className="h-6 w-6" />
          </div>
          <div className="text-3xl font-bold mb-2">99.9%</div>
          <p className="text-gray-600">Uptime</p>
        </div>

        <div className="text-center p-6 bg-gray-50 border-2 border-black rounded-lg">
          <div className="w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-black">
            <DollarSignIcon className="h-6 w-6" />
          </div>
          <div className="text-3xl font-bold mb-2">$2.5M</div>
          <p className="text-gray-600">Revenue</p>
        </div>

        <div className="text-center p-6 bg-gray-50 border-2 border-black rounded-lg">
          <div className="w-12 h-12 bg-purple-300 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-black">
            <BarChart3Icon className="h-6 w-6" />
          </div>
          <div className="text-3xl font-bold mb-2">150+</div>
          <p className="text-gray-600">Countries</p>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t-2 border-black">
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-green-600 mb-1">↗ 23%</div>
            <p className="text-sm text-gray-600">Growth this month</p>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600 mb-1">4.9★</div>
            <p className="text-sm text-gray-600">Customer rating</p>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-600 mb-1">24/7</div>
            <p className="text-sm text-gray-600">Support available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function StatsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="container max-w-6xl mx-auto px-6 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Statistics <span className="bg-yellow-300 px-2 py-1 transform -rotate-1 inline-block">Blocks</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Display impressive numbers and metrics with these statistics sections.
            Perfect for showcasing achievements, user counts, and business metrics.
          </p>
        </div>
      </section>

      {/* Stats Blocks */}
      <section className="container max-w-6xl mx-auto px-6 py-16 space-y-16">

        {/* Stats Dashboard */}
        <div className="space-y-6">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 bg-gray-50">
            <StatsDashboard />
          </div>
          <CodeDisplay title="Stats Dashboard" code={statsDashboardCode} />
        </div>

      </section>

      {/* Back to Blocks */}
      <section className="container max-w-6xl mx-auto px-6 pb-16">
        <div className="text-center">
          <Link href="/blocks">
            <Button variant="outline" className="font-head">
              ← Back to All Blocks
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}