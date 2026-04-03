/**
 * Slayer Extend class
 * Represents a slayer reward that increases task requirements
 * Reference: https://oldschool.runescape.wiki/w/Slayer#Rewards
 */
export class SlayerExtend {
  readonly name: string;
  readonly cost: number;
  readonly notes: string;
  readonly appliesTo?: string[];

  constructor(data: {
    name: string;
    cost: number;
    notes: string;
    appliesTo?: string[];
  }) {
    this.name = data.name;
    this.cost = data.cost;
    this.notes = data.notes;
    this.appliesTo = data.appliesTo;
  }

  /**
   * Get the extend name
   */
  getName(): string {
    return this.name;
  }

  /**
   * Get the cost in slayer points
   */
  getCost(): number {
    return this.cost;
  }

  /**
   * Get the notes/description of the extend
   */
  getNotes(): string {
    return this.notes;
  }

  /**
   * Get the tasks this extend applies to
   */
  getAppliesToTasks(): string[] | undefined {
    return this.appliesTo;
  }
}
