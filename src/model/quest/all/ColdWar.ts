import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';
import { Skill } from '../../account/Skill';

const ColdWar: Quest = {
  id: 0, // Assign a unique ID if available
  name: "Cold War",
  members: true,
  difficulty: 'Intermediate',
  length: 'Medium - Long',
  requirements: [], // Skills: Hunter 10, Agility 30, Crafting 30, Construction 34, Thieving 15
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: "coldWar",
  url: 'https://oldschool.runescape.wiki/w/Cold_War',
  series: 'Penguin',
  age: '',
  difficultyLevel: 'Intermediate',
  officialDifficulty: 'Intermediate',
  officialLength: 'Medium - Long',
  officialAge: '',
  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [
      { skill: Skill.Agility, amount: 5000 },
      { skill: Skill.Construction, amount: 1500 },
      { skill: Skill.Crafting, amount: 2000 },
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

export default ColdWar;
