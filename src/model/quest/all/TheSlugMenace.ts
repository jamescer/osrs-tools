import { Quest, QuestStatus } from '../Quest';
import { QuestRequirement, LevelRequirement } from '../../Requirement';
import { Skill } from '../../account/Skill';

const TheSlugMenace: Quest = {
  id: 0,
  name: 'The Slug Menace',
  members: true,
  difficulty: 'Intermediate',
  length: 'Medium',
  requirements: [
    new QuestRequirement('Sea Slug'),
    new QuestRequirement('Wanted!'),
    new QuestRequirement('The Lost Tribe'),
    new LevelRequirement('Crafting', 30, false),
    new LevelRequirement('Runecraft', 30, false),
    new LevelRequirement('Slayer', 30, false),
    new LevelRequirement('Thieving', 30, false),
  ],
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'theSlugMenace',
  url: 'https://oldschool.runescape.wiki/w/The_Slug_Menace',
  series: 'Sea Slug',
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

export default TheSlugMenace;
