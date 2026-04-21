import * as React from "react";
import { cn } from "@/lib/utils";
import { Card } from "./Card";
import { Text } from "./Text";

// v2 — mono title, cleaner layout, refined shadow
export const BasicCard = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <Card className={cn("w-[320px]", className)} {...props}>
    <Card.Header>
      <Card.Title>Release 2.0</Card.Title>
      <Card.Description>Refined neobrutalism. Warmer, tighter, quieter.</Card.Description>
    </Card.Header>
    <Card.Content>
      <Text as="small">Switch between 5 color themes with a single attribute.</Text>
    </Card.Content>
  </Card>
);
