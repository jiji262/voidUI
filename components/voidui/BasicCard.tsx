import * as React from "react";
import { cn } from "./_utils";
import { Card } from "./Card";
import { Text } from "./Text";

// v3 — same surface, v3 token-driven copy
export const BasicCard = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <Card className={cn("w-[320px]", className)} {...props}>
    <Card.Header>
      <Card.Title>Release 3.0</Card.Title>
      <Card.Description>
        Refined neobrutalism. Warmer. Tighter. Calmer. 10 themes.
      </Card.Description>
    </Card.Header>
    <Card.Content>
      <Text as="small">Switch between 10 color themes with a single attribute.</Text>
    </Card.Content>
  </Card>
);
