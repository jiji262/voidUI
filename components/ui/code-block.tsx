"use client";

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

export function CodeBlock({ code, language = 'jsx', className = '' }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  // Simple syntax highlighting for bash commands
  const formatBashCommand = (cmd: string) => {
    if (language === 'bash' && cmd.startsWith('npx')) {
      // Split the command into parts
      const parts = cmd.split(' ');
      return (
        <span>
          <span className="text-blue-300">{parts[0]}</span> {/* npx */}
          {parts.slice(1).map((part, index) => (
            <span key={index}>
              {' '}
              {part.startsWith('shadcn') ? (
                <span className="text-yellow-300">{part}</span>
              ) : part.startsWith('add') ? (
                <span className="text-green-300">{part}</span>
              ) : (
                <span className="text-purple-300">{part}</span>
              )}
            </span>
          ))}
        </span>
      );
    }
    // For non-bash or non-npx commands, use white text for visibility
    return <span className="text-white">{cmd}</span>;
  };

  return (
    <div className={`w-full max-w-90 shadow shadow-primary ${className}`}>
      <div className="relative group flex items-center bg-black/90 pl-4 py-2 font-mono text-xs">
        <div className="flex-1 whitespace-nowrap overflow-hidden">
          <div className="overflow-hidden text-ellipsis">
            {language === 'bash' ? formatBashCommand(code) : <span className="text-white">{code}</span>}
          </div>
        </div>
        <button
          onClick={copyToClipboard}
          className="mr-2 p-1 shrink-0 text-gray-400 hover:text-white transition-colors"
          aria-label={copied ? "Copied" : "Copy command"}
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>
      </div>
    </div>
  );
}