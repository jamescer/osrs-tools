class Task {
    name: string;
    weight: number;
    amountMin: number;
    amountMax: number;
    unlockRequirements: any;
    alternatives: any[];

    constructor(
        name: string,
        weight: number,
        amountMin: number,
        amountMax: number,
        unlockRequirements: any,
        alternatives: any[]
    ) {
        this.name = name;
        this.weight = weight;
        this.amountMin = amountMin;
        this.amountMax = amountMax;
        this.unlockRequirements = unlockRequirements;
        this.alternatives = alternatives;
    }

    getName(): string {
        return this.name;
    }

    getWeight(): number {
        return this.weight;
    }

    getAmountMin(): number {
        return this.amountMin;
    }

    getAmountMax(): number {
        return this.amountMax;
    }

    getUnlockRequirements(): any {
        return this.unlockRequirements;
    }

    getAlternatives(): any[] {
        return this.alternatives;
    }

    toJSON(): any {
        return {
            name: this.name,
            weight: this.weight,
            amountMin: this.amountMin,
            amountMax: this.amountMax,
            unlockRequirements: this.unlockRequirements,
            alternatives: this.alternatives,
        };
    }

    toString(): string {
        return `Task{ name: ${this.name} }`;
    }
}

class KonarTask extends Task {
    locations: any[];

    constructor(locations: any[]) {
        super("", 0, 0, 0, {}, []);
        this.locations = locations;
    }

    getLocations(): any[] {
        return this.locations;
    }

    toJSON(): any {
        const taskJSON = super.toJSON();
        taskJSON["locations"] = this.locations;
        return taskJSON;
    }

    toString(): string {
        return 'KonarTask :) WIP';
    }
}

export { Task, KonarTask };