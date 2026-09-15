import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

/**
 * Reference: https://oldschool.runescape.wiki/w/Fallen_From_Grace
 */

const FallenFromGrace: Quest = {
  age: 'Fifth Age',
  description: 'Help the citizens of an isolated island unlock new training methods and take on a repeatable boss.',
  difficulty: QuestDifficulty.Experienced,
  id: 1052,
  length: QuestLength.Short,
  members: true,
  miniquest: false,
  name: 'Fallen From Grace',
  questPoints: 2,
  recommendations: [
    { name: 'Combat level 75+, Prayer 43+', type: 'level' },
    { name: 'Combat equipment effective against Crush-weak enemies', note: 'For the Mad Angel', type: 'item' },
  ],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement('Pandemonium'),
    new LevelRequirement(Skill.Sailing, 62, false),
    new LevelRequirement(Skill.Crafting, 60, false),
    new LevelRequirement(Skill.Runecraft, 47, false),
    new LevelRequirement(Skill.Mining, 53, false),
  ],
  rewards: {
    areas: ['Wyrmscraig'],
    experience: [
      { amount: 12500, skill: Skill.Sailing },
      { amount: 10000, skill: Skill.Crafting },
      { amount: 5000, skill: Skill.Mining },
      { amount: 5000, skill: Skill.Runecraft },
    ],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 2,
    unlocks: [
      { description: 'Mortimer, a new Slayer Master' },
      { description: 'The Mad Angel, a repeatable boss encounter' },
      { description: 'Golem crafting, a new Crafting minigame' },
      { description: 'Teleportation to Wyrmscraig via necklace of passage, Slayer ring, or Ardeaglais teleport' },
    ],
  },
  series: null,
  shortName: 'fallenFromGrace',
  startLocation: 'Cormac, mayor of Auchrie, Wyrmscraig',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Fallen_From_Grace',
};

export default FallenFromGrace;
