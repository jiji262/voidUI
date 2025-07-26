"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Text, Button, Card, Badge } from "@/components/retroui";
import { 
  CalendarIcon, 
  ClockIcon, 
  UserIcon, 
  ArrowRightIcon,
  HeartIcon,
  MessageCircleIcon,
  ShareIcon,
  BookmarkIcon,
  TagIcon
} from "lucide-react";

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="container max-w-6xl mx-auto px-4 lg:px-0 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <Text as="h1" className="text-4xl lg:text-5xl mb-6">
            Blog <span className="text-outlined">Layouts</span>
          </Text>
          <p className="text-lg text-muted-foreground mb-8">
            Blog post layouts and article sections for content-rich websites. 
            Perfect for news sites, personal blogs, and content marketing.
          </p>
        </div>
      </section>

      {/* Blog Blocks */}
      <section className="container max-w-6xl mx-auto px-4 lg:px-0 pb-16 space-y-16">
        
        {/* Featured Blog Post */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Featured Article</Text>
          <Card className="overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="aspect-video lg:aspect-square relative">
                <Image
                  src="https://images.unsplash.com/photo-1486312338219-ce68e2c6b81d?w=600&h=400&fit=crop"
                  alt="Featured article"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge>Featured</Badge>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant="outline">Technology</Badge>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarIcon className="h-4 w-4" />
                    <span>March 15, 2024</span>
                  </div>
                </div>
                <Text as="h4" className="text-3xl font-bold mb-4">
                  The Future of Web Development: Trends to Watch in 2024
                </Text>
                <p className="text-muted-foreground mb-6 text-lg">
                  Explore the latest trends and technologies that are shaping the future 
                  of web development. From AI integration to new frameworks, discover 
                  what&apos;s coming next in the world of web development.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 relative">
                      <Image
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                        alt="Author"
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <Text as="p" className="font-semibold text-sm">John Doe</Text>
                      <p className="text-xs text-muted-foreground">Senior Developer</p>
                    </div>
                  </div>
                  <Button>
                    Read Article
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Blog Grid */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Latest Articles</Text>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Building Scalable React Applications",
                excerpt: "Learn best practices for building React apps that can grow with your business needs.",
                author: "Sarah Wilson",
                date: "March 12, 2024",
                readTime: "8 min read",
                category: "React",
                image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop"
              },
              {
                title: "CSS Grid vs Flexbox: When to Use What",
                excerpt: "A comprehensive guide to choosing between CSS Grid and Flexbox for your layouts.",
                author: "Mike Johnson",
                date: "March 10, 2024",
                readTime: "6 min read",
                category: "CSS",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
              },
              {
                title: "Introduction to TypeScript",
                excerpt: "Get started with TypeScript and learn how it can improve your JavaScript development.",
                author: "Emily Chen",
                date: "March 8, 2024",
                readTime: "10 min read",
                category: "TypeScript",
                image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop"
              }
            ].map((post, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <CalendarIcon className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ClockIcon className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Text as="h5" className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </Text>
                  <p className="text-muted-foreground text-sm mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <UserIcon className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{post.author}</span>
                    </div>
                    <Button variant="outline" size="sm">
                      Read More
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Blog List View */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Article List</Text>
          <div className="space-y-6">
            {[
              {
                title: "Advanced JavaScript Patterns Every Developer Should Know",
                excerpt: "Dive deep into advanced JavaScript patterns that will make you a better developer. Learn about closures, prototypes, and more.",
                author: "Alex Thompson",
                date: "March 14, 2024",
                readTime: "12 min read",
                category: "JavaScript",
                image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=200&h=150&fit=crop"
              },
              {
                title: "The Complete Guide to API Design",
                excerpt: "Learn how to design robust, scalable APIs that developers love to use. Best practices and real-world examples included.",
                author: "Lisa Park",
                date: "March 13, 2024",
                readTime: "15 min read",
                category: "API Design",
                image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=200&h=150&fit=crop"
              },
              {
                title: "Optimizing Web Performance in 2024",
                excerpt: "Discover the latest techniques for optimizing web performance. From Core Web Vitals to advanced caching strategies.",
                author: "David Kim",
                date: "March 11, 2024",
                readTime: "9 min read",
                category: "Performance",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=150&fit=crop"
              }
            ].map((post, index) => (
              <Card key={index} className="p-6 hover:shadow-md transition-shadow">
                <div className="flex gap-6">
                  <div className="w-48 h-32 relative flex-shrink-0 overflow-hidden rounded-lg">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <Badge variant="outline">{post.category}</Badge>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <CalendarIcon className="h-3 w-3" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <ClockIcon className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                    <Text as="h5" className="text-xl font-semibold mb-2 hover:text-primary transition-colors cursor-pointer">
                      {post.title}
                    </Text>
                    <p className="text-muted-foreground mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <UserIcon className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <BookmarkIcon className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <ShareIcon className="h-4 w-4" />
                        </Button>
                        <Button size="sm">
                          Read Article
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Blog Post Header */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Article Header</Text>
          <Card className="p-8 lg:p-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <Badge>Technology</Badge>
                <Badge variant="outline">Tutorial</Badge>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CalendarIcon className="h-4 w-4" />
                  <span>Published on March 15, 2024</span>
                </div>
              </div>
              
              <Text as="h1" className="text-4xl lg:text-5xl font-bold mb-6">
                Building Modern Web Applications with Next.js 14
              </Text>
              
              <p className="text-xl text-muted-foreground mb-8">
                A comprehensive guide to building fast, scalable web applications 
                using the latest features in Next.js 14, including the App Router, 
                Server Components, and more.
              </p>
              
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 relative">
                    <Image
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                      alt="Author"
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <Text as="p" className="font-semibold">John Doe</Text>
                    <p className="text-sm text-muted-foreground">Senior Full-Stack Developer</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <ClockIcon className="h-4 w-4" />
                    <span>15 min read</span>
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <Button variant="outline" size="sm">
                      <HeartIcon className="h-4 w-4" />
                      <span className="ml-1">42</span>
                    </Button>
                    <Button variant="outline" size="sm">
                      <MessageCircleIcon className="h-4 w-4" />
                      <span className="ml-1">8</span>
                    </Button>
                    <Button variant="outline" size="sm">
                      <ShareIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=450&fit=crop"
                  alt="Article cover"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </Card>
        </div>

        {/* Blog Categories */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Category Navigation</Text>
          <Card className="p-8">
            <div className="text-center mb-8">
              <Text as="h4" className="text-2xl font-bold mb-4">Explore by Category</Text>
              <p className="text-muted-foreground">
                Discover articles organized by topics that interest you most
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "JavaScript", count: 24, color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200" },
                { name: "React", count: 18, color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
                { name: "CSS", count: 15, color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200" },
                { name: "Node.js", count: 12, color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" },
                { name: "TypeScript", count: 9, color: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200" },
                { name: "Design", count: 21, color: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200" },
                { name: "Performance", count: 7, color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200" },
                { name: "Security", count: 5, color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200" }
              ].map((category, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
                  <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mx-auto mb-4">
                    <TagIcon className="h-6 w-6" />
                  </div>
                  <Text as="h5" className="font-semibold mb-2">{category.name}</Text>
                  <p className="text-sm text-muted-foreground mb-3">
                    {category.count} articles
                  </p>
                  <Badge className={category.color}>
                    Explore
                  </Badge>
                </Card>
              ))}
            </div>
          </Card>
        </div>

        {/* Newsletter Signup */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Newsletter Signup</Text>
          <Card className="p-8 lg:p-12 text-center bg-gradient-to-r from-primary/10 to-secondary/10">
            <Text as="h4" className="text-3xl font-bold mb-4">
              Stay Updated
            </Text>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get the latest articles, tutorials, and insights delivered to your inbox. 
              Join our community of developers and never miss an update.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-4 mb-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button size="lg">Subscribe</Button>
              </div>
              <p className="text-xs text-muted-foreground">
                No spam, unsubscribe at any time. Read our privacy policy.
              </p>
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