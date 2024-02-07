import { Task } from './Task';

class SlayerMaster {
    name: string;
    totalWeight: number;
    tasks: Task[];

    constructor({ name, assignments, totalWeight }: { name: string; assignments: any[]; totalWeight: number }) {
        this.name = name;
        this.totalWeight = totalWeight;
        this.tasks = this.initializeSlayerTasks(assignments);
    }

    /**
     * Generate the default tasks
     * TODO implement functionality to limit or implement options to change task returns
     * @param {Integer} amount Amount of tasks to generate
     */
    initializeSlayerTasks(assignments: any[]): Task[] {
        const newTasks: Task[] = [];
        for (const assignment of assignments) {
            // newTasks.push(new Task(assignment));  TODO
        }
        return newTasks;
    }

    /**
     * Generate tasks
     * @param {Integer} amount Amount of tasks to generate
     */
    generateTasks(amount: number): Task[] {
        const tasksToReturn: Task[] = [];
        for (let u = 0; u < amount; u++) {
            tasksToReturn.push(this.getRandomTask());
        }
        return tasksToReturn;
    }

    /**
     * Get a random task from this master
     */
    getRandomTask(): Task {
        return this.tasks[Math.floor(Math.random() * this.tasks.length)];
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