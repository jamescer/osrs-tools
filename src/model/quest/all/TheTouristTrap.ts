import { Quest, QuestStatus } from '../Quest';
import { LevelRequirement } from '../../Requirement';
import { Skill } from '../../account/Skill';

const TheTouristTrap: Quest = {
  id: 0,
  name: 'The Tourist Trap',
  members: true,
  difficulty: 'Intermediate',
  length: 'Medium',
  requirements: [
    new LevelRequirement('Smithing', 10, false),
    new LevelRequirement('Thieving', 20, false),
  ],
  questPoints: 2,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'theTouristTrap',
  url: 'https://oldschool.runescape.wiki/w/The_Tourist_Trap',
  series: null,
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

export default TheTouristTrap;
