import { Skill } from '../../account/Skill';
import { QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const ATailOfTwoCats: Quest = {
  age: 'Fifth Age',
  description: 'Help Bob the cat rediscover his past life as a legendary hero while assisting Unferth with his missing cat.',

  difficulty: QuestDifficulty.Intermediate,

  id: 5,

  length: QuestLength.Long,

  members: true,

  miniquest: false,

  // Assign a unique ID if available
  name: 'A Tail of Two Cats',
  // Only quest requirement: Icthlarin's Little Helper
  questPoints: 2,
  recommendations: [
    {
      name: 'Cat',
      note: 'Required to complete the quest.',
      type: 'item',
    },
    {
      name: 'Food and energy potions',
      note: 'Useful for travel and combat.',
      type: 'tip',
    },
  ],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [
    new QuestRequirement("Icthlarin's Little Helper"),
  ],
  rewards: {
    experience: [
      { amount: 2000, skill: Skill.Agility },
      { amount: 2500, skill: Skill.Thieving },
    ],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 2,
    unlocks: [
      { description: 'Ability to turn your cat into a hellcat' },
      { description: 'Ability to obtain Bob the Cat’s collar' },
    ],
  },
  series: 'Dragonkin',
  shortName: 'aTailOfTwoCats',
  startLocation: "Bob the Cat (random location, found via Bob's Brilliant Axes, Burthorpe)",
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/A_Tail_of_Two_Cats',
};

export default ATailOfTwoCats;
