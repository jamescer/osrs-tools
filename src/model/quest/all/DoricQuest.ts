import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { QuestStatus } from '../Quest';

const DoricQuest = {
  id: 0, // TODO: Replace with actual ID
  name: "Doric's Quest",
  description: "Help Doric the dwarf by gathering materials so he can make pickaxes, and earn access to his anvils.",
  difficulty: QuestDifficulty.Novice,
  steps: [], // TODO: Fill in steps
  requirements: [], // TODO: Fill in requirements
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: "DoricQuest",
  url: "https://oldschool.runescape.wiki/w/Doric%27s_Quest",
  series: null,
  members: false,
  questPoints: 1,
  length: QuestLength.VeryShort,
  age: "Fifth Age",
  startLocation: "Doric's hut north of Falador",
  recommendations: [
    { type: 'item', name: 'Pickaxe', note: 'Bronze pickaxe provided during quest.' },
    { type: 'item', name: 'Clay', quantity: 6 },
    { type: 'item', name: 'Copper ore', quantity: 4 },
    { type: 'item', name: 'Iron ore', quantity: 2 },
    { type: 'tip', name: 'Mining 15+', note: 'Required to mine iron ore yourself (boostable).' }
  ],
  recommendedSkills: { Mining: 15 },
  recommendedPrayers: [],
  rewards: {
    experience: [
      { skill: 'Mining', amount: 1300 }
    ],
    items: [
      { name: 'Bronze pickaxe' },
      { name: '180 coins' }
    ],
    unlocks: [
      { description: "Ability to use Doric's anvils", url: "https://oldschool.runescape.wiki/w/Anvil" }
    ],
    questPoints: 1,
    areas: [],
    misc: ['Required for Devious Minds, Falador Diary (Easy)']
  }
};

export default DoricQuest;
