"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/retroui";

interface CodeBlockWithCopyProps {
  code: string;
  language?: string;
  title?: string;
  showLineNumbers?: boolean;
}

export function CodeBlockWithCopy({
  code,
  language = "tsx",
  title,
  showLineNumbers = false,
}: CodeBlockWithCopyProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  const lines = code.split("\n");

  return (
    <div className="relative group">
      {title && (
        <div className="bg-muted px-4 py-2 border-b border-border rounded-t-md">
          <span className="text-sm font-medium">{title}</span>
        </div>
      )}
      <div className={`bg-muted/50 border border-border ${title ? "rounded-b-md" : "rounded-md"} overflow-hidden`}>
        <div className="absolute top-2 right-2 z-10">
          <Button
            onClick={handleCopy}
            variant="outline"
            size="sm"
            className="opacity-0 group-hover:opacity-100 transition-opacity"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 mr-1" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="h-4 w-4 mr-1" />
                Copy
              </>
            )}
          </Button>
        </div>
        <pre className="overflow-x-auto p-4">
          <code className={`language-${language} text-sm`}>
            {showLineNumbers
              ? lines.map((line, index) => (
                  <div key={index} className="flex">
                    <span className="text-muted-foreground mr-4 select-none w-8 text-right">
                      {index + 1}
                    </span>
                    <span>{line}</span>
                  </div>
                ))
              : code}
          </code>
        </pre>
      </div>
    </div>
  );
}