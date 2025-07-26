"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Text, Button, Card, Accordion } from "@/components/retroui";
import { ChevronDownIcon, HelpCircleIcon, MessageCircleIcon } from "lucide-react";

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (value: string) => {
    setOpenItems(prev => 
      prev.includes(value) 
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  };

  const generalFAQs = [
    {
      question: "What is included in the free trial?",
      answer: "Our 14-day free trial includes full access to all features, unlimited projects, and priority support. No credit card required to start."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. Your access will continue until the end of your current billing period."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied with our service, contact our support team for a full refund."
    },
    {
      question: "How secure is my data?",
      answer: "We take security seriously. All data is encrypted in transit and at rest using industry-standard encryption. We&apos;re SOC 2 Type II certified and GDPR compliant."
    }
  ];

  const technicalFAQs = [
    {
      question: "What integrations do you support?",
      answer: "We support over 100+ integrations including Slack, Google Workspace, Microsoft 365, Salesforce, and many more. Check our integrations page for the full list."
    },
    {
      question: "Is there an API available?",
      answer: "Yes, we provide a comprehensive REST API with detailed documentation. Enterprise plans also include GraphQL API access and webhooks."
    },
    {
      question: "What are the system requirements?",
      answer: "Our platform is web-based and works on any modern browser. For mobile apps, we support iOS 12+ and Android 8+. No special hardware requirements."
    },
    {
      question: "Do you provide data export?",
      answer: "Yes, you can export your data at any time in multiple formats including CSV, JSON, and PDF. Enterprise customers get additional export options."
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="container max-w-6xl mx-auto px-4 lg:px-0 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <Text as="h1" className="text-4xl lg:text-5xl mb-6">
            Frequently Asked <span className="text-outlined">Questions</span>
          </Text>
          <p className="text-lg text-muted-foreground mb-8">
            Find answers to common questions about our platform, features, 
            and services. Can't find what you're looking for? Contact our support team.
          </p>
        </div>
      </section>

      {/* FAQ Blocks */}
      <section className="container max-w-6xl mx-auto px-4 lg:px-0 pb-16 space-y-16">
        
        {/* Simple FAQ Accordion */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">General Questions</Text>
          <Card className="p-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              {generalFAQs.map((faq, index) => (
                <div key={index} className="border-b border-border last:border-b-0 pb-4 last:pb-0">
                  <button
                    onClick={() => toggleItem(`general-${index}`)}
                    className="flex items-center justify-between w-full text-left py-4"
                  >
                    <Text as="h4" className="font-semibold">{faq.question}</Text>
                    <ChevronDownIcon 
                      className={`h-5 w-5 transition-transform ${
                        openItems.includes(`general-${index}`) ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openItems.includes(`general-${index}`) && (
                    <div className="pb-4">
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Two Column FAQ */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Technical Questions</Text>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <div className="space-y-6">
                {technicalFAQs.slice(0, 2).map((faq, index) => (
                  <div key={index}>
                    <Text as="h4" className="font-semibold mb-2">{faq.question}</Text>
                    <p className="text-muted-foreground text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="p-6">
              <div className="space-y-6">
                {technicalFAQs.slice(2, 4).map((faq, index) => (
                  <div key={index + 2}>
                    <Text as="h4" className="font-semibold mb-2">{faq.question}</Text>
                    <p className="text-muted-foreground text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* FAQ with Categories */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">FAQ by Category</Text>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <HelpCircleIcon className="h-8 w-8 text-primary" />
              </div>
              <Text as="h4" className="font-semibold mb-2">Getting Started</Text>
              <p className="text-sm text-muted-foreground mb-4">
                Learn the basics and get up and running quickly
              </p>
              <Button variant="outline" size="sm">View FAQs</Button>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚙️</span>
              </div>
              <Text as="h4" className="font-semibold mb-2">Technical</Text>
              <p className="text-sm text-muted-foreground mb-4">
                API documentation, integrations, and technical details
              </p>
              <Button variant="outline" size="sm">View FAQs</Button>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💳</span>
              </div>
              <Text as="h4" className="font-semibold mb-2">Billing</Text>
              <p className="text-sm text-muted-foreground mb-4">
                Pricing, payments, and subscription management
              </p>
              <Button variant="outline" size="sm">View FAQs</Button>
            </Card>
          </div>
        </div>

        {/* Search FAQ */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Search FAQ</Text>
          <Card className="p-8 max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <Text as="h4" className="text-xl font-semibold mb-4">
                Can&apos;t find what you&apos;re looking for?
              </Text>
              <p className="text-muted-foreground mb-6">
                Search our knowledge base for answers to your questions
              </p>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for answers..."
                  className="w-full px-4 py-3 pr-12 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg className="h-5 w-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="text-center">
              <Text as="h5" className="font-semibold mb-4">Popular Searches</Text>
              <div className="flex flex-wrap gap-2 justify-center">
                {[
                  "How to get started",
                  "Pricing plans",
                  "API documentation",
                  "Data export",
                  "Account settings",
                  "Integrations"
                ].map((tag) => (
                  <button
                    key={tag}
                    className="px-3 py-1 bg-muted rounded-full text-sm hover:bg-muted/80 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Contact Support */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Still Need Help?</Text>
          <Card className="p-12 text-center max-w-2xl mx-auto">
            <MessageCircleIcon className="h-16 w-16 text-primary mx-auto mb-6" />
            <Text as="h4" className="text-2xl font-semibold mb-4">
              Get in Touch
            </Text>
            <p className="text-muted-foreground mb-8">
              Our support team is here to help. Get personalized assistance 
              and answers to your specific questions.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <Button size="lg">
                Contact Support
              </Button>
              <Button variant="outline" size="lg">
                Schedule Call
              </Button>
            </div>
            <div className="mt-6 text-sm text-muted-foreground">
              Average response time: 2 hours
            </div>
          </Card>
        </div>

        {/* FAQ Stats */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">FAQ Statistics</Text>
          <Card className="p-8">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <Text as="div" className="text-3xl font-bold mb-2">500+</Text>
                <p className="text-muted-foreground">FAQ Articles</p>
              </div>
              <div>
                <Text as="div" className="text-3xl font-bold mb-2">95%</Text>
                <p className="text-muted-foreground">Questions Answered</p>
              </div>
              <div>
                <Text as="div" className="text-3xl font-bold mb-2">24/7</Text>
                <p className="text-muted-foreground">Support Available</p>
              </div>
              <div>
                <Text as="div" className="text-3xl font-bold mb-2">2hrs</Text>
                <p className="text-muted-foreground">Avg Response Time</p>
              </div>
            </div>
          </Card>
        </div>

      </section>

      {/* Back to Blocks */}
      <section className="container max-w-6xl mx-auto px-4 lg:px-0 pb-16">
        <div className="text-center">
          <Link href="/blocks">
            <Button variant="outline">
              ← Back to All Blocks
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}