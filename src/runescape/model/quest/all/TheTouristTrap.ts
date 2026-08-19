import { Skill } from '../../account/Skill';
import { LevelRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const TheTouristTrap: Quest = {
  age: 'Fifth Age',
  description: 'Go undercover in the Desert Mining Company\'s slave camp to rescue a mercenary\'s kidnapped daughter.',
  
  difficulty: QuestDifficulty.Intermediate,
  id: 122,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: 'The Tourist Trap',
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [new LevelRequirement(Skill.Smithing, 10, false), new LevelRequirement(Skill.Thieving, 20, false)],
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
  shortName: 'theTouristTrap',

  startLocation: 'Irena, south of Al Kharid',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/The_Tourist_Trap',
};

export default TheTouristTrap;
