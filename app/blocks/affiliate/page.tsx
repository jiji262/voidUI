"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Text, Button, Card, Badge } from "@/components/retroui";
import { 
  ArrowRightIcon, 
  TrendingUpIcon, 
  DollarSignIcon,
  UsersIcon,
  StarIcon,
  CheckIcon,
  GiftIcon,
  PercentIcon
} from "lucide-react";

export default function AffiliatePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="container max-w-6xl mx-auto px-4 lg:px-0 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <Text as="h1" className="text-4xl lg:text-5xl mb-6">
            Affiliate <span className="text-outlined">Program</span>
          </Text>
          <p className="text-lg text-muted-foreground mb-8">
            Partnership and affiliate program sections to promote collaboration 
            and revenue sharing opportunities.
          </p>
        </div>
      </section>

      {/* Affiliate Blocks */}
      <section className="container max-w-6xl mx-auto px-4 lg:px-0 pb-16 space-y-16">
        
        {/* Affiliate Hero */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Affiliate Program Hero</Text>
          <Card className="p-12 text-center bg-gradient-to-r from-primary/10 to-secondary/10">
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <DollarSignIcon className="h-10 w-10 text-primary" />
            </div>
            <Text as="h4" className="text-4xl font-bold mb-4">
              Earn Up to 30% Commission
            </Text>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our affiliate program and start earning money by promoting our products. 
              Get paid for every successful referral with industry-leading commission rates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg">
                Join Affiliate Program
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Text as="div" className="text-2xl font-bold mb-1">30%</Text>
                <p className="text-sm text-muted-foreground">Commission Rate</p>
              </div>
              <div>
                <Text as="div" className="text-2xl font-bold mb-1">$500+</Text>
                <p className="text-sm text-muted-foreground">Avg Monthly Earnings</p>
              </div>
              <div>
                <Text as="div" className="text-2xl font-bold mb-1">24/7</Text>
                <p className="text-sm text-muted-foreground">Support</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Commission Tiers */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Commission Tiers</Text>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <StarIcon className="h-8 w-8 text-blue-600" />
              </div>
              <Text as="h5" className="text-xl font-semibold mb-2">Bronze</Text>
              <Text as="div" className="text-3xl font-bold mb-4 text-blue-600">15%</Text>
              <p className="text-muted-foreground text-sm mb-6">
                Perfect for getting started with affiliate marketing
              </p>
              <ul className="space-y-2 text-sm mb-6">
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  Monthly payouts
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  Basic marketing materials
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  Email support
                </li>
              </ul>
              <Button variant="outline" className="w-full">Get Started</Button>
            </Card>

            <Card className="p-8 text-center border-primary border-2 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge>Most Popular</Badge>
              </div>
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUpIcon className="h-8 w-8 text-primary" />
              </div>
              <Text as="h5" className="text-xl font-semibold mb-2">Silver</Text>
              <Text as="div" className="text-3xl font-bold mb-4 text-primary">25%</Text>
              <p className="text-muted-foreground text-sm mb-6">
                For established affiliates with consistent performance
              </p>
              <ul className="space-y-2 text-sm mb-6">
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  Bi-weekly payouts
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  Advanced marketing kit
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  Priority support
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  Performance bonuses
                </li>
              </ul>
              <Button className="w-full">Upgrade to Silver</Button>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <GiftIcon className="h-8 w-8 text-yellow-600" />
              </div>
              <Text as="h5" className="text-xl font-semibold mb-2">Gold</Text>
              <Text as="div" className="text-3xl font-bold mb-4 text-yellow-600">30%</Text>
              <p className="text-muted-foreground text-sm mb-6">
                Elite tier for top-performing affiliate partners
              </p>
              <ul className="space-y-2 text-sm mb-6">
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  Weekly payouts
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  Custom marketing materials
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  Dedicated account manager
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-green-500" />
                  Exclusive promotions
                </li>
              </ul>
              <Button variant="outline" className="w-full">Contact Sales</Button>
            </Card>
          </div>
        </div>

        {/* How It Works */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">How It Works</Text>
          <Card className="p-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <Text as="h5" className="font-semibold mb-2">Sign Up</Text>
                <p className="text-sm text-muted-foreground">
                  Join our affiliate program with a simple registration process
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <Text as="h5" className="font-semibold mb-2">Get Your Link</Text>
                <p className="text-sm text-muted-foreground">
                  Receive your unique affiliate tracking link and marketing materials
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <Text as="h5" className="font-semibold mb-2">Promote</Text>
                <p className="text-sm text-muted-foreground">
                  Share your link through your channels and start referring customers
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <Text as="h5" className="font-semibold mb-2">Earn</Text>
                <p className="text-sm text-muted-foreground">
                  Get paid commission for every successful referral you generate
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Success Stories */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Success Stories</Text>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 relative">
                  <Image
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                    alt="Affiliate partner"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <Text as="h5" className="font-semibold">Alex Johnson</Text>
                  <p className="text-sm text-muted-foreground">Tech Blogger</p>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                &ldquo;I&apos;ve been part of the affiliate program for 6 months and earned over $3,000. 
                The support team is amazing and the commission rates are the best in the industry.&rdquo;
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-primary font-semibold">$3,247 earned</span>
                <span className="text-muted-foreground">6 months</span>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 relative">
                  <Image
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
                    alt="Affiliate partner"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <Text as="h5" className="font-semibold">Sarah Chen</Text>
                  <p className="text-sm text-muted-foreground">YouTube Creator</p>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                &ldquo;The affiliate program has become a significant revenue stream for my channel. 
                The products are high-quality and my audience loves them.&rdquo;
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-primary font-semibold">$5,892 earned</span>
                <span className="text-muted-foreground">1 year</span>
              </div>
            </Card>
          </div>
        </div>

        {/* Marketing Resources */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Marketing Resources</Text>
          <Card className="p-8">
            <div className="text-center mb-8">
              <Text as="h4" className="text-2xl font-bold mb-4">
                Everything You Need to Succeed
              </Text>
              <p className="text-muted-foreground">
                We provide comprehensive marketing materials to help you promote effectively
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <PercentIcon className="h-6 w-6 text-primary" />
                </div>
                <Text as="h6" className="font-semibold mb-2">Banners & Ads</Text>
                <p className="text-xs text-muted-foreground">
                  High-converting banner ads in multiple sizes
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <UsersIcon className="h-6 w-6 text-primary" />
                </div>
                <Text as="h6" className="font-semibold mb-2">Email Templates</Text>
                <p className="text-xs text-muted-foreground">
                  Ready-to-use email marketing templates
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <TrendingUpIcon className="h-6 w-6 text-primary" />
                </div>
                <Text as="h6" className="font-semibold mb-2">Analytics</Text>
                <p className="text-xs text-muted-foreground">
                  Real-time tracking and performance analytics
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <GiftIcon className="h-6 w-6 text-primary" />
                </div>
                <Text as="h6" className="font-semibold mb-2">Product Info</Text>
                <p className="text-xs text-muted-foreground">
                  Detailed product information and specs
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* CTA Section */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Ready to Get Started?</Text>
          <Card className="p-12 text-center bg-gradient-to-r from-primary/10 to-secondary/10">
            <Text as="h4" className="text-3xl font-bold mb-4">
              Join Our Affiliate Program Today
            </Text>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start earning money by promoting products you believe in. 
              Join thousands of successful affiliates already earning with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Apply Now
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Download Media Kit
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