"use client";

import React from"react";
import Link from"next/link";
import Image from"next/image";
import { Button, Badge } from"@/components/retroui";
import { ArrowRightIcon, HeartIcon, ShareIcon, CalendarIcon, UserIcon, StarIcon, MinusIcon, PlusIcon, CodeIcon } from"lucide-react";
import { CodeDisplay } from"@/components/CodeDisplay";

// Code snippets for each component
const productCard01Code = `import React from"react";
import Image from"next/image";
import { Button } from"@/components/retroui";
import { HeartIcon, ShareIcon } from"lucide-react";

const ProductCard01 = () => (
 <div className="max-w-sm mx-auto bg-white border-2 border-black overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
 <div className="relative">
 <Image
 src="https://picsum.photos/400/300?random=20"
 alt="Nike shoe"
 width={400}
 height={300}
 className="w-full h-48 object-cover"
 />
 <div className="absolute top-3 right-3 flex gap-2">
 <Button size="sm" variant="outline" className="w-8 h-8 p-0 bg-white">
 <HeartIcon className="h-4 w-4" />
 </Button>
 <Button size="sm" variant="outline" className="w-8 h-8 p-0 bg-white">
 <ShareIcon className="h-4 w-4" />
 </Button>
 </div>
 </div>
 <div className="p-4">
 <h3 className="text-lg font-bold mb-2">Nike Air Max 270</h3>
 <p className="text-gray-600 text-sm mb-3">
 The Nike Air Max 270 delivers visible cushioning under every step.
 </p>
 <div className="flex items-center justify-between">
 <span className="text-2xl font-bold">$150</span>
 <Button className="bg-black text-white hover:bg-gray-800">
 Add to Cart
 </Button>
 </div>
 </div>
 </div>
);`;

const profileCard01Code = `import React from"react";
import Image from"next/image";
import { Button, Badge } from"@/components/retroui";

const ProfileCard01 = () => (
 <div className="max-w-sm mx-auto bg-white border-2 border-black overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
 <div className="p-6">
 <div className="flex items-center gap-4 mb-4">
 <Image
 src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
 alt="profile"
 width={60}
 height={60}
 className="w-12 h-12 object-cover border-2 border-black"
 />
 <div className="flex-1">
 <div className="flex items-center justify-between">
 <div>
 <h3 className="text-lg font-bold">John Doe</h3>
 <p className="text-gray-600 text-sm">Senior Developer</p>
 </div>
 <Button size="sm" className="bg-black text-white hover:bg-gray-800">
 Follow
 </Button>
 </div>
 </div>
 </div>
 <p className="text-gray-700 text-sm mb-4">
 Building cool stuff with React and TypeScript. Open source enthusiast.
 </p>
 <div className="flex gap-2 flex-wrap">
 <Badge variant="outline" className="bg-blue-100 text-blue-800 border border-blue-300">React</Badge>
 <Badge variant="outline" className="bg-blue-100 text-blue-800 border border-blue-300">TypeScript</Badge>
 <Badge variant="outline" className="bg-green-100 text-green-800 border border-green-300">Node.js</Badge>
 </div>
 </div>
 </div>
);`;

const profileCard02Code = `import React from"react";
import Image from"next/image";
import { Button } from"@/components/retroui";
import { HeartIcon, CalendarIcon } from"lucide-react";

const ProfileCard02 = () => (
 <div className="max-w-sm mx-auto bg-white border-2 border-black overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
 <div className="p-6">
 <div className="flex items-center justify-between mb-4">
 <div className="flex items-center gap-3">
 <Image
 src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face"
 alt="profile"
 width={60}
 height={60}
 className="w-12 h-12 object-cover border-2 border-black"
 />
 <div>
 <h3 className="text-lg font-bold">Jenny Wilson</h3>
 <p className="text-gray-600 text-sm">Web developer</p>
 </div>
 </div>
 <Button size="sm" variant="outline" className="w-8 h-8 p-0">
 <HeartIcon className="h-4 w-4" />
 </Button>
 </div>
 <p className="text-gray-700 text-sm mb-4">
 Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do cididunt.
 </p>
 <div className="flex items-center justify-between text-sm text-gray-500">
 <div className="flex items-center gap-1">
 <CalendarIcon className="h-4 w-4" />
 <span>September 23, 2021</span>
 </div>
 <div className="flex gap-2">
 <span className="text-blue-600">#react js</span>
 <span className="text-blue-600">#JavaScript</span>
 <span className="text-blue-600">#Angular</span>
 </div>
 </div>
 </div>
 </div>
);`;

const teamCardCode = `import React from"react";
import Image from"next/image";
import { Button } from"@/components/retroui";

const TeamCard = () => (
 <div className="max-w-sm mx-auto bg-white border-2 border-black overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
 <div className="p-6">
 <div className="flex items-center space-x-4 mb-4">
 <div className="relative w-12 h-12">
 <Image
 src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop&crop=face"
 alt="Team Lead"
 width={48}
 height={48}
 className="w-full h-full object-cover border-2 border-black"
 />
 </div>
 <div>
 <h3 className="text-lg font-bold">Design Team</h3>
 <p className="text-gray-600 text-sm">5 members</p>
 </div>
 </div>
 <p className="text-gray-700 mb-4">
 Creating beautiful and functional user experiences for our products.
 </p>
 <div className="flex -space-x-2 mb-4">
 {[1, 2, 3, 4].map((i) => (
 <div key={i} className="relative w-8 h-8 border-2 border-white overflow-hidden">
 <Image
 src={\`https://picsum.photos/32/32?random=\${20 + i}\`}
 alt={\`Member \${i}\`}
 width={32}
 height={32}
 className="w-full h-full object-cover"
 />
 </div>
 ))}
 <div className="w-8 h-8 bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-bold">
 +1
 </div>
 </div>
 <Button className="w-full bg-black text-white hover:bg-gray-800">
 View Team
 </Button>
 </div>
 </div>
);`;

const pricingCardCode = `import React from"react";
import { Button } from"@/components/retroui";

const PricingCard = () => (
 <div className="max-w-sm mx-auto bg-white border-2 border-black overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
 <div className="bg-yellow-300 p-4 text-center border-b-2 border-black">
 <h3 className="text-xl font-bold">Pro Plan</h3>
 <p className="text-sm">Most Popular</p>
 </div>
 <div className="p-6">
 <div className="text-center mb-6">
 <div className="text-4xl font-bold mb-2">$29</div>
 <p className="text-gray-600">per month</p>
 </div>
 <ul className="space-y-3 mb-6">
 <li className="flex items-center">
 <div className="w-2 h-2 bg-green-500 mr-3"></div>
 Unlimited projects
 </li>
 <li className="flex items-center">
 <div className="w-2 h-2 bg-green-500 mr-3"></div>
 Priority support
 </li>
 <li className="flex items-center">
 <div className="w-2 h-2 bg-green-500 mr-3"></div>
 Advanced analytics
 </li>
 <li className="flex items-center">
 <div className="w-2 h-2 bg-green-500 mr-3"></div>
 Team collaboration
 </li>
 </ul>
 <Button className="w-full bg-black text-white hover:bg-gray-800">
 Get Started
 </Button>
 </div>
 </div>
);`;

// Product Card 01 Component
const ProductCard01 = () => (
 <div className="max-w-sm mx-auto bg-white border-2 border-black overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
 <div className="relative">
 <Image
 src="https://picsum.photos/400/300?random=30"
 alt="Nike shoe"
 width={400}
 height={300}
 className="w-full h-48 object-cover"
 />
 </div>
 <div className="p-6">
 <h2 className="text-xl font-bold mb-2">Nike Air Max</h2>
 <p className="text-gray-600 text-sm mb-4">
 Lorem ipsum dolor sit amet consectetur adipiscing elitsed mod tempor incididunt.
 </p>
 <div className="flex items-center justify-between mb-4">
 <div className="flex items-center gap-2">
 <span className="text-lg font-bold text-red-500">$16.95</span>
 <span className="text-sm text-gray-500 line-through">$83.99</span>
 </div>
 <div className="flex items-center gap-2">
 <Button size="sm" variant="outline" className="w-8 h-8 p-0 border-black">
 <MinusIcon className="h-4 w-4" />
 </Button>
 <span className="text-lg font-semibold">2</span>
 <Button size="sm" variant="outline" className="w-8 h-8 p-0 border-black">
 <PlusIcon className="h-4 w-4" />
 </Button>
 </div>
 </div>
 <Button className="w-full bg-black text-white hover:bg-gray-800">
 ADD TO CART
 </Button>
 </div>
 </div>
);

// Profile Card Component 01
const ProfileCard01 = () => (
 <div className="max-w-sm mx-auto bg-white border-2 border-black overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
 <div className="p-6">
 <div className="flex items-center gap-4 mb-4">
 <Image
 src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
 alt="profile"
 width={64}
 height={64}
 className="w-16 h-16 object-cover border-2 border-black"
 />
 <div className="flex-1">
 <div className="flex items-center justify-between">
 <div>
 <h3 className="text-lg font-bold">John Doe</h3>
 <p className="text-gray-600 text-sm">Senior Developer</p>
 </div>
 <Button size="sm" className="bg-black text-white hover:bg-gray-800">
 Follow
 </Button>
 </div>
 </div>
 </div>
 <p className="text-gray-700 text-sm mb-4">
 Building cool stuff with React and TypeScript. Open source enthusiast.
 </p>
 <div className="flex gap-2 flex-wrap">
 <Badge variant="outline" className="bg-blue-100 text-blue-800 border border-blue-300">React</Badge>
 <Badge variant="outline" className="bg-blue-100 text-blue-800 border border-blue-300">TypeScript</Badge>
 <Badge variant="outline" className="bg-green-100 text-green-800 border border-green-300">Node.js</Badge>
 </div>
 </div>
 </div>
);

// Profile Card Component 02
const ProfileCard02 = () => (
 <div className="max-w-sm mx-auto bg-white border-2 border-black overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
 <div className="p-6">
 <div className="flex items-center justify-between mb-4">
 <div className="flex items-center gap-3">
 <Image
 src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face"
 alt="profile"
 width={60}
 height={60}
 className="w-12 h-12 object-cover border-2 border-black"
 />
 <div>
 <h3 className="text-lg font-bold">Jenny Wilson</h3>
 <p className="text-gray-600 text-sm">Web developer</p>
 </div>
 </div>
 <Button size="sm" variant="outline" className="w-8 h-8 p-0">
 <HeartIcon className="h-4 w-4" />
 </Button>
 </div>
 <p className="text-gray-700 text-sm mb-4">
 Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do cididunt.
 </p>
 <div className="flex items-center justify-between text-sm text-gray-500">
 <div className="flex items-center gap-1">
 <CalendarIcon className="h-4 w-4" />
 <span>September 23, 2021</span>
 </div>
 <div className="flex gap-2">
 <span className="text-blue-600">#react js</span>
 <span className="text-blue-600">#JavaScript</span>
 <span className="text-blue-600">#Angular</span>
 </div>
 </div>
 </div>
 </div>
);

// Team Card Component
const TeamCard = () => (
 <div className="max-w-sm mx-auto bg-white border-2 border-black overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
 <div className="p-6">
 <div className="flex items-center space-x-4 mb-4">
 <div className="relative w-12 h-12">
 <Image
 src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop&crop=face"
 alt="Team Lead"
 width={48}
 height={48}
 className="w-full h-full object-cover border-2 border-black"
 />
 </div>
 <div>
 <h3 className="text-lg font-bold">Design Team</h3>
 <p className="text-gray-600 text-sm">5 members</p>
 </div>
 </div>
 <p className="text-gray-700 mb-4">
 Creating beautiful and functional user experiences for our products.
 </p>
 <div className="flex -space-x-2 mb-4">
 {[1, 2, 3, 4].map((i) => (
 <div key={i} className="relative w-8 h-8 border-2 border-white overflow-hidden">
 <Image
 src={`https://picsum.photos/32/32?random=${20 + i}`}
 alt={`Member ${i}`}
 width={32}
 height={32}
 className="w-full h-full object-cover"
 />
 </div>
 ))}
 <div className="w-8 h-8 bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-bold">
 +1
 </div>
 </div>
 <Button className="w-full bg-black text-white hover:bg-gray-800">
 View Team
 </Button>
 </div>
 </div>
);

// Pricing Card Component
const PricingCard = () => (
 <div className="max-w-sm mx-auto bg-white border-2 border-black overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
 <div className="bg-yellow-300 p-4 text-center border-b-2 border-black">
 <h3 className="text-xl font-bold">Pro Plan</h3>
 <p className="text-sm">Most Popular</p>
 </div>
 <div className="p-6">
 <div className="text-center mb-6">
 <div className="text-4xl font-bold mb-2">$29</div>
 <p className="text-gray-600">per month</p>
 </div>
 <ul className="space-y-3 mb-6">
 <li className="flex items-center">
 <div className="w-2 h-2 bg-green-500 mr-3"></div>
 Unlimited projects
 </li>
 <li className="flex items-center">
 <div className="w-2 h-2 bg-green-500 mr-3"></div>
 Priority support
 </li>
 <li className="flex items-center">
 <div className="w-2 h-2 bg-green-500 mr-3"></div>
 Advanced analytics
 </li>
 <li className="flex items-center">
 <div className="w-2 h-2 bg-green-500 mr-3"></div>
 Team collaboration
 </li>
 </ul>
 <Button className="w-full bg-black text-white hover:bg-gray-800">
 Get Started
 </Button>
 </div>
 </div>
);

export default function CardsPage() {
 return (
 <main className="min-h-screen bg-background">
 {/* Page Header */}
 <section className="container max-w-6xl mx-auto px-6 py-16">
 <div className="text-center max-w-3xl mx-auto">
 <h1 className="text-4xl lg:text-5xl font-bold mb-6">
 Card <span className="bg-yellow-300 px-2 py-1 transform -rotate-1 inline-block">Components</span>
 </h1>
 <p className="text-lg text-gray-600 mb-8">
 Beautiful card components for showcasing products, profiles, teams, and pricing information.
 </p>
 </div>
 </section>

 {/* Cards Blocks */}
 <section className="container max-w-6xl mx-auto px-6 py-16 space-y-16">

 {/* Product Card 01 */}
 <div className="space-y-6">
 <div className="border-2 border-dashed border-gray-300 p-8 bg-gray-50">
 <ProductCard01 />
 </div>
 <CodeDisplay title="Product Card 01" code={productCard01Code} />
 </div>

 {/* Profile Card 01 */}
 <div className="space-y-6">
 <div className="border-2 border-dashed border-gray-300 p-8 bg-gray-50">
 <ProfileCard01 />
 </div>
 <CodeDisplay title="Profile Card 01" code={profileCard01Code} />
 </div>

 {/* Profile Card 02 */}
 <div className="space-y-6">
 <div className="border-2 border-dashed border-gray-300 p-8 bg-gray-50">
 <ProfileCard02 />
 </div>
 <CodeDisplay title="Profile Card 02" code={profileCard02Code} />
 </div>

 {/* Team Card */}
 <div className="space-y-6">
 <div className="border-2 border-dashed border-gray-300 p-8 bg-gray-50">
 <TeamCard />
 </div>
 <CodeDisplay title="Team Card" code={teamCardCode} />
 </div>

 {/* Pricing Card */}
 <div className="space-y-6">
 <div className="border-2 border-dashed border-gray-300 p-8 bg-gray-50">
 <PricingCard />
 </div>
 <CodeDisplay title="Pricing Card" code={pricingCardCode} />
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