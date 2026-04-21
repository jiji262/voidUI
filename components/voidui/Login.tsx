import * as React from "react";
import { Card } from "./Card";
import { Input } from "./Input";
import { Label } from "./Label";
import { Button } from "./Button";
import { Text } from "./Text";

// v2 — mono labels, tighter vertical rhythm
export const Login = () => (
  <Card className="w-[360px]">
    <Card.Header>
      <Card.Title>Sign in to voidUI</Card.Title>
      <Card.Description>Welcome back. Enter your details to continue.</Card.Description>
    </Card.Header>
    <Card.Content className="flex flex-col gap-4">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="you@void.ui" />
      </div>
      <div>
        <Label htmlFor="pw">Password</Label>
        <Input id="pw" type="password" placeholder="••••••••" />
      </div>
      <Button className="w-full justify-center">Sign in</Button>
      <Text as="small" className="text-center">
        No account? <a className="underline underline-offset-2 font-medium text-foreground" href="#">Create one</a>
      </Text>
    </Card.Content>
  </Card>
);
