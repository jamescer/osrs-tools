import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const TheSlugMenace: Quest = {
  age: 'Fifth Age',
  description: 'Investigate the sea slug infestation spreading from Witchaven and stop it from reaching Kandarin\'s nobility.',
  difficulty: QuestDifficulty.Intermediate,
  id: 119,
  length: QuestLength.MediumLong,
  members: true,
  miniquest: false,
  name: 'The Slug Menace',
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement('Sea Slug'),
    new QuestRequirement('Wanted!'),
    new QuestRequirement('The Lost Tribe'),
    new LevelRequirement(Skill.Crafting, 30, false),
    new LevelRequirement(Skill.Runecraft, 30, false),
    new LevelRequirement(Skill.Slayer, 30, false),
    new LevelRequirement(Skill.Thieving, 30, false),
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
  series: 'Temple Knight',
  shortName: 'theSlugMenace',

  startLocation: 'Maledict, Witchaven',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/The_Slug_Menace',
};

export default TheSlugMenace;
