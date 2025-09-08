import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';

const HauntedMine: Quest = {
  id: 0,
  name: 'Haunted Mine',
  members: true,
  difficulty: QuestDifficulty.Experienced,
  length: QuestLength.Long,
  requirements: [],
  questPoints: 2,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'hauntedMine',
  url: 'https://oldschool.runescape.wiki/w/Haunted_Mine',
  series: null,
  age: '',

  recommendations: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [{ skill: Skill.Strength, amount: 22000 }],
    questPoints: 2,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default HauntedMine;
