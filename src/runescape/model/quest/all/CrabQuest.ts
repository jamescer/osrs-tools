import { Skill } from '../../account/Skill';
import { LevelRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

/**
 * Reference: https://oldschool.runescape.wiki/w/Crab_Quest
 */

const CrabQuest: Quest = {
  age: 'Fifth Age',
  description:
    'Help a lonely crab organise a traditional ceremony and find a mate, gathering instruments, building sand nests, and convincing other crabs to become ceremonial leaders.',
  difficulty: QuestDifficulty.Intermediate,
  id: 1054,
  length: QuestLength.Short,
  members: true,
  miniquest: false,
  name: 'Crab Quest',
  questPoints: 1,
  recommendations: [{ name: '9 empty inventory slots', type: 'item' }],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [new LevelRequirement(Skill.Sailing, 40, false), new LevelRequirement(Skill.Fishing, 30, false)],
  rewards: {
    areas: [],
    experience: [
      { amount: 10000, skill: Skill.Sailing },
      { amount: 3000, skill: Skill.Fishing },
    ],
    items: [{ name: 'Shell collection', note: 'Unpacks into seven playable musical shells (C, D, E, F, G, A, A#)' }],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [],
  },
  series: null,
  shortName: 'crabQuest',
  startLocation: 'Dognose Island, north-west of The Great Conch',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Crab_Quest',
};

export default CrabQuest;
