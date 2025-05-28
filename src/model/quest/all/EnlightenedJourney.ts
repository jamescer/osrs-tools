import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';
import { Skill } from '../../account/Skill';

const EnlightenedJourney: Quest = {
  id: 0, // Assign a unique ID if available
  name: 'Enlightened Journey',
  members: true,
  difficulty: 'Intermediate',
  length: 'Short - Long',
  requirements: [], // Skills: quest 20, Firemaking 20, Farming 30, Crafting 36
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'enlightenedJourney',
  url: 'https://oldschool.runescape.wiki/w/Enlightened_Journey',
  series: null,
  age: '',
  difficultyLevel: 'Intermediate',
  officialDifficulty: 'Intermediate',
  officialLength: 'Short - Long',
  officialAge: '',
  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [],
    questPoints: 1,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default EnlightenedJourney;
