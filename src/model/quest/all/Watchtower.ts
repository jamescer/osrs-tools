import { Quest, QuestStatus } from '../Quest';
import { LevelRequirement } from '../../Requirement';
import { Skill } from '../../account/Skill';

const Watchtower: Quest = {
  id: 0,
  name: 'Watchtower',
  members: true,
  difficulty: 'Experienced',
  length: 'Long',
  requirements: [
    new LevelRequirement('Magic', 15, false),
    new LevelRequirement('Herblore', 14, false),
    new LevelRequirement('Agility', 40, false),
    new LevelRequirement('Thieving', 15, false),
  ],
  questPoints: 4,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'watchtower',
  url: 'https://oldschool.runescape.wiki/w/Watchtower',
  series: null,
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
    questPoints: 2,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default Watchtower;
