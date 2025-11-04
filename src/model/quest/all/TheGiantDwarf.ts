import { Skill } from '../../account/Skill';
import { LevelRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const TheGiantDwarf: Quest = {
  description: '',
  difficulty: QuestDifficulty.Intermediate,
  id: 0,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  age: '',
  name: 'The Giant Dwarf',
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  requirements: [
    new LevelRequirement('Firemaking', 16, false),
    new LevelRequirement('Thieving', 14, false),
    new LevelRequirement('Crafting', 14, false),
  ],
  recommendedSkills: {},
  series: 'Rise of the Red Axe',
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

  shortName: 'theGiantDwarf',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/The_Giant_Dwarf',
};

export default TheGiantDwarf;
