"use client";

import React from "react";
import Link from "next/link";
import { Text, Button, Card, Input, Textarea, Checkbox, Select } from "@/components/retroui";
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon } from "lucide-react";

export default function FormsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="container max-w-6xl mx-auto px-4 lg:px-0 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <Text as="h1" className="text-4xl lg:text-5xl mb-6">
            Form <span className="text-outlined">Layouts</span>
          </Text>
          <p className="text-lg text-muted-foreground mb-8">
            Beautiful and functional form layouts for contact, registration, 
            newsletter signup, and more. Built with accessibility in mind.
          </p>
        </div>
      </section>

      {/* Form Blocks */}
      <section className="container max-w-6xl mx-auto px-4 lg:px-0 pb-16 space-y-16">
        
        {/* Contact Form */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Contact Form</Text>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <Card className="p-8">
              <Text as="h4" className="text-xl font-semibold mb-6">Get in Touch</Text>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Select>
                    <option>General Inquiry</option>
                    <option>Support Request</option>
                    <option>Partnership</option>
                    <option>Other</option>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell us how we can help you..."
                    rows={4}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="newsletter" />
                  <label htmlFor="newsletter" className="text-sm">
                    Subscribe to our newsletter for updates
                  </label>
                </div>
                <Button className="w-full">
                  <SendIcon className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </Card>
            
            <div className="space-y-6">
              <div>
                <Text as="h4" className="text-xl font-semibold mb-4">Contact Information</Text>
                <p className="text-muted-foreground mb-6">
                  Have questions? We'd love to hear from you. Send us a message 
                  and we'll respond as soon as possible.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MailIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <Text as="p" className="font-medium">Email</Text>
                    <p className="text-sm text-muted-foreground">hello@company.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <PhoneIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <Text as="p" className="font-medium">Phone</Text>
                    <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPinIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <Text as="p" className="font-medium">Office</Text>
                    <p className="text-sm text-muted-foreground">
                      123 Business Ave<br />
                      Suite 100<br />
                      City, State 12345
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Newsletter Signup</Text>
          <Card className="p-8 max-w-2xl mx-auto text-center">
            <Text as="h4" className="text-2xl font-semibold mb-4">Stay Updated</Text>
            <p className="text-muted-foreground mb-8">
              Get the latest news, updates, and exclusive content delivered 
              straight to your inbox.
            </p>
            <form className="space-y-4">
              <div className="flex gap-4">
                <Input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="flex-1"
                />
                <Button>Subscribe</Button>
              </div>
              <p className="text-xs text-muted-foreground">
                By subscribing, you agree to our Privacy Policy and Terms of Service.
              </p>
            </form>
          </Card>
        </div>

        {/* Registration Form */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Registration Form</Text>
          <Card className="p-8 max-w-md mx-auto">
            <Text as="h4" className="text-xl font-semibold mb-6 text-center">Create Account</Text>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <Input placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Password</label>
                <Input type="password" placeholder="••••••••" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Confirm Password</label>
                <Input type="password" placeholder="••••••••" />
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="terms" />
                <label htmlFor="terms" className="text-sm">
                  I &apos;agree to the Terms of Service and Privacy Policy
                </label>
              </div>
              <Button className="w-full">Create Account</Button>
              <p className="text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <a href="#" className="text-primary hover:underline">
                  Sign in
                </a>
              </p>
            </form>
          </Card>
        </div>

        {/* Multi-step Form */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Multi-step Form</Text>
          <Card className="p-8 max-w-2xl mx-auto">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <Text as="h4" className="text-xl font-semibold">Project Details</Text>
                <span className="text-sm text-muted-foreground">Step 1 of 3</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full w-1/3"></div>
              </div>
            </div>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Project Name</label>
                <Input placeholder="My Awesome Project" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Project Type</label>
                <Select>
                  <option>Web Application</option>
                  <option>Mobile App</option>
                  <option>Desktop Software</option>
                  <option>Other</option>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Budget Range</label>
                <Select>
                  <option>$5,000 - $10,000</option>
                  <option>$10,000 - $25,000</option>
                  <option>$25,000 - $50,000</option>
                  <option>$50,000+</option>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Project Description</label>
                <Textarea 
                  placeholder="Describe your project requirements..."
                  rows={4}
                />
              </div>
              <div className="flex justify-between">
                <Button variant="outline" disabled>Previous</Button>
                <Button>Next Step</Button>
              </div>
            </form>
          </Card>
        </div>

        {/* Feedback Form */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Feedback Form</Text>
          <Card className="p-8 max-w-2xl mx-auto">
            <Text as="h4" className="text-xl font-semibold mb-6">We Value Your Feedback</Text>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  How would you rate your overall experience?
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      type="button"
                      className="w-10 h-10 rounded-full border-2 border-muted hover:border-primary flex items-center justify-center text-sm font-medium"
                    >
                      {rating}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">
                  What did you like most about our service?
                </label>
                <div className="space-y-2">
                  {[
                    "Easy to use",
                    "Great customer support",
                    "Good value for money",
                    "Fast and reliable",
                    "Other"
                  ].map((option) => (
                    <div key={option} className="flex items-center gap-2">
                      <Checkbox id={option} />
                      <label htmlFor={option} className="text-sm">{option}</label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">
                  Any suggestions for improvement?
                </label>
                <Textarea 
                  placeholder="Tell us how we can improve..."
                  rows={4}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">
                  Would you recommend us to others?
                </label>
                <Select>
                  <option>Definitely</option>
                  <option>Probably</option>
                  <option>Not sure</option>
                  <option>Probably not</option>
                  <option>Definitely not</option>
                </Select>
              </div>
              
              <Button className="w-full">Submit Feedback</Button>
            </form>
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