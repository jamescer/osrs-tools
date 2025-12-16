import { Skill } from '../../account/Skill';
import { QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const TheForsakenTower: Quest = {
  age: '',
  description: '',
  difficulty: QuestDifficulty.Novice,
  id: 0,
  length: QuestLength.Short,
  members: true,
  miniquest: false,
  name: 'The Forsaken Tower',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [new QuestRequirement('Client of Kourend')],
  rewards: {
    areas: [],
    experience: [
      { amount: 500, skill: Skill.Mining },
      { amount: 500, skill: Skill.Smithing },
    ],
    items: [{ name: '6,000 coins', quantity: 6000 }],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [
      { description: 'Free use of the Lovakengj Minecart Network' },
      {
        description:
          "A page for Kharedst's memoirs, 'Jewellery of jubilation.' It teleports players north-east of the bank in Lovakengj.",
      },
      { description: 'Ability to recolour the graceful outfit to the colours of Lovakengj.' },
    ],
  },
  series: 'Great Kourend',
  shortName: 'theForsakenTower',
  startLocation: '',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/The_Forsaken_Tower',
};

export default TheForsakenTower;
