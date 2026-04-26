"use client";

import { Button, Tooltip } from "@/components/voidui";

export default function TooltipStyleDefault() {
  return (
    <Tooltip.Provider>
      <Tooltip>
        <Tooltip.Trigger asChild>
          <Button variant="outline">Hover</Button>
        </Tooltip.Trigger>
        <Tooltip.Content>Add to Library</Tooltip.Content>
      </Tooltip>
    </Tooltip.Provider>
  );
}
