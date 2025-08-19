import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
const AnimalMagnetism: Quest = {
  id: 0, // Assign a unique ID if available
  name: 'Animal Magnetism',
  members: true,
  difficulty: QuestDifficulty.Intermediate,
  length: QuestLength.Long,
  requirements: [], // Quests: The Restless Ghost, Ernest the Chicken, Priest in Peril. Skills: Slayer 18, Crafting 19, Ranged 30, Woodcutting 35, Prayer 31
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'animalMagnetism',
  url: 'https://oldschool.runescape.wiki/w/Animal_Magnetism',
  series: null,
  age: '',

  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [
      { skill: Skill.Crafting, amount: 1000 },
      { skill: Skill.Fletching, amount: 1000 },
      { skill: Skill.Slayer, amount: 1000 },
      { skill: Skill.Woodcutting, amount: 2500 },
    ],
    questPoints: 1,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default AnimalMagnetism;
