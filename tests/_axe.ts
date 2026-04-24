/**
 * Thin axe-core wrapper: run axe on a rendered container and return a
 * human-readable failure message if any violations exist.
 *
 * Used instead of `vitest-axe` because that package predates vitest 4
 * and its matcher registration API doesn't round-trip on v4.
 */
import axe, { type AxeResults, type RunOptions, type Result } from "axe-core";

export async function expectNoAxeViolations(
  container: Element,
  options?: RunOptions,
): Promise<void> {
  // axe-core's overloaded run() signature narrows to `void` when TS picks the
  // callback overload; cast to the Promise form explicitly.
  const results = (await (axe.run as (ctx: Element, opts?: RunOptions) => Promise<AxeResults>)(
    container,
    options,
  )) as AxeResults;
  if (results.violations.length === 0) return;

  const summary = results.violations
    .map((v: Result) => {
      const nodes = v.nodes
        .map((n) => `      ${n.html}\n      └─ ${n.failureSummary?.replace(/\n/g, "\n         ")}`)
        .join("\n");
      return `  ${v.id} — ${v.help} (impact: ${v.impact ?? "unknown"})\n${nodes}`;
    })
    .join("\n\n");

  throw new Error(
    `axe found ${results.violations.length} a11y violation(s):\n\n${summary}\n`,
  );
}
