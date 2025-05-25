import { Quest, QuestStatus } from '../Quest';
import { LevelRequirement, QuestRequirement, Requirement } from '../../Requirement';

const KingsRansom: Quest = {
  id: 0,
  name: "King's Ransom",
  members: true,
  difficulty: 'Experienced',
  length: 'Medium',
  requirements: [
    new QuestRequirement('Black Knights\' Fortress'),
     new QuestRequirement('Holy Grail'),
     new QuestRequirement('Murder Mystery'),
     new QuestRequirement('One Small Favour'),
     new LevelRequirement('Magic',45,false),
     new LevelRequirement('Defence',65,true)
  ],
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'kingsRansom',
  url: "https://oldschool.runescape.wiki/w/King%27s_Ransom",
  series: 'Camelot (#3)',
  age: '',
  difficultyLevel: 'Experienced',
  officialDifficulty: 'Experienced',
  officialLength: 'Medium',
  officialAge: '',
  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: { Defence: 33000, Magic: 5000 },
    questPoints: 1,
    items: [],
    areas: [],
    grants: [],
  },
};

export default KingsRansom;
