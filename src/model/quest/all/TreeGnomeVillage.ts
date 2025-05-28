import { Quest, QuestStatus } from '../Quest';
import { Skill } from '../../account/Skill';

const TreeGnomeVillage: Quest = {
  id: 0,
  name: 'Tree Gnome Village',
  members: true,
  difficulty: 'Novice',
  length: 'Medium',
  requirements: [],
  questPoints: 2,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'treeGnomeVillage',
  url: 'https://oldschool.runescape.wiki/w/Tree_Gnome_Village',
  series: 'Gnome',
  age: '',
  difficultyLevel: 'Novice',
  officialDifficulty: 'Novice',
  officialLength: 'Medium',
  officialAge: '',
  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [],
    questPoints: 2,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default TreeGnomeVillage;
