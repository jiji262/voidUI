import React from "react";
import { Text } from "@/components/retroui";

interface LoadingProps {
  message?: string;
}

export function Loading({ message = "Loading..." }: LoadingProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
      <Text as="p" className="text-muted-foreground">
        {message}
      </Text>
    </div>
  );
}