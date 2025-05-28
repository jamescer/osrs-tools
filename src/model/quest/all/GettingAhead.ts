import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';
import { Skill } from '../../account/Skill';

const GettingAhead: Quest = {
  id: 0,
  name: 'Getting Ahead',
  members: true,
  difficulty: 'Intermediate',
  length: 'Short',
  requirements: [],
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'gettingAhead',
  url: 'https://oldschool.runescape.wiki/w/Getting_Ahead',
  series: 'Twisted Tales',
  age: '',
  difficultyLevel: 'Intermediate',
  officialDifficulty: 'Intermediate',
  officialLength: 'Short',
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

export default GettingAhead;
