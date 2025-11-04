import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const AnimalMagnetism: Quest = {
  age: '',
  description: '',

  difficulty: QuestDifficulty.Intermediate,

  id: 0,

  length: QuestLength.Long,

  members: true,

  miniquest: false,

  // Assign a unique ID if available
  name: 'Animal Magnetism',
  // Quests: The Restless Ghost, Ernest the Chicken, Priest in Peril. Skills: Slayer 18, Crafting 19, Ranged 30, Woodcutting 35, Prayer 31
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
  rewards: {
    areas: [],
    experience: [
      { amount: 1000, skill: Skill.Crafting },
      { amount: 1000, skill: Skill.Fletching },
      { amount: 1000, skill: Skill.Slayer },
      { amount: 2500, skill: Skill.Woodcutting },
    ],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [],
  },
  series: null,
  shortName: 'animalMagnetism',

  startLocation: '',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Animal_Magnetism',
};

export default AnimalMagnetism;
