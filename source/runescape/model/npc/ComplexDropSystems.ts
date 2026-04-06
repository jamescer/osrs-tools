/**
 * Enhanced NPC Drop System for Complex Drop Mechanics
 * Handles drop tables, rare drops, secondary rolls, and weighted systems
 * This file shows how to extend the basic NpcDrop model for scalability
 */

import { NpcDrop } from './NpcDrop';

/**
 * Weighted drop - An item with a weight in a weighted selection
 * Useful for "rare drop table" mechanics where one of several items is chosen
 */
export class WeightedDrop {
  constructor(
    public drop: NpcDrop,
    public weight: number, // Higher = more likely
  ) {
    if (weight <= 0) {
      throw new Error('Weight must be positive');
    }
  }

  /**
   * Calculate the probability of this drop being selected
   * Only valid when used in a WeightedDropTable
   */
  getProbabilityInTable(totalWeight: number): number {
    return this.weight / totalWeight;
  }
}

/**
 * Weighted drop table - Roll a single drop from weighted options
 * Example: Boss drops either Sword (weight 30), Shield (weight 15), or Helm (weight 5)
 * Chance to get Sword = 30/50 = 60%
 */
export class WeightedDropTable {
  private drops: WeightedDrop[] = [];
  private totalWeight: number = 0;

  /**
   * Add a drop to the weighted table
   */
  addDrop(drop: NpcDrop, weight: number): void {
    const weighted = new WeightedDrop(drop, weight);
    this.drops.push(weighted);
    this.totalWeight += weight;
  }

  /**
   * Get all drops in this table
   */
  getDrops(): WeightedDrop[] {
    return [...this.drops];
  }

  /**
   * Sort by weight (most common first)
   */
  sortByWeight(descending: boolean = true): void {
    this.drops.sort((a, b) => (descending ? b.weight - a.weight : a.weight - b.weight));
  }

  /**
   * Calculate probability of each drop
   */
  getDropProbabilities(): Map<NpcDrop, number> {
    const probs = new Map<NpcDrop, number>();
    for (const weighted of this.drops) {
      probs.set(weighted.drop, weighted.getProbabilityInTable(this.totalWeight));
    }
    return probs;
  }

  /**
   * Get the most likely drop
   */
  getMostLikelyDrop(): WeightedDrop | undefined {
    return this.drops.length > 0
      ? this.drops.reduce((max, curr) => (curr.weight > max.weight ? curr : max))
      : undefined;
  }

  toString(): string {
    return `WeightedDropTable(${this.drops.length} options, total weight: ${this.totalWeight})`;
  }
}

/**
 * Drop roll - Represents one "roll" in a multi-roll system
 * Example: Zulrah drops coins (always) THEN rolls rare drop table
 */
export class DropRoll {
  constructor(
    public name: string, // e.g., "Primary", "Secondary", "Tertiary", "Rare"
    public drops: NpcDrop[] | WeightedDropTable,
    public chanceString: string = 'Always',
  ) {}

  /**
   * Check if this roll is guaranteed
   */
  get isGuaranteed(): boolean {
    return this.chanceString === 'Always';
  }

  /**
   * Check if drops are weighted or a flat list
   */
  get isWeighted(): boolean {
    return this.drops instanceof WeightedDropTable;
  }

  getDrop(itemId: string): NpcDrop | undefined {
    if (this.isWeighted) {
      return (this.drops as WeightedDropTable)
        .getDrops()
        .find(w => w.drop.item === itemId)?.drop;
    } else {
      return (this.drops as NpcDrop[]).find(d => d.item === itemId);
    }
  }

  toString(): string {
    const dropInfo = this.isWeighted
      ? `Weighted(${(this.drops as WeightedDropTable).getDrops().length} options)`
      : `${(this.drops as NpcDrop[]).length} drops`;
    return `${this.name} Roll (${this.chanceString}): ${dropInfo}`;
  }
}

/**
 * Complete NPC drop table with multiple rolls
 * Replaces the old flat drop array
 *
 * OSRS Example - Zulrah Boss:
 * - Roll 1 (Always): 2-3 drops from primary table
 * - Roll 2 (Always): 1 drop from secondary table
 * - Roll 3 (4/128): 1 drop from rare table
 *
 * OSRS Example - Woman NPC:
 * - Roll 1 (Always): Bones (100%)
 * (Note: Woman only has one simple roll)
 */
export class CompleteDropTable {
  private rolls: DropRoll[] = [];
  private name: string;

  constructor(npcName: string = 'Unknown NPC') {
    this.name = npcName;
  }

  /**
   * Add a roll to the drop table
   */
  addRoll(roll: DropRoll): void {
    this.rolls.push(roll);
  }

  /**
   * Add a simple guaranteed roll with flat drops
   */
  addSimpleRoll(name: string, drops: NpcDrop[]): void {
    this.addRoll(new DropRoll(name, drops, 'Always'));
  }

  /**
   * Add a weighted roll (e.g., rare drop table)
   */
  addWeightedRoll(
    name: string,
    table: WeightedDropTable,
    chance: string | number = 'Always',
  ): void {
    const chanceStr = typeof chance === 'string' ? chance : `1/${chance}`;
    this.addRoll(new DropRoll(name, table, chanceStr));
  }

  /**
   * Get all rolls
   */
  getRolls(): DropRoll[] {
    return [...this.rolls];
  }

  /**
   * Get all possible drops (flattened)
   */
  getAllPossibleDrops(): NpcDrop[] {
    const allDrops: NpcDrop[] = [];

    for (const roll of this.rolls) {
      if (roll.isWeighted) {
        (roll.drops as WeightedDropTable)
          .getDrops()
          .forEach((w: WeightedDrop) => {
            if (!allDrops.find(d => d.item === w.drop.item)) {
              allDrops.push(w.drop);
            }
          });
      } else {
        (roll.drops as NpcDrop[]).forEach(drop => {
          if (!allDrops.find(d => d.item === drop.item)) {
            allDrops.push(drop);
          }
        });
      }
    }

    return allDrops;
  }

  /**
   * Find a specific drop by item ID
   */
  findDrop(itemId: string): NpcDrop | undefined {
    for (const roll of this.rolls) {
      const drop = roll.getDrop(itemId);
      if (drop) return drop;
    }
    return undefined;
  }

  /**
   * Get conditional drops only
   */
  getConditionalDrops(): NpcDrop[] {
    return this.getAllPossibleDrops().filter(d => (d as any).conditional);
  }

  /**
   * Estimate average drops per kill (simplified)
   */
  estimateAverageDrops(): number {
    let average = 0;

    for (const roll of this.rolls) {
      // Parse chance string to fraction
      let rollChance = 1.0;
      if (roll.chanceString !== 'Always') {
        const parts = roll.chanceString.split('/');
        if (parts.length === 2) {
          rollChance = parseFloat(parts[0]) / parseFloat(parts[1]);
        }
      }

      if (roll.isWeighted) {
        // Average weighted item
        const weighted = roll.drops as WeightedDropTable;
        const probs = weighted.getDropProbabilities();
        let rollAverage = 0;
        for (const [drop] of probs) {
          const qty = drop.quantity;
          const min = Array.isArray(qty) ? qty[0] : qty;
          rollAverage += min; // Use min as estimate
        }
        average += rollAverage * rollChance;
      } else {
        // Average flat drops
        const flat = roll.drops as NpcDrop[];
        let rollAverage = flat.reduce((sum, drop) => {
          const qty = drop.quantity;
          const min = Array.isArray(qty) ? qty[0] : qty;
          return sum + min;
        }, 0);
        average += rollAverage * rollChance;
      }
    }

    return average;
  }

  toString(): string {
    return `${this.name} Drop Table\n${this.rolls.map(r => `  - ${r.toString()}`).join('\n')}`;
  }
}

/**
 * Shared rare drop table - Used by multiple NPCs
 * OSRS Example: Many bosses share the same rare drop table
 */
export class SharedRareDropTable {
  private rarities: Map<number, WeightedDropTable> = new Map();

  /**
   * Add a weighted drop table for a specific rarity tier
   * Example: tier 1 = very rare (1/512), tier 2 = rare (1/128), etc.
   */
  addTier(tier: number, table: WeightedDropTable): void {
    this.rarities.set(tier, table);
  }

  /**
   * Get a specific tier
   */
  getTier(tier: number): WeightedDropTable | undefined {
    return this.rarities.get(tier);
  }

  /**
   * Get all tiers
   */
  getAllTiers(): number[] {
    return Array.from(this.rarities.keys()).sort();
  }

  toString(): string {
    return `SharedRareDropTable(${this.rarities.size} tiers)`;
  }
}

// ============================================================================
// PRACTICAL EXAMPLES
// ============================================================================

/**
 * Example 1: Simple NPC (Woman)
 * - Always drops Bones (100%)
 */
export function createWomanDropTable(): CompleteDropTable {
  const table = new CompleteDropTable('Woman');

  table.addSimpleRoll('Standard', [new NpcDrop('Bones', 1, 'Always')]);

  return table;
}

/**
 * Example 2: Boss with multiple rolls (Zulrah simplified)
 * - Always get 2-3 primary drops
 * - Always get 1 secondary drop
 * - 4/128 chance for 1 rare drop
 */
export function createZulrahDropTable(): CompleteDropTable {
  const table = new CompleteDropTable('Zulrah');

  // Primary roll - always happens, multiple drops
  const primaryDrops = [
    new NpcDrop('Zulrah\'s Scales', [20, 40], 'Always'),
    new NpcDrop('Snake Hides', [10, 20], 'Always'),
  ];
  table.addSimpleRoll('Primary', primaryDrops);

  // Secondary roll - always happens, single drop
  const secondaryDrops = [
    new NpcDrop('Torstol', [2, 4], 'Always'),
    new NpcDrop('Snapdragon', [3, 5], 'Always'),
  ];
  table.addSimpleRoll('Secondary', secondaryDrops);

  // Rare roll - 4/128 chance, weighted drops
  const rareTable = new WeightedDropTable();
  rareTable.addDrop(new NpcDrop('Magic Fang', 1, 'Always'), 20); // Least rare
  rareTable.addDrop(new NpcDrop('Tanzanite Fang', 1, 'Always'), 20);
  rareTable.addDrop(new NpcDrop('Serpentine Helm', 1, 'Always'), 10); // Most rare
  table.addWeightedRoll('Rare', rareTable, '4/128');

  return table;
}

/**
 * Example 3: Boss with shared rare drop table
 * Many GWD bosses share a common rare table
 */
export function createSharedGWDRareTable(): SharedRareDropTable {
  const shared = new SharedRareDropTable();

  // Very rare tier (1/512)
  const veryRareTable = new WeightedDropTable();
  veryRareTable.addDrop(new NpcDrop('Bandos Godsword', 1, 'Always'), 1);
  veryRareTable.addDrop(new NpcDrop('Zaff Godsword', 1, 'Always'), 1);
  shared.addTier(1, veryRareTable);

  // Rare tier (1/128)
  const rareTable = new WeightedDropTable();
  rareTable.addDrop(new NpcDrop('Bandos Hilt', 1, 'Always'), 1);
  rareTable.addDrop(new NpcDrop('Zaff Hilt', 1, 'Always'), 1);
  shared.addTier(2, rareTable);

  return shared;
}

/**
 * Example 4: Using shared rare table in an NPC
 */
export function createGeneralGraardorDropTable(
  sharedRareTable: SharedRareDropTable,
): CompleteDropTable {
  const table = new CompleteDropTable('General Graardor');

  // Standard drops
  const standardDrops = [
    new NpcDrop('Coins', [1000, 5000], 'Always'),
    new NpcDrop('Bandos Boots', 1, '1/50'),
  ];
  table.addSimpleRoll('Standard', standardDrops);

  // Share rare table (1/512 for unique)
  const rareTable = sharedRareTable.getTier(1);
  if (rareTable) {
    table.addWeightedRoll('Rare', rareTable, '1/512');
  }

  return table;
}

// ============================================================================
// DEMONSTRATION
// ============================================================================

export function demonstrateComplexDropSystems(): void {
  console.log('\n=== WOMAN (Simple) ===');
  const woman = createWomanDropTable();
  console.log(woman.toString());
  console.log('Possible drops:', woman.getAllPossibleDrops().map(d => d.item));

  console.log('\n=== ZULRAH (Complex Multi-Roll) ===');
  const zulrah = createZulrahDropTable();
  console.log(zulrah.toString());
  console.log('Estimated drops per kill:', zulrah.estimateAverageDrops().toFixed(2));

  console.log('\n=== SHARED RARE TABLE ===');
  const sharedRare = createSharedGWDRareTable();
  console.log(sharedRare.toString());
  console.log('Tiers:', sharedRare.getAllTiers());

  console.log('\n=== GENERAL GRAARDOR (Uses Shared Rare) ===');
  const graardor = createGeneralGraardorDropTable(sharedRare);
  console.log(graardor.toString());
  console.log('Possible drops:', graardor.getAllPossibleDrops().map(d => d.item));

  // Find a specific drop
  const bandosHilt = graardor.findDrop('Bandos Hilt');
  if (bandosHilt) {
    console.log(`\nFound Bandos Hilt: ${bandosHilt.toString()}`);
  }
}
