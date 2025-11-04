import { Skill } from '../../account/Skill';
import { LevelRequirement, Requirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const JunglePotion: Quest = {
  description: '',
  difficulty: QuestDifficulty.Novice,
  id: 0,
  length: QuestLength.Short,
  members: true,
  miniquest: false,
  age: '',
  name: 'Jungle Potion',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  requirements: [new LevelRequirement('Herblore', 3, false)],
  recommendedSkills: {},
  series: 'Karamja',
  rewards: {
    areas: [],
    experience: [{ amount: 775, skill: Skill.Herblore }],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [],
  },
  startLocation: '',

  shortName: 'junglePotion',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Jungle_Potion',
};

export default JunglePotion;
