"use client";

import React from"react";
import Link from"next/link";
import Image from"next/image";
import { Text, Button, Card, Badge } from"@/components/voidui";
import {
 MapPinIcon,
 CalendarIcon,
 MailIcon,
 PhoneIcon,
 GlobeIcon,
 TwitterIcon,
 GithubIcon,
 LinkedinIcon,
 EditIcon,
 SettingsIcon,
 StarIcon,
 TrophyIcon
} from"lucide-react";
import { CodeDisplay } from"@/components/CodeDisplay";

// Code snippet for Profile Card
const profileCardCode = `import React from"react";
import { Button } from"@/components/voidui";
import { MapPinIcon, TwitterIcon, GithubIcon, LinkedinIcon } from"lucide-react";

const ProfileCard = () => {
 return (
 <div className="max-w-md mx-auto bg-white border-2 border-black p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center">
 <div className="w-24 h-24 mx-auto mb-6 relative">
 <img
 src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
 alt="Profile"
 className="w-full h-full object-cover border-2 border-black"
 />
 </div>

 <h4 className="text-2xl font-bold mb-2">Alex Johnson</h4>
 <p className="text-gray-600 mb-4">Senior Frontend Developer</p>

 <div className="flex items-center justify-center gap-2 mb-6 text-gray-600">
 <MapPinIcon className="h-4 w-4" />
 <span className="text-sm">San Francisco, CA</span>
 </div>

 <div className="flex justify-center gap-3 mb-6">
 <button className="w-10 h-10 bg-blue-300 flex items-center justify-center border-2 border-black hover:bg-blue-400 transition-colors">
 <TwitterIcon className="h-4 w-4" />
 </button>
 <button className="w-10 h-10 bg-gray-300 flex items-center justify-center border-2 border-black hover:bg-gray-400 transition-colors">
 <GithubIcon className="h-4 w-4" />
 </button>
 <button className="w-10 h-10 bg-blue-300 flex items-center justify-center border-2 border-black hover:bg-blue-400 transition-colors">
 <LinkedinIcon className="h-4 w-4" />
 </button>
 </div>

 <div className="flex gap-3">
 <Button className="flex-1 bg-black text-white hover:bg-gray-800">
 Follow
 </Button>
 <Button variant="outline" className="flex-1 border-black">
 Message
 </Button>
 </div>
 </div>
 );
};`;

// Profile Card Component
const ProfileCard = () => {
 return (
 <div className="max-w-md mx-auto bg-white border-2 border-black p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center">
 <div className="w-24 h-24 mx-auto mb-6 relative">
 <img
 src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
 alt="Profile"
 className="w-full h-full object-cover border-2 border-black"
 />
 </div>

 <h4 className="text-2xl font-bold mb-2">Alex Johnson</h4>
 <p className="text-gray-600 mb-4">Senior Frontend Developer</p>

 <div className="flex items-center justify-center gap-2 mb-6 text-gray-600">
 <MapPinIcon className="h-4 w-4" />
 <span className="text-sm">San Francisco, CA</span>
 </div>

 <div className="flex justify-center gap-3 mb-6">
 <button className="w-10 h-10 bg-blue-300 flex items-center justify-center border-2 border-black hover:bg-blue-400 transition-colors">
 <TwitterIcon className="h-4 w-4" />
 </button>
 <button className="w-10 h-10 bg-gray-300 flex items-center justify-center border-2 border-black hover:bg-gray-400 transition-colors">
 <GithubIcon className="h-4 w-4" />
 </button>
 <button className="w-10 h-10 bg-blue-300 flex items-center justify-center border-2 border-black hover:bg-blue-400 transition-colors">
 <LinkedinIcon className="h-4 w-4" />
 </button>
 </div>

 <div className="flex gap-3">
 <Button className="flex-1 bg-black text-white hover:bg-gray-800">
 Follow
 </Button>
 <Button variant="outline" className="flex-1 border-black">
 Message
 </Button>
 </div>
 </div>
 );
};

export default function ProfilePage() {
 return (
 <main className="min-h-screen bg-background">
 {/* Page Header */}
 <section className="container max-w-6xl mx-auto px-6 py-16">
 <div className="text-center max-w-3xl mx-auto">
 <h1 className="text-4xl lg:text-5xl font-bold mb-6">
 Profile <span className="bg-yellow-300 px-2 py-1 transform -rotate-1 inline-block">Sections</span>
 </h1>
 <p className="text-lg text-gray-600 mb-8">
 User profile and team member sections for showcasing people,
 their skills, and achievements in various layouts.
 </p>
 </div>
 </section>

 {/* Profile Blocks */}
 <section className="container max-w-6xl mx-auto px-6 py-16 space-y-16">

 {/* Profile Card */}
 <div className="space-y-6">
 <div className="border-2 border-dashed border-gray-300 p-8 bg-gray-50">
 <ProfileCard />
 </div>
 <CodeDisplay title="Profile Card" code={profileCardCode} />
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