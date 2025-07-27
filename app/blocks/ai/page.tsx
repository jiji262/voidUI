"use client";

import React, { useState } from"react";
import Link from"next/link";
import { Text, Button, Card, Input } from"@/components/retroui";
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
} from"lucide-react";
import { CodeDisplay } from"@/components/CodeDisplay";

// Code snippet for AI Chat Interface
const aiChatCode = `import React, { useState } from"react";
import { Button, Input } from"@/components/retroui";
import { BotIcon, SendIcon, MicIcon } from"lucide-react";

const AIChatInterface = () => {
 const [messages, setMessages] = useState([
 { type:"ai", content:"Hello! I'm your AI assistant. How can I help you today?" },
 { type:"user", content:"Can you help me write a product description?" },
 { type:"ai", content:"Of course! I'd be happy to help you write a compelling product description. Could you tell me more about the product you'd like to describe?" }
 ]);
 const [inputValue, setInputValue] = useState("");
 const [isTyping, setIsTyping] = useState(true);

 const handleSend = () => {
 if (inputValue.trim()) {
 setMessages([...messages, { type:"user", content: inputValue }]);
 setInputValue("");
 // Simulate AI response
 setTimeout(() => {
 setMessages(prev => [...prev, { type:"ai", content:"I'd be happy to help with that!" }]);
 }, 1000);
 }
 };

 return (
 <div className="max-w-2xl mx-auto bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
 {/* Header */}
 <div className="border-b-2 border-black p-4 bg-gray-50">
 <div className="flex items-center gap-3">
 <div className="w-10 h-10 bg-yellow-300 flex items-center justify-center border-2 border-black">
 <BotIcon className="h-5 w-5" />
 </div>
 <div>
 <h4 className="font-bold">AI Assistant</h4>
 <div className="flex items-center gap-2">
 <div className="w-2 h-2 bg-green-500"></div>
 <span className="text-sm text-gray-600">Online</span>
 </div>
 </div>
 </div>
 </div>

 {/* Messages */}
 <div className="h-80 overflow-y-auto p-4 space-y-4">
 {messages.map((message, index) => (
 <div
 key={index}
 className={\`flex \${message.type ==="user" ?"justify-end" :"justify-start"}\`}
 >
 <div
 className={\`max-w-xs px-4 py-2 \${
 message.type ==="user"
 ?"bg-black text-white"
 :"bg-gray-100 text-black border-2 border-gray-300"
 }\`}
 >
 <p className="text-sm">{message.content}</p>
 </div>
 </div>
 ))}

 {isTyping && (
 <div className="flex justify-start">
 <div className="bg-gray-100 border-2 border-gray-300 px-4 py-2">
 <div className="flex items-center gap-1">
 <div className="w-2 h-2 bg-gray-400 animate-bounce"></div>
 <div className="w-2 h-2 bg-gray-400 animate-bounce" style={{ animationDelay:"0.1s" }}></div>
 <div className="w-2 h-2 bg-gray-400 animate-bounce" style={{ animationDelay:"0.2s" }}></div>
 <span className="text-sm text-gray-600 ml-2">AI is typing...</span>
 </div>
 </div>
 </div>
 )}
 </div>

 {/* Input */}
 <div className="border-t-2 border-black p-4 bg-gray-50">
 <div className="flex gap-2">
 <input
 type="text"
 value={inputValue}
 onChange={(e) => setInputValue(e.target.value)}
 placeholder="Type your message..."
 className="flex-1 px-4 py-2 border-2 border-black focus:outline-none focus:ring-2 focus:ring-blue-500"
 onKeyPress={(e) => e.key ==="Enter" && handleSend()}
 />
 <Button
 onClick={handleSend}
 className="bg-black text-white hover:bg-gray-800 px-4"
 >
 <SendIcon className="h-4 w-4" />
 </Button>
 <Button
 variant="outline"
 className="border-black px-4"
 >
 <MicIcon className="h-4 w-4" />
 </Button>
 </div>
 </div>
 </div>
 );
};`;

// AI Chat Interface Component
const AIChatInterface = () => {
 const [messages, setMessages] = useState([
 { type:"ai", content:"Hello! I'm your AI assistant. How can I help you today?" },
 { type:"user", content:"Can you help me write a product description?" },
 { type:"ai", content:"Of course! I'd be happy to help you write a compelling product description. Could you tell me more about the product you'd like to describe?" }
 ]);
 const [inputValue, setInputValue] = useState("");
 const [isTyping, setIsTyping] = useState(true);

 const handleSend = () => {
 if (inputValue.trim()) {
 setMessages([...messages, { type:"user", content: inputValue }]);
 setInputValue("");
 // Simulate AI response
 setTimeout(() => {
 setMessages(prev => [...prev, { type:"ai", content:"I'd be happy to help with that!" }]);
 }, 1000);
 }
 };

 return (
 <div className="max-w-2xl mx-auto bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
 {/* Header */}
 <div className="border-b-2 border-black p-4 bg-gray-50">
 <div className="flex items-center gap-3">
 <div className="w-10 h-10 bg-yellow-300 flex items-center justify-center border-2 border-black">
 <BotIcon className="h-5 w-5" />
 </div>
 <div>
 <h4 className="font-bold">AI Assistant</h4>
 <div className="flex items-center gap-2">
 <div className="w-2 h-2 bg-green-500"></div>
 <span className="text-sm text-gray-600">Online</span>
 </div>
 </div>
 </div>
 </div>

 {/* Messages */}
 <div className="h-80 overflow-y-auto p-4 space-y-4">
 {messages.map((message, index) => (
 <div
 key={index}
 className={`flex ${message.type ==="user" ?"justify-end" :"justify-start"}`}
 >
 <div
 className={`max-w-xs px-4 py-2 ${
 message.type ==="user"
 ?"bg-black text-white"
 :"bg-gray-100 text-black border-2 border-gray-300"
 }`}
 >
 <p className="text-sm">{message.content}</p>
 </div>
 </div>
 ))}

 {isTyping && (
 <div className="flex justify-start">
 <div className="bg-gray-100 border-2 border-gray-300 px-4 py-2">
 <div className="flex items-center gap-1">
 <div className="w-2 h-2 bg-gray-400 animate-bounce"></div>
 <div className="w-2 h-2 bg-gray-400 animate-bounce" style={{ animationDelay:"0.1s" }}></div>
 <div className="w-2 h-2 bg-gray-400 animate-bounce" style={{ animationDelay:"0.2s" }}></div>
 <span className="text-sm text-gray-600 ml-2">AI is typing...</span>
 </div>
 </div>
 </div>
 )}
 </div>

 {/* Input */}
 <div className="border-t-2 border-black p-4 bg-gray-50">
 <div className="flex gap-2">
 <input
 type="text"
 value={inputValue}
 onChange={(e) => setInputValue(e.target.value)}
 placeholder="Type your message..."
 className="flex-1 px-4 py-2 border-2 border-black focus:outline-none focus:ring-2 focus:ring-blue-500"
 onKeyPress={(e) => e.key ==="Enter" && handleSend()}
 />
 <Button
 onClick={handleSend}
 className="bg-black text-white hover:bg-gray-800 px-4"
 >
 <SendIcon className="h-4 w-4" />
 </Button>
 <Button
 variant="outline"
 className="border-black px-4"
 >
 <MicIcon className="h-4 w-4" />
 </Button>
 </div>
 </div>
 </div>
 );
};

export default function AIPage() {

 return (
 <main className="min-h-screen bg-background">
 {/* Page Header */}
 <section className="container max-w-6xl mx-auto px-6 py-16">
 <div className="text-center max-w-3xl mx-auto">
 <h1 className="text-4xl lg:text-5xl font-bold mb-6">
 AI-Powered <span className="bg-yellow-300 px-2 py-1 transform -rotate-1 inline-block">Interfaces</span>
 </h1>
 <p className="text-lg text-gray-600 mb-8">
 Modern AI interface components for chat, content generation,
 and intelligent interactions. Perfect for AI-powered applications.
 </p>
 </div>
 </section>

 {/* AI Blocks */}
 <section className="container max-w-6xl mx-auto px-6 py-16 space-y-16">

 {/* AI Chat Interface */}
 <div className="space-y-6">
 <div className="border-2 border-dashed border-gray-300 p-8 bg-gray-50">
 <AIChatInterface />
 </div>
 <CodeDisplay title="AI Chat Interface" code={aiChatCode} />
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