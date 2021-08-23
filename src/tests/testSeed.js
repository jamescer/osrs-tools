
const { treeSeeds, TreeSeed } = require('./utils/Seed')

console.log(treeSeeds);
console.log(treeSeeds[0]);

var newtree = new TreeSeed(treeSeeds[0]);
console.log(newtree);