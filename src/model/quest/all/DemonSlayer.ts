import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
import { ItemRequirement } from '../../Requirement';
import { Coins, Bones, BucketOfWater } from '../../Item/Items';
const DemonSlayer: Quest = {
  age: 'Fifth Age',
  description:
    'A mighty demon is being summoned to destroy the city of Varrock. You find out you are the one destined to stop him (or at least try).',
  difficulty: QuestDifficulty.Novice,
  id: 2,
  length: QuestLength.Short,
  members: false,
  miniquest: false,
  name: 'Demon Slayer',
  questPoints: 3,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new ItemRequirement(BucketOfWater.name, 1),
    new ItemRequirement(Coins.name, 1),
    new ItemRequirement(Bones.name, 25),
  ],
  rewards: {
    areas: [],
    experience: [],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 3,
    unlocks: [],
  },
  series: null,
  shortName: 'demonSlayer',
  startLocation: 'Speak to Aris in the tent on the western side of Varrock Square. ',
  status: QuestStatus.NotStarted,
  steps: [
    'Speak to Aris in Varrock',
    'Collect a bucket of water, some bones, and a coin from the Varrock general store',
    'Return to Aris with the items',
    'Go to the Blue Moon Inn and speak to the innkeeper',
    'Go to the basement of the inn and speak to the demon',
    'Use the bucket of water on the demon to defeat it',
    'Speak to Aris to complete the quest',
  ],
  url: 'https://oldschool.runescape.wiki/w/Demon_Slayer',
};

export default DemonSlayer;
