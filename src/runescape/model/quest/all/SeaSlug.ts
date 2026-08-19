import { LevelRequirement } from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const SeaSlug: Quest = {
  age: 'Fifth Age',
  description: 'Investigate an attack on the Witchaven fishing platform, where its workers have fallen under the influence of sea slugs.',
  difficulty: QuestDifficulty.Novice,
  id: 93,
  length: QuestLength.Short,
  members: true,
  miniquest: false,
  name: 'Sea Slug',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new LevelRequirement(Skill.Fishing, 30, false),
  ],
  rewards: {
    areas: [],
    experience: [],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [],
  },
  series: 'Temple Knight',
  shortName: 'seaSlug',

  startLocation: 'Caroline, Witchaven',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Sea_Slug',
};

export default SeaSlug;
