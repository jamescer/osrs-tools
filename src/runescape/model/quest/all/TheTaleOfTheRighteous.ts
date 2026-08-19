import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';

const TheTaleOfTheRighteous: Quest = {
  age: 'Fifth Age',
  description:
    'Learn the tale of a righteous knight from ancient Kourend and help settle unfinished business. A spiritual story of honor and redemption in the mystical lands.',
  difficulty: QuestDifficulty.Novice,
  id: 120,
  length: QuestLength.Short,
  members: true,
  miniquest: false,
  name: 'Tale of the Righteous',
  questPoints: 1,
  recommendations: [{ name: 'Graceful outfit', note: 'Helpful for Agility sections', type: 'item' }],
  recommendedPrayers: [],
  recommendedSkills: {
    Agility: 16,
  },
  requirements: [new QuestRequirement('Client of Kourend'), new LevelRequirement(Skill.Agility, 16, false)],
  rewards: {
    areas: ['Kourend'],
    experience: [
      { amount: 500, skill: Skill.Agility },
      { amount: 1000, skill: Skill.Prayer },
    ],
    items: [{ name: 'Holy relic' }],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 1,
    unlocks: [{ description: 'Access to restricted area in Kourend' }],
  },
  series: 'Great Kourend',
  shortName: 'taleOfTheRighteous',
  startLocation: 'Kourend Castle grounds',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Tale_of_the_Righteous',
};

export default TheTaleOfTheRighteous;
