import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const EadgarsRuse: Quest = {
  age: '',
  description: '',

  difficulty: QuestDifficulty.Experienced,

  id: 0,

  length: QuestLength.Long,

  members: true,

  miniquest: false,

  // Assign a unique ID if available
  name: "Eadgar's Ruse",
  // Quests: Druidic Ritual, Troll Stronghold. Skills: Herblore 31, Agility 44
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
  rewards: {
    areas: [],
    experience: [{ amount: 11000, skill: 'Herblore' }],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [],
  },
  series: 'Troll',
  shortName: 'eadgarsRuse',

  startLocation: '',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Eadgar%27s_Ruse',
};

export default EadgarsRuse;
