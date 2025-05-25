class SlayerUnlock {
  name: string;
  cost: number;
  description: string;

  constructor({
    cost,
    description,
    name,
  }: {
    name: string;
    cost: number;
    description: string;
  }) {
    this.name = name;
    this.cost = cost;
    this.description = description;
  }
}

class SlayerExtend {
  name: string;
  cost: number;
  notes: string;

  constructor({
    cost,
    name,
    notes,
  }: {
    name: string;
    cost: number;
    notes: string;
  }) {
    this.name = name;
    this.cost = cost;
    this.notes = notes;
  }
}

class SlayerBuy {
  item: string;
  priceSoldAt: number;
  notes: string;

  constructor({
    item,
    notes,
    priceSoldAt,
  }: {
    item: string;
    priceSoldAt: number;
    notes: string;
  }) {
    this.item = item;
    this.priceSoldAt = priceSoldAt;
    this.notes = notes;
  }
}

class SlayerReward {}

export { SlayerBuy, SlayerExtend, SlayerReward, SlayerUnlock };
