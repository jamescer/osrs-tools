#!/usr/bin/env node

// Small test script to download item icons 1-5 from RuneLite Wiki (raw GitHub)
const fs = require('fs');
const path = require('path');
const https = require('https');

const scriptDir = __dirname;
const projectRoot = scriptDir.endsWith('scripts') ? path.dirname(scriptDir) : scriptDir;
const itemsDir = path.join(projectRoot, 'public', 'assets', 'items');
if (!fs.existsSync(itemsDir)) fs.mkdirSync(itemsDir, { recursive: true });

// Load item names from allitems.txt so we can construct wiki URLs by name
const allItemsFile = path.join(projectRoot, 'allitems.txt');
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

const ids = [1,2,3,4,5];
const itemNames = loadNames();
const sources = [
  // Use wiki page with media anchor (example: /w/Steel_cannonball#/media/File:Steel_cannonball.png)
  (id) => {
    const name = (itemNames[id] || String(id)).replace(/\s+/g, '_');
    const enc = encodeURIComponent(name);
    return `https://oldschool.runescape.wiki/images/${enc}.png`;
  },
  (id) => `https://raw.githubusercontent.com/runelite/runelite.net/master/public/img/items/${id}.png`,
  (id) => `https://lootscape-cdn.b-cdn.net/item-icons/${id}.png`
];

function download(url, outPath){
  return new Promise((resolve) => {
    const file = fs.createWriteStream(outPath);
    const options = { headers: { 'User-Agent': 'Mozilla/5.0 (compatible; OSRS-Icon-Test/1.0)', 'Referer': 'https://oldschool.runescape.wiki' } };
    https.get(url, options, (res) => {
      if (res.statusCode !== 200) {
        file.close();
        fs.unlinkSync(outPath, { force: true });
        resolve({ok:false, status: res.statusCode});
        return;
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve({ok:true});
      });
    }).on('error', (err) => {
      try { file.close(); fs.unlinkSync(outPath); } catch(e){}
      resolve({ok:false, error: err.message});
    });
  });
}

(async ()=>{
  console.log('Downloading test icons (1-5) from RuneLite Wiki...');
  for (const id of ids){
    const out = path.join(itemsDir, `test_${id}.png`);
    process.stdout.write(`Downloading ${id}... `);
    let ok = false;
    let lastErr = null;
    for (const src of sources){
      const url = src(id);
      try{
        const res = await download(url, out);
        if (res.ok) { ok = true; break; }
        lastErr = res.status || res.error;
      } catch(e){ lastErr = e.message; }
    }
    if (ok) console.log('OK');
    else console.log(`FAIL (${lastErr})`);
  }
  console.log('Done.');
})();
