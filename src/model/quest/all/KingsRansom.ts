import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const KingsRansom: Quest = {
  age: '',
  description: '',
  difficulty: QuestDifficulty.Experienced,
  id: 0,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: "King's Ransom",
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement("Black Knights' Fortress"),
    new QuestRequirement('Holy Grail'),
    new QuestRequirement('Murder Mystery'),
    new QuestRequirement('One Small Favour'),
    new LevelRequirement('Magic', 45, false),
    new LevelRequirement('Defence', 65, true),
  ],
  rewards: {
    areas: [],
    experience: [
      { amount: 33000, skill: 'Defence' },
      { amount: 5000, skill: 'Magic' },
    ],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [],
  },
  series: 'Camelot (#3)',
  shortName: 'kingsRansom',

  startLocation: '',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/King%27s_Ransom',
};

export default KingsRansom;
