import { LevelRequirement } from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const TheGolem: Quest = {
  age: 'Fifth Age',
  description: 'Deep in the desert, an ancient clay golem forever paces the ruins of Uzer. Uncover the secret of the lost city and put the golem to rest.',
  difficulty: QuestDifficulty.Intermediate,
  id: 112,
  length: QuestLength.Short,
  members: true,
  miniquest: false,
  name: 'The Golem',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new LevelRequirement(Skill.Crafting, 20, true),
    new LevelRequirement(Skill.Thieving, 25, true),
  ],
  rewards: {
    areas: [],
    experience: [
      { amount: 1000, skill: Skill.Thieving },
      { amount: 1000, skill: Skill.Crafting },
    ],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [],
  },
  series: null,
  shortName: 'theGolem',

  startLocation: 'Clay golem, Ruins of Uzer (east of Shantay Pass)',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/The_Golem',
};

export default TheGolem;
