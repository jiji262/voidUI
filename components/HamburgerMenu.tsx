"use client";

import { useState } from "react";
import { AlignJustify, X } from "lucide-react";
import { Button } from "@/components/retroui";
import { navConfig } from "@/config/navigation";
import Link from "next/link";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button
        size="sm"
        variant="outline"
        className="p-2"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? (
          <X className="h-4 w-4" />
        ) : (
          <AlignJustify className="h-4 w-4" />
        )}
      </Button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {isOpen && (
        <div className="fixed top-0 right-0 h-full w-64 bg-background border-l-2 z-50 p-6">
          <div className="flex flex-col space-y-4 mt-16">
            {navConfig.topNavItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-lg hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
