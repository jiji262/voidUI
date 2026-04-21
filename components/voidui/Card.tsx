import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import { Text } from "./Text";

interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

// v2 — thinner border (1.5px), 4px radius, refined hover lift (translate -2px w/ sh-lg)
const Card = ({ className, ...props }: ICardProps) => {
  return (
    <div
      className={cn(
        "inline-block border-[1.5px] border-border rounded-[4px] shadow bg-card text-card-foreground",
        "transition-all duration-150",
        className,
      )}
      {...props}
    />
  );
};

const CardHeader = ({ className, ...props }: ICardProps) => (
  <div
    className={cn("flex flex-col gap-1 p-5 border-b-[1.5px] border-border-subtle", className)}
    {...props}
  />
);

const CardTitle = ({ className, ...props }: ICardProps) => (
  <Text as="h3" className={cn("font-mono text-base font-semibold tracking-tight", className)} {...props} />
);

const CardDescription = ({ className, ...props }: ICardProps) => (
  <p className={cn("text-sm text-muted-foreground", className)} {...props} />
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
