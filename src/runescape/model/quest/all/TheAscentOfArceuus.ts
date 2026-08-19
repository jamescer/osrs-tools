import { QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const TheAscentOfArceuus: Quest = {
  age: 'Fifth Age',
  description: 'Help the Arceuus Library by tracking down a thief who has stolen several valuable books and taken refuge in the caverns below.',
  difficulty: QuestDifficulty.Novice,
  id: 104,
  length: QuestLength.Short,
  members: true,
  miniquest: false,
  name: 'The Ascent of Arceuus',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement('Client of Kourend'),
  ],
  rewards: {
    areas: [],
    experience: [],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [],
  },
  series: 'Great Kourend',
  shortName: 'theAscentOfArceuus',

  startLocation: 'Mori, Mount Karuulm',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/The_Ascent_of_Arceuus',
};

export default TheAscentOfArceuus;
