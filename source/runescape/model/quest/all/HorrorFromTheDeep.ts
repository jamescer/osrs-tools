import { Skill } from '../../account/Skill';
import { LevelRequirement, RequirementType } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const agilityRequirement: LevelRequirement = {
  boostable: true,
  description: '',
  level: 35,
  skillName: 'agility',
  type: RequirementType.Level,
};

const HorrorFromTheDeep: Quest = {
  age: 'Fifth Age',
  description: 'A horrifying creature has emerged from the deep. Help defeat it to protect the shores and unlock ancient barrow dungeons.',
  difficulty: QuestDifficulty.Intermediate,
  id: 0,
  length: QuestLength.Short,
  members: true,
  miniquest: false,
  name: 'Horror from the Deep',
  questPoints: 2,
  recommendations: [
    { name: 'Combat equipment', note: 'Melee, ranged, and magic', type: 'item' },
    { name: 'Food', note: 'Lobsters or better recommended', type: 'item' },
    { name: 'Prayer potions', note: 'Optional but strongly recommended', type: 'item' },
  ],
  recommendedPrayers: ['Protect from Magic'],
  recommendedSkills: { Magic: 40, Ranged: 40, Melee: 40 },
  requirements: [agilityRequirement],
  rewards: {
    areas: ['Barrows access'],
    experience: [
      { amount: 4662, skill: Skill.Magic },
      { amount: 4662.5, skill: Skill.Ranged },
      { amount: 4662.5, skill: Skill.Strength },
    ],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 2,
    unlocks: [
      {
        description: 'Access to Barrows dungeon',
        url: 'https://oldschool.runescape.wiki/w/Barrows',
      },
    ],
  },
  series: 'Fremennik',
  shortName: 'horrorFromTheDeep',

  startLocation: 'Lighthouse, northeast of Morytania',
  status: QuestStatus.NotStarted,
  steps: [
    'Travel to the Lighthouse northeast of Morytania.',
    'Speak to a lighthouse keeper.',
    'Learn of a creature threatening the coast.',
    'Venture to the cavern beneath the lighthouse.',
    'Encounter the deep sea creature.',
    'Defeat the creature using combat.',
    'Return to collect your reward.',
  ],
  url: 'https://oldschool.runescape.wiki/w/Horror_from_the_Deep',
};

export default HorrorFromTheDeep;
