// URL: https://oldschool.runescape.wiki/w/Shadows_of_Custodia

import { Skill } from '../../account/Skill';
import { Quest, QuestStatus } from '../../quest/Quest';
import { QuestDifficulty, QuestLength } from '../enums';

const ShadowsOfCustodia: Quest = {
  age: '',
  description:
    'Investigate the mysterious shadows appearing in Custodia and help restore peace to the region.',
  difficulty: QuestDifficulty.Novice,
  id: 0,
  length: QuestLength.Short,
  members: false,
  miniquest: false,
  name: 'Shadows of Custodia',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
  rewards: {
    areas: ['Custodia'],
    experience: [
      { amount: 250, skill: Skill.Defence },
      { amount: 250, skill: Skill.Hitpoints },
    ],
    items: [{ name: 'Custodian’s Token', quantity: 1 }],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [{ description: 'Access to the Custodia region' }],
  },
  series: null,
  shortName: 'shadowsOfCustodia',

  startLocation: 'Speak to the Custodian in Lumbridge',
  status: QuestStatus.NotStarted,
  steps: [
    'Speak to the Custodian in Lumbridge.',
    'Investigate shadowy disturbances around Custodia.',
    'Uncover the source of the shadows.',
    'Defeat the shadow creature.',
    'Report back to the Custodian.',
  ],
  url: 'https://oldschool.runescape.wiki/w/Shadows_of_Custodia',
};

export default ShadowsOfCustodia;
