"use client";

import React from"react";
import Link from"next/link";
import Image from"next/image";
import { Text, Button, Input, Checkbox } from"@/components/voidui";
import { ArrowRightIcon } from"lucide-react";
import { CodeIcon } from"lucide-react";
import { CodeDisplay } from"@/components/CodeDisplay";

// Code snippets for each form component
const contactForm01Code = `import React from"react";
import { Button } from"@/components/voidui";
import { ArrowRightIcon } from"lucide-react";

const ContactForm01 = () => (
 <div className="bg-white min-h-screen p-8">
 <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
 {/* Left Side - Form */}
 <div>
 <div className="mb-8">
 <div className="text-sm text-gray-600 mb-2">Get in Touch</div>
 <h1 className="text-4xl font-bold mb-4">
 Let's{""}
 <span className="bg-yellow-300 px-2 py-1 transform -rotate-1 inline-block">
 Connect
 </span>
 </h1>
 <p className="text-gray-600">
 Have a question or want to work together? Drop us a message below.
 </p>
 </div>

 <form className="space-y-6">
 <div>
 <label className="block text-sm font-medium text-gray-700 mb-2">
 Name
 </label>
 <input
 type="text"
 placeholder="John Doe"
 className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-blue-500"
 />
 </div>

 <div>
 <label className="block text-sm font-medium text-gray-700 mb-2">
 Email
 </label>
 <input
 type="email"
 placeholder="john@example.com"
 className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-blue-500"
 />
 </div>

 <div>
 <label className="block text-sm font-medium text-gray-700 mb-2">
 Message
 </label>
 <textarea
 rows={4}
 placeholder="Your message here..."
 className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
 />
 </div>

 <Button className="w-full bg-black text-white hover:bg-gray-800 py-3">
 Send Message <ArrowRightIcon className="ml-2 h-4 w-4" />
 </Button>
 </form>
 </div>

 {/* Right Side - Contact Info */}
 <div className="space-y-8">
 <div className="text-center">
 <div className="text-4xl mb-4">📍</div>
 <h3 className="text-xl font-bold mb-2">Address</h3>
 <p className="text-gray-600">123 Street, City, Country</p>
 </div>
 <div className="text-center">
 <div className="text-4xl mb-4">📞</div>
 <h3 className="text-xl font-bold mb-2">Phone</h3>
 <p className="text-gray-600">+1 234 567 890</p>
 </div>
 <div className="text-center">
 <div className="text-4xl mb-4">📧</div>
 <h3 className="text-xl font-bold mb-2">Email</h3>
 <p className="text-gray-600">hello@example.com</p>
 </div>
 </div>
 </div>
 </div>
);`;

const newsletterForm01Code = `import React from"react";
import Image from"next/image";
import { Button, Checkbox } from"@/components/voidui";

const NewsletterForm01 = () => (
 <div className="bg-white p-8">
 <div className="max-w-md mx-auto text-center">
 <h2 className="text-2xl font-bold mb-4">Join Our Newsletter</h2>
 <p className="text-gray-600 mb-6">
 Get the latest updates and resources delivered to your inbox weekly.
 No spam, unsubscribe anytime.
 </p>

 <form className="space-y-4">
 <div className="flex gap-2">
 <input
 type="email"
 placeholder="your@email.com"
 className="flex-1 px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-blue-500"
 />
 <Button className="bg-black text-white hover:bg-gray-800 px-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-0.5 hover:translate-y-0.5">
 Subscribe →
 </Button>
 </div>

 <div className="flex items-start gap-2 text-left">
 <Checkbox id="privacy" className="mt-1" />
 <label htmlFor="privacy" className="text-sm text-gray-600">
 I agree to receive email updates. Read our{""}
 <a href="#" className="text-blue-600 hover:underline">
 Privacy Policy
 </a>
 </label>
 </div>
 </form>

 <div className="mt-6 flex items-center justify-center gap-2">
 <div className="flex -space-x-2">
 <Image
 src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
 alt="User"
 width={32}
 height={32}
 className="w-8 h-8 border-2 border-white"
 />
 <Image
 src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face"
 alt="User"
 width={32}
 height={32}
 className="w-8 h-8 border-2 border-white"
 />
 <Image
 src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face"
 alt="User"
 width={32}
 height={32}
 className="w-8 h-8 border-2 border-white"
 />
 <Image
 src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face"
 alt="User"
 width={32}
 height={32}
 className="w-8 h-8 border-2 border-white"
 />
 </div>
 <p className="text-sm text-gray-600">
 Join <span className="font-semibold">2,000+</span> subscribers
 </p>
 </div>
 </div>
 </div>
);`;

const newsletterForm02Code = `import React from"react";
import { Button } from"@/components/voidui";

const NewsletterForm02 = () => (
 <div className="bg-gray-900 text-white p-8">
 <div className="max-w-sm mx-auto">
 <form className="space-y-4">
 <div>
 <label className="block text-sm font-medium mb-2">
 Email Address
 </label>
 <input
 type="email"
 placeholder="Email"
 className="w-full px-4 py-3 bg-white text-black border-2 border-black focus:outline-none focus:ring-2 focus:ring-blue-500"
 />
 </div>
 <Button className="w-full bg-yellow-300 text-black hover:bg-yellow-400 font-bold py-3">
 Subscribe Now
 </Button>
 </form>
 <p className="text-sm text-gray-400 mt-4 text-center">
 We respect your privacy. Unsubscribe at any time.
 </p>
 </div>
 </div>
);`;

// Contact Form 01 Component
const ContactForm01 = () => (
 <div className="bg-white min-h-screen p-8">
 <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
 {/* Left Side - Form */}
 <div>
 <div className="mb-8">
 <div className="text-sm text-gray-600 mb-2">Get in Touch</div>
 <h1 className="text-4xl font-bold mb-4">
 Let's{""}
 <span className="bg-yellow-300 px-2 py-1 transform -rotate-1 inline-block">
 Connect
 </span>
 </h1>
 <p className="text-gray-600">
 Have a question or want to work together? Drop us a message below.
 </p>
 </div>

 <form className="space-y-6">
 <div>
 <label className="block text-sm font-medium text-gray-700 mb-2">
 Name
 </label>
 <input
 type="text"
 placeholder="John Doe"
 className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-blue-500"
 />
 </div>

 <div>
 <label className="block text-sm font-medium text-gray-700 mb-2">
 Email
 </label>
 <input
 type="email"
 placeholder="john@example.com"
 className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-blue-500"
 />
 </div>

 <div>
 <label className="block text-sm font-medium text-gray-700 mb-2">
 Message
 </label>
 <textarea
 placeholder="Your message here..."
 rows={4}
 className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
 />
 </div>

 <Button className="w-full bg-black text-white hover:bg-gray-800 py-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-0.5 hover:translate-y-0.5">
 Send Message →
 </Button>
 </form>
 </div>

 {/* Right Side - Contact Info */}
 <div className="space-y-8">
 <div className="bg-gray-50 p-6">
 <div className="text-2xl mb-2">📍</div>
 <h3 className="font-semibold mb-1">Address</h3>
 <p className="text-gray-600">123 Street, City, Country</p>
 </div>

 <div className="bg-gray-50 p-6">
 <div className="text-2xl mb-2">📞</div>
 <h3 className="font-semibold mb-1">Phone</h3>
 <p className="text-gray-600">+1 234 567 890</p>
 </div>

 <div className="bg-gray-50 p-6">
 <div className="text-2xl mb-2">📧</div>
 <h3 className="font-semibold mb-1">Email</h3>
 <p className="text-gray-600">hello@example.com</p>
 </div>
 </div>
 </div>
 </div>
);

// Newsletter Form 01 Component
const NewsletterForm01 = () => (
 <div className="bg-white p-8">
 <div className="max-w-md mx-auto text-center">
 <h2 className="text-2xl font-bold mb-4">Join Our Newsletter</h2>
 <p className="text-gray-600 mb-6">
 Get the latest updates and resources delivered to your inbox weekly.
 No spam, unsubscribe anytime.
 </p>

 <form className="space-y-4">
 <div className="flex gap-2">
 <input
 type="email"
 placeholder="your@email.com"
 className="flex-1 px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-blue-500"
 />
 <Button className="bg-black text-white hover:bg-gray-800 px-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-0.5 hover:translate-y-0.5">
 Subscribe →
 </Button>
 </div>

 <div className="flex items-start gap-2 text-left">
 <input
 type="checkbox"
 id="privacy"
 className="mt-1"
 />
 <label htmlFor="privacy" className="text-sm text-gray-600">
 I agree to receive email updates. Read our{""}
 <a href="#" className="text-blue-600 hover:underline">
 Privacy Policy
 </a>
 </label>
 </div>
 </form>

 <div className="mt-8">
 <div className="flex justify-center -space-x-2 mb-2">
 <Image
 src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
 alt="User"
 width={40}
 height={40}
 className="w-10 h-10 border-2 border-white"
 />
 <Image
 src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face"
 alt="User"
 width={40}
 height={40}
 className="w-10 h-10 border-2 border-white"
 />
 <Image
 src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
 alt="User"
 width={40}
 height={40}
 className="w-10 h-10 border-2 border-white"
 />
 <Image
 src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face"
 alt="User"
 width={40}
 height={40}
 className="w-10 h-10 border-2 border-white"
 />
 </div>
 <p className="text-sm text-gray-600">
 Join <span className="font-semibold">2,000+</span> subscribers
 </p>
 </div>
 </div>
 </div>
);

// Newsletter Form 02 Component
const NewsletterForm02 = () => (
 <div className="bg-white p-8">
 <div className="max-w-sm mx-auto">
 <form className="space-y-4">
 <div>
 <label className="block text-sm font-medium text-gray-700 mb-2">
 Email Address
 </label>
 <input
 type="email"
 placeholder="your@email.com"
 className="w-full px-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-blue-500"
 />
 </div>

 <Button className="w-full bg-black text-white hover:bg-gray-800 py-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-0.5 hover:translate-y-0.5">
 Subscribe Now
 </Button>

 <p className="text-xs text-gray-500 text-center">
 We respect your privacy. Unsubscribe at any time.
 </p>
 </form>
 </div>
 </div>
);

export default function FormsPage() {
 return (
 <main className="min-h-screen bg-background">
 {/* Page Header */}
 <section className="container max-w-6xl mx-auto px-6 py-16">
 <div className="text-center max-w-3xl mx-auto">
 <h1 className="text-4xl lg:text-5xl font-bold mb-6">
 Form <span className="bg-yellow-300 px-2 py-1 transform -rotate-1 inline-block">Components</span>
 </h1>
 <p className="text-lg text-gray-600 mb-8">
 Beautiful and functional form components for collecting user information and feedback.
 </p>
 </div>
 </section>

 {/* Form Blocks */}
 <section className="container max-w-6xl mx-auto px-6 py-16 space-y-16">

 {/* Contact Form 01 */}
 <div className="space-y-6">
 <div className="border-2 border-dashed border-gray-300 p-8 bg-gray-50">
 <ContactForm01 />
 </div>
 <CodeDisplay title="Contact Form 01" code={contactForm01Code} />
 </div>

 {/* Newsletter Form 01 */}
 <div className="space-y-6">
 <div className="border-2 border-dashed border-gray-300 p-8 bg-gray-50">
 <NewsletterForm01 />
 </div>
 <CodeDisplay title="Newsletter Form 01" code={newsletterForm01Code} />
 </div>

 {/* Newsletter Form 02 */}
 <div className="space-y-6">
 <div className="border-2 border-dashed border-gray-300 p-8 bg-gray-50">
 <NewsletterForm02 />
 </div>
 <CodeDisplay title="Newsletter Form 02" code={newsletterForm02Code} />
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