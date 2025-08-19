import { Quest, QuestStatus } from '../Quest';
import { LevelRequirement } from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';

const TheGiantDwarf: Quest = {
  id: 0,
  name: 'The Giant Dwarf',
  members: true,
  difficulty: QuestDifficulty.Intermediate,
  length: QuestLength.Medium,
  requirements: [
    new LevelRequirement('Firemaking', 16, false),
    new LevelRequirement('Thieving', 14, false),
    new LevelRequirement('Crafting', 14, false),
  ],
  questPoints: 2,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'theGiantDwarf',
  url: 'https://oldschool.runescape.wiki/w/The_Giant_Dwarf',
  series: 'Rise of the Red Axe',
  age: '',

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

export default TheGiantDwarf;
