#!/usr/bin/env node
// Diagnostic for known existing IDs
const https = require('https');
const http = require('http');
const url = require('url');

const fs = require('fs');
const path = require('path');
const scriptDir = __dirname;
const projectRoot = scriptDir.endsWith('scripts') ? path.dirname(scriptDir) : scriptDir;
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

const ids = [1017,10282,10344,10350,12424];
const itemNames = loadNames();
const sources = [
  (id) => {
    const name = (itemNames[id] || String(id)).replace(/\s+/g, '_');
    const enc = encodeURIComponent(name);
    return `https://oldschool.runescape.wiki/images/${enc}.png`;
  },
  (id) => `https://raw.githubusercontent.com/runelite/runelite.net/master/public/img/items/${id}.png`,
  (id) => `https://lootscape-cdn.b-cdn.net/item-icons/${id}.png`
];
const headers = { 'User-Agent': 'Mozilla/5.0 (compatible; OSRS-Icon-Test/1.0)', 'Referer': 'https://oldschool.runescape.wiki/' };
function checkUrl(u){
  return new Promise((resolve)=>{
    const parsed = url.parse(u);
    const lib = parsed.protocol === 'https:' ? https : http;
    const opts = Object.assign({ method: 'GET', headers }, parsed);
    const req = lib.request(opts, (res)=>{
      const info = { status: res.statusCode, headers: res.headers };
      res.on('data',()=>{});
      res.on('end',()=>resolve(info));
    });
    req.on('error',(e)=>resolve({ error: e.message }));
    req.end();
  });
}
(async ()=>{
  for (const id of ids){
    console.log('=== ID', id, '===');
    for (const s of sources){
      const u = s(id);
      process.stdout.write(u + ' => ');
      const r = await checkUrl(u);
      console.log(JSON.stringify(r, null, 2));
    }
  }
})();
