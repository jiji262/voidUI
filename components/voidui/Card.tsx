import { cn } from "./_utils";
import { HTMLAttributes } from "react";
import { Text } from "./Text";

interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  interactive?: boolean;
}

// v3 — refined hover lift with theme-aware translate, optional interactive mode
const Card = ({ className, interactive, ...props }: ICardProps) => {
  return (
    <div
      className={cn(
        "inline-block border-[length:var(--bw,1.5px)] border-border rounded-[var(--r,4px)] shadow bg-card text-card-foreground",
        "transition-all duration-[180ms] ease-[cubic-bezier(0.22,0.61,0.36,1)]",
        interactive &&
          "cursor-pointer hover:-translate-y-0.5 hover:shadow-lg focus-visible:[box-shadow:var(--focus-ring)]",
        className,
      )}
      tabIndex={interactive ? 0 : undefined}
      {...props}
    />
  );
};

const CardHeader = ({ className, ...props }: ICardProps) => (
  <div
    className={cn(
      "flex flex-col gap-1 p-5 border-b-[length:var(--bw,1.5px)] border-border-subtle",
      className,
    )}
    {...props}
  />
);

const CardTitle = ({ className, ...props }: ICardProps) => (
  <Text
    as="h3"
    className={cn("font-mono text-base font-semibold tracking-tight", className)}
    {...props}
  />
);

const CardDescription = ({ className, ...props }: ICardProps) => (
  <p className={cn("text-sm text-muted-foreground leading-relaxed", className)} {...props} />
);

const CardContent = ({ className, ...props }: ICardProps) => (
  <div className={cn("p-5", className)} {...props} />
);

const CardFooter = ({ className, ...props }: ICardProps) => (
  <div className={cn("flex items-center p-5 pt-0 gap-2", className)} {...props} />
);

const CardComponent = Object.assign(Card, {
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Content: CardContent,
  Footer: CardFooter,
});

export { CardComponent as Card };
