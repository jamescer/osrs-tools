export class NpcDrop {
  public rarityFraction?: number;

  constructor(
    public item: string,
    public quantity: number | [number, number], // single or range
    public rarity: string, // e.g. "Always", "1/128", etc.
  ) {
    this.rarityFraction = NpcDrop.parseRarity(rarity);
  }

  private static parseRarity(rarity: string): number | undefined {
    if (rarity.toLowerCase() === 'always') return 1;
    const match = rarity.match(/^(\d+)\/(\d+)$/);
    if (match) {
      const [, num, denom] = match;
      return Number(num) / Number(denom);
    }
    return undefined;
  }
}
