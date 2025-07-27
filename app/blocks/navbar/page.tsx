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
import { CodeDisplay } from "@/components/CodeDisplay";

// Code snippet for navbar component
const simpleNavbarCode = `import React, { useState } from "react";
import { Button } from "@/components/retroui";
import { MenuIcon, XIcon } from "lucide-react";

const SimpleNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg"></div>
            <span className="font-bold text-lg">Brand</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-gray-700 hover:text-black font-medium">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-black font-medium">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-black font-medium">
              Services
            </a>
            <a href="#" className="text-gray-700 hover:text-black font-medium">
              Contact
            </a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" className="border-black">
              Login
            </Button>
            <Button className="bg-black text-white hover:bg-gray-800">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border-2 border-black hover:bg-gray-100"
            >
              {mobileMenuOpen ? (
                <XIcon className="h-5 w-5" />
              ) : (
                <MenuIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t-2 border-black py-4">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-black font-medium">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-black font-medium">
                About
              </a>
              <a href="#" className="text-gray-700 hover:text-black font-medium">
                Services
              </a>
              <a href="#" className="text-gray-700 hover:text-black font-medium">
                Contact
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t border-gray-200">
                <Button variant="outline" className="border-black">
                  Login
                </Button>
                <Button className="bg-black text-white hover:bg-gray-800">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};`;

// Simple Navbar Component
const SimpleNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg"></div>
            <span className="font-bold text-lg">Brand</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-gray-700 hover:text-black font-medium">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-black font-medium">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-black font-medium">
              Services
            </a>
            <a href="#" className="text-gray-700 hover:text-black font-medium">
              Contact
            </a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" className="border-black">
              Login
            </Button>
            <Button className="bg-black text-white hover:bg-gray-800">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border-2 border-black hover:bg-gray-100"
            >
              {mobileMenuOpen ? (
                <XIcon className="h-5 w-5" />
              ) : (
                <MenuIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t-2 border-black py-4">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-black font-medium">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-black font-medium">
                About
              </a>
              <a href="#" className="text-gray-700 hover:text-black font-medium">
                Services
              </a>
              <a href="#" className="text-gray-700 hover:text-black font-medium">
                Contact
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t border-gray-200">
                <Button variant="outline" className="border-black">
                  Login
                </Button>
                <Button className="bg-black text-white hover:bg-gray-800">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default function NavbarPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="container max-w-6xl mx-auto px-6 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Navigation <span className="bg-yellow-300 px-2 py-1 transform -rotate-1 inline-block">Bars</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Navigation bar components for different use cases. From simple headers
            to complex navigation systems with dropdowns and search.
          </p>
        </div>
      </section>

      {/* Navbar Blocks */}
      <section className="container max-w-6xl mx-auto px-6 py-16 space-y-16">

        {/* Simple Navbar */}
        <div className="space-y-6">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 bg-gray-50">
            <SimpleNavbar />
          </div>
          <CodeDisplay title="Simple Navbar" code={simpleNavbarCode} />
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