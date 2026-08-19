import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const TaiBwoWannaiTrio: Quest = {
  age: 'Fifth Age',
  description: 'Reunite three brothers in the Tai Bwo Wannai jungle by completing a series of tasks for each of them.',
  difficulty: QuestDifficulty.Novice,
  id: 103,
  length: QuestLength.Long,
  members: true,
  miniquest: false,
  name: 'Tai Bwo Wannai Trio',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement('Jungle Potion'),
    new LevelRequirement(Skill.Cooking, 30, false),
    new LevelRequirement(Skill.Fishing, 15, false),
    new LevelRequirement(Skill.Agility, 15, false),
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
  series: null,
  shortName: 'taiBwoWannaiTrio',

  startLocation: 'Timfraku, Tai Bwo Wannai',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Tai_Bwo_Wannai_Trio',
};

export default TaiBwoWannaiTrio;
