import { Requirement } from '../Requirement';

export interface TaskJson {
  name: string;
  amountMin: number;
  amountMax: number;
  extendedAmountMin?: number | null;
  extendedAmountMax?: number | null;
  requirements: Requirement[];
  alternatives?: string[];
  weight: number;
  combatLevels: number[];
  slayerExp: number;
  locations: string[];
  wildernessLevels: number[];
  bosses: string[];
}

/**
 * Represents a Slayer task in the game. This class encapsulates all the properties and methods related to a Slayer task.
 * A Slayer task defines the monsters that players can be assigned to kill, the amount of those monsters, and various other attributes.
 * A Task is not an assignment, but rather a template for an assignment.
 * The assignment is the actual task given to a player, which is based on the Task.
 */
class Task {
  name: string; // Name of the task
  weight: number; // Weight of the task, used to determine the likelihood of being assigned this task
  amountMin: number; // Minimum amount of monsters to kill for this task
  amountMax: number; // Maximum amount of monsters to kill for this task
  requirements: Requirement[]; // Array of requirements for this task
  extendedAmountMin?: number | null; // Minimum amount for extended tasks (optional)
  extendedAmountMax?: number | null; // Maximum amount for extended tasks (optional)
  alternatives?: string[]; // Array of alternatives for this task (optional)
  combatLevels: number[]; // Array of combat levels for this task
  slayerExp: number; // Slayer experience gained from this task
  locations: string[]; // Array of locations where this task can be found
  wildernessLevels: number[]; // Array of wilderness levels for this task
  bosses: string[]; // Array of bosses for this task

  /**
   * Constructor for the Task class.
   * @param name - Name of the task
   * @param amountMin - Minimum amount of monsters to kill for this task
   * @param amountMax - Maximum amount of monsters to kill for this task
   * @param requirements - Array of requirements for this task
   * @param extendedAmountMin - Minimum amount for extended tasks (optional)
   * @param extendedAmountMax - Maximum amount for extended tasks (optional)
   * @param weight - Weight of the task (default is 1)
   * @param alternatives - Array of alternatives for this task (optional)
   * @param combatLevels - Array of combat levels for this task
   * @param SlayerExp - Slayer experience gained from this task
   * @param locations - Array of locations where this task can be found
   * @param wildernessLevels - Array of wilderness levels for this task
   * @param bosses - Array of bosses for this task
   */
  constructor(
    name: string,
    amountMin: number,
    amountMax: number,
    requirements: Requirement[],
    extendedAmountMin?: number | null,
    extendedAmountMax?: number | null,
    alternatives: string[] = [],
    weight: number = 1,
    combatLevels: number[] = [],
    SlayerExp: number = 0,
    locations: string[] = [],
    wildernessLevels: number[] = [],
    bosses: string[] = [],
  ) {
    this.name = name;
    this.amountMin = amountMin;
    this.amountMax = amountMax;
    this.requirements = requirements;
    this.extendedAmountMin = extendedAmountMin ?? null;
    this.extendedAmountMax = extendedAmountMax ?? null;
    this.alternatives = alternatives ?? [];
    this.weight = weight;
    this.combatLevels = combatLevels;
    this.slayerExp = SlayerExp;
    this.locations = locations;
    this.wildernessLevels = wildernessLevels;
    this.bosses = bosses;
  }

  static fromJSON(json: TaskJson): Task {
    return new Task(
      json.name,
      json.amountMin,
      json.amountMax,
      json.requirements,
      json.extendedAmountMin,
      json.extendedAmountMax,
      json.alternatives,
      json.weight,
      json.combatLevels,
      json.slayerExp,
      json.locations,
      json.wildernessLevels,
      json.bosses,
    );
  }

  /**
   * Get the name of the task.
   * @example
   * const task = new Task("Goblin", 10, 20, [], 0, null, [], 1);
   * console.log(task.getName()); // "Goblin"
   * @returns
   */
  getName(): string {
    return this.name;
  }

  /**
   * Get the weight of the task. The weight is used to determine the likelihood of being assigned this task compared to others.
   * @returns {number} The weight of the task, which can be used to determine the likelihood of being assigned this task compared to others.
   */
  getWeight(): number {
    return this.weight;
  }

  /**
   * Get the minimum and maximum amount of monsters to kill for this task.
   * The amountMin and amountMax properties define the range of monsters that can be assigned for this task.
   * @returns {number} The minimum amount of monsters to kill for this task.
   */
  getAmountMin(): number {
    return this.amountMin;
  }

  /**
   * Get the maximum amount of monsters to kill for this task.
   * @returns {number} The maximum amount of monsters to kill for this task.
   */
  getAmountMax(): number {
    return this.amountMax;
  }

  /**
   *
   */
  getRequirements(): Requirement[] {
    return this.requirements;
  }

  /**
   *
   * @returns {string[]} An array of alternatives for this task. If alternatives are defined as an object, it flattens the values into a single array.
   */
  getAlternatives(): string[] {
    return this.alternatives || [];
  }

  /**
   *
   * @returns
   */
  toJSON(): TaskJson {
    return {
      slayerExp: this.slayerExp,
      wildernessLevels: this.wildernessLevels,
      alternatives: this.alternatives,
      amountMax: this.amountMax,
      amountMin: this.amountMin,
      bosses: this.bosses,
      combatLevels: this.combatLevels,
      extendedAmountMax: this.extendedAmountMax,
      extendedAmountMin: this.extendedAmountMin,
      locations: this.locations,
      name: this.name,
      requirements: this.requirements,
      weight: this.weight,
    };
  }

  /**
   * Returns a string representation of the Task object.
   * This method is useful for debugging and logging purposes, providing a quick overview of the task's name and other properties.
   * @returns {string} A string representation of the Task object, useful for debugging and logging purposes.
   */
  toString(): string {
    return `Task{ name: ${this.name} }`;
  }
}

export { Task };
