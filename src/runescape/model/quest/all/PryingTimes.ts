// Reference: https://oldschool.runescape.wiki/w/Prying_Times

import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

/**
 * Details:
 * Start point	Map icon Steve Beanie on the Pandemonium might be able to help you with prying open crates. Show on map
Official difficulty	Intermediate
Official length	Short
Description	Help Steve Beanie recover some 'pirate treasure' and unlock the crowbar, a useful Sailing tool.
Requirements
a_squeezer

Smithing 30 Smithing
Sailing 12 Sailing  [not boostable] [required to start]
Completion of the following quests:
Pandemonium
The Knight's Sword
One open task slot
Items required
Hammer or Imcando hammer (obtainable during quest)
Steel bar
Redberry pie
Captain's log
[uncheck all]
Recommended
Combat level 10 Combat level
120 coins or ring of charos(a) for four trips via charter ship between The Pandemonium and Port Sarim
Leave your boat docked at Port Sarim if using charter ships
[uncheck all]
Enemies to defeat
Drink troll (level 14) - can be skipped
Ironman concerns
A method to obtain a redberry pie:
Cooking 10 Cooking to cook one. A pie dish can be found in the Varrock Palace kitchen, and redberries can be picked just west of the South-east Varrock mine
Purchased from Romily Weaklax in the Cooks' Guild with Cooking 32 Cooking and a chef's hat
Partial completion of Perilous Moons to purchase a Redberry pie from Yarnio
[uncheck all]

Rewards:
1 Quest points Quest point
Smithing 1,000 Smithing experience
Sailing 800 Sailing experience
Ability to chart forgotten drinks
25 sawmill coupon (oak plank)
Unlimited crowbars from the crate of crowbars
 */
const PryingTimes: Quest = {
  age: '',
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
    new LevelRequirement(Skill.Sailing, 12),
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
