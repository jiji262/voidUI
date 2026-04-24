"use client";

import React, { useState } from"react";
import Link from"next/link";
import Image from"next/image";
import { Text, Button, Card, Input, Checkbox } from"@/components/voidui";
import { 
 ArrowRightIcon, 
 CheckIcon,
 UserIcon,
 SettingsIcon,
 RocketIcon,
 PlayIcon,
 ChevronRightIcon,
 StarIcon,
 ShieldIcon
} from"lucide-react";
import { CodeDisplay } from"@/components/CodeDisplay";

// Code snippet for welcome screen component
const welcomeScreenCode = `import React from"react";
import { Button } from"@/components/voidui";
import { RocketIcon, CheckIcon, ArrowRightIcon, PlayIcon } from"lucide-react";

const WelcomeScreen = () => {
 return (
 <div className="max-w-2xl mx-auto bg-white border-2 border-black p-12 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
 <div className="w-20 h-20 bg-blue-100 flex items-center justify-center mx-auto mb-6">
 <RocketIcon className="h-10 w-10 text-blue-600" />
 </div>

 <h2 className="text-3xl font-bold mb-4">Welcome to Our Platform!</h2>

 <p className="text-lg text-gray-600 mb-8">
 We&apos;re excited to have you on board. Let&apos;s get you set up and ready to explore
 all the amazing features we have to offer.
 </p>

 <div className="space-y-4 mb-8">
 <div className="flex items-center gap-3 text-left">
 <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
 <span>Set up your profile in under 2 minutes</span>
 </div>
 <div className="flex items-center gap-3 text-left">
 <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
 <span>Connect with your team and start collaborating</span>
 </div>
 <div className="flex items-center gap-3 text-left">
 <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
 <span>Access powerful tools to boost your productivity</span>
 </div>
 </div>

 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <Button className="bg-black text-white hover:bg-gray-800">
 Get Started
 <ArrowRightIcon className="ml-2 h-4 w-4" />
 </Button>
 <Button variant="outline" className="border-black">
 <PlayIcon className="mr-2 h-4 w-4" />
 Watch Demo
 </Button>
 </div>
 </div>
 );
};`;

// Welcome Screen Component
const WelcomeScreen = () => {
 return (
 <div className="max-w-2xl mx-auto bg-white border-2 border-black p-12 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
 <div className="w-20 h-20 bg-blue-100 flex items-center justify-center mx-auto mb-6">
 <RocketIcon className="h-10 w-10 text-blue-600" />
 </div>

 <h2 className="text-3xl font-bold mb-4">Welcome to Our Platform!</h2>

 <p className="text-lg text-gray-600 mb-8">
 We&apos;re excited to have you on board. Let&apos;s get you set up and ready to explore
 all the amazing features we have to offer.
 </p>

 <div className="space-y-4 mb-8">
 <div className="flex items-center gap-3 text-left">
 <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
 <span>Set up your profile in under 2 minutes</span>
 </div>
 <div className="flex items-center gap-3 text-left">
 <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
 <span>Connect with your team and start collaborating</span>
 </div>
 <div className="flex items-center gap-3 text-left">
 <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
 <span>Access powerful tools to boost your productivity</span>
 </div>
 </div>

 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <Button className="bg-black text-white hover:bg-gray-800">
 Get Started
 <ArrowRightIcon className="ml-2 h-4 w-4" />
 </Button>
 <Button variant="outline" className="border-black">
 <PlayIcon className="mr-2 h-4 w-4" />
 Watch Demo
 </Button>
 </div>
 </div>
 );
};

export default function OnboardingPage() {
 const [currentStep, setCurrentStep] = useState(1);

 return (
 <main className="min-h-screen bg-background">
 {/* Page Header */}
 <section className="container max-w-6xl mx-auto px-6 py-16">
 <div className="text-center max-w-3xl mx-auto">
 <h1 className="text-4xl lg:text-5xl font-bold mb-6">
 Onboarding <span className="bg-yellow-300 px-2 py-1 transform -rotate-1 inline-block">Flows</span>
 </h1>
 <p className="text-lg text-gray-600 mb-8">
 User onboarding and welcome flows to help new users get started
 quickly and understand your product&apos;s value.
 </p>
 </div>
 </section>

 {/* Onboarding Blocks */}
 <section className="container max-w-6xl mx-auto px-6 py-16 space-y-16">

 {/* Welcome Screen */}
 <div className="space-y-6">
 <div className="border-2 border-dashed border-gray-300 p-8 bg-gray-50">
 <WelcomeScreen />
 </div>
 <CodeDisplay title="Welcome Screen" code={welcomeScreenCode} />
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