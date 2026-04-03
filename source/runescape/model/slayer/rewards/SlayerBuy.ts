/**
 * Slayer Buy class
 * Represents a slayer reward item or service that can be purchased with slayer points
 * Reference: https://oldschool.runescape.wiki/w/Slayer#Rewards
 */
export class SlayerBuy {
  readonly item: string;
  readonly cost: number;
  readonly notes: string;
  readonly requirements?: string[];
  readonly wikiUrl?: string;

  constructor(data: {
    item: string;
    cost: number;
    notes: string;
    requirements?: string[];
    wikiUrl?: string;
  }) {
    this.item = data.item;
    this.cost = data.cost;
    this.notes = data.notes;
    this.requirements = data.requirements;
    this.wikiUrl = data.wikiUrl;
  }

  /**
   * Get the item name
   */
  getItem(): string {
    return this.item;
  }

  /**
   * Get the cost in slayer points
   */
  getCost(): number {
    return this.cost;
  }

  /**
   * Get the description/notes of the buy
   */
  getNotes(): string {
    return this.notes;
  }

  /**
   * Get any requirements for this buy
   */
  getRequirements(): string[] | undefined {
    return this.requirements;
  }

  /**
   * Get the Wiki URL if available
   */
  getWikiUrl(): string | undefined {
    return this.wikiUrl;
  }
}
