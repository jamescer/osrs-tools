import { QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const FamilyPest: Quest = {
  age: 'Fifth Age',
  description:
    'Help the Fitzharmon family deal with a pest infestation in their basement.',
  difficulty: QuestDifficulty.Novice,
  id: 207,
  length: QuestLength.VeryShort,
  members: true,
  miniquest: true,
  name: 'Family Pest',
  questPoints: 0,
  recommendations: [
    { name: 'Combat equipment', type: 'item' },
  ],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement('Family Crest'),
  ],
  rewards: {
    areas: [],
    experience: [],
    items: [],
    lamps: [{ amount: 2500, note: 'Antique lamp granting 2,500 XP in any skill 30+', skillRestriction: 'Any skill level 30+' }],
    pets: [],
    points: [],
    questPoints: 0,
    unlocks: [],
  },
  series: 'Family Crest',
  shortName: 'familyPest',
  startLocation: 'Speak to Dimintheis in south-east Varrock',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Family_Pest',
};

export default FamilyPest;
