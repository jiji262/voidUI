"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Text, Button, Card } from "@/components/retroui";
import { 
  ZapIcon, 
  ShieldIcon, 
  SmartphoneIcon, 
  CloudIcon,
  BarChart3Icon,
  UsersIcon,
  LockIcon,
  RocketIcon,
  CheckIcon,
  ArrowRightIcon
} from "lucide-react";

export default function FeatureBlocksPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="container max-w-6xl mx-auto px-4 lg:px-0 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <Text as="h1" className="text-4xl lg:text-5xl mb-6">
            Feature <span className="text-outlined">Blocks</span>
          </Text>
          <p className="text-lg text-muted-foreground mb-8">
            Showcase your product features effectively with these versatile 
            feature section layouts. Perfect for highlighting key benefits and capabilities.
          </p>
        </div>
      </section>

      {/* Feature Blocks */}
      <section className="container max-w-6xl mx-auto px-4 lg:px-0 pb-16 space-y-16">
        
        {/* Icon Grid Features */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Icon Grid Features</Text>
          <div className="text-center mb-12">
            <Text as="h4" className="text-3xl font-bold mb-4">
              Everything You Need to Succeed
            </Text>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive platform provides all the tools and features 
              you need to build, deploy, and scale your applications.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <ZapIcon className="h-8 w-8 text-primary" />
              </div>
              <Text as="h5" className="text-lg font-semibold mb-2">Lightning Fast</Text>
              <p className="text-muted-foreground text-sm">
                Optimized for performance with sub-second response times and global CDN distribution.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <ShieldIcon className="h-8 w-8 text-primary" />
              </div>
              <Text as="h5" className="text-lg font-semibold mb-2">Enterprise Security</Text>
              <p className="text-muted-foreground text-sm">
                Bank-grade security with end-to-end encryption and SOC 2 Type II compliance.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <SmartphoneIcon className="h-8 w-8 text-primary" />
              </div>
              <Text as="h5" className="text-lg font-semibold mb-2">Mobile First</Text>
              <p className="text-muted-foreground text-sm">
                Responsive design that works perfectly on all devices and screen sizes.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CloudIcon className="h-8 w-8 text-primary" />
              </div>
              <Text as="h5" className="text-lg font-semibold mb-2">Cloud Native</Text>
              <p className="text-muted-foreground text-sm">
                Built for the cloud with automatic scaling and 99.9% uptime guarantee.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BarChart3Icon className="h-8 w-8 text-primary" />
              </div>
              <Text as="h5" className="text-lg font-semibold mb-2">Advanced Analytics</Text>
              <p className="text-muted-foreground text-sm">
                Real-time insights and detailed analytics to track your success metrics.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <UsersIcon className="h-8 w-8 text-primary" />
              </div>
              <Text as="h5" className="text-lg font-semibold mb-2">Team Collaboration</Text>
              <p className="text-muted-foreground text-sm">
                Built-in collaboration tools to keep your team aligned and productive.
              </p>
            </Card>
          </div>
        </div>

        {/* Split Layout Features */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Split Layout Features</Text>
          <div className="space-y-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Text as="h4" className="text-3xl font-bold mb-6">
                  Powerful Analytics Dashboard
                </Text>
                <p className="text-lg text-muted-foreground mb-8">
                  Get deep insights into your business with our comprehensive analytics 
                  dashboard. Track key metrics, identify trends, and make data-driven decisions.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckIcon className="h-5 w-5 text-green-500" />
                    <span>Real-time data visualization</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckIcon className="h-5 w-5 text-green-500" />
                    <span>Custom report generation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckIcon className="h-5 w-5 text-green-500" />
                    <span>Advanced filtering and segmentation</span>
                  </div>
                </div>
                <Button>
                  Learn More
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
                    alt="Analytics dashboard"
                    width={600}
                    height={400}
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative lg:order-1">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                  <Image
                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop"
                    alt="Security features"
                    width={600}
                    height={400}
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
              <div className="lg:order-2">
                <Text as="h4" className="text-3xl font-bold mb-6">
                  Enterprise-Grade Security
                </Text>
                <p className="text-lg text-muted-foreground mb-8">
                  Your data security is our top priority. We implement multiple layers 
                  of protection to ensure your information stays safe and secure.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckIcon className="h-5 w-5 text-green-500" />
                    <span>End-to-end encryption</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckIcon className="h-5 w-5 text-green-500" />
                    <span>Two-factor authentication</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckIcon className="h-5 w-5 text-green-500" />
                    <span>Regular security audits</span>
                  </div>
                </div>
                <Button>
                  Security Details
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Comparison */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Feature Comparison</Text>
          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-6 font-semibold">Features</th>
                    <th className="text-center p-6 font-semibold">Basic</th>
                    <th className="text-center p-6 font-semibold">Pro</th>
                    <th className="text-center p-6 font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-6 font-medium">Dashboard Analytics</td>
                    <td className="text-center p-6">
                      <CheckIcon className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="text-center p-6">
                      <CheckIcon className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="text-center p-6">
                      <CheckIcon className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-t bg-muted/20">
                    <td className="p-6 font-medium">Advanced Reporting</td>
                    <td className="text-center p-6">-</td>
                    <td className="text-center p-6">
                      <CheckIcon className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="text-center p-6">
                      <CheckIcon className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-6 font-medium">API Access</td>
                    <td className="text-center p-6">Limited</td>
                    <td className="text-center p-6">Full</td>
                    <td className="text-center p-6">Full + GraphQL</td>
                  </tr>
                  <tr className="border-t bg-muted/20">
                    <td className="p-6 font-medium">Support</td>
                    <td className="text-center p-6">Email</td>
                    <td className="text-center p-6">Priority</td>
                    <td className="text-center p-6">24/7 Dedicated</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* Feature Stats */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">By the Numbers</Text>
          <Card className="p-12">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <RocketIcon className="h-8 w-8 text-primary" />
                </div>
                <Text as="div" className="text-3xl font-bold mb-2">99.9%</Text>
                <p className="text-muted-foreground">Uptime</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ZapIcon className="h-8 w-8 text-primary" />
                </div>
                <Text as="div" className="text-3xl font-bold mb-2">&lt;100ms</Text>
                <p className="text-muted-foreground">Response Time</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <UsersIcon className="h-8 w-8 text-primary" />
                </div>
                <Text as="div" className="text-3xl font-bold mb-2">1M+</Text>
                <p className="text-muted-foreground">Active Users</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <LockIcon className="h-8 w-8 text-primary" />
                </div>
                <Text as="div" className="text-3xl font-bold mb-2">100%</Text>
                <p className="text-muted-foreground">Secure</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Feature Highlight */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Feature Spotlight</Text>
          <Card className="p-12 text-center bg-gradient-to-r from-primary/10 to-secondary/10">
            <div className="w-20 h-20 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-6">
              <BarChart3Icon className="h-10 w-10 text-primary" />
            </div>
            <Text as="h4" className="text-3xl font-bold mb-4">
              AI-Powered Insights
            </Text>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our advanced AI analyzes your data patterns and provides actionable 
              insights to help you make better business decisions. Get predictive 
              analytics and automated recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Try AI Features
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Watch Demo
              </Button>
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