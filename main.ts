import { existsSync, mkdirSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_LINE =
  "I deleted the production database at 3 a.m. because the backup was named final_final_REALLY_FINAL and I believed it.";

function fail(message: string): never {
  throw new Error(`entry validation failed: ${message}`);
}

const trimmed = ENTRY_LINE.trim();
if (trimmed.length === 0) {
  fail("the entry line is empty or only whitespace");
}
if (trimmed.length > 180) {
  fail(`the entry line is ${trimmed.length} characters, over the 180 limit`);
}
if (/[\r\n]/.test(ENTRY_LINE)) {
  fail("the entry line must be a single line with no CR or LF");
}

const envDir = process.env.MAKEFUN_OUTPUT_DIR;
const outDir =
  envDir !== undefined && envDir.trim() !== ""
    ? envDir
    : join(process.cwd(), "output");

if (existsSync(outDir) && !statSync(outDir).isDirectory()) {
  fail(`MAKEFUN_OUTPUT_DIR points at a file, not a directory: ${outDir}`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY_LINE, "utf8");
console.log(`wrote entry.txt (${trimmed.length} characters) to ${outDir}`);
