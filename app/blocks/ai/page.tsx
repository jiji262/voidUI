"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Text, Button, Card, Input } from "@/components/retroui";
import { 
  BotIcon, 
  SendIcon, 
  MicIcon,
  ImageIcon,
  SparklesIcon,
  BrainIcon,
  ZapIcon,
  ArrowRightIcon,
  PlayIcon,
  PauseIcon
} from "lucide-react";

export default function AIPage() {
  const [messages, setMessages] = useState([
    { type: "ai", content: "Hello! I'm your AI assistant. How can I help you today?" },
    { type: "user", content: "Can you help me write a product description?" },
    { type: "ai", content: "Of course! I'd be happy to help you write a compelling product description. Could you tell me more about the product you'd like to describe?" }
  ]);

  return (
    <main className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="container max-w-6xl mx-auto px-4 lg:px-0 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <Text as="h1" className="text-4xl lg:text-5xl mb-6">
            AI-Powered <span className="text-outlined">Interfaces</span>
          </Text>
          <p className="text-lg text-muted-foreground mb-8">
            Modern AI interface components for chat, content generation, 
            and intelligent interactions. Perfect for AI-powered applications.
          </p>
        </div>
      </section>

      {/* AI Blocks */}
      <section className="container max-w-6xl mx-auto px-4 lg:px-0 pb-16 space-y-16">
        
        {/* AI Chat Interface */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">AI Chat Interface</Text>
          <Card className="max-w-2xl mx-auto">
            <div className="border-b border-border p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <BotIcon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <Text as="h5" className="font-semibold">AI Assistant</Text>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-muted-foreground">Online</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.type === 'user' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted'
                  }`}>
                    <p className="text-sm">{message.content}</p>
                  </div>
                </div>
              ))}
              <div className="flex justify-start">
                <div className="bg-muted px-4 py-2 rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                    <span className="text-xs text-muted-foreground">AI is typing...</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-border p-4">
              <div className="flex gap-2">
                <Input 
                  placeholder="Type your message..."
                  className="flex-1"
                />
                <Button size="sm">
                  <SendIcon className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <MicIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* AI Content Generator */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">AI Content Generator</Text>
          <Card className="p-8 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <SparklesIcon className="h-8 w-8 text-primary" />
              </div>
              <Text as="h4" className="text-2xl font-bold mb-2">AI Content Generator</Text>
              <p className="text-muted-foreground">
                Generate high-quality content with the power of AI
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BrainIcon className="h-6 w-6 text-blue-600" />
                </div>
                <Text as="h5" className="font-semibold mb-2">Blog Posts</Text>
                <p className="text-sm text-muted-foreground">
                  Generate engaging blog content
                </p>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ZapIcon className="h-6 w-6 text-green-600" />
                </div>
                <Text as="h5" className="font-semibold mb-2">Social Media</Text>
                <p className="text-sm text-muted-foreground">
                  Create viral social content
                </p>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ImageIcon className="h-6 w-6 text-purple-600" />
                </div>
                <Text as="h5" className="font-semibold mb-2">Marketing Copy</Text>
                <p className="text-sm text-muted-foreground">
                  Write compelling marketing text
                </p>
              </Card>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">What would you like to create?</label>
                <Input placeholder="e.g., A blog post about sustainable technology..." />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Tone</label>
                  <select className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Professional</option>
                    <option>Casual</option>
                    <option>Friendly</option>
                    <option>Formal</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Length</label>
                  <select className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Short (100-200 words)</option>
                    <option>Medium (300-500 words)</option>
                    <option>Long (800+ words)</option>
                  </select>
                </div>
              </div>
              
              <Button className="w-full">
                <SparklesIcon className="mr-2 h-4 w-4" />
                Generate Content
              </Button>
            </div>
          </Card>
        </div>

        {/* AI Features Showcase */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">AI Features</Text>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BrainIcon className="h-8 w-8 text-primary" />
              </div>
              <Text as="h5" className="font-semibold mb-2">Smart Analysis</Text>
              <p className="text-muted-foreground text-sm mb-4">
                Advanced AI algorithms analyze your data to provide actionable insights
              </p>
              <Button variant="outline" size="sm">Learn More</Button>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <ZapIcon className="h-8 w-8 text-primary" />
              </div>
              <Text as="h5" className="font-semibold mb-2">Auto-Generation</Text>
              <p className="text-muted-foreground text-sm mb-4">
                Automatically generate content, code, and designs with AI assistance
              </p>
              <Button variant="outline" size="sm">Learn More</Button>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <SparklesIcon className="h-8 w-8 text-primary" />
              </div>
              <Text as="h5" className="font-semibold mb-2">Smart Suggestions</Text>
              <p className="text-muted-foreground text-sm mb-4">
                Get intelligent suggestions and recommendations powered by AI
              </p>
              <Button variant="outline" size="sm">Learn More</Button>
            </Card>
          </div>
        </div>

        {/* AI Voice Interface */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Voice AI Interface</Text>
          <Card className="p-8 max-w-md mx-auto text-center">
            <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6 relative">
              <div className="w-24 h-24 bg-primary/30 rounded-full flex items-center justify-center">
                <MicIcon className="h-12 w-12 text-primary" />
              </div>
              <div className="absolute inset-0 rounded-full border-4 border-primary/20 animate-pulse"></div>
            </div>
            
            <Text as="h4" className="text-xl font-bold mb-2">Voice Assistant</Text>
            <p className="text-muted-foreground mb-6">
              Tap and hold to speak with your AI assistant
            </p>
            
            <div className="space-y-4">
              <Button size="lg" className="w-full">
                <PlayIcon className="mr-2 h-4 w-4" />
                Start Listening
              </Button>
              
              <div className="text-sm text-muted-foreground">
                <p>&ldquo;Hey AI, help me write an email...&rdquo;</p>
              </div>
            </div>
          </Card>
        </div>

        {/* AI Dashboard */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">AI Analytics Dashboard</Text>
          <Card className="p-8">
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <Text as="div" className="text-3xl font-bold mb-2">1.2M</Text>
                <p className="text-muted-foreground">AI Requests</p>
              </div>
              <div className="text-center">
                <Text as="div" className="text-3xl font-bold mb-2">98.5%</Text>
                <p className="text-muted-foreground">Accuracy</p>
              </div>
              <div className="text-center">
                <Text as="div" className="text-3xl font-bold mb-2">45ms</Text>
                <p className="text-muted-foreground">Response Time</p>
              </div>
              <div className="text-center">
                <Text as="div" className="text-3xl font-bold mb-2">24/7</Text>
                <p className="text-muted-foreground">Availability</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <Text as="h5" className="font-semibold mb-4">Recent AI Activities</Text>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                    <BrainIcon className="h-5 w-5 text-primary" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Content Generated</p>
                      <p className="text-xs text-muted-foreground">Blog post about AI trends</p>
                    </div>
                    <span className="text-xs text-muted-foreground">2m ago</span>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                    <ZapIcon className="h-5 w-5 text-primary" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Code Optimized</p>
                      <p className="text-xs text-muted-foreground">React component refactored</p>
                    </div>
                    <span className="text-xs text-muted-foreground">5m ago</span>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                    <SparklesIcon className="h-5 w-5 text-primary" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Image Enhanced</p>
                      <p className="text-xs text-muted-foreground">Product photo upscaled</p>
                    </div>
                    <span className="text-xs text-muted-foreground">8m ago</span>
                  </div>
                </div>
              </div>
              
              <div>
                <Text as="h5" className="font-semibold mb-4">AI Model Performance</Text>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Text Generation</span>
                      <span className="text-sm text-muted-foreground">95%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full w-[95%]"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Image Recognition</span>
                      <span className="text-sm text-muted-foreground">92%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full w-[92%]"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Language Processing</span>
                      <span className="text-sm text-muted-foreground">98%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full w-[98%]"></div>
                    </div>
                  </div>
                </div>
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