"use client";

import React from"react";
import Link from"next/link";
import Image from"next/image";
import { Text, Button } from"@/components/voidui";
import { ArrowRightIcon } from"lucide-react";

const blockCategories = {
 application: [
 {
 title:"Artificial Intelligence",
 href:"/blocks/ai",
 icon:"🤖",
 variants:"1 variants",
 variantColor:"bg-yellow-300",
 },
 {
 title:"Stats",
 href:"/blocks/stats",
 icon:"👑",
 variants:"1 variants",
 variantColor:"bg-yellow-300",
 },
 {
 title:"Profile",
 href:"/blocks/profile",
 icon:"👤",
 variants:"1 variants",
 variantColor:"bg-green-300",
 },
 {
 title:"Forms",
 href:"/blocks/forms",
 icon:"📝",
 variants:"3 variants",
 variantColor:"bg-blue-300",
 customContent: (
 <div className="space-y-2">
 <div className="w-20 h-2 bg-gray-300"></div>
 <div className="w-16 h-2 bg-gray-300"></div>
 <div className="w-12 h-3 bg-yellow-400"></div>
 </div>
 ),
 },
 {
 title:"Cards",
 href:"/blocks/cards",
 icon:"🃏",
 variants:"5 variants",
 variantColor:"bg-yellow-300",
 customContent: (
 <div className="w-16 h-20 bg-white border-2 border-black shadow-sm flex flex-col">
 <div className="flex-1 bg-gray-100 border-b border-black flex items-center justify-center">
 <div className="w-2 h-2 bg-black"></div>
 </div>
 <div className="p-1 space-y-1">
 <div className="w-8 h-1 bg-black"></div>
 <div className="w-6 h-3 bg-yellow-400"></div>
 </div>
 </div>
 ),
 },
 {
 title:"Authentication",
 href:"/blocks/authentication",
 icon:"🔐",
 variants:"2 variants",
 variantColor:"bg-purple-300",
 },
 {
 title:"Sidebar",
 href:"/blocks/sidebar",
 icon:"📋",
 variants:"1 variants",
 variantColor:"bg-blue-300",
 },
 {
 title:"Onboarding",
 href:"/blocks/onboarding",
 icon:"🚀",
 variants:"1 variants",
 variantColor:"bg-green-300",
 },
 ],
 marketing: [
 {
 title:"Call to Action",
 href:"/blocks/call-to-action",
 icon:"📢",
 variants:"3 variants",
 variantColor:"bg-yellow-300",
 },
 {
 title:"Hero Sections",
 href:"/blocks/hero-sections",
 icon:"🚀",
 variants:"2 variants",
 variantColor:"bg-yellow-300",
 },
 {
 title:"Pricing Tables",
 href:"/blocks/pricing-tables",
 icon:"💰",
 variants:"2 variants",
 variantColor:"bg-yellow-300",
 },
 {
 title:"Testimonials",
 href:"/blocks/testimonials",
 icon:"💬",
 variants:"1 variants",
 variantColor:"bg-yellow-300",
 },
 {
 title:"Blogs",
 href:"/blocks/blogs",
 icon:"📰",
 variants:"2 variants",
 variantColor:"bg-yellow-300",
 },
 {
 title:"Feature Blocks",
 href:"/blocks/feature-blocks",
 icon:"⭐",
 variants:"2 variants",
 variantColor:"bg-yellow-300",
 },
 {
 title:"Navbar",
 href:"/blocks/navbar",
 icon:"🧭",
 variants:"1 variants",
 variantColor:"bg-yellow-300",
 },
 {
 title:"FAQ",
 href:"/blocks/faq",
 icon:"❓",
 variants:"2 variants",
 variantColor:"bg-yellow-300",
 },
 {
 title:"Bento Grids",
 href:"/blocks/bento-grids",
 icon:"🍱",
 variants:"1 variants",
 variantColor:"bg-yellow-300",
 },
 {
 title:"Career Sections",
 href:"/blocks/career-sections",
 icon:"💼",
 variants:"3 variants",
 variantColor:"bg-yellow-300",
 },
 {
 title:"Affiliate",
 href:"/blocks/affiliate",
 icon:"💸",
 variants:"1 variants",
 variantColor:"bg-yellow-300",
 },
 ],
};

export default function BlocksPage() {
 return (
 <main className="min-h-screen bg-background">
 {/* Hero Section */}
 <section className="container max-w-6xl mx-auto px-6 py-16">
 <div className="text-center max-w-4xl mx-auto">
 <h1 className="text-4xl lg:text-5xl font-bold mb-4">
 voidUI Blocks
 </h1>
 <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
 A collection of building blocks to help you ship faster!
 </p>
 </div>
 </section>

 {/* Application Section */}
 <section className="container max-w-6xl mx-auto px-6 pb-16">
 <div className="mb-12">
 <h2 className="text-3xl font-bold mb-8">
 <span className="bg-yellow-300 px-4 py-2 transform -rotate-1 inline-block">
 Application
 </span>
 </h2>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
 {blockCategories.application.map((category) => (
 <Link key={category.href} href={category.href}>
 <div className="group bg-white border-2 border-black overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-200">
 <div className="relative h-40 border-b-2 border-black bg-gray-50 flex items-center justify-center">
 {/* Decorative stars */}
 <div className="absolute top-4 left-4 text-yellow-400">✦</div>
 <div className="absolute top-6 right-6 text-yellow-400">✦</div>
 <div className="absolute bottom-4 left-6 text-yellow-400">✦</div>
 <div className="absolute bottom-6 right-4 text-yellow-400">✦</div>

 {/* Custom content or icon */}
 {category.customContent ? (
 category.customContent
 ) : (
 <div className="text-6xl">{category.icon}</div>
 )}
 </div>
 <div className="p-4">
 <h3 className="font-bold text-lg mb-2 text-black">
 {category.title}
 </h3>
 <span className={`inline-block px-2 py-1 text-xs font-medium text-black ${category.variantColor}`}>
 {category.variants}
 </span>
 </div>
 </div>
 </Link>
 ))}
 </div>
 </div>
 </section>

 {/* Marketing Section */}
 <section className="container max-w-6xl mx-auto px-6 pb-16">
 <div className="mb-12">
 <h2 className="text-3xl font-bold mb-8">
 <span className="bg-yellow-300 px-4 py-2 transform rotate-1 inline-block">
 Marketing
 </span>
 </h2>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
 {blockCategories.marketing.map((category) => (
 <Link key={category.href} href={category.href}>
 <div className="group bg-white border-2 border-black overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-200">
 <div className="relative h-40 border-b-2 border-black bg-gray-50 flex items-center justify-center">
 {/* Decorative stars */}
 <div className="absolute top-4 left-4 text-yellow-400">✦</div>
 <div className="absolute top-6 right-6 text-yellow-400">✦</div>
 <div className="absolute bottom-4 left-6 text-yellow-400">✦</div>
 <div className="absolute bottom-6 right-4 text-yellow-400">✦</div>

 {/* Custom content or icon */}
 {category.customContent ? (
 category.customContent
 ) : (
 <div className="text-6xl">{category.icon}</div>
 )}
 </div>
 <div className="p-4">
 <h3 className="font-bold text-lg mb-2 text-black">
 {category.title}
 </h3>
 <span className={`inline-block px-2 py-1 text-xs font-medium text-black ${category.variantColor}`}>
 {category.variants}
 </span>
 </div>
 </div>
 </Link>
 ))}
 </div>
 </div>
 </section>

 {/* CTA Section */}
 <section className="bg-gray-50 py-16">
 <div className="container max-w-6xl mx-auto px-6">
 <div className="text-center max-w-4xl mx-auto">
 <h2 className="text-3xl lg:text-4xl font-bold mb-6">
 READY TO GET STARTED?
 </h2>
 <p className="text-lg text-gray-600 mb-8">
 Get access to all blocks and components with a lifetime purchase.
 </p>
 <Link href="https://pro.voidui.dev">
 <Button className="text-lg px-8 py-4 bg-black text-white hover:bg-gray-800 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-1 hover:translate-y-1">
 Get lifetime access
 <ArrowRightIcon className="ml-2 h-4 w-4" />
 </Button>
 </Link>
 </div>
 </div>
 </section>
 </main>
 );
}
