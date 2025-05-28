import { Quest, QuestStatus } from '../Quest';
import { QuestRequirement, LevelRequirement } from '../../Requirement';
import { Skill } from '../../account/Skill';

const TaiBwoWannaiTrio: Quest = {
  id: 0,
  name: 'Tai Bwo Wannai Trio',
  members: true,
  difficulty: 'Experienced',
  length: 'Medium',
  requirements: [
    new QuestRequirement('Jungle Potion'),
    new LevelRequirement('Cooking', 30, false),
    new LevelRequirement('Fishing', 15, false),
    new LevelRequirement('Agility', 15, false),
  ],
  questPoints: 2,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'taiBwoWannaiTrio',
  url: 'https://oldschool.runescape.wiki/w/Tai_Bwo_Wannai_Trio',
  series: 'Karamja',
  age: '',
  difficultyLevel: 'Experienced',
  officialDifficulty: 'Experienced',
  officialLength: 'Medium',
  officialAge: '',
  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [],
    questPoints: 2,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default TaiBwoWannaiTrio;
