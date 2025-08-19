import { Quest } from '../types';
import { QuestDifficulty, QuestLength, QuestStatus } from '../enums';
import { LevelRequirement } from '../../Requirement';
export const AHandInTheSand: Quest = {
  id: 0,
  name: 'A Hand in the Sand',
  members: true,
  difficulty: QuestDifficulty.Intermediate,
  length: QuestLength.Medium,
  requirements: [
    new LevelRequirement('Crafting', 49, false),
    new LevelRequirement('Thieving', 40, false),
  ],
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'aHandInTheSand',
  url: 'https://oldschool.runescape.wiki/w/A_Hand_in_the_Sand',
  series: null,
  age: '',

  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [
      { skill: 'Crafting', amount: 9000 },
      { skill: 'Thieving', amount: 1000 },
    ],
    questPoints: 1,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};
