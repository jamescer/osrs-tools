import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const HauntedMine: Quest = {
  age: '',
  description: '',
  difficulty: QuestDifficulty.Experienced,
  id: 0,
  length: QuestLength.Long,
  members: true,
  miniquest: false,
  name: 'Haunted Mine',
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
  rewards: {
    areas: [],
    experience: [{ amount: 22000, skill: Skill.Strength }],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 2,
    unlocks: [],
  },
  series: null,
  shortName: 'hauntedMine',

  startLocation: '',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Haunted_Mine',
};

export default HauntedMine;
