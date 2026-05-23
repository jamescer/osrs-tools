const fs = require("fs");
const https = require("https");
const path = require("path");

const root = process.cwd();
const itemDir = path.join(root, "source", "runescape", "model", "Item", "all");
const assetDir = path.join(root, "public", "assets", "items");
const reportPath = path.join(root, "created-items.json");

function requestJson(url) {
  return new Promise((resolve, reject) => {
    https
      .get(
        url,
        { headers: { "User-Agent": "osrs-tools local data updater" } },
        (res) => {
          let data = "";
          res.on("data", (chunk) => {
            data += chunk;
          });
          res.on("end", () => {
            try {
              resolve(JSON.parse(data));
            } catch (error) {
              reject(error);
            }
          });
        },
      )
      .on("error", reject);
  });
}

function normalizeIcon(name) {
  return path.basename(name, ".png").toLowerCase().replace(/[^a-z0-9]/g, "");
}

function toClassName(name) {
  const words = name
    .replace(/&/g, " and ")
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .split(/\s+/);

  let className = words
    .map((word) => {
      if (/^\d/.test(word)) {
        return word;
      }

      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("");

  className = className.replace(/^3rd/, "Third");

  if (!/^[A-Za-z_]/.test(className)) {
    className = `Item${className}`;
  }

  return className;
}

function toVarName(className) {
  return `${className.charAt(0).toLowerCase()}${className.slice(1)}Data`;
}

function quote(value) {
  return JSON.stringify(String(value ?? "").replace(/\r?\n/g, " "));
}

function makeItemFile(item) {
  const className = toClassName(item.name);
  const variableName = toVarName(className);
  const id = Number(item.id);
  const value = Number(item.value ?? 0);
  const highAlch = Number(item.highalch ?? 0);
  const lowAlch = Number(item.lowalch ?? 0);
  const wikiUrl = `https://oldschool.runescape.wiki/w/${encodeURIComponent(String(item.name).replace(/ /g, "_"))}`;

  return {
    className,
    fileName: `${className}.ts`,
    content: `import { Item } from '../Item';

const ${variableName} = {
  id: ${id},
  name: ${quote(item.name)},
  iconUrl: '/assets/items/${id}.png',
  examine: ${quote(item.examine)},
  value: ${value},
  highAlch: ${highAlch},
  lowAlch: ${lowAlch},
  weight: 0,
  members: ${Boolean(item.members)},
  tradeable: true,
  equipable: false,
  releaseDate: '',
  destroy: 'Drop',
  questItem: false,
  stackable: false,
  noted: false,
  officialWikiUrl: ${quote(wikiUrl)},
};

export const ${className} = Item.fromJson(${variableName});
`,
  };
}

async function main() {
  const mapping = await requestJson("https://prices.runescape.wiki/api/v1/osrs/mapping");
  const byIcon = new Map();

  for (const item of mapping) {
    byIcon.set(normalizeIcon(item.icon), item);
  }

  const existingIds = new Set();
  const existingClasses = new Set();

  for (const file of fs.readdirSync(itemDir).filter((file) => file.endsWith(".ts"))) {
    const text = fs.readFileSync(path.join(itemDir, file), "utf8");
    const id = text.match(/id:\s*(\d+)/);

    if (id) {
      existingIds.add(id[1]);
    }

    existingClasses.add(path.basename(file, ".ts"));
  }

  const candidates = fs
    .readdirSync(assetDir)
    .filter((file) => file.endsWith(".png") && !/^\d+\.png$/.test(file))
    .map((file) => ({ file, item: byIcon.get(normalizeIcon(file)) }))
    .filter(({ item }) => item && !existingIds.has(String(item.id)));

  const created = [];
  const collisions = [];

  for (const { file, item } of candidates) {
    const generated = makeItemFile(item);

    if (existingClasses.has(generated.className) || fs.existsSync(path.join(itemDir, generated.fileName))) {
      collisions.push({ file, id: item.id, name: item.name, className: generated.className });
      continue;
    }

    fs.writeFileSync(path.join(itemDir, generated.fileName), generated.content, "utf8");
    fs.renameSync(path.join(assetDir, file), path.join(assetDir, `${item.id}.png`));
    existingIds.add(String(item.id));
    existingClasses.add(generated.className);
    created.push({ file: generated.fileName, id: item.id, name: item.name });
  }

  fs.writeFileSync(reportPath, JSON.stringify({ created, collisions, count: created.length }, null, 2));
  console.log(`created=${created.length} collisions=${collisions.length}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
