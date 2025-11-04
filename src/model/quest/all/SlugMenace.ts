import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const SlugMenace: Quest = {
  description: '',
  difficulty: QuestDifficulty.Intermediate,
  id: 0,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  age: '',
  name: 'Slug Menace',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  requirements: [
    new QuestRequirement('Sea Slug'),
    new QuestRequirement('Wanted!'),
    new QuestRequirement('The Lost Tribe'),
    new LevelRequirement('Crafting', 30, false),
    new LevelRequirement('Runecraft', 30, false),
    new LevelRequirement('Slayer', 30, false),
    new LevelRequirement('Thieving', 30, false),
  ],
  recommendedSkills: {},
  series: 'Sea Slug',
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
  startLocation: '',

  shortName: 'slugMenace',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Slug_Menace',
};

export default SlugMenace;
