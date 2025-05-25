import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';

const DragonSlayerII: Quest = {
  id: 0, // Assign a unique ID if available
  name: "Dragon Slayer II",
  members: true,
  difficulty: 'Grandmaster',
  length: 'Very long',
  requirements: [], // Quests: Legends' Quest, Dream Mentor, A Tail of Two Cats, Animal Magnetism, Ghosts Ahoy, Bone Voyage, Client of Kourend. Skill: quest 200
  questPoints: 5,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: "dragonSlayerII",
  url: 'https://oldschool.runescape.wiki/w/Dragon_Slayer_II',
  series: 'Dragonkin',
  age: '',
  difficultyLevel: 'Grandmaster',
  officialDifficulty: 'Grandmaster',
  officialLength: 'Very long',
  officialAge: '',
  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: { Agility: 15000, Mining: 18000, Smithing: 25000, Thieving: 15000 },
    questPoints: 5,
    items: [],
    areas: [],
    grants: [],
  },
};

export default DragonSlayerII;
