import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const BelowIceMountain: Quest = {
  age: '',
  description:
    "Willow, an energetic archaeologist (perhaps suspiciously so) is hunting for her next big discovery. She believes she has found the entrance to ancient underground ruins found to the west of Ice Mountain. There's a catch though - the entrance is sealed tight and she needs to re-unite her old crew to help her break in. Naturally, she has to stay close to the ruins in order to lay claim to the find, so it falls to you to bring her rag-tag group back together for one last caper and a final big pay-off.Burntof is an old dwarf with a penchant for demolition, Checkal is a well-built lifter of heavy things and Marley is a cunning thief with a knack for disarming traps.Together, they have the talents it will take to gain entry to the secret ruins. But persuading them might not be easy. See, the gang aren't all too keen on working with Willow again, and her intentions might not be as honourable as she claims...",

  difficulty: QuestDifficulty.Novice,

  id: 0,

  length: QuestLength.Short,

  members: true,

  miniquest: false,
  // Assign a unique ID if available
  name: 'Below Ice Mountain',
  questPoints: 1,
  recommendations: [
    {
      name: 'Skills necklace or Battlefront Teleport or fairy ring cir to teleport to the Farming Guild',
      type: 'tip',
    },
    { name: 'Combat equipment to fight a level 82 beast.', type: 'tip' },
  ],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [],
  rewards: {
    areas: [],
    experience: [],
    items: [{ name: 'Coins', quantity: 2000 }],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [
      { description: 'Access to the Ruins of Camdozaal' },
      { description: 'Flex emote' },
      { description: 'The ability to make steak sandwich' },
    ],
  },
  series: null,
  shortName: 'belowIceMountain',

  startLocation: 'Willow on the path south of Ice Mountain',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Below_Ice_Mountain',
};

export default BelowIceMountain;
