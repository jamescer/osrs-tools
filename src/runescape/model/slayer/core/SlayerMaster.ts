import { meetsRequirements } from './eligibility';
import { Task } from './Task';
import { SlayerAssignmentContext, SlayerMasterConfig } from './types';

/**
 * SlayerMaster class represents a Slayer Master in the game.
 * It encapsulates the properties and methods related to a Slayer Master,
 * including the tasks they assign, their location, level requirements,
 * and the ability to generate random assignments.
 * Reference: https://oldschool.runescape.wiki/w/Duradel
 *
 */
class SlayerMaster {
  name: string; // Name of the Slayer Master
  totalWeight: number; // Total weight of the tasks assigned to this Slayer Master. This is used to determine the likelihood of each task being assigned.
  location: string = ''; // Location of the Slayer Master (optional, can be set later if needed)
  minimumCombatLevel: number = 0; // Minimum combat level required to use this Slayer Master
  minimumSlayerLevel: number = 0; // Minimum Slayer level required to use this Slayer Master (0 = no requirement)
  tasks: Task[]; // Array of tasks assigned to this Slayer Master. This holds the actual tasks that players can be assigned to kill.
  wikiUrl: string = ''; // URL for the Slayer Master (optional, can be set later if needed)
  imageUrl: string = ''; // URL of the Slayer Master's portrait image, sourced from the OSRS Wiki (optional, can be set later if needed)
  taskPoints: Record<number, number>; // Mapping of task intervals to points
  eliteDiaryTaskPoints?: Record<number, number>; // Mapping of task intervals to points
  blockedTasks: Set<string> = new Set(); // Names (lowercased) of tasks this master will not assign

  // Overloaded constructor signatures
  constructor(options: SlayerMasterConfig);
  constructor(
    name: string,
    tasks: Task[],
    location: string,
    levelRequirement: number,
    url: string,
    taskPoints: Record<number, number>,
    eliteDiaryTaskPoints?: Record<number, number>,
    imageUrl?: string,
  );

  // Constructor implementation
  constructor(
    nameOrOptions: string | SlayerMasterConfig,
    tasks?: Task[],
    location?: string,
    levelRequirement?: number,
    url?: string,
    taskPoints?: Record<number, number>,
    eliteDiaryTaskPoints?: Record<number, number>,
    imageUrl?: string,
  ) {
    // Handle options object pattern (modern API)
    if (typeof nameOrOptions === 'object' && !Array.isArray(nameOrOptions)) {
      const options = nameOrOptions as SlayerMasterConfig;
      this.name = options.name;
      this.tasks = options.tasks;
      this.location = options.location || '';
      this.minimumCombatLevel = options.minimumCombatLevel || 0;
      this.minimumSlayerLevel = options.minimumSlayerLevel || 0;
      this.wikiUrl = options.wikiUrl || '';
      this.imageUrl = options.imageUrl || '';
      this.taskPoints = options.pointsTable || {};
      this.eliteDiaryTaskPoints = options.eliteDiaryTaskPoints;
    } else {
      // Handle positional arguments pattern (legacy API)
      this.name = nameOrOptions as string;
      this.tasks = tasks || [];
      this.location = location || '';
      this.minimumCombatLevel = levelRequirement || 0;
      this.wikiUrl = url || '';
      this.imageUrl = imageUrl || '';
      this.taskPoints = taskPoints || {};
      this.eliteDiaryTaskPoints = eliteDiaryTaskPoints;
    }

    this.totalWeight = this.calculateTotalWeight();
  }

  /**
   *  Calculate the total weight of all tasks assigned to this Slayer Master.
   * @returns {number} The total weight of all tasks assigned to this Slayer Master.
   */
  calculateTotalWeight(): number {
    if (this.tasks.length === 0) return 0; // Return 0 if there are no tasks
    return this.tasks.reduce((total, task) => {
      return total + (task.weight || 0); // Sum up the weights of all tasks
    }, 0);
  }

  /**
   * Get the points awarded for completing a task based on the interval.
   * @param {number} taskInterval - The interval of the task (e.g., 1 for every task, 10 for every 10th task, etc.).
   * @returns {number} The points awarded for the given task interval.
   */
  getPointsForTaskInterval(taskInterval: number): number {
    return this.taskPoints[taskInterval] || 0; // Return the points for the interval or 0 if not defined
  }

  /**
   * Get the location of the Slayer Master
   */
  getLocation(): string {
    return this.location;
  }

  /**
   * Get the minimum combat level of the Slayer Master
   */
  getMinimumCombatLevel(): number {
    return this.minimumCombatLevel;
  }

  /**
   * Get the minimum Slayer level required to use this Slayer Master (0 = no requirement).
   */
  getMinimumSlayerLevel(): number {
    return this.minimumSlayerLevel;
  }

  /**
   * Get the wiki URL of the Slayer Master
   */
  getWikiUrl(): string {
    return this.wikiUrl;
  }

  /**
   * Get the URL of the Slayer Master's portrait image
   */
  getImageUrl(): string {
    return this.imageUrl;
  }

  /**
   * Get a random task based on the weighting system of the tasks.
   * Tasks with higher weights have a higher chance of being selected.
   * @param {SlayerAssignmentContext} [context] - The requesting player's Slayer level, completed
   *  quests, and unlocked rewards. When provided, tasks the player doesn't qualify for are
   *  excluded from both the candidate pool and the weight sum, per the task weighting formula
   *  (see https://oldschool.runescape.wiki/w/Slayer#Task_weighting). When omitted, only blocked
   *  tasks are excluded.
   * @returns {Task | null} A randomly selected task or null if no tasks are available.
   */
  getRandomTask(context?: SlayerAssignmentContext): Task | null {
    const availableTasks = this.getAvailableTasks(context);
    if (availableTasks.length === 0) return null; // Return null if there are no eligible tasks

    const availableWeight = availableTasks.reduce((total, task) => total + (task.weight || 0), 0);
    if (availableWeight <= 0) return null;

    const randomWeight = Math.random() * availableWeight; // Generate a random number between 0 and availableWeight
    let cumulativeWeight = 0;

    for (const task of availableTasks) {
      cumulativeWeight += task.weight || 0; // Add the task's weight to the cumulative weight
      if (randomWeight <= cumulativeWeight) {
        return task; // Return the task if the random weight falls within its range
      }
    }

    return null; // Fallback in case no task is selected (shouldn't happen if weights are correct)
  }

  /**
   * Get the percentage chance of being assigned each currently available task:
   * (w / S) * 100, where w is a task's weight and S is the sum of weights of every task
   * the player currently qualifies for (blocked, toggled-off, and requirement-locked tasks
   * excluded from S). Reference: https://oldschool.runescape.wiki/w/Slayer#Task_weighting
   * @param {SlayerAssignmentContext} [context] - The requesting player's Slayer level, completed
   *  quests, and unlocked rewards. When omitted, only blocked tasks are excluded from S.
   * @returns {Map<string, number>} Task name to percentage chance (0-100), for eligible tasks only.
   */
  getTaskChances(context?: SlayerAssignmentContext): Map<string, number> {
    const availableTasks = this.getAvailableTasks(context);
    const availableWeight = availableTasks.reduce((total, task) => total + (task.weight || 0), 0);

    const chances = new Map<string, number>();
    if (availableWeight <= 0) return chances;

    for (const task of availableTasks) {
      chances.set(task.getName(), ((task.weight || 0) / availableWeight) * 100);
    }
    return chances;
  }

  /**
   * Get the percentage chance of being assigned a specific task, by name (case insensitive).
   * @param {string} taskName - Name of the task to check.
   * @param {SlayerAssignmentContext} [context] - See {@link getTaskChances}.
   * @returns {number} The percentage chance (0-100) of being assigned this task, or 0 if the
   *  task doesn't exist or isn't currently available to the player.
   */
  getTaskChance(taskName: string, context?: SlayerAssignmentContext): number {
    const normalized = taskName.toLowerCase();
    for (const [name, chance] of this.getTaskChances(context)) {
      if (name.toLowerCase() === normalized) return chance;
    }
    return 0;
  }

  /**
   * Block a task so it will no longer be returned by getRandomTask().
   * Mirrors the in-game block list: only tasks this master actually assigns can be blocked.
   * @param {string} taskName - Name of the task to block (case insensitive).
   * @returns {boolean} True if the task was found and blocked, false if this master doesn't assign it.
   */
  blockTask(taskName: string): boolean {
    const normalized = taskName.toLowerCase();
    const exists = this.tasks.some(task => task.getName().toLowerCase() === normalized);
    if (!exists) return false;

    this.blockedTasks.add(normalized);
    return true;
  }

  /**
   * Unblock a previously blocked task, allowing it to be assigned again.
   * @param {string} taskName - Name of the task to unblock (case insensitive).
   */
  unblockTask(taskName: string): void {
    this.blockedTasks.delete(taskName.toLowerCase());
  }

  /**
   * Check whether a task is currently blocked for this master.
   * @param {string} taskName - Name of the task to check (case insensitive).
   */
  isTaskBlocked(taskName: string): boolean {
    return this.blockedTasks.has(taskName.toLowerCase());
  }

  /**
   * Get the names of all currently blocked tasks.
   */
  getBlockedTasks(): string[] {
    return Array.from(this.blockedTasks);
  }

  /**
   * Get the tasks this master can currently assign: excludes blocked tasks, and - when a
   * player context is given - also excludes tasks whose Slayer level, combat level, skill,
   * quest, or unlock requirements the player doesn't yet meet. A boosted Slayer level never
   * unlocks a task; pass the player's base level.
   * @param {SlayerAssignmentContext} [context] - The requesting player's stats/unlocks. When
   *  omitted, requirement eligibility isn't checked (only the block list is applied).
   */
  getAvailableTasks(context?: SlayerAssignmentContext): Task[] {
    return this.tasks.filter(task => {
      if (this.isTaskBlocked(task.getName())) return false;
      if (!context) return true;
      return meetsRequirements(task.getRequirements(), context);
    });
  }

  /**
   * Get the total weight of tasks
   */
  getTotalWeight(): number {
    return this.totalWeight;
  }

  /**
   * Get Name of Slayer Master
   */
  getName(): string {
    return this.name;
  }

  /**
   * Get Tasks
   */
  getTasks(): Task[] {
    return this.tasks;
  }

  toString(): string {
    return `SlayerMaster { name: ${this.name}, location: ${this.location}, tasks: ${this.tasks.length}, totalWeight: ${this.totalWeight} }`;
  }
}

export { SlayerMaster };
