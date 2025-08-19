import { Quest, QuestStatus } from '../Quest';
import { QuestRequirement, LevelRequirement } from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';

const SlugMenace: Quest = {
  id: 0,
  name: 'Slug Menace',
  members: true,
  difficulty: QuestDifficulty.Intermediate,
  length: QuestLength.Medium,
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
  shortName: 'slugMenace',
  url: 'https://oldschool.runescape.wiki/w/Slug_Menace',
  series: 'Sea Slug',
  age: '',

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

export default SlugMenace;
