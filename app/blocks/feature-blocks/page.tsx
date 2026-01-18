"use client";

import React from"react";
import Link from"next/link";
import Image from"next/image";
import { Text, Button, Card } from"@/components/voidui";
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
} from"lucide-react";
import { CodeDisplay } from"@/components/CodeDisplay";

// Code snippets for feature components
const iconGridFeaturesCode = `import React from"react";
import { ZapIcon, ShieldIcon, SmartphoneIcon, CloudIcon, BarChart3Icon, UsersIcon } from"lucide-react";

const IconGridFeatures = () => {
 const features = [
 {
 icon: ZapIcon,
 title:"Lightning Fast",
 description:"Optimized for performance with sub-second response times and global CDN distribution."
 },
 {
 icon: ShieldIcon,
 title:"Enterprise Security",
 description:"Bank-grade security with end-to-end encryption and SOC 2 Type II compliance."
 },
 {
 icon: SmartphoneIcon,
 title:"Mobile First",
 description:"Responsive design that works perfectly on all devices and screen sizes."
 },
 {
 icon: CloudIcon,
 title:"Cloud Native",
 description:"Built for the cloud with automatic scaling and 99.9% uptime guarantee."
 },
 {
 icon: BarChart3Icon,
 title:"Advanced Analytics",
 description:"Real-time insights and detailed analytics to track your success metrics."
 },
 {
 icon: UsersIcon,
 title:"Team Collaboration",
 description:"Built-in collaboration tools to keep your team aligned and productive."
 }
 ];

 return (
 <div className="max-w-6xl mx-auto bg-white border-2 border-black p-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
 <div className="text-center mb-12">
 <h3 className="text-3xl font-bold mb-4">Everything You Need to Succeed</h3>
 <p className="text-gray-600 max-w-2xl mx-auto">
 Our comprehensive platform provides all the tools and features you need to build, deploy, and scale your applications.
 </p>
 </div>

 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
 {features.map((feature, index) => {
 const IconComponent = feature.icon;
 return (
 <div key={index} className="text-center">
 <div className="w-16 h-16 bg-blue-100 flex items-center justify-center mx-auto mb-4 border-2 border-black">
 <IconComponent className="h-8 w-8 text-blue-600" />
 </div>
 <h4 className="text-lg font-bold mb-3">{feature.title}</h4>
 <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
 </div>
 );
 })}
 </div>
 </div>
 );
};`;

const splitLayoutFeaturesCode = `import React from"react";
import { Button } from"@/components/voidui";
import { CheckIcon, ArrowRightIcon } from"lucide-react";

const SplitLayoutFeatures = () => {
 return (
 <div className="max-w-6xl mx-auto bg-white border-2 border-black p-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
 <div className="space-y-16">
 {/* Feature 1 */}
 <div className="grid lg:grid-cols-2 gap-12 items-center">
 <div>
 <h3 className="text-3xl font-bold mb-4">Powerful Analytics Dashboard</h3>
 <p className="text-gray-600 mb-8 leading-relaxed">
 Get deep insights into your business with our comprehensive analytics dashboard.
 Track key metrics, identify trends, and make data-driven decisions.
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
 <Button className="bg-black text-white hover:bg-gray-800">
 Learn More
 <ArrowRightIcon className="ml-2 h-4 w-4" />
 </Button>
 </div>
 <div className="relative">
 <img
 src="https://picsum.photos/500/400?random=60"
 alt="Analytics dashboard"
 className="border-2 border-black w-full h-80 object-cover"
 />
 </div>
 </div>

 {/* Feature 2 */}
 <div className="grid lg:grid-cols-2 gap-12 items-center">
 <div className="order-2 lg:order-1">
 <img
 src="https://picsum.photos/500/400?random=61"
 alt="Security features"
 className="border-2 border-black w-full h-80 object-cover"
 />
 </div>
 <div className="order-1 lg:order-2">
 <h3 className="text-3xl font-bold mb-4">Enterprise-Grade Security</h3>
 <p className="text-gray-600 mb-8 leading-relaxed">
 Your data security is our top priority. We implement multiple layers of protection
 to ensure your information stays safe and secure.
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
 <Button className="bg-black text-white hover:bg-gray-800">
 Security Details
 <ArrowRightIcon className="ml-2 h-4 w-4" />
 </Button>
 </div>
 </div>
 </div>
 </div>
 );
};`;

// Icon Grid Features Component
const IconGridFeatures = () => {
 const features = [
 {
 icon: ZapIcon,
 title:"Lightning Fast",
 description:"Optimized for performance with sub-second response times and global CDN distribution."
 },
 {
 icon: ShieldIcon,
 title:"Enterprise Security",
 description:"Bank-grade security with end-to-end encryption and SOC 2 Type II compliance."
 },
 {
 icon: SmartphoneIcon,
 title:"Mobile First",
 description:"Responsive design that works perfectly on all devices and screen sizes."
 },
 {
 icon: CloudIcon,
 title:"Cloud Native",
 description:"Built for the cloud with automatic scaling and 99.9% uptime guarantee."
 },
 {
 icon: BarChart3Icon,
 title:"Advanced Analytics",
 description:"Real-time insights and detailed analytics to track your success metrics."
 },
 {
 icon: UsersIcon,
 title:"Team Collaboration",
 description:"Built-in collaboration tools to keep your team aligned and productive."
 }
 ];

 return (
 <div className="max-w-6xl mx-auto bg-white border-2 border-black p-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
 <div className="text-center mb-12">
 <h3 className="text-3xl font-bold mb-4">Everything You Need to Succeed</h3>
 <p className="text-gray-600 max-w-2xl mx-auto">
 Our comprehensive platform provides all the tools and features you need to build, deploy, and scale your applications.
 </p>
 </div>

 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
 {features.map((feature, index) => {
 const IconComponent = feature.icon;
 return (
 <div key={index} className="text-center">
 <div className="w-16 h-16 bg-blue-100 flex items-center justify-center mx-auto mb-4 border-2 border-black">
 <IconComponent className="h-8 w-8 text-blue-600" />
 </div>
 <h4 className="text-lg font-bold mb-3">{feature.title}</h4>
 <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
 </div>
 );
 })}
 </div>
 </div>
 );
};

// Split Layout Features Component
const SplitLayoutFeatures = () => {
 return (
 <div className="max-w-6xl mx-auto bg-white border-2 border-black p-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
 <div className="space-y-16">
 {/* Feature 1 */}
 <div className="grid lg:grid-cols-2 gap-12 items-center">
 <div>
 <h3 className="text-3xl font-bold mb-4">Powerful Analytics Dashboard</h3>
 <p className="text-gray-600 mb-8 leading-relaxed">
 Get deep insights into your business with our comprehensive analytics dashboard.
 Track key metrics, identify trends, and make data-driven decisions.
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
 <Button className="bg-black text-white hover:bg-gray-800">
 Learn More
 <ArrowRightIcon className="ml-2 h-4 w-4" />
 </Button>
 </div>
 <div className="relative">
 <img
 src="https://picsum.photos/500/400?random=62"
 alt="Analytics dashboard"
 className="border-2 border-black w-full h-80 object-cover"
 />
 </div>
 </div>

 {/* Feature 2 */}
 <div className="grid lg:grid-cols-2 gap-12 items-center">
 <div className="order-2 lg:order-1">
 <img
 src="https://picsum.photos/500/400?random=63"
 alt="Security features"
 className="border-2 border-black w-full h-80 object-cover"
 />
 </div>
 <div className="order-1 lg:order-2">
 <h3 className="text-3xl font-bold mb-4">Enterprise-Grade Security</h3>
 <p className="text-gray-600 mb-8 leading-relaxed">
 Your data security is our top priority. We implement multiple layers of protection
 to ensure your information stays safe and secure.
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
 <Button className="bg-black text-white hover:bg-gray-800">
 Security Details
 <ArrowRightIcon className="ml-2 h-4 w-4" />
 </Button>
 </div>
 </div>
 </div>
 </div>
 );
};

export default function FeatureBlocksPage() {
 return (
 <main className="min-h-screen bg-background">
 {/* Page Header */}
 <section className="container max-w-6xl mx-auto px-6 py-16">
 <div className="text-center max-w-3xl mx-auto">
 <h1 className="text-4xl lg:text-5xl font-bold mb-6">
 Feature <span className="bg-yellow-300 px-2 py-1 transform -rotate-1 inline-block">Blocks</span>
 </h1>
 <p className="text-lg text-gray-600 mb-8">
 Showcase your product features effectively with these versatile
 feature section layouts. Perfect for highlighting key benefits and capabilities.
 </p>
 </div>
 </section>

 {/* Feature Blocks */}
 <section className="container max-w-6xl mx-auto px-6 py-16 space-y-16">

 {/* Icon Grid Features */}
 <div className="space-y-6">
 <div className="border-2 border-dashed border-gray-300 p-8 bg-gray-50">
 <IconGridFeatures />
 </div>
 <CodeDisplay title="Icon Grid Features" code={iconGridFeaturesCode} />
 </div>

 {/* Split Layout Features */}
 <div className="space-y-6">
 <div className="border-2 border-dashed border-gray-300 p-8 bg-gray-50">
 <SplitLayoutFeatures />
 </div>
 <CodeDisplay title="Split Layout Features" code={splitLayoutFeaturesCode} />
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