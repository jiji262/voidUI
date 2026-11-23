import * as React from "react";
import { Card } from "./Card";
import { Button } from "./Button";
import { Badge } from "./Badge";

// v3 — improved visual hierarchy, line-height, label/title rhythm
export const ProductCard = () => (
  <Card className="w-[280px] overflow-hidden" interactive>
    <div
      className="h-40 bg-muted relative"
      style={{
        backgroundImage:
          "repeating-linear-gradient(45deg, transparent, transparent 8px, rgba(0,0,0,0.04) 8px, rgba(0,0,0,0.04) 16px)",
      }}
    >
      <div className="absolute top-3 left-3">
        <Badge variant="primary" dot>
          New
        </Badge>
      </div>
    </div>
    <Card.Content>
      <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground mb-1">
        Accessory
      </div>
      <Card.Title>Analog stopwatch</Card.Title>
      <div className="flex items-baseline gap-2 mt-3 mb-4">
        <span className="font-mono text-2xl font-semibold tracking-tight">$48</span>
        <span className="text-sm text-muted-foreground line-through">$64</span>
        <span className="ml-auto text-xs text-success font-mono uppercase tracking-[0.06em]">
          25% off
        </span>
      </div>
      <Button size="sm" fullWidth>
        Add to cart
      </Button>
    </Card.Content>
  </Card>
);
