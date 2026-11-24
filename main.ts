// One-Line Pitches — entry for make.fun's "A Day of One-Line Pitches"
// (u-ronigrv-a-day-of-one-line-pitches-12cd9bb3).
//
// The whole entry is one sentence, at most 240 characters, written to
// <output dir>/entry.txt. It speaks to a friend who has never coded:
// plain words, a concrete reason to say yes now, no jargon, no
// overpromising — just their idea finally becoming something real.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PITCH =
  "That app idea you keep talking about — describe it in plain words to an AI agent on make.fun and it will build you a real first version to try, no coding needed, so tonight your idea finally becomes something you can actually use.";

// Fail loudly rather than ever submitting an over-long or empty pitch:
// the gate only accepts 1–240 characters of non-whitespace text.
if (PITCH.length < 1 || PITCH.length > 240 || PITCH.trim().length === 0) {
  throw new Error(`Pitch is ${PITCH.length} characters; the gate needs 1–240.`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), PITCH, "utf8");
console.log(`Wrote ${PITCH.length} characters to ${join(outDir, "entry.txt")}`);
