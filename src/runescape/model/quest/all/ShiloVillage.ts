import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const ShiloVillage: Quest = {
  age: 'Fifth Age',
  description:
    'A foul mist and a plague of undead have overtaken Shilo Village. Delve into ancient Karamjan history to stop the queen of the dead and open the village to travellers.',
  difficulty: QuestDifficulty.Experienced,
  id: 98,
  length: QuestLength.Long,
  members: true,
  miniquest: false,
  name: 'Shilo Village',
  questPoints: 2,
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
    new LevelRequirement(Skill.Agility, 32, false),
    new LevelRequirement(Skill.Crafting, 20, false),
    new LevelRequirement(Skill.Smithing, 4, false),
  ],
  rewards: {
    areas: ['Shilo Village'],
    experience: [{ amount: 3875, skill: Skill.Crafting }],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 2,
    unlocks: [{ description: 'Access to Shilo Village and shops' }],
  },
  series: null,
  shortName: 'shiloVillage',

  startLocation: 'Mosol Rei, outside Shilo Village (south Karamja)',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Shilo_Village',
};

export default ShiloVillage;
