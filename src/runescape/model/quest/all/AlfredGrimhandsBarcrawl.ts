import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const AlfredGrimhandsBarcrawl: Quest = {
  age: 'Fifth Age',
  description: 'Complete the barcrawl set up by Alfred Grimhand to gain entry to the Barbarian Outpost.',
  difficulty: QuestDifficulty.Novice,
  id: 200,
  length: QuestLength.Short,
  members: true,
  miniquest: true,
  name: "Alfred Grimhand's Barcrawl",
  questPoints: 0,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
  rewards: {
    areas: ['Barbarian Outpost'],
    experience: [],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 0,
    unlocks: [{ description: 'Access to the Barbarian Outpost and Barbarian Agility Course' }],
  },
  series: null,
  shortName: 'alfredGrimhandsBarcrawl',
  startLocation: "Guard at the Barbarian Outpost entrance, east of Seers' Village",
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Alfred_Grimhand%27s_Barcrawl',
};

export default AlfredGrimhandsBarcrawl;
