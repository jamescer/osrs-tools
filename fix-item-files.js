#!/usr/bin/env node
/**
 * Fixes Item data .ts files in source/runescape/model/Item/all/:
 *
 * 1. Converts malformed `id: 1, 2, 3,` lines into `id: [1, 2, 3],`
 *    (TS doesn't allow multiple comma-separated values for one key).
 * 2. Backfills any missing fields with the defaults listed in
 *    Item.fromJson's doc comment, so every file matches the
 *    minimum shape fromJson expects.
 *
 * Usage:
 *   node fix-item-files.js [directory] [--first-id-only]
 *
 *   directory          defaults to "source/runescape/model/Item/all"
 *   --first-id-only    instead of building an array, keep ONLY the
 *                       first id and drop the rest (use this if your
 *                       Item/ItemJson type only supports a single
 *                       numeric id and you don't want to change it)
 */

const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);
const firstIdOnly = args.includes("--first-id-only");
const DIR = args.find((a) => !a.startsWith("--")) || "source/runescape/model/Item/all";

// Defaults pulled from the fromJson doc comment
const DEFAULTS = {
  examine: '""',
  value: "0",
  highAlch: "0",
  lowAlch: "0",
  weight: "0",
  members: "false",
  tradeable: "false",
  equipable: "false",
  releaseDate: '""',
  destroy: '"Drop"',
  questItem: "false",
  stackable: "false",
  noted: "false",
  officialWikiUrl: '""',
  iconUrl: '""',
  attackStab: "0",
  attackSlash: "0",
  attackCrush: "0",
  attackMagic: "0",
  attackRanged: "0",
  defenceStab: "0",
  defenceSlash: "0",
  defenceCrush: "0",
  defenceMagic: "0",
  defenceRanged: "0",
  meleeStrength: "0",
  rangedStrength: "0",
  magicDamage: "0",
  prayer: "0",
};

// Matches `id:` followed by 2+ comma-separated numbers, e.g.
//   id: 27822, 27823, 27824,
const MALFORMED_ID_RE = /id:\s*((?:\d+\s*,\s*)+\d+)\s*,/;

function fixIdField(src) {
  return src.replace(MALFORMED_ID_RE, (_match, nums) => {
    const values = nums
      .split(",")
      .map((n) => n.trim())
      .filter(Boolean);

    if (firstIdOnly) {
      return `id: ${values[0]},`;
    }
    return `id: [${values.join(", ")}],`;
  });
}

function backfillDefaults(src, filePath) {
  const objMatch = src.match(/=\s*\{([\s\S]*?)\};/);
  if (!objMatch) {
    console.warn(`  ! could not locate object literal in ${filePath}, skipping backfill`);
    return src;
  }

  let body = objMatch[1];

  const existingKeys = new Set();
  const keyRe = /(^|\n)\s*(\w+)\s*:/g;
  let m;
  while ((m = keyRe.exec(body))) {
    existingKeys.add(m[2]);
  }

  const missing = Object.keys(DEFAULTS).filter((k) => !existingKeys.has(k));
  if (missing.length === 0) return src;

  let trimmed = body.replace(/\s+$/, "");
  if (!trimmed.endsWith(",")) trimmed += ",";

  const additions = missing.map((k) => `  ${k}: ${DEFAULTS[k]}`).join(",\n");
  const newBody = `${trimmed}\n${additions}\n`;

  return src.replace(objMatch[0], `= {${newBody}};`);
}

function fixFile(filePath) {
  const original = fs.readFileSync(filePath, "utf8");

  let fixed = fixIdField(original);
  fixed = backfillDefaults(fixed, filePath);

  if (fixed !== original) {
    fs.writeFileSync(filePath, fixed, "utf8");
    console.log(`fixed: ${filePath}`);
  }
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
    } else if (entry.name.endsWith(".ts")) {
      fixFile(full);
    }
  }
}

if (!fs.existsSync(DIR)) {
  console.error(`Directory not found: ${DIR}`);
  process.exit(1);
}

walk(DIR);
console.log("Done.");
