"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Text, Button, Card, Badge } from "@/components/retroui";
import { 
  ArrowRightIcon, 
  MapPinIcon, 
  ClockIcon,
  DollarSignIcon,
  UsersIcon,
  BriefcaseIcon,
  GraduationCapIcon,
  HeartIcon,
  TrendingUpIcon
} from "lucide-react";

export default function CareerSectionsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="container max-w-6xl mx-auto px-4 lg:px-0 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <Text as="h1" className="text-4xl lg:text-5xl mb-6">
            Career <span className="text-outlined">Sections</span>
          </Text>
          <p className="text-lg text-muted-foreground mb-8">
            Job listings and career page components for recruiting top talent. 
            Perfect for company career pages and job boards.
          </p>
        </div>
      </section>

      {/* Career Blocks */}
      <section className="container max-w-6xl mx-auto px-4 lg:px-0 pb-16 space-y-16">
        
        {/* Career Hero */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Career Page Hero</Text>
          <Card className="p-12 text-center bg-gradient-to-r from-primary/10 to-secondary/10">
            <Text as="h4" className="text-4xl font-bold mb-4">
              Join Our Amazing Team
            </Text>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We&apos;re looking for passionate, talented individuals to help us build 
              the future of technology. Discover opportunities to grow your career 
              with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg">
                View Open Positions
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Learn About Our Culture
              </Button>
            </div>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Text as="div" className="text-2xl font-bold mb-1">50+</Text>
                <p className="text-sm text-muted-foreground">Team Members</p>
              </div>
              <div>
                <Text as="div" className="text-2xl font-bold mb-1">15+</Text>
                <p className="text-sm text-muted-foreground">Open Positions</p>
              </div>
              <div>
                <Text as="div" className="text-2xl font-bold mb-1">4.8/5</Text>
                <p className="text-sm text-muted-foreground">Employee Rating</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Job Listings */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Open Positions</Text>
          <div className="space-y-4">
            {[
              {
                title: "Senior Frontend Developer",
                department: "Engineering",
                location: "San Francisco, CA",
                type: "Full-time",
                salary: "$120k - $160k",
                description: "Join our frontend team to build amazing user experiences with React and TypeScript.",
                requirements: ["5+ years React experience", "TypeScript proficiency", "UI/UX design skills"],
                posted: "2 days ago"
              },
              {
                title: "Product Manager",
                department: "Product",
                location: "Remote",
                type: "Full-time", 
                salary: "$130k - $170k",
                description: "Lead product strategy and work with cross-functional teams to deliver exceptional products.",
                requirements: ["3+ years PM experience", "Technical background", "Data-driven mindset"],
                posted: "1 week ago"
              },
              {
                title: "UX Designer",
                department: "Design",
                location: "New York, NY",
                type: "Full-time",
                salary: "$90k - $120k",
                description: "Create intuitive and delightful user experiences for our growing platform.",
                requirements: ["Portfolio of UX work", "Figma expertise", "User research experience"],
                posted: "3 days ago"
              }
            ].map((job, index) => (
              <Card key={index} className="p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Text as="h5" className="text-xl font-semibold">{job.title}</Text>
                      <Badge variant="secondary">{job.department}</Badge>
                      {job.location === "Remote" && <Badge>Remote</Badge>}
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{job.description}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <MapPinIcon className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ClockIcon className="h-4 w-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSignIcon className="h-4 w-4" />
                        <span>{job.salary}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.requirements.map((req, reqIndex) => (
                        <Badge key={reqIndex} variant="outline" className="text-xs">
                          {req}
                        </Badge>
                      ))}
                    </div>
                    
                    <p className="text-xs text-muted-foreground">Posted {job.posted}</p>
                  </div>
                  
                  <div className="flex flex-col gap-2 lg:w-auto">
                    <Button>
                      Apply Now
                      <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Benefits */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Why Work With Us</Text>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <HeartIcon className="h-8 w-8 text-primary" />
              </div>
              <Text as="h5" className="font-semibold mb-2">Health & Wellness</Text>
              <p className="text-muted-foreground text-sm">
                Comprehensive health insurance, dental, vision, and wellness programs
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUpIcon className="h-8 w-8 text-primary" />
              </div>
              <Text as="h5" className="font-semibold mb-2">Career Growth</Text>
              <p className="text-muted-foreground text-sm">
                Professional development opportunities and clear career advancement paths
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <ClockIcon className="h-8 w-8 text-primary" />
              </div>
              <Text as="h5" className="font-semibold mb-2">Work-Life Balance</Text>
              <p className="text-muted-foreground text-sm">
                Flexible hours, remote work options, and unlimited PTO policy
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <DollarSignIcon className="h-8 w-8 text-primary" />
              </div>
              <Text as="h5" className="font-semibold mb-2">Competitive Pay</Text>
              <p className="text-muted-foreground text-sm">
                Market-leading salaries, equity packages, and performance bonuses
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <GraduationCapIcon className="h-8 w-8 text-primary" />
              </div>
              <Text as="h5" className="font-semibold mb-2">Learning Budget</Text>
              <p className="text-muted-foreground text-sm">
                Annual learning budget for courses, conferences, and skill development
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <UsersIcon className="h-8 w-8 text-primary" />
              </div>
              <Text as="h5" className="font-semibold mb-2">Great Culture</Text>
              <p className="text-muted-foreground text-sm">
                Collaborative environment with regular team events and celebrations
              </p>
            </Card>
          </div>
        </div>

        {/* Team Spotlight */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Meet Our Team</Text>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah Johnson",
                role: "Engineering Manager",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
                quote: "I love the collaborative culture and the opportunity to work on cutting-edge technology."
              },
              {
                name: "Mike Chen",
                role: "Senior Designer",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
                quote: "The creative freedom and support for professional growth here is amazing."
              },
              {
                name: "Emily Rodriguez",
                role: "Product Manager",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face",
                quote: "Working here has accelerated my career beyond what I thought possible."
              }
            ].map((member, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="w-20 h-20 mx-auto mb-4 relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <Text as="h5" className="font-semibold mb-1">{member.name}</Text>
                <p className="text-muted-foreground text-sm mb-4">{member.role}</p>
                <p className="text-sm italic">
                  &ldquo;{member.quote}&rdquo;
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Our Hiring Process</Text>
          <Card className="p-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <Text as="h5" className="font-semibold mb-2">Apply</Text>
                <p className="text-sm text-muted-foreground">
                  Submit your application and resume through our careers page
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <Text as="h5" className="font-semibold mb-2">Screen</Text>
                <p className="text-sm text-muted-foreground">
                  Initial phone/video screening with our recruiting team
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <Text as="h5" className="font-semibold mb-2">Interview</Text>
                <p className="text-sm text-muted-foreground">
                  Technical and cultural fit interviews with team members
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <Text as="h5" className="font-semibold mb-2">Offer</Text>
                <p className="text-sm text-muted-foreground">
                  Reference checks and offer discussion with final decision
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Office Locations */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Our Locations</Text>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                city: "San Francisco",
                address: "123 Tech Street, SF, CA 94105",
                employees: "25 employees",
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
              },
              {
                city: "New York",
                address: "456 Innovation Ave, NYC, NY 10001",
                employees: "18 employees", 
                image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=300&fit=crop"
              },
              {
                city: "Remote",
                address: "Work from anywhere",
                employees: "12 employees",
                image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop"
              }
            ].map((location, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src={location.image}
                    alt={location.city}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <Text as="h5" className="font-semibold mb-2">{location.city}</Text>
                  <p className="text-muted-foreground text-sm mb-2">{location.address}</p>
                  <p className="text-primary text-sm font-medium">{location.employees}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Ready to Join Us?</Text>
          <Card className="p-12 text-center bg-gradient-to-r from-primary/10 to-secondary/10">
            <Text as="h4" className="text-3xl font-bold mb-4">
              Start Your Journey With Us
            </Text>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We&apos;re always looking for talented individuals who are passionate about 
              technology and want to make a difference. Join our team today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                View All Positions
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Submit Resume
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