import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';
import { Skill } from '../../account/Skill';

const DragonSlayerII: Quest = {
  id: 0, // Assign a unique ID if available
  name: 'Dragon Slayer II',
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
  shortName: 'dragonSlayerII',
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
    experience: [
      { skill: Skill.Agility, amount: 15000 },
      { skill: Skill.Mining, amount: 18000 },
      { skill: Skill.Smithing, amount: 25000 },
      { skill: Skill.Thieving, amount: 15000 },
    ],
    questPoints: 5,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default DragonSlayerII;
