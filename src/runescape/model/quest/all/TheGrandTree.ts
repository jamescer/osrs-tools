import { Skill } from '../../account/Skill';
import { LevelRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const TheGrandTree: Quest = {
  age: 'Fifth Age',
  description: 'Investigate why the Grand Tree of the Tree Gnome Stronghold is dying, following a trail of treachery and deceit.',
  difficulty: QuestDifficulty.Novice,
  id: 113,
  length: QuestLength.Long,
  members: true,
  miniquest: false,
  name: 'The Grand Tree',
  questPoints: 3,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new LevelRequirement(Skill.Agility, 25, false),
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
  series: 'Gnome',
  shortName: 'theGrandTree',

  startLocation: 'King Narnode Shareen, Tree Gnome Stronghold',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/The_Grand_Tree',
};

export default TheGrandTree;
