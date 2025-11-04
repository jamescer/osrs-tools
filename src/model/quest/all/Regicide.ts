import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const Regicide: Quest = {
  description: '',
  difficulty: QuestDifficulty.Master,
  id: 0,
  length: QuestLength.Long,
  members: true,
  miniquest: false,
  age: '',
  name: 'Regicide',
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  requirements: [
    new QuestRequirement('Underground Pass'),
    new LevelRequirement('Agility', 56, false),
  ],
  recommendedSkills: {},
  series: 'Elf',
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

  shortName: 'regicide',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Regicide',
};

export default Regicide;
