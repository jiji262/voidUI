"use client";
import * as React from "react";
import { cn } from "./_utils";
import { Copy, Check } from "lucide-react";

// v3 — clean mono terminal chip with optional copy affordance
export interface ICommandDisplayProps extends React.HTMLAttributes<HTMLDivElement> {
  command: string;
  prompt?: string;
  showCursor?: boolean;
  copyable?: boolean;
}

export const CommandDisplay = React.forwardRef<HTMLDivElement, ICommandDisplayProps>(
  (
    { command, prompt = "$", showCursor = true, copyable = false, className, ...props },
    ref,
  ) => {
    const [copied, setCopied] = React.useState(false);
    const onCopy = React.useCallback(() => {
      try {
        void navigator.clipboard.writeText(command);
        setCopied(true);
        setTimeout(() => setCopied(false), 1400);
      } catch {
        /* ignore */
      }
    }, [command]);
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center gap-2 font-mono text-sm",
          "px-3.5 py-2 border-[length:var(--bw,1.5px)] border-border rounded-[var(--r,4px)] bg-card text-foreground shadow-xs",
          className,
        )}
        {...props}
      >
        <span className="text-muted-foreground select-none">{prompt}</span>
        <span className="select-all">{command}</span>
        {showCursor && !copyable && (
          <span className="ml-0.5 inline-block w-[8px] h-[14px] bg-foreground animate-[vui-pulse_1.2s_ease-in-out_infinite]" />
        )}
        {copyable && (
          <button
            type="button"
            onClick={onCopy}
            aria-label={copied ? "Copied" : "Copy command"}
            className="ml-2 inline-flex h-6 w-6 items-center justify-center rounded-[var(--r-sm,2px)] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          </button>
        )}
      </div>
    );
  },
);
CommandDisplay.displayName = "CommandDisplay";
