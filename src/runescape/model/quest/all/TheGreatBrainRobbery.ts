import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

/**
 * The Great Brain Robbery quest data
 * @author James Cerniglia
 * @see https://oldschool.runescape.wiki/w/The_Great_Brain_Robbery for quest details and requirements
 */
const TheGreatBrainRobbery: Quest = {
  age: 'Fifth Age',
  description:
    "Travel to the island of Mos Le'Harmless and uncover a mad scientist plot involving mind control and theft of consciousness. Stop the nefarious experiments.",
  difficulty: QuestDifficulty.Experienced,
  id: 114,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: 'The Great Brain Robbery',
  questPoints: 2,
  recommendations: [
    { name: "Boat ticket to Mos Le'Harmless", type: 'item' },
    { name: 'Combat equipment', type: 'item' },
    { name: 'Food', type: 'item' },
  ],
  recommendedPrayers: ['Protect from Melee', 'Protect from Missiles'],
  recommendedSkills: {
    Combat: 50,
  },
  requirements: [
    new QuestRequirement('Creature of Fenkenstrain'),
    new QuestRequirement('Cabin Fever'),
    new LevelRequirement(Skill.Crafting, 16, false),
    new LevelRequirement(Skill.Construction, 30, false),
    new LevelRequirement(Skill.Prayer, 50, false),
  ],
  rewards: {
    areas: ["Mos Le'Harmless"],
    experience: [
      { amount: 6000, skill: Skill.Prayer },
      { amount: 3000, skill: Skill.Crafting },
      { amount: 2000, skill: Skill.Construction },
    ],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 2,
    unlocks: [
      {
        description:
          'Barrelchest anchor (To repair your barrelchest anchor, return to Mos Le\'Harmless and make sure you have a book o\' piracy in your inventory; then, go to the docks south of the bank and talk to "Smith." He can fix your anchor for 230,000 coins.)',
      },
    ],
  },
  series: 'Pirate',
  shortName: 'theGreatBrainRobbery',

  startLocation: "Brother Tranquility, Mos Le'Harmless",
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/The_Great_Brain_Robbery',
};

export default TheGreatBrainRobbery;
