import { Quest, QuestStatus } from '../Quest';
import { LevelRequirement, QuestRequirement, Requirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';

const KingsRansom: Quest = {
  id: 0,
  name: "King's Ransom",
  members: true,
  difficulty: QuestDifficulty.Experienced,
  length: QuestLength.Medium,
  requirements: [
    new QuestRequirement("Black Knights' Fortress"),
    new QuestRequirement('Holy Grail'),
    new QuestRequirement('Murder Mystery'),
    new QuestRequirement('One Small Favour'),
    new LevelRequirement('Magic', 45, false),
    new LevelRequirement('Defence', 65, true),
  ],
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'kingsRansom',
  url: 'https://oldschool.runescape.wiki/w/King%27s_Ransom',
  series: 'Camelot (#3)',
  age: '',

  recommendations: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [
      { skill: 'Defence', amount: 33000 },
      { skill: 'Magic', amount: 5000 },
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

export default KingsRansom;
