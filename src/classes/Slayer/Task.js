'use strict';

class Task {

    constructor(object) {
        this.name = object.name ? object.name : 0;
        this.weight = object.weight ? object.weight : 0;
        this.amountMin = object.amountMin ? object.amountMin : 0;
        this.amountMax = object.amountMax ? object.amountMax : 0;
        this.unlockRequirements = object.unlockRequirements ? object.unlockRequirements : [];
        this.alternatives = object.alternatives ? object.alternatives : [];

    }

    getName() { return this.name; }
    getWeight() { return this.weight; }
    getAmountMin() { return this.amountMin; }
    getAmountMax() { return this.amountMax; }
    getUnlockRequirements() { return this.unlockRequirements; }
    getAlternatives() { return this.alternatives; }


    /**
     * to string func
     * @todo
     * */
    toString() {
        return 'SlayerMaster :) WIP';
    }

}

module.exports = exports = { Task };