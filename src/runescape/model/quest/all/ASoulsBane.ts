import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const ASoulsBane: Quest = {
  age: 'Fifth Age',
  description:
    "Help a father rescue his son Tolna from a rift in the ground near Tolna's farm, fighting the monsters manifested from Tolna's tormented mind.",
  difficulty: QuestDifficulty.Novice,
  id: 4,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: "A Soul's Bane",
  questPoints: 1,
  recommendations: [
    {
      name: 'Food',
      note: 'Useful for low-level players.',
      type: 'item',
    },
    {
      name: 'Energy potions',
      note: 'Useful for running between locations.',
      type: 'tip',
    },
  ],

  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
  rewards: {
    areas: ['The Rift'],
    experience: [
      { amount: 500, skill: Skill.Defence },
      { amount: 500, skill: Skill.Hitpoints },
    ],
    items: [{ name: 'Ability to enter the Rift' }],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [{ description: 'Ability to enter the Rift freely' }],
  },

  series: null,

  shortName: 'aSoulsBane',

  startLocation: "Tolna's rift, south of Varrock",

  // Not specified in JSON
  status: QuestStatus.NotStarted,
  // Not specified in JSON
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/A_Soul%27s_Bane',
};

export default ASoulsBane;
