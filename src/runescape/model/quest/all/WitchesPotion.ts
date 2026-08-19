import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const WitchesPotion: Quest = {
  age: 'Fifth Age',
  description: 'Help the witch by collecting ingredients for her potion in exchange for an artifact.',
  difficulty: QuestDifficulty.Novice,
  id: 136,
  length: QuestLength.Short,
  members: false,
  miniquest: false,
  name: "Witch's Potion",
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
  rewards: {
    areas: [],
    experience: [],
    items: [{ name: 'Witchwood icon' }],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [],
  },
  series: null,
  shortName: 'witchesPotion',

  startLocation: 'Witch house, south of Draynor Manor',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Witch%27s_Potion',
};

export default WitchesPotion;
