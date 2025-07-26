"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Text, Button, Card, Input, Checkbox } from "@/components/retroui";
import { EyeIcon, EyeOffIcon, MailIcon, LockIcon, UserIcon, GithubIcon } from "lucide-react";

export default function AuthenticationPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="container max-w-6xl mx-auto px-4 lg:px-0 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <Text as="h1" className="text-4xl lg:text-5xl mb-6">
            Authentication <span className="text-outlined">Forms</span>
          </Text>
          <p className="text-lg text-muted-foreground mb-8">
            Login and signup form layouts with various styles and authentication methods. 
            Perfect for user registration and sign-in flows.
          </p>
        </div>
      </section>

      {/* Authentication Blocks */}
      <section className="container max-w-6xl mx-auto px-4 lg:px-0 pb-16 space-y-16">
        
        {/* Simple Login Form */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Simple Login Form</Text>
          <Card className="p-8 max-w-md mx-auto">
            <div className="text-center mb-8">
              <Text as="h4" className="text-2xl font-bold mb-2">Welcome Back</Text>
              <p className="text-muted-foreground">Sign in to your account</p>
            </div>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <div className="relative">
                  <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    type="email" 
                    placeholder="Enter your email"
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Password</label>
                <div className="relative">
                  <LockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    type="password" 
                    placeholder="Enter your password"
                    className="pl-10 pr-10"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <EyeOffIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox id="remember" />
                  <label htmlFor="remember" className="text-sm">Remember me</label>
                </div>
                <Link href="#" className="text-sm text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
              
              <Button className="w-full">Sign In</Button>
              
              <p className="text-center text-sm text-muted-foreground">
                Don&apos;t have an account?{" "}
                <Link href="#" className="text-primary hover:underline">
                  Sign up
                </Link>
              </p>
            </form>
          </Card>
        </div>

        {/* Split Screen Auth */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Split Screen Authentication</Text>
          <Card className="overflow-hidden max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2">
              <div className="p-12">
                <div className="mb-8">
                  <Text as="h4" className="text-2xl font-bold mb-2">Create Account</Text>
                  <p className="text-muted-foreground">Join thousands of users today</p>
                </div>
                
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <div className="relative">
                      <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input 
                        placeholder="John Doe"
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <div className="relative">
                      <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input 
                        type="email" 
                        placeholder="john@example.com"
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Password</label>
                    <div className="relative">
                      <LockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input 
                        type="password" 
                        placeholder="Create a password"
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Checkbox id="terms" />
                    <label htmlFor="terms" className="text-sm">
                      I agree to the Terms and Privacy Policy
                    </label>
                  </div>
                  
                  <Button className="w-full">Create Account</Button>
                </form>
              </div>
              
              <div className="bg-primary/5 p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <UserIcon className="h-16 w-16 text-primary" />
                  </div>
                  <Text as="h5" className="text-xl font-bold mb-4">Welcome to Our Platform</Text>
                  <p className="text-muted-foreground mb-6">
                    Join our community and unlock powerful features to grow your business.
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div>✓ Advanced analytics</div>
                    <div>✓ 24/7 support</div>
                    <div>✓ Secure & reliable</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Social Login */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Social Authentication</Text>
          <Card className="p-8 max-w-md mx-auto">
            <div className="text-center mb-8">
              <Text as="h4" className="text-2xl font-bold mb-2">Sign In</Text>
              <p className="text-muted-foreground">Choose your preferred method</p>
            </div>
            
            <div className="space-y-4 mb-6">
              <Button variant="outline" className="w-full">
                <GithubIcon className="mr-2 h-4 w-4" />
                Continue with GitHub
              </Button>
              
              <Button variant="outline" className="w-full">
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </Button>
              
              <Button variant="outline" className="w-full">
                <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Continue with Facebook
              </Button>
            </div>
            
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-background text-muted-foreground">Or continue with email</span>
              </div>
            </div>
            
            <form className="space-y-4">
              <Input type="email" placeholder="Email address" />
              <Input type="password" placeholder="Password" />
              <Button className="w-full">Sign In</Button>
            </form>
          </Card>
        </div>

        {/* Two-Factor Authentication */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Two-Factor Authentication</Text>
          <Card className="p-8 max-w-md mx-auto">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <LockIcon className="h-8 w-8 text-primary" />
              </div>
              <Text as="h4" className="text-2xl font-bold mb-2">Verify Your Identity</Text>
              <p className="text-muted-foreground">
                Enter the 6-digit code sent to your phone
              </p>
            </div>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Verification Code</label>
                <div className="flex gap-2 justify-center">
                  {[...Array(6)].map((_, i) => (
                    <Input
                      key={i}
                      type="text"
                      maxLength={1}
                      className="w-12 h-12 text-center text-lg font-bold"
                    />
                  ))}
                </div>
              </div>
              
              <Button className="w-full">Verify Code</Button>
              
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">
                  Didn&apos;t receive the code?
                </p>
                <Button variant="outline" size="sm">
                  Resend Code
                </Button>
              </div>
            </form>
          </Card>
        </div>

        {/* Password Reset */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Password Reset</Text>
          <Card className="p-8 max-w-md mx-auto">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MailIcon className="h-8 w-8 text-primary" />
              </div>
              <Text as="h4" className="text-2xl font-bold mb-2">Reset Password</Text>
              <p className="text-muted-foreground">
                Enter your email and we&apos;ll send you a reset link
              </p>
            </div>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <Input 
                  type="email" 
                  placeholder="Enter your email"
                />
              </div>
              
              <Button className="w-full">Send Reset Link</Button>
              
              <div className="text-center">
                <Link href="#" className="text-sm text-primary hover:underline">
                  Back to Sign In
                </Link>
              </div>
            </form>
          </Card>
        </div>

        {/* Email Verification */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Email Verification</Text>
          <Card className="p-8 max-w-md mx-auto text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <MailIcon className="h-8 w-8 text-green-600" />
            </div>
            
            <Text as="h4" className="text-2xl font-bold mb-4">Check Your Email</Text>
            <p className="text-muted-foreground mb-6">
              We&apos;ve sent a verification link to{" "}
              <span className="font-medium">john@example.com</span>
            </p>
            
            <div className="space-y-4">
              <Button className="w-full">Open Email App</Button>
              <Button variant="outline" className="w-full">
                Resend Email
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground mt-6">
              Didn&apos;t receive the email? Check your spam folder or try a different email address.
            </p>
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