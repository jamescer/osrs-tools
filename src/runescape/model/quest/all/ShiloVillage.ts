import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const ShiloVillage: Quest = {
  age: 'Fifth Age',
  description: 'A village hidden in the jungles of Karamja has been plagued by a terrible disease. Travel deep into the jungle to find a cure and restore peace to the settlement.',
  difficulty: QuestDifficulty.Experienced,
  id: 98,
  length: QuestLength.Long,
  members: true,
  miniquest: false,
  name: 'Shilo Village',
  questPoints: 3,
  recommendations: [
    { name: 'Machete', type: 'item' },
    { name: 'Combat equipment', type: 'item' },
    { name: 'Food', type: 'item' },
    { name: 'Rope', type: 'item' },
    { name: 'Various keys', type: 'item' },
  ],
  recommendedPrayers: [],
  recommendedSkills: {
    Combat: 40,
  },
  requirements: [
    new QuestRequirement('Jungle Potion'),
    new LevelRequirement('Agility', 32, false),
    new LevelRequirement('Crafting', 20, false),
    new LevelRequirement('Smithing', 4, false),
  ],
  rewards: {
    areas: ['Shilo Village'],
    experience: [
      { amount: 2000, skill: Skill.Crafting },
      { amount: 2000, skill: Skill.Agility },
    ],
    items: [{ name: 'Brimstone key' }],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 3,
    unlocks: [{ description: 'Access to Shilo Village and shops' }],
  },
  series: 'Karamja',
  shortName: 'shiloVillage',

  startLocation: 'Tai Bwo Wannai settlement in Karamja, southeastern jungle',
  status: QuestStatus.NotStarted,
  steps: [
    'Investigate the quarantined village and speak to the inhabitant Chief Handrod',
    'Collect 10 Dueling rings to cross the river or find alternative routes',
    'Navigate through jungle obstacles using supplies and items',
    'Find the required materials: Cure for plague sample collected from village',
    'Locate ancient logs and construct items needed for the cure',
    'Complete a potion-crafting sequence to create the disease cure',
    'Return to cure the infected and complete the restoration of Shilo Village',
  ],
  url: 'https://oldschool.runescape.wiki/w/Shilo_Village',
};

export default ShiloVillage;
