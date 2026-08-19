import { QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const NatureSpirit: Quest = {
  age: 'Fifth Age',
  description: 'Follow up on Priest in Peril by entering Mort Myre and helping the nature spirit Filliman Tarlock achieve peace.',
  difficulty: QuestDifficulty.Intermediate,
  id: 75,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: 'Nature Spirit',
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [new QuestRequirement('The Restless Ghost'), new QuestRequirement('Priest in Peril')],
  rewards: {
    areas: [],
    experience: [],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 2,
    unlocks: [],
  },
  series: null,
  shortName: 'natureSpirit',

  startLocation: 'Drezel, Mort Myre',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Nature_Spirit',
};

export default NatureSpirit;
