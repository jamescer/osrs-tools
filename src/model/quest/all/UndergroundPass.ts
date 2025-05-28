import { Quest, QuestStatus } from '../Quest';
import { QuestRequirement, LevelRequirement } from '../../Requirement';
import { Skill } from '../../account/Skill';

const UndergroundPass: Quest = {
  id: 0,
  name: 'Underground Pass',
  members: true,
  difficulty: 'Experienced',
  length: 'Long',
  requirements: [
    new QuestRequirement('Biohazard'),
    new LevelRequirement('Ranged', 25, false),
  ],
  questPoints: 5,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'undergroundPass',
  url: 'https://oldschool.runescape.wiki/w/Underground_Pass',
  series: 'Elf',
  age: '',
  difficultyLevel: 'Experienced',
  officialDifficulty: 'Experienced',
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

export default UndergroundPass;
