import { Skill } from '../../account/Skill';
import { ItemRequirement, LevelRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const TheHandInTheSand: Quest = {
  age: '',
  description:
    "Bert the Sandman in Yanille is in a spot of bother. A mysterious severed hand has appeared in his sand box. Help find out whose hand it is and, more to the point, how it got in Bert's sand box.",
  difficulty: QuestDifficulty.Intermediate,
  id: 0,
  length: QuestLength.Short,
  members: true,
  miniquest: false,
  name: 'The Hand in the Sand',
  questPoints: 1,
  recommendations: [
    {
      name: 'Vial',
      note: 'To pay for fast travel to Port Sarim',
      quantity: 1,
      type: 'item',
    },
    {
      alternatives: [
        'Yanille teleport',
        'Watchtower teleport',
        'Nightmare Zone grouping teleport',
        'House teleport (if house is in Yanille)',
      ],
      name: 'Fast travel to Yanille',
      type: 'travel',
    },
    {
      alternatives: [
        'Brimhaven teleport',
        'House teleport (if house is in Brimhaven)',
        'Charter ship',
        "Captain Barnaby's ship from Ardougne (requires Ardougne teleport or Ardougne cloak)",
      ],
      name: 'Fast travel to Brimhaven',
      type: 'travel',
    },
    {
      name: 'Fast travel to Port Sarim',
      type: 'travel',
    },
  ],
  recommendedPrayers: [],
  recommendedSkills: {
    [Skill.Farming]: 59,
  },
  requirements: [
    new LevelRequirement('Thieving', 17, false),
    new LevelRequirement('Crafting', 49, false),
    new ItemRequirement('Beer', 1, { notes: 'Can be obtained during quest' }),
    new ItemRequirement('Coins', 150, { notes: 'Approximately' }),
    new ItemRequirement('Empty vial', 1),
    new ItemRequirement('Redberries', 1, {
      notes: 'Purchasable during the quest from the Food Store in Port Sarim',
    }),
    new ItemRequirement('White berries', 1),
    new ItemRequirement('Lantern lens', 1),
    new ItemRequirement('Earth runes', 5, { notes: 'Can be bought from Betty for 20 gp' }),
    new ItemRequirement('Bucket of sand', 1, {
      notes: 'Obtainable during quest if you bring a bucket',
    }),
  ],
  rewards: {
    areas: [],
    experience: [
      { amount: 1000, skill: Skill.Thieving },
      { amount: 9000, skill: Skill.Crafting },
    ],
    items: [{ name: 'Uncut ruby' }, { name: 'Truth serum' }],
    misc: [
      'The player briefly visits Entrana (Ultimate Ironman note)',
      'White berries can be obtained through: Farming level 59 (boostable), monster drops (cave crawlers are easiest), spawn at Wilderness Lava Dragon Isle, from Isafdar north of the Elf Tracker, or from Chaos druid warrior in Yanille Agility Dungeon (requires 40 Agility)',
    ],
    questPoints: 1,
    unlocks: [{ description: 'Ability to collect sand from Bert daily' }],
  },
  series: null,
  shortName: 'theHandInTheSand',
  startLocation: 'Talk to Bert in Yanille, near the sand pit',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/The_Hand_in_the_Sand',
};

export default TheHandInTheSand;
