"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Text, Button, Card, Accordion } from "@/components/retroui";
import { ChevronDownIcon, HelpCircleIcon, MessageCircleIcon } from "lucide-react";
import { CodeDisplay } from "@/components/CodeDisplay";

// Code snippets for FAQ components
const accordionFAQCode = `import React, { useState } from "react";
import { ChevronDownIcon } from "lucide-react";

const AccordionFAQ = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (value: string) => {
    setOpenItems(prev =>
      prev.includes(value)
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  };

  const faqs = [
    {
      id: "faq-1",
      question: "What is included in the free trial?",
      answer: "Our 14-day free trial includes full access to all features, unlimited projects, and priority support. No credit card required to start."
    },
    {
      id: "faq-2",
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. Your access will continue until the end of your current billing period."
    },
    {
      id: "faq-3",
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied with our service, contact our support team for a full refund."
    },
    {
      id: "faq-4",
      question: "How secure is my data?",
      answer: "We take security seriously. All data is encrypted in transit and at rest using industry-standard encryption. We're SOC 2 Type II certified and GDPR compliant."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto bg-white border-2 border-black rounded-lg p-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold mb-4">Frequently Asked Questions</h3>
        <p className="text-gray-600">Find answers to common questions about our platform</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq) => (
          <div key={faq.id} className="border-2 border-black rounded-lg overflow-hidden">
            <button
              onClick={() => toggleItem(faq.id)}
              className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 flex items-center justify-between"
            >
              <h4 className="font-semibold text-lg">{faq.question}</h4>
              <ChevronDownIcon
                className={\`h-5 w-5 transition-transform \${openItems.includes(faq.id) ? 'rotate-180' : ''}\`}
              />
            </button>
            {openItems.includes(faq.id) && (
              <div className="px-6 py-4 bg-white border-t-2 border-black">
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};`;

const gridFAQCode = `import React from "react";

const GridFAQ = () => {
  const faqs = [
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
    <div className="max-w-6xl mx-auto bg-white border-2 border-black rounded-lg p-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold mb-4">Technical Questions</h3>
        <p className="text-gray-600">Get answers to technical questions and implementation details</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-gray-50 border-2 border-black rounded-lg p-6">
            <h4 className="font-bold text-lg mb-4">{faq.question}</h4>
            <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};`;

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
      answer: "We take security seriously. All data is encrypted in transit and at rest using industry-standard encryption. We're SOC 2 Type II certified and GDPR compliant."
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

// Accordion FAQ Component
const AccordionFAQ = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (value: string) => {
    setOpenItems(prev =>
      prev.includes(value)
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  };

  const faqs = [
    {
      id: "faq-1",
      question: "What is included in the free trial?",
      answer: "Our 14-day free trial includes full access to all features, unlimited projects, and priority support. No credit card required to start."
    },
    {
      id: "faq-2",
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. Your access will continue until the end of your current billing period."
    },
    {
      id: "faq-3",
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied with our service, contact our support team for a full refund."
    },
    {
      id: "faq-4",
      question: "How secure is my data?",
      answer: "We take security seriously. All data is encrypted in transit and at rest using industry-standard encryption. We're SOC 2 Type II certified and GDPR compliant."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto bg-white border-2 border-black rounded-lg p-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold mb-4">Frequently Asked Questions</h3>
        <p className="text-gray-600">Find answers to common questions about our platform</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq) => (
          <div key={faq.id} className="border-2 border-black rounded-lg overflow-hidden">
            <button
              onClick={() => toggleItem(faq.id)}
              className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 flex items-center justify-between"
            >
              <h4 className="font-semibold text-lg">{faq.question}</h4>
              <ChevronDownIcon
                className={`h-5 w-5 transition-transform ${openItems.includes(faq.id) ? 'rotate-180' : ''}`}
              />
            </button>
            {openItems.includes(faq.id) && (
              <div className="px-6 py-4 bg-white border-t-2 border-black">
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Grid FAQ Component
const GridFAQ = () => {
  const faqs = [
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
    <div className="max-w-6xl mx-auto bg-white border-2 border-black rounded-lg p-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold mb-4">Technical Questions</h3>
        <p className="text-gray-600">Get answers to technical questions and implementation details</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-gray-50 border-2 border-black rounded-lg p-6">
            <h4 className="font-bold text-lg mb-4">{faq.question}</h4>
            <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

  return (
    <main className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="container max-w-6xl mx-auto px-6 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Frequently Asked <span className="bg-yellow-300 px-2 py-1 transform -rotate-1 inline-block">Questions</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Find answers to common questions about our platform, features,
            and services. Can't find what you're looking for? Contact our support team.
          </p>
        </div>
      </section>

      {/* FAQ Blocks */}
      <section className="container max-w-6xl mx-auto px-6 py-16 space-y-16">

        {/* Accordion FAQ */}
        <div className="space-y-6">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 bg-gray-50">
            <AccordionFAQ />
          </div>
          <CodeDisplay title="Accordion FAQ" code={accordionFAQCode} />
        </div>

        {/* Grid FAQ */}
        <div className="space-y-6">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 bg-gray-50">
            <GridFAQ />
          </div>
          <CodeDisplay title="Grid FAQ" code={gridFAQCode} />
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