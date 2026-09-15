import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

/**
 * Reference: https://oldschool.runescape.wiki/w/The_Blood_Moon_Rises
 */

const TheBloodMoonRises: Quest = {
  age: 'Fifth Age',
  description:
    'Rally the last remnants of the Myreque, uncover hidden secrets, and journey beyond the veil into the realm of Vampyrium, where the fate of both humans and vampyres will be decided once and for all.',
  difficulty: QuestDifficulty.Grandmaster,
  id: 1051,
  length: QuestLength.VeryLong,
  members: true,
  miniquest: false,
  name: 'The Blood Moon Rises',
  questPoints: 4,
  recommendations: [
    { name: 'Combat level 110+', type: 'level' },
    { name: 'Fast-hitting ranged and magic weapons', type: 'item' },
    { name: 'Food, prayer potions, and stamina potions', type: 'item' },
    { name: "Drakan's medallion and Morytania legs 3+", note: 'For faster travel around Morytania', type: 'item' },
  ],
  recommendedPrayers: ['Protect from Melee', 'Piety'],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement('A Night at the Theatre'),
    new QuestRequirement('Sins of the Father'),
    new QuestRequirement('A Taste of Hope'),
    new QuestRequirement('Darkness of Hallowvale'),
    new QuestRequirement('In Aid of the Myreque'),
    new QuestRequirement('In Search of the Myreque'),
    new QuestRequirement('Nature Spirit'),
    new QuestRequirement('Priest in Peril'),
    new QuestRequirement('The Restless Ghost'),
    new QuestRequirement('Vampyre Slayer'),
    new LevelRequirement(Skill.Slayer, 74, false),
    new LevelRequirement(Skill.Woodcutting, 74, false),
    new LevelRequirement(Skill.Smithing, 72, false),
    new LevelRequirement(Skill.Cooking, 72, false),
    new LevelRequirement(Skill.Fletching, 70, false),
    new LevelRequirement(Skill.Mining, 66, false),
    new LevelRequirement(Skill.Hunter, 65, false),
    new LevelRequirement(Skill.Crafting, 64, false),
    new LevelRequirement(Skill.Herblore, 64, false),
    new LevelRequirement(Skill.Magic, 57, false),
  ],
  rewards: {
    areas: ['Vampyrium'],
    experience: [],
    items: [
      { name: 'Hallowed flail', note: 'Upgraded blisterwood flail, blessed with pure silvthril' },
      { name: 'Sunspear', note: 'Untradeable two-handed weapon with the Seeking Lunge special attack' },
    ],
    lamps: [
      {
        amount: 30000,
        note: 'Tome of experience - usable up to 6 times, granting experience to any skill(s) above level 70',
        skillRestriction: 'Any skill level 70+',
      },
    ],
    pets: [],
    points: [],
    questPoints: 4,
    unlocks: [
      { description: 'Access to the Land of Vampyrium' },
      { description: 'Bloodwood trees (Woodcutting)' },
      { description: 'Seeker arrows (Fletching)' },
      { description: 'Stymphikes (Hunter)' },
      { description: 'Leechfins (Fishing)' },
      { description: 'Venators, level 74 (Slayer)' },
      { description: 'Access to the Maggot King boss' },
      { description: 'A fermenting vat in the Burgh de Rott Myreque Hideout' },
    ],
  },
  series: 'Myreque',
  shortName: 'theBloodMoonRises',
  startLocation: 'Sarius Guile, Icyene Graveyard',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/The_Blood_Moon_Rises',
};

export default TheBloodMoonRises;
