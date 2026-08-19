import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const TheQueenOfThieves: Quest = {
  age: 'Fifth Age',
  description: 'Infiltrate the criminal underworld of Great Kourend\'s port to uncover the true identity of the notorious Queen of Thieves.',
  
  difficulty: QuestDifficulty.Novice,
  id: 118,
  length: QuestLength.Short,
  members: true,
  miniquest: false,
  name: 'The Queen of Thieves',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [new QuestRequirement('Client of Kourend'), new LevelRequirement(Skill.Thieving, 20, false)],
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
  series: 'Great Kourend',
  shortName: 'theQueenOfThieves',

  startLocation: 'Tomas Lawry, Port Piscarilius, Great Kourend',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/The_Queen_of_Thieves',
};

export default TheQueenOfThieves;
