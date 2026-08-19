import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const TrollRomance: Quest = {
  age: 'Fifth Age',
  description: 'Help Ug the troll find a mate by completing a dangerous task to win the heart of Aga.',
  difficulty: QuestDifficulty.Intermediate,
  id: 127,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: 'Troll Romance',
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [new QuestRequirement('Death Plateau'), new LevelRequirement(Skill.Agility, 28, false)],
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
  series: 'Troll',
  shortName: 'trollRomance',

  startLocation: 'Ug, Trollheim',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Troll_Romance',
};

export default TrollRomance;
