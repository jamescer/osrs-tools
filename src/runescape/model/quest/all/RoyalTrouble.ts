import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const RoyalTrouble: Quest = {
  age: 'Fifth Age',
  description: 'Investigate a threat to the kingdoms of Miscellania and Etceteria, and reunite the two squabbling rulers.',
  difficulty: QuestDifficulty.Intermediate,
  id: 89,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: 'Royal Trouble',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement('Throne of Miscellania'),
    new LevelRequirement(Skill.Agility, 40, false),
    new LevelRequirement(Skill.Slayer, 40, true),
  ],
  rewards: {
    areas: [],
    experience: [],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [],
  },
  series: 'Miscellania',
  shortName: 'royalTrouble',

  startLocation: 'King Vargas, Miscellania',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Royal_Trouble',
};

export default RoyalTrouble;
