import { QuestDifficulty, QuestLength } from '../enums';
import { QuestStatus } from '../Quest';

const DreamMentor = {
  age: 'Fifth Age',
  description: 'Help Cyrisus overcome his fears in the dream world and unlock new Lunar spells.',

  difficulty: QuestDifficulty.Master,

  id: 0,

  length: QuestLength.Medium,

  members: true,

  miniquest: false,

  // TODO: Replace with actual ID
  name: 'Dream Mentor',

  questPoints: 2,

  recommendations: [
    { name: 'Seal of passage', note: 'Required to access Lunar Isle.', type: 'item' },
    {
      name: 'Food',
      note: 'Bring 3 types, 6 of one and 7 of two others. Sacks/baskets recommended.',
      quantity: 20,
      type: 'item',
    },
    { name: 'Goutweed', quantity: 1, type: 'item' },
    { name: 'Astral rune', quantity: 1, type: 'item' },
    { name: 'Tinderbox', quantity: 1, type: 'item' },
    { name: 'Hammer', quantity: 1, type: 'item' },
    { name: 'Pestle and mortar', quantity: 1, type: 'item' },
    {
      name: 'Good weapon/armour',
      note: 'Trident of the seas recommended; strong melee armour and food for boss fights.',
      type: 'item',
    },
    { name: 'Super potion sets', note: 'Recommended for boss fights.', type: 'item' },
    { name: 'Combat 85+', note: 'Required to start the quest.', type: 'tip' },
    { name: 'Magic recommended', note: 'Highly recommended for boss fights.', type: 'tip' },
    { name: 'High Hitpoints', note: 'Recommended for survival against four bosses.', type: 'tip' },
  ],

  recommendedPrayers: [],

  recommendedSkills: { Combat: 85 },

  // TODO: Fill in steps
  requirements: [],

  rewards: {
    areas: ['Lunar Isle', 'Dream World'],
    experience: [
      { amount: 15000, skill: 'Hitpoints' },
      { amount: 10000, skill: 'Magic' },
    ],
    items: [{ name: 'Dreamy lamp' }],
    lamps: [
      {
        amount: 15000,
        note: 'Dreamy lamp awards 15,000 XP in a combat skill of your choice except Attack and Prayer.',
        skillRestriction: ['Any combat skill except Attack and Prayer'],
      },
    ],
    misc: [
      'Required for Dragon Slayer II, While Guthix Sleeps, Hard Desert Diary, Hard Kourend & Kebos Diary, Elite Varrock Diary',
    ],
    questPoints: 2,
    unlocks: [
      {
        description:
          'Access to 7 new Lunar spells (Monster Examine, Humidify, Hunter Kit, Stat Spy, Dream, Plank Make, Spellbook Swap)',
        url: 'https://oldschool.runescape.wiki/w/Lunar_spells',
      },
      { description: "Access to Cyrisus' bank without a seal of passage" },
      {
        description:
          'The Untouchable, The Everlasting, The Inadequacy accessible in the Nightmare Zone',
        url: 'https://oldschool.runescape.wiki/w/Nightmare_Zone',
      },
    ],
  },

  series: 'Fremennik',

  shortName: 'DreamMentor',

  startLocation: 'Lunar Isle mine',

  // TODO: Fill in requirements
  status: QuestStatus.NotStarted,

  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Dream_Mentor',
};

export default DreamMentor;
