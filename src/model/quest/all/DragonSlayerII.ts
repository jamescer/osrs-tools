import { Skill } from '../../account/Skill';
import { Requirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const DragonSlayerII: Quest = {
  description: '',
  difficulty: QuestDifficulty.Grandmaster,

  id: 0,

  length: QuestLength.VeryLong,

  members: true,

  miniquest: false,

  
  age: '',
  
  // Assign a unique ID if available
name: 'Dragon Slayer II',
  // Quests: Legends' Quest, Dream Mentor, A Tail of Two Cats, Animal Magnetism, Ghosts Ahoy, Bone Voyage, Client of Kourend. Skill: quest 200
  questPoints: 5,
  recommendations: [],
  recommendedPrayers: [],
  requirements: [],
  recommendedSkills: {},
  series: 'Dragonkin',
  rewards: {
    areas: [],
    experience: [
      { amount: 15000, skill: Skill.Agility },
      { amount: 18000, skill: Skill.Mining },
      { amount: 25000, skill: Skill.Smithing },
      { amount: 15000, skill: Skill.Thieving },
    ],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 5,
    unlocks: [],
  },
  startLocation: '',

  shortName: 'dragonSlayerII',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Dragon_Slayer_II',
};

export default DragonSlayerII;
