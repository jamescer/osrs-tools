class SlayerUnlock {
  name: string;
  cost: number;
  description: string;

  constructor({ name, cost, description }: { name: string; cost: number; description: string }) {
    this.name = name;
    this.cost = cost;
    this.description = description;
  }
}

class SlayerExtend {
  name: string;
  cost: number;
  notes: string;

  constructor({ name, cost, notes }: { name: string; cost: number; notes: string }) {
    this.name = name;
    this.cost = cost;
    this.notes = notes;
  }
}

class SlayerBuy {
  item: string;
  priceSoldAt: number;
  notes: string;

  constructor({ item, priceSoldAt, notes }: { item: string; priceSoldAt: number; notes: string }) {
    this.item = item;
    this.priceSoldAt = priceSoldAt;
    this.notes = notes;
  }
}

class SlayerReward { }

export { SlayerUnlock, SlayerReward, SlayerExtend, SlayerBuy };