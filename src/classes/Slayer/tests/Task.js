const { Task } = require('../Task.js');
const {
  SlayerData,
  konar,
  vannaka,
  nieve,
  mazchna,
  turael,
  krystilia,
} = require('../data/slayerData.js');
const { SlayerMaster } = require('../SlayerMaster.js');

var testTask = {
  name: 'Birds',
  amountMin: 15,
  amountMax: 50,
  unlockRequirements: {
    combat: 0,
  },
  alternatives: [
    'Chicken',
    'Mounted terrorbird',
    'Terrorbird',
    'Rooster',
    'Chompy bird',
    'Seagull',
    'Penguin',
  ],
  weight: 6,
};

var kTask = {
  name: 'Adamant dragons',
  locations: ['Lithkren Vault'],
  amountMin: 3,
  amountMax: 6,
  extendedAmountMin: 20,
  extendedAmountMax: 30,
  unlockRequirements: {
    quests: ['Dragon slayer II'],
  },
  alternatives: ['None'],
  weight: 5,
};

// var t = new Task(testTask);
var kt = new Task(kTask);

console.log(kt);
