import { describe, expect, it } from "vitest";
import { cn } from "@/components/voidui/_utils";

describe("cn()", () => {
  it("joins strings", () => {
    expect(cn("a", "b")).toBe("a b");
  });

  it("drops falsy", () => {
    expect(cn("a", false, null, undefined, "", "b")).toBe("a b");
  });

  it("merges conflicting tailwind classes (last wins)", () => {
    expect(cn("p-2", "p-4")).toBe("p-4");
    expect(cn("text-sm text-red-500", "text-blue-500")).toBe("text-sm text-blue-500");
  });

  it("handles arrays + objects (clsx compat)", () => {
    expect(cn(["a", { b: true, c: false }])).toBe("a b");
  });
});
