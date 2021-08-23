const seeds = require('../../data/farming/seeds.json'); //list of all seeds

class Seed {
  seed;
  constructor({ name, level, xp, type }) {
    this.name = name;
    this.level = level;
    this.xp = xp;
    this.type = type;
  }

  getSeedAmount() {
    let seedAmount = 1;
    switch (this.type.toLowerCase()) {
      case 'flower':
      case 'tree':
      case 'herb':
        seedAmount = 1;
        break;
      case 'allotment':
        seedAmount = 3;
        break;
      default:
        seedAmount = 1;
        break;
    }
    return seedAmount;
  }
  getLevel() {
    return this.level > 1 ? this.level : 1;
  }

  getRequiredLevel() {
    return this.level > 1 ? this.level : 1;
  }
}

module.exports = {
  seedlist: seeds,
  seeds: seeds,
  Seed: Seed,
};
