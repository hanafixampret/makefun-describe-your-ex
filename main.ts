// Describe Your Ex in One Word — entry program.
// Writes exactly one word to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const WORD = "Refund";

// Gate: the entry must be exactly one word, 1-111 chars, nothing else.
if (!/^\S+$/.test(WORD) || WORD.length < 1 || WORD.length > 111) {
  console.error("entry must be a single word of 1-111 characters");
  process.exit(1);
}

const out = "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, WORD);
console.log(`wrote ${WORD.length} chars to ${out}`);
