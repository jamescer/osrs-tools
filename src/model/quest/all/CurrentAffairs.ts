import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

/**
 * Reference: https://oldschool.runescape.wiki/w/Current_Affairs
 *
Start point	Map icon Start the Quest by speaking to Arhein on the Catherby docks. Show on map
Official difficulty	Novice
Official length	Short
Description	Help Arhein get past some political red tape and unlock the current duck, a useful Sailing tool.
Requirements
a_squeezer

Sailing 22 Sailing  [not boostable] [required to start]
Fishing 10 Fishing  [unknown] [required to start]
Completion of Pandemonium
Items required
Charcoal (obtainable during quest)
50 Coins
[uncheck all]
Recommended
Highly recommended: A boat docked at the Catherby docks - you will be required to sail nearby at the end of the quest
[uncheck all]
Enemies to defeat	None
Rewards
1 Quest points Quest point
Sailing 1,400 Sailing experience
Fishing 1,000 Fishing experience
Access to Sea charting/Current
The current duck
The mayor of Catherby
25 sawmill coupon (oak plank)

 */

const CurrentAffairs: Quest = {
  age: '',
  description:
    'Help Arhein get past some political red tape and unlock the current duck, a useful Sailing tool.',
  difficulty: QuestDifficulty.Novice,
  id: 276,
  length: QuestLength.Short,
  members: true,
  miniquest: false,
  name: 'Current Affairs',
  questPoints: 1,
  recommendations: [
    {
      type: 'tip',
      name: 'Highly recommended: A boat docked at the Catherby docks - you will be required to sail nearby at the end of the quest',
    },
  ],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement('Pandemonium'),
    new LevelRequirement(Skill.Sailing, 22, false),
    new LevelRequirement(Skill.Fishing, 10, false),
  ],
  status: QuestStatus.NotStarted,
  steps: [],
  startLocation: 'Catherby docks - speak to Arhein',
  shortName: 'currentaffairs',
  rewards: {
    experience: [
      { skill: Skill.Sailing, amount: 1400 },
      { skill: Skill.Fishing, amount: 1000 },
    ],
    items: [
      // 'The current duck',
      //  'The mayor of Catherby',
      //  '25 sawmill coupon (oak plank)'
    ],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [{ description: 'Access to Sea charting/Current' }],
  },
  url: 'https://oldschool.runescape.wiki/w/Current_Affairs',
};

export default CurrentAffairs;
