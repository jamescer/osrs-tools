import { QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const TheGeneralsShadow: Quest = {
  age: 'Fifth Age',
  description:
    'Help the spirit of a Zarosian general complete his unfinished business in the God Wars Dungeon.',
  difficulty: QuestDifficulty.Master,
  id: 209,
  length: QuestLength.Short,
  members: true,
  miniquest: true,
  name: "The General's Shadow",
  questPoints: 0,
  recommendations: [
    { name: 'Ghostspeak amulet', type: 'item' },
    { name: 'Combat equipment', type: 'item', note: 'For the God Wars Dungeon' },
  ],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement('Curse of the Empty Lord'),
  ],
  rewards: {
    areas: [],
    experience: [],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 0,
    unlocks: [
      { description: 'Upgraded ghostly robes (tier 2)' },
    ],
  },
  series: 'Mahjarrat',
  shortName: 'theGeneralsShadow',
  startLocation: 'Speak to the shadowy figure near the God Wars Dungeon',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/The_General%27s_Shadow',
};

export default TheGeneralsShadow;
