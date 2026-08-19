import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const BearYourSoul: Quest = {
  age: 'Fifth Age',
  description:
    'Help the spirit of a bear by collecting the pieces of his soul from the Spirit Realm.',
  difficulty: QuestDifficulty.Novice,
  id: 202,
  length: QuestLength.VeryShort,
  members: true,
  miniquest: true,
  name: 'Bear Your Soul',
  questPoints: 0,
  recommendations: [
    { name: 'Dramen staff or Lunar staff', type: 'item', note: 'Required to access Zanaris' },
  ],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
  rewards: {
    areas: [],
    experience: [],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 0,
    unlocks: [
      { description: 'Access to the Spirit Realm below the Stronghold of Security' },
    ],
  },
  series: null,
  shortName: 'bearYourSoul',
  startLocation: 'Speak to the Odd Old Man near Paterdomus',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Bear_Your_Soul',
};

export default BearYourSoul;
