import { Quest, QuestStatus } from '../Quest';
import { Requirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';

const BelowIceMountain: Quest = {
  id: 0, // Assign a unique ID if available
  name: 'Below Ice Mountain',
  members: true,
  difficulty: QuestDifficulty.Novice,
  length: QuestLength.Short,
  requirements: [],
  questPoints: 1,
  startLocation: 'Willow on the path south of Ice Mountain',
  description:
    "Willow, an energetic archaeologist (perhaps suspiciously so) is hunting for her next big discovery. She believes she has found the entrance to ancient underground ruins found to the west of Ice Mountain. There's a catch though - the entrance is sealed tight and she needs to re-unite her old crew to help her break in. Naturally, she has to stay close to the ruins in order to lay claim to the find, so it falls to you to bring her rag-tag group back together for one last caper and a final big pay-off.Burntof is an old dwarf with a penchant for demolition, Checkal is a well-built lifter of heavy things and Marley is a cunning thief with a knack for disarming traps.Together, they have the talents it will take to gain entry to the secret ruins. But persuading them might not be easy. See, the gang aren't all too keen on working with Willow again, and her intentions might not be as honourable as she claims...",
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'belowIceMountain',
  url: 'https://oldschool.runescape.wiki/w/Below_Ice_Mountain',
  series: null,
  age: '',

  recommendations: [
    'Skills necklace or Battlefront Teleport or fairy ring cir to teleport to the Farming Guild',
    'Combat equipment to fight a level 82 beast.',
  ],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [],
    questPoints: 1,
    items: [],
    areas: [],
    unlocks: [
      { description: '2,000 coins' },
      { description: 'Access to the Ruins of Camdozaal' },
      { description: 'Flex emote' },
      { description: 'The ability to make steak sandwich' },
    ],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default BelowIceMountain;
