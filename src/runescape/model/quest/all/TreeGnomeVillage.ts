import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const TreeGnomeVillage: Quest = {
  age: 'Fifth Age',
  description: 'Protect the Tree Gnome village by defeating invaders and helping the gnomes prepare their defenses.',
  difficulty: QuestDifficulty.Novice,
  id: 125,
  length: QuestLength.Short,
  members: true,
  miniquest: false,
  name: 'Tree Gnome Village',
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: { Combat: 20 },
  requirements: [],
  rewards: {
    areas: [],
    experience: [{ amount: 11450, skill: Skill.Attack }],
    items: [{ name: 'Gnome scimitar' }],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 2,
    unlocks: [
      {
        description: 'Access to The Grand Tree',
        url: 'https://oldschool.runescape.wiki/w/The_Grand_Tree',
      },
    ],
  },
  series: 'Gnome',
  shortName: 'treeGnomeVillage',

  startLocation: 'Tree Gnome Village, northwest of Ardougne',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Tree_Gnome_Village',
};

export default TreeGnomeVillage;
