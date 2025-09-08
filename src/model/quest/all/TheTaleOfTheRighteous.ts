import { Quest, QuestStatus } from '../Quest';
import { QuestRequirement, LevelRequirement } from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';

const TheTaleOfTheRighteous: Quest = {
  id: 0,
  name: 'The Tale of the Righteous',
  members: true,
  difficulty: QuestDifficulty.Novice,
  length: QuestLength.Short,
  requirements: [
    new QuestRequirement('Client of Kourend'),
    new LevelRequirement('Agility', 16, false),
  ],
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'theTaleOfTheRighteous',
  url: 'https://oldschool.runescape.wiki/w/The_Tale_of_the_Righteous',
  series: 'Great Kourend',
  age: '',
  recommendations: [],
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

export default TheTaleOfTheRighteous;
