import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const PiratesTreasure: Quest = {
  age: 'Fifth Age',
  description: 'Follow a series of clues from the pirate Redbeard Frank to find a buried treasure hidden somewhere on Karamja.',
  difficulty: QuestDifficulty.Novice,
  id: 1005,
  length: QuestLength.VeryShort,
  members: false,
  miniquest: false,
  name: "Pirate's Treasure",
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
  rewards: { areas: [], experience: [], items: [], lamps: [], pets: [], points: [], questPoints: 2, unlocks: [] },
  series: null,
  shortName: 'piratesTreasure',
  startLocation: 'Port Sarim',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Pirate%27s_Treasure',
};
export default PiratesTreasure;
