import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const DragonSlayerII: Quest = {
  age: '',
  description: '',

  difficulty: QuestDifficulty.Grandmaster,

  id: 0,

  length: QuestLength.VeryLong,

  members: true,

  miniquest: false,

  // Assign a unique ID if available
  name: 'Dragon Slayer II',
  // Quests: Legends' Quest, Dream Mentor, A Tail of Two Cats, Animal Magnetism, Ghosts Ahoy, Bone Voyage, Client of Kourend. Skill: quest 200
  questPoints: 5,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
  rewards: {
    areas: [],
    experience: [
      { amount: 15000, skill: 'Agility' },
      { amount: 18000, skill: 'Mining' },
      { amount: 25000, skill: 'Smithing' },
      { amount: 15000, skill: 'Thieving' },
    ],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 5,
    unlocks: [],
  },
  series: 'Dragonkin',
  shortName: 'dragonSlayerII',

  startLocation: '',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Dragon_Slayer_II',
};

export default DragonSlayerII;
