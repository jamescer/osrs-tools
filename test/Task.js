const { Task, KonarTask } = require('../Task.js');
const {
    SlayerData,
    konar,
    vannaka,
    nieve,
    mazchna,
    turael,
    krystilia
} = require('../data/slayerData.js');
const { SlayerMaster } = require('../model/SlayerMaster.js');

var testTask = {
    name: 'Birds',
    amountMin: 15,
    amountMax: 50,
    unlockRequirements: {
        combat: 0
    },
    alternatives: [
        'Chicken',
        'Mounted terrorbird',
        'Terrorbird',
        'Rooster',
        'Chompy bird',
        'Seagull',
        'Penguin'
    ],
    weight: 6
};

var kTask = {
    name: 'Adamant dragons',
    locations: ['Lithkren Vault'],
    amountMin: 3,
    amountMax: 6,
    extendedAmountMin: 20,
    extendedAmountMax: 30,
    unlockRequirements: {
        quests: ['Dragon slayer II']
    },
    alternatives: ['None'],
    weight: 5
};

var birds = new Task(testTask);
console.log('===================');
console.log(birds);
console.log('===================');
var konTaskEx = new KonarTask(kTask);

console.log('===================');
console.log(konTaskEx);
console.log('===================');