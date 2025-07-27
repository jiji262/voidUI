"use client";

import React, { useState } from"react";
import Link from"next/link";
import Image from"next/image";
import { Text, Button, Card, Input, Checkbox } from"@/components/retroui";
import { EyeIcon, EyeOffIcon, MailIcon, LockIcon, UserIcon, GithubIcon } from"lucide-react";
import { CodeDisplay } from"@/components/CodeDisplay";

// Code snippets for authentication components
const loginFormCode = `import React, { useState } from"react";
import { Button, Input, Checkbox } from"@/components/retroui";
import { EyeIcon, EyeOffIcon, MailIcon, LockIcon } from"lucide-react";

const LoginForm = () => {
 const [showPassword, setShowPassword] = useState(false);

 return (
 <div className="max-w-md mx-auto bg-white border-2 border-black p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
 <div className="text-center mb-8">
 <h2 className="text-2xl font-bold mb-2">Welcome Back</h2>
 <p className="text-gray-600">Sign in to your account</p>
 </div>

 <form className="space-y-6">
 <div>
 <label className="block text-sm font-medium mb-2">Email</label>
 <div className="relative">
 <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
 <input
 type="email"
 placeholder="Enter your email"
 className="w-full pl-10 pr-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-blue-500"
 />
 </div>
 </div>

 <div>
 <label className="block text-sm font-medium mb-2">Password</label>
 <div className="relative">
 <LockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
 <input
 type={showPassword ?"text" :"password"}
 placeholder="Enter your password"
 className="w-full pl-10 pr-12 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-blue-500"
 />
 <button
 type="button"
 onClick={() => setShowPassword(!showPassword)}
 className="absolute right-3 top-1/2 transform -translate-y-1/2"
 >
 {showPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
 </button>
 </div>
 </div>

 <div className="flex items-center justify-between">
 <div className="flex items-center">
 <Checkbox id="remember" />
 <label htmlFor="remember" className="ml-2 text-sm">Remember me</label>
 </div>
 <a href="#" className="text-sm text-blue-600 hover:underline">
 Forgot password?
 </a>
 </div>

 <Button className="w-full bg-black text-white hover:bg-gray-800">
 Sign In
 </Button>

 <p className="text-center text-sm text-gray-600">
 Don't have an account?{""}
 <a href="#" className="text-blue-600 hover:underline">
 Sign up
 </a>
 </p>
 </form>
 </div>
 );
};`;

const signupFormCode = `import React, { useState } from"react";
import { Button, Input, Checkbox } from"@/components/retroui";
import { MailIcon, LockIcon, UserIcon, GithubIcon } from"lucide-react";

const SignupForm = () => {
 return (
 <div className="max-w-md mx-auto bg-white border-2 border-black p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
 <div className="text-center mb-8">
 <h2 className="text-2xl font-bold mb-2">Create Account</h2>
 <p className="text-gray-600">Join thousands of users today</p>
 </div>

 <form className="space-y-6">
 <div>
 <label className="block text-sm font-medium mb-2">Full Name</label>
 <div className="relative">
 <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
 <input
 type="text"
 placeholder="John Doe"
 className="w-full pl-10 pr-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-blue-500"
 />
 </div>
 </div>

 <div>
 <label className="block text-sm font-medium mb-2">Email</label>
 <div className="relative">
 <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
 <input
 type="email"
 placeholder="john@example.com"
 className="w-full pl-10 pr-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-blue-500"
 />
 </div>
 </div>

 <div>
 <label className="block text-sm font-medium mb-2">Password</label>
 <div className="relative">
 <LockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
 <input
 type="password"
 placeholder="Create a password"
 className="w-full pl-10 pr-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-blue-500"
 />
 </div>
 </div>

 <div className="flex items-start">
 <Checkbox id="terms" className="mt-1" />
 <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
 I agree to the Terms and Privacy Policy
 </label>
 </div>

 <Button className="w-full bg-black text-white hover:bg-gray-800">
 Create Account
 </Button>

 <div className="text-center">
 <div className="relative">
 <div className="absolute inset-0 flex items-center">
 <div className="w-full border-t border-gray-300" />
 </div>
 <div className="relative flex justify-center text-sm">
 <span className="px-2 bg-white text-gray-500">Or continue with</span>
 </div>
 </div>
 </div>

 <Button variant="outline" className="w-full border-black">
 <GithubIcon className="h-4 w-4 mr-2" />
 Continue with GitHub
 </Button>
 </form>
 </div>
 );
};`;

// Login Form Component
const LoginForm = () => {
 const [showPassword, setShowPassword] = useState(false);

 return (
 <div className="max-w-md mx-auto bg-white border-2 border-black p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
 <div className="text-center mb-8">
 <h2 className="text-2xl font-bold mb-2">Welcome Back</h2>
 <p className="text-gray-600">Sign in to your account</p>
 </div>

 <form className="space-y-6">
 <div>
 <label className="block text-sm font-medium mb-2">Email</label>
 <div className="relative">
 <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
 <input
 type="email"
 placeholder="Enter your email"
 className="w-full pl-10 pr-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-blue-500"
 />
 </div>
 </div>

 <div>
 <label className="block text-sm font-medium mb-2">Password</label>
 <div className="relative">
 <LockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
 <input
 type={showPassword ?"text" :"password"}
 placeholder="Enter your password"
 className="w-full pl-10 pr-12 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-blue-500"
 />
 <button
 type="button"
 onClick={() => setShowPassword(!showPassword)}
 className="absolute right-3 top-1/2 transform -translate-y-1/2"
 >
 {showPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
 </button>
 </div>
 </div>

 <div className="flex items-center justify-between">
 <div className="flex items-center">
 <Checkbox id="remember" />
 <label htmlFor="remember" className="ml-2 text-sm">Remember me</label>
 </div>
 <a href="#" className="text-sm text-blue-600 hover:underline">
 Forgot password?
 </a>
 </div>

 <Button className="w-full bg-black text-white hover:bg-gray-800">
 Sign In
 </Button>

 <p className="text-center text-sm text-gray-600">
 Don't have an account?{""}
 <a href="#" className="text-blue-600 hover:underline">
 Sign up
 </a>
 </p>
 </form>
 </div>
 );
};

// Signup Form Component
const SignupForm = () => {
 return (
 <div className="max-w-md mx-auto bg-white border-2 border-black p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
 <div className="text-center mb-8">
 <h2 className="text-2xl font-bold mb-2">Create Account</h2>
 <p className="text-gray-600">Join thousands of users today</p>
 </div>

 <form className="space-y-6">
 <div>
 <label className="block text-sm font-medium mb-2">Full Name</label>
 <div className="relative">
 <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
 <input
 type="text"
 placeholder="John Doe"
 className="w-full pl-10 pr-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-blue-500"
 />
 </div>
 </div>

 <div>
 <label className="block text-sm font-medium mb-2">Email</label>
 <div className="relative">
 <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
 <input
 type="email"
 placeholder="john@example.com"
 className="w-full pl-10 pr-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-blue-500"
 />
 </div>
 </div>

 <div>
 <label className="block text-sm font-medium mb-2">Password</label>
 <div className="relative">
 <LockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
 <input
 type="password"
 placeholder="Create a password"
 className="w-full pl-10 pr-4 py-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-blue-500"
 />
 </div>
 </div>

 <div className="flex items-start">
 <Checkbox id="terms" className="mt-1" />
 <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
 I agree to the Terms and Privacy Policy
 </label>
 </div>

 <Button className="w-full bg-black text-white hover:bg-gray-800">
 Create Account
 </Button>

 <div className="text-center">
 <div className="relative">
 <div className="absolute inset-0 flex items-center">
 <div className="w-full border-t border-gray-300" />
 </div>
 <div className="relative flex justify-center text-sm">
 <span className="px-2 bg-white text-gray-500">Or continue with</span>
 </div>
 </div>
 </div>

 <Button variant="outline" className="w-full border-black">
 <GithubIcon className="h-4 w-4 mr-2" />
 Continue with GitHub
 </Button>
 </form>
 </div>
 );
};

export default function AuthenticationPage() {
 return (
 <main className="min-h-screen bg-background">
 {/* Page Header */}
 <section className="container max-w-6xl mx-auto px-6 py-16">
 <div className="text-center max-w-3xl mx-auto">
 <h1 className="text-4xl lg:text-5xl font-bold mb-6">
 Authentication <span className="bg-yellow-300 px-2 py-1 transform -rotate-1 inline-block">Forms</span>
 </h1>
 <p className="text-lg text-gray-600 mb-8">
 Login and signup form layouts with various styles and authentication methods.
 Perfect for user registration and sign-in flows.
 </p>
 </div>
 </section>

 {/* Authentication Blocks */}
 <section className="container max-w-6xl mx-auto px-6 py-16 space-y-16">

 {/* Login Form */}
 <div className="space-y-6">
 <div className="border-2 border-dashed border-gray-300 p-8 bg-gray-50">
 <LoginForm />
 </div>
 <CodeDisplay title="Login Form" code={loginFormCode} />
 </div>

 {/* Signup Form */}
 <div className="space-y-6">
 <div className="border-2 border-dashed border-gray-300 p-8 bg-gray-50">
 <SignupForm />
 </div>
 <CodeDisplay title="Signup Form" code={signupFormCode} />
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