import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus, RecommendationType } from '../Quest';

/**
 * Reference: https://oldschool.runescape.wiki/w/What_Lies_Below
 */
const WhatLiesBelow: Quest = {
  age: 'Fifth Age',
  description:
    "A travelling trader has been stranded south of Varrock after his cart was attacked by local outlaws. He needs the help of a hero to recover his lost documents, but that's not all... The Varrock Palace Secret Guard (VPSG) are on the trail of treacherous dealings with the Monks of Zamorak. Will you be able to help the VPSG and uncover what lies below?",
  difficulty: QuestDifficulty.Intermediate,
  id: 135,
  leadDeveloper: 'Danny J',
  length: QuestLength.Short,
  members: true,
  miniquest: false,
  name: 'What Lies Below',
  questPoints: 2,
  recommendations: [
    { name: '30+ Combat level', type: RecommendationType.Tip },
    { name: 'Weapon, armour, and some food', type: RecommendationType.Tip },
    { name: 'Fast travel to several locations around Varrock', type: RecommendationType.Tip },
    { name: 'Bronze pickaxe to avoid going into the Wilderness', type: RecommendationType.Item },
  ],
  recommendedPrayers: [],
  recommendedSkills: { Combat: 30, Mining: 42 },
  releaseDate: '27 March 2007',
  requirements: [new QuestRequirement('Rune Mysteries'), new LevelRequirement(Skill.Runecraft, 35, false)],
  rewards: {
    areas: [],
    experience: [],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 2,
    unlocks: [],
  },
  series: null,
  shortName: 'whatLiesBelow',
  startLocation: 'South of Varrock',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/What_Lies_Below',
};

export default WhatLiesBelow;
