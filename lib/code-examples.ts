// Common code examples for different block types

export const codeExamples = {
  // Hero Sections
  heroSimple: `<section className="text-center max-w-3xl mx-auto py-16">
  <Text as="h1" className="text-4xl lg:text-6xl mb-6">
    Build Amazing
    <br />
    <span className="text-outlined">Products</span>
  </Text>
  <p className="text-lg text-muted-foreground mb-8">
    Create stunning web applications with our modern component library. 
    Fast, accessible, and beautifully designed.
  </p>
  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    <Button size="lg">
      Get Started
      <ArrowRightIcon className="ml-2 h-4 w-4" />
    </Button>
    <Button variant="outline" size="lg">
      <PlayIcon className="mr-2 h-4 w-4" />
      Watch Demo
    </Button>
  </div>
</section>`,

  heroSplit: `<div className="grid lg:grid-cols-2 gap-12 items-center">
  <div>
    <Text as="h1" className="text-4xl lg:text-5xl mb-6">
      The Future of
      <br />
      <span className="text-outlined">Web Design</span>
    </Text>
    <p className="text-lg text-muted-foreground mb-8">
      Revolutionary tools and components that help you build faster, 
      better, and more accessible web applications.
    </p>
    <div className="flex flex-col sm:flex-row gap-4">
      <Button size="lg">
        Start Building
        <ArrowRightIcon className="ml-2 h-4 w-4" />
      </Button>
      <Button variant="outline" size="lg">
        Learn More
      </Button>
    </div>
  </div>
  <div className="relative">
    <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
      <Image
        src="/hero-image.jpg"
        alt="Hero illustration"
        width={400}
        height={400}
        className="rounded-lg object-cover"
      />
    </div>
  </div>
</div>`,

  // Cards
  productCard: `<Card className="overflow-hidden">
  <div className="aspect-square relative">
    <Image
      src="/product-image.jpg"
      alt="Product"
      fill
      className="object-cover"
    />
    <div className="absolute top-4 right-4">
      <Badge variant="secondary">New</Badge>
    </div>
  </div>
  <div className="p-6">
    <Text as="h4" className="text-lg font-semibold mb-2">Premium Headphones</Text>
    <p className="text-muted-foreground text-sm mb-4">
      High-quality wireless headphones with noise cancellation
    </p>
    <div className="flex items-center justify-between">
      <Text as="span" className="text-2xl font-bold">$299</Text>
      <Button size="sm">Add to Cart</Button>
    </div>
  </div>
</Card>`,

  blogCard: `<Card className="overflow-hidden">
  <div className="aspect-video relative">
    <Image
      src="/blog-image.jpg"
      alt="Blog post"
      fill
      className="object-cover"
    />
  </div>
  <div className="p-6">
    <div className="flex items-center gap-2 mb-3">
      <Badge variant="outline">Technology</Badge>
      <span className="text-xs text-muted-foreground flex items-center gap-1">
        <CalendarIcon className="h-3 w-3" />
        Mar 15, 2024
      </span>
    </div>
    <Text as="h4" className="text-lg font-semibold mb-2">
      The Future of Web Development
    </Text>
    <p className="text-muted-foreground text-sm mb-4">
      Exploring the latest trends and technologies shaping the future...
    </p>
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-muted rounded-full"></div>
        <span className="text-xs text-muted-foreground">John Doe</span>
      </div>
      <Button variant="outline" size="sm">
        Read More
        <ArrowRightIcon className="ml-1 h-3 w-3" />
      </Button>
    </div>
  </div>
</Card>`,

  // Forms
  contactForm: `<Card className="p-8">
  <Text as="h4" className="text-xl font-semibold mb-6">Get in Touch</Text>
  <form className="space-y-6">
    <div className="grid md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium mb-2">First Name</label>
        <Input placeholder="John" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Last Name</label>
        <Input placeholder="Doe" />
      </div>
    </div>
    <div>
      <label className="block text-sm font-medium mb-2">Email</label>
      <Input type="email" placeholder="john@example.com" />
    </div>
    <div>
      <label className="block text-sm font-medium mb-2">Message</label>
      <Textarea 
        placeholder="Tell us how we can help you..."
        rows={4}
      />
    </div>
    <Button className="w-full">
      <SendIcon className="mr-2 h-4 w-4" />
      Send Message
    </Button>
  </form>
</Card>`,

  // Pricing
  pricingCard: `<Card className="p-8 text-center">
  <Text as="h4" className="text-xl font-semibold mb-2">Professional</Text>
  <p className="text-muted-foreground text-sm mb-6">Best for small teams</p>
  <div className="mb-6">
    <Text as="span" className="text-4xl font-bold">$29</Text>
    <Text as="span" className="text-muted-foreground">/month</Text>
  </div>
  <ul className="space-y-3 mb-8 text-sm">
    <li className="flex items-center gap-2">
      <CheckIcon className="h-4 w-4 text-green-500" />
      Unlimited projects
    </li>
    <li className="flex items-center gap-2">
      <CheckIcon className="h-4 w-4 text-green-500" />
      100GB storage
    </li>
    <li className="flex items-center gap-2">
      <CheckIcon className="h-4 w-4 text-green-500" />
      Priority support
    </li>
  </ul>
  <Button className="w-full">Get Started</Button>
</Card>`,

  // Stats
  statsGrid: `<div className="grid md:grid-cols-4 gap-8 text-center">
  <div>
    <Text as="div" className="text-4xl font-bold mb-2">10,000+</Text>
    <p className="text-muted-foreground">Happy Customers</p>
  </div>
  <div>
    <Text as="div" className="text-4xl font-bold mb-2">99.9%</Text>
    <p className="text-muted-foreground">Uptime</p>
  </div>
  <div>
    <Text as="div" className="text-4xl font-bold mb-2">24/7</Text>
    <p className="text-muted-foreground">Support</p>
  </div>
  <div>
    <Text as="div" className="text-4xl font-bold mb-2">150+</Text>
    <p className="text-muted-foreground">Countries</p>
  </div>
</div>`,

  // Authentication
  loginForm: `<Card className="p-8 max-w-md mx-auto">
  <div className="text-center mb-8">
    <Text as="h4" className="text-2xl font-bold mb-2">Welcome Back</Text>
    <p className="text-muted-foreground">Sign in to your account</p>
  </div>
  
  <form className="space-y-6">
    <div>
      <label className="block text-sm font-medium mb-2">Email</label>
      <Input type="email" placeholder="Enter your email" />
    </div>
    
    <div>
      <label className="block text-sm font-medium mb-2">Password</label>
      <Input type="password" placeholder="Enter your password" />
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
  </form>
</Card>`,

  // Testimonials
  testimonialCard: `<Card className="p-6">
  <div className="flex items-center gap-1 mb-4">
    {[...Array(5)].map((_, i) => (
      <StarIcon key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
    ))}
  </div>
  <p className="text-muted-foreground mb-6">
    "This product has completely transformed how we work. The interface is 
    intuitive and the features are exactly what we needed."
  </p>
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 relative">
      <Image
        src="/avatar.jpg"
        alt="Customer"
        fill
        className="rounded-full object-cover"
      />
    </div>
    <div>
      <Text as="p" className="font-semibold text-sm">John Smith</Text>
      <p className="text-xs text-muted-foreground">CEO, TechCorp</p>
    </div>
  </div>
</Card>`,

  // FAQ
  faqItem: `<div className="border-b border-border pb-4">
  <button
    onClick={() => toggleItem('faq-1')}
    className="flex items-center justify-between w-full text-left py-4"
  >
    <Text as="h4" className="font-semibold">What is included in the free trial?</Text>
    <ChevronDownIcon className="h-5 w-5 transition-transform" />
  </button>
  {isOpen && (
    <div className="pb-4">
      <p className="text-muted-foreground">
        Our 14-day free trial includes full access to all features, 
        unlimited projects, and priority support. No credit card required.
      </p>
    </div>
  )}
</div>`,

  // Call to Action
  simpleCTA: `<Card className="p-12 text-center bg-primary/5">
  <Text as="h4" className="text-3xl font-bold mb-4">
    Ready to Get Started?
  </Text>
  <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
    Join thousands of satisfied customers who have transformed their business 
    with our platform. Start your free trial today.
  </p>
  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    <Button size="lg">
      Start Free Trial
      <ArrowRightIcon className="ml-2 h-4 w-4" />
    </Button>
    <Button variant="outline" size="lg">
      Schedule Demo
    </Button>
  </div>
</Card>`,
};

export function getCodeExample(blockType: string, variant?: string): string {
  const key = variant ? `${blockType}${variant}` : blockType;
  return codeExamples[key as keyof typeof codeExamples] || codeExamples.heroSimple;
}