import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
const EadgarsRuse: Quest = {
  id: 0, // Assign a unique ID if available
  name: "Eadgar's Ruse",
  members: true,
  difficulty: QuestDifficulty.Experienced,
  length: QuestLength.Long,
  requirements: [], // Quests: Druidic Ritual, Troll Stronghold. Skills: Herblore 31, Agility 44
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'eadgarsRuse',
  url: 'https://oldschool.runescape.wiki/w/Eadgar%27s_Ruse',
  series: 'Troll',
  age: '',

  recommendations: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [{ skill: Skill.Herblore, amount: 11000 }],
    questPoints: 1,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default EadgarsRuse;
