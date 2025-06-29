import { Quest, QuestStatus } from '../Quest';
import { QuestRequirement, LevelRequirement } from '../../Requirement';
import { Skill } from '../../account/Skill';

const Regicide: Quest = {
  id: 0,
  name: 'Regicide',
  members: true,
  difficulty: 'Master',
  length: 'Long',
  requirements: [
    new QuestRequirement('Underground Pass'),
    new LevelRequirement('Agility', 56, false),
  ],
  questPoints: 2,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'regicide',
  url: 'https://oldschool.runescape.wiki/w/Regicide',
  series: 'Elf',
  age: '',
  difficultyLevel: 'Master',
  officialDifficulty: 'Master',
  officialLength: 'Long',
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

export default Regicide;
