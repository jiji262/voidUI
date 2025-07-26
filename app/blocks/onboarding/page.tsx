"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Text, Button, Card, Input, Checkbox } from "@/components/retroui";
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
} from "lucide-react";

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <main className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="container max-w-6xl mx-auto px-4 lg:px-0 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <Text as="h1" className="text-4xl lg:text-5xl mb-6">
            Onboarding <span className="text-outlined">Flows</span>
          </Text>
          <p className="text-lg text-muted-foreground mb-8">
            User onboarding and welcome flows to help new users get started 
            quickly and understand your product&apos;s value.
          </p>
        </div>
      </section>

      {/* Onboarding Blocks */}
      <section className="container max-w-6xl mx-auto px-4 lg:px-0 pb-16 space-y-16">
        
        {/* Welcome Screen */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Welcome Screen</Text>
          <Card className="p-12 text-center max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <RocketIcon className="h-10 w-10 text-primary" />
            </div>
            <Text as="h4" className="text-3xl font-bold mb-4">
              Welcome to Our Platform!
            </Text>
            <p className="text-lg text-muted-foreground mb-8">
              We&apos;re excited to have you on board. Let&apos;s get you set up 
              and ready to explore all the amazing features we have to offer.
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
              <Button size="lg">
                Get Started
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                <PlayIcon className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>
          </Card>
        </div>

        {/* Multi-Step Onboarding */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Multi-Step Onboarding</Text>
          <Card className="p-8 max-w-2xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <Text as="h4" className="text-xl font-semibold">Setup Your Account</Text>
                <span className="text-sm text-muted-foreground">Step {currentStep} of 3</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep / 3) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Step Content */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <UserIcon className="h-8 w-8 text-primary" />
                  </div>
                  <Text as="h5" className="text-lg font-semibold mb-2">Personal Information</Text>
                  <p className="text-muted-foreground text-sm">
                    Tell us a bit about yourself to personalize your experience
                  </p>
                </div>
                
                <div className="space-y-4">
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
                    <label className="block text-sm font-medium mb-2">Job Title</label>
                    <Input placeholder="Product Manager" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Company</label>
                    <Input placeholder="Acme Corp" />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <SettingsIcon className="h-8 w-8 text-primary" />
                  </div>
                  <Text as="h5" className="text-lg font-semibold mb-2">Preferences</Text>
                  <p className="text-muted-foreground text-sm">
                    Customize your experience based on your needs
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-3">What&apos;s your primary goal?</label>
                    <div className="space-y-2">
                      {[
                        "Increase team productivity",
                        "Improve project management",
                        "Better communication",
                        "Data analysis and reporting"
                      ].map((goal, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Checkbox id={`goal-${index}`} />
                          <label htmlFor={`goal-${index}`} className="text-sm">{goal}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Team Size</label>
                    <select className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                      <option>Just me</option>
                      <option>2-10 people</option>
                      <option>11-50 people</option>
                      <option>50+ people</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckIcon className="h-8 w-8 text-green-600" />
                  </div>
                  <Text as="h5" className="text-lg font-semibold mb-2">You&apos;re All Set!</Text>
                  <p className="text-muted-foreground text-sm">
                    Your account has been configured. Ready to start exploring?
                  </p>
                </div>
                
                <div className="bg-muted/30 p-6 rounded-lg">
                  <Text as="h6" className="font-semibold mb-3">Next Steps:</Text>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <ChevronRightIcon className="h-4 w-4 text-primary" />
                      <span className="text-sm">Invite your team members</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ChevronRightIcon className="h-4 w-4 text-primary" />
                      <span className="text-sm">Create your first project</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ChevronRightIcon className="h-4 w-4 text-primary" />
                      <span className="text-sm">Explore our feature tutorials</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              <Button 
                variant="outline" 
                onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                disabled={currentStep === 1}
              >
                Previous
              </Button>
              
              {currentStep < 3 ? (
                <Button onClick={() => setCurrentStep(Math.min(3, currentStep + 1))}>
                  Next Step
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button>
                  Get Started
                  <RocketIcon className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          </Card>
        </div>

        {/* Feature Tour */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Feature Tour</Text>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: "Dashboard Overview",
                description: "Get a bird's eye view of all your projects and tasks in one place.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
              },
              {
                step: "2", 
                title: "Create Your First Project",
                description: "Set up your workspace and invite team members to collaborate.",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
              },
              {
                step: "3",
                title: "Track Progress",
                description: "Monitor your team's progress with real-time updates and analytics.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
              }
            ].map((feature, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{feature.step}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <Text as="h5" className="font-semibold mb-2">{feature.title}</Text>
                  <p className="text-muted-foreground text-sm mb-4">{feature.description}</p>
                  <Button variant="outline" size="sm">
                    Learn More
                    <ArrowRightIcon className="ml-2 h-3 w-3" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Start Checklist */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Quick Start Checklist</Text>
          <Card className="p-8 max-w-2xl mx-auto">
            <div className="text-center mb-6">
              <Text as="h4" className="text-xl font-semibold mb-2">Get Started in Minutes</Text>
              <p className="text-muted-foreground">
                Complete these steps to make the most of your experience
              </p>
            </div>
            
            <div className="space-y-4">
              {[
                { task: "Complete your profile", completed: true },
                { task: "Invite team members", completed: true },
                { task: "Create your first project", completed: false },
                { task: "Set up notifications", completed: false },
                { task: "Explore integrations", completed: false }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/30 transition-colors">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    item.completed ? 'bg-green-500' : 'bg-muted border-2 border-border'
                  }`}>
                    {item.completed && <CheckIcon className="h-4 w-4 text-white" />}
                  </div>
                  <span className={`flex-1 ${item.completed ? 'line-through text-muted-foreground' : ''}`}>
                    {item.task}
                  </span>
                  {!item.completed && (
                    <Button variant="outline" size="sm">
                      Do Now
                    </Button>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-primary/10 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <StarIcon className="h-5 w-5 text-primary" />
                <Text as="h6" className="font-semibold">Pro Tip</Text>
              </div>
              <p className="text-sm text-muted-foreground">
                Complete all steps to unlock advanced features and get the most out of your experience!
              </p>
            </div>
          </Card>
        </div>

        {/* Onboarding Success */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Success State</Text>
          <Card className="p-12 text-center max-w-2xl mx-auto bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckIcon className="h-10 w-10 text-green-600" />
            </div>
            <Text as="h4" className="text-3xl font-bold mb-4">
              🎉 Congratulations!
            </Text>
            <p className="text-lg text-muted-foreground mb-8">
              You&apos;ve successfully completed the onboarding process. 
              You&apos;re now ready to start using all our powerful features.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-background p-4 rounded-lg">
                <ShieldIcon className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <Text as="h6" className="font-semibold mb-1">Account Secured</Text>
                <p className="text-xs text-muted-foreground">Your account is protected</p>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <UserIcon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <Text as="h6" className="font-semibold mb-1">Profile Complete</Text>
                <p className="text-xs text-muted-foreground">Ready to collaborate</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Go to Dashboard
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Take a Tour
              </Button>
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