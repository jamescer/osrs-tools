#!/usr/bin/env node

/**
 * Generates src/runescape/resources/oldSchoolRunescapeItems.json covering all
 * OSRS items, combining two sources:
 *
 *  - https://prices.runescape.wiki/api/v1/osrs/mapping - a wiki-hosted endpoint
 *    that gives a verified { id, name, icon filename } tuple for every
 *    GE-tradeable item (~4,600). This is authoritative and wins on conflicts.
 *  - scripts/allitems.txt - the repo's existing { name, id } list for all
 *    ~15,600 current items (already used by the icon-download scripts). Items
 *    not covered by the mapping above get an image URL derived from their
 *    name using the wiki's filename convention (spaces -> underscores, plus
 *    ".png"), confirmed by comparing many verified mapping entries where
 *    `icon` always equals `name + ".png"`. These are best-effort, not
 *    individually verified.
 *
 * Usage: node scripts/generate-item-images.js
 */

const fs = require('fs');
const path = require('path');

const MAPPING_URL = 'https://prices.runescape.wiki/api/v1/osrs/mapping';
const ALL_ITEMS_PATH = path.join(__dirname, 'allitems.txt');
const OUTPUT_PATH = path.join(__dirname, '..', 'src', 'runescape', 'resources', 'oldSchoolRunescapeItems.json');

function imageUrlForName(name) {
  return `https://oldschool.runescape.wiki/images/${name.replace(/ /g, '_')}.png`;
}

/**
 * "Absorption#(4)" -> "Absorption(4)", "A stone bowl#Empty" -> "A stone bowl (Empty)".
 * Matches the wiki's actual in-game naming for dose/variant items (verified
 * against tradeable potion doses, e.g. "Prayer potion(4)").
 */
function expandVariant(rawName) {
  const hashIdx = rawName.indexOf('#');
  if (hashIdx === -1) return rawName;

  const base = rawName.slice(0, hashIdx).trim();
  const variant = rawName.slice(hashIdx + 1).trim();
  return variant.startsWith('(') ? `${base}${variant}` : `${base} (${variant})`;
}

/** Strips a "#variant" or " - flavor text" suffix down to the plain item name. */
function baseName(rawName) {
  const hashIdx = rawName.indexOf('#');
  const dashIdx = rawName.indexOf(' - ');
  let cut = rawName.length;
  if (hashIdx >= 0) cut = Math.min(cut, hashIdx);
  if (dashIdx >= 0) cut = Math.min(cut, dashIdx);
  return rawName.slice(0, cut).trim();
}

/**
 * Parses allitems.txt ("Name\tId" per line). Some ids are non-numeric
 * placeholders for historical/beta/interface-only entries (e.g. "hist6205")
 * and are skipped. Some ids repeat across multiple flavor-text lines (e.g.
 * clue scroll variants, or object states like "#Open"/"#Closed") - for those
 * we prefer the plain unqualified name where one exists.
 */
function parseAllItems() {
  const content = fs.readFileSync(ALL_ITEMS_PATH, 'utf-8');
  const namesById = new Map();

  for (const rawLine of content.split('\n')) {
    const line = rawLine.trim();
    if (!line) continue;

    const tabIdx = line.lastIndexOf('\t');
    if (tabIdx === -1) continue;

    const name = line.slice(0, tabIdx).trim();
    const idToken = line.slice(tabIdx + 1).trim();
    if (!/^\d+$/.test(idToken)) continue;

    const id = Number(idToken);
    if (!namesById.has(id)) namesById.set(id, []);
    namesById.get(id).push(name);
  }

  const items = new Map();
  for (const [id, names] of namesById) {
    const resolvedName =
      names.length === 1
        ? expandVariant(names[0])
        : (names.find(n => !n.includes('#') && !n.includes(' - ')) ?? baseName(names[0]));

    items.set(id, { id, imageUrl: imageUrlForName(resolvedName), name: resolvedName });
  }
  return items;
}

async function fetchTradeableMapping() {
  const response = await fetch(MAPPING_URL, {
    headers: {
      'User-Agent': 'osrs-tools (https://github.com/jamescer/osrs-tools) - item image dataset generator',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${MAPPING_URL}: ${response.status} ${response.statusText}`);
  }

  const mapping = await response.json();
  const items = new Map();
  for (const entry of mapping) {
    items.set(entry.id, {
      id: entry.id,
      imageUrl: `https://oldschool.runescape.wiki/images/${entry.icon.replace(/ /g, '_')}`,
      name: entry.name,
    });
  }
  return items;
}

async function main() {
  const allItems = parseAllItems();
  const tradeable = await fetchTradeableMapping();

  // allItems is the broad, best-effort base (derived image filenames);
  // wiki-verified tradeable entries override it where both exist.
  const merged = new Map(allItems);
  for (const [id, item] of tradeable) {
    merged.set(id, item);
  }

  const items = [...merged.values()].sort((a, b) => a.id - b.id);

  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(items, null, 2)}\n`, 'utf-8');

  console.log(
    `Wrote ${items.length} items to ${OUTPUT_PATH} (${tradeable.size} wiki-verified, ${items.length - tradeable.size} name-derived)`,
  );
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
