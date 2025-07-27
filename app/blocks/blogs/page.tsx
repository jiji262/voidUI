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
import { CodeDisplay } from "@/components/CodeDisplay";

// Code snippets for blog components
const featuredArticleCode = `import React from "react";
import { Button } from "@/components/retroui";
import { CalendarIcon, ArrowRightIcon } from "lucide-react";

const FeaturedArticle = () => {
  return (
    <div className="max-w-6xl mx-auto bg-white border-2 border-black rounded-lg overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="grid lg:grid-cols-2 gap-0">
        <div className="aspect-video lg:aspect-square relative">
          <img
            src="https://picsum.photos/600/400?random=1"
            alt="Featured article"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-yellow-300 text-black px-3 py-1 rounded-full text-sm font-medium border-2 border-black">
              Featured
            </span>
          </div>
        </div>
        <div className="p-8 lg:p-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium border border-blue-300">
              Technology
            </span>
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <CalendarIcon className="h-4 w-4" />
              March 15, 2024
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4 leading-tight">
            The Future of Web Development: Trends to Watch in 2024
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Explore the latest trends and technologies that are shaping the future of web development.
            From AI integration to new frameworks, discover what's coming next in the world of web development.
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
                alt="Author"
                className="w-10 h-10 rounded-full border-2 border-black"
              />
              <div>
                <p className="font-semibold text-sm">John Doe</p>
                <p className="text-xs text-gray-600">Senior Developer</p>
              </div>
            </div>
            <Button className="bg-black text-white hover:bg-gray-800">
              Read Article
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};`;

const articleGridCode = `import React from "react";
import { Button } from "@/components/retroui";
import { CalendarIcon, ClockIcon } from "lucide-react";

const ArticleGrid = () => {
  const articles = [
    {
      title: "Building Scalable React Applications",
      excerpt: "Learn best practices for building React apps that can grow with your business needs.",
      category: "React",
      date: "March 12, 2024",
      readTime: "8 min read",
      author: "Sarah Wilson",
      image: "https://picsum.photos/400/250?random=2",
      authorImage: "https://picsum.photos/40/40?random=10"
    },
    {
      title: "CSS Grid vs Flexbox: When to Use What",
      excerpt: "A comprehensive guide to choosing between CSS Grid and Flexbox for your layouts.",
      category: "CSS",
      date: "March 10, 2024",
      readTime: "6 min read",
      author: "Mike Johnson",
      image: "https://picsum.photos/400/250?random=3",
      authorImage: "https://picsum.photos/40/40?random=11"
    },
    {
      title: "Introduction to TypeScript",
      excerpt: "Get started with TypeScript and learn how it can improve your JavaScript development.",
      category: "TypeScript",
      date: "March 8, 2024",
      readTime: "10 min read",
      author: "Emily Chen",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
      authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto bg-white border-2 border-black rounded-lg p-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold mb-4">Latest Articles</h3>
        <p className="text-gray-600">Stay updated with our latest insights and tutorials</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <div key={index} className="bg-gray-50 border-2 border-black rounded-lg overflow-hidden">
            <div className="relative">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <span className="absolute top-3 left-3 bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium border border-blue-300">
                {article.category}
              </span>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4 text-xs text-gray-600">
                <div className="flex items-center gap-1">
                  <CalendarIcon className="h-3 w-3" />
                  {article.date}
                </div>
                <div className="flex items-center gap-1">
                  <ClockIcon className="h-3 w-3" />
                  {article.readTime}
                </div>
              </div>
              <h4 className="font-bold text-lg mb-3 leading-tight">{article.title}</h4>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">{article.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src={article.authorImage}
                    alt={article.author}
                    className="w-6 h-6 rounded-full border border-black"
                  />
                  <span className="text-xs font-medium">{article.author}</span>
                </div>
                <Button variant="outline" size="sm" className="border-black text-xs">
                  Read More
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};`;

// Featured Article Component
const FeaturedArticle = () => {
  return (
    <div className="max-w-6xl mx-auto bg-white border-2 border-black rounded-lg overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="grid lg:grid-cols-2 gap-0">
        <div className="aspect-video lg:aspect-square relative">
          <img
            src="https://picsum.photos/600/400?random=4"
            alt="Featured article"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-yellow-300 text-black px-3 py-1 rounded-full text-sm font-medium border-2 border-black">
              Featured
            </span>
          </div>
        </div>
        <div className="p-8 lg:p-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium border border-blue-300">
              Technology
            </span>
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <CalendarIcon className="h-4 w-4" />
              March 15, 2024
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4 leading-tight">
            The Future of Web Development: Trends to Watch in 2024
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Explore the latest trends and technologies that are shaping the future of web development.
            From AI integration to new frameworks, discover what's coming next in the world of web development.
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
                alt="Author"
                className="w-10 h-10 rounded-full border-2 border-black"
              />
              <div>
                <p className="font-semibold text-sm">John Doe</p>
                <p className="text-xs text-gray-600">Senior Developer</p>
              </div>
            </div>
            <Button className="bg-black text-white hover:bg-gray-800">
              Read Article
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Article Grid Component
const ArticleGrid = () => {
  const articles = [
    {
      title: "Building Scalable React Applications",
      excerpt: "Learn best practices for building React apps that can grow with your business needs.",
      category: "React",
      date: "March 12, 2024",
      readTime: "8 min read",
      author: "Sarah Wilson",
      image: "https://picsum.photos/400/250?random=5",
      authorImage: "https://picsum.photos/40/40?random=12"
    },
    {
      title: "CSS Grid vs Flexbox: When to Use What",
      excerpt: "A comprehensive guide to choosing between CSS Grid and Flexbox for your layouts.",
      category: "CSS",
      date: "March 10, 2024",
      readTime: "6 min read",
      author: "Mike Johnson",
      image: "https://picsum.photos/400/250?random=6",
      authorImage: "https://picsum.photos/40/40?random=13"
    },
    {
      title: "Introduction to TypeScript",
      excerpt: "Get started with TypeScript and learn how it can improve your JavaScript development.",
      category: "TypeScript",
      date: "March 8, 2024",
      readTime: "10 min read",
      author: "Emily Chen",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
      authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto bg-white border-2 border-black rounded-lg p-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold mb-4">Latest Articles</h3>
        <p className="text-gray-600">Stay updated with our latest insights and tutorials</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <div key={index} className="bg-gray-50 border-2 border-black rounded-lg overflow-hidden">
            <div className="relative">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <span className="absolute top-3 left-3 bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium border border-blue-300">
                {article.category}
              </span>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4 text-xs text-gray-600">
                <div className="flex items-center gap-1">
                  <CalendarIcon className="h-3 w-3" />
                  {article.date}
                </div>
                <div className="flex items-center gap-1">
                  <ClockIcon className="h-3 w-3" />
                  {article.readTime}
                </div>
              </div>
              <h4 className="font-bold text-lg mb-3 leading-tight">{article.title}</h4>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">{article.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src={article.authorImage}
                    alt={article.author}
                    className="w-6 h-6 rounded-full border border-black"
                  />
                  <span className="text-xs font-medium">{article.author}</span>
                </div>
                <Button variant="outline" size="sm" className="border-black text-xs">
                  Read More
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="container max-w-6xl mx-auto px-6 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Blog <span className="bg-yellow-300 px-2 py-1 transform -rotate-1 inline-block">Layouts</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Blog post layouts and article sections for content-rich websites.
            Perfect for news sites, personal blogs, and content marketing.
          </p>
        </div>
      </section>

      {/* Blog Blocks */}
      <section className="container max-w-6xl mx-auto px-6 py-16 space-y-16">

        {/* Featured Article */}
        <div className="space-y-6">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 bg-gray-50">
            <FeaturedArticle />
          </div>
          <CodeDisplay title="Featured Article" code={featuredArticleCode} />
        </div>

        {/* Article Grid */}
        <div className="space-y-6">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 bg-gray-50">
            <ArticleGrid />
          </div>
          <CodeDisplay title="Article Grid" code={articleGridCode} />
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