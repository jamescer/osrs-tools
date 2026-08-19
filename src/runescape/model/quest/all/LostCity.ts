import { Skill } from '../../account/Skill';
import { LevelRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const LostCity: Quest = {
  age: 'Fifth Age',
  description: 'Find the legendary lost city of Zanaris, hidden somewhere in Lumbridge Swamp.',
  difficulty: QuestDifficulty.Intermediate,
  id: 65,
  length: QuestLength.Short,
  members: true,
  miniquest: false,
  name: 'Lost City',
  questPoints: 3,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new LevelRequirement(Skill.Crafting, 31, true),
    new LevelRequirement(Skill.Woodcutting, 36, true),
  ],
  rewards: {
    areas: ['Zanaris'],
    experience: [],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 3,
    unlocks: [
      { description: 'Access to Zanaris' },
      { description: 'Ability to buy and wield dragon longswords and dragon daggers (60 Attack required)' },
    ],
  },
  series: null,
  shortName: 'lostCity',

  startLocation: 'Warrior, northwest corner of Lumbridge Swamp',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Lost_City',
};

export default LostCity;
