import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const WaterfallQuest: Quest = {
  age: 'Fifth Age',
  description: 'Help a tribesperson recover a sacred totem from a mysterious waterfall.',
  difficulty: QuestDifficulty.Novice,
  id: 134,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: 'Waterfall Quest',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: { Agility: 10 },
  requirements: [],
  rewards: {
    areas: ['Waterfall dungeon access'],
    experience: [
      { amount: 13750, skill: Skill.Attack },
      { amount: 13750, skill: Skill.Strength },
    ],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [
      {
        description: 'Access to Waterfall dungeon for training',
        url: 'https://oldschool.runescape.wiki/w/Waterfall_Dungeon',
      },
    ],
  },
  series: null,
  shortName: 'waterfallQuest',

  startLocation: 'Arandar, east of Ardougne',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Waterfall_Quest',
};

export default WaterfallQuest;
