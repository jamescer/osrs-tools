import { Skill } from '../../account/Skill';
import { QuestRequirement, LevelRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const ATasteOfHope: Quest = {
  age: 'Fifth Age',
  description: 'Infiltrate the Theatre of Blood to rescue captured vampyre slaves and undermine the power of Lord Lowerniel Drakan.',

  difficulty: QuestDifficulty.Experienced,

  id: 6,

  length: QuestLength.Medium,

  members: true,

  miniquest: false,

  // Assign a unique ID if available
  name: 'A Taste of Hope',
  questPoints: 1,
  recommendations: [
    {
      name: 'High combat stats (80+ recommended)',
      note: 'Strong food and potions for boss fights. Consider bringing Prayer potions and high-tier gear.',
      type: 'tip',
    },
    {
      name: 'Prayer potions, high-tier gear',
      note: 'Useful for the final boss fight.',
      type: 'item',
    },
  ],
  recommendedPrayers: ['Protect from Melee', 'Protect from Magic', 'Piety'],
  recommendedSkills: {
    Attack: 80,
    Defence: 80,
    Hitpoints: 80,
    Magic: 80,
    Ranged: 80,
    Strength: 80,
  },
  requirements: [
    new QuestRequirement('Darkness of Hallowvale'),
    new QuestRequirement('In Aid of the Myreque'),
    new LevelRequirement(Skill.Slayer, 38, false),
    new LevelRequirement(Skill.Attack, 40, false),
    new LevelRequirement(Skill.Herblore, 40, false),
    new LevelRequirement(Skill.Agility, 45, false),
    new LevelRequirement(Skill.Crafting, 48, false),
  ],
  rewards: {
    areas: [],
    experience: [],
    items: [{ name: 'Ivandis flail' }, { name: "Drakan's medallion" }],
    lamps: [{ amount: 2500, note: 'Tome of experience - grants 2,500 XP in each of any 3 skills (level 35+)', skillRestriction: 'Any skill level 35+' }],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [
      { description: 'Access to Ver Sinhaza (Theatre of Blood area)' },
      { description: "Drakan's medallion - unlimited teleports to Theatre of Blood, Meiyerditch Laboratories, and Darkmeyer" },
    ],
  },
  series: 'Myreque',
  shortName: 'aTasteOfHope',
  startLocation: 'Garth, Ver Sinhaza, outside the Theatre of Blood',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/A_Taste_of_Hope',
};

export default ATasteOfHope;
