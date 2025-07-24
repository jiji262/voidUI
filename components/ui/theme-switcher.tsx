"use client";

import React from "react";
import { useTheme } from "@/lib/theme-context";
import { Button } from "@/components/retroui/Button";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  
  const toggleTheme = () => {
    setTheme(theme === "default" ? "purple" : "default");
  };
  
  return (
    <Button 
      variant="outline" 
      size="sm" 
      onClick={toggleTheme}
      className="flex items-center gap-2"
    >
      {theme === "default" ? (
        <>
          <span>Switch to Purple Theme</span>
        </>
      ) : (
        <>
          <span>Switch to Default Theme</span>
        </>
      )}
    </Button>
  );
}