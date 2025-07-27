"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, Badge } from "@/components/retroui";
import { 
  ArrowRightIcon, 
  TrendingUpIcon, 
  DollarSignIcon,
  UsersIcon,
  StarIcon,
  CheckIcon,
  GiftIcon,
  PercentIcon
} from "lucide-react";
import { CodeDisplay } from "@/components/CodeDisplay";

// Code snippets for each component
const affiliateHeroCode = `import React from "react";
import { Button } from "@/components/retroui";
import { ArrowRightIcon, DollarSignIcon } from "lucide-react";

const AffiliateHero = () => (
  <div className="max-w-4xl mx-auto bg-white border-2 border-black p-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
    <div className="text-center">
      <div className="w-20 h-20 bg-yellow-300 border-2 border-black flex items-center justify-center mx-auto mb-6">
        <DollarSignIcon className="h-10 w-10" />
      </div>
      <h2 className="text-4xl font-bold mb-4">
        Earn Up to 30% Commission
      </h2>
      <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
        Join our affiliate program and start earning money by promoting our products. 
        Get paid for every successful referral with industry-leading commission rates.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
        <Button className="bg-black text-white hover:bg-gray-800 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-0.5 hover:translate-y-0.5">
          Join Affiliate Program
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Button>
        <Button variant="outline" className="border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-0.5 hover:translate-y-0.5">
          Learn More
        </Button>
      </div>
      <div className="grid md:grid-cols-3 gap-6 text-center">
        <div className="p-4 bg-yellow-300 border-2 border-black">
          <div className="text-2xl font-bold mb-1">30%</div>
          <p className="text-sm">Commission Rate</p>
        </div>
        <div className="p-4 bg-green-300 border-2 border-black">
          <div className="text-2xl font-bold mb-1">$500+</div>
          <p className="text-sm">Avg Monthly Earnings</p>
        </div>
        <div className="p-4 bg-blue-300 border-2 border-black">
          <div className="text-2xl font-bold mb-1">24/7</div>
          <p className="text-sm">Support</p>
        </div>
      </div>
    </div>
  </div>
);`;

const commissionTiersCode = `import React from "react";
import { Button, Badge } from "@/components/retroui";
import { StarIcon, TrendingUpIcon, GiftIcon, CheckIcon } from "lucide-react";

const CommissionTiers = () => (
  <div className="max-w-6xl mx-auto">
    <div className="grid md:grid-cols-3 gap-6">
      {/* Bronze Tier */}
      <div className="bg-white border-2 border-black p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-300 border-2 border-black flex items-center justify-center mx-auto mb-4">
            <StarIcon className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-bold mb-2">Bronze</h3>
          <div className="text-3xl font-bold mb-4 text-blue-600">15%</div>
          <p className="text-gray-600 text-sm mb-6">
            Perfect for getting started with affiliate marketing
          </p>
          <ul className="space-y-2 text-sm mb-6 text-left">
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-500" />
              Monthly payouts
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-500" />
              Basic marketing materials
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-500" />
              Email support
            </li>
          </ul>
          <Button variant="outline" className="w-full border-2 border-black">
            Get Started
          </Button>
        </div>
      </div>

      {/* Silver Tier */}
      <div className="bg-white border-2 border-black p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative">
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-300 px-4 py-1 text-sm font-medium border-2 border-black">
          Most Popular
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-yellow-300 border-2 border-black flex items-center justify-center mx-auto mb-4">
            <TrendingUpIcon className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-bold mb-2">Silver</h3>
          <div className="text-3xl font-bold mb-4 text-yellow-600">25%</div>
          <p className="text-gray-600 text-sm mb-6">
            For established affiliates with consistent performance
          </p>
          <ul className="space-y-2 text-sm mb-6 text-left">
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-500" />
              Bi-weekly payouts
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-500" />
              Advanced marketing kit
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-500" />
              Priority support
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-500" />
              Performance bonuses
            </li>
          </ul>
          <Button className="w-full bg-black text-white hover:bg-gray-800 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-0.5 hover:translate-y-0.5">
            Upgrade to Silver
          </Button>
        </div>
      </div>

      {/* Gold Tier */}
      <div className="bg-white border-2 border-black p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-300 border-2 border-black flex items-center justify-center mx-auto mb-4">
            <GiftIcon className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-bold mb-2">Gold</h3>
          <div className="text-3xl font-bold mb-4 text-green-600">30%</div>
          <p className="text-gray-600 text-sm mb-6">
            Elite tier for top-performing affiliate partners
          </p>
          <ul className="space-y-2 text-sm mb-6 text-left">
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-500" />
              Weekly payouts
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-500" />
              Custom marketing materials
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-500" />
              Dedicated account manager
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-500" />
              Exclusive promotions
            </li>
          </ul>
          <Button variant="outline" className="w-full border-2 border-black">
            Contact Sales
          </Button>
        </div>
      </div>
    </div>
  </div>
);`;

const howItWorksCode = `import React from "react";

const HowItWorks = () => (
  <div className="max-w-4xl mx-auto bg-white border-2 border-black p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
    <div className="grid md:grid-cols-4 gap-8">
      <div className="text-center">
        <div className="w-16 h-16 bg-yellow-300 border-2 border-black flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl font-bold">1</span>
        </div>
        <h3 className="font-bold mb-2">Sign Up</h3>
        <p className="text-sm text-gray-600">
          Join our affiliate program with a simple registration process
        </p>
      </div>
      
      <div className="text-center">
        <div className="w-16 h-16 bg-yellow-300 border-2 border-black flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl font-bold">2</span>
        </div>
        <h3 className="font-bold mb-2">Get Your Link</h3>
        <p className="text-sm text-gray-600">
          Receive your unique affiliate tracking link and marketing materials
        </p>
      </div>
      
      <div className="text-center">
        <div className="w-16 h-16 bg-yellow-300 border-2 border-black flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl font-bold">3</span>
        </div>
        <h3 className="font-bold mb-2">Promote</h3>
        <p className="text-sm text-gray-600">
          Share your link through your channels and start referring customers
        </p>
      </div>
      
      <div className="text-center">
        <div className="w-16 h-16 bg-yellow-300 border-2 border-black flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl font-bold">4</span>
        </div>
        <h3 className="font-bold mb-2">Earn</h3>
        <p className="text-sm text-gray-600">
          Get paid commission for every successful referral you generate
        </p>
      </div>
    </div>
  </div>
);`;

// Component implementations
const AffiliateHero = () => (
  <div className="max-w-4xl mx-auto bg-white border-2 border-black p-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
    <div className="text-center">
      <div className="w-20 h-20 bg-yellow-300 border-2 border-black flex items-center justify-center mx-auto mb-6">
        <DollarSignIcon className="h-10 w-10" />
      </div>
      <h2 className="text-4xl font-bold mb-4">
        Earn Up to 30% Commission
      </h2>
      <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
        Join our affiliate program and start earning money by promoting our products. 
        Get paid for every successful referral with industry-leading commission rates.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
        <Button className="bg-black text-white hover:bg-gray-800 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-0.5 hover:translate-y-0.5">
          Join Affiliate Program
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Button>
        <Button variant="outline" className="border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-0.5 hover:translate-y-0.5">
          Learn More
        </Button>
      </div>
      <div className="grid md:grid-cols-3 gap-6 text-center">
        <div className="p-4 bg-yellow-300 border-2 border-black">
          <div className="text-2xl font-bold mb-1">30%</div>
          <p className="text-sm">Commission Rate</p>
        </div>
        <div className="p-4 bg-green-300 border-2 border-black">
          <div className="text-2xl font-bold mb-1">$500+</div>
          <p className="text-sm">Avg Monthly Earnings</p>
        </div>
        <div className="p-4 bg-blue-300 border-2 border-black">
          <div className="text-2xl font-bold mb-1">24/7</div>
          <p className="text-sm">Support</p>
        </div>
      </div>
    </div>
  </div>
);

const CommissionTiers = () => (
  <div className="max-w-6xl mx-auto">
    <div className="grid md:grid-cols-3 gap-6">
      {/* Bronze Tier */}
      <div className="bg-white border-2 border-black p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-300 border-2 border-black flex items-center justify-center mx-auto mb-4">
            <StarIcon className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-bold mb-2">Bronze</h3>
          <div className="text-3xl font-bold mb-4 text-blue-600">15%</div>
          <p className="text-gray-600 text-sm mb-6">
            Perfect for getting started with affiliate marketing
          </p>
          <ul className="space-y-2 text-sm mb-6 text-left">
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-500" />
              Monthly payouts
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-500" />
              Basic marketing materials
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-500" />
              Email support
            </li>
          </ul>
          <Button variant="outline" className="w-full border-2 border-black">
            Get Started
          </Button>
        </div>
      </div>

      {/* Silver Tier */}
      <div className="bg-white border-2 border-black p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative">
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-300 px-4 py-1 text-sm font-medium border-2 border-black">
          Most Popular
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-yellow-300 border-2 border-black flex items-center justify-center mx-auto mb-4">
            <TrendingUpIcon className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-bold mb-2">Silver</h3>
          <div className="text-3xl font-bold mb-4 text-yellow-600">25%</div>
          <p className="text-gray-600 text-sm mb-6">
            For established affiliates with consistent performance
          </p>
          <ul className="space-y-2 text-sm mb-6 text-left">
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-500" />
              Bi-weekly payouts
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-500" />
              Advanced marketing kit
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-500" />
              Priority support
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-500" />
              Performance bonuses
            </li>
          </ul>
          <Button className="w-full bg-black text-white hover:bg-gray-800 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-0.5 hover:translate-y-0.5">
            Upgrade to Silver
          </Button>
        </div>
      </div>

      {/* Gold Tier */}
      <div className="bg-white border-2 border-black p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-300 border-2 border-black flex items-center justify-center mx-auto mb-4">
            <GiftIcon className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-bold mb-2">Gold</h3>
          <div className="text-3xl font-bold mb-4 text-green-600">30%</div>
          <p className="text-gray-600 text-sm mb-6">
            Elite tier for top-performing affiliate partners
          </p>
          <ul className="space-y-2 text-sm mb-6 text-left">
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-500" />
              Weekly payouts
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-500" />
              Custom marketing materials
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-500" />
              Dedicated account manager
            </li>
            <li className="flex items-center gap-2">
              <CheckIcon className="h-4 w-4 text-green-500" />
              Exclusive promotions
            </li>
          </ul>
          <Button variant="outline" className="w-full border-2 border-black">
            Contact Sales
          </Button>
        </div>
      </div>
    </div>
  </div>
);

const HowItWorks = () => (
  <div className="max-w-4xl mx-auto bg-white border-2 border-black p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
    <div className="grid md:grid-cols-4 gap-8">
      <div className="text-center">
        <div className="w-16 h-16 bg-yellow-300 border-2 border-black flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl font-bold">1</span>
        </div>
        <h3 className="font-bold mb-2">Sign Up</h3>
        <p className="text-sm text-gray-600">
          Join our affiliate program with a simple registration process
        </p>
      </div>
      
      <div className="text-center">
        <div className="w-16 h-16 bg-yellow-300 border-2 border-black flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl font-bold">2</span>
        </div>
        <h3 className="font-bold mb-2">Get Your Link</h3>
        <p className="text-sm text-gray-600">
          Receive your unique affiliate tracking link and marketing materials
        </p>
      </div>
      
      <div className="text-center">
        <div className="w-16 h-16 bg-yellow-300 border-2 border-black flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl font-bold">3</span>
        </div>
        <h3 className="font-bold mb-2">Promote</h3>
        <p className="text-sm text-gray-600">
          Share your link through your channels and start referring customers
        </p>
      </div>
      
      <div className="text-center">
        <div className="w-16 h-16 bg-yellow-300 border-2 border-black flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl font-bold">4</span>
        </div>
        <h3 className="font-bold mb-2">Earn</h3>
        <p className="text-sm text-gray-600">
          Get paid commission for every successful referral you generate
        </p>
      </div>
    </div>
  </div>
);

export default function AffiliatePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="container max-w-6xl mx-auto px-6 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Affiliate <span className="bg-yellow-300 px-2 py-1 transform -rotate-1 inline-block">Program</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Partnership and affiliate program sections to promote collaboration 
            and revenue sharing opportunities.
          </p>
        </div>
      </section>

      {/* Affiliate Blocks */}
      <section className="container max-w-6xl mx-auto px-6 py-16 space-y-16">
        
        {/* Affiliate Hero */}
        <div className="space-y-6">
          <div className="border-2 border-dashed border-gray-300 p-8 bg-gray-50">
            <AffiliateHero />
          </div>
          <CodeDisplay title="Affiliate Hero" code={affiliateHeroCode} />
        </div>

        {/* Commission Tiers */}
        <div className="space-y-6">
          <div className="border-2 border-dashed border-gray-300 p-8 bg-gray-50">
            <CommissionTiers />
          </div>
          <CodeDisplay title="Commission Tiers" code={commissionTiersCode} />
        </div>

        {/* How It Works */}
        <div className="space-y-6">
          <div className="border-2 border-dashed border-gray-300 p-8 bg-gray-50">
            <HowItWorks />
          </div>
          <CodeDisplay title="How It Works" code={howItWorksCode} />
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