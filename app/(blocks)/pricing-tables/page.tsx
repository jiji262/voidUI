"use client";

import React from "react";
import Link from "next/link";
import { Text, Button, Card, Badge } from "@/components/retroui";
import { CheckIcon, XIcon, StarIcon } from "lucide-react";

export default function PricingTablesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="container max-w-6xl mx-auto px-4 lg:px-0 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <Text as="h1" className="text-4xl lg:text-5xl mb-6">
            Pricing <span className="text-outlined">Tables</span>
          </Text>
          <p className="text-lg text-muted-foreground mb-8">
            Clear and compelling pricing sections to help convert visitors into customers. 
            Choose from various layouts and styles.
          </p>
        </div>
      </section>

      {/* Pricing Blocks */}
      <section className="container max-w-6xl mx-auto px-4 lg:px-0 pb-16 space-y-16">
        
        {/* Simple 3-Column Pricing */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Simple Three-Column Pricing</Text>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-8 text-center">
              <Text as="h4" className="text-xl font-semibold mb-2">Starter</Text>
              <p className="text-muted-foreground text-sm mb-6">Perfect for individuals</p>
              <div className="mb-6">
                <Text as="span" className="text-4xl font-bold">$9</Text>
                <Text as="span" className="text-muted-foreground">/month</Text>
              </div>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  Up to 5 projects
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  10GB storage
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  Email support
                </li>
                <li className="flex items-center gap-2">
                  <XIcon className="h-4 w-4 text-muted-foreground" />
                  Advanced analytics
                </li>
              </ul>
              <Button variant="outline" className="w-full">
                Get Started
              </Button>
            </Card>

            <Card className="p-8 text-center border-primary border-2 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge>Most Popular</Badge>
              </div>
              <Text as="h4" className="text-xl font-semibold mb-2">Professional</Text>
              <p className="text-muted-foreground text-sm mb-6">Best for small teams</p>
              <div className="mb-6">
                <Text as="span" className="text-4xl font-bold">$29</Text>
                <Text as="span" className="text-muted-foreground">/month</Text>
              </div>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  Unlimited projects
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  100GB storage
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  Priority support
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  Advanced analytics
                </li>
              </ul>
              <Button className="w-full">
                Get Started
              </Button>
            </Card>

            <Card className="p-8 text-center">
              <Text as="h4" className="text-xl font-semibold mb-2">Enterprise</Text>
              <p className="text-muted-foreground text-sm mb-6">For large organizations</p>
              <div className="mb-6">
                <Text as="span" className="text-4xl font-bold">$99</Text>
                <Text as="span" className="text-muted-foreground">/month</Text>
              </div>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  Unlimited everything
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  1TB storage
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  24/7 phone support
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  Custom integrations
                </li>
              </ul>
              <Button variant="outline" className="w-full">
                Contact Sales
              </Button>
            </Card>
          </div>
        </div>

        {/* Comparison Table */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Feature Comparison Table</Text>
          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-4 font-semibold">Features</th>
                    <th className="text-center p-4 font-semibold">Starter</th>
                    <th className="text-center p-4 font-semibold">Professional</th>
                    <th className="text-center p-4 font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-4 font-medium">Projects</td>
                    <td className="text-center p-4">5</td>
                    <td className="text-center p-4">Unlimited</td>
                    <td className="text-center p-4">Unlimited</td>
                  </tr>
                  <tr className="border-t bg-muted/20">
                    <td className="p-4 font-medium">Storage</td>
                    <td className="text-center p-4">10GB</td>
                    <td className="text-center p-4">100GB</td>
                    <td className="text-center p-4">1TB</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4 font-medium">Team Members</td>
                    <td className="text-center p-4">1</td>
                    <td className="text-center p-4">10</td>
                    <td className="text-center p-4">Unlimited</td>
                  </tr>
                  <tr className="border-t bg-muted/20">
                    <td className="p-4 font-medium">Analytics</td>
                    <td className="text-center p-4">
                      <XIcon className="h-4 w-4 text-muted-foreground mx-auto" />
                    </td>
                    <td className="text-center p-4">
                      <CheckIcon className="h-4 w-4 text-green-500 mx-auto" />
                    </td>
                    <td className="text-center p-4">
                      <CheckIcon className="h-4 w-4 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4 font-medium">API Access</td>
                    <td className="text-center p-4">
                      <XIcon className="h-4 w-4 text-muted-foreground mx-auto" />
                    </td>
                    <td className="text-center p-4">
                      <CheckIcon className="h-4 w-4 text-green-500 mx-auto" />
                    </td>
                    <td className="text-center p-4">
                      <CheckIcon className="h-4 w-4 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-t bg-muted/20">
                    <td className="p-4 font-medium">Support</td>
                    <td className="text-center p-4">Email</td>
                    <td className="text-center p-4">Priority</td>
                    <td className="text-center p-4">24/7 Phone</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4 font-medium">Price</td>
                    <td className="text-center p-4 font-bold">$9/mo</td>
                    <td className="text-center p-4 font-bold">$29/mo</td>
                    <td className="text-center p-4 font-bold">$99/mo</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4"></td>
                    <td className="text-center p-4">
                      <Button variant="outline" size="sm">Choose Plan</Button>
                    </td>
                    <td className="text-center p-4">
                      <Button size="sm">Choose Plan</Button>
                    </td>
                    <td className="text-center p-4">
                      <Button variant="outline" size="sm">Contact Sales</Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* Simple Two-Column */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Simple Two-Column Pricing</Text>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 text-center">
              <Text as="h4" className="text-2xl font-semibold mb-2">Monthly</Text>
              <p className="text-muted-foreground text-sm mb-6">Pay month by month</p>
              <div className="mb-6">
                <Text as="span" className="text-5xl font-bold">$29</Text>
                <Text as="span" className="text-muted-foreground">/month</Text>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-left">
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  All features included
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  Cancel anytime
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  Email support
                </li>
              </ul>
              <Button variant="outline" className="w-full">
                Start Monthly Plan
              </Button>
            </Card>

            <Card className="p-8 text-center border-primary border-2 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge>Save 30%</Badge>
              </div>
              <Text as="h4" className="text-2xl font-semibold mb-2">Yearly</Text>
              <p className="text-muted-foreground text-sm mb-6">Pay once, save more</p>
              <div className="mb-6">
                <Text as="span" className="text-5xl font-bold">$20</Text>
                <Text as="span" className="text-muted-foreground">/month</Text>
                <div className="text-xs text-muted-foreground mt-1">
                  Billed annually ($240/year)
                </div>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-left">
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  All features included
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  Priority support
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  Free onboarding
                </li>
              </ul>
              <Button className="w-full">
                Start Yearly Plan
              </Button>
            </Card>
          </div>
        </div>

        {/* Enterprise Focus */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Enterprise Pricing</Text>
          <Card className="p-12 text-center max-w-2xl mx-auto">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <Text as="h4" className="text-3xl font-semibold mb-4">Enterprise Solution</Text>
            <p className="text-muted-foreground mb-8">
              Custom pricing for organizations with specific needs. Get dedicated support, 
              custom integrations, and enterprise-grade security.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8 text-sm">
              <div className="text-left space-y-2">
                <div className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  Unlimited everything
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  Custom integrations
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  Dedicated support
                </div>
              </div>
              <div className="text-left space-y-2">
                <div className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  SLA guarantees
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  Advanced security
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  Training & onboarding
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Contact Sales
              </Button>
              <Button variant="outline" size="lg">
                Schedule Demo
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