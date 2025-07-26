"use client";

import React, { useState } from 'react';
import { Copy, Check, Code, Eye } from 'lucide-react';
import { Button } from '@/components/retroui';
import { EnhancedCodeBlock } from './enhanced-code-block';
import { useToast } from './toast';

interface BlockPreviewProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  code: string;
  language?: string;
  className?: string;
}

export function BlockPreview({ 
  title, 
  description, 
  children, 
  code, 
  language = 'jsx',
  className = '' 
}: BlockPreviewProps) {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);
  const { addToast } = useToast();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      addToast({
        type: 'success',
        title: 'Code copied!',
        description: 'The code has been copied to your clipboard.',
        duration: 2000
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      addToast({
        type: 'error',
        title: 'Copy failed',
        description: 'Failed to copy code to clipboard.',
        duration: 3000
      });
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-lg font-semibold">{title}</h4>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowCode(!showCode)}
          >
            {showCode ? (
              <>
                <Eye className="h-4 w-4 mr-1" />
                Preview
              </>
            ) : (
              <>
                <Code className="h-4 w-4 mr-1" />
                Code
              </>
            )}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={copyToClipboard}
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 mr-1 text-green-500" />
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
      </div>

      {/* Content */}
      {showCode ? (
        <EnhancedCodeBlock
          code={code}
          language={language}
          title={title}
          showLineNumbers={true}
        />
      ) : (
        <div className="border-2 border-dashed border-muted rounded-lg p-6 bg-muted/10">
          {children}
        </div>
      )}
    </div>
  );
}