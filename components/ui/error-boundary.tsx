import React, { Component, ErrorInfo, ReactNode } from "react";
import { Card, Text, Button } from "@/components/retroui";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <Card className="w-full bg-background shadow-none border border-red-500">
          <Card.Header>
            <Card.Title>Something went wrong</Card.Title>
            <Card.Description>An error occurred while rendering this component</Card.Description>
          </Card.Header>
          <Card.Content>
            <div className="flex flex-col items-center justify-center py-8">
              <Text as="p" className="mb-4 text-muted-foreground">
                We&#39;re sorry, but an error occurred while displaying this component.
              </Text>
              <Button 
                variant="outline" 
                onClick={() => this.setState({ hasError: false })}
              >
                Try Again
              </Button>
            </div>
          </Card.Content>
        </Card>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;