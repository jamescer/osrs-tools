import { Skill } from '../../account/Skill';
import { QuestPointRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

/**
 * Reference: https://oldschool.runescape.wiki/w/Wanted!
 */
const Wanted: Quest = {
  age: 'Fifth Age',
  description: 'A wanted man is on the loose. Can you track him down?',
  difficulty: QuestDifficulty.Intermediate,
  id: 132,
  length: QuestLength.Medium,
  members: true,
  miniquest: false,
  name: 'Wanted!',
  questPoints: 1,
  recommendations: [
    { name: 'Combat', quantity: 15, type: 'level' },
    { name: 'Armour and some food', type: 'item' },
    { name: 'Stamina or energy potions', type: 'item' },
  ],
  recommendedPrayers: [],
  recommendedSkills: { Combat: 15 },
  requirements: [
    new QuestPointRequirement(32),
    new QuestRequirement('Recruitment Drive'),
    new QuestRequirement("Black Knights' Fortress"),
    new QuestRequirement('Druidic Ritual'),
    new QuestRequirement('The Lost Tribe'),
    new QuestRequirement('Rune Mysteries'),
    new QuestRequirement('Goblin Diplomacy'),
    new QuestRequirement('Priest in Peril'),
    new QuestRequirement('Enter the Abyss'),
  ],
  rewards: {
    areas: [],
    experience: [{ amount: 5000, skill: Skill.Slayer }],

    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [{ description: 'Access to the armoury of the White Knights (White equipment)' }],
  },
  series: 'Temple Knight',
  shortName: 'wanted',
  startLocation: 'Sir Tiffy Cashien, Falador Park',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Wanted!',
};

export default Wanted;
