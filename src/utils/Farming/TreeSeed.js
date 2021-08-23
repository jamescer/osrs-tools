const treeSeeds = require('../../data/farming/trees.json');
const fruitTreeSeeds = require('../../data/farming/fruitTrees.json');

class TreeSeed extends Seed {
  constructor(seed) {
    this.seed = seed;
  }

  getProtection() {
    this.seed.protection;
  }
  getProtection() {
    this.seed.uses;
  }
}

module.exports = {
  TreeSeed: TreeSeed,
  treeSeeds: treeSeeds,
  fruitTreeSeeds: fruitTreeSeeds,
};
