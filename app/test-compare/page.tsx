"use client";

import React from "react";
import { Button } from "@/components/retroui";

export default function TestComparePage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold mb-8">Style Test Page</h1>
        
        {/* Test Card with Neo-Brutalism style */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Neo-Brutalism Card Test</h2>
          <div className="max-w-sm bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-xl font-bold mb-2">Test Card</h3>
            <p className="text-gray-600 mb-4">This is a test card with Neo-Brutalism styling.</p>
            <Button className="bg-black text-white hover:bg-gray-800">
              Test Button
            </Button>
          </div>
        </div>

        {/* Test Yellow Highlight */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Yellow Highlight Test</h2>
          <h1 className="text-4xl font-bold">
            Build <span className="bg-yellow-300 px-2 py-1 transform -rotate-1 inline-block">Better</span> Software
          </h1>
        </div>

        {/* Test Button Shadows */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Button Shadow Test</h2>
          <Button className="bg-black text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-1 hover:translate-y-1">
            Neo-Brutalism Button
          </Button>
        </div>

        {/* Test Grid Layout */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Grid Layout Test</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="h-32 bg-gray-50 border-b-2 border-black flex items-center justify-center">
                  <span className="text-6xl">🎨</span>
                </div>
                <div className="pt-4">
                  <h3 className="font-bold">Component {i}</h3>
                  <p className="text-sm text-gray-600">Test component</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}