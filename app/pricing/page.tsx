"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/voidui";
import { ArrowRightIcon, CheckIcon } from "lucide-react";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container max-w-6xl mx-auto px-6 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Get Access to All Blocks
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Unlock all premium blocks and components with a lifetime purchase.
          </p>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="container max-w-6xl mx-auto px-6 pb-16">
        <div className="max-w-md mx-auto">
          <div className="bg-white border-2 border-black rounded-lg overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-2">Lifetime Access</h2>
                <div className="text-4xl font-bold mb-2">$99</div>
                <p className="text-gray-600">One-time payment</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckIcon className="h-5 w-5 text-green-500" />
                  <span>Access to all blocks</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="h-5 w-5 text-green-500" />
                  <span>Copy & paste ready code</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="h-5 w-5 text-green-500" />
                  <span>Lifetime updates</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="h-5 w-5 text-green-500" />
                  <span>Commercial license</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckIcon className="h-5 w-5 text-green-500" />
                  <span>Premium support</span>
                </li>
              </ul>
              
              <Button className="w-full bg-black text-white hover:bg-gray-800 py-3">
                Get Lifetime Access
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Blocks */}
      <section className="container max-w-6xl mx-auto px-6 pb-16">
        <div className="text-center">
          <Link href="/blocks">
            <Button variant="outline">
              ← Back to Blocks
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
