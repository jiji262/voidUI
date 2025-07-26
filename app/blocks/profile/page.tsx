"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Text, Button, Card, Badge } from "@/components/retroui";
import { 
  MapPinIcon, 
  CalendarIcon, 
  MailIcon, 
  PhoneIcon,
  GlobeIcon,
  TwitterIcon,
  GithubIcon,
  LinkedinIcon,
  EditIcon,
  SettingsIcon,
  StarIcon,
  TrophyIcon
} from "lucide-react";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="container max-w-6xl mx-auto px-4 lg:px-0 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <Text as="h1" className="text-4xl lg:text-5xl mb-6">
            Profile <span className="text-outlined">Sections</span>
          </Text>
          <p className="text-lg text-muted-foreground mb-8">
            User profile and team member sections for showcasing people, 
            their skills, and achievements in various layouts.
          </p>
        </div>
      </section>

      {/* Profile Blocks */}
      <section className="container max-w-6xl mx-auto px-4 lg:px-0 pb-16 space-y-16">
        
        {/* Simple Profile Card */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Simple Profile Card</Text>
          <Card className="p-8 max-w-md mx-auto text-center">
            <div className="w-24 h-24 mx-auto mb-6 relative">
              <Image
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
                alt="Profile"
                fill
                className="rounded-full object-cover"
              />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-2 border-background rounded-full"></div>
            </div>
            <Text as="h4" className="text-xl font-bold mb-2">Alex Johnson</Text>
            <p className="text-muted-foreground mb-4">Senior Frontend Developer</p>
            <div className="flex items-center justify-center gap-2 mb-6">
              <MapPinIcon className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">San Francisco, CA</span>
            </div>
            <div className="flex gap-2 justify-center mb-6">
              <Button variant="outline" size="sm">
                <MailIcon className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <TwitterIcon className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <GithubIcon className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex gap-2">
              <Button className="flex-1">Follow</Button>
              <Button variant="outline" className="flex-1">Message</Button>
            </div>
          </Card>
        </div>

        {/* Detailed Profile */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Detailed Profile</Text>
          <Card className="overflow-hidden max-w-4xl mx-auto">
            <div className="h-32 bg-gradient-to-r from-primary/20 to-secondary/20"></div>
            <div className="px-8 pb-8">
              <div className="flex flex-col md:flex-row md:items-end gap-6 -mt-16">
                <div className="w-32 h-32 relative border-4 border-background rounded-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face"
                    alt="Profile"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <Text as="h4" className="text-2xl font-bold mb-1">Sarah Wilson</Text>
                      <p className="text-muted-foreground">UX/UI Designer & Creative Director</p>
                    </div>
                    <div className="flex gap-2 mt-4 md:mt-0">
                      <Button variant="outline" size="sm">
                        <EditIcon className="h-4 w-4 mr-2" />
                        Edit Profile
                      </Button>
                      <Button variant="outline" size="sm">
                        <SettingsIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <MapPinIcon className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">New York, NY</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Joined March 2020</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <GlobeIcon className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">sarahwilson.design</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">
                    Passionate designer with 8+ years of experience creating beautiful and 
                    functional digital experiences. I love working with teams to bring ideas 
                    to life and solve complex user problems.
                  </p>
                  
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <Text as="div" className="text-xl font-bold">1.2K</Text>
                      <p className="text-xs text-muted-foreground">Followers</p>
                    </div>
                    <div className="text-center">
                      <Text as="div" className="text-xl font-bold">892</Text>
                      <p className="text-xs text-muted-foreground">Following</p>
                    </div>
                    <div className="text-center">
                      <Text as="div" className="text-xl font-bold">45</Text>
                      <p className="text-xs text-muted-foreground">Projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Team Grid */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Team Members</Text>
          <div className="text-center mb-8">
            <Text as="h4" className="text-xl font-bold mb-2">Meet Our Team</Text>
            <p className="text-muted-foreground">
              The talented people behind our success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "David Chen",
                role: "Lead Developer",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
                skills: ["React", "Node.js", "TypeScript"],
                social: { twitter: "@davidchen", github: "davidchen" }
              },
              {
                name: "Emily Rodriguez",
                role: "Product Manager",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
                skills: ["Strategy", "Analytics", "Leadership"],
                social: { twitter: "@emilyrod", linkedin: "emily-rodriguez" }
              },
              {
                name: "Michael Kim",
                role: "UI/UX Designer",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
                skills: ["Figma", "Prototyping", "User Research"],
                social: { twitter: "@mikekim", github: "michaelkim" }
              }
            ].map((member, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
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
                <div className="flex flex-wrap gap-1 justify-center mb-4">
                  {member.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-center gap-2">
                  <Button variant="outline" size="sm">
                    <TwitterIcon className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <GithubIcon className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <LinkedinIcon className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Profile with Stats */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Profile with Statistics</Text>
          <Card className="p-8 max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="text-center md:text-left">
                <div className="w-32 h-32 mx-auto md:mx-0 mb-4 relative">
                  <Image
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face"
                    alt="Profile"
                    fill
                    className="rounded-full object-cover"
                  />
                  <div className="absolute -top-2 -right-2">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                      <TrophyIcon className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>
                <Text as="h4" className="text-xl font-bold mb-2">Alex Thompson</Text>
                <p className="text-muted-foreground mb-4">Full Stack Developer</p>
                <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">4.9 rating</span>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <Text as="div" className="text-2xl font-bold">127</Text>
                    <p className="text-sm text-muted-foreground">Projects</p>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <Text as="div" className="text-2xl font-bold">98%</Text>
                    <p className="text-sm text-muted-foreground">Success Rate</p>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <Text as="div" className="text-2xl font-bold">5.2K</Text>
                    <p className="text-sm text-muted-foreground">Hours Worked</p>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <Text as="div" className="text-2xl font-bold">4.9</Text>
                    <p className="text-sm text-muted-foreground">Avg Rating</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">JavaScript</span>
                      <span className="text-sm text-muted-foreground">95%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full w-[95%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">React</span>
                      <span className="text-sm text-muted-foreground">90%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full w-[90%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">Node.js</span>
                      <span className="text-sm text-muted-foreground">85%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full w-[85%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-3 mt-6">
              <Button className="flex-1">Hire Me</Button>
              <Button variant="outline" className="flex-1">View Portfolio</Button>
            </div>
          </Card>
        </div>

        {/* Contact Profile */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Contact Profile</Text>
          <Card className="p-8 max-w-md mx-auto">
            <div className="text-center mb-6">
              <div className="w-24 h-24 mx-auto mb-4 relative">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face"
                  alt="Contact"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <Text as="h4" className="text-xl font-bold mb-2">Lisa Park</Text>
              <p className="text-muted-foreground">Business Development Manager</p>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MailIcon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">lisa.park@company.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <PhoneIcon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPinIcon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">Seattle, WA</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-2 mb-6">
              <Button variant="outline" size="sm" className="flex-1">
                <TwitterIcon className="h-4 w-4 mr-2" />
                Twitter
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                <LinkedinIcon className="h-4 w-4 mr-2" />
                LinkedIn
              </Button>
            </div>
            
            <Button className="w-full">
              <MailIcon className="h-4 w-4 mr-2" />
              Send Message
            </Button>
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