import { LevelRequirement, QuestRequirement, Requirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const KingsRansom: Quest = {
  description: '',
  difficulty: QuestDifficulty.Experienced,
  id: 0,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  age: '',
  name: "King's Ransom",
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  requirements: [
    new QuestRequirement("Black Knights' Fortress"),
    new QuestRequirement('Holy Grail'),
    new QuestRequirement('Murder Mystery'),
    new QuestRequirement('One Small Favour'),
    new LevelRequirement('Magic', 45, false),
    new LevelRequirement('Defence', 65, true),
  ],
  recommendedSkills: {},
  series: 'Camelot (#3)',
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
  startLocation: '',

  shortName: 'kingsRansom',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/King%27s_Ransom',
};

export default KingsRansom;
