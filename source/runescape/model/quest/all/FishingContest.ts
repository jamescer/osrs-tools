import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const FishingContest: Quest = {
  age: 'Third Age',
  description: 'Help a dwarf participate in a fishing contest and prove your fishing skills.',
  difficulty: QuestDifficulty.Novice,
  id: 45,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: 'Fishing Contest',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: { Fishing: 10 },
  requirements: [],
  rewards: {
    areas: [],
    experience: [{ amount: 1500, skill: 'Fishing' }],
    items: [{ name: 'Rod of Fishing' }],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [],
  },
  series: 'Dwarf',
  shortName: 'fishingContest',

  startLocation: 'River Tweed, east of Ardougne',
  status: QuestStatus.NotStarted,
  steps: [
    'Travel to the River Tweed east of Ardougne.',
    'Meet the fishing competition organizer.',
    'Gather fishing equipment for a contestant.',
    'Fish the required fish for the contest.',
    'Participate in the fishing contest.',
    'Conclude the competition and receive your reward.',
  ],
  url: 'https://oldschool.runescape.wiki/w/Fishing_Contest',
};

export default FishingContest;
