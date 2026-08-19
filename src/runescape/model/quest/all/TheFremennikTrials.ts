import { Skill } from '../../account/Skill';
import { LevelRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const TheFremennikTrials: Quest = {
  age: 'Fifth Age',
  description: 'Prove yourself worthy of becoming a Fremennik by completing a series of tests set by the Fremennik people.',
  difficulty: QuestDifficulty.Intermediate,
  id: 110,
  length: QuestLength.Long,
  members: true,
  miniquest: false,
  name: 'The Fremennik Trials',
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new LevelRequirement(Skill.Crafting, 40, false),
    new LevelRequirement(Skill.Fletching, 25, false),
    new LevelRequirement(Skill.Woodcutting, 40, false),
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
  series: 'Fremennik',
  shortName: 'theFremennikTrials',

  startLocation: 'Brundt the Chieftain, Rellekka',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/The_Fremennik_Trials',
};

export default TheFremennikTrials;
