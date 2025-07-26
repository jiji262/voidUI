"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Text, Button, Card } from "@/components/retroui";
import { ArrowRightIcon, CheckIcon, StarIcon, TrendingUpIcon } from "lucide-react";

export default function CallToActionPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="container max-w-6xl mx-auto px-4 lg:px-0 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <Text as="h1" className="text-4xl lg:text-5xl mb-6">
            Call to Action <span className="text-outlined">Sections</span>
          </Text>
          <p className="text-lg text-muted-foreground mb-8">
            Convert visitors with compelling call-to-action sections. Drive engagement 
            and encourage users to take the next step.
          </p>
        </div>
      </section>

      {/* CTA Blocks */}
      <section className="container max-w-6xl mx-auto px-4 lg:px-0 pb-16 space-y-16">
        
        {/* Simple CTA */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Simple Call to Action</Text>
          <Card className="p-12 text-center bg-primary/5">
            <Text as="h4" className="text-3xl font-bold mb-4">
              Ready to Get Started?
            </Text>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have transformed their business 
              with our platform. Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Start Free Trial
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Schedule Demo
              </Button>
            </div>
          </Card>
        </div>

        {/* CTA with Features */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">CTA with Features</Text>
          <Card className="p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Text as="h4" className="text-3xl font-bold mb-6">
                  Everything You Need to Succeed
                </Text>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckIcon className="h-5 w-5 text-green-500" />
                    <span>Advanced analytics and reporting</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckIcon className="h-5 w-5 text-green-500" />
                    <span>24/7 customer support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckIcon className="h-5 w-5 text-green-500" />
                    <span>Seamless integrations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckIcon className="h-5 w-5 text-green-500" />
                    <span>Enterprise-grade security</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg">
                    Get Started Now
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop"
                    alt="Dashboard preview"
                    width={400}
                    height={400}
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Urgency CTA */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Urgency Call to Action</Text>
          <Card className="p-12 text-center bg-gradient-to-r from-primary/10 to-secondary/10">
            <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <TrendingUpIcon className="h-4 w-4" />
              Limited Time Offer
            </div>
            <Text as="h4" className="text-4xl font-bold mb-4">
              50% Off for Early Adopters
            </Text>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Be among the first 100 customers and save 50% on your first year. 
              This exclusive offer expires in 7 days.
            </p>
            <div className="flex items-center justify-center gap-8 mb-8">
              <div className="text-center">
                <Text as="div" className="text-2xl font-bold">06</Text>
                <p className="text-sm text-muted-foreground">Days</p>
              </div>
              <div className="text-center">
                <Text as="div" className="text-2xl font-bold">14</Text>
                <p className="text-sm text-muted-foreground">Hours</p>
              </div>
              <div className="text-center">
                <Text as="div" className="text-2xl font-bold">32</Text>
                <p className="text-sm text-muted-foreground">Minutes</p>
              </div>
              <div className="text-center">
                <Text as="div" className="text-2xl font-bold">18</Text>
                <p className="text-sm text-muted-foreground">Seconds</p>
              </div>
            </div>
            <Button size="lg" className="px-12">
              Claim Your Discount
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </Card>
        </div>

        {/* Social Proof CTA */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Social Proof CTA</Text>
          <Card className="p-12 text-center">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <Text as="h4" className="text-3xl font-bold mb-4">
              Join 50,000+ Happy Customers
            </Text>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              &ldquo;This platform has completely transformed our workflow. The results 
              speak for themselves - 300% increase in productivity!&rdquo;
            </p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-muted border-2 border-background"></div>
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                and 49,995 others
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Start Your Success Story
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Read More Reviews
              </Button>
            </div>
          </Card>
        </div>

        {/* Newsletter CTA */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Newsletter CTA</Text>
          <Card className="p-12 text-center bg-muted/30">
            <Text as="h4" className="text-3xl font-bold mb-4">
              Stay in the Loop
            </Text>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get weekly insights, tips, and exclusive content delivered to your inbox. 
              Join our community of 25,000+ subscribers.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-4 mb-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button size="lg">Subscribe</Button>
              </div>
              <p className="text-xs text-muted-foreground">
                No spam, unsubscribe at any time.
              </p>
            </div>
          </Card>
        </div>

        {/* App Download CTA */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">App Download CTA</Text>
          <Card className="p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                  <Image
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=400&fit=crop"
                    alt="Mobile app preview"
                    width={400}
                    height={400}
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
              <div>
                <Text as="h4" className="text-3xl font-bold mb-6">
                  Take Us With You
                </Text>
                <p className="text-lg text-muted-foreground mb-8">
                  Download our mobile app and access all features on the go. 
                  Available for iOS and Android devices.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <Button size="lg" className="flex-1">
                    <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                    </svg>
                    App Store
                  </Button>
                  <Button size="lg" variant="outline" className="flex-1">
                    <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    Google Play
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <StarIcon className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>4.8 rating</span>
                  </div>
                  <div>1M+ downloads</div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Free Trial CTA */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Free Trial CTA</Text>
          <Card className="p-12 text-center border-2 border-primary">
            <Text as="h4" className="text-4xl font-bold mb-4">
              Try It Risk-Free
            </Text>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start your 14-day free trial. No credit card required. 
              Cancel anytime. Experience the full power of our platform.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <CheckIcon className="h-6 w-6 text-primary" />
                </div>
                <Text as="h5" className="font-semibold mb-1">No Credit Card</Text>
                <p className="text-sm text-muted-foreground">Start immediately</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <CheckIcon className="h-6 w-6 text-primary" />
                </div>
                <Text as="h5" className="font-semibold mb-1">Full Access</Text>
                <p className="text-sm text-muted-foreground">All features included</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <CheckIcon className="h-6 w-6 text-primary" />
                </div>
                <Text as="h5" className="font-semibold mb-1">Cancel Anytime</Text>
                <p className="text-sm text-muted-foreground">No commitments</p>
              </div>
            </div>
            <Button size="lg" className="px-12">
              Start Free Trial
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
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