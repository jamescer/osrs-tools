import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

/**
 * Reference: https://oldschool.runescape.wiki/w/Current_Affairs
 */

const CurrentAffairs: Quest = {
  age: 'Fifth Age',
  description: 'Help Arhein get past some political red tape and unlock the current duck, a useful Sailing tool.',
  difficulty: QuestDifficulty.Novice,
  id: 21,
  length: QuestLength.Short,
  members: true,
  miniquest: false,
  name: 'Current Affairs',
  questPoints: 1,
  recommendations: [
    {
      name: 'Highly recommended: A boat docked at the Catherby docks - you will be required to sail nearby at the end of the quest',
      type: 'tip',
    },
  ],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement('Pandemonium'),
    new LevelRequirement(Skill.Sailing, 22, false),
    new LevelRequirement(Skill.Fishing, 10, false),
  ],
  rewards: {
    experience: [
      { amount: 1400, skill: Skill.Sailing },
      { amount: 1000, skill: Skill.Fishing },
    ],
    items: [
      // 'The current duck',
      //  'The mayor of Catherby',
      //  '25 sawmill coupon (oak plank)'
    ],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [{ description: 'Access to Sea charting/Current' }],
  },
  shortName: 'currentaffairs',
  startLocation: 'Catherby docks - speak to Arhein',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Current_Affairs',
};

export default CurrentAffairs;
