import { QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const TheFrozenDoor: Quest = {
  age: 'Fifth Age',
  description:
    'Investigate a mysterious frozen door on Lunar Isle and discover what lies behind it.',
  difficulty: QuestDifficulty.Intermediate,
  id: 208,
  length: QuestLength.Short,
  members: true,
  miniquest: true,
  name: 'The Frozen Door',
  questPoints: 0,
  recommendations: [
    { name: 'Seal of passage', type: 'item', note: 'Required to stay on Lunar Isle' },
  ],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement('Lunar Diplomacy'),
  ],
  rewards: {
    areas: [],
    experience: [],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 0,
    unlocks: [
      { description: 'Access to the area behind the Frozen Door on Lunar Isle' },
    ],
  },
  series: 'Fremennik',
  shortName: 'theFrozenDoor',
  startLocation: 'Lunar Isle, near the bank',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/The_Frozen_Door',
};

export default TheFrozenDoor;
