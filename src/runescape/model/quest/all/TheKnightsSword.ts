import { LevelRequirement } from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const TheKnightsSword: Quest = {
  age: 'Fifth Age',
  description: 'Help Sir Vyvin\'s squire recover a lost sword by forging a perfect replica using rare blurite ore from the Ice Queen\'s lair.',
  
  difficulty: QuestDifficulty.Novice,
  id: 116,
  length: QuestLength.Short,
  members: false,
  miniquest: false,
  name: "The Knight's Sword",
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new LevelRequirement(Skill.Mining, 10, false),
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
  shortName: 'theKnightsSword',

  startLocation: 'Squire, Falador',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/The_Knight%27s_Sword',
};

export default TheKnightsSword;
