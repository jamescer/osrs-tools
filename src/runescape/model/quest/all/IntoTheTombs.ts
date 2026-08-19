import { QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const IntoTheTombs: Quest = {
  age: 'Fifth Age',
  description:
    'Investigate the ancient tombs beneath the Kharidian Desert and uncover the secrets hidden within.',
  difficulty: QuestDifficulty.Master,
  id: 213,
  length: QuestLength.Short,
  members: true,
  miniquest: true,
  name: 'Into the Tombs',
  questPoints: 0,
  recommendations: [
    { name: 'Combat equipment', type: 'item' },
    { name: 'Food and potions', type: 'item' },
  ],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement('Beneath Cursed Sands'),
  ],
  rewards: {
    areas: ['Tombs of Amascut (Raid)'],
    experience: [],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 0,
    unlocks: [
      { description: 'Access to the Tombs of Amascut raid', url: 'https://oldschool.runescape.wiki/w/Tombs_of_Amascut' },
    ],
  },
  series: 'Desert',
  shortName: 'intoTheTombs',
  startLocation: 'Speak to Maisa in the Ruins of Unkah',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Into_the_Tombs',
};

export default IntoTheTombs;
