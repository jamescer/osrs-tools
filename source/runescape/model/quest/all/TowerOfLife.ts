import { LevelRequirement } from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const TowerOfLife: Quest = {
  age: 'Fifth Age',
  description: 'Investigate a mysterious tower in Taverley where a mad alchemist is performing strange experiments on human bodies. Help put an end to the dark rituals.',
  difficulty: QuestDifficulty.Novice,
  id: 0,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: 'Tower of Life',
  questPoints: 2,
  recommendations: [
    { name: 'Ranged or Magic weapon', type: 'item' },
    { name: 'Food', type: 'item' },
    { name: 'Prayer potions', type: 'item' },
  ],
  recommendedPrayers: [],
  recommendedSkills: {
    Combat: 40,
  },
  requirements: [new LevelRequirement('Construction', 10, false)],
  rewards: {
    areas: ['Taverley'],
    experience: [{ amount: 4000, skill: Skill.Construction }],
    items: [{ name: 'Golem outfit' }],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 2,
    unlocks: [{ description: 'Access to Colossal Dungeon' }],
  },
  series: null,
  shortName: 'towerOfLife',

  startLocation: 'Tower of Life in Taverley, north of Falador Park',
  status: QuestStatus.NotStarted,
  steps: [
    'Enter the Tower of Life and speak to the creatures inside',
    'Navigate through laboratory chambers filled with experimental creatures',
    'Discover the nature of the alchemist experiments by collecting clues',
    'Complete a ritual task using supplies found in the tower',
    'Solve the mystery of the tower construction and purpose',
    'Defeat the embodied creatures guarding the tower secrets',
    'Confront the tower creator and complete the final sequence',
  ],
  url: 'https://oldschool.runescape.wiki/w/Tower_of_Life',
};

export default TowerOfLife;
