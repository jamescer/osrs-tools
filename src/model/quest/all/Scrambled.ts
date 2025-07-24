// URL: https://oldschool.runescape.wiki/w/Scrambled!

import { Quest, QuestStatus } from '../../quest/Quest';
import { Requirement } from '../../Requirement';
import { Skill } from '../../account/Skill';

const Scrambled: Quest = {
  id: 0,
  name: 'Scrambled!',
  members: false,
  difficulty: 'Novice',
  length: 'Very Short',
  requirements: [],
  questPoints: 1,
  startLocation: 'Egg Shrine, south of Falador',
  description: 'Help the Egg Shrine priest recover the lost eggs and restore the shrine.',
  steps: [
    'Speak to the Egg Shrine priest south of Falador.',
    'Collect the lost eggs scattered around the area.',
    'Return the eggs to the priest.',
    'Restore the Egg Shrine.'
  ],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'scrambled',
  url: 'https://oldschool.runescape.wiki/w/Scrambled!',
  series: null,
  age: '',
  difficultyLevel: 'Novice',
  officialDifficulty: 'Novice',
  officialLength: 'Very Short',
  officialAge: '',
  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [
      { skill: Skill.Cooking, amount: 100 }
    ],
    questPoints: 1,
    items: [
      { name: 'Egg Shrine Token', quantity: 1 }
    ],
    areas: ['Egg Shrine'],
    unlocks: [
      { description: 'Access to the Egg Shrine' }
    ],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default Scrambled;