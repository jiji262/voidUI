"use client";

import React from"react";
import Link from"next/link";
import Image from"next/image";
import { Text, Button, Card } from"@/components/voidui";
import { ArrowRightIcon, CheckIcon, StarIcon, TrendingUpIcon } from"lucide-react";
import { CodeDisplay } from"@/components/CodeDisplay";

// Code snippets for CTA components
const simpleCTACode = `import React from"react";
import { Button } from"@/components/voidui";
import { ArrowRightIcon } from"lucide-react";

const SimpleCTA = () => {
 return (
 <div className="max-w-4xl mx-auto bg-white border-2 border-black p-12 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
 <h4 className="text-3xl font-bold mb-4">
 Ready to Get Started?
 </h4>
 <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
 Join thousands of satisfied customers who have transformed their business
 with our platform. Start your free trial today.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3">
 Start Free Trial
 <ArrowRightIcon className="ml-2 h-4 w-4" />
 </Button>
 <Button variant="outline" className="border-black px-8 py-3">
 Schedule Demo
 </Button>
 </div>
 </div>
 );
};`;

const featuresCTACode = `import React from"react";
import { Button } from"@/components/voidui";
import { ArrowRightIcon, CheckIcon } from"lucide-react";

const FeaturesCTA = () => {
 return (
 <div className="max-w-6xl mx-auto bg-white border-2 border-black p-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
 <div className="grid lg:grid-cols-2 gap-12 items-center">
 <div>
 <h4 className="text-3xl font-bold mb-6">
 Everything You Need to Succeed
 </h4>
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
 <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3">
 Get Started Now
 <ArrowRightIcon className="ml-2 h-4 w-4" />
 </Button>
 <Button variant="outline" className="border-black px-8 py-3">
 Learn More
 </Button>
 </div>
 </div>
 <div className="relative">
 <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center border-2 border-black">
 <img
 src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop"
 alt="Dashboard preview"
 className="object-cover w-full h-full"
 />
 </div>
 </div>
 </div>
 </div>
 );
};`;

const urgencyCTACode = `import React from"react";
import { Button } from"@/components/voidui";
import { ArrowRightIcon, TrendingUpIcon } from"lucide-react";

const UrgencyCTA = () => {
 return (
 <div className="max-w-4xl mx-auto bg-gradient-to-r from-yellow-100 to-orange-100 border-2 border-black p-12 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
 <div className="inline-flex items-center gap-2 bg-yellow-300 px-4 py-2 text-sm font-medium mb-6 border-2 border-black">
 <TrendingUpIcon className="h-4 w-4" />
 Limited Time Offer
 </div>
 <h4 className="text-4xl font-bold mb-4">
 50% Off for Early Adopters
 </h4>
 <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
 Be among the first 100 customers and save 50% on your first year.
 This exclusive offer expires in 7 days.
 </p>
 <div className="flex items-center justify-center gap-8 mb-8">
 <div className="text-center">
 <div className="text-2xl font-bold">06</div>
 <p className="text-sm text-gray-600">Days</p>
 </div>
 <div className="text-center">
 <div className="text-2xl font-bold">14</div>
 <p className="text-sm text-gray-600">Hours</p>
 </div>
 <div className="text-center">
 <div className="text-2xl font-bold">32</div>
 <p className="text-sm text-gray-600">Minutes</p>
 </div>
 <div className="text-center">
 <div className="text-2xl font-bold">18</div>
 <p className="text-sm text-gray-600">Seconds</p>
 </div>
 </div>
 <Button className="bg-black text-white hover:bg-gray-800 px-12 py-3">
 Claim Your Discount
 <ArrowRightIcon className="ml-2 h-4 w-4" />
 </Button>
 </div>
 );
};`;

// Simple CTA Component
const SimpleCTA = () => {
 return (
 <div className="max-w-4xl mx-auto bg-white border-2 border-black p-12 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
 <h4 className="text-3xl font-bold mb-4">
 Ready to Get Started?
 </h4>
 <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
 Join thousands of satisfied customers who have transformed their business
 with our platform. Start your free trial today.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3">
 Start Free Trial
 <ArrowRightIcon className="ml-2 h-4 w-4" />
 </Button>
 <Button variant="outline" className="border-black px-8 py-3">
 Schedule Demo
 </Button>
 </div>
 </div>
 );
};

// Features CTA Component
const FeaturesCTA = () => {
 return (
 <div className="max-w-6xl mx-auto bg-white border-2 border-black p-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
 <div className="grid lg:grid-cols-2 gap-12 items-center">
 <div>
 <h4 className="text-3xl font-bold mb-6">
 Everything You Need to Succeed
 </h4>
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
 <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3">
 Get Started Now
 <ArrowRightIcon className="ml-2 h-4 w-4" />
 </Button>
 <Button variant="outline" className="border-black px-8 py-3">
 Learn More
 </Button>
 </div>
 </div>
 <div className="relative">
 <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center border-2 border-black">
 <img
 src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop"
 alt="Dashboard preview"
 className="object-cover w-full h-full"
 />
 </div>
 </div>
 </div>
 </div>
 );
};

// Urgency CTA Component
const UrgencyCTA = () => {
 return (
 <div className="max-w-4xl mx-auto bg-gradient-to-r from-yellow-100 to-orange-100 border-2 border-black p-12 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
 <div className="inline-flex items-center gap-2 bg-yellow-300 px-4 py-2 text-sm font-medium mb-6 border-2 border-black">
 <TrendingUpIcon className="h-4 w-4" />
 Limited Time Offer
 </div>
 <h4 className="text-4xl font-bold mb-4">
 50% Off for Early Adopters
 </h4>
 <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
 Be among the first 100 customers and save 50% on your first year.
 This exclusive offer expires in 7 days.
 </p>
 <div className="flex items-center justify-center gap-8 mb-8">
 <div className="text-center">
 <div className="text-2xl font-bold">06</div>
 <p className="text-sm text-gray-600">Days</p>
 </div>
 <div className="text-center">
 <div className="text-2xl font-bold">14</div>
 <p className="text-sm text-gray-600">Hours</p>
 </div>
 <div className="text-center">
 <div className="text-2xl font-bold">32</div>
 <p className="text-sm text-gray-600">Minutes</p>
 </div>
 <div className="text-center">
 <div className="text-2xl font-bold">18</div>
 <p className="text-sm text-gray-600">Seconds</p>
 </div>
 </div>
 <Button className="bg-black text-white hover:bg-gray-800 px-12 py-3">
 Claim Your Discount
 <ArrowRightIcon className="ml-2 h-4 w-4" />
 </Button>
 </div>
 );
};

export default function CallToActionPage() {
 return (
 <main className="min-h-screen bg-background">
 {/* Page Header */}
 <section className="container max-w-6xl mx-auto px-6 py-16">
 <div className="text-center max-w-3xl mx-auto">
 <h1 className="text-4xl lg:text-5xl font-bold mb-6">
 Call to Action <span className="bg-yellow-300 px-2 py-1 transform -rotate-1 inline-block">Sections</span>
 </h1>
 <p className="text-lg text-gray-600 mb-8">
 Convert visitors with compelling call-to-action sections. Drive engagement
 and encourage users to take the next step.
 </p>
 </div>
 </section>

 {/* CTA Blocks */}
 <section className="container max-w-6xl mx-auto px-6 py-16 space-y-16">

 {/* Simple CTA */}
 <div className="space-y-6">
 <div className="border-2 border-dashed border-gray-300 p-8 bg-gray-50">
 <SimpleCTA />
 </div>
 <CodeDisplay title="Simple CTA" code={simpleCTACode} />
 </div>

 {/* Features CTA */}
 <div className="space-y-6">
 <div className="border-2 border-dashed border-gray-300 p-8 bg-gray-50">
 <FeaturesCTA />
 </div>
 <CodeDisplay title="Features CTA" code={featuresCTACode} />
 </div>

 {/* Urgency CTA */}
 <div className="space-y-6">
 <div className="border-2 border-dashed border-gray-300 p-8 bg-gray-50">
 <UrgencyCTA />
 </div>
 <CodeDisplay title="Urgency CTA" code={urgencyCTACode} />
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