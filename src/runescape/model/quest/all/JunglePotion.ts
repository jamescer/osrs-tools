import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const JunglePotion: Quest = {
  age: 'Fifth Age',
  description: 'Trufitus Shakaya of Tai Bwo Wannai needs five special jungle herbs collected to commune with his gods.',
  difficulty: QuestDifficulty.Novice,
  id: 62,
  length: QuestLength.Short,
  members: true,
  miniquest: false,
  name: 'Jungle Potion',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement('Druidic Ritual'),
    new LevelRequirement(Skill.Herblore, 3, true),
  ],
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
  series: null,
  shortName: 'junglePotion',

  startLocation: 'Trufitus, Tai Bwo Wannai',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Jungle_Potion',
};

export default JunglePotion;
