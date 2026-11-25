// Robot Romance — one pickup line aimed at a machine.
// Must dodge the worn moves (batteries, charging, rebooting) and land cold.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

/**
 * The machine premise is the terms of service: nobody reads them, and
 * reading every page is the modern grand gesture. The turn is that the
 * offer expires — the document gets amended, so the proposal has a clock.
 */
const LINE: string =
  "I read all forty-seven pages of your terms of service, including clause nine. Marry me before the next update.";

function main(): void {
  const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
  process.stdout.write(`wrote ${LINE.length} characters / ${Buffer.byteLength(LINE, "utf8")} bytes\n`);
}

main();
