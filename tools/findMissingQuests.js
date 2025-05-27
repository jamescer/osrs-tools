// This script compares questData.json to the files in src/model/quest/all/ and lists missing quests.
const fs = require('fs');
const path = require('path');

const questData = require('../src/resources/quest/questData.json');
const questDir = path.join(__dirname, '../src/model/quest/all/');

const files = fs
  .readdirSync(questDir)
  .map((f) => f.replace(/\.ts$/, '').toLowerCase());
const missing = [];
for (const questName in questData) {
  const shortName =
    questData[questName].shortName || questName.replace(/[^a-zA-Z0-9]/g, '');
  const expectedFile =
    shortName.charAt(0).toUpperCase() + shortName.slice(1) + '.ts';
  if (!files.includes(expectedFile.replace(/\.ts$/, '').toLowerCase())) {
    missing.push({ questName, expectedFile });
  }
}
console.log('Missing quest files:', missing);
