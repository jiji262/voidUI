"use client";

import React, { useState } from"react";
import Link from"next/link";
import Image from"next/image";
import { Text, Button, Card, Badge } from"@/components/retroui";
import {
 MenuIcon,
 XIcon,
 HomeIcon,
 UsersIcon,
 SettingsIcon,
 HelpCircleIcon,
 BellIcon,
 SearchIcon,
 ChevronDownIcon,
 ChevronRightIcon,
 FolderIcon,
 FileIcon,
 PlusIcon,
 LogOutIcon,
 UserIcon
} from"lucide-react";
import { CodeDisplay } from"@/components/CodeDisplay";

// Code snippet for sidebar component
const simpleSidebarCode = `import React from"react";
import { HomeIcon, UsersIcon, SettingsIcon, HelpCircleIcon, FolderIcon } from"lucide-react";

const SimpleSidebar = () => {
 const menuItems = [
 { icon: HomeIcon, label:"Home", href:"#" },
 { icon: UsersIcon, label:"Team", href:"#" },
 { icon: FolderIcon, label:"Projects", href:"#" },
 { icon: SettingsIcon, label:"Settings", href:"#" },
 { icon: HelpCircleIcon, label:"Help", href:"#" }
 ];

 return (
 <div className="flex h-96 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
 {/* Sidebar */}
 <div className="w-64 bg-gray-50 border-r-2 border-black p-6">
 <div className="mb-8">
 <h3 className="text-xl font-bold">Dashboard</h3>
 </div>

 <nav className="space-y-2">
 {menuItems.map((item, index) => {
 const IconComponent = item.icon;
 return (
 <a
 key={index}
 href={item.href}
 className="flex items-center gap-3 px-3 py-2 hover:bg-gray-200 transition-colors"
 >
 <IconComponent className="h-5 w-5" />
 <span className="font-medium">{item.label}</span>
 </a>
 );
 })}
 </nav>
 </div>

 {/* Main Content */}
 <div className="flex-1 p-6">
 <h4 className="text-lg font-bold mb-4">Main Content Area</h4>
 <p className="text-gray-600">
 This is where your main content would be displayed. The sidebar provides
 easy navigation between different sections of your application.
 </p>
 </div>
 </div>
 );
};`;

// Simple Sidebar Component
const SimpleSidebar = () => {
 const menuItems = [
 { icon: HomeIcon, label:"Home", href:"#" },
 { icon: UsersIcon, label:"Team", href:"#" },
 { icon: FolderIcon, label:"Projects", href:"#" },
 { icon: SettingsIcon, label:"Settings", href:"#" },
 { icon: HelpCircleIcon, label:"Help", href:"#" }
 ];

 return (
 <div className="flex h-96 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
 {/* Sidebar */}
 <div className="w-64 bg-gray-50 border-r-2 border-black p-6">
 <div className="mb-8">
 <h3 className="text-xl font-bold">Dashboard</h3>
 </div>

 <nav className="space-y-2">
 {menuItems.map((item, index) => {
 const IconComponent = item.icon;
 return (
 <a
 key={index}
 href={item.href}
 className="flex items-center gap-3 px-3 py-2 hover:bg-gray-200 transition-colors"
 >
 <IconComponent className="h-5 w-5" />
 <span className="font-medium">{item.label}</span>
 </a>
 );
 })}
 </nav>
 </div>

 {/* Main Content */}
 <div className="flex-1 p-6">
 <h4 className="text-lg font-bold mb-4">Main Content Area</h4>
 <p className="text-gray-600">
 This is where your main content would be displayed. The sidebar provides
 easy navigation between different sections of your application.
 </p>
 </div>
 </div>
 );
};

export default function SidebarPage() {
 const [sidebarOpen, setSidebarOpen] = useState(false);
 const [expandedItems, setExpandedItems] = useState<string[]>([]);

 const toggleExpanded = (item: string) => {
 setExpandedItems(prev =>
 prev.includes(item)
 ? prev.filter(i => i !== item)
 : [...prev, item]
 );
 };

 return (
 <main className="min-h-screen bg-background">
 {/* Page Header */}
 <section className="container max-w-6xl mx-auto px-6 py-16">
 <div className="text-center max-w-3xl mx-auto">
 <h1 className="text-4xl lg:text-5xl font-bold mb-6">
 Sidebar <span className="bg-yellow-300 px-2 py-1 transform -rotate-1 inline-block">Navigation</span>
 </h1>
 <p className="text-lg text-gray-600 mb-8">
 Navigation sidebars and panels for organizing content and providing
 easy access to different sections of your application.
 </p>
 </div>
 </section>

 {/* Sidebar Blocks */}
 <section className="container max-w-6xl mx-auto px-6 py-16 space-y-16">

 {/* Simple Sidebar */}
 <div className="space-y-6">
 <div className="border-2 border-dashed border-gray-300 p-8 bg-gray-50">
 <SimpleSidebar />
 </div>
 <CodeDisplay title="Simple Sidebar" code={simpleSidebarCode} />
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