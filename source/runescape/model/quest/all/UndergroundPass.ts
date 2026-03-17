import { Skill } from '../../account/Skill';
import { LevelRequirement, QuestRequirement } from '../../Requirement';
import { QuestDifficulty, QuestLength } from '../enums';
import { Quest, QuestStatus } from '../Quest';
const UndergroundPass: Quest = {
  age: '',
  description: '',
  difficulty: QuestDifficulty.Experienced,
  id: 0,
  length: QuestLength.Long,
  members: true,
  miniquest: false,
  name: 'Underground Pass',
  questPoints: 2,
  recommendations: [],
  recommendedPrayers: [],
  recommendedSkills: {},
  requirements: [new QuestRequirement('Biohazard'), new LevelRequirement('Ranged', 25, false)],
  rewards: {
    areas: [],
    experience: [
      { amount: 3000, skill: Skill.Agility },
      { amount: 13000, skill: Skill.Ranged },
      { amount: 40, skill: Skill.Magic },
    ],
    items: [],
    lamps: [],
    pets: [],
    points: [],
    questPoints: 2,
    unlocks: [],
  },
  series: 'Elf',
  shortName: 'undergroundPass',

  startLocation: '',
  status: QuestStatus.NotStarted,
  steps: [],
  url: 'https://oldschool.runescape.wiki/w/Underground_Pass',
};

export default UndergroundPass;
