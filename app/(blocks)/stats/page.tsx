"use client";

import React from "react";
import Link from "next/link";
import { Text, Button, Card } from "@/components/retroui";
import { TrendingUpIcon, UsersIcon, DollarSignIcon, BarChart3Icon, StarIcon, ZapIcon } from "lucide-react";

export default function StatsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="container max-w-6xl mx-auto px-4 lg:px-0 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <Text as="h1" className="text-4xl lg:text-5xl mb-6">
            Statistics <span className="text-outlined">Blocks</span>
          </Text>
          <p className="text-lg text-muted-foreground mb-8">
            Display impressive numbers and metrics with these statistics sections. 
            Perfect for showcasing achievements, user counts, and business metrics.
          </p>
        </div>
      </section>

      {/* Stats Blocks */}
      <section className="container max-w-6xl mx-auto px-4 lg:px-0 pb-16 space-y-16">
        
        {/* Simple Stats Grid */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Simple Stats Grid</Text>
          <Card className="p-12">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <Text as="div" className="text-4xl font-bold mb-2">10,000+</Text>
                <p className="text-muted-foreground">Happy Customers</p>
              </div>
              <div>
                <Text as="div" className="text-4xl font-bold mb-2">99.9%</Text>
                <p className="text-muted-foreground">Uptime</p>
              </div>
              <div>
                <Text as="div" className="text-4xl font-bold mb-2">24/7</Text>
                <p className="text-muted-foreground">Support</p>
              </div>
              <div>
                <Text as="div" className="text-4xl font-bold mb-2">150+</Text>
                <p className="text-muted-foreground">Countries</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Stats with Icons */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Stats with Icons</Text>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <UsersIcon className="h-8 w-8 text-primary" />
              </div>
              <Text as="div" className="text-3xl font-bold mb-2">1M+</Text>
              <Text as="h4" className="font-semibold mb-2">Active Users</Text>
              <p className="text-muted-foreground text-sm">
                Growing community of satisfied users worldwide
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUpIcon className="h-8 w-8 text-primary" />
              </div>
              <Text as="div" className="text-3xl font-bold mb-2">300%</Text>
              <Text as="h4" className="font-semibold mb-2">Growth Rate</Text>
              <p className="text-muted-foreground text-sm">
                Year-over-year growth in user engagement
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <DollarSignIcon className="h-8 w-8 text-primary" />
              </div>
              <Text as="div" className="text-3xl font-bold mb-2">$50M+</Text>
              <Text as="h4" className="font-semibold mb-2">Revenue Generated</Text>
              <p className="text-muted-foreground text-sm">
                Total revenue generated for our customers
              </p>
            </Card>
          </div>
        </div>

        {/* Animated Counter Stats */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Highlighted Stats</Text>
          <Card className="p-12 bg-gradient-to-r from-primary/10 to-secondary/10">
            <div className="text-center mb-8">
              <Text as="h4" className="text-3xl font-bold mb-4">
                Trusted by Industry Leaders
              </Text>
              <p className="text-lg text-muted-foreground">
                Join thousands of companies that rely on our platform
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <Text as="div" className="text-5xl font-bold text-primary">500+</Text>
                <Text as="h5" className="font-semibold">Enterprise Clients</Text>
                <p className="text-sm text-muted-foreground">Fortune 500 companies</p>
              </div>
              <div className="space-y-2">
                <Text as="div" className="text-5xl font-bold text-primary">2.5B</Text>
                <Text as="h5" className="font-semibold">API Requests</Text>
                <p className="text-sm text-muted-foreground">Processed monthly</p>
              </div>
              <div className="space-y-2">
                <Text as="div" className="text-5xl font-bold text-primary">99.99%</Text>
                <Text as="h5" className="font-semibold">Reliability</Text>
                <p className="text-sm text-muted-foreground">SLA guarantee</p>
              </div>
              <div className="space-y-2">
                <Text as="div" className="text-5xl font-bold text-primary">&lt;50ms</Text>
                <Text as="h5" className="font-semibold">Response Time</Text>
                <p className="text-sm text-muted-foreground">Average latency</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Progress Stats */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Progress Statistics</Text>
          <Card className="p-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Customer Satisfaction</span>
                    <span className="text-sm text-muted-foreground">98%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full w-[98%]"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Market Coverage</span>
                    <span className="text-sm text-muted-foreground">85%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full w-[85%]"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Feature Completion</span>
                    <span className="text-sm text-muted-foreground">92%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full w-[92%]"></div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="text-center">
                  <Text as="div" className="text-4xl font-bold mb-2">4.9/5</Text>
                  <div className="flex justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground">Average Rating</p>
                </div>
                
                <div className="text-center">
                  <Text as="div" className="text-4xl font-bold mb-2">15,000+</Text>
                  <p className="text-muted-foreground">Reviews</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Comparison Stats */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Before vs After</Text>
          <Card className="p-8">
            <div className="text-center mb-8">
              <Text as="h4" className="text-2xl font-bold mb-2">
                See the Difference
              </Text>
              <p className="text-muted-foreground">
                Real results from our customers after implementing our solution
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="space-y-4">
                  <div>
                    <Text as="div" className="text-sm text-muted-foreground mb-1">Before</Text>
                    <Text as="div" className="text-2xl font-bold text-red-500">45%</Text>
                  </div>
                  <ZapIcon className="h-8 w-8 mx-auto text-primary" />
                  <div>
                    <Text as="div" className="text-sm text-muted-foreground mb-1">After</Text>
                    <Text as="div" className="text-2xl font-bold text-green-500">89%</Text>
                  </div>
                </div>
                <Text as="h5" className="font-semibold mt-4">Efficiency</Text>
              </div>
              
              <div className="text-center">
                <div className="space-y-4">
                  <div>
                    <Text as="div" className="text-sm text-muted-foreground mb-1">Before</Text>
                    <Text as="div" className="text-2xl font-bold text-red-500">2.3s</Text>
                  </div>
                  <BarChart3Icon className="h-8 w-8 mx-auto text-primary" />
                  <div>
                    <Text as="div" className="text-sm text-muted-foreground mb-1">After</Text>
                    <Text as="div" className="text-2xl font-bold text-green-500">0.8s</Text>
                  </div>
                </div>
                <Text as="h5" className="font-semibold mt-4">Load Time</Text>
              </div>
              
              <div className="text-center">
                <div className="space-y-4">
                  <div>
                    <Text as="div" className="text-sm text-muted-foreground mb-1">Before</Text>
                    <Text as="div" className="text-2xl font-bold text-red-500">$50K</Text>
                  </div>
                  <DollarSignIcon className="h-8 w-8 mx-auto text-primary" />
                  <div>
                    <Text as="div" className="text-sm text-muted-foreground mb-1">After</Text>
                    <Text as="div" className="text-2xl font-bold text-green-500">$150K</Text>
                  </div>
                </div>
                <Text as="h5" className="font-semibold mt-4">Monthly Revenue</Text>
              </div>
            </div>
          </Card>
        </div>

        {/* Real-time Stats */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Live Statistics</Text>
          <Card className="p-8">
            <div className="text-center mb-8">
              <Text as="h4" className="text-2xl font-bold mb-2">
                Real-time Dashboard
              </Text>
              <p className="text-muted-foreground">
                Live metrics updated every second
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-muted/30 p-6 rounded-lg text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-muted-foreground">Live</span>
                </div>
                <Text as="div" className="text-3xl font-bold mb-1">1,247</Text>
                <p className="text-sm text-muted-foreground">Active Users</p>
              </div>
              
              <div className="bg-muted/30 p-6 rounded-lg text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-muted-foreground">Live</span>
                </div>
                <Text as="div" className="text-3xl font-bold mb-1">89.2%</Text>
                <p className="text-sm text-muted-foreground">Server Load</p>
              </div>
              
              <div className="bg-muted/30 p-6 rounded-lg text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-muted-foreground">Live</span>
                </div>
                <Text as="div" className="text-3xl font-bold mb-1">$12,450</Text>
                <p className="text-sm text-muted-foreground">Today&apos;s Revenue</p>
              </div>
              
              <div className="bg-muted/30 p-6 rounded-lg text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-muted-foreground">Live</span>
                </div>
                <Text as="div" className="text-3xl font-bold mb-1">342</Text>
                <p className="text-sm text-muted-foreground">New Signups</p>
              </div>
            </div>
          </Card>
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