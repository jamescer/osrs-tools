import { Quest, QuestStatus } from '../Quest';
import { LevelRequirement } from '../../Requirement';
import { Skill } from '../../account/Skill';

const ZogreFleshEaters: Quest = {
  id: 0,
  name: 'Zogre Flesh Eaters',
  members: true,
  difficulty: 'Intermediate',
  length: 'Medium',
  requirements: [
    new LevelRequirement('Herblore', 8, false),
    new LevelRequirement('Smithing', 4, false),
    new LevelRequirement('Ranged', 30, false),
  ],
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'zogreFleshEaters',
  url: 'https://oldschool.runescape.wiki/w/Zogre_Flesh_Eaters',
  series: 'Ogre',
  age: '',
  difficultyLevel: 'Intermediate',
  officialDifficulty: 'Intermediate',
  officialLength: 'Medium',
  officialAge: '',
  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [],
    questPoints: 1,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default ZogreFleshEaters;
