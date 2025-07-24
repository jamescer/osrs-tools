// URL: https://oldschool.runescape.wiki/w/Shadows_of_Custodia

import { Quest, QuestStatus } from '../../quest/Quest';
import { Requirement } from '../../Requirement';
import { Skill } from '../../account/Skill';

const ShadowsOfCustodia: Quest = {
  id: 0,
  name: 'Shadows of Custodia',
  members: false,
  difficulty: 'Novice',
  length: 'Short',
  requirements: [],
  questPoints: 1,
  startLocation: 'Speak to the Custodian in Lumbridge',
  description: 'Investigate the mysterious shadows appearing in Custodia and help restore peace to the region.',
  steps: [
    'Speak to the Custodian in Lumbridge.',
    'Investigate shadowy disturbances around Custodia.',
    'Uncover the source of the shadows.',
    'Defeat the shadow creature.',
    'Report back to the Custodian.'
  ],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'shadowsOfCustodia',
  url: 'https://oldschool.runescape.wiki/w/Shadows_of_Custodia',
  series: null,
  age: '',
  difficultyLevel: 'Novice',
  officialDifficulty: 'Novice',
  officialLength: 'Short',
  officialAge: '',
  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [
      { skill: Skill.Defence, amount: 250 },
      { skill: Skill.Hitpoints, amount: 250 }
    ],
    questPoints: 1,
    items: [
      { name: 'Custodian’s Token', quantity: 1 }
    ],
    areas: ['Custodia'],
    unlocks: [
      { description: 'Access to the Custodia region' }
    ],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default ShadowsOfCustodia;