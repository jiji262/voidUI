import * as React from "react";
import { Card } from "./Card";
import { Button } from "./Button";
import { Badge } from "./Badge";

// v2 — striped SVG placeholder instead of raster image; mono price, tight grid
export const ProductCard = () => (
  <Card className="w-[280px] overflow-hidden">
    <div className="h-40 bg-muted relative" style={{
      backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 8px, rgba(0,0,0,0.04) 8px, rgba(0,0,0,0.04) 16px)',
    }}>
      <div className="absolute top-3 left-3"><Badge variant="primary">New</Badge></div>
    </div>
    <Card.Content>
      <div className="font-mono text-xs uppercase tracking-[0.08em] text-muted-foreground mb-1">Accessory</div>
      <Card.Title>Analog stopwatch</Card.Title>
      <div className="flex items-baseline gap-2 mt-3 mb-4">
        <span className="font-mono text-2xl font-semibold tracking-tight">$48</span>
        <span className="text-sm text-muted-foreground line-through">$64</span>
      </div>
      <Button size="sm" className="w-full justify-center">Add to cart</Button>
    </Card.Content>
  </Card>
);
