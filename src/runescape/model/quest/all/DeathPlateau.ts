import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const DeathPlateau: Quest = {
  age: 'Fifth Age',
  description: 'Help a Burthorpe guard investigate treasonous activity in the Imperial Guard — and find a safe passage through Death Plateau.',

  difficulty: QuestDifficulty.Novice,

  id: 23,

  length: QuestLength.Medium,

  members: false,

  miniquest: false,
  // Assign a unique ID if available
  name: 'Death Plateau',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
  rewards: {
    areas: [],
    experience: [{ amount: 3000, skill: Skill.Attack }],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [],
  },
  series: 'Troll',
  shortName: 'deathPlateau',

  startLocation: 'Denulth, Burthorpe',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Death_Plateau',
};

export default DeathPlateau;
