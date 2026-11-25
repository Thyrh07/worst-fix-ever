// Worst Fix Ever: Funniest Commit Message — make.fun entry.
// Writes a single commit message (at most 100 characters) for a bug fix
// that made everything worse, to /output/entry.txt.
// The gate: sealed scorer requires UTF-8 text of 1 to 100 characters,
// not only whitespace — enforce it here so a bad line can never ship.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "fix: search fixed; it now finds nothing, instantly";

if (ENTRY.length < 1 || ENTRY.length > 100 || !ENTRY.trim()) {
  throw new Error(`entry fails the gate: ${ENTRY.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
