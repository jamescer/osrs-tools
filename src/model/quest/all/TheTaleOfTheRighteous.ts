import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const TheTaleOfTheRighteous: Quest = {
  description: '',
  difficulty: QuestDifficulty.Novice,
  id: 0,
  length: QuestLength.Short,
  members: true,
  miniquest: false,
  age: '',
  name: 'The Tale of the Righteous',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  requirements: [
    new QuestRequirement('Client of Kourend'),
    new LevelRequirement('Agility', 16, false),
  ],
  recommendedSkills: {},
  series: 'Great Kourend',
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
  shortName: 'theTaleOfTheRighteous',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/The_Tale_of_the_Righteous',
};

export default TheTaleOfTheRighteous;
