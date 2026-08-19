import { LevelRequirement } from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const FishingContest: Quest = {
  age: 'Fifth Age',
  description: 'The dwarves guarding the White Wolf Mountain tunnel will only let you pass if you bring them a fishing trophy — first prize at the Hemenster fishing competition.',
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
  requirements: [
    new LevelRequirement(Skill.Fishing, 10, false),
  ],
  rewards: {
    areas: [],
    experience: [{ amount: 2437, skill: Skill.Fishing }],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [],
  },
  series: null,
  shortName: 'fishingContest',

  startLocation: 'Austri east of White Wolf Mountain, or Vestri to the west',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Fishing_Contest',
};

export default FishingContest;
