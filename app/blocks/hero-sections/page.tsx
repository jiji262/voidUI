"use client";

import React from"react";
import Link from"next/link";
import Image from"next/image";
import { Button } from"@/components/retroui";
import { ArrowRightIcon, PlayIcon, StarIcon, CheckIcon, CodeIcon } from"lucide-react";
import { CodeDisplay } from"@/components/CodeDisplay";

// Code snippets for hero sections
const heroSection01Code = `import React from"react";
import { Button } from"@/components/retroui";
import { PlayIcon } from"lucide-react";

const HeroSection01 = () => (
 <div className="bg-white min-h-screen flex flex-col">
 {/* Badge */}
 <div className="text-center pt-16 pb-8">
 <div className="inline-flex items-center px-4 py-2 bg-blue-100 border border-blue-300 text-sm text-blue-800">
 🚀 Launching on Product Hunt
 </div>
 </div>

 {/* Main Content */}
 <div className="flex-1 flex items-center justify-center px-6">
 <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
 {/* Left Content */}
 <div className="text-center lg:text-left">
 <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
 Build Better{""}
 <span className="bg-yellow-300 px-2 py-1 transform -rotate-1 inline-block">
 Software
 </span>{""}
 Faster
 </h1>
 <p className="text-xl text-gray-600 mb-8 max-w-lg">
 The only platform you need to build, deploy, and scale your SaaS application.
 Join 10,000+ developers who ship better code.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
 <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg">
 Start Building →
 </Button>
 <Button variant="outline" className="px-8 py-3 text-lg border-2 border-black">
 Watch Demo
 </Button>
 </div>
 </div>

 {/* Right Content - Video Preview */}
 <div className="relative">
 <div className="bg-gray-900 p-4 shadow-2xl">
 <div className="bg-gray-800 p-8 text-center">
 <div className="w-16 h-16 bg-blue-500 flex items-center justify-center mx-auto mb-4">
 <PlayIcon className="h-8 w-8 text-white" />
 </div>
 <div className="text-white text-lg font-semibold">Product Demo</div>
 <div className="text-gray-400">Watch Now</div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
);`;

const heroSection02Code = `import React from"react";
import { Button } from"@/components/retroui";
import { ArrowRightIcon, PlayIcon } from"lucide-react";

const HeroSection02 = () => (
 <div className="bg-white min-h-screen">
 {/* Navigation */}
 <nav className="flex items-center justify-between p-6 max-w-6xl mx-auto">
 <div className="flex items-center gap-2">
 <div className="w-8 h-8 bg-black flex items-center justify-center text-white font-bold">
"NO"
 </div>
 <span className="font-bold text-xl">VA</span>
 </div>
 <div className="hidden md:flex items-center gap-8">
 <a href="#" className="text-gray-600 hover:text-black">Documentation</a>
 <a href="#" className="text-gray-600 hover:text-black">Products</a>
 <a href="#" className="text-gray-600 hover:text-black">Pricing</a>
 <a href="#" className="text-gray-600 hover:text-black">Blog</a>
 </div>
 <Button className="bg-black text-white hover:bg-gray-800">
 Start Building
 </Button>
 </nav>

 {/* Hero Content */}
 <div className="max-w-6xl mx-auto px-6 py-16">
 <div className="grid lg:grid-cols-2 gap-12 items-center">
 <div>
 <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm mb-6">
 New API v2 Released
 </div>
 <h1 className="text-6xl font-bold mb-6">
 <span className="bg-yellow-300 px-2 py-1 transform -rotate-1 inline-block">Code</span>
 <br />The Future
 </h1>
 <p className="text-xl text-gray-600 mb-8">
 Transform your ideas into reality with our next-gen development platform.
 Faster deployment, smarter scaling, zero limitations.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 mb-8">
 <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3">
 Get Started
 <ArrowRightIcon className="ml-2 h-4 w-4" />
 </Button>
 <Button variant="outline" className="border-black px-8 py-3">
 <PlayIcon className="mr-2 h-4 w-4" />
 Watch Demo
 </Button>
 </div>
 <div className="flex items-center gap-4">
 <div className="flex -space-x-2">
 <img className="w-8 h-8 border-2 border-white" src="https://picsum.photos/32/32?random=50" alt="User" />
 <img className="w-8 h-8 border-2 border-white" src="https://picsum.photos/32/32?random=51" alt="User" />
 <img className="w-8 h-8 border-2 border-white" src="https://picsum.photos/32/32?random=52" alt="User" />
 </div>
 <div>
 <div className="font-bold">250K</div>
 <div className="text-sm text-gray-600">Trusted by over developers worldwide</div>
 </div>
 </div>
 </div>

 {/* Terminal Demo */}
 <div className="space-y-4">
 <div className="bg-gray-900 p-4 text-green-400 font-mono text-sm">
 <div className="flex items-center gap-2 mb-2">
 <span className="text-gray-500">></span>
 <span className="text-blue-400">nova</span>
 <span className="text-white">init my-project</span>
 </div>
 <div className="text-green-400">✓ Creating new project...</div>
 <div className="text-green-400">✓ Installing dependencies...</div>
 <div className="text-green-400">✓ Configuring environment...</div>
 </div>
 <div className="bg-gray-900 p-4 text-green-400 font-mono text-sm">
 <div className="flex items-center gap-2 mb-2">
 <span className="text-gray-500">></span>
 <span className="text-blue-400">nova</span>
 <span className="text-white">deploy --prod</span>
 </div>
 <div className="text-green-400">✓ Building project...</div>
 <div className="text-green-400">✓ Running tests...</div>
 <div className="text-green-400">✓ Deploying to cloud...</div>
 </div>
 <div className="bg-gray-900 p-4 text-green-400 font-mono text-sm">
 <div className="text-green-400">🚀 Deployed successfully!</div>
 <div className="text-blue-400">https://my-project.nexus.app</div>
 </div>
 </div>
 </div>
 </div>
 </div>
);`;

// Hero Section 01 Component
const HeroSection01 = () => (
 <div className="bg-white min-h-screen flex flex-col">
 {/* Badge */}
 <div className="text-center pt-16 pb-8">
 <div className="inline-flex items-center px-4 py-2 bg-blue-100 border border-blue-300 text-sm text-blue-800">
 🚀 Launching on Product Hunt
 </div>
 </div>

 {/* Main Content */}
 <div className="flex-1 flex items-center justify-center px-6">
 <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
 {/* Left Content */}
 <div className="text-center lg:text-left">
 <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
 Build Better{""}
 <span className="bg-yellow-300 px-2 py-1 transform -rotate-1 inline-block">
 Software
 </span>{""}
 Faster
 </h1>
 <p className="text-xl text-gray-600 mb-8 max-w-lg">
 The only platform you need to build, deploy, and scale your SaaS application.
 Join 10,000+ developers who ship better code.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
 <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg">
 Start Building →
 </Button>
 <Button variant="outline" className="px-8 py-3 text-lg border-2 border-black">
 Watch Demo
 </Button>
 </div>
 </div>

 {/* Right Content - Video Preview */}
 <div className="relative">
 <div className="bg-gray-900 p-4 shadow-2xl">
 <div className="bg-gray-800 p-8 text-center">
 <div className="w-16 h-16 bg-blue-500 flex items-center justify-center mx-auto mb-4">
 <PlayIcon className="h-8 w-8 text-white" />
 </div>
 <div className="text-white text-lg font-semibold">Product Demo</div>
 <div className="text-gray-400 text-sm">Watch Now</div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
);

// Hero Section 02 Component
const HeroSection02 = () => (
 <div className="bg-white min-h-screen">
 {/* Navigation */}
 <nav className="flex items-center justify-between p-6 border-b border-gray-200">
 <div className="flex items-center gap-2">
 <div className="w-8 h-8 bg-black flex items-center justify-center">
 <span className="text-white font-bold text-sm">"NO"</span>
 </div>
 <span className="font-bold text-xl">VA</span>
 </div>
 <div className="hidden md:flex items-center gap-8">
 <a href="#" className="text-gray-600 hover:text-black">Documentation</a>
 <a href="#" className="text-gray-600 hover:text-black">Products</a>
 <a href="#" className="text-gray-600 hover:text-black">Pricing</a>
 <a href="#" className="text-gray-600 hover:text-black">Blog</a>
 </div>
 <Button className="bg-black text-white hover:bg-gray-800">
 Start Building
 </Button>
 </nav>

 {/* Main Content */}
 <div className="max-w-6xl mx-auto px-6 py-16">
 <div className="grid lg:grid-cols-2 gap-12 items-center">
 {/* Left Content */}
 <div>
 <div className="inline-flex items-center px-3 py-1 bg-green-100 border border-green-300 text-sm text-green-800 mb-6">
 New API v2 Released
 </div>
 <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight">
 <span className="bg-yellow-300 px-2 py-1 transform rotate-1 inline-block">
 Code
 </span>{""}
 The Future
 </h1>
 <p className="text-xl text-gray-600 mb-8">
 Transform your ideas into reality with our next-gen development platform.
 Faster deployment, smarter scaling, zero limitations.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 mb-8">
 <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg">
 Get Started
 <ArrowRightIcon className="ml-2 h-5 w-5" />
 </Button>
 <Button variant="outline" className="px-8 py-3 text-lg border-2 border-black">
 <PlayIcon className="mr-2 h-5 w-5" />
 Watch Demo
 </Button>
 </div>

 {/* Social Proof */}
 <div className="flex items-center gap-4">
 <div className="flex -space-x-2">
 <Image
 src="https://picsum.photos/40/40?random=53"
 alt="User"
 width={40}
 height={40}
 className="w-10 h-10 border-2 border-white"
 />
 <Image
 src="https://picsum.photos/40/40?random=54"
 alt="User"
 width={40}
 height={40}
 className="w-10 h-10 border-2 border-white"
 />
 <Image
 src="https://picsum.photos/40/40?random=55"
 alt="User"
 width={40}
 height={40}
 className="w-10 h-10 border-2 border-white"
 />
 </div>
 <div>
 <div className="font-bold text-lg">250K</div>
 <div className="text-sm text-gray-600">Trusted by over developers worldwide</div>
 </div>
 </div>
 </div>

 {/* Right Content - Terminal */}
 <div className="space-y-4">
 <div className="bg-gray-900 p-4 text-green-400 font-mono text-sm">
 <div className="flex items-center gap-2 mb-2">
 <span className="text-gray-500">></span>
 <span className="text-blue-400">nova</span>
 <span className="text-white">init my-project</span>
 </div>
 <div className="text-green-400">✓ Creating new project...</div>
 <div className="text-green-400">✓ Installing dependencies...</div>
 <div className="text-green-400">✓ Configuring environment...</div>
 </div>

 <div className="bg-gray-900 p-4 text-green-400 font-mono text-sm">
 <div className="flex items-center gap-2 mb-2">
 <span className="text-gray-500">></span>
 <span className="text-blue-400">nova</span>
 <span className="text-white">deploy --prod</span>
 </div>
 <div className="text-green-400">✓ Building project...</div>
 <div className="text-green-400">✓ Running tests...</div>
 <div className="text-green-400">✓ Deploying to cloud...</div>
 </div>

 <div className="bg-gray-900 p-4 text-green-400 font-mono text-sm">
 <div className="text-green-400">🚀 Deployed successfully!</div>
 <div className="text-blue-400">https://my-project.nexus.app</div>
 </div>
 </div>
 </div>
 </div>
 </div>
);

export default function HeroSectionsPage() {
 return (
 <main className="min-h-screen bg-background">

 {/* Hero Blocks */}
 <section className="container max-w-6xl mx-auto px-6 py-16 space-y-16">

 {/* Hero Section 01 */}
 <div className="space-y-6">
 <div className="border-2 border-dashed border-gray-300 p-8 bg-gray-50">
 <HeroSection01 />
 </div>
 <CodeDisplay title="Hero Section 01" code={heroSection01Code} />
 </div>

 {/* Hero Section 02 */}
 <div className="space-y-6">
 <div className="border-2 border-dashed border-gray-300 p-8 bg-gray-50">
 <HeroSection02 />
 </div>
 <CodeDisplay title="Hero Section 02" code={heroSection02Code} />
 </div>

 </section>
 </main>
 );
}