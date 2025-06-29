import { Quest, QuestStatus } from '../Quest';
import { LevelRequirement, Requirement } from '../../Requirement';
import { Skill } from '../../account/Skill';

const JunglePotion: Quest = {
  id: 0,
  name: 'Jungle Potion',
  members: true,
  difficulty: 'Novice',
  length: 'Short - Medium',
  requirements: [new LevelRequirement('Herblore', 3, false)],
  questPoints: 1,
  startLocation: '',
  description: '',
  steps: [],
  status: QuestStatus.NotStarted,
  miniquest: false,
  shortName: 'junglePotion',
  url: 'https://oldschool.runescape.wiki/w/Jungle_Potion',
  series: 'Karamja',
  age: '',
  difficultyLevel: 'Novice',
  officialDifficulty: 'Novice',
  officialLength: 'Short - Medium',
  officialAge: '',
  recommendedItems: [],
  recommendedSkills: {},
  recommendedPrayers: [],
  rewards: {
    experience: [
      { skill: Skill.Herblore, amount: 775 }
    ],
    questPoints: 1,
    items: [],
    areas: [],
    unlocks: [],
    lamps: [],
    points: [],
    pets: [],
  },
};

export default JunglePotion;
