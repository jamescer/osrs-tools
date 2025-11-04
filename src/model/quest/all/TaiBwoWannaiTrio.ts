import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const TaiBwoWannaiTrio: Quest = {
  description: '',
  difficulty: QuestDifficulty.Experienced,
  id: 0,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  age: '',
  name: 'Tai Bwo Wannai Trio',
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  requirements: [
    new QuestRequirement('Jungle Potion'),
    new LevelRequirement('Cooking', 30, false),
    new LevelRequirement('Fishing', 15, false),
    new LevelRequirement('Agility', 15, false),
  ],
  recommendedSkills: {},
  series: 'Karamja',
  rewards: {
    areas: [],
    experience: [],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 2,
    unlocks: [],
  },
  startLocation: '',

  shortName: 'taiBwoWannaiTrio',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Tai_Bwo_Wannai_Trio',
};

export default TaiBwoWannaiTrio;
