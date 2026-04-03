import { Skill } from '../../account/Skill';
import { LevelRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const JunglePotion: Quest = {
  age: 'Third Age',
  description: 'Help a shaman by making a herblore potion to cure a tribe member.',
  difficulty: QuestDifficulty.Novice,
  id: 62,
  length: QuestLength.Short,
  members: true,
  miniquest: false,
  name: 'Jungle Potion',
  questPoints: 1,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [new LevelRequirement('Herblore', 3, false)],
  rewards: {
    areas: [],
    experience: [{ amount: 775, skill: Skill.Herblore }],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [],
  },
  series: 'Karamja',
  shortName: 'junglePotion',

  startLocation: 'Karamja, south of the volcano',
  status: QuestStatus.NotStarted,
  steps: [
    'Travel to Karamja and speak to the jungle shaman.',
    'The shaman tells you about a tribe member who is ill.',
    'Collect the required ingredients: Ardrigal, Sito foil, Volencia moss, and Roecdartis.',
    'Return to the shaman with all ingredients.',
    'The shaman will make you make the potion.',
    'Give the potion to the tribe member.',
  ],
  url: 'https://oldschool.runescape.wiki/w/Jungle_Potion',
};

export default JunglePotion;
