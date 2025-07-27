"use client";

import React, { useState } from "react";
import { Button } from "@/components/retroui";
import { CodeIcon, CopyIcon, CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";

interface CodeDisplayProps {
  title: string;
  code: string;
  language?: string;
}

export const CodeDisplay: React.FC<CodeDisplayProps> = ({ 
  title, 
  code, 
  language = "tsx" 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">{title}</h2>
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-black text-white hover:bg-gray-800"
        >
          <CodeIcon className="h-4 w-4 mr-2" />
          {isExpanded ? "Hide Code" : "Get Code"}
          {isExpanded ? (
            <ChevronUpIcon className="h-4 w-4 ml-2" />
          ) : (
            <ChevronDownIcon className="h-4 w-4 ml-2" />
          )}
        </Button>
      </div>

      {isExpanded && (
        <div className="border-2 border-black rounded-lg overflow-hidden">
          <div className="bg-gray-100 px-4 py-2 border-b-2 border-black flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">
              {language.toUpperCase()} Code
            </span>
            <Button
              onClick={handleCopy}
              size="sm"
              variant="outline"
              className="border-black"
            >
              {isCopied ? (
                <>
                  <CheckIcon className="h-4 w-4 mr-1" />
                  Copied!
                </>
              ) : (
                <>
                  <CopyIcon className="h-4 w-4 mr-1" />
                  Copy
                </>
              )}
            </Button>
          </div>
          <div className="bg-gray-900 text-gray-100 p-4 overflow-x-auto">
            <pre className="text-sm">
              <code>{code}</code>
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};
