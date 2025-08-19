import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
const CreatureOfFenkenstrain: Quest = {
  id: 0, // Assign a unique ID if available
  name: 'Creature of Fenkenstrain',
  members: true,
  difficulty: QuestDifficulty.Intermediate,
  length: QuestLength.Medium,
  requirements: [], // Quests: Priest in Peril, The Restless Ghost. Skills: Crafting 20, Thieving 25
  questPoints: 2,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'creatureOfFenkenstrain',
  url: 'https://oldschool.runescape.wiki/w/Creature_of_Fenkenstrain',
  series: null,
  age: '',

  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [{ skill: Skill.Thieving, amount: 1000 }],
    questPoints: 2,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default CreatureOfFenkenstrain;
