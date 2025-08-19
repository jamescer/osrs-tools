import { Quest, QuestStatus } from '../Quest';
import { QuestRequirement, Requirement } from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';

const MonkeyMadness: Quest = {
  id: 0,
  name: 'Monkey Madness',
  members: true,
  difficulty: QuestDifficulty.Master,
  length: QuestLength.Long,
  requirements: [
    new QuestRequirement('The Grand Tree'),
    new QuestRequirement('Tree Gnome Village'),
  ],
  questPoints: 3,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'monkeyMadness',
  url: 'https://oldschool.runescape.wiki/w/Monkey_Madness',
  series: 'Gnome',
  age: '',

  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [{ skill: Skill.Strength, amount: 10000 }],
    questPoints: 3,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default MonkeyMadness;
