import { QuestDifficulty, QuestLength } from '../enums';
import { QuestStatus } from '../Quest';

const DoricQuest = {
  age: 'Fifth Age',
  description:
    'Help Doric the dwarf by gathering materials so he can make pickaxes, and earn access to his anvils.',

  difficulty: QuestDifficulty.Novice,

  id: 0,

  length: QuestLength.VeryShort,

  members: false,

  miniquest: false,

  name: "Doric's Quest",

  questPoints: 1,

  recommendations: [
    { name: 'Pickaxe', note: 'Bronze pickaxe provided during quest.', type: 'item' },
    { name: 'Clay', quantity: 6, type: 'item' },
    { name: 'Copper ore', quantity: 4, type: 'item' },
    { name: 'Iron ore', quantity: 2, type: 'item' },
    { name: 'Mining 15+', note: 'Required to mine iron ore yourself (boostable).', type: 'tip' },
  ],

  recommendedPrayers: [],

  recommendedSkills: { Mining: 15 },

  requirements: [], // No mandatory level or quest requirements

  rewards: {
    areas: [],
    experience: [{ amount: 1300, skill: 'Mining' }],
    items: [{ name: 'Bronze pickaxe' }, { name: '180 coins' }],
    misc: ['Required for Devious Minds, Falador Diary (Easy)'],
    questPoints: 1,
    unlocks: [
      {
        description: "Ability to use Doric's anvils",
        url: 'https://oldschool.runescape.wiki/w/Anvil',
      },
    ],
  },

  series: null,

  shortName: 'DoricQuest',

  startLocation: "Doric's hut north of Falador",

  status: QuestStatus.NotStarted,

  steps: [
    "Talk to Doric in his hut north of Falador.",
    'Collect 6 clay and bring it back to Doric.',
    'Collect 4 copper ore and bring it back to Doric.',
    'Collect 2 iron ore and bring it back to Doric.',
    "Collect one more ore and bring it to Doric (or obtain one from him).",
    'Talk to Doric to complete the quest.',
  ],

  url: 'https://oldschool.runescape.wiki/w/Doric%27s_Quest',
};

export default DoricQuest;
