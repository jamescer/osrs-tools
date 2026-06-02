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
const itemsDir = path.join(projectRoot, 'public', 'assets', 'items', 'icons');
const logFilePath = path.join(scriptDir, 'download-item-icons.log');

function appendLog(message) {
  const line = `[${new Date().toISOString()}] ${message}`;
  fs.appendFileSync(logFilePath, `${line}\n`, 'utf8');
}

function logInfo(message) {
  console.log(message);
  appendLog(message);
}

function logWarn(message) {
  console.warn(message);
  appendLog(`WARN: ${message}`);
}

function logError(message) {
  console.error(message);
  appendLog(`ERROR: ${message}`);
}

// Clear or create the log file at startup
fs.writeFileSync(logFilePath, '', 'utf8');

// Parse arguments
const args = process.argv.slice(2);
let specificIds = null;
let forceOverwrite = false;
let maxRetries = 3;
let batchSize = 5;

args.forEach((arg, i) => {
  if (arg === '--ids' && args[i + 1]) {
    specificIds = args[i + 1].split(',').map(id => parseInt(id.trim(), 10));
  } else if (arg === '--force') {
    forceOverwrite = true;
    } else if (arg === '--batch-size' && args[i + 1]) {
      batchSize = parseInt(args[i + 1], 10) || batchSize;
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

// Load item names so we can build wiki image URLs by name
function loadNames() {
  if (!fs.existsSync(allItemsFile)) return {};
  const lines = fs.readFileSync(allItemsFile, 'utf8').split('\n');
  const map = {};
  for (const line of lines) {
    const t = line.trim();
    if (!t) continue;
    const parts = t.split(/\s+/);
    const last = parts[parts.length - 1];
    if (/^\d+$/.test(last)) {
      const id = parseInt(last, 10);
      const name = parts.slice(0, -1).join(' ');
      map[id] = name || '';
    }
  }
  return map;
}

const itemNames = loadNames();

// Default headers for requests (helps with some CDN/wiki protections)
const DEFAULT_HEADERS = {
  'User-Agent': 'Mozilla/5.0 (compatible; OSRS-Icon-Downloader/1.0)',
  'Referer': 'https://oldschool.runescape.wiki/'
};

// Icon sources (in order of preference). First try wiki by item name, then numeric sources
const ICON_SOURCES = [
  {
    name: 'OSRS Wiki (images by name)',
    urlTemplate: (id) => {
      const name = (itemNames[id] || String(id)).replace(/\s+/g, '_');
      return `https://oldschool.runescape.wiki/images/${encodeURIComponent(name)}.png`;
    }
  },
  {
    name: 'Lootscape CDN',
    urlTemplate: (id) => `https://lootscape-cdn.b-cdn.net/item-icons/${id}.png`
  },
  {
    name: 'RuneLite Wiki',
    urlTemplate: (id) => `https://raw.githubusercontent.com/runelite/runelite.net/master/public/img/items/${id}.png`
  }
];

logInfo('\x1b[36mOSRS Item Icons Downloader\x1b[0m');
logInfo('\x1b[36m==========================\x1b[0m');
logInfo(`Project Root: ${projectRoot}`);
logInfo(`Items Directory: ${itemsDir}\n`);

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

      const opts = { timeout: 10000, headers: DEFAULT_HEADERS };
      protocol.get(url, opts, (res) => {
        // Handle redirects (resolve relative locations)
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          let next = res.headers.location;
          try {
            next = new URL(next, url).toString();
          } catch (e) {}
          downloadFile(next, filePath, retries - attempt).then(resolve);
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
              logWarn(`Failed to write ${filePath}: ${e.message}`);
              resolve(false);
            }
          });
        } else {
          logWarn(`Request for ${url} returned status ${res.statusCode}`);
          resolve(false);
        }
      }).on('error', (err) => {
        logWarn(`Request error for ${url}: ${err.message}`);
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
      logInfo(`Downloading ${itemIds.length} specified items\n`);
    } else {
      logInfo('\x1b[33mDetermining missing items...\x1b[0m');
      const allIds = parseAllItems();
      const existingFiles = getExistingFiles();
      const existingSet = new Set(existingFiles);
      itemIds = allIds.filter(id => !existingSet.has(id));

      logInfo(`Found ${itemIds.length} items to download\n`);

      if (itemIds.length === 0) {
        logInfo('\x1b[32mAll items already have icons!\x1b[0m');
        return;
      }
    }

    logInfo(`\x1b[33mAttempting to download ${itemIds.length} item icons (batch size: ${batchSize})...\x1b[0m\n`);

    let successCount = 0;
    let failureCount = 0;
    let skipped = 0;

    // Ensure directory exists
    if (!fs.existsSync(itemsDir)) {
      fs.mkdirSync(itemsDir, { recursive: true });
    }

    // Download items in concurrent batches
    for (let start = 0; start < itemIds.length; start += batchSize) {
      const batch = itemIds.slice(start, start + batchSize);
      logInfo(`Processing batch ${Math.floor(start / batchSize) + 1} (${batch.length} items)`);

      // Create promises for the batch
      const promises = batch.map(async (itemId, idx) => {
        const globalIndex = start + idx + 1;
        if (globalIndex % 100 === 0) {
          logInfo(`Progress: ${globalIndex} / ${itemIds.length}`);
        }

        const outFile = path.join(itemsDir, `${itemId}.png`);

        // Skip if exists and not forcing overwrite
        if (fs.existsSync(outFile) && !forceOverwrite) {
          skipped++;
          return;
        }

        // Try each source sequentially for this item
        for (const source of ICON_SOURCES) {
          const url = source.urlTemplate(itemId);
          const ok = await downloadFile(url, outFile, maxRetries);
          if (ok) {
            successCount++;
            return;
          }
          logWarn(`Item ${itemId}: failed to download from ${source.name} (${url})`);
        }

        // If download failed, create placeholder
        createPlaceholder(outFile);
        failureCount++;
      });

      // Wait for this batch to complete
      await Promise.all(promises);
    }

    logInfo('\n\x1b[36mDownload Summary:\x1b[0m');
    logInfo(`  Successfully downloaded: ${successCount}`);
    logInfo(`  Failed (created placeholders): ${failureCount}`);
    logInfo(`  Skipped (already exist): ${skipped}\n`);
    logInfo(`All files created in: ${itemsDir}`);
    logInfo('\x1b[32mDone!\x1b[0m');

  } catch (error) {
    logError(`\x1b[31mError: ${error.message}\x1b[0m`);
    process.exit(1);
  }
}

main();
