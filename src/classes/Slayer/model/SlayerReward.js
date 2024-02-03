class SlayerUnlock {
  constructor({ name, cost, description }) {
    this.name = name;
    this.cost = cost;
    this.description = description;
  }
}
class SlayerExtend {
  constructor({ name, cost, notes }) {
    this.name = name;
    this.cost = cost;
    this.notes = notes;
  }
}
class SlayerBuy {
  constructor({ item, priceSoldAt, notes }) {
    this.item = item;
    this.priceSoldAt = priceSoldAt;
    this.notes = notes;
  }
}

class SlayerReward {
  constructor() {}
}

module.exports = exports = {
  SlayerUnlock,
  SlayerReward,
  SlayerExtend,
  SlayerBuy,
};
