
import { Skill } from '../../account/Skill';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

/**
 * Reference: https://oldschool.runescape.wiki/w/Pandemonium

Start point	Map icon Speak to Will and Anne on the docks of Port Sarim. Show on map
Official difficulty	Novice
Official length	Short
Description	Embark on your first voyage and unlock the Sailing skill.
Requirements
a_squeezer

None
Items required
Hammer (obtainable during the quest)
Saw (obtainable during the quest)
[uncheck all]
Recommended
Fast travel to Port Sarim to start the quest; Teleport to House (Rimmington), skills necklace to Crafting Guild, Rat Pits grouping teleport, amulet of glory to Draynor Village, or explorer's ring 2-4
Enemies to defeat	None

rewards:
1 Quest points Quest point
Sailing 300 Sailing experience
An additional Sailing 100 Sailing experience is gained when delivering the cargo, for a total of 400 experience
Access to the Sailing skill
Access to The Pandemonium
A raft
25 sawmill coupon (wood plank)
2 repair kits
A spyglass


 */


const Pandemonium: Quest = {
  age: '',
  description: '',
  difficulty: QuestDifficulty.Novice,
  id: 274,
  length: QuestLength.Short,
  members: true,
  miniquest: false,
  name: 'Pandemonium',
  questPoints: 1,
  recommendations: [
    { type: 'tip', name: 'Fast travel to Port Sarim to start the quest; Teleport to House (Rimmington)' },
    { type: 'tip', name: 'skills necklace to Crafting Guild' },
    { type: 'tip', name: 'Rat Pits grouping teleport' },
    { type: 'tip', name: 'amulet of glory to Draynor Village' },
    { type: 'tip', name: 'or explorer\'s ring 2-4' },
  ],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
  rewards: {
    areas: ['The Pandemonium'],
    experience: [{ skill: Skill.Sailing, amount: 400 }],
    items: [
      // 'A raft',
      // '25 sawmill coupon (wood plank)',
      // '2 repair kits',
      // 'A spyglass',
    ],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [{description: 'Access to the Sailing skill'}],
  },
  series: '',
  shortName: 'pandemonium',
  startLocation: '',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Pandemonium',


};

export default Pandemonium;
