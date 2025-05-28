import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';
import { Skill } from '../../account/Skill';

const DeathToTheDorgeshuun: Quest = {
  id: 0, // Assign a unique ID if available
  name: 'Death to the Dorgeshuun',
  members: true,
  difficulty: 'Intermediate',
  length: 'Medium',
  requirements: [], // Quests: The Lost Tribe. Skills: Agility 23, Thieving 23
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'deathToTheDorgeshuun',
  url: 'https://oldschool.runescape.wiki/w/Death_to_the_Dorgeshuun',
  series: 'Dorgeshuun',
  age: '',
  difficultyLevel: 'Intermediate',
  officialDifficulty: 'Intermediate',
  officialLength: 'Medium',
  officialAge: '',
  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [
      { skill: Skill.Ranged, amount: 2000 },
      { skill: Skill.Thieving, amount: 2000 },
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

export default DeathToTheDorgeshuun;
