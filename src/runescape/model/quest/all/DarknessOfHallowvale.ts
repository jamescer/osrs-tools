import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const DarknessOfHallowvale: Quest = {
  age: '',
  description: '',

  difficulty: QuestDifficulty.Intermediate,

  id: 0,

  length: QuestLength.VeryLong,

  members: true,

  miniquest: false,

  // Assign a unique ID if available
  name: 'Darkness of Hallowvale',
  // Quests: In Aid of the Myreque. Skills: Construction 5, Mining 20, Thieving 22, Agility 26, Crafting 32, Magic 33, Strength 40
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
  rewards: {
    areas: [],
    experience: [
      { amount: 7000, skill: Skill.Agility },
      { amount: 2000, skill: Skill.Construction },
      { amount: 6000, skill: Skill.Thieving },
    ],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 2,
    unlocks: [],
  },
  series: 'Myreque',
  shortName: 'darknessOfHallowvale',

  startLocation: '',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Darkness_of_Hallowvale',
};

export default DarknessOfHallowvale;
