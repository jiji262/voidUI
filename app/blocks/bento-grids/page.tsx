"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Text, Button, Card } from "@/components/retroui";
import {
  BarChart3Icon,
  TrendingUpIcon,
  UsersIcon,
  ZapIcon,
  ShieldIcon,
  StarIcon,
  ArrowRightIcon,
  PlayIcon
} from "lucide-react";
import { CodeDisplay } from "@/components/CodeDisplay";

// Code snippet for bento grid component
const simpleBentoGridCode = `import React from "react";
import { Button } from "@/components/retroui";
import { BarChart3Icon, TrendingUpIcon, UsersIcon, ArrowRightIcon } from "lucide-react";

const SimpleBentoGrid = () => {
  return (
    <div className="max-w-6xl mx-auto bg-white border-2 border-black rounded-lg p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 h-96">
        {/* Main Feature Card */}
        <div className="md:col-span-2 bg-blue-100 border-2 border-black rounded-lg p-6">
          <div className="h-full flex flex-col justify-between">
            <div>
              <h4 className="text-xl font-bold mb-2">Welcome to Our Platform</h4>
              <p className="text-gray-600">
                Discover powerful features that help you build amazing products.
              </p>
            </div>
            <Button className="w-fit bg-black text-white hover:bg-gray-800">
              Get Started
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Analytics Card */}
        <div className="bg-green-100 border-2 border-black rounded-lg p-4 flex flex-col items-center justify-center text-center">
          <BarChart3Icon className="h-8 w-8 text-green-600 mb-2" />
          <h5 className="font-bold mb-1">Analytics</h5>
          <p className="text-sm text-gray-600">Real-time insights</p>
        </div>

        {/* Team Card */}
        <div className="bg-purple-100 border-2 border-black rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <UsersIcon className="h-5 w-5 text-purple-600" />
            <h5 className="font-bold">Team Collaboration</h5>
          </div>
          <p className="text-sm text-gray-600 mb-3">Work together seamlessly with your team members.</p>
          <div className="flex -space-x-2">
            <div className="w-6 h-6 bg-gray-300 rounded-full border-2 border-white"></div>
            <div className="w-6 h-6 bg-gray-400 rounded-full border-2 border-white"></div>
            <div className="w-6 h-6 bg-gray-500 rounded-full border-2 border-white"></div>
          </div>
          <p className="text-xs text-gray-500 mt-2">+12 team members</p>
        </div>

        {/* Performance Card */}
        <div className="md:col-span-2 bg-yellow-100 border-2 border-black rounded-lg p-4">
          <div className="flex items-center justify-between h-full">
            <div>
              <h5 className="font-bold mb-2">Performance Metrics</h5>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold">99.9%</div>
                  <p className="text-sm text-gray-600">Uptime</p>
                </div>
                <div>
                  <div className="text-2xl font-bold">&lt;50ms</div>
                  <p className="text-sm text-gray-600">Response</p>
                </div>
              </div>
            </div>
            <TrendingUpIcon className="h-12 w-12 text-yellow-600" />
          </div>
        </div>
      </div>
    </div>
  );
};`;

// Simple Bento Grid Component
const SimpleBentoGrid = () => {
  return (
    <div className="max-w-6xl mx-auto bg-white border-2 border-black rounded-lg p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 h-96">
        {/* Main Feature Card */}
        <div className="md:col-span-2 bg-blue-100 border-2 border-black rounded-lg p-6">
          <div className="h-full flex flex-col justify-between">
            <div>
              <h4 className="text-xl font-bold mb-2">Welcome to Our Platform</h4>
              <p className="text-gray-600">
                Discover powerful features that help you build amazing products.
              </p>
            </div>
            <Button className="w-fit bg-black text-white hover:bg-gray-800">
              Get Started
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Analytics Card */}
        <div className="bg-green-100 border-2 border-black rounded-lg p-4 flex flex-col items-center justify-center text-center">
          <BarChart3Icon className="h-8 w-8 text-green-600 mb-2" />
          <h5 className="font-bold mb-1">Analytics</h5>
          <p className="text-sm text-gray-600">Real-time insights</p>
        </div>

        {/* Team Card */}
        <div className="bg-purple-100 border-2 border-black rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <UsersIcon className="h-5 w-5 text-purple-600" />
            <h5 className="font-bold">Team Collaboration</h5>
          </div>
          <p className="text-sm text-gray-600 mb-3">Work together seamlessly with your team members.</p>
          <div className="flex -space-x-2">
            <div className="w-6 h-6 bg-gray-300 rounded-full border-2 border-white"></div>
            <div className="w-6 h-6 bg-gray-400 rounded-full border-2 border-white"></div>
            <div className="w-6 h-6 bg-gray-500 rounded-full border-2 border-white"></div>
          </div>
          <p className="text-xs text-gray-500 mt-2">+12 team members</p>
        </div>

        {/* Performance Card */}
        <div className="md:col-span-2 bg-yellow-100 border-2 border-black rounded-lg p-4">
          <div className="flex items-center justify-between h-full">
            <div>
              <h5 className="font-bold mb-2">Performance Metrics</h5>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold">99.9%</div>
                  <p className="text-sm text-gray-600">Uptime</p>
                </div>
                <div>
                  <div className="text-2xl font-bold">&lt;50ms</div>
                  <p className="text-sm text-gray-600">Response</p>
                </div>
              </div>
            </div>
            <TrendingUpIcon className="h-12 w-12 text-yellow-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function BentoGridsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="container max-w-6xl mx-auto px-6 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Bento <span className="bg-yellow-300 px-2 py-1 transform -rotate-1 inline-block">Grids</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Modern grid layouts inspired by Japanese bento boxes. Perfect for
            organizing content in visually appealing and functional layouts.
          </p>
        </div>
      </section>

      {/* Bento Grid Blocks */}
      <section className="container max-w-6xl mx-auto px-6 py-16 space-y-16">

        {/* Simple Bento Grid */}
        <div className="space-y-6">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 bg-gray-50">
            <SimpleBentoGrid />
          </div>
          <CodeDisplay title="Simple Bento Grid" code={simpleBentoGridCode} />
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