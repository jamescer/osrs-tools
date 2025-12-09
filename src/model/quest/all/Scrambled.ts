// URL: https://oldschool.runescape.wiki/w/Scrambled!

import { Skill } from '../../account/Skill';
import { Quest, QuestStatus } from '../../quest/Quest';
import { QuestDifficulty, QuestLength } from '../enums';

const Scrambled: Quest = {
  age: '',
  description: 'Help the Egg Shrine priest recover the lost eggs and restore the shrine.',
  difficulty: QuestDifficulty.Novice,
  id: 0,
  length: QuestLength.VeryShort,
  members: false,
  miniquest: false,
  name: 'Scrambled!',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
  rewards: {
    areas: ['Egg Shrine'],
    experience: [{ amount: 100, skill: Skill.Cooking }],
    items: [{ name: 'Egg Shrine Token', quantity: 1 }],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [{ description: 'Access to the Egg Shrine' }],
  },
  series: null,
  shortName: 'scrambled',
  startLocation: 'Egg Shrine, south of Falador',
  status: QuestStatus.NotStarted,
  steps: [
    'Speak to the Egg Shrine priest south of Falador.',
    'Collect the lost eggs scattered around the area.',
    'Return the eggs to the priest.',
    'Restore the Egg Shrine.',
  ],
  url: 'https://oldschool.runescape.wiki/w/Scrambled!',
};

export default Scrambled;
