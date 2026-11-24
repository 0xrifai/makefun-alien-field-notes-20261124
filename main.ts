import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Alien Field Notes: The Two Day Earth Review
// A one-line review of planet Earth, left by an alien tourist.
// Chosen line (111 chars): the alien-as-unpaid-IT-support angle —
// original, a single clean joke, and a real tourist verdict at the end.
const ENTRY =
  "Every local asked me to fix their Wi-Fi, as if I built their internet. Lovely planet, terrible IT support. 3/5.";

const MAX_CHARS = 200;

function main(): void {
  // Gate validation: 1-200 chars, single line, non-blank.
  if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} chars, got ${ENTRY.length}`);
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
    throw new Error("entry must be a single line");
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  // No trailing newline: the gate counts the file's characters.
  writeFileSync(outPath, ENTRY, "utf8");

  // Read-back self-check: the file must contain exactly the entry bytes.
  const written = readFileSync(outPath, "utf8");
  if (written !== ENTRY) {
    throw new Error("read-back mismatch: file contents differ from entry");
  }
  if (written.endsWith("\n")) {
    throw new Error("file must not end with a trailing newline");
  }
  console.log(`wrote ${outPath} (${ENTRY.length} chars)`);
}

main();
