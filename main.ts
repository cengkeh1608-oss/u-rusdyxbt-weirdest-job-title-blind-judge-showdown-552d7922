// Weirdest Job Title entry: writes one job title (<=60 chars) to /output/entry.txt.
// Winner D9 (24/25 of 18 drafts): a full corporate title whose boss is an office
// plant — the hierarchy joke lands on the last two words, and the "Junior
// Executive Assistant" framing makes it read like a real job posting, which is
// what beats generic oddities in pairwise judging.
import { mkdirSync, writeFileSync } from "node:fs";

const TITLE = "Junior Executive Assistant to the Office Plant";
const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, TITLE, "utf8");
