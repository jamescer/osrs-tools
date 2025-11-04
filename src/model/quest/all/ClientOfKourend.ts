import { Requirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const ClientOfKourend: Quest = {
  description: '',
  difficulty: QuestDifficulty.Novice,

  id: 0,

  length: QuestLength.Medium,

  members: true,

  miniquest: false,
  
  age: '',
  // Assign a unique ID if available
name: 'Client of Kourend',
  questPoints: 1,
  recommendations: [
    { name: 'Feather', note: 'Stripy or coloured feather, not magic gold', type: 'item' },
    { name: 'Weight-reducing clothing', note: 'Graceful outfit recommended', type: 'item' },
    { name: 'Stamina potion', type: 'item' },
    { name: 'Games necklace', note: 'Fast travel to Dark Altar', type: 'item' },
    { name: 'Arceuus library teleport', note: 'Fast travel to Dark Altar', type: 'item' },
    {
      name: 'Fairy rings',
      note: 'Fast travel to Dark Altar and around Great Kourend',
      type: 'item',
    },
    { name: "Xeric's Talisman", note: 'Fast travel around Great Kourend', type: 'item' },
    { name: 'Coins', note: 'For Lovakengj Minecart Network', type: 'item' },
  ],
  recommendedPrayers: [],
  requirements: [],
  recommendedSkills: {},
  series: 'Great Kourend',
  rewards: {
    areas: ['Great Kourend'],
    experience: [],
    items: [{ name: "Kharedst's memoirs" }],
    lamps: [
      { amount: 500, note: 'Antique lamp, any skill' },
      { amount: 500, note: 'Antique lamp, any skill' },
    ],
    pets: [],
    questPoints: 1,
    points: [],
    unlocks: [{ description: 'Unlocks Kourend Castle Teleport spell' }],
  },
  startLocation: '',
  shortName: 'clientOfKourend',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Client_of_Kourend',
};

export default ClientOfKourend;
