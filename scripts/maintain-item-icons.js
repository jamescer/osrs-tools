#!/usr/bin/env node

/**
 * OSRS Item Icons Maintenance Tool (Node.js)
 *
 * Maintains item icon files based on allitems.txt
 * Automatically parses item IDs from the last token in each line
 *
 * Usage:
 *   node maintain-item-icons.js check
 *   node maintain-item-icons.js create-placeholders
 *   node maintain-item-icons.js report [outputFile]
 *   node maintain-item-icons.js sync
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// Configuration
// If script is in scripts/ directory, go up one level
const scriptDir = __dirname;
const projectRoot = scriptDir.endsWith("scripts") ? path.dirname(scriptDir) : scriptDir;
const allItemsFile = path.join(projectRoot, "allitems.txt");
const itemsDir = path.join(projectRoot, "public", "assets", "items");
const action = process.argv[2] || "check";
const outputReport = process.argv[3] || "missing_items.csv";

const PLACEHOLDER_PNG = Buffer.from([
  0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 0x00, 0x00, 0x00, 0x0d, 0x49, 0x48, 0x44, 0x52, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01, 0x08, 0x06, 0x00, 0x00, 0x00, 0x1f, 0x15, 0xc4, 0x89,
  0x00, 0x00, 0x00, 0x0a, 0x49, 0x44, 0x41, 0x54, 0x78, 0x9c, 0x63, 0x00, 0x01, 0x00, 0x00, 0x05, 0x00, 0x01, 0x0d, 0x0a, 0x2d, 0xb4, 0x00, 0x00, 0x00, 0x00, 0x49, 0x45, 0x4e, 0x44, 0xae, 0x42, 0x60,
  0x82,
]);

console.log("\x1b[36m%s\x1b[0m", "OSRS Item Icons Maintenance Tool");
console.log("\x1b[36m%s\x1b[0m", "=================================");
console.log(`Project Root: ${projectRoot}`);
console.log(`Items Directory: ${itemsDir}\n`);

// Verify files exist
if (!fs.existsSync(allItemsFile)) {
  console.error(`\x1b[31mError: allitems.txt not found at ${allItemsFile}\x1b[0m`);
  process.exit(1);
}

if (!fs.existsSync(itemsDir)) {
  console.log(`\x1b[33mCreating items directory...\x1b[0m`);
  fs.mkdirSync(itemsDir, { recursive: true });
}

/**
 * Parse allitems.txt
 * Format: Item Name [whitespace] Item_ID
 * The last token on each line is the item ID (numeric)
 */
function parseAllItems() {
  const content = fs.readFileSync(allItemsFile, "utf-8");
  const lines = content.split("\n");

  const allIds = [];
  const itemNames = {};

  lines.forEach((line) => {
    line = line.trim();
    if (!line) return;

    // Split by whitespace and get last token
    const tokens = line.split(/\s+/);
    const lastToken = tokens[tokens.length - 1];

    // Check if last token is numeric
    if (/^\d+$/.test(lastToken)) {
      const itemId = parseInt(lastToken, 10);
      const itemName = tokens.slice(0, -1).join(" ");

      allIds.push(itemId);
      if (!itemNames[itemId]) {
        itemNames[itemId] = itemName || "Unknown";
      }
    }
  });

  return {
    uniqueIds: [...new Set(allIds)].sort((a, b) => a - b),
    itemNames,
  };
}

/**
 * Get existing icon files
 */
function getExistingFiles() {
  if (!fs.existsSync(itemsDir)) {
    return [];
  }

  return fs
    .readdirSync(itemsDir)
    .filter((f) => f.endsWith(".png") && /^\d+\.png$/.test(f))
    .map((f) => parseInt(f.replace(".png", ""), 10));
}

/**
 * Find missing items
 */
function findMissingItems(uniqueIds, existingFiles) {
  const existingSet = new Set(existingFiles);
  return uniqueIds.filter((id) => !existingSet.has(id));
}

/**
 * Create placeholder PNG files
 */
function createPlaceholders(missingIds) {
  console.log(`\x1b[33mCreating ${missingIds.length} placeholder PNG files...\x1b[0m\n`);

  let created = 0;
  missingIds.forEach((id, index) => {
    if ((index + 1) % 1000 === 0) {
      console.log(`Progress: ${index + 1} / ${missingIds.length}`);
    }

    const filePath = path.join(itemsDir, `${id}.png`);
    fs.writeFileSync(filePath, PLACEHOLDER_PNG);
    created++;
  });

  console.log(`\n\x1b[32mCreated ${created} placeholder PNG files\x1b[0m`);
  console.log(`Location: ${itemsDir}`);
}

/**
 * Generate CSV report
 */
function generateReport(uniqueIds, itemNames, existingFiles, outputFile) {
  console.log(`\x1b[33mGenerating report to: ${outputFile}\x1b[0m\n`);

  const existingSet = new Set(existingFiles);
  const lines = ["Item_ID,Item_Name,Status"];

  uniqueIds.forEach((id) => {
    const status = existingSet.has(id) ? "FOUND" : "MISSING";
    const name = itemNames[id] || "Unknown";
    // Escape quotes in name
    const escapedName = name.replace(/"/g, '""');
    lines.push(`${id},"${escapedName}",${status}`);
  });

  fs.writeFileSync(outputFile, lines.join("\n"), "utf-8");

  console.log(`\x1b[32mReport created successfully!\x1b[0m`);
  console.log(`Total items: ${uniqueIds.length}`);
  console.log(`Found: ${existingFiles.length}`);
  console.log(`Missing: ${uniqueIds.length - existingFiles.length}`);
}

/**
 * Display check report
 */
function checkStatus(uniqueIds, itemNames, missingIds, existingFiles) {
  console.log(`\x1b[33mExtracting item IDs from allitems.txt...\x1b[0m`);
  console.log(`Found ${uniqueIds.length} unique item IDs\x1b[0m`);
  console.log(`Found ${existingFiles.length} existing icon files\x1b[0m`);
  console.log(`Found ${missingIds.length} missing icon files\x1b[0m\n`);

  console.log("\x1b[33mMissing Item IDs (first 20):\x1b[0m");
  missingIds.slice(0, 20).forEach((id) => {
    const name = itemNames[id] || "Unknown";
    console.log(`  ID: ${id} - ${name}`);
  });

  if (missingIds.length > 20) {
    console.log(`  ... and ${missingIds.length - 20} more\n`);
  }

  console.log("\x1b[36mSummary:\x1b[0m");
  console.log(`  Total Items: ${uniqueIds.length}`);
  console.log(`  Existing Icons: ${existingFiles.length}`);
  console.log(`  Missing Icons: ${missingIds.length}`);
  const coverage = ((existingFiles.length / uniqueIds.length) * 100).toFixed(2);
  console.log(`  Coverage: ${coverage}%`);
}

// Main execution
try {
  const { uniqueIds, itemNames } = parseAllItems();
  const existingFiles = getExistingFiles();
  const missingIds = findMissingItems(uniqueIds, existingFiles);

  switch (action) {
    case "check":
      checkStatus(uniqueIds, itemNames, missingIds, existingFiles);
      break;

    case "create-placeholders":
      if (missingIds.length === 0) {
        console.log("\x1b[32mNo missing items to create placeholders for!\x1b[0m");
      } else {
        createPlaceholders(missingIds);
      }
      break;

    case "report":
      generateReport(uniqueIds, itemNames, existingFiles, outputReport);
      break;

    case "sync":
      console.log("\x1b[33mSync functionality requires external icon source configuration\x1b[0m");
      console.log("TODO: Implement sync with OSRS Wiki or external icon repository\n");
      console.log('\x1b[90mFor now, use "create-placeholders" to create placeholder files\x1b[0m');
      console.log("Then replace them manually or with an automated download script");
      break;

    default:
      console.error(`\x1b[31mUnknown action: ${action}\x1b[0m`);
      console.log("\nUsage:");
      console.log("  node maintain-item-icons.js check");
      console.log("  node maintain-item-icons.js create-placeholders");
      console.log("  node maintain-item-icons.js report [outputFile]");
      console.log("  node maintain-item-icons.js sync");
      process.exit(1);
  }

  console.log("\n\x1b[32mDone!\x1b[0m");
} catch (error) {
  console.error(`\x1b[31mError: ${error.message}\x1b[0m`);
  process.exit(1);
}
