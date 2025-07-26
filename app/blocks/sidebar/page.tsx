"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Text, Button, Card, Badge } from "@/components/retroui";
import { 
  MenuIcon,
  XIcon,
  HomeIcon,
  UsersIcon,
  SettingsIcon,
  HelpCircleIcon,
  BellIcon,
  SearchIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  FolderIcon,
  FileIcon,
  PlusIcon,
  LogOutIcon,
  UserIcon
} from "lucide-react";

export default function SidebarPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = (item: string) => {
    setExpandedItems(prev => 
      prev.includes(item) 
        ? prev.filter(i => i !== item)
        : [...prev, item]
    );
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="container max-w-6xl mx-auto px-4 lg:px-0 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <Text as="h1" className="text-4xl lg:text-5xl mb-6">
            Sidebar <span className="text-outlined">Navigation</span>
          </Text>
          <p className="text-lg text-muted-foreground mb-8">
            Navigation sidebars and panels for organizing content and providing 
            easy access to different sections of your application.
          </p>
        </div>
      </section>

      {/* Sidebar Blocks */}
      <section className="container max-w-6xl mx-auto px-4 lg:px-0 pb-16 space-y-16">
        
        {/* Simple Sidebar */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Simple Sidebar</Text>
          <Card className="p-8">
            <div className="flex h-96 border-2 border-dashed border-muted rounded-lg overflow-hidden">
              {/* Sidebar */}
              <div className="w-64 bg-muted/30 border-r border-border p-4">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 bg-primary rounded-lg"></div>
                  <Text as="span" className="font-bold">Dashboard</Text>
                </div>
                
                <nav className="space-y-2">
                  <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary text-primary-foreground">
                    <HomeIcon className="h-4 w-4" />
                    <span>Home</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted transition-colors">
                    <UsersIcon className="h-4 w-4" />
                    <span>Team</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted transition-colors">
                    <FolderIcon className="h-4 w-4" />
                    <span>Projects</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted transition-colors">
                    <SettingsIcon className="h-4 w-4" />
                    <span>Settings</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted transition-colors">
                    <HelpCircleIcon className="h-4 w-4" />
                    <span>Help</span>
                  </a>
                </nav>
              </div>
              
              {/* Main Content */}
              <div className="flex-1 p-6">
                <Text as="h4" className="text-xl font-semibold mb-4">Main Content Area</Text>
                <p className="text-muted-foreground">
                  This is where your main content would be displayed. The sidebar provides 
                  easy navigation between different sections of your application.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Collapsible Sidebar */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Collapsible Sidebar</Text>
          <Card className="p-8">
            <div className="flex h-96 border-2 border-dashed border-muted rounded-lg overflow-hidden">
              {/* Mobile Overlay */}
              {sidebarOpen && (
                <div 
                  className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                  onClick={() => setSidebarOpen(false)}
                />
              )}
              
              {/* Sidebar */}
              <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:relative z-50 lg:z-auto w-64 h-full bg-background lg:bg-muted/30 border-r border-border p-4 transition-transform duration-300`}>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary rounded-lg"></div>
                    <Text as="span" className="font-bold">App</Text>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <XIcon className="h-4 w-4" />
                  </Button>
                </div>
                
                <nav className="space-y-1">
                  <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary text-primary-foreground">
                    <HomeIcon className="h-4 w-4" />
                    <span>Dashboard</span>
                  </a>
                  
                  <div>
                    <button 
                      onClick={() => toggleExpanded('projects')}
                      className="flex items-center justify-between w-full px-3 py-2 rounded-lg hover:bg-muted transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <FolderIcon className="h-4 w-4" />
                        <span>Projects</span>
                      </div>
                      <ChevronDownIcon className={`h-4 w-4 transition-transform ${expandedItems.includes('projects') ? 'rotate-180' : ''}`} />
                    </button>
                    {expandedItems.includes('projects') && (
                      <div className="ml-6 mt-1 space-y-1">
                        <a href="#" className="flex items-center gap-2 px-3 py-1 text-sm rounded hover:bg-muted transition-colors">
                          <FileIcon className="h-3 w-3" />
                          <span>Website Redesign</span>
                        </a>
                        <a href="#" className="flex items-center gap-2 px-3 py-1 text-sm rounded hover:bg-muted transition-colors">
                          <FileIcon className="h-3 w-3" />
                          <span>Mobile App</span>
                        </a>
                      </div>
                    )}
                  </div>
                  
                  <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted transition-colors">
                    <UsersIcon className="h-4 w-4" />
                    <span>Team</span>
                    <Badge variant="secondary" className="ml-auto">3</Badge>
                  </a>
                  
                  <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted transition-colors">
                    <SettingsIcon className="h-4 w-4" />
                    <span>Settings</span>
                  </a>
                </nav>
                
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                    <div className="w-8 h-8 bg-muted-foreground rounded-full"></div>
                    <div className="flex-1 min-w-0">
                      <Text as="p" className="text-sm font-medium truncate">John Doe</Text>
                      <p className="text-xs text-muted-foreground">john@example.com</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <LogOutIcon className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Main Content */}
              <div className="flex-1 p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="lg:hidden"
                    onClick={() => setSidebarOpen(true)}
                  >
                    <MenuIcon className="h-4 w-4" />
                  </Button>
                  <Text as="h4" className="text-xl font-semibold">Dashboard</Text>
                </div>
                <p className="text-muted-foreground">
                  This sidebar can be collapsed on mobile devices and includes nested navigation items.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* File Explorer Sidebar */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">File Explorer Sidebar</Text>
          <Card className="p-8">
            <div className="flex h-96 border-2 border-dashed border-muted rounded-lg overflow-hidden">
              {/* File Explorer Sidebar */}
              <div className="w-80 bg-muted/30 border-r border-border">
                <div className="p-4 border-b border-border">
                  <div className="flex items-center justify-between mb-3">
                    <Text as="h5" className="font-semibold">Files</Text>
                    <Button variant="outline" size="sm">
                      <PlusIcon className="h-3 w-3" />
                    </Button>
                  </div>
                  <div className="relative">
                    <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search files..."
                      className="w-full pl-10 pr-4 py-2 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 px-2 py-1 rounded hover:bg-muted transition-colors">
                      <ChevronDownIcon className="h-4 w-4" />
                      <FolderIcon className="h-4 w-4 text-blue-500" />
                      <span className="text-sm">Documents</span>
                    </div>
                    
                    <div className="ml-6 space-y-1">
                      <div className="flex items-center gap-2 px-2 py-1 rounded hover:bg-muted transition-colors">
                        <FileIcon className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">Project Brief.pdf</span>
                      </div>
                      <div className="flex items-center gap-2 px-2 py-1 rounded hover:bg-muted transition-colors">
                        <FileIcon className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">Meeting Notes.docx</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 px-2 py-1 rounded hover:bg-muted transition-colors">
                      <ChevronRightIcon className="h-4 w-4" />
                      <FolderIcon className="h-4 w-4 text-blue-500" />
                      <span className="text-sm">Images</span>
                    </div>
                    
                    <div className="flex items-center gap-2 px-2 py-1 rounded hover:bg-muted transition-colors">
                      <ChevronDownIcon className="h-4 w-4" />
                      <FolderIcon className="h-4 w-4 text-blue-500" />
                      <span className="text-sm">Projects</span>
                    </div>
                    
                    <div className="ml-6 space-y-1">
                      <div className="flex items-center gap-2 px-2 py-1 rounded bg-primary/10 text-primary">
                        <FolderIcon className="h-4 w-4" />
                        <span className="text-sm">Website Redesign</span>
                      </div>
                      <div className="flex items-center gap-2 px-2 py-1 rounded hover:bg-muted transition-colors">
                        <FolderIcon className="h-4 w-4 text-blue-500" />
                        <span className="text-sm">Mobile App</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* File Content */}
              <div className="flex-1 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <FolderIcon className="h-5 w-5 text-blue-500" />
                  <Text as="h4" className="text-lg font-semibold">Website Redesign</Text>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "wireframes.fig", type: "Figma", size: "2.4 MB" },
                    { name: "mockups.sketch", type: "Sketch", size: "5.1 MB" },
                    { name: "assets.zip", type: "Archive", size: "12.3 MB" },
                    { name: "requirements.pdf", type: "PDF", size: "890 KB" }
                  ].map((file, index) => (
                    <div key={index} className="p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                      <div className="flex items-center gap-2 mb-2">
                        <FileIcon className="h-4 w-4 text-gray-500" />
                        <span className="text-sm font-medium truncate">{file.name}</span>
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{file.type}</span>
                        <span>{file.size}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Settings Sidebar */}
        <div>
          <Text as="h3" className="text-2xl mb-8 text-center">Settings Sidebar</Text>
          <Card className="p-8">
            <div className="flex h-96 border-2 border-dashed border-muted rounded-lg overflow-hidden">
              {/* Settings Sidebar */}
              <div className="w-64 bg-muted/30 border-r border-border p-4">
                <Text as="h5" className="font-semibold mb-4">Settings</Text>
                
                <nav className="space-y-1">
                  <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary text-primary-foreground">
                    <UserIcon className="h-4 w-4" />
                    <span>Profile</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted transition-colors">
                    <BellIcon className="h-4 w-4" />
                    <span>Notifications</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted transition-colors">
                    <SettingsIcon className="h-4 w-4" />
                    <span>Preferences</span>
                  </a>
                  
                  <div className="pt-4">
                    <Text as="h6" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-3">
                      Account
                    </Text>
                    <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted transition-colors">
                      <span>Billing</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted transition-colors">
                      <span>Security</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted transition-colors">
                      <span>Privacy</span>
                    </a>
                  </div>
                  
                  <div className="pt-4">
                    <Text as="h6" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-3">
                      Support
                    </Text>
                    <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted transition-colors">
                      <HelpCircleIcon className="h-4 w-4" />
                      <span>Help Center</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted transition-colors">
                      <span>Contact Support</span>
                    </a>
                  </div>
                </nav>
              </div>
              
              {/* Settings Content */}
              <div className="flex-1 p-6">
                <Text as="h4" className="text-xl font-semibold mb-6">Profile Settings</Text>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                      <UserIcon className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <div>
                      <Text as="h5" className="font-semibold">John Doe</Text>
                      <p className="text-sm text-muted-foreground">john.doe@example.com</p>
                    </div>
                    <Button variant="outline" size="sm" className="ml-auto">
                      Change Photo
                    </Button>
                  </div>
                  
                  <div className="grid gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Display Name</label>
                      <input
                        type="text"
                        value="John Doe"
                        className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        value="john.doe@example.com"
                        className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                  
                  <Button>Save Changes</Button>
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