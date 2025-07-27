"use client";

import React from"react";
import Link from"next/link";
import Image from"next/image";
import { Text, Button, Card } from"@/components/retroui";
import { StarIcon, QuoteIcon } from"lucide-react";
import { CodeDisplay } from"@/components/CodeDisplay";

// Code snippet for testimonials component
const testimonialsCode = `import React from"react";
import { StarIcon } from"lucide-react";

const TestimonialsGrid = () => {
 const testimonials = [
 {
 name:"John Smith",
 role:"CEO, TechCorp",
 image:"https://picsum.photos/100/100?random=40",
 content:"This product has completely transformed how we work. The interface is intuitive and the features are exactly what we needed.",
 rating: 5
 },
 {
 name:"Sarah Johnson",
 role:"Product Manager, StartupXYZ",
 image:"https://picsum.photos/100/100?random=41",
 content:"Outstanding customer support and a product that delivers on its promises. Highly recommend to any growing business.",
 rating: 5
 },
 {
 name:"Mike Chen",
 role:"CTO, InnovateLab",
 image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
 content:"The best investment we've made this year. ROI was visible within the first month of implementation.",
 rating: 5
 }
 ];

 return (
 <div className="max-w-6xl mx-auto bg-white border-2 border-black p-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
 <div className="text-center mb-12">
 <h3 className="text-3xl font-bold mb-4">What Our Customers Say</h3>
 <p className="text-gray-600">Don't just take our word for it</p>
 </div>

 <div className="grid md:grid-cols-3 gap-8">
 {testimonials.map((testimonial, index) => (
 <div key={index} className="bg-gray-50 border-2 border-black p-6">
 <div className="flex items-center gap-1 mb-4">
 {[...Array(testimonial.rating)].map((_, i) => (
 <StarIcon key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
 ))}
 </div>
 <p className="text-gray-700 mb-6 text-sm leading-relaxed">
"{testimonial.content}"
 </p>
 <div className="flex items-center gap-3">
 <img
 src={testimonial.image}
 alt={testimonial.name}
 className="w-10 h-10 object-cover border-2 border-black"
 />
 <div>
 <p className="font-semibold text-sm">{testimonial.name}</p>
 <p className="text-xs text-gray-600">{testimonial.role}</p>
 </div>
 </div>
 </div>
 ))}
 </div>
 </div>
 );
};`;

// Testimonials Grid Component
const TestimonialsGrid = () => {
 const testimonials = [
 {
 name:"John Smith",
 role:"CEO, TechCorp",
 image:"https://picsum.photos/100/100?random=42",
 content:"This product has completely transformed how we work. The interface is intuitive and the features are exactly what we needed.",
 rating: 5
 },
 {
 name:"Sarah Johnson",
 role:"Product Manager, StartupXYZ",
 image:"https://picsum.photos/100/100?random=43",
 content:"Outstanding customer support and a product that delivers on its promises. Highly recommend to any growing business.",
 rating: 5
 },
 {
 name:"Mike Chen",
 role:"CTO, InnovateLab",
 image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
 content:"The best investment we've made this year. ROI was visible within the first month of implementation.",
 rating: 5
 }
 ];

 return (
 <div className="max-w-6xl mx-auto bg-white border-2 border-black p-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
 <div className="text-center mb-12">
 <h3 className="text-3xl font-bold mb-4">What Our Customers Say</h3>
 <p className="text-gray-600">Don't just take our word for it</p>
 </div>

 <div className="grid md:grid-cols-3 gap-8">
 {testimonials.map((testimonial, index) => (
 <div key={index} className="bg-gray-50 border-2 border-black p-6">
 <div className="flex items-center gap-1 mb-4">
 {[...Array(testimonial.rating)].map((_, i) => (
 <StarIcon key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
 ))}
 </div>
 <p className="text-gray-700 mb-6 text-sm leading-relaxed">
"{testimonial.content}"
 </p>
 <div className="flex items-center gap-3">
 <img
 src={testimonial.image}
 alt={testimonial.name}
 className="w-10 h-10 object-cover border-2 border-black"
 />
 <div>
 <p className="font-semibold text-sm">{testimonial.name}</p>
 <p className="text-xs text-gray-600">{testimonial.role}</p>
 </div>
 </div>
 </div>
 ))}
 </div>
 </div>
 );
};

export default function TestimonialsPage() {
 return (
 <main className="min-h-screen bg-background">
 {/* Page Header */}
 <section className="container max-w-6xl mx-auto px-6 py-16">
 <div className="text-center max-w-3xl mx-auto">
 <h1 className="text-4xl lg:text-5xl font-bold mb-6">
 Testimonial <span className="bg-yellow-300 px-2 py-1 transform -rotate-1 inline-block">Sections</span>
 </h1>
 <p className="text-lg text-gray-600 mb-8">
 Social proof sections to build trust and credibility. Showcase customer
 feedback and success stories effectively.
 </p>
 </div>
 </section>

 {/* Testimonial Blocks */}
 <section className="container max-w-6xl mx-auto px-6 py-16 space-y-16">

 {/* Testimonials Grid */}
 <div className="space-y-6">
 <div className="border-2 border-dashed border-gray-300 p-8 bg-gray-50">
 <TestimonialsGrid />
 </div>
 <CodeDisplay title="Testimonials Grid" code={testimonialsCode} />
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