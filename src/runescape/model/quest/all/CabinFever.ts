import { LevelRequirement , QuestRequirement} from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const CabinFever: Quest = {
  age: 'Fifth Age',
  description: 'Join the pirate Bill Teach on his vessel and help repel an attack from the Customs and Excise Office using seafaring skills.',
  

  difficulty: QuestDifficulty.Experienced,

  id: 14,

  length: QuestLength.Short,

  members: true,

  miniquest: false,

  // Assign a unique ID if available
  name: 'Cabin Fever',
  // Quests: Pirate's Treasure, Rum Deal, Priest in Peril. Skills: Agility 42, Crafting 45, Smithing 50, Ranged 40
  questPoints: 2,
  recommendations: [
    {
      name: 'Ranged weapon and ammo',
      note: 'Required for ship defense.',
      type: 'item',
    },
    {
      name: 'Food',
      note: 'Useful for combat and travel.',
      type: 'tip',
    },
  ],
  recommendedPrayers: ['Protect from Melee'],
  recommendedSkills: {
    Agility: 42,
    Crafting: 45,
    Ranged: 40,
    Smithing: 50,
  },
  requirements: [
    new QuestRequirement("Pirate's Treasure"),
    new QuestRequirement("Rum Deal"),
    new QuestRequirement("Priest in Peril"),
    new LevelRequirement(Skill.Agility, 42, false),
    new LevelRequirement(Skill.Crafting, 45, false),
    new LevelRequirement(Skill.Smithing, 50, false),
    new LevelRequirement(Skill.Ranged, 40, false),
  ],
  rewards: {
    areas: ['Mos Le’Harmless'],
    experience: [
      { amount: 7000, skill: Skill.Agility },
      { amount: 7000, skill: Skill.Crafting },
      { amount: 7000, skill: Skill.Smithing },
    ],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 2,
    unlocks: [
      { description: 'Access to Mos Le\'Harmless' },
      { description: 'Access to cave horrors (Slayer level required)' },
      { description: 'Ability to play Trouble Brewing minigame' },
      { description: 'Charter ship prices halved' },
    ],
  },
  series: 'Pirate',
  shortName: 'cabinFever',
  startLocation: 'Bill Teach, The Green Ghost inn, Port Phasmatys',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Cabin_Fever',
};

export default CabinFever;
