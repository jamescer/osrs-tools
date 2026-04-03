import { Task } from './Task';
import { SlayerMasterConfig } from './types';

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
  minimumCombatLevel: number = 0; // Level requirement to access this Slayer Master (optional, can be set later if needed)
  tasks: Task[]; // Array of tasks assigned to this Slayer Master. This holds the actual tasks that players can be assigned to kill.
  wikiUrl: string = ''; // URL for the Slayer Master (optional, can be set later if needed)
  taskPoints: Record<number, number>; // Mapping of task intervals to points
  eliteDiaryTaskPoints?: Record<number, number>; // Mapping of task intervals to points

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
  ) {
    // Handle options object pattern (modern API)
    if (typeof nameOrOptions === 'object' && !Array.isArray(nameOrOptions)) {
      const options = nameOrOptions as SlayerMasterConfig;
      this.name = options.name;
      this.tasks = options.tasks;
      this.location = options.location || '';
      this.minimumCombatLevel = options.minimumCombatLevel || 0;
      this.wikiUrl = options.wikiUrl || '';
      this.taskPoints = options.pointsTable || {};
      this.eliteDiaryTaskPoints = options.eliteDiaryTaskPoints;
    } else {
      // Handle positional arguments pattern (legacy API)
      this.name = nameOrOptions as string;
      this.tasks = tasks || [];
      this.location = location || '';
      this.minimumCombatLevel = levelRequirement || 0;
      this.wikiUrl = url || '';
      this.taskPoints = taskPoints || {};
      this.eliteDiaryTaskPoints = eliteDiaryTaskPoints;
    }

    // Initialize tasks
    this.tasks.forEach(task => {
      task.weight = task.weight || 0; // Default weight to 0 if not provided
    });
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
    throw new Error('Method not implemented.');
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
   * Get the wiki URL of the Slayer Master
   */
  getWikiUrl(): string {
    return this.wikiUrl;
  }

  /**
   * Get a random task based on the weighting system of the tasks.
   * Tasks with higher weights have a higher chance of being selected.
   * @returns {Task | null} A randomly selected task or null if no tasks are available.
   */
  getRandomTask(): Task | null {
    if (this.tasks.length === 0) return null; // Return null if there are no tasks

    const randomWeight = Math.random() * this.totalWeight; // Generate a random number between 0 and totalWeight
    let cumulativeWeight = 0;

    for (const task of this.tasks) {
      cumulativeWeight += task.weight || 0; // Add the task's weight to the cumulative weight
      if (randomWeight <= cumulativeWeight) {
        return task; // Return the task if the random weight falls within its range
      }
    }

    return null; // Fallback in case no task is selected (shouldn't happen if weights are correct)
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

  /**
   * toString function
   */
  toString(): string {
    return `SlayerMaster :) WIP SlayerMaster:{\nname: ${this.name}\n}`;
  }
}

export { SlayerMaster };
