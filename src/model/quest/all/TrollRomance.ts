import { Quest, QuestStatus } from '../Quest';
import { QuestRequirement, LevelRequirement } from '../../Requirement';
import { Skill } from '../../account/Skill';

const TrollRomance: Quest = {
  id: 0,
  name: 'Troll Romance',
  members: true,
  difficulty: 'Intermediate',
  length: 'Medium',
  requirements: [
    new QuestRequirement('Death Plateau'),
    new LevelRequirement('Agility', 28, false),
  ],
  questPoints: 2,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'trollRomance',
  url: 'https://oldschool.runescape.wiki/w/Troll_Romance',
  series: 'Troll',
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
    questPoints: 2,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default TrollRomance;
