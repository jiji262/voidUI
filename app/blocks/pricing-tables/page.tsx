"use client";

import React from "react";
import Link from "next/link";
import { Text, Button, Card, Badge } from "@/components/retroui";
import { CheckIcon, XIcon, StarIcon } from "lucide-react";
import { CodeDisplay } from "@/components/CodeDisplay";

// Code snippets for pricing components
const threeColumnPricingCode = `import React from "react";
import { Button } from "@/components/retroui";
import { CheckIcon } from "lucide-react";

const ThreeColumnPricing = () => {
  return (
    <div className="max-w-6xl mx-auto bg-white border-2 border-black rounded-lg p-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold mb-4">Choose Your Plan</h3>
        <p className="text-gray-600">Select the perfect plan for your needs</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Starter Plan */}
        <div className="bg-gray-50 border-2 border-black rounded-lg p-8 text-center">
          <h4 className="text-xl font-bold mb-2">Starter</h4>
          <p className="text-gray-600 text-sm mb-6">Perfect for individuals</p>
          <div className="mb-6">
            <span className="text-4xl font-bold">$9</span>
            <span className="text-gray-600">/month</span>
          </div>
          <ul className="space-y-3 mb-8 text-sm text-left">
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-500" />
              Up to 5 projects
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-500" />
              10GB storage
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-500" />
              Email support
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-500" />
              Basic analytics
            </li>
          </ul>
          <Button variant="outline" className="w-full border-black">
            Get Started
          </Button>
        </div>

        {/* Professional Plan */}
        <div className="bg-black text-white border-2 border-black rounded-lg p-8 text-center relative">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-300 text-black px-4 py-1 rounded-full text-sm font-medium border-2 border-black">
            Most Popular
          </div>
          <h4 className="text-xl font-bold mb-2">Professional</h4>
          <p className="text-gray-300 text-sm mb-6">Best for small teams</p>
          <div className="mb-6">
            <span className="text-4xl font-bold">$29</span>
            <span className="text-gray-300">/month</span>
          </div>
          <ul className="space-y-3 mb-8 text-sm text-left">
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-400" />
              Unlimited projects
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-400" />
              100GB storage
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-400" />
              Priority support
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-400" />
              Advanced analytics
            </li>
          </ul>
          <Button className="w-full bg-white text-black hover:bg-gray-100">
            Get Started
          </Button>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-gray-50 border-2 border-black rounded-lg p-8 text-center">
          <h4 className="text-xl font-bold mb-2">Enterprise</h4>
          <p className="text-gray-600 text-sm mb-6">For large organizations</p>
          <div className="mb-6">
            <span className="text-4xl font-bold">$99</span>
            <span className="text-gray-600">/month</span>
          </div>
          <ul className="space-y-3 mb-8 text-sm text-left">
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-500" />
              Unlimited everything
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-500" />
              1TB storage
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-500" />
              24/7 phone support
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-500" />
              Custom integrations
            </li>
          </ul>
          <Button variant="outline" className="w-full border-black">
            Contact Sales
          </Button>
        </div>
      </div>
    </div>
  );
};`;

const twoColumnPricingCode = `import React from "react";
import { Button } from "@/components/retroui";
import { CheckIcon } from "lucide-react";

const TwoColumnPricing = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white border-2 border-black rounded-lg p-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold mb-4">Simple Pricing</h3>
        <p className="text-gray-600">Choose between monthly or yearly billing</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Monthly Plan */}
        <div className="bg-gray-50 border-2 border-black rounded-lg p-8 text-center">
          <h4 className="text-xl font-bold mb-2">Monthly</h4>
          <p className="text-gray-600 text-sm mb-6">Pay month by month</p>
          <div className="mb-6">
            <span className="text-4xl font-bold">$29</span>
            <span className="text-gray-600">/month</span>
          </div>
          <ul className="space-y-3 mb-8 text-sm text-left">
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-500" />
              All features included
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-500" />
              Cancel anytime
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-500" />
              Email support
            </li>
          </ul>
          <Button variant="outline" className="w-full border-black">
            Start Monthly Plan
          </Button>
        </div>

        {/* Yearly Plan */}
        <div className="bg-black text-white border-2 border-black rounded-lg p-8 text-center relative">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-300 text-black px-4 py-1 rounded-full text-sm font-medium border-2 border-black">
            Save 30%
          </div>
          <h4 className="text-xl font-bold mb-2">Yearly</h4>
          <p className="text-gray-300 text-sm mb-6">Pay once, save more</p>
          <div className="mb-6">
            <span className="text-4xl font-bold">$20</span>
            <span className="text-gray-300">/month</span>
            <div className="text-sm text-gray-400">Billed annually ($240/year)</div>
          </div>
          <ul className="space-y-3 mb-8 text-sm text-left">
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-400" />
              All features included
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-400" />
              Priority support
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-400" />
              Free onboarding
            </li>
          </ul>
          <Button className="w-full bg-white text-black hover:bg-gray-100">
            Start Yearly Plan
          </Button>
        </div>
      </div>
    </div>
  );
};`;

// Three Column Pricing Component
const ThreeColumnPricing = () => {
  return (
    <div className="max-w-6xl mx-auto bg-white border-2 border-black rounded-lg p-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold mb-4">Choose Your Plan</h3>
        <p className="text-gray-600">Select the perfect plan for your needs</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Starter Plan */}
        <div className="bg-gray-50 border-2 border-black rounded-lg p-8 text-center">
          <h4 className="text-xl font-bold mb-2">Starter</h4>
          <p className="text-gray-600 text-sm mb-6">Perfect for individuals</p>
          <div className="mb-6">
            <span className="text-4xl font-bold">$9</span>
            <span className="text-gray-600">/month</span>
          </div>
          <ul className="space-y-3 mb-8 text-sm text-left">
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-500" />
              Up to 5 projects
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-500" />
              10GB storage
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-500" />
              Email support
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-500" />
              Basic analytics
            </li>
          </ul>
          <Button variant="outline" className="w-full border-black">
            Get Started
          </Button>
        </div>

        {/* Professional Plan */}
        <div className="bg-black text-white border-2 border-black rounded-lg p-8 text-center relative">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-300 text-black px-4 py-1 rounded-full text-sm font-medium border-2 border-black">
            Most Popular
          </div>
          <h4 className="text-xl font-bold mb-2">Professional</h4>
          <p className="text-gray-300 text-sm mb-6">Best for small teams</p>
          <div className="mb-6">
            <span className="text-4xl font-bold">$29</span>
            <span className="text-gray-300">/month</span>
          </div>
          <ul className="space-y-3 mb-8 text-sm text-left">
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-400" />
              Unlimited projects
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-400" />
              100GB storage
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-400" />
              Priority support
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-400" />
              Advanced analytics
            </li>
          </ul>
          <Button className="w-full bg-white text-black hover:bg-gray-100">
            Get Started
          </Button>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-gray-50 border-2 border-black rounded-lg p-8 text-center">
          <h4 className="text-xl font-bold mb-2">Enterprise</h4>
          <p className="text-gray-600 text-sm mb-6">For large organizations</p>
          <div className="mb-6">
            <span className="text-4xl font-bold">$99</span>
            <span className="text-gray-600">/month</span>
          </div>
          <ul className="space-y-3 mb-8 text-sm text-left">
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-500" />
              Unlimited everything
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-500" />
              1TB storage
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-500" />
              24/7 phone support
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-500" />
              Custom integrations
            </li>
          </ul>
          <Button variant="outline" className="w-full border-black">
            Contact Sales
          </Button>
        </div>
      </div>
    </div>
  );
};

// Two Column Pricing Component
const TwoColumnPricing = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white border-2 border-black rounded-lg p-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold mb-4">Simple Pricing</h3>
        <p className="text-gray-600">Choose between monthly or yearly billing</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Monthly Plan */}
        <div className="bg-gray-50 border-2 border-black rounded-lg p-8 text-center">
          <h4 className="text-xl font-bold mb-2">Monthly</h4>
          <p className="text-gray-600 text-sm mb-6">Pay month by month</p>
          <div className="mb-6">
            <span className="text-4xl font-bold">$29</span>
            <span className="text-gray-600">/month</span>
          </div>
          <ul className="space-y-3 mb-8 text-sm text-left">
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-500" />
              All features included
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-500" />
              Cancel anytime
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-500" />
              Email support
            </li>
          </ul>
          <Button variant="outline" className="w-full border-black">
            Start Monthly Plan
          </Button>
        </div>

        {/* Yearly Plan */}
        <div className="bg-black text-white border-2 border-black rounded-lg p-8 text-center relative">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-300 text-black px-4 py-1 rounded-full text-sm font-medium border-2 border-black">
            Save 30%
          </div>
          <h4 className="text-xl font-bold mb-2">Yearly</h4>
          <p className="text-gray-300 text-sm mb-6">Pay once, save more</p>
          <div className="mb-6">
            <span className="text-4xl font-bold">$20</span>
            <span className="text-gray-300">/month</span>
            <div className="text-sm text-gray-400">Billed annually ($240/year)</div>
          </div>
          <ul className="space-y-3 mb-8 text-sm text-left">
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-400" />
              All features included
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-400" />
              Priority support
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-400" />
              Free onboarding
            </li>
          </ul>
          <Button className="w-full bg-white text-black hover:bg-gray-100">
            Start Yearly Plan
          </Button>
        </div>
      </div>
    </div>
  );
};

export default function PricingTablesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="container max-w-6xl mx-auto px-6 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Pricing <span className="bg-yellow-300 px-2 py-1 transform -rotate-1 inline-block">Tables</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Clear and compelling pricing sections to help convert visitors into customers.
            Choose from various layouts and styles.
          </p>
        </div>
      </section>

      {/* Pricing Blocks */}
      <section className="container max-w-6xl mx-auto px-6 py-16 space-y-16">

        {/* Three Column Pricing */}
        <div className="space-y-6">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 bg-gray-50">
            <ThreeColumnPricing />
          </div>
          <CodeDisplay title="Three Column Pricing" code={threeColumnPricingCode} />
        </div>

        {/* Two Column Pricing */}
        <div className="space-y-6">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 bg-gray-50">
            <TwoColumnPricing />
          </div>
          <CodeDisplay title="Two Column Pricing" code={twoColumnPricingCode} />
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