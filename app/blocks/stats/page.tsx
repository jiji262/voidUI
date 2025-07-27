"use client";

import React, { useState } from"react";
import Link from"next/link";
import { Text, Button, Card } from"@/components/retroui";
import { TrendingUpIcon, UsersIcon, DollarSignIcon, BarChart3Icon, StarIcon, ZapIcon } from"lucide-react";
import { CodeDisplay } from"@/components/CodeDisplay";

// Code snippet for Simple Stats Card
const simpleStatsCode = `import React from"react";
import { UsersIcon, TrendingUpIcon, DollarSignIcon, BarChart3Icon, StarIcon } from"lucide-react";

const SimpleStatsCard = () => {
 return (
 <div className="max-w-4xl mx-auto bg-white border-2 border-black p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
 <div className="text-center mb-8">
 <h3 className="text-2xl font-bold mb-2">Company Statistics</h3>
 <p className="text-gray-600">Real-time metrics and achievements</p>
 </div>

 <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
 <div className="text-center p-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
 <div className="w-12 h-12 bg-blue-300 flex items-center justify-center mx-auto mb-4 border-2 border-black">
 <UsersIcon className="h-6 w-6" />
 </div>
 <div className="text-3xl font-bold mb-2">10,000+</div>
 <p className="text-gray-600 text-sm">Happy<br/>Customers</p>
 </div>

 <div className="text-center p-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
 <div className="w-12 h-12 bg-green-300 flex items-center justify-center mx-auto mb-4 border-2 border-black">
 <TrendingUpIcon className="h-6 w-6" />
 </div>
 <div className="text-3xl font-bold mb-2">99.9%</div>
 <p className="text-gray-600 text-sm">Uptime</p>
 </div>

 <div className="text-center p-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
 <div className="w-12 h-12 bg-yellow-300 flex items-center justify-center mx-auto mb-4 border-2 border-black">
 <DollarSignIcon className="h-6 w-6" />
 </div>
 <div className="text-3xl font-bold mb-2">$2.5M</div>
 <p className="text-gray-600 text-sm">Revenue</p>
 </div>

 <div className="text-center p-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
 <div className="w-12 h-12 bg-purple-300 flex items-center justify-center mx-auto mb-4 border-2 border-black">
 <BarChart3Icon className="h-6 w-6" />
 </div>
 <div className="text-3xl font-bold mb-2">150+</div>
 <p className="text-gray-600 text-sm">Countries</p>
 </div>
 </div>

 <div className="border-t-2 border-black pt-6">
 <div className="grid grid-cols-3 gap-8 text-center">
 <div>
 <div className="text-2xl font-bold text-green-600 mb-1">↗ 23%</div>
 <p className="text-sm text-gray-600">Growth this month</p>
 </div>
 <div>
 <div className="text-2xl font-bold text-blue-600 mb-1">4.9★</div>
 <p className="text-sm text-gray-600">Customer rating</p>
 </div>
 <div>
 <div className="text-2xl font-bold text-purple-600 mb-1">24/7</div>
 <p className="text-sm text-gray-600">Support available</p>
 </div>
 </div>
 </div>
 </div>
 );
};`;

// Code snippet for Retro Stats Dashboard
const retroStatsDashboardCode = `import React, { useState } from"react";
import { DollarSignIcon, ShoppingCartIcon, UsersIcon, TrendingUpIcon, TrendingDownIcon } from"lucide-react";

const RetroStatsDashboard = () => {
 const [selectedPeriod, setSelectedPeriod] = useState('Week');

 return (
 <div className="max-w-6xl mx-auto bg-white border-2 border-black p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
 {/* Header */}
 <div className="flex justify-between items-start mb-8">
 <div>
 <h2 className="text-3xl font-bold mb-2">Retro Stats</h2>
 <p className="text-gray-600">Key metrics for your online store</p>
 </div>
 <div className="flex gap-2">
 {['Day', 'Week', 'Month', 'Year'].map((period) => (
 <button
 key={period}
 onClick={() => setSelectedPeriod(period)}
 className={\`px-4 py-2 border-2 border-black font-medium \${
 selectedPeriod === period
 ? 'bg-yellow-300'
 : 'bg-white hover:bg-gray-50'
 }\`}
 >
 {period}
 </button>
 ))}
 </div>
 </div>

 {/* Stats Cards */}
 <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
 <div className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
 <div className="flex justify-between items-start mb-4">
 <h3 className="font-bold text-gray-700">Revenue</h3>
 <div className="w-8 h-8 bg-yellow-300 border-2 border-black flex items-center justify-center">
 <DollarSignIcon className="h-4 w-4" />
 </div>
 </div>
 <div className="text-3xl font-bold mb-2">$8,492</div>
 <div className="flex items-center text-sm">
 <TrendingUpIcon className="h-4 w-4 text-green-600 mr-1" />
 <span className="text-green-600">18.7% vs last period</span>
 </div>
 </div>

 <div className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
 <div className="flex justify-between items-start mb-4">
 <h3 className="font-bold text-gray-700">Orders</h3>
 <div className="w-8 h-8 bg-blue-300 border-2 border-black flex items-center justify-center">
 <ShoppingCartIcon className="h-4 w-4" />
 </div>
 </div>
 <div className="text-3xl font-bold mb-2">187</div>
 <div className="flex items-center text-sm">
 <TrendingUpIcon className="h-4 w-4 text-green-600 mr-1" />
 <span className="text-green-600">12.4% vs last period</span>
 </div>
 </div>

 <div className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
 <div className="flex justify-between items-start mb-4">
 <h3 className="font-bold text-gray-700">Customers</h3>
 <div className="w-8 h-8 bg-green-300 border-2 border-black flex items-center justify-center">
 <UsersIcon className="h-4 w-4" />
 </div>
 </div>
 <div className="text-3xl font-bold mb-2">143</div>
 <div className="flex items-center text-sm">
 <TrendingUpIcon className="h-4 w-4 text-green-600 mr-1" />
 <span className="text-green-600">5.8% vs last period</span>
 </div>
 </div>

 <div className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
 <div className="flex justify-between items-start mb-4">
 <h3 className="font-bold text-gray-700">Conversion</h3>
 <div className="w-8 h-8 bg-red-300 border-2 border-black flex items-center justify-center">
 <TrendingDownIcon className="h-4 w-4" />
 </div>
 </div>
 <div className="text-3xl font-bold mb-2">3.8%</div>
 <div className="flex items-center text-sm">
 <TrendingDownIcon className="h-4 w-4 text-red-600 mr-1" />
 <span className="text-red-600">2.1% vs last period</span>
 </div>
 </div>
 </div>

 {/* Bottom Section */}
 <div className="grid lg:grid-cols-2 gap-6">
 {/* Revenue Breakdown */}
 <div className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
 <div className="flex justify-between items-center mb-6">
 <h3 className="text-xl font-bold">Revenue Breakdown</h3>
 <div className="bg-black text-white px-3 py-1 text-sm font-medium">
 📅 This Week
 </div>
 </div>

 <div className="space-y-4">
 <div>
 <div className="flex justify-between items-center mb-2">
 <span className="font-medium">Product Sales</span>
 <span className="bg-yellow-300 px-2 py-1 text-sm font-bold">$6,794</span>
 </div>
 <div className="w-full bg-gray-200 h-3 border border-black">
 <div className="bg-yellow-300 h-full w-4/5 border-r border-black"></div>
 </div>
 </div>

 <div>
 <div className="flex justify-between items-center mb-2">
 <span className="font-medium">Subscriptions</span>
 <span className="bg-blue-300 px-2 py-1 text-sm font-bold">$1,443</span>
 </div>
 <div className="w-full bg-gray-200 h-3 border border-black">
 <div className="bg-blue-300 h-full w-1/5 border-r border-black"></div>
 </div>
 </div>

 <div>
 <div className="flex justify-between items-center mb-2">
 <span className="font-medium">Digital Downloads</span>
 <span className="bg-green-300 px-2 py-1 text-sm font-bold">$255</span>
 </div>
 <div className="w-full bg-gray-200 h-3 border border-black">
 <div className="bg-green-300 h-full w-1/12 border-r border-black"></div>
 </div>
 </div>
 </div>
 </div>

 {/* Top Products */}
 <div className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
 <h3 className="text-xl font-bold mb-6">Top Products</h3>

 <div className="space-y-4">
 {[
 { rank: 1, name: 'Fancy Pants Lg', sold: 42 },
 { rank: 2, name: 'Fancy t-shirt Md', sold: 35 },
 { rank: 3, name: 'Fancy t-shirt Sm', sold: 28 },
 { rank: 4, name: 'Fancy t-shirt Xs', sold: 22 }
 ].map((product) => (
 <div key={product.rank} className="flex items-center justify-between">
 <div className="flex items-center gap-3">
 <div className="w-6 h-6 bg-black text-white flex items-center justify-center text-sm font-bold">
 {product.rank}
 </div>
 <span className="font-medium">{product.name}</span>
 </div>
 <div className="bg-black text-white px-2 py-1 text-sm font-bold">
 {product.sold} sold
 </div>
 </div>
 ))}
 </div>
 </div>
 </div>
 </div>
 );
};`;

// Simple Stats Card Component
const SimpleStatsCard = () => {
 return (
 <div className="max-w-4xl mx-auto bg-white border-2 border-black p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
 <div className="text-center mb-8">
 <h3 className="text-2xl font-bold mb-2">Company Statistics</h3>
 <p className="text-gray-600">Real-time metrics and achievements</p>
 </div>

 <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
 <div className="text-center p-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
 <div className="w-12 h-12 bg-blue-300 flex items-center justify-center mx-auto mb-4 border-2 border-black">
 <UsersIcon className="h-6 w-6" />
 </div>
 <div className="text-3xl font-bold mb-2">10,000+</div>
 <p className="text-gray-600 text-sm">Happy<br/>Customers</p>
 </div>

 <div className="text-center p-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
 <div className="w-12 h-12 bg-green-300 flex items-center justify-center mx-auto mb-4 border-2 border-black">
 <TrendingUpIcon className="h-6 w-6" />
 </div>
 <div className="text-3xl font-bold mb-2">99.9%</div>
 <p className="text-gray-600 text-sm">Uptime</p>
 </div>

 <div className="text-center p-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
 <div className="w-12 h-12 bg-yellow-300 flex items-center justify-center mx-auto mb-4 border-2 border-black">
 <DollarSignIcon className="h-6 w-6" />
 </div>
 <div className="text-3xl font-bold mb-2">$2.5M</div>
 <p className="text-gray-600 text-sm">Revenue</p>
 </div>

 <div className="text-center p-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
 <div className="w-12 h-12 bg-purple-300 flex items-center justify-center mx-auto mb-4 border-2 border-black">
 <BarChart3Icon className="h-6 w-6" />
 </div>
 <div className="text-3xl font-bold mb-2">150+</div>
 <p className="text-gray-600 text-sm">Countries</p>
 </div>
 </div>

 <div className="border-t-2 border-black pt-6">
 <div className="grid grid-cols-3 gap-8 text-center">
 <div>
 <div className="text-2xl font-bold text-green-600 mb-1">↗ 23%</div>
 <p className="text-sm text-gray-600">Growth this month</p>
 </div>
 <div>
 <div className="text-2xl font-bold text-blue-600 mb-1">4.9★</div>
 <p className="text-sm text-gray-600">Customer rating</p>
 </div>
 <div>
 <div className="text-2xl font-bold text-purple-600 mb-1">24/7</div>
 <p className="text-sm text-gray-600">Support available</p>
 </div>
 </div>
 </div>
 </div>
 );
};

// Retro Stats Dashboard Component
const RetroStatsDashboard = () => {
 const [selectedPeriod, setSelectedPeriod] = useState('Week');

 return (
 <div className="max-w-6xl mx-auto bg-white border-2 border-black p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
 {/* Header */}
 <div className="flex justify-between items-start mb-8">
 <div>
 <h2 className="text-3xl font-bold mb-2">Retro Stats</h2>
 <p className="text-gray-600">Key metrics for your online store</p>
 </div>
 <div className="flex gap-2">
 {['Day', 'Week', 'Month', 'Year'].map((period) => (
 <button
 key={period}
 onClick={() => setSelectedPeriod(period)}
 className={`px-4 py-2 border-2 border-black font-medium ${
 selectedPeriod === period
 ? 'bg-yellow-300'
 : 'bg-white hover:bg-gray-50'
 }`}
 >
 {period}
 </button>
 ))}
 </div>
 </div>

 {/* Stats Cards */}
 <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
 <div className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
 <div className="flex justify-between items-start mb-4">
 <h3 className="font-bold text-gray-700">Revenue</h3>
 <div className="w-8 h-8 bg-yellow-300 border-2 border-black flex items-center justify-center">
 <DollarSignIcon className="h-4 w-4" />
 </div>
 </div>
 <div className="text-3xl font-bold mb-2">$8,492</div>
 <div className="flex items-center text-sm">
 <TrendingUpIcon className="h-4 w-4 text-green-600 mr-1" />
 <span className="text-green-600">18.7% vs last period</span>
 </div>
 </div>

 <div className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
 <div className="flex justify-between items-start mb-4">
 <h3 className="font-bold text-gray-700">Orders</h3>
 <div className="w-8 h-8 bg-blue-300 border-2 border-black flex items-center justify-center">
 <BarChart3Icon className="h-4 w-4" />
 </div>
 </div>
 <div className="text-3xl font-bold mb-2">187</div>
 <div className="flex items-center text-sm">
 <TrendingUpIcon className="h-4 w-4 text-green-600 mr-1" />
 <span className="text-green-600">12.4% vs last period</span>
 </div>
 </div>

 <div className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
 <div className="flex justify-between items-start mb-4">
 <h3 className="font-bold text-gray-700">Customers</h3>
 <div className="w-8 h-8 bg-green-300 border-2 border-black flex items-center justify-center">
 <UsersIcon className="h-4 w-4" />
 </div>
 </div>
 <div className="text-3xl font-bold mb-2">143</div>
 <div className="flex items-center text-sm">
 <TrendingUpIcon className="h-4 w-4 text-green-600 mr-1" />
 <span className="text-green-600">5.8% vs last period</span>
 </div>
 </div>

 <div className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
 <div className="flex justify-between items-start mb-4">
 <h3 className="font-bold text-gray-700">Conversion</h3>
 <div className="w-8 h-8 bg-red-300 border-2 border-black flex items-center justify-center">
 <TrendingUpIcon className="h-4 w-4" />
 </div>
 </div>
 <div className="text-3xl font-bold mb-2">3.8%</div>
 <div className="flex items-center text-sm">
 <TrendingUpIcon className="h-4 w-4 text-red-600 mr-1" />
 <span className="text-red-600">2.1% vs last period</span>
 </div>
 </div>
 </div>

 {/* Bottom Section */}
 <div className="grid lg:grid-cols-2 gap-6">
 {/* Revenue Breakdown */}
 <div className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
 <div className="flex justify-between items-center mb-6">
 <h3 className="text-xl font-bold">Revenue Breakdown</h3>
 <div className="bg-black text-white px-3 py-1 text-sm font-medium">
 📅 This Week
 </div>
 </div>

 <div className="space-y-4">
 <div>
 <div className="flex justify-between items-center mb-2">
 <span className="font-medium">Product Sales</span>
 <span className="bg-yellow-300 px-2 py-1 text-sm font-bold">$6,794</span>
 </div>
 <div className="w-full bg-gray-200 h-3 border border-black">
 <div className="bg-yellow-300 h-full w-4/5 border-r border-black"></div>
 </div>
 </div>

 <div>
 <div className="flex justify-between items-center mb-2">
 <span className="font-medium">Subscriptions</span>
 <span className="bg-blue-300 px-2 py-1 text-sm font-bold">$1,443</span>
 </div>
 <div className="w-full bg-gray-200 h-3 border border-black">
 <div className="bg-blue-300 h-full w-1/5 border-r border-black"></div>
 </div>
 </div>

 <div>
 <div className="flex justify-between items-center mb-2">
 <span className="font-medium">Digital Downloads</span>
 <span className="bg-green-300 px-2 py-1 text-sm font-bold">$255</span>
 </div>
 <div className="w-full bg-gray-200 h-3 border border-black">
 <div className="bg-green-300 h-full w-1/12 border-r border-black"></div>
 </div>
 </div>
 </div>
 </div>

 {/* Top Products */}
 <div className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
 <h3 className="text-xl font-bold mb-6">Top Products</h3>

 <div className="space-y-4">
 {[
 { rank: 1, name: 'Fancy Pants Lg', sold: 42 },
 { rank: 2, name: 'Fancy t-shirt Md', sold: 35 },
 { rank: 3, name: 'Fancy t-shirt Sm', sold: 28 },
 { rank: 4, name: 'Fancy t-shirt Xs', sold: 22 }
 ].map((product) => (
 <div key={product.rank} className="flex items-center justify-between">
 <div className="flex items-center gap-3">
 <div className="w-6 h-6 bg-black text-white flex items-center justify-center text-sm font-bold">
 {product.rank}
 </div>
 <span className="font-medium">{product.name}</span>
 </div>
 <div className="bg-black text-white px-2 py-1 text-sm font-bold">
 {product.sold} sold
 </div>
 </div>
 ))}
 </div>
 </div>
 </div>
 </div>
 );
};

export default function StatsPage() {
 return (
 <main className="min-h-screen bg-background">
 {/* Page Header */}
 <section className="container max-w-6xl mx-auto px-6 py-16">
 <div className="text-center max-w-3xl mx-auto">
 <h1 className="text-4xl lg:text-5xl font-bold mb-6">
 Statistics <span className="bg-yellow-300 px-2 py-1 transform -rotate-1 inline-block">Blocks</span>
 </h1>
 <p className="text-lg text-gray-600 mb-8">
 Display impressive numbers and metrics with these statistics sections.
 Perfect for showcasing achievements, user counts, and business metrics.
 </p>
 </div>
 </section>

 {/* Stats Blocks */}
 <section className="container max-w-6xl mx-auto px-6 py-16 space-y-16">

 {/* Simple Stats Card */}
 <div className="space-y-6">
 <div className="border-2 border-dashed border-gray-300 p-8 bg-gray-50">
 <SimpleStatsCard />
 </div>
 <CodeDisplay title="Simple Stats Card" code={simpleStatsCode} />
 </div>

 {/* Retro Stats Dashboard */}
 <div className="space-y-6">
 <div className="border-2 border-dashed border-gray-300 p-8 bg-gray-50">
 <RetroStatsDashboard />
 </div>
 <CodeDisplay title="Retro Stats Dashboard" code={retroStatsDashboardCode} />
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