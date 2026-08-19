import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const DoricQuest: Quest = {
  age: 'Fifth Age',
  description: 'Help Doric the dwarf by gathering materials so he can make pickaxes, and earn access to his anvils.',

  difficulty: QuestDifficulty.Novice,

  id: 28,

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
    experience: [{ amount: 1300, skill: Skill.Mining }],
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

  shortName: 'doricQuest',

  startLocation: "Doric's hut north of Falador",

  status: QuestStatus.NotStarted,

  steps: [],

  url: 'https://oldschool.runescape.wiki/w/Doric%27s_Quest',
};

export default DoricQuest;
