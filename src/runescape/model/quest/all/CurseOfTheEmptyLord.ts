import { QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const CurseOfTheEmptyLord: Quest = {
  age: 'Fifth Age',
  description: 'Discover the story of Sliske and his past by following the footsteps of a tormented Mahjarrat ghost through Gielinor.',
  
  difficulty: QuestDifficulty.Master,
  id: 203,
  length: QuestLength.Short,
  members: true,
  miniquest: true,
  name: 'Curse of the Empty Lord',
  questPoints: 0,
  recommendations: [
    { name: 'Ghost speak amulet', type: 'item', note: 'Required to speak to ghosts' },
  ],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement('Desert Treasure I'),
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
      { description: 'Ability to wear ghostly robes' },
    ],
  },
  series: 'Mahjarrat',
  shortName: 'curseOfTheEmptyLord',
  startLocation: 'Speak to Viggora near the Wilderness Chaos Temple',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Curse_of_the_Empty_Lord',
};

export default CurseOfTheEmptyLord;
