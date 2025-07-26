"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Text, Button, Card } from "@/components/retroui";
import { 
  MenuIcon, 
  XIcon, 
  SearchIcon, 
  BellIcon, 
  UserIcon, 
  ChevronDownIcon,
  ShoppingCartIcon,
  HeartIcon
} from "lucide-react";

export default function NavbarPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="container max-w-6xl mx-auto px-4 lg:px-0 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <Text as="h1" className="text-4xl lg:text-5xl mb-6">
            Navigation <span className="text-outlined">Bars</span>
          </Text>
          <p className="text-lg text-muted-foreground mb-8">
            Navigation bar components for different use cases. From simple headers 
            to complex navigation systems with dropdowns and search.
          </p>
        </div>
      </section>

      {/* Navbar Blocks */}
      <section className="container max-w-6xl mx-auto px-4 lg:px-0 pb-16 space-y-16">
        
        {/* Simple Navbar */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Simple Navigation</Text>
          <Card className="p-8">
            <nav className="border-2 border-dashed border-muted p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary rounded-lg"></div>
                  <Text as="span" className="font-bold text-lg">Brand</Text>
                </div>
                
                <div className="hidden md:flex items-center gap-6">
                  <Link href="#" className="hover:text-primary transition-colors">Home</Link>
                  <Link href="#" className="hover:text-primary transition-colors">About</Link>
                  <Link href="#" className="hover:text-primary transition-colors">Services</Link>
                  <Link href="#" className="hover:text-primary transition-colors">Contact</Link>
                </div>
                
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="sm">Login</Button>
                  <Button size="sm">Sign Up</Button>
                </div>
                
                <button className="md:hidden">
                  <MenuIcon className="h-6 w-6" />
                </button>
              </div>
            </nav>
          </Card>
        </div>

        {/* Navbar with Search */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Navigation with Search</Text>
          <Card className="p-8">
            <nav className="border-2 border-dashed border-muted p-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary rounded-lg"></div>
                  <Text as="span" className="font-bold text-lg">Brand</Text>
                </div>
                
                <div className="hidden lg:flex items-center gap-6">
                  <Link href="#" className="hover:text-primary transition-colors">Products</Link>
                  <Link href="#" className="hover:text-primary transition-colors">Solutions</Link>
                  <Link href="#" className="hover:text-primary transition-colors">Resources</Link>
                  <Link href="#" className="hover:text-primary transition-colors">Pricing</Link>
                </div>
                
                <div className="flex-1 max-w-md mx-4">
                  <div className="relative">
                    <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <button className="p-2 hover:bg-muted rounded-lg">
                    <BellIcon className="h-5 w-5" />
                  </button>
                  <button className="p-2 hover:bg-muted rounded-lg">
                    <UserIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </nav>
          </Card>
        </div>

        {/* E-commerce Navbar */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">E-commerce Navigation</Text>
          <Card className="p-8">
            <nav className="border-2 border-dashed border-muted p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-8">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary rounded-lg"></div>
                    <Text as="span" className="font-bold text-lg">Store</Text>
                  </div>
                  
                  <div className="hidden lg:flex items-center gap-6">
                    <div className="relative group">
                      <button className="flex items-center gap-1 hover:text-primary transition-colors">
                        Categories
                        <ChevronDownIcon className="h-4 w-4" />
                      </button>
                    </div>
                    <Link href="#" className="hover:text-primary transition-colors">New Arrivals</Link>
                    <Link href="#" className="hover:text-primary transition-colors">Sale</Link>
                    <Link href="#" className="hover:text-primary transition-colors">Brands</Link>
                  </div>
                </div>
                
                <div className="flex-1 max-w-lg mx-8">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search products..."
                      className="w-full pl-4 pr-12 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <Button size="sm" className="absolute right-1 top-1/2 transform -translate-y-1/2">
                      <SearchIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <button className="p-2 hover:bg-muted rounded-lg relative">
                    <HeartIcon className="h-5 w-5" />
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-white text-xs rounded-full flex items-center justify-center">
                      3
                    </span>
                  </button>
                  <button className="p-2 hover:bg-muted rounded-lg relative">
                    <ShoppingCartIcon className="h-5 w-5" />
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-white text-xs rounded-full flex items-center justify-center">
                      2
                    </span>
                  </button>
                  <Button variant="outline" size="sm">Account</Button>
                </div>
              </div>
            </nav>
          </Card>
        </div>

        {/* Mobile-First Navbar */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Mobile-First Navigation</Text>
          <Card className="p-8">
            <nav className="border-2 border-dashed border-muted p-4">
              <div className="flex items-center justify-between">
                <button 
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 hover:bg-muted rounded-lg"
                >
                  {mobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                </button>
                
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary rounded-lg"></div>
                  <Text as="span" className="font-bold text-lg">Mobile App</Text>
                </div>
                
                <button className="p-2 hover:bg-muted rounded-lg">
                  <UserIcon className="h-6 w-6" />
                </button>
              </div>
              
              {mobileMenuOpen && (
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="space-y-2">
                    <Link href="#" className="block px-4 py-2 hover:bg-muted rounded-lg">Dashboard</Link>
                    <Link href="#" className="block px-4 py-2 hover:bg-muted rounded-lg">Projects</Link>
                    <Link href="#" className="block px-4 py-2 hover:bg-muted rounded-lg">Team</Link>
                    <Link href="#" className="block px-4 py-2 hover:bg-muted rounded-lg">Settings</Link>
                    <div className="pt-2 border-t border-border">
                      <Link href="#" className="block px-4 py-2 hover:bg-muted rounded-lg">Help</Link>
                      <Link href="#" className="block px-4 py-2 hover:bg-muted rounded-lg">Sign Out</Link>
                    </div>
                  </div>
                </div>
              )}
            </nav>
          </Card>
        </div>

        {/* Dashboard Navbar */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Dashboard Navigation</Text>
          <Card className="p-8">
            <nav className="border-2 border-dashed border-muted p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary rounded-lg"></div>
                    <Text as="span" className="font-bold text-lg">Dashboard</Text>
                  </div>
                  
                  <div className="hidden md:flex items-center gap-1 bg-muted rounded-lg p-1">
                    <button className="px-3 py-1 bg-background rounded text-sm font-medium">
                      Overview
                    </button>
                    <button className="px-3 py-1 text-sm hover:bg-background/50 rounded">
                      Analytics
                    </button>
                    <button className="px-3 py-1 text-sm hover:bg-background/50 rounded">
                      Reports
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search..."
                      className="pl-10 pr-4 py-2 bg-muted border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary w-64"
                    />
                  </div>
                  
                  <button className="p-2 hover:bg-muted rounded-lg relative">
                    <BellIcon className="h-5 w-5" />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                  </button>
                  
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-muted rounded-full"></div>
                    <div className="hidden md:block">
                      <div className="text-sm font-medium">John Doe</div>
                      <div className="text-xs text-muted-foreground">Admin</div>
                    </div>
                    <ChevronDownIcon className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              </div>
            </nav>
          </Card>
        </div>

        {/* Mega Menu Navbar */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Mega Menu Navigation</Text>
          <Card className="p-8">
            <nav className="border-2 border-dashed border-muted p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary rounded-lg"></div>
                  <Text as="span" className="font-bold text-lg">Enterprise</Text>
                </div>
                
                <div className="hidden lg:flex items-center gap-8">
                  <div className="relative group">
                    <button className="flex items-center gap-1 hover:text-primary transition-colors">
                      Products
                      <ChevronDownIcon className="h-4 w-4" />
                    </button>
                    <div className="absolute top-full left-0 w-96 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="p-6">
                        <div className="grid grid-cols-2 gap-6">
                          <div>
                            <Text as="h5" className="font-semibold mb-3">Development</Text>
                            <div className="space-y-2">
                              <Link href="#" className="block text-sm hover:text-primary">Web Apps</Link>
                              <Link href="#" className="block text-sm hover:text-primary">Mobile Apps</Link>
                              <Link href="#" className="block text-sm hover:text-primary">APIs</Link>
                            </div>
                          </div>
                          <div>
                            <Text as="h5" className="font-semibold mb-3">Analytics</Text>
                            <div className="space-y-2">
                              <Link href="#" className="block text-sm hover:text-primary">Dashboard</Link>
                              <Link href="#" className="block text-sm hover:text-primary">Reports</Link>
                              <Link href="#" className="block text-sm hover:text-primary">Insights</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Link href="#" className="hover:text-primary transition-colors">Solutions</Link>
                  <Link href="#" className="hover:text-primary transition-colors">Resources</Link>
                  <Link href="#" className="hover:text-primary transition-colors">Company</Link>
                </div>
                
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="sm">Contact Sales</Button>
                  <Button size="sm">Get Started</Button>
                </div>
              </div>
            </nav>
          </Card>
        </div>

        {/* Sticky Navbar */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Sticky Navigation</Text>
          <Card className="p-8">
            <div className="h-96 overflow-y-auto border-2 border-dashed border-muted">
              <nav className="sticky top-0 bg-background border-b border-border p-4 z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary rounded-lg"></div>
                    <Text as="span" className="font-bold text-lg">Sticky Nav</Text>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <Link href="#" className="hover:text-primary transition-colors">Home</Link>
                    <Link href="#" className="hover:text-primary transition-colors">About</Link>
                    <Link href="#" className="hover:text-primary transition-colors">Services</Link>
                    <Button size="sm">Contact</Button>
                  </div>
                </div>
              </nav>
              
              <div className="p-8 space-y-8">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="h-32 bg-muted/30 rounded-lg flex items-center justify-center">
                    <Text as="p" className="text-muted-foreground">Content Section {i + 1}</Text>
                  </div>
                ))}
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