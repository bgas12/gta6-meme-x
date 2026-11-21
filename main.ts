// Entry for make.fun bounty "Post a GTA 6 meme on X" (gta6-meme-x-01).
//
// The entry is the X post itself: the meme (meme.png) is posted on X from a
// public account, and POST.json at this repository's root names the post's
// address. All this program has to do is copy POST.json to /output/POST.json,
// where the gate reads it. No network, no wall clock, no files outside the
// repository, so two runs write the same bytes.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const POST_FILE = 'POST.json';

const source = join(BOT_DIR, POST_FILE);

// Refuse a malformed POST.json instead of copying garbage to /output: the
// gate only accepts a JSON object naming an X post's address.
let parsed: unknown;
try {
  parsed = JSON.parse(readFileSync(source, 'utf8'));
} catch {
  console.error(`${POST_FILE} is not valid JSON`);
  process.exit(1);
}
if (
  typeof parsed !== 'object' ||
  parsed === null ||
  typeof (parsed as { url?: unknown }).url !== 'string' ||
  !(parsed as { url: string }).url.startsWith('https://x.com/') &&
  !(parsed as { url: string }).url.startsWith('https://twitter.com/')
) {
  console.error(`${POST_FILE} must be a JSON object with a "url" string for an X post`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(source, join(OUTPUT_DIR, POST_FILE));
