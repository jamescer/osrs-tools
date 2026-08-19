import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const SwanSong: Quest = {
  age: 'Fifth Age',
  description: 'Help the Piscatoris Fishing Colony defend itself against a merciless sea troll invasion.',
  difficulty: QuestDifficulty.Master,
  id: 102,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: 'Swan Song',
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement('One Small Favour'),
    new LevelRequirement(Skill.Magic, 66, false),
    new LevelRequirement(Skill.Cooking, 62, false),
    new LevelRequirement(Skill.Fishing, 62, false),
    new LevelRequirement(Skill.Smithing, 45, false),
    new LevelRequirement(Skill.Firemaking, 42, false),
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
  series: null,
  shortName: 'swanSong',

  startLocation: 'Herman Carrocк, Piscatoris Fishing Colony',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Swan_Song',
};

export default SwanSong;
