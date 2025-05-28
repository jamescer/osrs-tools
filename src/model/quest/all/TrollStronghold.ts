import { Quest, QuestStatus } from '../Quest';
import { QuestRequirement } from '../../Requirement';
import { Skill } from '../../account/Skill';

const TrollStronghold: Quest = {
  id: 0,
  name: 'Troll Stronghold',
  members: true,
  difficulty: 'Experienced',
  length: 'Medium',
  requirements: [
    new QuestRequirement('Death Plateau'),
  ],
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'trollStronghold',
  url: 'https://oldschool.runescape.wiki/w/Troll_Stronghold',
  series: 'Troll',
  age: '',
  difficultyLevel: 'Experienced',
  officialDifficulty: 'Experienced',
  officialLength: 'Medium',
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

export default TrollStronghold;
