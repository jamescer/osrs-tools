import { Skill } from '../../account/Skill';
import { QuestRequirement, LevelRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const BetweenARock: Quest = {
  age: 'Fifth Age',
  description: 'Help the dwarven geologist Rowdy Reynolds uncover the secrets of the keldagrim granite mine and face a powerful golem.',

  difficulty: QuestDifficulty.Experienced,

  id: 9,

  length: QuestLength.Medium,

  members: true,

  miniquest: false,
  // Assign a unique ID if available
  name: 'Between a Rock...',
  questPoints: 2,
  recommendations: [
    {
      name: 'Gold helmet',
      note: 'Required for quest completion.',
      type: 'item',
    },
    {
      name: 'Food and energy potions',
      note: 'Useful for travel and combat.',
      type: 'tip',
    },
  ],
  recommendedPrayers: ['Protect from Melee'],
  recommendedSkills: {
    Defence: 30,
    Mining: 40,
    Smithing: 50,
  },
  requirements: [
    new QuestRequirement('Dwarf Cannon'),
    new QuestRequirement('Fishing Contest'),
    new LevelRequirement(Skill.Defence, 30, true),
    new LevelRequirement(Skill.Mining, 40, true),
    new LevelRequirement(Skill.Smithing, 50, true),
  ],
  rewards: {
    areas: [],
    experience: [
      { amount: 5000, skill: Skill.Defence },
      { amount: 5000, skill: Skill.Mining },
      { amount: 5000, skill: Skill.Smithing },
    ],
    items: [{ name: 'Rune pickaxe' }, { name: 'Gold helmet' }],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 2,
    unlocks: [
      { description: 'Access to the Arzinian Mine (full of gold rocks and gold veins)' },
      { description: 'Ring of wealth can teleport to Dondakan\'s rock' },
    ],
  },
  series: 'Rise of the Red Axe',
  shortName: 'betweenARock',
  startLocation: 'Dondakan the Dwarf, Keldagrim south-west mine',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Between_a_Rock...',
};

export default BetweenARock;
