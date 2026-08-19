import { Skill } from '../../account/Skill';
import { LevelRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const TheGiantDwarf: Quest = {
  age: 'Fifth Age',
  description: 'Represent the Consortium as an ambassador to the giant dwarves and influence the political climate of Keldagrim.',
  difficulty: QuestDifficulty.Intermediate,
  id: 111,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: 'The Giant Dwarf',
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new LevelRequirement(Skill.Firemaking, 16, false),
    new LevelRequirement(Skill.Thieving, 14, false),
    new LevelRequirement(Skill.Crafting, 14, false),
  ],
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
  series: 'Rise of the Red Axe',
  shortName: 'theGiantDwarf',

  startLocation: 'Keldagrim',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/The_Giant_Dwarf',
};

export default TheGiantDwarf;
