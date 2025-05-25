import { Requirement } from "../Requirement";
import { Task } from "./Task";

// A Class that represents an assignment of a task to a player.
// An assignment is a specific instance of a task, with a specific quantity and requirements.
// The assignment is the actual task given to a player, which is based on the Task.
export class Assignment {
  name: string;
  quantity: number;
  requirements: Requirement[];
  extendedAmountMin?: number | null;
  extendedAmountMax?: number | null;

  constructor(
    name: string,
    quantity: number,
    requirements: Requirement[],
    extendedAmountMin?: number | null,
    extendedAmountMax?: number | null,
  ) {
    this.name = name;
    this.quantity = quantity;
    this.requirements = requirements;
    this.extendedAmountMin = extendedAmountMin ?? null;
    this.extendedAmountMax = extendedAmountMax ?? null;
  }
  /**
   * Get the task name
   */
  getName(): string {
    return this.name;
  }

  /**
   * Get the quantity of the task
   */
  getQuantity(): number {
    return this.quantity;
  }
}
