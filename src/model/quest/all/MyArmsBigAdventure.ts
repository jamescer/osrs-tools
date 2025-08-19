import { Quest, QuestStatus } from '../Quest';
import { LevelRequirement, QuestRequirement, Requirement } from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';

const MyArmsBigAdventure: Quest = {
  id: 0,
  name: "My Arm's Big Adventure",
  members: true,
  difficulty: QuestDifficulty.Experienced,
  length: QuestLength.Medium,
  requirements: [new QuestRequirement("Eadgar's Ruse"), new LevelRequirement('Farming', 29, false)],
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'myArmsBigAdventure',
  url: 'https://oldschool.runescape.wiki/w/My_Arm%27s_Big_Adventure',
  series: 'Troll',
  age: '',

  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [
      { skill: Skill.Agility, amount: 10000 },
      { skill: Skill.Farming, amount: 5000 },
      { skill: Skill.Woodcutting, amount: 10000 },
    ],
    questPoints: 2,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default MyArmsBigAdventure;
