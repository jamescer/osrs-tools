import { LevelRequirement, QuestPointRequirement, QuestRequirement } from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const DragonSlayerII: Quest = {
  age: 'Fifth Age',
  description: 'Confront the resurrected dragon Galvek and face the greatest dragonslaying challenge Gielinor has ever seen.',

  difficulty: QuestDifficulty.Grandmaster,

  id: 31,

  length: QuestLength.VeryLong,

  members: true,

  miniquest: false,

  // Assign a unique ID if available
  name: 'Dragon Slayer II',
  questPoints: 5,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestPointRequirement(200),
    new QuestRequirement("Dragon Slayer I"),
    new QuestRequirement("Legends' Quest"),
    new QuestRequirement("Dream Mentor"),
    new QuestRequirement("A Tail of Two Cats"),
    new QuestRequirement("Animal Magnetism"),
    new QuestRequirement("Ghosts Ahoy"),
    new QuestRequirement("Bone Voyage"),
    new QuestRequirement("Client of Kourend"),
    new LevelRequirement(Skill.Hitpoints, 50, false),
    new LevelRequirement(Skill.Construction, 50, false),
    new LevelRequirement(Skill.Magic, 75, false),
    new LevelRequirement(Skill.Agility, 60, false),
    new LevelRequirement(Skill.Thieving, 60, false),
    new LevelRequirement(Skill.Mining, 68, false),
    new LevelRequirement(Skill.Smithing, 70, false),
    new LevelRequirement(Skill.Crafting, 62, false),
  ],
  rewards: {
    areas: [],
    experience: [
      { amount: 50000, skill: Skill.Agility },
      { amount: 60000, skill: Skill.Mining },
      { amount: 80000, skill: Skill.Smithing },
      { amount: 50000, skill: Skill.Thieving },
    ],
    items: [],
    lamps: [
      {
        amount: 25000,
        note: '4 lamps from Ellen, each giving 25,000 XP in Magic, Ranged, Strength, Attack, Defence, or Hitpoints',
        skillRestriction: 'Magic, Ranged, Strength, Attack, Defence, or Hitpoints',
      },
    ],
    pets: [],
    points: [],
    questPoints: 5,
    unlocks: [
      { description: 'Ability to wear the Mythical cape and access the Myths\' Guild' },
      { description: 'Ability to smith and wear Runic armour' },
    ],
  },
  series: 'Dragonkin',
  shortName: 'dragonSlayerII',

  startLocation: "Alec Kincade, Myths' Guild",
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Dragon_Slayer_II',
};

export default DragonSlayerII;
