import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

/**
 * Reference: https://oldschool.runescape.wiki/w/Prying_Times
 */
const PryingTimes: Quest = {
  age: 'Fifth Age',
  description: 'Help Steve Beanie recover some "pirate treasure" and unlock the crowbar, a useful Sailing tool.',
  difficulty: QuestDifficulty.Intermediate,
  id: 82,
  length: QuestLength.Short,
  members: true,
  miniquest: false,
  name: 'Prying Times',
  questPoints: 1,
  recommendations: [
    { name: 'Combat level 10 Combat level', type: 'tip' },
    {
      name: '120 coins or ring of charos(a) for four trips via charter ship between The Pandemonium and Port Sarim',
      type: 'tip',
    },
    { name: 'Leave your boat docked at Port Sarim if using charter ships', type: 'tip' },
  ],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new LevelRequirement(Skill.Smithing, 30),
    new LevelRequirement(Skill.Sailing, 12, false),
    new QuestRequirement('Pandemonium'),
    new QuestRequirement("The Knight's Sword"),
  ],
  rewards: {
    experience: [
      { amount: 1000, skill: Skill.Smithing },
      { amount: 800, skill: Skill.Sailing },
    ],
    questPoints: 1,
    // items: '25 sawmill coupon (oak plank), Unlimited crowbars from the crate of crowbars',
  },
  shortName: 'pryingTimes',
  startLocation: 'Speak to Steve Beanie on the Pandemonium.',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Prying_Times',
};

export default PryingTimes;
