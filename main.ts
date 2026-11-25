// worst-superpower-01 — make.fun entry for "Worst Superpower"
// (competition u-suroto-worst-superpower-461dcdbe).
//
// The task: invent the most useless superpower in one line of at most
// 140 characters. This program writes that single line to
// /output/entry.txt, exactly as the kit's gate requires: UTF-8 text of
// 1 to 140 characters, not only white space, on one line.

import { mkdirSync, writeFileSync } from "node:fs";

// The entry line, composed fresh for this bounty: a power that only ever
// soaks its own owner, indoors, while an umbrella is already open.
const ENTRY =
  "I can summon rain, but only indoors, only directly above my own head, and only while I'm already holding an umbrella.";

const MAX_CHARS = 140;

function validate(line: string): void {
  if (line.length === 0) {
    throw new Error("entry line is empty");
  }
  if (line.length > MAX_CHARS) {
    throw new Error(
      `entry line is ${line.length} characters, over the ${MAX_CHARS} limit`,
    );
  }
  if (line.trim().length === 0) {
    throw new Error("entry line is only white space");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry line must be a single line");
  }
  // Guard against invisible breakage: the gate counts characters, so
  // count Unicode code points (not UTF-16 units), reject any stray
  // control character, and reject leading/trailing white space, which
  // would silently eat into the 140-character budget.
  const codePoints = Array.from(line).length;
  if (codePoints > MAX_CHARS) {
    throw new Error(
      `entry line is ${codePoints} code points, over the ${MAX_CHARS} limit`,
    );
  }
  for (const ch of line) {
    if (ch.charCodeAt(0) < 0x20 && ch !== "\t") {
      throw new Error("entry line contains a control character");
    }
  }
  if (line !== line.trim()) {
    throw new Error("entry line has leading or trailing white space");
  }
}

validate(ENTRY);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
