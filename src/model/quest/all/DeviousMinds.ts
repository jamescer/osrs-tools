import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';
import { Skill } from '../../account/Skill';

const DeviousMinds: Quest = {
  id: 0, // Assign a unique ID if available
  name: 'Devious Minds',
  members: true,
  difficulty: 'Experienced',
  length: 'Short',
  requirements: [], // Quests: Wanted!, Troll Stronghold, Doric's Quest, Enter the Abyss. Skills: Smithing 65, Runecraft 50, Fletching 50
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'deviousMinds',
  url: 'https://oldschool.runescape.wiki/w/Devious_Minds',
  series: 'The Return of Zaros',
  age: '',
  difficultyLevel: 'Experienced',
  officialDifficulty: 'Experienced',
  officialLength: 'Short',
  officialAge: '',
  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [
      { skill: Skill.Fletching, amount: 5000 },
      { skill: Skill.Runecraft, amount: 5000 },
      { skill: Skill.Smithing, amount: 6500 },
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

export default DeviousMinds;
