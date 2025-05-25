import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';

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
    experience: { Crafting: 4000, Construction: 3200 },
    questPoints: 1,
    items: [],
    areas: [],
    grants: ['3000 coins', 'Access to a tannery in the Kebos Lowlands (speak to Mary to access tanning services)'],
  },
};

export default GettingAhead;
