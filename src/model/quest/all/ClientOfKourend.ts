import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
const ClientOfKourend: Quest = {
  id: 0, // Assign a unique ID if available
  name: 'Client of Kourend',
  members: true,
  difficulty: QuestDifficulty.Novice,
  length: QuestLength.Medium,
  requirements: [],
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'clientOfKourend',
  url: 'https://oldschool.runescape.wiki/w/Client_of_Kourend',
  series: 'Great Kourend',
  age: '',
    recommendations: [
      { type: 'item', name: 'Feather', note: 'Stripy or coloured feather, not magic gold' },
      { type: 'item', name: 'Weight-reducing clothing', note: 'Graceful outfit recommended' },
      { type: 'item', name: 'Stamina potion' },
      { type: 'item', name: 'Games necklace', note: 'Fast travel to Dark Altar' },
      { type: 'item', name: 'Arceuus library teleport', note: 'Fast travel to Dark Altar' },
      { type: 'item', name: 'Fairy rings', note: 'Fast travel to Dark Altar and around Great Kourend' },
      { type: 'item', name: 'Xeric\'s Talisman', note: 'Fast travel around Great Kourend' },
      { type: 'item', name: 'Coins', note: 'For Lovakengj Minecart Network' }
    ],
    recommendedSkills: {},
    recommendedPrayers: [],
    rewards: {
      experience: [],
      questPoints: 1,
      items: [
        { name: 'Kharedst\'s memoirs' }
      ],
      areas: ['Great Kourend'],
      unlocks: [
        { description: 'Unlocks Kourend Castle Teleport spell' }
      ],
      lamps: [
        { amount: 500, note: 'Antique lamp, any skill' },
        { amount: 500, note: 'Antique lamp, any skill' }
      ],
      points: [],
      pets: [],
    },
};

export default ClientOfKourend;
