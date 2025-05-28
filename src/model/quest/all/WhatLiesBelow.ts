import { Quest, QuestStatus } from '../Quest';
import { LevelRequirement } from '../../Requirement';
import { Skill } from '../../account/Skill';

const WhatLiesBelow: Quest = {
  id: 0,
  name: 'What Lies Below',
  members: true,
  difficulty: 'Intermediate',
  length: 'Medium',
  requirements: [
    new LevelRequirement('Runecraft', 35, false),
  ],
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'whatLiesBelow',
  url: 'https://oldschool.runescape.wiki/w/What_Lies_Below',
  series: null,
  age: '',
  difficultyLevel: 'Intermediate',
  officialDifficulty: 'Intermediate',
  officialLength: 'Medium',
  officialAge: '',
  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [],
    questPoints: 1,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default WhatLiesBelow;
