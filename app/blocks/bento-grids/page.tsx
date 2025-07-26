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

export default function BentoGridsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="container max-w-6xl mx-auto px-4 lg:px-0 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <Text as="h1" className="text-4xl lg:text-5xl mb-6">
            Bento <span className="text-outlined">Grids</span>
          </Text>
          <p className="text-lg text-muted-foreground mb-8">
            Modern grid layouts inspired by Japanese bento boxes. Perfect for 
            organizing content in visually appealing and functional layouts.
          </p>
        </div>
      </section>

      {/* Bento Grid Blocks */}
      <section className="container max-w-6xl mx-auto px-4 lg:px-0 pb-16 space-y-16">
        
        {/* Simple Bento Grid */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Simple Bento Grid</Text>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 h-96">
            <Card className="md:col-span-2 p-6 bg-gradient-to-br from-primary/10 to-primary/5">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <Text as="h4" className="text-xl font-bold mb-2">Welcome to Our Platform</Text>
                  <p className="text-muted-foreground">
                    Discover powerful features that help you build amazing products.
                  </p>
                </div>
                <Button className="w-fit">
                  Get Started
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
              <div className="h-full flex flex-col items-center justify-center text-center">
                <BarChart3Icon className="h-12 w-12 text-blue-600 mb-4" />
                <Text as="h5" className="font-semibold mb-2">Analytics</Text>
                <p className="text-sm text-muted-foreground">Real-time insights</p>
              </div>
            </Card>
            
            <Card className="lg:row-span-2 p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <UsersIcon className="h-8 w-8 text-green-600 mb-4" />
                  <Text as="h5" className="font-semibold mb-2">Team Collaboration</Text>
                  <p className="text-sm text-muted-foreground mb-4">
                    Work together seamlessly with your team members.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex -space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-8 h-8 bg-muted rounded-full border-2 border-background"></div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">+12 team members</p>
                </div>
              </div>
            </Card>
            
            <Card className="md:col-span-2 p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900">
              <div className="flex items-center justify-between h-full">
                <div>
                  <Text as="h5" className="font-semibold mb-2">Performance Metrics</Text>
                  <div className="flex items-center gap-4">
                    <div>
                      <Text as="div" className="text-2xl font-bold">99.9%</Text>
                      <p className="text-xs text-muted-foreground">Uptime</p>
                    </div>
                    <div>
                      <Text as="div" className="text-2xl font-bold">&lt;50ms</Text>
                      <p className="text-xs text-muted-foreground">Response</p>
                    </div>
                  </div>
                </div>
                <TrendingUpIcon className="h-12 w-12 text-purple-600" />
              </div>
            </Card>
          </div>
        </div>

        {/* Feature Showcase Bento */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Feature Showcase</Text>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2 lg:row-span-2 p-8 bg-gradient-to-br from-primary/10 to-primary/5">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <Text as="h4" className="text-2xl font-bold mb-4">
                    Build Faster with AI
                  </Text>
                  <p className="text-muted-foreground mb-6">
                    Our AI-powered tools help you create, optimize, and deploy 
                    applications 10x faster than traditional methods.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Intelligent code generation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Automated testing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Smart deployment</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button>
                    Try AI Features
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline">
                    <PlayIcon className="mr-2 h-4 w-4" />
                    Watch Demo
                  </Button>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 text-center bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900">
              <ZapIcon className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <Text as="h5" className="font-semibold mb-2">Lightning Fast</Text>
              <Text as="div" className="text-2xl font-bold mb-2">10x</Text>
              <p className="text-sm text-muted-foreground">Faster deployment</p>
            </Card>
            
            <Card className="p-6 text-center bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950 dark:to-red-900">
              <ShieldIcon className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <Text as="h5" className="font-semibold mb-2">Enterprise Security</Text>
              <Text as="div" className="text-2xl font-bold mb-2">SOC 2</Text>
              <p className="text-sm text-muted-foreground">Type II Certified</p>
            </Card>
            
            <Card className="lg:col-span-3 p-6 bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-indigo-950 dark:to-cyan-950">
              <div className="flex items-center justify-between">
                <div>
                  <Text as="h5" className="font-semibold mb-2">Customer Satisfaction</Text>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <Text as="span" className="text-2xl font-bold">4.9/5</Text>
                    <span className="text-muted-foreground">from 10,000+ reviews</span>
                  </div>
                </div>
                <Button variant="outline">View Reviews</Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Product Showcase Bento */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Product Showcase</Text>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[600px]">
            <Card className="md:col-span-2 md:row-span-2 p-8 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
              <div className="h-full flex flex-col">
                <div className="mb-6">
                  <Text as="h4" className="text-2xl font-bold mb-4">
                    Dashboard Overview
                  </Text>
                  <p className="text-muted-foreground">
                    Get a complete view of your business metrics and performance 
                    indicators in one centralized dashboard.
                  </p>
                </div>
                <div className="flex-1 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
                    alt="Dashboard preview"
                    width={400}
                    height={300}
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </Card>
            
            <Card className="md:col-span-2 p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950 dark:to-emerald-900">
              <div className="flex items-center justify-between h-full">
                <div>
                  <Text as="h5" className="font-semibold mb-2">Active Users</Text>
                  <Text as="div" className="text-3xl font-bold mb-1">1.2M+</Text>
                  <p className="text-sm text-muted-foreground">↗ 12% this month</p>
                </div>
                <div className="w-16 h-16 bg-emerald-200 dark:bg-emerald-800 rounded-full flex items-center justify-center">
                  <UsersIcon className="h-8 w-8 text-emerald-600" />
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-violet-50 to-violet-100 dark:from-violet-950 dark:to-violet-900">
              <div className="text-center h-full flex flex-col justify-center">
                <div className="w-12 h-12 bg-violet-200 dark:bg-violet-800 rounded-full flex items-center justify-center mx-auto mb-3">
                  <BarChart3Icon className="h-6 w-6 text-violet-600" />
                </div>
                <Text as="h6" className="font-semibold mb-1">Reports</Text>
                <p className="text-xs text-muted-foreground">Advanced analytics</p>
              </div>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950 dark:to-amber-900">
              <div className="text-center h-full flex flex-col justify-center">
                <div className="w-12 h-12 bg-amber-200 dark:bg-amber-800 rounded-full flex items-center justify-center mx-auto mb-3">
                  <ZapIcon className="h-6 w-6 text-amber-600" />
                </div>
                <Text as="h6" className="font-semibold mb-1">Automation</Text>
                <p className="text-xs text-muted-foreground">Smart workflows</p>
              </div>
            </Card>
          </div>
        </div>

        {/* Stats Bento Grid */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Statistics Grid</Text>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="md:col-span-2 p-8 bg-gradient-to-br from-primary/10 to-primary/5">
              <div className="text-center">
                <Text as="h4" className="text-3xl font-bold mb-2">Trusted Worldwide</Text>
                <p className="text-muted-foreground mb-6">
                  Join millions of users who trust our platform
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Text as="div" className="text-2xl font-bold">150+</Text>
                    <p className="text-sm text-muted-foreground">Countries</p>
                  </div>
                  <div>
                    <Text as="div" className="text-2xl font-bold">5M+</Text>
                    <p className="text-sm text-muted-foreground">Users</p>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 text-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
              <Text as="div" className="text-3xl font-bold mb-2 text-blue-600">99.9%</Text>
              <Text as="h6" className="font-semibold mb-1">Uptime</Text>
              <p className="text-xs text-muted-foreground">SLA Guarantee</p>
            </Card>
            
            <Card className="p-6 text-center bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
              <Text as="div" className="text-3xl font-bold mb-2 text-green-600">&lt;100ms</Text>
              <Text as="h6" className="font-semibold mb-1">Response</Text>
              <p className="text-xs text-muted-foreground">Average latency</p>
            </Card>
            
            <Card className="md:col-span-2 p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900">
              <div className="flex items-center justify-between">
                <div>
                  <Text as="h6" className="font-semibold mb-2">Revenue Growth</Text>
                  <Text as="div" className="text-2xl font-bold text-purple-600">+300%</Text>
                  <p className="text-sm text-muted-foreground">Year over year</p>
                </div>
                <div className="w-16 h-16 bg-purple-200 dark:bg-purple-800 rounded-full flex items-center justify-center">
                  <TrendingUpIcon className="h-8 w-8 text-purple-600" />
                </div>
              </div>
            </Card>
            
            <Card className="md:col-span-2 p-6 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900">
              <div className="flex items-center justify-between">
                <div>
                  <Text as="h6" className="font-semibold mb-2">Customer Support</Text>
                  <Text as="div" className="text-2xl font-bold text-orange-600">24/7</Text>
                  <p className="text-sm text-muted-foreground">Always available</p>
                </div>
                <div className="w-16 h-16 bg-orange-200 dark:bg-orange-800 rounded-full flex items-center justify-center">
                  <ShieldIcon className="h-8 w-8 text-orange-600" />
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Interactive Bento Grid */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Interactive Grid</Text>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-80">
            <Card className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-950 dark:to-cyan-900">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-cyan-200 dark:bg-cyan-800 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <BarChart3Icon className="h-6 w-6 text-cyan-600" />
                  </div>
                  <Text as="h5" className="font-semibold mb-2">Analytics</Text>
                  <p className="text-sm text-muted-foreground">
                    Deep insights into your data
                  </p>
                </div>
                <Button variant="outline" size="sm" className="w-fit">
                  Explore
                  <ArrowRightIcon className="ml-2 h-3 w-3" />
                </Button>
              </div>
            </Card>
            
            <Card className="md:col-span-2 p-8 hover:shadow-lg transition-all duration-300 cursor-pointer group bg-gradient-to-br from-rose-50 to-rose-100 dark:from-rose-950 dark:to-rose-900">
              <div className="h-full flex items-center justify-between">
                <div>
                  <Text as="h4" className="text-xl font-bold mb-2">Get Started Today</Text>
                  <p className="text-muted-foreground mb-4">
                    Join thousands of satisfied customers
                  </p>
                  <Button className="group-hover:scale-105 transition-transform">
                    Start Free Trial
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="hidden md:block">
                  <div className="w-24 h-24 bg-rose-200 dark:bg-rose-800 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
                    <StarIcon className="h-12 w-12 text-rose-600" />
                  </div>
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