import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestRequirement, Requirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const MyArmsBigAdventure: Quest = {
  description: '',
  difficulty: QuestDifficulty.Experienced,
  id: 0,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  age: '',
  name: "My Arm's Big Adventure",
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  requirements: [new QuestRequirement("Eadgar's Ruse"), new LevelRequirement('Farming', 29, false)],
  recommendedSkills: {},
  series: 'Troll',
  rewards: {
    areas: [],
    experience: [
      { amount: 10000, skill: Skill.Agility },
      { amount: 5000, skill: Skill.Farming },
      { amount: 10000, skill: Skill.Woodcutting },
    ],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 2,
    unlocks: [],
  },
  startLocation: '',

  shortName: 'myArmsBigAdventure',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/My_Arm%27s_Big_Adventure',
};

export default MyArmsBigAdventure;
