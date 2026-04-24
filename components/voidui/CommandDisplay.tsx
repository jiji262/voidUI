import * as React from "react";
import { cn } from "./_utils";

// v2 — clean mono command chip: $ prompt + typed command + optional cursor
export interface ICommandDisplayProps extends React.HTMLAttributes<HTMLDivElement> {
  command: string;
  prompt?: string;
  showCursor?: boolean;
}

export const CommandDisplay = React.forwardRef<HTMLDivElement, ICommandDisplayProps>(
  ({ command, prompt = "$", showCursor = true, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center gap-2 font-mono text-sm",
        "px-3.5 py-2 border-[1.5px] border-border rounded-[4px] bg-card text-foreground",
        "shadow-xs",
        className,
      )}
      {...props}
    >
      <span className="text-muted-foreground select-none">{prompt}</span>
      <span>{command}</span>
      {showCursor && (
        <span className="ml-0.5 inline-block w-[8px] h-[14px] bg-foreground animate-pulse" />
      )}
    </div>
  ),
);
CommandDisplay.displayName = "CommandDisplay";
