#!/usr/bin/env node

/**
 * OSRS Item Icons Downloader (Node.js)
 *
 * Downloads item icons from external sources
 * Falls back to placeholders for unavailable items
 *
 * Usage:
 *   node download-item-icons.js                    # Download all missing
 *   node download-item-icons.js --ids 1017,1063    # Download specific items
 *   node download-item-icons.js --force             # Overwrite existing files
 *   node download-item-icons.js --retries 5         # Set max retries
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// Configuration
// If script is in scripts/ directory, go up one level
const scriptDir = __dirname;
const projectRoot = scriptDir.endsWith('scripts')
  ? path.dirname(scriptDir)
  : scriptDir;
const allItemsFile = path.join(projectRoot, 'allitems.txt');
const itemsDir = path.join(projectRoot, 'public', 'assets', 'items');

// Parse arguments
const args = process.argv.slice(2);
let specificIds = null;
let forceOverwrite = false;
let maxRetries = 3;

args.forEach((arg, i) => {
  if (arg === '--ids' && args[i + 1]) {
    specificIds = args[i + 1].split(',').map(id => parseInt(id.trim(), 10));
  } else if (arg === '--force') {
    forceOverwrite = true;
  } else if (arg === '--retries' && args[i + 1]) {
    maxRetries = parseInt(args[i + 1], 10);
  }
});

const PLACEHOLDER_PNG = Buffer.from([
  0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a,
  0x00, 0x00, 0x00, 0x0d, 0x49, 0x48, 0x44, 0x52,
  0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01,
  0x08, 0x06, 0x00, 0x00, 0x00, 0x1f, 0x15, 0xc4,
  0x89, 0x00, 0x00, 0x00, 0x0a, 0x49, 0x44, 0x41,
  0x54, 0x78, 0x9c, 0x63, 0x00, 0x01, 0x00, 0x00,
  0x05, 0x00, 0x01, 0x0d, 0x0a, 0x2d, 0xb4, 0x00,
  0x00, 0x00, 0x00, 0x49, 0x45, 0x4e, 0x44, 0xae,
  0x42, 0x60, 0x82
]);

// Icon sources (in order of preference)
const ICON_SOURCES = [
  {
    name: 'Lootscape CDN',
    urlTemplate: (id) => `https://lootscape-cdn.b-cdn.net/item-icons/${id}.png`
  },
  {
    name: 'RuneLite Wiki',
    urlTemplate: (id) => `https://raw.githubusercontent.com/runelite/runelite.net/master/public/img/items/${id}.png`
  }
];

console.log('\x1b[36m%s\x1b[0m', 'OSRS Item Icons Downloader');
console.log('\x1b[36m%s\x1b[0m', '==========================');
console.log(`Project Root: ${projectRoot}`);
console.log(`Items Directory: ${itemsDir}\n`);

/**
 * Parse allitems.txt with correct format handling
 */
function parseAllItems() {
  const content = fs.readFileSync(allItemsFile, 'utf-8');
  const lines = content.split('\n');

  const allIds = [];

  lines.forEach(line => {
    line = line.trim();
    if (!line) return;

    // Split by whitespace and get last token
    const tokens = line.split(/\s+/);
    const lastToken = tokens[tokens.length - 1];

    // Check if last token is numeric
    if (/^\d+$/.test(lastToken)) {
      const itemId = parseInt(lastToken, 10);
      allIds.push(itemId);
    }
  });

  return [...new Set(allIds)].sort((a, b) => a - b);
}

/**
 * Get existing icon files
 */
function getExistingFiles() {
  if (!fs.existsSync(itemsDir)) {
    return [];
  }

  return fs.readdirSync(itemsDir)
    .filter(f => f.endsWith('.png') && /^\d+\.png$/.test(f))
    .map(f => parseInt(f.replace('.png', ''), 10));
}

/**
 * Download file with retries
 */
function downloadFile(url, filePath, retries = 3) {
  return new Promise((resolve) => {
    let attempt = 0;

    const tryDownload = () => {
      attempt++;
      const protocol = url.startsWith('https') ? https : http;

      protocol.get(url, { timeout: 10000 }, (res) => {
        // Handle redirects
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          downloadFile(res.headers.location, filePath, retries - attempt)
            .then(resolve);
          return;
        }

        if (res.statusCode === 200) {
          const chunks = [];
          res.on('data', chunk => chunks.push(chunk));
          res.on('end', () => {
            try {
              fs.writeFileSync(filePath, Buffer.concat(chunks));
              resolve(true);
            } catch (e) {
              resolve(false);
            }
          });
        } else {
          resolve(false);
        }
      }).on('error', () => {
        if (attempt < retries) {
          setTimeout(tryDownload, 500);
        } else {
          resolve(false);
        }
      });
    };

    tryDownload();
  });
}

/**
 * Create placeholder PNG
 */
function createPlaceholder(filePath) {
  fs.writeFileSync(filePath, PLACEHOLDER_PNG);
}

/**
 * Main download routine
 */
async function main() {
  try {
    // Determine items to download
    let itemIds;

    if (specificIds) {
      itemIds = specificIds;
      console.log(`Downloading ${itemIds.length} specified items\n`);
    } else {
      console.log('\x1b[33mDetermining missing items...\x1b[0m');
      const allIds = parseAllItems();
      const existingFiles = getExistingFiles();
      const existingSet = new Set(existingFiles);
      itemIds = allIds.filter(id => !existingSet.has(id));

      console.log(`Found ${itemIds.length} items to download\n`);

      if (itemIds.length === 0) {
        console.log('\x1b[32mAll items already have icons!\x1b[0m');
        return;
      }
    }

    console.log(`\x1b[33mAttempting to download ${itemIds.length} item icons...\x1b[0m\n`);

    let successCount = 0;
    let failureCount = 0;
    let skipped = 0;

    // Ensure directory exists
    if (!fs.existsSync(itemsDir)) {
      fs.mkdirSync(itemsDir, { recursive: true });
    }

    // Download each item
    for (let i = 0; i < itemIds.length; i++) {
      const itemId = itemIds[i];

      if ((i + 1) % 100 === 0) {
        console.log(`Progress: ${i + 1} / ${itemIds.length}`);
      }

      const outFile = path.join(itemsDir, `${itemId}.png`);

      // Skip if exists and not forcing overwrite
      if (fs.existsSync(outFile) && !forceOverwrite) {
        skipped++;
        continue;
      }

      // Try each source
      let downloaded = false;

      for (const source of ICON_SOURCES) {
        const url = source.urlTemplate(itemId);

        if (await downloadFile(url, outFile, maxRetries)) {
          successCount++;
          downloaded = true;
          break;
        }
      }

      // If download failed, create placeholder
      if (!downloaded) {
        createPlaceholder(outFile);
        failureCount++;
      }
    }

    console.log('\n\x1b[36mDownload Summary:\x1b[0m');
    console.log(`  Successfully downloaded: ${successCount}`);
    console.log(`  Failed (created placeholders): ${failureCount}`);
    console.log(`  Skipped (already exist): ${skipped}\n`);
    console.log(`All files created in: ${itemsDir}`);
    console.log('\x1b[32mDone!\x1b[0m');

  } catch (error) {
    console.error(`\x1b[31mError: ${error.message}\x1b[0m`);
    process.exit(1);
  }
}

main();
