"use client";

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/voidui';

interface EnhancedCodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  showLineNumbers?: boolean;
  className?: string;
}

export function EnhancedCodeBlock({ 
  code, 
  language = 'jsx', 
  title,
  showLineNumbers = false,
  className = '' 
}: EnhancedCodeBlockProps) {
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

  // Enhanced syntax highlighting for common languages
  const highlightCode = (code: string, lang: string) => {
    let highlighted = code;
    
    if (lang === 'jsx' || lang === 'tsx' || lang === 'javascript' || lang === 'typescript') {
      highlighted = highlighted
        // Keywords
        .replace(/\b(import|export|from|const|let|var|function|return|if|else|for|while|class|extends|interface|type|async|await|try|catch|finally|throw|new|this|super|static|public|private|protected|readonly)\b/g, 
          '<span class="text-blue-400 font-semibold">$1</span>')
        // Strings
        .replace(/("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)/g, '<span class="text-green-400">$1</span>')
        // Comments
        .replace(/(\/\/.*$|\/\*[\s\S]*?\*\/)/gm, '<span class="text-gray-500 italic">$1</span>')
        // JSX tags
        .replace(/(<\/?[A-Z][a-zA-Z0-9]*)/g, '<span class="text-red-400">$1</span>')
        // HTML/JSX attributes
        .replace(/\b(className|href|src|alt|id|key|onClick|onChange|onSubmit|style|type|placeholder|value|defaultValue|checked|disabled|required|autoFocus|tabIndex|role|aria-\w+|data-\w+)\b/g, '<span class="text-purple-400">$1</span>')
        // Numbers
        .replace(/\b(\d+\.?\d*)\b/g, '<span class="text-orange-400">$1</span>')
        // Brackets and operators
        .replace(/(\{|\}|\[|\]|\(|\)|=>|===|==|!==|!=|<=|>=|<|>|\+|\-|\*|\/|%|&&|\|\||!)/g, '<span class="text-yellow-400">$1</span>');
    }
    
    if (lang === 'css') {
      highlighted = highlighted
        // Selectors
        .replace(/([.#]?[a-zA-Z-]+)(\s*\{)/g, '<span class="text-yellow-400">$1</span>$2')
        // Properties
        .replace(/\b(color|background|background-color|margin|padding|border|width|height|display|position|font-size|font-weight|font-family|text-align|flex|grid|justify-content|align-items|border-radius|box-shadow|transition|transform|opacity|z-index|top|left|right|bottom)\b:/g, 
          '<span class="text-blue-400">$1</span>:')
        // Values
        .replace(/(#[0-9a-fA-F]{3,6}|rgb\([^)]+\)|rgba\([^)]+\)|hsl\([^)]+\)|hsla\([^)]+\))/g, '<span class="text-green-400">$1</span>')
        // Units
        .replace(/(\d+(?:px|em|rem|%|vh|vw|fr|deg|s|ms))/g, '<span class="text-orange-400">$1</span>');
    }
    
    if (lang === 'bash' || lang === 'shell') {
      highlighted = highlighted
        // Commands
        .replace(/\b(npm|yarn|pnpm|git|cd|ls|mkdir|rm|cp|mv|chmod|chown|grep|find|cat|echo|curl|wget)\b/g, '<span class="text-blue-400 font-semibold">$1</span>')
        // Subcommands
        .replace(/\b(install|add|remove|build|dev|start|test|init|clone|push|pull|commit|status|log|diff|branch|checkout|merge|rebase)\b/g, '<span class="text-green-400">$1</span>')
        // Flags
        .replace(/(--[a-zA-Z-]+|-[a-zA-Z])\b/g, '<span class="text-purple-400">$1</span>')
        // Paths and files
        .replace(/([./~][^\s]*)/g, '<span class="text-yellow-400">$1</span>');
    }
    
    if (lang === 'html') {
      highlighted = highlighted
        // HTML tags
        .replace(/(<\/?[a-zA-Z][a-zA-Z0-9]*)/g, '<span class="text-red-400">$1</span>')
        // Attributes
        .replace(/\b(class|id|src|href|alt|title|style|type|name|value|placeholder|required|disabled|checked|selected|multiple|readonly|autofocus|tabindex|role|aria-\w+|data-\w+)\b=/g, '<span class="text-purple-400">$1</span>=')
        // Attribute values
        .replace(/="([^"]*)"/g, '="<span class="text-green-400">$1</span>"')
        // Comments
        .replace(/(<!--[\s\S]*?-->)/g, '<span class="text-gray-500 italic">$1</span>');
    }
    
    return highlighted;
  };

  const lines = code.split('\n');
  const highlightedCode = highlightCode(code, language);
  const highlightedLines = highlightedCode.split('\n');

  return (
    <div className={`relative group bg-slate-900 rounded-lg overflow-hidden ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between bg-slate-800 px-4 py-2 border-b border-slate-700">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          {title && (
            <span className="text-slate-300 text-sm font-medium ml-2">{title}</span>
          )}
          {language && (
            <span className="text-slate-400 text-xs bg-slate-700 px-2 py-1 rounded">
              {language}
            </span>
          )}
        </div>
        
        <Button
          variant="outline"
          size="sm"
          onClick={copyToClipboard}
          className="opacity-0 group-hover:opacity-100 transition-opacity bg-slate-700 border-slate-600 hover:bg-slate-600 text-slate-300"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4 mr-1 text-green-400" />
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
      
      {/* Code Content */}
      <div className="overflow-x-auto">
        <pre className="p-4 text-sm font-mono text-slate-100">
          {showLineNumbers ? (
            <div className="flex">
              <div className="select-none text-slate-500 pr-4 border-r border-slate-700 mr-4">
                {lines.map((_, index) => (
                  <div key={index} className="text-right">
                    {index + 1}
                  </div>
                ))}
              </div>
              <div className="flex-1">
                {highlightedLines.map((line, index) => (
                  <div key={index} dangerouslySetInnerHTML={{ __html: line || ' ' }} />
                ))}
              </div>
            </div>
          ) : (
            <div dangerouslySetInnerHTML={{ __html: highlightedCode }} />
          )}
        </pre>
      </div>
    </div>
  );
}