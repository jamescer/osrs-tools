import { Skill } from '../../account/Skill';
import { QuestRequirement, Requirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const MonkeyMadness: Quest = {
  description: '',
  difficulty: QuestDifficulty.Master,
  id: 0,
  length: QuestLength.Long,
  members: true,
  miniquest: false,
  age: '',
  name: 'Monkey Madness',
  questPoints: 3,
  recommendations: [],
  recommendedPrayers: [],
  requirements: [
    new QuestRequirement('The Grand Tree'),
    new QuestRequirement('Tree Gnome Village'),
  ],
  recommendedSkills: {},
  series: 'Gnome',
  rewards: {
    areas: [],
    experience: [{ amount: 10000, skill: Skill.Strength }],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 3,
    unlocks: [],
  },
  startLocation: '',

  shortName: 'monkeyMadness',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Monkey_Madness',
};

export default MonkeyMadness;
