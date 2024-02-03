class Task {
  constructor(
    name,
    weight,
    amountMin,
    amountMax,
    unlockRequirements,
    alternatives
  ) {
    this.name = name;
    this.weight = weight;
    this.amountMin = amountMin;
    this.amountMax = amountMax;
    this.unlockRequirements = unlockRequirements;
    this.alternatives = alternatives;
  }

  getName() {
    return this.name;
  }

  getWeight() {
    return this.weight;
  }

  getAmountMin() {
    return this.amountMin;
  }

  getAmountMax() {
    return this.amountMax;
  }

  getUnlockRequirements() {
    return this.unlockRequirements;
  }

  getAlternatives() {
    return this.alternatives;
  }

  toJSON() {
    return {
      name: this.name,
      weight: this.weight,
      amountMin: this.amountMin,
      amountMax: this.amountMax,
      unlockRequirements: this.unlockRequirements,
      alternatives: this.alternatives,
    };
  }

  /**
   * to string func
   * @todo
   * */
  toString2() {
    return 'Task{ nane:' + this.name + '}';
  }
}

class KonarTask extends Task {
  constructor(
    locations,
  ) {
    super();
    this.locations = locations;
  }

  getLocations() {
    return this.locations;
  }

  toJSON() {
    return {
      name: this.name,
      weight: this.weight,
      amountMin: this.amountMin,
      amountMax: this.amountMax,
      unlockRequirements: this.unlockRequirements,
      alternatives: this.alternatives,
      locations: this.locations,
    };
  }

  /**
   * to string func
   * @todo
   * */
  toString() {
    return 'KonarTask :) WIP';
  }
}

module.exports = exports = { Task, KonarTask };
