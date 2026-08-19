import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

/**
 * Reference: https://oldschool.runescape.wiki/w/Pandemonium
 */

const Pandemonium: Quest = {
  age: 'Fifth Age',
  description: 'Set sail on your first voyage aboard the Pandemonium and learn the basics of the Sailing skill.',
  difficulty: QuestDifficulty.Novice,
  id: 79,
  length: QuestLength.Short,
  members: true,
  miniquest: false,
  name: 'Pandemonium',
  questPoints: 1,
  recommendations: [
    { name: 'Fast travel to Port Sarim to start the quest; Teleport to House (Rimmington)', type: 'tip' },
    { name: 'skills necklace to Crafting Guild', type: 'tip' },
    { name: 'Rat Pits grouping teleport', type: 'tip' },
    { name: 'amulet of glory to Draynor Village', type: 'tip' },
    { name: "or explorer's ring 2-4", type: 'tip' },
  ],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
  rewards: {
    areas: ['The Pandemonium'],
    experience: [{ amount: 400, skill: Skill.Sailing }],
    items: [
      // 'A raft',
      // '25 sawmill coupon (wood plank)',
      // '2 repair kits',
      // 'A spyglass',
    ],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [{ description: 'Access to the Sailing skill' }],
  },
  series: null,
  shortName: 'pandemonium',
  startLocation: "Wizard Borann, Wizards' Tower",
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Pandemonium',
};

export default Pandemonium;
