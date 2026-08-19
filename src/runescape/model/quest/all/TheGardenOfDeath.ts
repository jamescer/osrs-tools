import { QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const TheGardenOfDeath: Quest = {
  age: 'Fifth Age',
  description: 'Help restore a peculiar garden in Lovakengj by tending to its unusual and dangerous magical flora.',
  difficulty: QuestDifficulty.Intermediate,
  id: 1029,
  length: QuestLength.Short,
  members: true,
  miniquest: false,
  name: 'The Garden of Death',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement('Client of Kourend'),
  ],
  rewards: { areas: [], experience: [], items: [], lamps: [], pets: [], points: [], questPoints: 1, unlocks: [] },
  series: 'Twisted Tales',
  shortName: 'theGardenOfDeath',
  startLocation: 'Maledict, Lovakengj',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/The_Garden_of_Death',
};

export default TheGardenOfDeath;
