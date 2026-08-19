import { Skill } from '../../account/Skill';
import { LevelRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const TowerOfLife: Quest = {
  age: 'Fifth Age',
  description:
    'Investigate a mysterious tower in Taverley where a mad alchemist is performing strange experiments on human bodies. Help put an end to the dark rituals.',
  difficulty: QuestDifficulty.Novice,
  id: 124,
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
  requirements: [new LevelRequirement(Skill.Construction, 10, false)],
  rewards: {
    areas: [],
    experience: [
      { amount: 1000, skill: Skill.Construction },
      { amount: 500, skill: Skill.Crafting },
      { amount: 500, skill: Skill.Thieving },
    ],
    items: [{ name: "Builder's costume" }],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 2,
    unlocks: [{ description: 'Access to Creature Creation' }],
  },
  series: null,
  shortName: 'towerOfLife',

  startLocation: 'Effigy, Tower of Life, east of Ardougne Monastery',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Tower_of_Life',
};

export default TowerOfLife;
